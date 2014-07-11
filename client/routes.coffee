Router.map ->
  @route "start",
    path: "/"
    action: ->
      Meteor.subscribe('shapes')
      alert "start drawing"
      shapes = Meteor.Shapes.find().fetch()
      alert "we are dealing with " + shapes.length + " shapes"
      aContainer = document.createElement('div')
      aContainer.setAttribute('id', 'container')
      #wpm = new WhiteboardPaperModel(document.getElementById('whiteboard-paper'))
      wpm = new WhiteboardPaperModel(aContainer)
      for shape in shapes
        shapeType = shape.payload.shape.shape_type
        data = shape.payload.shape.shape
        alert "shapeType=" + shapeType

        wpm.makeShape(shapeType, data)
        wpm.updateShape(shapeType, data)

      'whiteboard'
