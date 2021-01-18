var Conference = Conference || {};

Conference.attendeeCollection = function() {
  let attendees = [];

  return {
    contains: function(attendee) {
      return attendees.indexOf(attendee) > -1;
    },
    add: function(attendee) {
      if (!this.contains(attendee)) {
        attendees.push(attendee);
      }
    },
    remove: function(attendee) {
      let index = attendees.findIndex(attendee);
      if (index > -1) {
        attendees.splice(index, 1);
      }
    },
    getCount: function() {
      return attendees.length;
    },
    iterate: function(callback) {
      attendees.forEach(callback);
    },
  };
};
