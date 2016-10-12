// add formatting for labels similar to ticks

export const chartOptions = {
  scaleShowVerticalLines: false,
  responsive: true,
  title: {
    display: false,
    text: 'title'
  },
  legend: {
    labels: {
      fontColor: '#fff',
      fontSize: 14
    }
  },
  tooltips: {
    callbacks: {
      label: function (value) {
        let x = value.yLabel;
        let formatted = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return "$" + formatted;
      }
    }
  },
  scales: {
    yAxes: [{
      gridLines: {
        color: "#98d1ff",
        zeroLineColor: "#98d1ff"
      },
      ticks: {
        beginAtZero:true,
        userCallback: function (value){
          if (value < 1){
            return "";
          } else if (value < 10000){
            return "$" + value;
          } else if (value < 1000000){
            return "$" + (value/1000)+",000";
          } else if (value < 1000000000){
            return "$" + value/1000000 + " Million";
          } else {
            return "$" + value/1000000000 + " Billion";
          }
        },
        fontColor: '#fff',
        fontSize: 15
      }
    }],
    xAxes: [{
      gridLines: {
        color: "#98d1ff",
        zeroLineColor: "#98d1ff"
      },
      ticks: {
        userCallback: function(value) {
          if ( value.length > 15 ){
            return value.slice(0,13) + "...";
          }
          return value;
        },
        fontColor: '#fff',
        fontSize: 14
      }
    }]
  }
}

export const chartColors = [
  // Imports
  { backgroundColor: '#ff9800' },
  // Exports
  { backgroundColor: '#72ff78' }
]