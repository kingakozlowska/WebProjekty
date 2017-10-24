var ilosc_towarow_w_koszyku=0;

function dodaj_do_koszyka(){

    dodaj_towary_do_koszyka();

    $( "#koszyk_komunikat_div" ).dialog( {
        width: 450,

        buttons:{
            "Kup":function () {
              kup_produkty();
              $(this).dialog("close");
              alert("Dziekujemy za zakupy! Produkty w drodze!");
                tabela_do_cookies_koszyk();
            },
            "OK":function () {
                $(this).dialog("close");
                tabela_do_cookies_koszyk();
            }
        }

    } );
}

function dodaj_towary_do_koszyka() {

    zaznaczone = $("input[id='zaznaczony_produkt']:checked");
    var ilosc_towarow_zaznaczonych = zaznaczone.length;

    for(var i=0;i < ilosc_towarow_zaznaczonych;i++) {

        $("table").trigger("update");

        //uchwyt do tabeli
        var tabela = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0];
        var produkt_zaznaczony = zaznaczone[i].value;

        nazwa_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[produkt_zaznaczony].cells[1].innerHTML;
        cena_brutto_t =document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[produkt_zaznaczony].cells[5].innerHTML;


        //nowy wiersz
        var newRow = tabela.insertRow(0);
        newRow.id = ilosc_towarow;

        // wprowadzanie danych do wiersza
        var newCell1 = newRow.insertCell(0);
        newCell1.innerHTML = nazwa_t;

        var newCell2 = newRow.insertCell(1);
        newCell2.innerHTML = cena_brutto_t;

        var newCell3 = newRow.insertCell(2);
        newCell3.innerHTML = '<input type="text" id="ilosc_towaru_'+ ilosc_towarow_w_koszyku +'" value="1" onblur="wyliczanie_kosztu_calkowitego()">';
        ilosc_towarow_w_koszyku++;

        // sortowanie tabeli z js/tablesorter
        $(document).ready(function () {
                $("#tabela_koszyk_table").tablesorter();
            }
        );
        tabela_do_cookies_koszyk();

    }

}


function identyczny_produkt_koszyk() {
    zaznaczone = $("input[id='zaznaczony_produkt']:checked");
    var ilosc_towarow_zaznaczonych = zaznaczone.length;
    var tabela = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0];
    var flaga=0;


if(tabela.rows.length != 0) {
    for (var i = 0; i < ilosc_towarow_zaznaczonych; i++) {
        for (var j = 0; j < tabela.rows.length; j++) {
            var produkt_value = zaznaczone[i].value;
            var produkt_zaznaczony = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[produkt_value].cells[1].innerHTML;
            var produkt_w_tabeli = tabela.rows[j].cells[0].innerHTML;
            if(produkt_zaznaczony == produkt_w_tabeli){
                alert("Produkt "+ produkt_zaznaczony+ " juz jest w koszyku.");
                flaga = 1;
            }
            //alert(produkt_zaznaczony+" "+produkt_w_tabeli);
        }
    }
    if(flaga == 0){
        dodaj_towary_do_koszyka();
    }
}
else {
    dodaj_towary_do_koszyka();
}
}

function wyswietl_koszyk(){
    $( "#koszyk_komunikat_div" ).dialog( {
        width: 450,

        buttons:{
            "Kup":function () {
                kup_produkty();
                $(this).dialog("close");
                alert("Dziekujemy za zakupy! Produkty w drodze!");
                tabela_do_cookies_koszyk();
            },
            "OK":function () {
                $(this).dialog("close");
                tabela_do_cookies_koszyk();
            }
        }
    } );
}

function kup_produkty() {
    //usun produkty z tabeli koszyk
    $("#tabela_produktow_tbody").empty();
    ilosc_towarow_w_koszyku = 0;
    tabela_do_cookies_koszyk();
}

function wyliczanie_kosztu_calkowitego(){


    var koszt_suma=0;
    var tabela = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0];
    var cena_brutto=0;
    var ilosc=0;

    for(var i=0;i < tabela.rows.length;i++){
        cena_brutto = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0].rows[i].cells[1].innerHTML;
        //ilosc = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0].rows[i].cells[2].innerHTML;

        var id_lsztuk = tabela.rows[i].cells[2].innerHTML.split('id="')[1];
        var id = id_lsztuk.split('" val')[0];
        ilosc =document.getElementById(id).value;

        koszt_suma+= cena_brutto * ilosc;
    }

    var dostawa_koszt =  document.getElementById("wybor_dostawa").value;
    var d_koszt;

    if(dostawa_koszt == "Poczta - 12 zł"){
        d_koszt = 12;
    }
    else if(dostawa_koszt == "DHL - 15 zł"){
        d_koszt = 15;
    }
    else if(dostawa_koszt == "Odbiór osobisty - 0 zł"){
        d_koszt = 0;
    }

    koszt_suma+= d_koszt;

    // nie ma funkcji do ucinania po przecinku wiec rozszezamy aktualna
    Math.decimal = function(n, k)
    {
        var factor = Math.pow(10, k+1);
        n = Math.round(Math.round(n*factor)/10);
        return n/(factor/10);
    };

    koszt_suma = Math.decimal(koszt_suma, 2);

    document.getElementById("koszt_calkowity").value = koszt_suma + " zł";
    tabela_do_cookies_koszyk();

}