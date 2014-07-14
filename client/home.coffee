Meteor.startup ->
  #alert "start drawing"
  if Meteor.Shapes?
    Template.whiteboard.shapes = Meteor.Shapes.find();
    #alert Meteor.Shapes?.find().count()
