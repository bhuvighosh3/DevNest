import google.generativeai as genai

genai.configure(api_key="AIzaSyD_P7Bhvh2UzCHKzc-NSHQ6M7h_RDRczXc")

defaults = {
    'model': 'models/text-bison-001',
    'temperature': 0.7,
    'candidate_count': 1,
    'top_k': 40,
    'top_p': 0.95,
    'max_output_tokens': 1024,
    'stop_sequences': [],
    'safety_settings': [
        {"category": "HARM_CATEGORY_DEROGATORY", "threshold": 1},
        {"category": "HARM_CATEGORY_TOXICITY", "threshold": 1},
        {"category": "HARM_CATEGORY_VIOLENCE", "threshold": 2},
        {"category": "HARM_CATEGORY_SEXUAL", "threshold": 2},
        {"category": "HARM_CATEGORY_MEDICAL", "threshold": 2},
        {"category": "HARM_CATEGORY_DANGEROUS", "threshold": 2},
    ],
}

def generate_sql(table_name, columns, query_input):
    prompt = f"""input: Give a SQL query for this schema.You are an expert SQL generation system.
    Table name: {table_name}
    Columns: {columns}

    {query_input}

    output:"""

    response = genai.generate_text(**defaults, prompt=prompt)
    return response.result
