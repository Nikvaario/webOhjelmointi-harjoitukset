import json
from flask import Flask, request, Response

app = Flask(__name__)
@app.route('/helloWorld')
def helloWorld(): 
    try: 
        args = request.args
        number1 = int(args.get("number1"))
        response = ""

        for hello in range(number1):
            hello = "Hello World!"
            response = response + " " +  hello

        return response
    
    except ValueError:
        response = {
            "message": "Invalid number as addend",
            "status": 400
        }
        jsonResponse = json.dumps(response)
        httpResponse = Response(response=jsonResponse, status=400, mimetype="application/json")
        return httpResponse

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    jsonResponse = json.dumps(response)
    httpResponse = Response(response=jsonResponse, status=404, mimetype="application/json")
    return httpResponse

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)