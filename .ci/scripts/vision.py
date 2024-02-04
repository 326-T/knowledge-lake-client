import base64
import requests
import sys
import os

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

def ask_gpt_vision(persona, base64_image, api_key):
  format = f'''
  ウェブサイトの画像について、以下のペルソナに基づいてレビューを行ってください。
  ペルソナになりきって余計な情報を含めないようにしてください。
  回答は3行以内の簡潔なものでお願いします。

  {persona}
  '''

  headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
  }

  payload = {
    "model": "gpt-4-vision-preview",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": format
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/png;base64,{base64_image}"
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  }

  response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

  return response.json().get("choices")[0].get("message").get("content")

# OpenAI API Key
api_key = os.environ.get("OPENAI_API_KEY")

# Path to your image
image_path = sys.argv[1]

# Getting the base64 string
base64_image = encode_image(image_path)

personas = [
'''
1. **ペルソナB - 中年のビジネスマン**
   - 名前: 誠 (Makoto)
   - 年齢: 45歳
   - 職業: 企業経営者
   - 興味: ビジネス、マーケティング、効率性
   - レビュー視点: ウェブサイトのプロフェッショナリズム、コンテンツの質、ユーザーエンゲージメント
''',
'''
2. **ペルソナC - 主婦**
   - 名前: 美智子 (Michiko)
   - 年齢: 38歳
   - 職業: 主婦
   - 興味: 家族、健康、オンラインショッピング
   - レビュー視点: ウェブサイトの使いやすさ、情報の信頼性、家族向けコンテンツ
''',
'''
3. **ペルソナE - シニア**
   - 名前: 明 (Akira)
   - 年齢: 65歳
   - 職業: 退職
   - 興味: 健康、旅行、ニュース
   - レビュー視点: ウェブサイトのアクセシビリティ、情報の簡潔性、高齢者向けのコンテンツ
''']

def main():
  for persona in personas:
    res = ask_gpt_vision(persona, base64_image, api_key)
    print(persona)
    print(res)

if __name__ == "__main__":
  main()
