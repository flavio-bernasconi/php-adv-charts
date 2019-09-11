<?php

  header('Content-type: application/json');

  include "data.php";

  $level = $_GET["level"];
  $dati = [];


  $permesso1 = $graphs["fatturato"]["access"];
  $permesso2 = $graphs["fatturato_by_agent"]["access"];
  $permesso3 = $graphs["team_efficiency"]["access"];

  $validPass = ["123","111","222"];


  if ($permesso1 == $level) {
    array_push($dati,$graphs["fatturato"]);
  }
  if ($permesso2 == $level) {
    array_push($dati,$graphs["fatturato"],$graphs["fatturato_by_agent"]);
  }
  if ($permesso3 == $level) {
    array_push($dati,$graphs["fatturato"],$graphs["fatturato_by_agent"],$graphs["team_efficiency"],$validPass);
  }


  echo json_encode($dati);

?>
