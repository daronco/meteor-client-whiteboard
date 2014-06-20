Meteor.publish('shapes', function() {
  return Meteor.Shapes.find();
});
