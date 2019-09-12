$(document).ready(init);


function listMonth(){
  var months = moment.months();
  return months;
}


function  init(){
  console.log("funziona");


  $("select").change(function() {
      var liv = $(this).children("option:selected").val();

      $.ajax({
        mothos : "GET",
          url: "fulldb.php",
          data: {
              level: liv
          },
          success: function(data) {

              console.log(data);

              // console.log(liv);

              if (liv =="guest") {

                $(".container").empty();

                $(".container").append('<canvas id="myChart"></canvas>');

                grafico0(data);
              }//fine if


              if (liv =="employee") {

                $(".container").empty();

                $(".container").append(
                  '<canvas id="myChart"></canvas> <canvas id="myChart2"></canvas>'
                );

                grafico0(data);

                grafico1(data);

              }//fine if



              if (liv =="clevel") {

                var pass = prompt("What is your password?");
                console.log(pass);

                var validPass = data[3];

                if (validPass.includes(pass)) {
                  $(".container").empty();

                  $(".container").append(
                    '<canvas id="myChart"></canvas> <canvas id="myChart2"></canvas> <canvas id="myChart3"></canvas>'

                  );

                  grafico0(data);
                  grafico1(data);
                  grafico2(data);



                }
                else{
                  alert("password errata")
                }




              }

          },
          error: function(result) {
              alert('error');
          }
      });
  });


}


function grafico0(data){
  Chart.defaults.global.defaultFontColor = '#FFF';
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: data[0].type,
      data: {
          labels: listMonth(),
          datasets: [{
              label: 'fatturato',
              data: data[0].data,
              backgroundColor: ['rgb(40,191,177, 1)' ]
          }]
      },
      scaleFontColor: "#FFFFFF",
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: "#364156"
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: "#364156"
            }
          }]
        }
      }
  });
}

function grafico1(data){
  var ctx = document.getElementById('myChart2').getContext('2d');
  var myChart = new Chart(ctx, {
      type: data[1].type,
      data: {
          labels: Object.keys(data[1].data),
          datasets: [{
              label: '# of Votes',
              data: Object.values(data[1].data),
              backgroundColor: [
                  'rgba(117, 171, 223, 1)',
                  'rgb(40,191,177, 1)',
                  'rgb(43,80,237, 1)',
                  'rgb(3, 15, 135)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                'rgb(17, 17, 33)',
                'rgb(17, 17, 33)',
                'rgb(17, 17, 33)',
                'rgb(17, 17, 33)',
                'rgb(17, 17, 33)',
                'rgb(17, 17, 33)',
              ],
              borderWidth: 0
          }]
      }
  });
}

function grafico2(data){
  var ctx = document.getElementById('myChart3').getContext('2d');
  var myChart = new Chart(ctx, {
      type: data[2].type,
      data: {
          labels: listMonth(),
          datasets: [
            {
              label: 'team1',
              data: data[2].data.Team1,
              backgroundColor: 'rgb(255, 99, 132,0)',
              borderColor: [
                'rgba(117, 171, 223, 1)',
              ]
            },
            {
              label: 'team2',
              data: data[2].data.Team2,
              backgroundColor: 'rgb(255, 99, 132,0)',
              borderColor: [
                'rgb(40,191,177, 1)',

              ]
            },
            {
              label: 'team3',
              data: data[2].data.Team3,
              backgroundColor: 'rgb(255, 99, 132,0)',
              borderColor: [
                'rgb(43,80,237, 1)',

              ]
            }
        ]
      }
  });
}
