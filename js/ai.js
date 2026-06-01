const AI = {
  getKey() { return localStorage.getItem('claude_api_key') || ''; },
  setKey(k) { localStorage.setItem('claude_api_key', k); },
  hasKey() { return !!this.getKey(); },

  async getFeedback(prompt, essay) {
    const key = this.getKey();
    if (!key) throw new Error('NO_KEY');

    const systemPrompt = `你是台灣學測英文作文的專業閱卷老師，擁有豐富的評分與輔導經驗。
請根據學測官方評分標準，對學生的英文作文進行詳細評分與回饋。

評分標準（各 0–5 分，滿分 20 分）：
1. 內容 (Content)：切題程度、想法發展、細節具體性
2. 組織 (Organization)：段落結構、邏輯連貫、首尾呼應
3. 語言 (Language)：文法正確性、句型多樣性、語意清晰度
4. 字彙與拼字 (Vocabulary)：用字準確、字彙豐富度、拼字與標點

請以繁體中文回覆，並嚴格按照以下 JSON 格式輸出（不要有其他文字）：
{
  "scores": {
    "content": <0-5的整數或0.5>,
    "organization": <0-5的整數或0.5>,
    "language": <0-5的整數或0.5>,
    "vocab": <0-5的整數或0.5>
  },
  "strengths": ["優點1", "優點2", "優點3"],
  "improvements": ["改進建議1", "改進建議2", "改進建議3"],
  "correctedSentences": [
    {"original": "原句", "corrected": "修改後", "reason": "說明"}
  ],
  "overallComment": "整體評語（2-3句，鼓勵為主）"
}`;

    const userMessage = `【作文題目】\n${prompt}\n\n【學生作文】\n${essay}`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      if (res.status === 401) throw new Error('INVALID_KEY');
      throw new Error(err.error?.message || `API error ${res.status}`);
    }

    const data = await res.json();
    const text = data.content[0].text.trim();
    const jsonStr = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    return JSON.parse(jsonStr);
  }
};
