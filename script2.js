function getMonths() {

  return moment.months();
}

function drawGraphs() {

  $("aside ul li a").click(function() {

  var liv = $(this).attr("data-val");

  $("aside a").removeClass("active dis");
  $(this).addClass("active dis");

  $('.container canvas').each(function(idx, item) {
        var context = item.getContext("2d");
        context.clearRect(0, 0, item.width, item.height);
        context.beginPath();
    });

  $.ajax({

      url: "fulldb.php",
      method: "GET",
      data: {"level": liv},

      success: function(data) {

        console.log(liv);
        console.log(data);

        for(var i=0;i<data.length;i++) {

          var d = data[i];
          var type = d.type;

          if (type == 'line') {
            drawLineGraph(d, i);
          } else {
            drawPieGraph(d, i);
          }
        }
      },
      erorr: function() { }
    });
  });

}


function drawLineGraph(data, index) {

  var months = getMonths();
  var ctx = $('#graph' + index);

  if (Array.isArray(data.data)) {
    console.log("array classico",data.data);
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: "Value",
          data: data.data,
          backgroundColor :'rgba(117, 171, 223, 1)'
        }]
      }
    });
  } else {
    console.log("array associativo",data.data);
    var teamNames = Object.keys(data.data);
    var teamScores = Object.values(data.data);

    var datasets = [];
    for(var i=0;i<teamNames.length;i++) {

      var teamName = teamNames[i];
      var teamScore = teamScores[i];

      datasets.push({
        label: teamName,
        data: teamScore,
        backgroundColor : 'rgba(117, 171, 223, 0)',
        borderColor: randomColor()
      });
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: datasets,
        backgroundColor : 'rgba(117, 171, 223, 0)',
        borderColor: randomColor(),
      }
    });
  }
}


function drawPieGraph(data, index) {

  console.log(data);

  var names = Object.keys(data.data);
  var values = Object.values(data.data);

  var ctx = $('#graph' + index);
  new Chart(ctx, {
      type: data.type,
      data: {
          labels: names,
          datasets: [{
              label: "Values",
              data: values,
              backgroundColor: [
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
                  randomColor(),
              ],
              borderColor: [
                  'rgba(255, 99, 132, 0)',
                  'rgba(54, 162, 235, 0)',
                  'rgba(255, 206, 86, 0)',
                  'rgba(75, 192, 192, 0)',
                  'rgba(153, 102, 255, 0)',
                  'rgba(255, 159, 64, 0)'
              ],
              borderWidth: 1
          }]
      }
  });
}

function repeatColor(data){
  for (var i = 0; i < data.length; i++) {
    randomColor();
  }
}


function randomColor(){
  var arrNum = [];
  for (var i = 0; i < 3; i++) {
     var numRandom =  Math.floor((Math.random() * 178) + 77);
     if (!arrNum.includes(numRandom)) {
       arrNum.push(numRandom)
     }
  }
  var numeri = 20 + "," + arrNum[1] + "," + arrNum[2]+ ",";
  var rgb = "rgb(" + numeri + "1)";

  return rgb
}

function init() {
  randomColor()
  drawGraphs();
}

$(document).ready(init);
