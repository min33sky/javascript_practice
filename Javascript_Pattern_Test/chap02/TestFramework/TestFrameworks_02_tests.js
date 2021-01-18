describe('createReservation(passenger, flight)', () => {
  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다', () => {
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
    expect(reservation.passengerInfomation).toBe(testPassenger);
  });
});
