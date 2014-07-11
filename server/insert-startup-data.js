CreateSeedData = function() {
line1 = {
    "payload": {
        "whiteboard_id": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
        "shape": {
            "wb_id": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
            "shape_type": "line",
            "status": "DRAW_UPDATE",
            "id": "jmvjhcf6p8hj-1-1405019109277",
            "shape": {
                "type": "line",
                "status": "DRAW_UPDATE",
                "points": [
                    0.89795918367347,
                    0.965986394557824,
                    0.306122448979593,
                    0.95238095238095
                ],
                "whiteboardId": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
                "id": "jmvjhcf6p8hj-1-1405019109277",
                "square": false,
                "transparency": false,
                "thickness": 88,
                "color": 0
            }
        },
        "meeting_id": "183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1405019094496",
        "requester_id": "jmvjhcf6p8hj"
    },
    "header": {
        "timestamp": 81104812,
        "name": "send_whiteboard_shape_message",
        "version": "0.0.1"
    }
}

line2 = {
    "payload": {
        "whiteboard_id": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
        "shape": {
            "wb_id": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
            "shape_type": "rectangle",
            "status": "DRAW_UPDATE",
            "id": "jmvjhcf6p8hj-1-1405019109277",
            "shape": {
                "type": "rectangle",
                "status": "DRAW_UPDATE",
                "points": [
                    0.89795918367347,
                    0.965986394557824,
                    0.306122448979593,
                    0.95238095238095
                ],
                "whiteboardId": "d2d9a672040fbde2a47a10bf6c37b6a4b5ae187f-1405019094508/1",
                "id": "jmvjhcf6p8hj-1-1405019109277",
                "square": false,
                "transparency": false,
                "thickness": 88,
                "color": 0
            }
        },
        "meeting_id": "183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1405019094496",
        "requester_id": "jmvjhcf6p8hj"
    },
    "header": {
        "timestamp": 81104812,
        "name": "send_whiteboard_shape_message",
        "version": "0.0.1"
    }
}

  Meteor.Shapes.remove({});
  // Meteor.Shapes.insert(line1);
  Meteor.Shapes.insert(line2);
  Meteor.Whiteboard.insert({});
}
