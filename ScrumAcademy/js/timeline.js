// DOM element where the Timeline will be attached
// var container = document.getElementById('container1');
// var container2 = document.getElementById('container2');
//
// // Create a DataSet (allows two way data-binding)
// var items = new vis.DataSet([
//     {id: 1, content: 'Add timeline', start: '2017-11-20'},
//     {id: 2, content: 'Add Start page', start: '2017-11-14'},
//     {id: 3, content: 'New person', start: '2017-11-18'},
//     {id: 4, content: 'item 4', start: '2017-11-16', end: '2013-04-19'},
//     {id: 5, content: 'item 5', start: '2017-11-25'},
//     {id: 6, content: 'item 6', start: '2017-11-27'}
// ]);
//
// // Configuration for the Timeline
// var options = {};
//
// // Create a Timeline
// var timeline = new vis.Timeline(container, items, options);
//
// var timeline2 = new vis.Timeline(container2, items, options);

$("#timelineConnected").hide();
createPersonWithTimeline();

$("#showPersonsTimeline").click(function () {
    $("#timelineConnected").hide();
    $("#timelinePersons").show();
});

$("#showConnectedTimeline").click(function () {
    $("#timelinePersons").hide();
    $("#timelineConnected").show();
});

function createPersonWithTimeline() {

    var jsonTimelineMembers = $.getJSON("./text/members/team_1.json", function (json) {
        var counterPersons = 8, // bo max 9 czlonkow w Teamie Scrumowym
            container = null, // uchwyt do diva aby dodac timeline

            items = null,
            numberOfEvents = 0, // liczba wydarzen u daengo uzytkownika
            //dane wydarzenia
                nameEvent = "",
                startEvent = "",
                endEvent = "",
                descriptionEvent = "",
                tableWithItem = [{}],// pobrane wydarzenia z jsona od danej osoby
                tableWithAllItem = [{}], // wszytskie Itemy/Eventy razem do laczonego timeline
                counterToTableWithAllItem = 0,
            options = {},

            nameMainContainerPerson = null,// zmienna z nazwa id diva głownego cala zawatroscia timelnie czlonak Temau -> <div class="timelinePerson" id="timelinePerson_1">
            nameContainerPersonWithVis = null,// zmienna z nazwa id diva z timelinem <div id="container_1"></div> // nazwa kontenera w ktorym bedzie timeline // z id np container_1
            allContentHtml = null, // zmeinna z cala zawartoscia do wklejenia do diva // koncowy produkt
            positionPerson = null, // pozycja w grupie osoby
            namePerson = null, // imie osoby
            surnamePerson = null, //nazwisko osoby
            testedPerson = null; // czy osoba jest aktywna w grupie // jezeli 3 osoby sa w calym temamie tylko te osoby n=beda aktywne

        // na wszelki wielki czyscimy zawartosc kontenera z timeline
        $('#timelinePersons').html("");
        $('#timelineConnected').html("");
        // tak bedzie wygladac  przykladowy, pojedynczy kontener z linia czasu i opisem dla jednej osoby
        // <div class="timelinePerson" id="timelinePerson_1">
        //         <div class="timelniePersonDestignation"> Czlonek zespolu </div>
        //         <div class="timelineNamePerson"> </div>-
        //         <div id="container_1"> tu bedzie imeline z datami </div>
        // </div>

    //DLA ZAKLADKI Z LINIAMI CZASU DLA POSCZEGOLNYCH OSOB OSOBNO

        // petla po wszytskich czlonkach Teamu
        for(var i=0; i < counterPersons; i++){
            testedPerson = json.teamMembers[i].active; // czy osoba jest aktywna
            // alert(testedPerson);
            // wyswietlamy dane da wszystkich czlonkow jesli sa aktywni
            if (testedPerson == "on") {
                // Main container
                nameMainContainerPerson = "timelinePerson_" + (i);
                allContentHtml = "<div class=\"timelinePerson\" id='" + nameMainContainerPerson + "'>";

                // container z pozycja w grupie
                positionPerson = json.teamMembers[i].position;
                allContentHtml += "<div class=\"timelniePersonDestignation\">" + positionPerson + ":</div>";

                // container z imieniem i nazwiskiem osoby
                namePerson = json.teamMembers[i].name;
                surnamePerson = json.teamMembers[i].surname;
                allContentHtml += "<div id=\"timelineNamePerson\"> " + namePerson + " " + surnamePerson + "</div>";

                // container na timeline osoby
                nameContainerPersonWithVis = "container_" + (i) ;
                allContentHtml += "<div id=\""+ nameContainerPersonWithVis +"\"></div>";

                $('#timelinePersons').append(allContentHtml);
                // alert(allContentHtml);

                // tworzenie timeline
                container = document.getElementById(nameContainerPersonWithVis);

                // for po wszystkich eventach danej osoby
                numberOfEvents = json.teamMembers[i].events.length;
                // alert(numberOfEvents);
                for(var j = 0; j < numberOfEvents; j++ ){
                    // odczytujemy nazwe wydarzenia
                    nameEvent = json.teamMembers[i].events[j].nameEvent;
                    // data poczatkowa
                    startEvent = json.teamMembers[i].events[j].start;
                    // data koncowa
                    endEvent = json.teamMembers[i].events[j].end;
                    // opis
                    descriptionEvent = json.teamMembers[i].events[j].content;

                    //np {id: 1, content: 'Add timeline', start: '2017-11-20'}

                    tableWithItem[j] = {content: nameEvent, start: startEvent, end: endEvent};
                    // alert(tableWithItem[j].content);

                    //tu wkladamy eventy do tablicy ze wszystkimi eventami
                    tableWithAllItem[counterToTableWithAllItem] = {content: (namePerson + " "+ surnamePerson + ": " + nameEvent), start: startEvent, end: endEvent};
                    counterToTableWithAllItem++;
                }
                items = new vis.DataSet(tableWithItem);
                // style = {color: "#F8FBFB",background: "497F7F"};
                options= {
                    clickToUse: true,
                    orientation : 'top'
                };
                var timeline = new vis.Timeline(container, items, options);
                items = null;
                options=null;
                container = null;
                tableWithItem= [{}];
                // szybsze od typowego foreach
                // for (var n = 0, len = tableWithItem.length; n < len; n++) {
                //     tableWithItem[i] = {};
                // }
            }
        }
        var containerAll = document.getElementById("timelineConnected"),
            optionsAll = {
                height: '60%',
                width : '90%',
                clickToUse: true, // zeby kontrolowac dana linie czasu trzeba kliknac
                // configure: true,
                orientation : "top",
                editable : true,
                margin : {
                    item : 40
                }

            };
        var timelineAll = new vis.Timeline(containerAll, tableWithAllItem, optionsAll);



    // DLA ZAKLADKI Z POLACZONA LINIA CZASU - WSZYSTKIE EVENTY RAZEM


    });

}