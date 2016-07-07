'use strict';

angular.module('accountAdminApp')
  .controller('DashboardCtrl', function ($scope, $http, $interval, Modal) {
    $scope.pageTitle = 'Dashboard';

    // Columns
    $scope.displayColumns = { orders: true, reservations: true, campaigns: true, updates: true, reservationTrends: true, orderTrends: true };
    $scope.collapsed = { orders: false, reservations: false, campaigns: false, updates: false, reservationTrends: false, orderTrends: false };
    $scope.showColumnPicker = function () {
      $scope.pickColumns = true;
      $scope.invisibleLayer = true;
    };

    // When dragging and dropping stuff around
    $scope.rearranging = false;
    $scope.rearrange = () => {
      $scope.rearranging = !$scope.rearranging;
      $('.sortable').sortable({
        disabled: !$scope.rearranging,
        placeholder: 'placeholder',
        revert: true,
        scroll: false,
        cursor: 'move'
      });
      $('.sortable').disableSelection()
    };

    // Modal calls
    $scope.viewOrderModal = Modal.viewOrderModal;
    $scope.viewUpdatesModal = Modal.viewUpdatesModal;
    $scope.viewReservationModal = Modal.viewReservationModal;

    // set and update time every second
    $scope.currentDate = Date;
    $interval(function() {}, 1000);

    // Dashboard alerts
    $scope.alerts = [
      { type: 'warning', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'danger', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'success', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
      { type: 'info', msg: 'Your domain <strong>rodeo.chefbr.uno</strong> is expiring. Visit <a href="/settings/domain">Domain</a> to update it.' },
    ];
    $scope.closeAlert = function(index) { $scope.alerts.splice(index, 1); };

    // Reservations Block
    $scope.quarters = ['12am', '12:15am', '12:30am', '12:45am', '1am', '1:15am', '1:30am', '1:45am', '2am', '2:15am', '2:30am', '2:45am', '3am', '3:15am', '3:30am', '3:45am', '4am', '4:15am', '4:30am', '4:45am', '5am', '5:15am', '5:30am', '5:45am', '6am', '6:15am', '6:30am', '6:45am', '7am', '7:15am', '7:30am', '7:45am', '8am', '8:15am', '8:30am', '8:45am', '9am', '9:15am', '9:30am', '9:45am', '10am', '10:15am', '10:30am', '10:45am', '11am', '11:15am', '11:30am', '11:45am', '12pm', '12:15pm', '12:30pm', '12:45pm', '1pm', '1:15pm', '1:30pm', '1:45pm', '2pm', '2:15pm', '2:30pm', '2:45pm', '3pm', '3:15pm', '3:30pm', '3:45pm', '4pm', '4:15pm', '4:30pm', '4:45pm', '5pm', '5:15pm', '5:30pm', '5:45pm', '6pm', '6:15pm', '6:30pm', '6:45pm', '7pm', '7:15pm', '7:30pm', '7:45pm', '8pm', '8:15pm', '8:30pm', '8:45pm', '9pm', '9:15pm', '9:30pm', '9:45pm', '10pm', '10:15pm', '10:30pm', '10:45pm', '11pm', '11:15pm', '11:30pm', '11:45pm', '12am' ];

    // Charts
    var chartOptions = {
      tooltips: {
        backgroundColor: 'rgba(7,185,179,1)',
        titleFontSize: 14,
        titleFontColor: '#666',
        titleMarginBottom: 20,
        bodyFontColor: '#999'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            drawBorder: false
          }
        }]
      },
      elements: {
        line: {
          tension: 0,
          fill: false,
          borderWidth: 3
        },
        point: {
          radius: 0,
          hitRadius: 20,
          hoverRadius: 0
        },
        rectangle: {
          borderWidth: 0
        }
      }
    }
    var randomScalingFactor = () => Math.floor((Math.random() + 1) * 100)
    setTimeout(function(){
      var chartOrdersTrends = new Chart(document.getElementById('chartOrderTrends'), {
        type: 'line',
        data: {
          labels: ['February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999',
            borderDash: [2]
          },{
            label: '2016',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#07B9B3',
            borderColor: '#07B9B3',
          }]
        },
        options: chartOptions
      });
      var chartOrdersTime = new Chart(document.getElementById('chartReservationTrends'), {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: '2015',
            data: [randomScalingFactor(),  randomScalingFactor(),  randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#999999',
            borderColor: '#999999',
            borderDash: [2]
          },{
            label: '2016',
            data: [randomScalingFactor(),  randomScalingFactor(),  randomScalingFactor(), randomScalingFactor()],
            backgroundColor: '#F44B99',
            borderColor: '#F44B99'
          }]
        },
        options: chartOptions
      });
    }, 0);

    // RESERVATIONS CALENDAR
    // set the ruler position according to time of day (0 to 6305px)
    // 97 quarters * 65px = 6305px
    var mult = 65 * 4, // this is the cell-width (65px = 15 min) for an hour (* 4)
        h = new Date().getHours(),
        m = new Date().getMinutes(),
        t = h + (m / 60);

    // ruler position
    $scope.rulerPosY = mult * t + (65 / 2) + 'px'; // (65 / 2) is used to center the ruler in the cell

    var calWidth,
        calOverflow;
    setTimeout(function () {
      calOverflow = document.querySelector('.calendar-overflow');
      calWidth = calOverflow.clientWidth;
      calOverflow.scrollLeft = $scope.rulerPosY.replace('px','') - (calWidth / 2);
    }, 0);

    // ease
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    // scrollTo
    function scrollToAnimated(to) {
      var start = calOverflow.scrollLeft,
        change = to - start,
        currentTime = 0,
        increment = 20,
        raf,
        duration = 500;

      (function animateScroll() {
        currentTime += increment;
        calOverflow.scrollLeft = Math.easeInOutQuad(currentTime, start, change, duration);
        if (currentTime < duration) {
          raf = requestAnimationFrame(animateScroll);
        } else {
          cancelAnimationFrame(raf);
        }
      })();
    }

    $scope.scrollLeft = () => scrollToAnimated(calOverflow.scrollLeft - calWidth);
    $scope.scrollRight = () => scrollToAnimated(calOverflow.scrollLeft + calWidth);
  });
