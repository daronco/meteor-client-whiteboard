Template.whiteboard.shapes = ->
  Meteor.Shapes.find()

Template.whiteboard.events
  "click .drawShapes":() ->
    alert "drawShapes"
    #wpm = new WhiteboardPaperModel(document.getElementById('whiteboard-paper'))
    wpm = new WhiteboardPaperModel("whiteboard-paper", 400, 400)
    console.log "shapes:" + Meteor.Shapes.find().fetch().length
    for shape in Meteor.Shapes.find().fetch()
      shapeType = shape.shape.payload.shape.shape_type
      data = shape.shape.payload.shape.shape
      console.log "shapeType=" + shapeType
      console.log "data=" + JSON.stringify data

      wpm.makeShape(shapeType, data)
      wpm.updateShape(shapeType, data)
