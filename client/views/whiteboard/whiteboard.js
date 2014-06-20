Meteor.Shapes = new Meteor.Collection("shapes");

// Meteor.startup(function() {
//   Deps.autorun(function() {
//   });
// });

// $(function() {
// });

Template.whiteboard.shapes = Meteor.Shapes.find();
