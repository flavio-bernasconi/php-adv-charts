$(document).ready(init);


function getData(){

  $.ajax({
    url : "fulldb2.php",
    method : "GET",
    success : function(data){

    console.log("ciaoo");

    console.log(data.fatturato_by_agent.data, Object.values(data.fatturato_by_agent.data));


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: data.fatturato.type,
        data: {
            labels: listMonth(),
            datasets: [{
                label: '# of Votes',
                data: data.fatturato.data,
                backgroundColor: ['rgba(255, 99, 132,1)' ]
            }]
        }
    });

    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: data.fatturato_by_agent.type,
        data: {
            labels: Object.keys(data.fatturato_by_agent.data),
            datasets: [{
                label: '# of Votes',
                data: Object.values(data.fatturato_by_agent.data),
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
        type: data.team_efficiency.type,
        data: {
            labels: listMonth(),
            datasets: [
              {
                label: 'team1',
                data: data.team_efficiency.data.Team1,
                backgroundColor: 'rgb(255, 99, 132,0)',
                borderColor: [
                  'rgba(255, 99, 132,1)'
                ]
              },
              {
                label: 'team2',
                data: data.team_efficiency.data.Team2,
                backgroundColor: 'rgb(255, 99, 132,0)',
                borderColor: [
                  'rgba(150, 208, 130, 1)',

                ]
              },
              {
                label: 'team3',
                data: data.team_efficiency.data.Team3,
                backgroundColor: 'rgb(255, 99, 132,0)',
                borderColor: [
                  'rgba(46, 79, 255, 1)'

                ]
              }
          ]
        }
    });




  },//fine success
  error: function(err){
    console.log(err);
  }
  })

};


function listMonth(){
  var months = moment.months();
  return months;
}



function  init(){
  console.log("funziona");
  getData();

}
