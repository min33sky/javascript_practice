var Conference = Conference || {};

Conference.attendeeCollection = function() {
  'use strict';

  var attendees = [];

  return {
    // contains, add, remove, getCount 함수 줄임
    iterate: function(callback) {
      attendees.forEach(callback);
    },
  };
};
