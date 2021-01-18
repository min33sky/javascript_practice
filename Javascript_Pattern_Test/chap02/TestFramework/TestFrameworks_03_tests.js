describe('createReservation(passenger, flight)', () => {
  let testPassenger = null,
    testFlight = null,
    testReservation = null;

  // 단위 테스트 전에 실행하는 코드
  beforeEach(() => {
    testPassenger = {
      firstName: '윤지',
      lastName: '김',
    };
    testFlight = {
      number: '3443',
      carrier: '대한항공',
      destination: '울산',
    };

    testReservation = createReservation(testPassenger, testFlight);
  });

  it('passenger를 passengerInfomation 프로퍼티에 할당한다', () => {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });

  it('flight를 flightInformation 프로퍼티에 할당한다.', () => {
    expect(testReservation.flightInformation).toBe(testFlight);
  });
});
