describe('createReservation(passenger, flight)', () => {
  let testPassenger = null,
    testFlight = null,
    testReservation = null,
    testSaver = null;

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

    testSaver = new ReservationSaver();
    spyOn(testSaver, 'saveReservation'); // testSaver 객체의 saveReservation 함수에 스파이를 심는다.

    testReservation = createReservation(testPassenger, testFlight, testSaver);
  });

  it('passenger를 passengerInfomation 프로퍼티에 할당한다', () => {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });

  it('flight를 flightInformation 프로퍼티에 할당한다.', () => {
    expect(testReservation.flightInformation).toBe(testFlight);
  });

  it('예약 정보를 젖아한다.', () => {
    expect(testSaver.saveReservation).toHaveBeenCalled();
  });
});
