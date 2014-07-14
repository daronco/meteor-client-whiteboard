Router.map ->
  @route 'main',
    path: "/"
    action: ->
      @redirect('/abc')
      Meteor.subscribe 'shapes'
      
      #Meteor.Shapes.remove({})
      #Meteor.subscribe('shapes') #move it to onStartup - when the client starts
      
      # shapes = Meteor.Shapes.find().fetch()
      # alert "we are dealing with " + shapes.length + " shapes"
      # aContainer = document.createElement('div')
      # aContainer.setAttribute('id', 'container')
      # document.getElementById('container').appendChild()
      # #wpm = new WhiteboardPaperModel(document.getElementById('whiteboard-paper'))
      # wpm = new WhiteboardPaperModel("whiteboard-paper", 400, 400)
      # for shape in shapes
      #   shapeType = shape.payload.shape.shape_type
      #   data = shape.payload.shape.shape
      #   alert "shapeType=" + shapeType

      #   wpm.makeShape(shapeType, data)
      #   wpm.updateShape(shapeType, data)

      #'whiteboard'

  @route 'drawing',
    path: "/abc"
    action: ->
      console.log "at the moment of the subscription for Shapes we have: " + Meteor.Shapes.find().count()

