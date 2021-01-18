describe('createReservation(passenger, flight)', () => {
  // it : 개별 단위 테스트
  it('주어진 passenger를 passengerInfo에 할당한다', () => {
    let testPassenger = {
      firstName: '윤지',
      lastName: '김',
    };

    let testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산',
    };

    let reservation = createReservation(testPassenger, testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });

  it('주어진 flight를 flightInfo 프로퍼티에 할당한다.', () => {
    let testPassenger = {
      firstName: '윤지',
      lastName: '김',
    };

    let testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산',
    };

    let reservation = createReservation(testPassenger, testFlight);
    expect(reservation.flightInfo).toBe(testFlight);
  });
});
