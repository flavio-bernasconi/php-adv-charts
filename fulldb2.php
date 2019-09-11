<?php

  header('Content-type: application/json');

  include "data.php";

  echo json_encode($graphs);

?>
