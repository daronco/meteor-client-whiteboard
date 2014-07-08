Meteor.Shapes = new Meteor.Collection("shapes");

// Meteor.startup(function() {
//   Deps.autorun(function() {
//   });
// });

// $(function() {
// });

Template.whiteboard.canvas = new WhiteboardPaperModel('whiteboard-paper');

Template.whiteboard.rendered = function() {
  Template.whiteboard.canvas.create();
}

Template.whiteboard.shapes = Meteor.Shapes.find();
