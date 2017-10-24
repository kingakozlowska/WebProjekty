<!DOCTYPE html>

    <?php

    include("operacje_na_bd.php");

    ?>

<html lang="pl">
<thead>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>PDD JS Kinga Kozłowska</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="blue/style.css" rel="stylesheet">

    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <!-- jquery -->
    <!--  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


    <!-- <script src="js/bootstrap.min.js"></script> -->
    <script src="js/bootstrap.min.js"></script>


    <!-- ui dialog -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


    <!-- tablesorter  -->
    <script type="text/javascript" src="js/jquery.tablesorter.min.js"></script>

    <script type="text/javascript" charset="utf-8" src="walidacja.js"></script>
    <script type="text/javascript" charset="utf-8" src="tabela_tworzenie.js"></script>
    <script type="text/javascript" charset="utf-8" src="edycja_towaru.js"></script>
    <script type="text/javascript" charset="utf-8" src="usuwanie_towaru.js"></script>

    <script type="text/javascript" charset="utf-8" src="koszyk.js"></script>

    <script type="text/javascript" charset="utf-8" src="jquery.tabletojson.min.js"></script>

    <script type="text/javascript" charset="utf-8" src="cookies.js"></script>

    <script type="text/javascript" charset="utf-8" src="baza_danych.js"></script>


</thead>
<tbody onload="tabela_z_cookies()">



<div class="row">
    <div class="col-md-12">

<center> <h2> Wpisz dane towaru: </h2> </center>

    </div>

</div>
<div class="row">
    <div class="col-md-2"> </div>

    <div class="col-md-8">

        <form name="formularz1">
            <div class="form-group">
                <label for="nazwa_towaru">Nazwa towaru</label>
                <input type="text" class="form-control" id="nazwa_towaru" placeholder="Nazwa towaru" onblur="nazwa_towaru_walidacja()" value="czekolada">
                <div id="nazwa_towaru_blad" ></div>
            </div>
            <div class="form-group">
                <label for="kod_towaru">Kod towaru</label>
                <input type="text" class="form-control" id="kod_towaru" placeholder="Kod towaru" onblur="kod_towaru_walidacja()" value="12-12">
                <div id="kod_towaru_blad" ></div>
            </div>
            <div class="form-group">
                <label for="cena_netto">Cena netto</label>
                <input type="text" class="form-control" id="cena_netto" placeholder="Cena netto" onblur="cena_netto_walidacja()" value="2.00">
                <div id="cena_netto_blad" ></div>
            </div>
            <div class="form-group">
                <label for="stawka_vat">Satwka VAT</label>
                <input type="text" class="form-control" id="stawka_vat" placeholder="Stawka VAT" onblur="stawka_vat_walidacja()" value="23">
                <div id="stawka_vat_blad" ></div>
            </div>
            <div class="form-group">
                <label for="cena_brutto">Cena brutto</label>
                <input type="text" class="form-control" id="cena_brutto" placeholder="Cena brutto" onblur="cena_brutto_walidacja()" readonly>
            </div>

            Kategoria towarowa:
            <select class="form-control" id="kategoria_towarowa" name="kategoria_towarowa"  onblur="kategoria_towarowa_walidacja()">
                <option>kategoria 1</option>
                <option>kategoria 2</option>
                <option>kategoria 3</option>
                <option>kategoria 4</option>
                <option>kategoria 5</option>
            </select>
            <div id="kategoria_towarowa_blad" ></div>

            </br>
            Opcje towaru</br>
            <label class="checkbox-inline" >
                    <input type="checkbox" id="inlineCheckbox1" name="inlineCheckbox" value="opcja 1" checked> 1
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox2" name="inlineCheckbox" value="opcja 2" checked> 2
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox3" name="inlineCheckbox" value="opcja 3"> 3
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox4" name="inlineCheckbox" value="opcja 4"> 4
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="inlineCheckbox5" name="inlineCheckbox" value="opcja 5"> 5
            </label>
            <div id="opcje_towaru"></div>

            </br>
            Ocena towaru </br>
            <label class="radio-inline" >
                    <input type="radio" name="inlineRadioOptions" id="ocena_t" value="ocena_towaru_1" checked> 1
                </label>
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="ocena_t" value="ocena_towaru_2"> 2
                </label>
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="ocena_t" value="ocena_towaru_3"> 3
                </label>
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="ocena_t" value="ocena_towaru_4"> 4
                </label>
                <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="ocena_t" value="ocena_towaru_5"> 5
            </label>
            <div id="ocena_towaru"></div>

            </br>

            <!-- <button type="button" onclick="numerowanie()">Popraw numerowanie</button> -->

            <div id="edycja_towarow_div" style="display: none" >

                <button class="btn btn-default btn-info" type="button" onclick="zapisz_edycje()" > Zapisz edycje </button>

                <button class="btn btn-default btn-info" type="button" onclick="anuluj_edycje()"> Anuluj edycje </button>

                </br>
                </br>

            </div>

            <!-- usuwanie - komunikat -->
            <div id="usuwanie_towarow_div" title="Usuwanie towaru" style="display: none">
                <p> Czy na pewno chcesz usunąć te produkty?</p>
            </div>


            <button type="button" class="btn btn-default" onclick="formularz1_walidacja()">Dodaj</button>

            <div id="edycja_komunikat"></div>


            <!-- Koszyk - komunikat -->
                        <div id="koszyk_komunikat_div" title="Koszyk" style="display: none">
                            <form name="tabela_koszyk">

                                <table class="tablesorter" id="tabela_koszyk_table"  cellspacing="1"> <!-- class=" table table-bordered table-striped js-options-table table-hover -->
                                    <thead>
                                    <tr>
                                        <th> Nazwa towaru </th>
                                        <th> Cena brutto </th>
                                        <th> Ilosc </th>
                                    </tr>
                                    </thead>
                                    <tbody id="tabela_produktow_tbody">
                                    </tbody>
                                </table>

                                Rodzaj dostawy: </br>
                                <select class="form-control" id="wybor_dostawa" name="wybor_dostawa" onblur="wyliczanie_kosztu_calkowitego()">
                                    <option>Poczta - 12 zł</option>
                                    <option>DHL - 15 zł</option>
                                    <option>Odbiór osobisty - 0 zł</option>
                                </select>
                                </br>

                                Całkowity koszt:</br>
                                <input type="text" class="form-control" id="koszt_calkowity" readonly="readonly" value="12 zł">
                                </br>
                               <!-- <button type="button" onclick="wyliczanie_kosztu_calkowitego()"> wylicz </button> -->

                            </form>

                        </div>


            <div class=" -responsive" id="tabela_towarow_div" style="display: none">

                </br>

                <p align="right"> <button class="btn btn-default btn-sm" type="button" onclick="identyczny_produkt_koszyk()" >  Dodaj do koszyka  </button> </p>
                <p align="right"> <button class="btn btn-default btn-sm" type="button" onclick="wyswietl_koszyk()" >  Koszyk  </button> </p>



                <button class="btn btn-default btn-sm" type="button" onclick="usun_towar()" > Usun zaznaczone produkty </button>
                <button class="btn btn-default btn-sm" type="button" onclick="edytuj_towar()"> Edytuj zaznaczony produkty </button>
                
                </br>
                </br>

                <button class="btn btn-default btn-sm" type="button" onclick="odczytaj_towary_z_bazy()"> Odczytaj liste produktów z bazy </button>
                <button class="btn btn-default btn-sm" type="button" onclick="zapisz_towary_do_bazy()"> Zapisz produkty do bazy </button>


                </br>
                </br>

                <!-- przycisk sortujacy -->
                <form name="sortowanie_tabeli_form">
                    <select name="sortowanie_select" id="sortowanie_tabeli_id" onclick="sortowanie_tabeli()">
                        <option value="0">Wybierz typ sortowania</option>
                        <option value="1">cena brutto od najniższej</option>
                        <option value="2">cena brutto od najwyższej</option>
                        <option value="3">ocena od najniższej</option>
                        <option value="4">ocena od najwyższej</option>
                        <option value="5">nazwa od A</option>
                        <option value="6">nazwa od Z</option>
                    </select>
               </form>



                <!-- tabela -->
                <table class="tablesorter" id="tabela_towarow_table"  cellspacing="1"> <!-- class=" table table-bordered table-striped js-options-table table-hover -->
                    <thead>
                    <tr>
                        <th> Wybor </th>
                        <th> Nazwa towaru </th>
                        <th> Kod towaru </th>
                        <th> Cena netto</th>
                        <th> Stawka Vat </th>
                        <th> Cena brutto </th>
                        <th> Kategoria towarowa </th>
                        <th> Opcje towaru </th>
                        <th> Ocena towaru </th>
                    </tr>
                    </thead>
                    <tbody >
                    </tbody>
                </table>
            </br>

            </div>

        </form>

        </br>
        </br>

        <!--
        <button type="button" onclick="tabela_z_cookies()"> cookies </button></br>
        <button type="button" onclick="tabela_z_cookies_koszyk()"> cookies koszyk </button>
-->
    </div>

    <div class="col-md-2"> </div>
</div>
<div class="row">
    <div class="col-md-12"><center> PDD </center> </div>
</div>

<script>
    tabela_z_cookies();
    tabela_z_cookies_koszyk();
</script>


</tbody>
</html>

<?php
            # hasztag komentuje pojedyncza linie
        $zmienna = 5 ** 5;
        var_dump($zmienna);
?>