$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      var date = [];
      var positive = [];
      var recovered =[];
      var deaths = [];
      

      $.each(data.cases_time_series, function (id, obj) {
        //states.push(obj.state);
        //confirmed.push(obj.totaltested);
        date.push(obj.date);
        positive.push(obj.totalconfirmed)
        recovered.push(obj.totalrecovered);
        deaths.push(obj.totaldeceased);
        
      });
  
      // Chart initialization
      var myChart = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(myChart, {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "Positive Cases",
              data: positive,
              backgroundColor: "#bf88f6",
            },
            {
              label: "Recovered Cases",
              data: recovered,
              backgroundColor: "#8bd1ee",
            },
            {
                label: "Deceased Cases",
                data: deaths,
                backgroundColor: "#ff6161",
              },

          ],
        },
        option: {},
      });
    });
  });
