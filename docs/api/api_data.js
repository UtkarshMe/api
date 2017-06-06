define({ "api": [
  {
    "name": "AIIMS_IMS",
    "group": "General",
    "type": "get",
    "url": "/",
    "title": "Request something",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of something</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>Total number of somethings</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "something",
            "description": "<p>Something</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Total number of something returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"something\": \"This is something\",\n  \"number\": 10\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SomethingNotFound",
            "description": "<p>No something of that ID was found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "General"
  }
] });
