CreateSeedData = function() {

  line1 = {
    "header":{
      "destination":{
        "to":"apps_channel"
      },
      "name":"whiteboard_draw_event",
      "timestamp":"Fri, 20 Jun 2014 19:09:11 GMT",
      "source":"bbb-apps"
    },
    "payload":{
      "meeting":{
        "name":"someMeetingName",
        "id":"183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1389108951916"
      },
      "session":"someSessionId",
      "whiteboard_id":"presentation_id/page_num",
      "shape_id":"q779ogycfmxk-13-1383262166102",
      "shape_type":"line",
      "data":{
        "coordinate":{
          "first_x":0.016025641025641028,
          "first_y":0.982905982905983,
          "last_x":0.33,
          "last_y":0.45
        },
        "line":{
          "line_type":"solid",
          "color":0
        },
        "weight":18,
        "background":{
          "visible":true,
          "color":0,
          "alpha":1
        },
        "square":false
      },
      "by":{
        "id":"user1",
        "name":"Guga"
      }
    }
  }

  line2 = {
    "header":{
      "destination":{
        "to":"apps_channel"
      },
      "name":"whiteboard_draw_event",
      "timestamp":"Fri, 20 Jun 2014 19:09:11 GMT",
      "source":"bbb-apps"
    },
    "payload":{
      "meeting":{
        "name":"someMeetingName",
        "id":"183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1389108951916"
      },
      "session":"someSessionId",
      "whiteboard_id":"presentation_id/page_num",
      "shape_id":"q779ogycfmxk-13-1383262166102",
      "shape_type":"line",
      "data":{
        "coordinate":{
          "first_x":0.016025641025641028,
          "first_y":0.982905982905983,
          "last_x":0.33,
          "last_y":0.45
        },
        "line":{
          "line_type":"solid",
          "color":0
        },
        "weight":18,
        "background":{
          "visible":true,
          "color":0,
          "alpha":1
        },
        "square":false
      },
      "by":{
        "id":"user1",
        "name":"Guga"
      }
    }
  }

  Meteor.Shapes.remove({});
  Meteor.Shapes.insert(line1);
  Meteor.Shapes.insert(line2);

}
