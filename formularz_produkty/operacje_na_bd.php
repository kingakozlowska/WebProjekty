<?php


// nawiazujemy polaczenie
$connection = @mysql_connect('mysql.hostinger.pl', 'u377687736_kinga', 'kinga123')

// w przypadku niepowodznie wyświetlamy komunikat
or die('Brak połączenia z serwerem MySQL.<br/>Błąd: '.mysql_error());

// połączenie nawiązane
echo "Udało się połączyć z serwerem!<br/>";

// nawiązujemy połączenie z bazą danych
$db = @mysql_select_db('u377687736_bd', $connection)

// w przypadku niepowodzenia wyświetlamy komunikat
or die('Nie mogę połączyć się z bazą danych<br/>Błąd: '.mysql_error());

// połączenie nawiązane
echo "Udało się połączyć z bazą dancych!";

// zamykamy połączenie
//mysql_close($connection);

?>
<script>

function odczytaj_towary_z_bazy() {

    alert("kupakupa123");

}


function zapisz_towary_do_bazy() {


}
</script>
<?php

?>