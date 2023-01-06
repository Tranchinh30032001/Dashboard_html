const menuBars = document.querySelector(".las.la-bars");
menuBars.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("hide");
  document.querySelector(".show").style.display = "block";
});
const cancelMenu = document.querySelector(".las.la-times");
cancelMenu.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("hide");
});
let options = {
  chart: {
    type: "line",
    height: "320px",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    colors: ["#6E00FF"],
  },
  grid: {
    strokeDashArray: 10,
  },
  markers: {
    size: 6,
    colors: ["#6E00FF"],
  },
  series: [
    {
      name: "sales",
      data: [5, 3, 10, 8, 29, 19, 22],
    },
  ],
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options2 = {
  series: [70],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["Cricket"],
};

var emailChart = new ApexCharts(
  document.querySelector("#emailChart"),
  options2
);
emailChart.render();
