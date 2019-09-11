$(document).ready(init);


function listMonth(){
  var months = moment.months();
  return months;
}


function  init(){
  console.log("funziona");

  $("select").change(function(e) {
      e.preventDefault();

      var liv = $(this).children("option:selected").val();

      $.ajax({
        mothos : "GET",
          url: "fulldb.php",
          data: {
              level: $(this).children("option:selected").val()
          },
          success: function(data) {

              console.log(data);

              console.log(liv);

              if (liv =="guest") {

                $(".container").empty();

                $(".container").append('<canvas id="myChart"></canvas>');

                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: data[0].type,
                    data: {
                        labels: listMonth(),
                        datasets: [{
                            label: '# of Votes',
                            data: data[0].data,
                            backgroundColor: ['rgba(255, 99, 132,1)' ]
                        }]
                    }
                });
              }//fine if


              if (liv =="employee") {

                $(".container").empty();

                $(".container").append(
                  '<canvas id="myChart"></canvas> <canvas id="myChart2"></canvas>'
                );

                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: data[0].type,
                    data: {
                        labels: listMonth(),
                        datasets: [{
                            label: '# of Votes',
                            data: data[0].data,
                            backgroundColor: ['rgba(255, 99, 132,1)' ]
                        }]
                    }
                });

                var ctx = document.getElementById('myChart2').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: data[1].type,
                    data: {
                        labels: Object.keys(data[1].data),
                        datasets: [{
                            label: '# of Votes',
                            data: Object.values(data[1].data),
                            backgroundColor: [
                              'rgba(255, 99, 132,1)',
                              'rgba(150, 208, 130, 1)',
                              'rgba(149, 99, 255, 1)',
                              'rgba(255, 254, 110, 1)'

                            ]
                        }]
                    }
                });

              }//fine if



              if (liv =="clevel") {

                $(".container").empty();

                $(".container").append(
                  '<canvas id="myChart"></canvas> <canvas id="myChart2"></canvas> <canvas id="myChart3"></canvas>'

                );

                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: data[0].type,
                    data: {
                        labels: listMonth(),
                        datasets: [{
                            label: '# of Votes',
                            data: data[0].data,
                            backgroundColor: ['rgba(255, 99, 132,1)' ]
                        }]
                    }
                });


                var ctx = document.getElementById('myChart2').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: data[1].type,
                    data: {
                        labels: Object.keys(data[1].data),
                        datasets: [{
                            label: '# of Votes',
                            data: Object.values(data[1].data),
                            backgroundColor: [
                              'rgba(255, 99, 132,1)',
                              'rgba(150, 208, 130, 1)',
                              'rgba(149, 99, 255, 1)',
                              'rgba(255, 254, 110, 1)'

                            ]
                        }]
                    }
                });



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
                              'rgba(255, 99, 132,1)'
                            ]
                          },
                          {
                            label: 'team2',
                            data: data[2].data.Team2,
                            backgroundColor: 'rgb(255, 99, 132,0)',
                            borderColor: [
                              'rgba(150, 208, 130, 1)',

                            ]
                          },
                          {
                            label: 'team3',
                            data: data[2].data.Team3,
                            backgroundColor: 'rgb(255, 99, 132,0)',
                            borderColor: [
                              'rgba(46, 79, 255, 1)'

                            ]
                          }
                      ]
                    }
                });

              }






              //
              // var ctx = document.getElementById('myChart2').getContext('2d');
              // var myChart = new Chart(ctx, {
              //     type: data[1].type,
              //     data: {
              //         labels: Object.keys(data[1].data),
              //         datasets: [{
              //             label: '# of Votes',
              //             data: Object.values(data[1].data),
              //             backgroundColor: [
              //               'rgba(255, 99, 132,1)',
              //               'rgba(150, 208, 130, 1)',
              //               'rgba(149, 99, 255, 1)',
              //               'rgba(255, 254, 110, 1)'
              //
              //             ]
              //         }]
              //     }
              // });
              //
              //
              //
              //
              // var ctx = document.getElementById('myChart3').getContext('2d');
              // var myChart = new Chart(ctx, {
              //     type: data[2].type,
              //     data: {
              //         labels: listMonth(),
              //         datasets: [
              //           {
              //             label: 'team1',
              //             data: data[2].data.Team1,
              //             backgroundColor: 'rgb(255, 99, 132,0)',
              //             borderColor: [
              //               'rgba(255, 99, 132,1)'
              //             ]
              //           },
              //           {
              //             label: 'team2',
              //             data: data[2].data.Team2,
              //             backgroundColor: 'rgb(255, 99, 132,0)',
              //             borderColor: [
              //               'rgba(150, 208, 130, 1)',
              //
              //             ]
              //           },
              //           {
              //             label: 'team3',
              //             data: data[2].data.Team3,
              //             backgroundColor: 'rgb(255, 99, 132,0)',
              //             borderColor: [
              //               'rgba(46, 79, 255, 1)'
              //
              //             ]
              //           }
              //       ]
              //     }
              // });
              //
              //





          },
          error: function(result) {
              alert('error');
          }
      });
  });


}
