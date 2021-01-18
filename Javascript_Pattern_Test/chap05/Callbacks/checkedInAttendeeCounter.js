var Conference = Conference || {};

Conference.checkedInAttendeeCounter = function() {
  let checkedInAttendee = 0;
  let self = {
    increment: function() {
      checkedInAttendee++;
    },
    getCount: function() {
      return checkedInAttendee;
    },
    countIfCheckedIn: function(attendee) {
      if (attendee.isCheckedIn()) {
        self.increment();
      }
    },
  };
  return self;
};
