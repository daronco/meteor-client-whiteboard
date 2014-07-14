Meteor.startup(function () {
  console.log('server start');
  Meteor.Shapes.remove({});
  Meteor.call("hardcodeCollection");
});
