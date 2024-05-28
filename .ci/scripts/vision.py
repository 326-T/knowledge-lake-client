import base64
import requests
import sys
import os

# Function to encode the image


def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


def ask_gpt_vision(persona, before_image, after_image, api_key):
    format = f"""
    ウェブサイトの画像について、以下のペルソナに基づいてウェブ画面のABテストを行ってください。
    ・画像は変更前、変更後の順で表示される
    ・ペルソナになりきること
    ・余計な情報を含めないようこと
    ・回答は3行以内の簡潔なものにすること
    ・どちらの画像が良いかを判断し、その理由を述べてください

    {persona}
    """

    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"}

    payload = {
        "model": "gpt-4o",
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": format},
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/png;base64,{before_image}"},
                    },
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/png;base64,{after_image}"},
                    },
                ],
            }
        ],
        "max_tokens": 300,
    }

    response = requests.post(
        "https://api.openai.com/v1/chat/completions", headers=headers, json=payload
    )

    return response.json().get("choices")[0].get("message").get("content")


# OpenAI API Key
api_key = os.environ.get("OPENAI_API_KEY")

# Path to your image
before_image_path = sys.argv[1]
after_image_path = sys.argv[2]

# Getting the base64 string
before_base64_image = encode_image(image_path=before_image_path)
after_base64_image = encode_image(image_path=after_image_path)

personas = [
    """
1. **中年のビジネスマン**
  - 名前: 誠 (Makoto)
  - 年齢: 45歳
  - 職業: 企業経営者
  - 興味: ビジネス、マーケティング、効率性
  - レビュー視点: ウェブサイトのプロフェッショナリズム、コンテンツの質、ユーザーエンゲージメント
""",
    """
2. **主婦**
  - 名前: 美智子 (Michiko)
  - 年齢: 38歳
  - 職業: 主婦
  - 興味: 家族、健康、オンラインショッピング
  - レビュー視点: ウェブサイトの使いやすさ、情報の信頼性、家族向けコンテンツ
""",
    """
3. **高校生**
  - 名前: 理沙 (Risa)
  - 年齢: 17歳
  - 職業: 学生
  - 興味: ソーシャルメディア、エンターテインメント、トレンド
レビュー視点: ウェブサイトのトレンド感、エンターテインメントの質、ソーシャルメディア統合
""",
    """
4. **シニア**
  - 名前: 明 (Akira)
  - 年齢: 65歳
  - 職業: 退職
  - 興味: 健康、旅行、ニュース
  - レビュー視点: ウェブサイトのアクセシビリティ、情報の簡潔性、高齢者向けのコンテンツ
""",
]

icons = [
    '<img src="https://github.com/326-T/knowledge-lake-client/assets/32381339/1572cd66-047e-4a61-be34-1a9a69fa2d49" width="30%" height="auto">',
    '<img src="https://github.com/326-T/knowledge-lake-client/assets/32381339/8902eb7c-6f7b-4e50-9bb5-f75364049f3a" width="30%" height="auto">',
    '<img src="https://github.com/326-T/knowledge-lake-client/assets/32381339/2eaf32ca-8472-47bf-a336-d3befda76c5e" width="30%" height="auto">',
    '<img src="https://github.com/326-T/knowledge-lake-client/assets/32381339/2fd20432-bfaf-47b1-8854-67ebb6a7c3a3" width="30%" height="auto">',
]


def main():
    for index, persona in enumerate(personas):
        res = ask_gpt_vision(
            persona=persona,
            before_image=before_base64_image,
            after_image=after_base64_image,
            api_key=api_key,
        )
        print(icons[index])
        print(persona)
        print(res)
        print("\n")
        print("---")


if __name__ == "__main__":
    main()
