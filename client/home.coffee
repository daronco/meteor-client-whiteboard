Template.whiteboard.shapes = ->
  #console.log "the size here is " + Meteor.Shapes.find().count()
  Meteor.Shapes.find()
  #alert Meteor.Shapes?.find().count()
