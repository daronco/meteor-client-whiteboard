Meteor.publish('shapes', function() {
	console.log("at the point of publishing Shapes we have " + Meteor.Shapes.find().count());
  return Meteor.Shapes.find();
});

/*Meteor.publish('whiteboard', function() {
  return Meteor.Whiteboard.find();
});
*/