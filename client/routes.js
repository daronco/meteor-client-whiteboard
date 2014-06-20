Meteor.Router.add({
  '/': function() {
    Meteor.subscribe('shapes');
    return 'whiteboard';
  },
});
