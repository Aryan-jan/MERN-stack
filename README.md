JSday19.js API

    GET /notes
        requests all body in the notes array
        example: 
            request: GET http://localhost/notes 
            output: [
                        {
                        "id": 1,
                        "text": "Hello World"
                        },
                        {
                        "id": 1,
                        "text": "Hello Love"
                        }
                    ]

    GET /notes/:id
        requests the body with the corresponding id
        example:
            request: GET http://localhost/notes/2
            output:
                        {
                        "id": 1
                        "text": "Hello Love"
                        }
            404 Error if id is not found: "ID not found" 

    POST /notes/
        requests to create new body with id and text key and store it in the notes array
        example:
            request: POST http://localhost/notes
                    {
                        "id": 1
                        "text": "Hello Love"
                    }
            output: 
                    notes = [
                        {
                        "id": 1
                        "text": "Hello Love"
                        }
                    ]
            400 Error if body is not empty: "JSON cannot be empty"

    PUT /notes/:id
        requests to update the value of indicated key with the corresponding id
        example:
            request: PUT http://localhost/notes
                    {
                        "id": 1
                        "text": "Hello Goodbye"
                    }
            output: 
                    notes = [
                        {
                        "id": 1
                        "text": "Hello Goodbye"
                        }
                    ]
            404 Error if body is not empty: "ID not found"
     
    DELETE /notes/:id
        requests to delete the body with the indicated id
        example: 
            request: DELETE http://localhost/notes/1
            output: 
                    {
                    "message": "Body with id 4 Deleted"
                    }
            404 Error if body is not empty: "ID not found"