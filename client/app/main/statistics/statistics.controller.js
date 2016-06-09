'use strict';

angular.module('accountAdminApp')
  .controller('StatisticsCtrl', function ($scope) {
    $scope.pageTitle = 'Statistics';

    $scope.boxes = {
      orders: { collapsed: false, currentTab: 'trends' },
      reservations: { collapsed: false, currentTab: 'trends' },
      payments: { collapsed: false, currentTab: 'sources' }
    };

    // Columns
    $scope.displayColumns = { orders: true, reservations: true, payments: true };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // When dragging and dropping stuff around
    $scope.rearranging = false;

    var chartOptions = {
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
        gridLines: {
          display: true
        }
      },
      elements: {
        line: {
          tension: 0,
          fill: false,
          borderWidth: 3
        },
        point: {
          borderWidth: 0,
          hitRadius: 20,
          hoverRadius: 0,
          hoverBorderWidth: 1
        },
        rectangle: {
          // backgroundColor: 'rgba(0,0,0,1)',
          borderWidth: 0
        }
      }
    }
    var randomScalingFactor = () => Math.round(Math.random() * 100)

    setTimeout(function(){
      var chartOrdersTrends = new Chart(document.getElementById('chart-orders-trends'), {
        type: 'line',
        data: {
          labels: ['February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#07B9B3',
            borderColor: '#07B9B3'
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          }]
        },
        options: chartOptions
      });
      var chartOrdersTime = new Chart(document.getElementById('chart-orders-time'), {
        type: 'bar',
        data: {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#07B9B3',
            borderColor: '#07B9B3'
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          }]
        },
        options: chartOptions
      });
      var chartOrdersTypes = new Chart(document.getElementById('chart-orders-types'), {
        type: 'bar',
        data: {
          labels: ['Pickup', 'Delivery', 'Eat In'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          }]
        },
        options: chartOptions
      });
      var chartReservationsTrends = new Chart(document.getElementById('chart-reservations-trends'), {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: '2016',
            data: [randomScalingFactor(),  randomScalingFactor(),  randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#F44B99',
            borderColor: '#F44B99'
          }]
        },
        options: chartOptions
      });
      var chartReservationsTime = new Chart(document.getElementById('chart-reservations-time'), {
        type: 'bar',
        data: {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
          datasets: [{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#F44B99',
            borderColor: '#F44B99'
          }]
        },
        options: chartOptions
      });
      var chartReservationsSeating = new Chart(document.getElementById('chart-reservations-seating'), {
        type: 'bar',
        data: {
          labels: ['11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#F44B99',
            borderColor: '#F44B99'
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          }]
        },
        options: chartOptions
      });
      var chartPaymentsSources = new Chart(document.getElementById('chart-payments-sources'), {
        type: 'bar',
        data: {
          labels: ['Restaurant Website', 'In-person', 'Seamless', 'Grubhub'],
          datasets: [{
            label: '2013',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#FF8300',
            borderColor: '#FF8300'
          },{
            label: '2014',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999'
          },{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
          }]
        },
        options: chartOptions
      });
      var chartPaymentsTypes = new Chart(document.getElementById('chart-payments-types'), {
        type: 'bar',
        data: {
          labels: ['Credit Card', 'Debit Card', 'PayPal', 'Cash'],
          datasets: [{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#FF8300',
            borderColor: '#FF8300'
          }]
        },
        options: chartOptions
      });
    }, 0);
  });
