<?php

  header('Content-type: application/json');

  include("data.php");

  $level = $_GET['level'];

  $dati = [];

  foreach ($graphs as $value) {

    //value sarà uguale alle chiavi "fatturato""fatturato_by_agent" ecc
    //ex $access = [fatturato][access]
    $access = $value['access'];

    if ($level == 'guest' && $access == 'guest') {
      //se le condizioni sono vere pusho gli/l' array in res
      $dati[] = $value;
    } else if ($level == 'employee' &&
                ($access == 'guest' || $access == 'employee')) {

      $dati[] = $value;
    } else if ($level == 'clevel') {
      $dati[] = $value;
    }
  }

  echo json_encode($dati);

?>
