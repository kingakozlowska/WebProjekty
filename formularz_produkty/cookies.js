function tabela_do_cookies() {
    var tabela = $('#tabela_towarow_table').tableToJSON(); // Convert the table into a javascript object



    //console.log(tabela);
    //console.log(tabela_koszyk);
    //alert(JSON.stringify(table));

    var data_wygasniecia = new Date();
    data_wygasniecia.setTime(data_wygasniecia.getTime() + (1*24*60*60*1000));


    document.cookie = "tabela="+JSON.stringify(tabela)+"; expires="+data_wygasniecia.toGMTString()+"; path=/";

}

function tabela_do_cookies_koszyk() {
    var tabela_koszyk = $('#tabela_koszyk_table').tableToJSON();


    //zaminiamy chinskich znaczkow na prawidlowa ilosc w jsonie
    var tabela = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0];
    var ilosc=0;

    for(var i=0;i < tabela.rows.length;i++){
        var id_lsztuk = tabela.rows[i].cells[2].innerHTML.split('id="')[1];
        var id = id_lsztuk.split('" val')[0];
        ilosc = document.getElementById(id).value;
        tabela_koszyk[i]["Ilosc"]=ilosc;



    }
//alert(tabela_koszyk);


    var data_wygasniecia = new Date();
    data_wygasniecia.setTime(data_wygasniecia.getTime() + (1*24*60*60*1000));
    document.cookie = "tabela_koszyk="+JSON.stringify(tabela_koszyk)+"; expires="+data_wygasniecia.toGMTString()+"; path=/";
}


function tabela_z_cookies() {


    var tabela = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0];


    var cookies = document.cookie.split("; ");

    //for po wszystkich cookies
    for (var i = 0; i < cookies.length; i++) {
        var cookie_nazwa = cookies[i].split("=")[0]; //nazwa ciastka
        var cookie_wartosc = cookies[i].split("=")[1]; //wartość ciastka

        if (cookie_nazwa == "tabela") {

            var json_objekt = JSON.parse(cookie_wartosc);


            document.getElementById("tabela_towarow_div").style.display = "";

            // for po wierszach
            for (var j = 0; j < json_objekt.length; j++) {

                var newRow = tabela.insertRow(j);
                newRow.id = ilosc_towarow;

                nazwa_t = json_objekt[j]["Nazwa towaru"];
                kod_t = json_objekt[j]["Kod towaru"];
                cena_netto_t = json_objekt[j]["Cena netto"];
                stawka_vat_t = json_objekt[j]["Stawka Vat"];
                cena_brutto_t = json_objekt[j]["Cena brutto"];
                kategoria_t = json_objekt[j]["Kategoria towarowa"];
                opcje_t = json_objekt[j]["Opcje towaru"];
                ocena_t = json_objekt[j]["Ocena towaru"];


                var newCell0 = newRow.insertCell(0);
                var nazwa = ilosc_towarow; // "produkt_nr_"+ilosc_towarow;
                newCell0.innerHTML = '<input type="checkbox" value="' + ilosc_towarow + '" id="zaznaczony_produkt" name="' + nazwa + '">';

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
                $(document).ready(function () {
                        $("#tabela_towarow_table").tablesorter();
                    }
                );


            }
        }
    }

}


function tabela_z_cookies_koszyk() {


    var tabela = document.getElementById("tabela_koszyk_table").getElementsByTagName("tbody")[0];


    var cookies = document.cookie.split("; ");

    //for po wszystkich cookies
    for (var i = 0; i < cookies.length; i++) {
        var cookie_nazwa = cookies[i].split("=")[0]; //nazwa ciastka
        var cookie_wartosc = cookies[i].split("=")[1]; //wartość ciastka

        if (cookie_nazwa == "tabela_koszyk") {

            var json_objekt = JSON.parse(cookie_wartosc);


            document.getElementById("tabela_towarow_div").style.display = "";

            // for po wierszach
            for (var j = 0; j < json_objekt.length; j++) {

                var newRow = tabela.insertRow(j);
                newRow.id = ilosc_towarow;

                nazwa_t = json_objekt[j]["Nazwa towaru"];
                cena_brutto_t = json_objekt[j]["Cena brutto"];
                ilosc_t = json_objekt[j]["Ilosc"];

                var newCell1 = newRow.insertCell(0);
                newCell1.innerHTML = nazwa_t;

                var newCell5 = newRow.insertCell(1);
                newCell5.innerHTML = cena_brutto_t;

                var newCell8 = newRow.insertCell(2);

// tu musi byc wprowadzana ilosc ale nie wiem jak!!!

                newCell8.innerHTML = '<input type="text" id="ilosc_towaru_'+ j +'" value="'+ilosc_t+'" onblur="wyliczanie_kosztu_calkowitego()">';//'<input type="text" id="ilosc_towaru_1" value="1" onblur="wyliczanie_kosztu_calkowitego()">';
                //newCell8.innerHTML = ilosc_t;


                // sortowanie tabeli z js/tablesorter
                $(document).ready(function () {
                        $("#tabela_koszyk_table").tablesorter();
                    }
                );


            }
        }
    }

}


/*
 function tabela_do_cookies() {
 var tabela = $('#tabela_towarow_table').tableToJSON(); // Convert the table into a javascript object
 console.log(tabela);
 //alert(JSON.stringify(table));

 var data_wygasniecia = new Date();
 data_wygasniecia.setTime(data_wygasniecia.getTime() + (1 * 24*60*60*1000));


 document.cookie="tabela="+JSON.stringify(tabela)+"; expires="+data_wygasniecia.toGMTString()+"; path=/";
 }


 function tabela_z_cookies() {


 var tabela = document.getElementById("tabela_towarow_table").getElementsByTagName("tbody")[0];

 var cookies = document.cookie.split("; ");

 //for po wszystkich cookies
 for(var i=0;i < cookies.length;i++){
 var cookie_nazwa = cookies[i].split("=")[0]; //nazwa ciastka
 var cookie_wartosc = cookies[i].split("=")[1]; //wartość ciastka

 if(cookie_nazwa == "tabela") {

 var json_objekt = JSON.parse(cookie_wartosc);


 document.getElementById("tabela_towarow_div").style.display = "";

 // for po wierszach
 for(var j=0;j < json_objekt.length;j++){

 var newRow = tabela.insertRow(j);
 newRow.id = ilosc_towarow;

 nazwa_t = json_objekt[j]["Nazwa towaru"];
 kod_t = json_objekt[j]["Kod towaru"];
 cena_netto_t = json_objekt[j]["Cena netto"];
 stawka_vat_t = json_objekt[j]["Stawka Vat"];
 cena_brutto_t = json_objekt[j]["Cena brutto"];
 kategoria_t = json_objekt[j]["Kategoria towarowa"];
 opcje_t = json_objekt[j]["Opcje towaru"];
 ocena_t = json_objekt[j]["Ocena towaru"];


 var newCell0 = newRow.insertCell(0);
 var nazwa= ilosc_towarow; // "produkt_nr_"+ilosc_towarow;
 newCell0.innerHTML = '<input type="checkbox" value="'+ ilosc_towarow + '" id="zaznaczony_produkt" name="' + nazwa + '">';

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


 }
 }
 }

 } */

