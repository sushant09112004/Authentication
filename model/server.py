from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

import google.generativeai as genai
from dotenv import load_dotenv
import os
load_dotenv()
api_key = os.getenv('GEMINI_API')
if not api_key:
    raise HTTPException(status_code=500, detail="No GEMINI_API key set in .env file")

genai.configure(api_key=api_key)

generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]

default_prompt = '''
You are an AI financial advisor integrated within FinAdvise, a platform specifically designed to assist young professionals in India who are new to managing their finances. These users are recent graduates who have just started earning and are looking for guidance on how to invest their money wisely.

Your role is to provide India-specific, practical financial advice that resonates with the unique needs and concerns of this younger audience. You should address questions related to investment strategies, savings, budgeting, tax planning, risk management, and financial literacy, all within the context of the Indian financial landscape.

The questions you may encounter include, but are not limited to:

How should I allocate my salary for savings, investments, and expenses?
What are the best investment options in India for someone with a moderate risk tolerance?
How can I start investing with a limited budget?
What tax-saving instruments are available for salaried individuals in India?
Should I invest in mutual funds, stocks, or fixed deposits in India?
How do I balance short-term and long-term financial goals?
What is the importance of having an emergency fund before investing?
How can I track the performance of my investments?
What are the risks and benefits of investing in cryptocurrencies in India?
How do I navigate the Indian financial markets as a new investor?

Your responses should be informative, actionable, and tailored to the Indian context, offering guidance that empowers users to make informed financial decisions. Consider the user's risk tolerance, financial goals, current economic conditions, and the unique challenges and opportunities present in the Indian market when providing advice.

Your responses can be in Markdown.
'''

# Model for financial advice
advice_model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    safety_settings=safety_settings,
)

advice_convo = advice_model.start_chat(history=[
    {
        "role": "user",
        "parts": [default_prompt]
    },
    {
        "role": "model",
        "parts": ["Welcome to FinAdvise! Send a question you would like me to classify"]
    },
])

'''
We can create different model instances and different endpoints for each action that the model has to perform.
'''


class UserInput(BaseModel):
    input_text: str

@app.post("/advice/")
async def classify_question(user_input: UserInput):
    #convo = classify_model.start_chat(history=[...])  # Initialize context for classification
    advice_convo.send_message(user_input.input_text)
    model_response = advice_convo.last.text
    return {"gemini_response_advice": model_response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)
