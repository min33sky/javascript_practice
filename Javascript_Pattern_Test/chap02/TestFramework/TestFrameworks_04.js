function createReservation(passenger, flight, saver) {
  let reservation = {
    passengerInformation: passenger,
    flightInformation: flight,
  };

  saver.saveReservation(reservation);
  return reservation;
}

// ReservationSaver 객체
function ReservationSaver() {
  this.saveReservation = function(reservation) {
    // 예약 정보를 저장하는 웹 서비스와 연동하는 복잡한 코드가 있을 것이다.
  };
}
