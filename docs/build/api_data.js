define({ "api": [
  {
    "type": "GET",
    "url": "/api/files/upload",
    "title": "",
    "name": "Files",
    "group": "Get_presigned_upload_url",
    "description": "<p>Get a presigned S3 url for a new upload</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory File name of the new upload</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>S3 presigned upload url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"url\": \"https://jorgehdzg-node-js-express-file-sharing.s3.us-west-2.amazonaws.com/test-file.txt?AWSAccessKeyId=AKIATUGOOFPM4STDN24X&Content-Type=&Expires=1581439981&Signature=bW9YJNxOa6mZ%2FDRd96olZIOX5RY%3D\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/FilesController.js",
    "groupTitle": "Get_presigned_upload_url"
  },
  {
    "type": "GET",
    "url": "/api/files/list",
    "title": "",
    "name": "Files",
    "group": "List_all_files_in_bucket",
    "description": "<p>Get a list of all files in the bucket</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\nHTTP/1.1 200 OK\n[\n  {\n    \"name\": \"space.jpg\",\n    \"lastModified\": \"2020-02-10T22:54:55.000Z\",\n    \"size\": 278635\n  },\n  {\n    \"name\": \"vader-1.jpg\",\n    \"lastModified\": \"2020-02-10T23:43:39.000Z\",\n    \"size\": 141275\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/FilesController.js",
    "groupTitle": "List_all_files_in_bucket"
  }
] });
