Attendee = function(service, messenger, attendeeId) {
  // 'new'로 생성하도록 강제한다.
  if (!(this instanceof Attendee)) {
    return new attendeeId(attendeeId);
  }

  this.attendeeId = attendeeId;

  this.service = service;
  this.messenger = messenger;
};

// 주어진 세션에 좌석 예약을 시도한다.
// 성공/실패 여부를 메시지로 알려준다.
Attendee.prototype.reserve = function(sessionId) {
  if (this.service.reserve(this.attendeeId, sessionId)) {
    this.messenger.success(
      '좌석 예약이 완료되었습니다!' +
        ' 고객님은 ' +
        this.service.getRemainingReservations() +
        ' 좌석을 추가 예약하실 수 있습니다.',
    );
  } else {
    this.messenger.failure('죄송합니다. 해당 좌석은 예약할 수 없습니다.');
  }
};
