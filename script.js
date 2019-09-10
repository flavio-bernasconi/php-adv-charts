$(document).ready(init);


function getData(){

  $.ajax({
    url : "fulldb.php",
    method : "GET",
    success : function(data){

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
                  backgroundColor: ['rgba(255, 99, 132,1)' ]
              }]
          }
      });


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
