export const data = {
  labels: ["Jan", "Fev", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Número de Vendas",
      data: [83, 95, 63, 50, 78, 35],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
};

export const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  responsible: true
};
