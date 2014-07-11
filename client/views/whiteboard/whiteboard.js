Meteor.Shapes = new Meteor.Collection("shapes");

// Meteor.startup(function() {
//   Deps.autorun(function() {
//   });
// });

// $(function() {
// });

/*Template.whiteboard.canvas = new WhiteboardPaperModel('whiteboard-paper');

Template.whiteboard.rendered = function() {
  Template.whiteboard.canvas.create(document.getElementById('whiteboard-paper'));
  
  console.log("2");
  console.log("3");
  console.log("4");
}*/

Template.whiteboard.shapes = Meteor.Shapes.find();
