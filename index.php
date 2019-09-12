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

    <link rel="stylesheet" href="style.css">

    <script type="text/javascript" src="script2.js"></script>

    <!-- template movie singoli negli slider -->
    <script id="template" type="text/x-handlebars-template">
        <option value="{{livello}}">{{livello}}</option>
    </script>


    <title>grafico</title>


  </head>
  <body>

    <!-- <select class="select-level" style="width:130px;">
      <option disabled selected>options</option>
      <option value="guest" >Guest</option>
      <option value="employee">employee</option>
      <option value="clevel">clevel</option>
    </select> -->

    <aside class="side-bar">
      <div class="content-side-bar">
        <h3>Access as:</h3>
        <ul>
          <li><a href="#" data-val="guest">Guest</a></li>
          <li><a href="#" data-val="employee">employee</a></li>
          <li><a href="#" data-val="clevel">clevel</a></li>
        </ul>
      </div>


    </aside>


    <div class="container">

    </div>





  </body>
</html>
