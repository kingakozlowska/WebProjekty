var walidacja = 0
var ilosc_towarow =0;

function showMessage(IDpole, typ, komunikat){
    document.getElementById(IDpole).innerHTML = '<p class="alert alert-' + typ +'">' + komunikat + '</p>';
    if(typ=='danger'){
        walidacja = 1;
        //document.getElementById(IDpole).className = "alert alert-danger alert-dismissable";
    }
    /*else if(typ == 'warning')
    {
        document.getElementById(IDpole).className = "alert alert-warning alert-dismissable";
    }
    else if(typ == 'success')
    {
        document.getElementById(IDpole).className = "alert alert-success alert-dismissable";
    }*/
}

function nazwa_towaru_walidacja()
{
    var w = document.forms["formularz1"]["nazwa_towaru"].value;
    if(w == "") {
        showMessage("nazwa_towaru_blad", "danger", "Musisz wypełnić to pole!");
    }
    else if(!w.match(/^[a-zA-ZąćęłńóśżźĄĆŁŃÓŚŻŹ$]+$/)){
        showMessage("nazwa_towaru_blad", "danger", "Nazwa zawiera nie poprawne znaki!");
    }
    else if(w.length >10){
        showMessage("nazwa_towaru_blad","danger", "Nazwa nie moze byc dluzsza niz 10 znakow!");
    }
    else{
        showMessage("nazwa_towaru_blad", "success", "Nazwa poprawna!");
    }
}

function kod_towaru_walidacja()
{
    var w = document.forms["formularz1"]["kod_towaru"].value;
    if(w == "") {
        showMessage("kod_towaru_blad", "danger", "Musisz wypełnić to pole!");
    }
    else if(!w.match(/^.{2}-.{2}$/)){ /* kropka = [0-9a-zA-ZąćęłńóśżźĄĆŁŃÓŚŻŹ] */
        showMessage("kod_towaru_blad", "danger", "Kod towaru zawiera nie poprawne znaki! Poprawna forma: 00-00");
    }
    else{
        showMessage("kod_towaru_blad", "success", "Kod towaru poprawny");
    }
}

function cena_netto_walidacja()
{
    var w = document.forms["formularz1"]["cena_netto"].value;

    if(w == "") {
        showMessage("cena_netto_blad", "danger", "Musisz wypelnic to pole!");
    }
    else if(!w.match(/^[0-9]+\.?,?[0-9]?[0-9]?$/)){
        showMessage("cena_netto_blad", "danger", "Cena netto zawiera nie poprawne znaki! Poprawna forma: 0.00 lub 0,00 lub 0 ");
    }
    else{
          if (w.indexOf(",") >= 0) {
              document.forms["formularz1"]["cena_netto"].value = document.forms["formularz1"]["cena_netto"].value.replace(",", ".");
              w = document.forms["formularz1"]["cena_netto"].value;
          }

          if(w.indexOf(".") == -1) {
              w = w + ".00";
              document.forms["formularz1"]["cena_netto"].value = w;
          }

            showMessage("cena_netto_blad", "success", "Cenna netto poprawna");
            cena_brutto_walidacja();
    }
}

function stawka_vat_walidacja()
{
    var w = document.forms["formularz1"]["stawka_vat"].value;
    if(w == "") {
        showMessage("stawka_vat_blad", "danger", "Musisz wypełnić to pole!");
        document.getElementById("stawka_vat_blad").innerHTML = '<p class="alert alert-danger"> Musisz wypełnić to pole!</p>';
    }
    else if(!w.match(/^[0-9]+$/)){
        showMessage("stawka_vat_blad", "danger", "Nazwa zawiera nie poprawne znaki! Nie wpisuj znaku %.");
    }
    else if(w != 23 && w!= 0 && w!= 5 && w!= 8) {
        showMessage("stawka_vat_blad", "warning", "Stawki VAT w Polsce: 0%, 5%, 8% lub 23%. Upewnij sie, ze poprawnie wpisales dane.");
    }
    else{
        showMessage("stawka_vat_blad", "success", "Stawka VAT poprawna");
        cena_brutto_walidacja();
    }
}

function cena_brutto_walidacja()
{
    v = parseFloat(document.forms["formularz1"]["stawka_vat"].value);
    n = parseFloat(document.forms["formularz1"]["cena_netto"].value);

    var w = n * (v * 0.01) + n; // parseInt konwersja ze stringa na float
    w = w.toFixed(2);

    if (isNaN(n) || isNaN(v)) {
        document.forms["formularz1"]["cena_brutto"].value = 0;
    }
    else if(v != 0 && n != 0) {
        document.forms["formularz1"]["cena_brutto"].value = w;
    }

}

function kategoria_towarowa_walidacja(){
}

function opcje_towaru_walidacja(){
    if($('#inlineCheckbox1:checked, #inlineCheckbox2:checked, #inlineCheckbox3:checked, #inlineCheckbox4:checked, #inlineCheckbox5:checked').length < 2){
        showMessage("opcje_towaru", "danger", " Musisz zaznaczyć minimum 2 opcje!");
    }
    else{
        showMessage("opcje_towaru", "success", " Opcje poprawnie zaznaczone!");
    }

}

function ocena_towaru_walidacja(){
    if(!$('input[name=inlineRadioOptions]:checked').val() ){
        showMessage("ocena_towaru", "danger", "Ocen towar!");
    }
    else{
        showMessage("ocena_towaru", "success", "Ok");
    }
}

function identyczny_produkt_tabela(){

    var wprowadzany_produkt = document.forms['formularz1']['nazwa_towaru'].value;
    var tabela = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0];
    var zawartosc_komorki;//=tabela.rows[0].cells[1].innerHTML;
    var ilosc_wierszy = tabela.rows.length;


    if(ilosc_towarow > 0) {
        for (var i = 0; i < ilosc_wierszy; i++) {
            zawartosc_komorki = tabela.rows[i].cells[1].innerHTML;
            if (wprowadzany_produkt == zawartosc_komorki) {
                alert("Taki prodkut juz istnieje!");
                walidacja = 1;
            }
        }
    }

}


function formularz1_walidacja() {

    walidacja=0;
    stawka_vat_walidacja();
    nazwa_towaru_walidacja();
    kod_towaru_walidacja();
    cena_brutto_walidacja();
    cena_netto_walidacja();
    opcje_towaru_walidacja();
    ocena_towaru_walidacja();
    identyczny_produkt_tabela();


    if (walidacja == 0) {
        //alert("OK!");
        ilosc_towarow += 1;
        wyswietl_tabele(ilosc_towarow);
        numerowanie();
    }
}
