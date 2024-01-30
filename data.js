var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-principal",
      "name": "Entrada Principal",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0371855898672937,
        "pitch": 0.13855015288504902,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.1397709611194946,
          "pitch": 0.14312627331871042,
          "rotation": 0,
          "target": "1-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-centro",
      "name": "Centro",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.09228339679826,
        "pitch": 0.16483927901376383,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.03884542838766869,
          "pitch": 0.009376835389149463,
          "rotation": 0,
          "target": "0-entrada-principal"
        },
        {
          "yaw": -3.095048280769154,
          "pitch": 0.07866853674004659,
          "rotation": 0,
          "target": "2-altar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-altar",
      "name": "Altar",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.969702767733663,
        "pitch": 0.060928928321873244,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.4296797456861352,
          "pitch": -0.07994246291393381,
          "rotation": 0,
          "target": "3-ala-derecha"
        },
        {
          "yaw": 1.888045278180777,
          "pitch": 0.15216446081780788,
          "rotation": 0,
          "target": "4-ala-izquierda"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.948518615416134,
          "pitch": -0.3260825382919297,
          "title": "La Catedral",
          "text": "<p style=\"margin-bottom: 1rem; color: rgb(51, 51, 51); font-family: &quot;Noto Sans&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; background-color: rgb(255, 255, 255);\">La Iglesia la catedral se encuentra ubicada entre las calles General Maldonado y Quito, ciudad de Latacunga, provincia de Cotopaxi.</p><p style=\"margin-bottom: 1rem; color: rgb(51, 51, 51); font-family: &quot;Noto Sans&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; background-color: rgb(255, 255, 255);\">La construcción es de estilo románico, en su interior existe un altar trabajado en piedra pómez, posee obras artísticas e imágenes coloniales; en el torreón se aprecia un corrillón, conjunto de campanarios que anuncian las horas y las eucaristías realizadas. Es una de las edificaciones emblemáticas de la ciudad y representa el símbolo evidente de fe de los Latacungueños.</p>"
        }
      ]
    },
    {
      "id": "3-ala-derecha",
      "name": "Ala Derecha",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0543615443466283,
          "pitch": 0.06296237472082922,
          "rotation": 0,
          "target": "2-altar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ala-izquierda",
      "name": "Ala Izquierda",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.930582680624873,
        "pitch": 0.025460869845232992,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.03551431732134702,
          "pitch": 1.1499245999857521e-10,
          "rotation": 0,
          "target": "2-altar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "La Catedral",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
