function usun_towar(){
    $( "#usuwanie_towarow_div" ).dialog( {
            buttons:{
                "Tak":function () {
                    $(this).dialog("close");
                    usun_towar_tak();
                    //alert("Towar został usunięty!");
                },
                "Nie":function () {
                    $(this).dialog("close");
                    //alert("Produkty nie zostały usunięte!");
                }
            }
    } );
}

function usun_towar_tak(){

     //numerowanie();
     zaznaczone = $("input[id='zaznaczony_produkt']:checked");
     var ilosc_towarow_zaznaczonych = zaznaczone.length;

     for(var i=0;i < ilosc_towarow_zaznaczonych;i++){
        /*
             var nazwa_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[1].innerHTML;
             var kod_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[2].innerHTML;
             var cena_netto_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[3].innerHTML;
             var stawka_vat_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[4].innerHTML;
             var cena_brutto_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[5].innerHTML;
             var kategoria_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[i].value].cells[6].innerHTML;
             //var opcje_t;
             //var ocena_t;
        */

        $("table").trigger("update"); //odswierzanie wszystkich tabel
        var produkt_zaznaczony = zaznaczone[i].value;
        //var wiersz_do_usuniecia = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[produkt_zaznaczony];
        var wiersz_do_usuniecia = document.getElementById(zaznaczone[i].value);

         wiersz_do_usuniecia.parentNode.removeChild(wiersz_do_usuniecia);

     }

    numerowanie();
    $("table").trigger("update");

    tabela_do_cookies();
}
