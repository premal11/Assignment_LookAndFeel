
// Java Script





// Analytics page

    const bookTypesData = {
      labels: ['History', 'Technology', 'Sci-Fi', 'Biography'],
      datasets: [{
        label: 'Number of Books',
        data: [20, 15, 10, 25], // Example counts
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] // Example colors
      }]
    };

    const viewsData = {
      labels: ['History', 'Technology', 'Sci-Fi', 'Biography'],
      datasets: [{
        label: 'Number of Views',
        data: [500, 300, 450, 700, 200], // Example views
        backgroundColor: ['#FF5733', '#5CDB95', '#FFC300', '#7D3C98'] // Example color
      }]
    };

    const ratingsData = {
      labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
      datasets: [{
        label: 'Number of Ratings',
        data: [100, 200, 150, 50, 20], // Example ratings
        backgroundColor: ['#3A86FF', '#FF6F61', '#48C9B0', '#FFD700', '#9B59B6', '#FF4D4D'] // Example color
      }]
    };

    const downloadsData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Number of Downloads',
        data: [200, 150, 300, 250, 400, 350], // Example downloads
        backgroundColor: '#FFCE56' // Example color
      }]
    };

    // Get the canvas elements and initialize Chart.js for each chart
    const ctx1 = document.getElementById('bookTypesChart').getContext('2d');
    const bookTypesChart = new Chart(ctx1, {
      type: 'bar',
      data: bookTypesData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    const ctx2 = document.getElementById('viewsChart').getContext('2d');
    const viewsChart = new Chart(ctx2, {
      type: 'bar',
      data: viewsData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    const ctx3 = document.getElementById('ratingsChart').getContext('2d');
    const ratingsChart = new Chart(ctx3, {
      type: 'pie',
      data: ratingsData,
      options: {
        responsive: true
      }
    });

    const ctx4 = document.getElementById('downloadsChart').getContext('2d');
    const downloadsChart = new Chart(ctx4, {
      type: 'line',
      data: downloadsData,
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
