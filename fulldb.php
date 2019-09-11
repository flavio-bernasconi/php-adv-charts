<?php

  header('Content-type: application/json');

  include "data.php";

  // $level = $_GET["level"];
  // echo "Permesso " . $level . "<br><br><br>";
  //
  // $dati = [];
  //
  // foreach ($graphs as $arrKey) {
  //   foreach ($arrKey as $key => $value) {
  //     if ($key == "access") {
  //       if ($value == $level) {
  //         $dati[] = $arrKey;
  //       }
  //     }
  //   }
  // };

  echo json_encode($graphs);

?>
