Meteor.publish('shapes', function() {
  return Meteor.Shapes.find();
});

Meteor.publish('whiteboard', function() {
  return Meteor.Whiteboard.find();
});
