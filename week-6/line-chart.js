function barchartFun(){
    //var xValues = [50,60,70,80,90,100,110,120,130,140,150];
    //var yValues = [7,8,8,9,9,9,10,11,14,14,15];
    var xValues = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    var yValues = [12, 9, 3, 8, 2, 10];
    new Chart("myChart3", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
         
    }
    
    document.addEventListener('DOMContentLoaded',barchartFun);