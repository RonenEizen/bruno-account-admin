'use strict';

angular.module('accountAdminApp')
  .controller('ReservationsDayCtrl', function ($scope) {
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
