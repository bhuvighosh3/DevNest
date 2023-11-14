import os

from flask import Flask, jsonify, request
from query_generation.generate_sql_using_palm import generate_sql
from code_generation.generate_code_from_text import generate_code_from_text

app = Flask(__name__)

UPLOAD_FOLDER = 'static/uploads'

@app.route('/api/v1/')
def index():
    return jsonify({'message': 'Welcome to the Image Captioning and Code Generation API'})

@app.route('/api/v1/query_generation/using_palm', methods=['POST'])
def generate_sql_using_palm():
    try:
        data = request.get_json()

        table_name = data.get("table_name")
        columns = data.get("columns")
        query_input = data.get("query_input")

        result = generate_sql(table_name, columns, query_input)

        return jsonify({"sql_query": result})

    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/api/v1/code_generation/using_text', methods=['POST'])
def code_from_text():
    try:
        data = request.get_json()
        input_text = data.get("input_text")

        generated_text = generate_code_from_text(input_text)

        return generated_text

    except Exception as e:
        return jsonify({"error": str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)