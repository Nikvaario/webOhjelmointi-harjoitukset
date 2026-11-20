import json
from flask import Flask, request, Response

with open("PythonFlask-Module/#2/dictionary.json", "r") as file:
    data = json.load(file)
    dictionary = data

app = Flask(__name__)
@app.route('/sum')
def calculateSum():
    args = request.args
    inputWord = args.get("word")
    translation = { "English": inputWord, "Finnish": dictionary.get(inputWord)}
    if translation["Finnish"] != None:
        return translation
    else:
        response = {
            "Error": "Word not found in dictionary",
            "Status": 404
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=404, mimetype="application/json")
        return http_response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
    