<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <script  src="https://code.jquery.com/jquery-3.2.1.js"  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="  crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <script type="text/javascript" src="script2.js"></script>

    <!-- template movie singoli negli slider -->
    <script id="template" type="text/x-handlebars-template">
        <option value="{{livello}}">{{livello}}</option>
    </script>


    <title>grafico</title>

    <?php
    // foreach ($graphs as $arrKey) {
    //   foreach ($arrKey as $key => $value) {
    //     if ($key == "access") {
    //       if ($value == $level) {
    //         $dati[] = $arrKey["data"];
    //       }
    //     }
    //   }
    // };
     ?>

  </head>
  <body>

    <select class="select-level" name="">
      <option value="guest">options</option>
      <option value="guest">Guest</option>
      <option value="employee">employee</option>
      <option value="clevel">clevel</option>
    </select>


    <div class="container">
      <!-- <canvas id="myChart"></canvas>

      <canvas id="myChart2"></canvas>

      <canvas id="myChart3"></canvas> -->
    </div>





  </body>
</html>
