'use strict';

describe('Service: ReservationService', function () {

  // load the service's module
  beforeEach(module('accountAdminApp'));

  // instantiate service
  var Reservation;
  beforeEach(inject(function (_Reservation_) {
    Reservation = _Reservation_;
  }));

  it('should do something', function () {
    expect(!!Reservation).toBe(true);
  });

});
