/**
 * Created by mac on 25/10/2017.
 *
 * pobieranie danych z jsona i wyswietlanie ich - Słownik
 *
 */

var chosenLetter = null;


// Wyswietlanie hasel po nacisnieciu wybranej litery z alfabetu
$("#capitalLetterDictionary > b").click(function () {
    chosenLetter = $(this).html();
    chosenLetter = chosenLetter.toString();
    chosenLetter = chosenLetter.charAt(0);
    // alert(chosenLetter);

    var jsonDictionary = $.getJSON("./text/tutorial/dictionary.json", function (json) {

    var testedLetter, // aktualnie sprawdzana litera
        counterAlphabet=24; //dlugosc alfabetu

       for (var i=0; i < counterAlphabet;i++){ // for po calym alfabecie
           testedLetter = json.letters[i].letter;

           testedLetter = testedLetter.toString();
           testedLetter = testedLetter.charAt(0);

           // alert(testedLetter + " " + chosenLetter);

           if(testedLetter == chosenLetter){ // szukamy wybrana litere
               var  numberOfResults = json.letters[i].definitions.length, // ilosc znalezionych naglowkow definicji
                    capitions="", // zmienna na zawartosc naglowkow do <b> </b>
                    lineCounter = 0,  // po 3 wyniki w kazdej lini 0,1,2
                    // newLine=0,
                    numberOfLine=0; // numer lini, kazda linia to nowy div, kazdy div zawiera po 3 hasla ze slownika
               $("#captionsDefinitionsDictionary").html("");


               // wklejamy naglowki do kontenera + tworzymy divy na wyswietlenie definicji w przypadku konca lini
               for(var j = 0; j < numberOfResults; j++) {
                       if(lineCounter <= 1) {
                           capitions = '<b id="word_'+j+'">' + json.letters[i].definitions[j].haslo + '</b>';
                           $("#captionsDefinitionsDictionary").append(capitions);
                           lineCounter++;
                       }
                       else{
                           numberOfLine = parseInt(j/3);
                           capitions = '<b id="word_'+j+'">' + json.letters[i].definitions[j].haslo + '</b></br><div id="lineWithDefinition_'+numberOfLine+'" class="contenerWithDefinitionDictionary"></div>';
                           $("#captionsDefinitionsDictionary").append(capitions);
                           lineCounter=0;
                       }
               }


               // jezeli jest mniej niz 3 definicje dodaj i tak diva w kotrym beda sie wyswietlac definicje
               var isIntiger = numberOfResults/3- parseInt(numberOfResults/3);
               if(numberOfResults < 3){
                   capitions = '<div id="lineWithDefinition_'+numberOfLine+'" class="contenerWithDefinitionDictionary"></div>';
                   $("#captionsDefinitionsDictionary").append(capitions);
               }
               else if(numberOfResults > 3 && isIntiger != 0 ){
                   capitions = '<div id="lineWithDefinition_'+(numberOfLine+1)+'" class="contenerWithDefinitionDictionary"></div>';
                   $("#captionsDefinitionsDictionary").append(capitions);

               }
               // dodac ifa ktory po ostatniej lini doda diva z ostatnim kontenerem na definicje
           }
       }

        // wyswietlanie definicji po nacisnieciu wybranego hasla
        $('#captionsDefinitionsDictionary > b').click(function () {

            // jesli pokazane jakies inne definicje to je ukryj
            for(var b=0; b < j; b+=3) {
                var couterLine = parseInt(b/3);
                var line = "lineWithDefinition_"+couterLine;
                var x = document.getElementById(line).getAttribute("style");
                //jesli element istnieje posiada style, wiec w tedy go trzeba ukryc
                if( x ) {
                    document.getElementById(line).style = "display: none;";
                }
            }

            var lenghtIdDefinition = this.id.length;
            var idDefinition = null; // numer wybranej definicji 0..n

            // spawdzamy jakie dlugie jest id np jesli id=word_145 to idDefinition=145
            // idDefinition to numer wybranej definicji
            if(lenghtIdDefinition = 6){ idDefinition = this.id.slice(5); }
            else if(lenghtIdDefinition = 7){ idDefinition = this.id.slice(5,6); }
            else if(lenghtIdDefinition = 8) { idDefinition = this.id.slice(5,7); }
            else if(lenghtIdDefinition = 9){ idDefinition = this.id.slice(5,8); }
            // alert("wybrales definicje numer " + idDefinition);

            // wyciagamy z jsona definicje
            for(var a=0;a < counterAlphabet;a++) {
                if(chosenLetter == json.letters[a].letter) {
                    // jezeli wybralismy pierwsza definicje w pierwszej linii to definicje wysmietaja sie w divie 0 a jesli nie to sprawdzamy ktora to linia
                    var numberLine = 0;
                    // okreslamy numer lini do wyswietleni odpowiedniego diva
                    if(idDefinition >= 3){
                        numberLine = parseInt(idDefinition/3); // ilosc definicji przed wybrana definicja przez 3 + obcinam liczby po przecinku
                    }
                    var lineIdName = "lineWithDefinition_"+numberLine;
                    document.getElementById(lineIdName).style = "display: block; "; // wyswietlanie diva z definicja
                    // wprowadzenie do diva zawartosci (def. tytul, zrodlo itp to co w jsonie)
                    document.getElementById(lineIdName).innerHTML = "<div class='chosenCaptionDescriptionDictionary'>"+ json.letters[a].definitions[idDefinition].haslo + "</div></br><div class='chosenDescriptionDictionary'>" + json.letters[a].definitions[idDefinition].definicja + "</div><div class='sourceOfDefinitionDictionary'>Źródło: " + json.letters[a].definitions[idDefinition].zrodlo +"</div>";
                }
            }
        });
    });
});

// alert(chosenLetter);


