function wyswietl_tabele(ilosc_towarow) {
    document.getElementById("tabela_towarow_div").style.display = "";

    var nazwa_t = document.forms['formularz1']['nazwa_towaru'].value;
    var kod_t = document.forms['formularz1']['kod_towaru'].value;
    var cena_netto_t = document.forms['formularz1']['cena_netto'].value;
    var stawka_vat_t = document.forms['formularz1']['stawka_vat'].value;
    var cena_brutto_t = document.forms['formularz1']['cena_brutto'].value;
    var kategoria_t = document.forms['formularz1']['kategoria_towarowa'].value;
    var opcje_t = "";

    var x = document.forms['formularz1']['inlineCheckbox'];

    for(var i=0;i<4;i++){
        if(x[i].checked){
            opcje_t = opcje_t + x[1].value;
        }
    }


    //var opcje_t = document.formularz1.name_checkbox.length; // document.forms.formularz1.opcje_towaru_zaznaczone.checked;
    var ocena_t = document.forms['formularz1']['ocena_t'].value;

    //uchwyt do tabeli
    var tabela = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0]; //.getElementsByTagName("tbody")[0];

    //nowy wiersz
    var newRow = tabela.insertRow(0);
    newRow.id = ilosc_towarow;

    //checkbox do zaznaczania
    var newCell0 = newRow.insertCell(0);
    var nazwa= ilosc_towarow; // "produkt_nr_"+ilosc_towarow;
    newCell0.innerHTML = '<input type="checkbox" value="'+ ilosc_towarow + '" id="zaznaczony_produkt" name="' + nazwa + '">';

    // wprowadzanie danych do wiersza
    var newCell1 = newRow.insertCell(1);
    newCell1.innerHTML = nazwa_t;

    var newCell2 = newRow.insertCell(2);
    newCell2.innerHTML = kod_t;

    var newCell3 = newRow.insertCell(3);
    newCell3.innerHTML = cena_netto_t;

    var newCell4 = newRow.insertCell(4);
    newCell4.innerHTML = stawka_vat_t;

    var newCell5 = newRow.insertCell(5);
    newCell5.innerHTML = cena_brutto_t;

    var newCell6 = newRow.insertCell(6);
    newCell6.innerHTML = kategoria_t;

    var newCell7 = newRow.insertCell(7);
    newCell7.innerHTML = opcje_t;

    var newCell8 = newRow.insertCell(8);
    newCell8.innerHTML = ocena_t;


    // sortowanie tabeli z js/tablesorter
    $(document).ready(function()
        {
            $("#tabela_towarow_table").tablesorter();
        }
    );


    tabela_do_cookies();

    //element.insertRow - Metoda wstawia nowy wiersz w tabeli.
//e.insertCell - Metoda wstawia nową komórkę do wiersza tabeli i zwraca odwołanie do komórki.
//e.appendChild(dziecko) - wstawia określony węzeł na koniec listy dzieci określonego rodzica.
}


//sortowanie tabeli po wyborze z listy
function sortowanie_tabeli()
{
    numerowanie();

    var wybor = document.forms['formularz1']['sortowanie_select'].value; // pobranie value opcji wybranej z listy

    switch(wybor){
        case "0":
            //to brak akcji
            //alert("Wybierz typ sortowania");
            break;
        case "1":
            //cena od najniższej
            //alert("swich case1 function sortowanie_tabeli")
            $("#tabela_towarow_table").trigger("sorton", [ [[5,0]] ]);
            break;
        case "2":
            //cena od najwyższej
            $("#tabela_towarow_table").trigger("sorton",[ [[5,1]] ]);
            break;
        case "3":
            //ocena od najniższej
            $("#tabela_towarow_table").trigger("sorton",[ [[8,0]] ]);
            break;
        case "4":
            //ocena od najwyższej
            $("#tabela_towarow_table").trigger("sorton",[ [[8,1]] ]);
            break;
        case "5":
            //nazwa od A
            $("#tabela_towarow_table").trigger("sorton", [ [[1,0]] ]);
            break;
        case "6":
            //nazwa od Z
            $("#tabela_towarow_table").trigger("sorton", [ [[1,1]] ]);
            break;
    }


    //jezelei wybierzemy opcje
    //to tworzymy zmienna ktora wybiera ktora kolumna ma byc posotrowana i jak
    //    ..
}

