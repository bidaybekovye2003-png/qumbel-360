var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.023827657117941214,
          "pitch": 0.07392719931149827,
          "rotation": 0,
          "target": "1-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama1",
      "name": "Panorama(1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02844030341869086,
          "pitch": 0.06064776146582318,
          "rotation": 0,
          "target": "0-panorama"
        },
        {
          "yaw": 2.910956043374086,
          "pitch": 0.2642024046413276,
          "rotation": 0,
          "target": "2-panorama2"
        },
        {
          "yaw": -2.7781149252531634,
          "pitch": 0.25114600741045834,
          "rotation": 0,
          "target": "3-panorama3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama2",
      "name": "Panorama(2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2396235968799303,
          "pitch": 0.2359363043773115,
          "rotation": 0,
          "target": "3-panorama3"
        },
        {
          "yaw": 0.3163778058230413,
          "pitch": 0.2849710612615475,
          "rotation": 1.5707963267948966,
          "target": "1-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama3",
      "name": "Panorama(3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1165807043304028,
          "pitch": 0.29044877603531916,
          "rotation": 0,
          "target": "2-panorama2"
        },
        {
          "yaw": -0.15639680655529276,
          "pitch": 0.6996479377903615,
          "rotation": 4.71238898038469,
          "target": "1-panorama1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
