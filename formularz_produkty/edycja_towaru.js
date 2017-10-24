var zaznaczone = "";

//poprawienie numerowania towarow
function numerowanie(){

    ilosc_towarow = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows.length;
    var checkboxy = $("input[id='zaznaczony_produkt']");

    for(var i=0;i < ilosc_towarow;i++){
        var j = i;//++i;

        //alert(checkboxy[j].value);
        checkboxy[i].value = j;

        //var a=document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[i].id;
        //alert(a);
        document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[i].id = j;
    }
}

function edytuj_towar() {

    numerowanie();

    zaznaczone = $("input[id='zaznaczony_produkt']:checked");


    if(!zaznaczone[1] && zaznaczone[0]) {

        document.getElementById("edycja_towarow_div").style.display = "";

        var nazwa_t =       document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[1].innerHTML;
        var kod_t =         document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[2].innerHTML;
        var cena_netto_t =  document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[3].innerHTML;
        var stawka_vat_t =  document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[4].innerHTML;
        var cena_brutto_t = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[5].innerHTML;
        var kategoria_t =   document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0].rows[zaznaczone[0].value].cells[6].innerHTML;
        //var opcje_t;
        //var ocena_t;

        document.forms['formularz1']['nazwa_towaru'].value = nazwa_t;
        document.forms['formularz1']['kod_towaru'].value = kod_t;
        document.forms['formularz1']['cena_netto'].value = cena_netto_t;
        document.forms['formularz1']['stawka_vat'].value = stawka_vat_t;
        document.forms['formularz1']['cena_brutto'].value = cena_brutto_t;
        document.forms['formularz1']['kategoria_towarowa'].value = kategoria_t;


        //document.forms['formularz1']['nazwa_towaru'].value;

    }else if(!zaznaczone[0]){
        alert("Zaznacz jakiś produkt do edycji!");
    }
    else
    {
        alert("Mozesz edytować na raz tylko jeden produkt");
    }


}

function zapisz_edycje() {

    walidacja=0;
    stawka_vat_walidacja();
    nazwa_towaru_walidacja();
    kod_towaru_walidacja();
    cena_brutto_walidacja();
    cena_netto_walidacja();
    opcje_towaru_walidacja();
    ocena_towaru_walidacja();


    if (walidacja == 0) {

        var nazwa_t =       document.forms['formularz1']['nazwa_towaru'].value;
        var kod_t =         document.forms['formularz1']['kod_towaru'].value;
        var cena_netto_t =  document.forms['formularz1']['cena_netto'].value;
        var stawka_vat_t =  document.forms['formularz1']['stawka_vat'].value;
        var cena_brutto_t = document.forms['formularz1']['cena_brutto'].value;
        var kategoria_t =   document.forms['formularz1']['kategoria_towarowa'].value;

        var tabela = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0];

        tabela.rows[zaznaczone[0].value].cells[1].innerHTML = nazwa_t;
        tabela.rows[zaznaczone[0].value].cells[2].innerHTML = kod_t;
        tabela.rows[zaznaczone[0].value].cells[3].innerHTML = cena_netto_t;
        tabela.rows[zaznaczone[0].value].cells[4].innerHTML = stawka_vat_t;
        tabela.rows[zaznaczone[0].value].cells[5].innerHTML = cena_brutto_t;
        tabela.rows[zaznaczone[0].value].cells[6].innerHTML = kategoria_t;


        document.getElementById("edycja_towarow_div").style.display = "none";
        alert("Dane zostały poprawnie zmienione!");
        tabela_do_cookies();
    }
}

function anuluj_edycje() {
    document.getElementById("edycja_towarow_div").style.display = "none";
    //alert("Edycja anulowana!");
}


