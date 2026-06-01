let questions = [
  {
    id: 1,
    year: '115學測',
    type: '主題式寫作',
    exam: '學測',
    title: '以寵物取代子女——一個世代的選擇？',
    desc: '分析年輕世代選擇養寵物而非生育的社會現象，描述圖片內容並發表個人觀點',
    image: 'question%20pics/115.png',
    prompt: `【寫作任務】
‧第一段：說明這兩張圖片所反映的社會現象，並推測可能的成因。
‧第二段：表達你對此現象的個人看法，以及可能對社會帶來的影響。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['主題式', '社會議題', '家庭']
  },
  {
    id: 2,
    year: '114學測',
    type: '看圖寫作',
    exam: '學測',
    title: '颱風假的兩種樣貌',
    desc: '觀察兩張對比圖片，描述颱風假中不同身份的人所面對的截然不同處境，並表達個人觀點',
    image: 'question%20pics/114.png',
    prompt: `【寫作任務】
‧第一段：根據兩張圖片，描述颱風假期間不同身份的人所面對的截然不同情境。
‧第二段：表達你對「颱風假」此一議題的看法，並提出具體改善建議。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '社會議題', '勞工']
  },
  {
    id: 3,
    year: '113學測',
    type: '主題式寫作',
    exam: '學測',
    title: '牠是我們家的一份子',
    desc: '描述一隻你認識或想像中的寵物，說明人與動物之間的情感連結，並分享寵物對你生活的影響',
    image: 'question%20pics/113.png',
    prompt: `【寫作任務】
‧第一段：介紹一隻你認識或想像中的寵物，包括外觀、個性與生活習慣。
‧第二段：說明這隻寵物對主人（或對你）的意義，以及人與動物之間的情感連結。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['主題式', '動物', '情感']
  },
  {
    id: 4,
    year: '112學測',
    type: '主題式寫作',
    exam: '學測',
    title: '一個 😊 抵千言？——表情符號與現代溝通',
    desc: '探討表情符號（emoji）在日常溝通中扮演的角色，分析其優缺點並表達個人觀點',
    image: 'question%20pics/112.png',
    prompt: `【寫作任務】
‧第一段：說明你對「在文字訊息中使用表情符號（emoji）」的看法（贊成或反對）。
‧第二段：提出具體理由與例子，說明表情符號對日常溝通的影響。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['主題式', '科技', '語言']
  },
  {
    id: 5,
    year: '111學測',
    type: '看圖寫作',
    exam: '學測',
    title: '理想公園——兩種使用方式',
    desc: '根據兩幅插圖，比較兩組人對公園理想使用方式的不同，並發表個人觀點',
    image: 'question%20pics/111.png',
    prompt: `【寫作任務】
‧第一段：根據兩幅插圖，描述兩組人對公園的不同使用方式及其差異。
‧第二段：表達你心目中理想的公園應如何規劃與使用，並說明理由。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧需涵蓋兩段要求，段落分明`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '環境', '生活']
  },
  {
    id: 6,
    year: '110學測',
    type: '看圖寫作',
    exam: '學測',
    title: '花開了，請別踩——賞花與自律',
    desc: '根據兩幅圖片，描述遊客在花圃中拍照踩踏的事件，並就「尊重環境」議題表達個人觀點',
    image: 'question%20pics/110.png',
    prompt: `【寫作任務】
‧第一段：根據兩幅圖片，描述事件發生的場景、人物與行為。
‧第二段：表達你對「賞花應守規矩、尊重環境」一事的看法，並提出可行的改善建議。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '環境', '公德心']
  },
  {
    id: 7,
    year: '109學測',
    type: '看圖寫作',
    exam: '學測',
    title: '伸出援手，還是默然走開？',
    desc: '根據兩幅圖片，描述目睹他人需要幫助時，選擇伸出援手與選擇漠視的不同場景，並表達個人觀點',
    image: 'question%20pics/109.png',
    prompt: `【寫作任務】
‧第一段：根據兩幅圖片，描述目睹他人需要幫助時，「伸出援手」與「漠然走開」的兩種反應。
‧第二段：表達你個人對於是否伸出援手的看法與理由，並可援引自身或他人的相關經驗。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '品格教育', '社會責任']
  },
  {
    id: 8,
    year: '108學測',
    type: '看圖寫作',
    exam: '學測',
    title: '撿到了——誠實的代價與回報',
    desc: '根據圖片描述一個拾金不昧的故事，並就誠實與道德選擇表達個人觀點',
    image: 'question%20pics/108.png',
    prompt: `【寫作任務】
‧第一段：根據圖片描述一則拾金不昧的故事情節，含人物、地點與事件經過。
‧第二段：表達你對「誠實」這項美德的看法，並分享一次你自己或他人類似的經驗。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '品格教育', '誠信']
  },
  {
    id: 9,
    year: '107學測',
    type: '看圖寫作',
    exam: '學測',
    title: '為什麼大家都在排隊？',
    desc: '根據圖片描述台灣的排隊消費現象，分析人們趨之若鶩的心理，並表達個人觀點',
    image: 'question%20pics/107.png',
    prompt: `【寫作任務】
‧第一段：描述你曾見過或經歷過的一次排隊購物經驗（人事時地物）。
‧第二段：分析人們為何熱衷排隊，並表達你個人對「排隊現象」的看法。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '消費文化', '社會觀察']
  },
  {
    id: 10,
    year: '106學測',
    type: '看圖寫作',
    exam: '學測',
    title: '計畫趕不上變化——那次意外的旅程',
    desc: '根據四幅連環圖片，描述一次家庭出遊遇到塞車的經過，並延伸說明從意外中獲得的領悟',
    image: 'question%20pics/106.png',
    prompt: `【寫作任務】
‧依四格圖片的順序，描述一個家庭外出旅遊卻遇到塞車的故事。
‧在結尾段落，說明你從這次「計畫趕不上變化」中得到的啟發或體悟。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧需依圖片順序完整敘述，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '家庭', '敘述']
  },
  {
    id: 11,
    year: '105學測',
    type: '主題式寫作',
    exam: '學測',
    title: '家事，是誰的事？',
    desc: '以個人家庭經驗為出發點，討論家事分工的重要性，並表達對家庭責任與性別平等的看法',
    image: 'question%20pics/105.png',
    prompt: `【寫作任務】
‧第一段：說明你家家事的分工狀況，以及你自己負責的家務內容。
‧第二段：表達你對「家事分工」的看法，以及為何家事應由全家共同分擔。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['主題式', '家庭', '性別平等']
  },
  {
    id: 12,
    year: '104學測',
    type: '主題式寫作',
    exam: '學測',
    title: '我想讀這本書——選一本書，說說為什麼',
    desc: '從兩個書名中選擇一本，根據書名推測內容並說明選擇這本書的理由與期望',
    image: 'question%20pics/104.png',
    prompt: `【寫作任務】
‧請從兩本書中擇一：(1) "The Power of Habit"（習慣的力量）；(2) "The Art of Travel"（旅行的藝術）。
‧第一段：依書名推測這本書的內容大致為何。
‧第二段：說明你為什麼想讀這本書，以及期望從書中獲得什麼。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧請在作文開頭清楚說明你選擇的書名
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['主題式', '閱讀', '個人成長']
  },
  {
    id: 13,
    year: '103學測',
    type: '看圖寫作',
    exam: '學測',
    title: '低頭族的代價',
    desc: '根據兩幅圖片，描述邊走路邊使用手機的危險情境，並表達對「低頭族」現象的個人觀點',
    image: 'question%20pics/103.png',
    prompt: `【寫作任務】
‧第一段：根據圖片，描述「低頭族」邊走路邊使用手機可能面臨的危險情境。
‧第二段：表達你對「低頭族」現象的個人看法，並提出具體改善建議。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '科技', '安全']
  },
  {
    id: 14,
    year: '102學測',
    type: '看圖寫作',
    exam: '學測',
    title: '博愛座上的反思',
    desc: '根據兩幅圖片，描述博愛座被占用與主角後來自身需要讓座的因果故事，並就同理心議題表達觀點',
    image: 'question%20pics/102.png',
    prompt: `【寫作任務】
‧第一段：依兩幅圖片，描述一段在公車或捷運博愛座上所發生的故事。
‧第二段：表達你對「博愛座」與「同理心」的個人看法。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧兩段皆需涵蓋，段落清晰`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['看圖', '品格教育', '同理心']
  },
  {
    id: 15,
    year: '101學測',
    type: '信函寫作',
    exam: '學測',
    title: '寫信給沉迷電玩的好友',
    desc: '以書信形式，向一位沉迷電玩、荒廢課業的好友表達關心，提出具體建議並表達友誼的真諦',
    image: 'question%20pics/101.png',
    prompt: `【寫作任務】
‧以書信形式，寫一封信給一位沉迷電玩、荒廢課業的好友。
‧第一段：表達你對好友近況的關心與觀察。
‧第二段：提出具體建議，並說明友誼對你的意義。

【寫作要求】
‧字數：120 字以上（建議 150–180 字）
‧注意書信格式，語氣誠懇而不說教`,
    wordMin: 120, wordSuggest: '150–180', timeMin: 40,
    tags: ['書信', '友誼', '品格教育']
  },

  // 指考
  { id: 201, year: '110指考', exam: '指考', image: '指考pics/110.png', timeMin: 45 },
  { id: 202, year: '109指考', exam: '指考', image: '指考pics/109.png', timeMin: 45 },
  { id: 203, year: '108指考', exam: '指考', image: '指考pics/108.png', timeMin: 45 },
  { id: 204, year: '107指考', exam: '指考', image: '指考pics/107.png', timeMin: 45 },
  { id: 205, year: '106指考', exam: '指考', image: '指考pics/106.png', timeMin: 45 },
  { id: 206, year: '105指考', exam: '指考', image: '指考pics/105.png', timeMin: 45 },
];

let modelEssays = [
  {
    id: 1,
    title: '他們選擇了狗，而不是孩子',
    relatedQId: 1,
    score: 19,
    scoreBreakdown: { content: 5, organization: 5, language: 5, vocab: 4 },
    tags: ['主題式', '社會議題', '頂標範文'],
    preview: 'The two pictures capture a social trend that has become impossible to ignore...',
    essay: `The two pictures capture a social trend that has become impossible to ignore. In the first image, a young couple beams with joy as they hold their golden retriever, the dog licking one of them affectionately. In the second, another couple of similar age pushes a stroller through a crowded street, their expressions tired, their steps hurried. Both pictures depict love — but under very different conditions of stress and freedom.

I understand why more young people today opt for pets over parenthood. In an era defined by skyrocketing housing costs, demanding careers, and an erosion of communal childcare, raising a child feels less like a joy and more like a gamble on one's financial survival. A pet, by contrast, offers warmth, companionship, and emotional support without the same level of sacrifice. However, this trend carries real societal consequences: declining birth rates strain pension systems and shrink the future workforce. Rather than dismissing young people's choices as selfish, society should address the root causes — unaffordable housing, inadequate parental leave, and relentless career pressure — that make parenthood feel impossible. When people feel genuinely supported, they tend to choose differently.`,
    annotations: [
      { sentence: 'Both pictures depict love — but under very different conditions of stress and freedom', note: '破折號製造轉折，「stress and freedom」對比點題，以一句完成兩圖的核心比較' },
      { sentence: 'raising a child feels less like a joy and more like a gamble on one\'s financial survival', note: '「less like A and more like B」比較句型搭配「gamble on survival」，措辭犀利，論點鮮明有力' },
      { sentence: 'When people feel genuinely supported, they tend to choose differently', note: '以簡短條件句收尾，不說教卻深刻指向政策改革方向，留下強烈餘韻' }
    ]
  },
  {
    id: 2,
    title: '同一場颱風，兩種命運',
    relatedQId: 2,
    score: 19,
    scoreBreakdown: { content: 5, organization: 5, language: 4, vocab: 5 },
    tags: ['看圖', '社會議題', '頂標範文'],
    preview: 'The two pictures tell a story of contrasts that no weather forecast can fully capture...',
    essay: `The two pictures tell a story of contrasts that no weather forecast can fully capture. In the first image, a family is curled up on the couch, laughing at a movie while rain streams down the window — a portrait of cozy contentment. In the second, a delivery worker in a thin raincoat navigates a flooded street on his motorbike, his face taut with concentration and exhaustion. Both are experiencing the same typhoon. Only one is on holiday.

Typhoon days are officially designated to protect the public from danger. Yet this protection is selectively distributed. Desk workers and students enjoy a day of rest, while delivery riders, convenience store employees, and medical staff continue working — often without the legal right to refuse, and sometimes without hazard pay. I believe this disparity reveals a fundamental inequity in how our society values certain forms of labor. True reform requires not only legislation mandating hazard compensation for on-duty workers during extreme weather, but also a cultural shift: one that recognizes every worker's safety as equally worth protecting. A typhoon holiday should keep everyone safe — not just those whose jobs allow them to stay home.`,
    annotations: [
      { sentence: 'a portrait of cozy contentment', note: '以「portrait」形容生活場景，將靜止畫面詩意化，四個字傳遞飽滿的畫面溫度與反諷張力' },
      { sentence: 'Both are experiencing the same typhoon. Only one is on holiday.', note: '兩個短句形成強烈對比，「Only one is on holiday」單行點出核心矛盾，節奏感極佳' },
      { sentence: 'not only legislation mandating hazard compensation...but also a cultural shift', note: '「not only...but also」並列結構呼應「提出具體改善方向」的要求，展現雙軌論述的邏輯層次' }
    ]
  },
  {
    id: 3,
    title: '她不只是一隻貓',
    relatedQId: 3,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['主題式', '動物', '敘述細膩'],
    preview: 'My family adopted Mochi, a tabby cat, when I was twelve...',
    essay: `My family adopted Mochi, a tabby cat, when I was twelve. At the time, she was the smallest living thing in our apartment — a handful of grey fur with eyes too large for her face. Seven years later, she is as much a part of our household as any of us, with a personality so distinct that we often joke she owns the place rather than the other way around.

What Mochi has taught me is that the bond between humans and animals is not merely one of utility. She cannot pay bills or help with homework, yet her presence has reshaped the texture of our daily lives. When my parents argue, she finds her way between them and simply sits down, as if to mediate. When I study late into the night, she curls under the lamp on my desk, as if to keep me company. Research confirms what pet owners know intuitively: animals reduce stress, encourage routine, and provide unconditional acceptance that humans rarely offer one another. In a world that increasingly rewards productivity, a cat who simply exists — and loves you for existing — may be the most profound reminder that life holds value beyond achievement.`,
    annotations: [
      { sentence: 'a handful of grey fur with eyes too large for her face', note: '以誇張細節描寫幼貓，「a handful of grey fur」觸感具體，畫面溫暖自然，開場立即抓住讀者' },
      { sentence: 'she owns the place rather than the other way around', note: '以輕鬆幽默的倒裝表達「反客為主」，符合寵物當家主題，語言靈活不死板' },
      { sentence: 'a cat who simply exists — and loves you for existing — may be the most profound reminder that life holds value beyond achievement', note: '破折號插入「and loves you for existing」，哲思收尾昇華主題，結語深刻令人回味' }
    ]
  },
  {
    id: 4,
    title: '一個黃色笑臉，說了什麼？',
    relatedQId: 4,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['主題式', '科技', '語言分析'],
    preview: 'When my grandmother first received a text message with a string of yellow faces and hearts...',
    essay: `When my grandmother first received a text message with a string of yellow faces and hearts, she called me immediately to ask if I had been replaced by a robot. I laughed, but her confusion pointed to something real: emojis have transformed the way we communicate, and not everyone has been invited along for the ride.

At their best, emojis are a kind of universal shorthand — a smiley face conveys warmth across language barriers, and a crying-laughing emoji signals irony in ways that plain text cannot. They make digital communication faster, more expressive, and often more human. I use them constantly, especially to soften a message that might otherwise sound curt or cold. However, emojis also carry risks. Studies suggest that over-reliance on visual symbols can erode our ability to articulate emotions in words — particularly among younger users who grow up communicating primarily through icons. Moreover, the same emoji can carry different meanings across cultures: in some contexts, a thumbs-up signals approval; in others, it reads as dismissive or even offensive. The challenge, then, is to use emojis as a complement to language — not a replacement for it. They should add color to our words, not substitute for the skill of choosing them carefully.`,
    annotations: [
      { sentence: 'she called me immediately to ask if I had been replaced by a robot', note: '以祖母的趣味反應作開場逸事，笑中帶意，讀者迅速進入情境且對主題產生好奇' },
      { sentence: 'a kind of universal shorthand', note: '「shorthand」精準比喻表情符號的速記功能，展現詞彙精確度與語言感知力' },
      { sentence: 'add color to our words, not substitute for the skill of choosing them carefully', note: '「add color to」對比「substitute for」，平衡觀點收尾，避免走向極端，論點有說服力' }
    ]
  },
  {
    id: 5,
    title: '理想公園——兩種截然不同的樂趣',
    relatedQId: 5,
    score: 19,
    scoreBreakdown: { content: 5, organization: 5, language: 4, vocab: 5 },
    tags: ['看圖寫作', '環境', '頂標範文'],
    preview: 'The two pictures present two contrasting visions of what an ideal park should look like...',
    essay: `The two pictures present two contrasting visions of what an ideal park should look like. In the first image, a group of people enjoy the tranquility of nature — flying kites, bird-watching, and walking dogs — as if time has slowed down. In the second, another group transforms the same space into a vibrant sports arena, jogging, cycling, and playing ball with infectious energy. Both images reflect genuine needs: some seek peace, while others seek vitality.

Personally, I believe an ideal park should accommodate both types of users. When I feel stressed after school, what I crave is a quiet bench under the shade of a tree, where I can sit and observe the world without pressure. Yet there are mornings when I feel the urge to run and feel my heart pound. What I truly want is not one or the other, but a thoughtfully designed park that offers peaceful corners for reflection alongside open spaces for activity. A park, after all, should mirror the full spectrum of human needs.`,
    annotations: [
      { sentence: 'as if time has slowed down', note: '生動的比喻，將寧靜感具象化，五個字展現高水準的描寫能力' },
      { sentence: 'transforms the same space into a vibrant sports arena', note: '動詞「transforms」搭配「vibrant arena」，與第一段「tranquility」形成鮮明視覺對比' },
      { sentence: 'A park, after all, should mirror the full spectrum of human needs', note: '「after all」使語氣自然，「full spectrum」點出包容多元的核心觀點，結語深刻有力' }
    ]
  },
  {
    id: 6,
    title: '花開了，請別踩它來換一張讚',
    relatedQId: 6,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['看圖', '環境', '公德心'],
    preview: 'The two pictures document a quiet kind of cruelty...',
    essay: `The two pictures document a quiet kind of cruelty. In the first, a flower garden blooms in full spring glory — rows of lavender and cosmos stretching toward a pale blue sky, their petals still undisturbed. In the second, the same garden is dotted with visitors who have stepped beyond the designated paths, phones raised, flowers crushed beneath their knees and shoes. A sign reads "Please do not step on the flowers." Nobody seems to have read it.

I have seen this scene myself. The garden's elderly owner once told me he opens it to the public because he wants to share beauty — not because he wants it photographed into destruction. The real issue is not that people take pictures; it is that the desire for a perfect image has become stronger than basic respect for living things. When the photograph matters more than what is being photographed, something has gone seriously wrong with how we experience beauty. Perhaps the most beautiful picture is the one that shows flowers still upright — because someone, somewhere, chose not to step on them.`,
    annotations: [
      { sentence: 'a quiet kind of cruelty', note: '「quiet cruelty」用詞出乎意料而有力，在描述看似無害的拍照行為中導入深刻批判' },
      { sentence: 'photographed into destruction', note: '「photograph」作動詞搭配「into destruction」，創意語法展現語言掌控力，令人印象深刻' },
      { sentence: 'the most beautiful picture is the one that shows flowers still upright — because someone, somewhere, chose not to step on them', note: '以哲思性反轉收尾，破折號後點出「選擇」的力量，深化文章意涵' }
    ]
  },
  {
    id: 7,
    title: '那個停下來的人',
    relatedQId: 7,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['看圖', '品格教育', '敘述生動'],
    preview: 'The two pictures show the same street, the same moment, and two entirely different choices...',
    essay: `The two pictures show the same street, the same moment, and two entirely different choices. In the first, a student kneels beside an elderly man who has fallen, gathering scattered groceries with unhurried hands while the old man steadies himself against the young person's arm. In the second, another student — phone in hand, earphones in — glances at the same scene and quickens his pace, his eyes already elsewhere before he has fully passed.

I used to think that helping strangers was simply a matter of kindness. I now believe it is also a matter of courage. It takes a certain willingness to step outside one's own schedule, to accept the discomfort of being seen, and to trust that involvement is worth the cost. The student who walked away may not have been cruel — he may simply have been afraid: afraid of doing something wrong, of being late, of attracting attention. These fears are understandable. But they can be outgrown. When we teach empathy not as a feeling but as a practice — as a habit of pausing, of looking, of deciding to stay — we raise people who stop.`,
    annotations: [
      { sentence: 'gathering scattered groceries with unhurried hands', note: '「unhurried hands」細節傳遞助人者的從容與誠意，動詞「gathering」具體有畫面感' },
      { sentence: 'I used to think that helping strangers was simply a matter of kindness. I now believe it is also a matter of courage.', note: '「used to / now」時態對比展現觀點轉化，自我成長的軌跡清晰有力' },
      { sentence: 'When we teach empathy not as a feeling but as a practice...we raise people who stop', note: '「not as a feeling but as a practice」精準重新定義同理心，結尾「people who stop」呼應圖一，簡潔有力' }
    ]
  },
  {
    id: 8,
    title: '那個錢包，和它沒帶走的東西',
    relatedQId: 8,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['看圖', '誠信', '品格教育'],
    preview: 'In the first picture, a boy stands outside a convenience store, holding a wallet that is not his...',
    essay: `In the first picture, a boy stands outside a convenience store, holding a wallet that is not his. He turns it over in his hands — cash, cards, a photograph of someone's family tucked behind a receipt. He looks left, then right. Nobody is watching. In the second picture, the same boy stands at the counter, handing the wallet to a clerk. Minutes later, a woman rushes in, eyes wide with relief. She takes his hand in both of hers and does not let go for a long moment.

The boy in the first picture chose correctly, but I want to linger on the moment before the choice: the pause, the looking around, the hands turning the wallet over. Honesty, I think, is rarely dramatic. It lives in that quiet moment when nobody is watching and something small — but not insignificant — must be decided. A study I once encountered found that people are most likely to act honestly not when they are reminded of rules, but when they imagine how they will feel about themselves afterward. The boy who handed back the wallet did not become famous or rich. He became someone who could look back at that moment and not flinch.`,
    annotations: [
      { sentence: 'a photograph of someone\'s family tucked behind a receipt', note: '細節選取精準——「家庭照」讓錢包主人具體真實，觸動讀者同理心，強化歸還動機' },
      { sentence: 'Honesty, I think, is rarely dramatic. It lives in that quiet moment when nobody is watching.', note: '短句搭配「quiet moment」，將誠實定義為日常選擇而非壯舉，觀點深刻而原創' },
      { sentence: 'someone who could look back at that moment and not flinch', note: '以內心自我評價代替外在獎懲作為誠實的動機，「not flinch」選字精妙，結語有深度' }
    ]
  },
  {
    id: 9,
    title: '清晨五點半的隊伍',
    relatedQId: 9,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['看圖', '消費文化', '社會觀察'],
    preview: 'It begins before sunrise. By five-thirty in the morning, a line has already formed...',
    essay: `It begins before sunrise. By five-thirty in the morning, a line has already formed outside the newly opened pastry shop in my neighborhood — twenty, thirty people, some in pajamas, one holding an umbrella against the early autumn cold. By the time it opens at nine, the queue stretches around the block. The pastries sell out in forty minutes. In the second picture, a girl finally reaches the counter — only to take her first bite outside, furrow her brow slightly, and glance at her phone to compose the caption before the taste has fully registered.

I have never understood the psychology of waiting hours for food I could find elsewhere. Yet the phenomenon clearly satisfies something beyond hunger. Queuing for a limited item has become, especially among young people in Taiwan, a kind of social performance — a way of belonging to a trend, of converting scarcity into identity. Social media has both accelerated and exposed this: the photograph of the paper bag is often the real prize. I do not think this is shameful. But I do think it is worth asking honestly: how much of what we pursue do we actually want, and how much do we simply want the story of having gotten it?`,
    annotations: [
      { sentence: 'some in pajamas, one holding an umbrella against the early autumn cold', note: '細節列舉建立場景真實感，「one holding an umbrella」在群體中出現了個體，描寫層次豐富' },
      { sentence: 'a way of belonging to a trend, of converting scarcity into identity', note: '「converting scarcity into identity」精準分析排隊行為的社會心理，措辭深刻有學術感' },
      { sentence: 'how much of what we pursue do we actually want, and how much do we simply want the story of having gotten it?', note: '以反問句作結，「the story of having gotten it」點出社群時代消費的本質，發人深省' }
    ]
  },
  {
    id: 10,
    title: '塞在路上的那個下午',
    relatedQId: 10,
    score: 19,
    scoreBreakdown: { content: 5, organization: 5, language: 5, vocab: 4 },
    tags: ['看圖', '家庭', '頂標範文'],
    preview: 'We had been planning the trip to the science museum for three weeks...',
    essay: `We had been planning the trip to the science museum for three weeks. My younger sister had memorized the name of every exhibit. My mother had packed sandwiches, fruit, and a thermos of oolong tea. My father had, in a rare act of optimism, printed directions. By eight in the morning, we were on the road, windows down, music playing.

By nine-fifteen, we had moved exactly four hundred meters.

The highway had turned into a parking lot. An accident somewhere ahead had rewritten our Saturday. My sister fell asleep against the window. My mother suggested we listen to a podcast about volcanoes. My father turned off the air conditioning without a word so the engine would not overheat. At eleven, we gave up and turned around. We found a noodle restaurant none of us had noticed before, twenty minutes from home. The soup was extraordinary. My sister spent forty minutes at a claw machine trying to win a stuffed dinosaur and succeeded on the thirty-eighth try. It was, objectively, a terrible day. In memory, it is one of the best ones. Some detours have a way of becoming exactly where you needed to go.`,
    annotations: [
      { sentence: 'We had been planning...My sister had memorized...My mother had packed...My father had printed', note: '四重過去完成式排比強調充分準備，為之後的反轉製造強烈戲劇落差' },
      { sentence: 'By nine-fifteen, we had moved exactly four hundred meters.', note: '單行短段配合精確數字，以「喜劇式」的精確製造荒謬感，節奏落差令人印象深刻' },
      { sentence: 'Some detours have a way of becoming exactly where you needed to go', note: '以哲理化雙關語收尾，「detour」既指繞路又指人生意外，昇華全文主題，結語精彩' }
    ]
  },
  {
    id: 11,
    title: '掃地的那個下午，教了我什麼',
    relatedQId: 11,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['主題式', '家庭', '個人成長'],
    preview: 'In our house, the rule has always been simple: everyone makes the mess, everyone cleans it up...',
    essay: `In our house, the rule has always been simple: everyone makes the mess, everyone cleans it up. My mother established this principle before I was old enough to hold a mop, and my father — a man who once admitted he did not know how to operate the washing machine until his thirties — eventually learned alongside me. Our household runs on shared labor, and I was enlisted at age eight.

At the time, I resented it bitterly. I remember standing on a step stool to reach the sink, scrubbing dishes while my friends were outside. I thought it was unfair. Now, at seventeen, I am grateful. Knowing how to cook a simple meal, sort laundry, and keep a living space clean has given me a sense of competence that no classroom lesson has replicated. More importantly, it has taught me to see the invisible labor that keeps a home functioning — labor that, in many families, still falls disproportionately on women. Sharing chores is not merely a practical arrangement; it is a form of respect. It says: I see what this household requires, and I am willing to be part of providing it.`,
    annotations: [
      { sentence: 'a man who once admitted he did not know how to operate the washing machine until his thirties', note: '父親的插入描寫輕鬆幽默，使文章有溫度，同時暗示性別分工的代際問題' },
      { sentence: 'the invisible labor that keeps a home functioning', note: '「invisible labor」借用社會學概念，精準點出家務分工的深層意義，展現思維廣度' },
      { sentence: 'I see what this household requires, and I am willing to be part of providing it', note: '以間接引語模擬「家務分工」的內在宣言，結語昇華觀點，有力且不說教' }
    ]
  },
  {
    id: 12,
    title: '我想讀這本書，因為我還不相信它的書名',
    relatedQId: 12,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['主題式', '閱讀', '自我成長'],
    preview: 'If I had to choose one book from the two titles given, I would choose Everyone Is Beautiful...',
    essay: `If I had to choose one book from the two titles given, I would choose Everyone Is Beautiful: Respect Others and Be Yourself. The title alone holds a quiet kind of challenge. In a world that has become aggressively visual — where appearances are curated, filtered, and ranked by strangers online within seconds — the statement that everyone is beautiful does not feel like a truth. It feels like an argument. And I would choose this book because I want to be argued into believing it.

I am seventeen and attend a school where students are collectively very good at noticing what they lack. I notice it too. There are mornings when I look in the mirror before class and subtract rather than add — cataloguing what is wrong rather than what is present. A book that takes this experience seriously and then dismantles it — offering not empty affirmation but a reasoned case for self-acceptance and genuine respect for others — sounds not like an escape from reality but a guide through it. The title suggests that beauty is not a ranking but a recognition: that to see beauty in everyone requires first learning to stop ranking altogether. That is exactly the kind of thinking I need more of.`,
    annotations: [
      { sentence: 'I would choose this book because I want to be argued into believing it', note: '「argued into believing」表達閱讀動機獨特有力，展現批判性思維，立場新穎令人印象深刻' },
      { sentence: 'subtract rather than add — cataloguing what is wrong rather than what is present', note: '以數學動詞（subtract/add）隱喻自我評價，破折號補充說明，生動且具洞察力' },
      { sentence: 'beauty is not a ranking but a recognition', note: '「not a ranking but a recognition」是精彩的對比定義，重新詮釋書名核心概念，結語有思想深度' }
    ]
  },
  {
    id: 13,
    title: '那棵樹，和它撞見的真相',
    relatedQId: 13,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['看圖', '科技', '自我反思'],
    preview: 'The first picture shows two students walking to school, each absorbed in a separate screen...',
    essay: `The first picture shows two students walking to school, each absorbed in a separate screen — one texting, one scrolling. They are together in space but entirely absent from it. The second picture shows the consequence: one of them has walked directly into a tree, his phone spinning across the pavement, his backpack askew, his expression a precise mixture of surprise and embarrassment.

I laughed at the image. Then I recognized myself in it.

Last month, I was so engrossed in a conversation on my phone that I stepped off a curb into oncoming traffic. A driver honked. I jumped back. My heart pounded for the next five minutes. The whole incident lasted two seconds. The embarrassment of admitting it lasts considerably longer.

What these pictures illustrate is not mere clumsiness — it is the growing difficulty of occupying physical space while a screen competes for our attention. Cognitive scientists call this phenomenon "inattentional blindness": we literally stop perceiving what is in front of us when our minds are redirected elsewhere. The solution is not to ban phones, but to cultivate a habit of presence — to put the device away when moving, not because a rule demands it, but because we choose to take seriously a world that does not pause while we scroll through another.`,
    annotations: [
      { sentence: 'I laughed at the image. Then I recognized myself in it.', note: '兩個短句構成情感轉折，從旁觀笑到自我認出，讀者迅速代入，示範強效的段落開場技巧' },
      { sentence: '"inattentional blindness"', note: '引用認知科學術語並加引號，增強論點可信度，展現詞彙廣度與論述嚴謹性' },
      { sentence: 'a world that does not pause while we scroll through another', note: '「scroll through another（world）」精妙雙關——手機是另一個世界，而真實世界不為它停留，結語有詩意' }
    ]
  },
  {
    id: 14,
    title: '那個博愛座，和它帶走的東西',
    relatedQId: 14,
    score: 19,
    scoreBreakdown: { content: 5, organization: 5, language: 5, vocab: 4 },
    tags: ['看圖', '同理心', '頂標範文'],
    preview: 'The pictures tell a small story about large failures of empathy...',
    essay: `The pictures tell a small story about large failures of empathy. In the first, a teenage boy sits in a priority seat, earphones in, eyes closed — either unaware or unwilling to acknowledge the elderly woman standing beside him, one hand gripping the rail, the other steadying a heavy bag. In the second, that same boy, now on crutches after a basketball injury, stands in a crowded bus searching for a seat. No one moves.

The irony is intentional, but the lesson runs deeper than "what goes around comes around." What the pictures describe is a failure of imagination — the inability to project ourselves into a situation that differs from our current one. The boy with earphones cannot feel the ache in the elderly woman's knees because he has never had knees that ache. The passengers who stay seated cannot feel the throb in the boy's ankle because they have not yet known that particular pain. Empathy is not a feeling that arrives on its own; it is a discipline. It requires us to pause, to look, and to ask: what does this person need that I could provide? Priority seats were never meant to shame anyone. They were designed as a small, daily reminder that not all needs are visible, and that comfort — when we are able to share it — should be.`,
    annotations: [
      { sentence: 'one hand gripping the rail, the other steadying a heavy bag', note: '對仗細節描寫讓老人形象立體令人同情，「one hand...the other...」展現精準的句型控制' },
      { sentence: 'a failure of imagination — the inability to project ourselves into a situation that differs from our current one', note: '以「imagination」重新定義同理心，破折號引出哲學式展開，論點有深度且具學術感' },
      { sentence: 'comfort — when we are able to share it — should be', note: '插入語製造停頓與意涵的懸念，句子在「should be」戛然而止，讓讀者自行補完意義，結語餘韻深長' }
    ]
  },
  {
    id: 15,
    title: '給Jason的一封信',
    relatedQId: 15,
    score: 18,
    scoreBreakdown: { content: 5, organization: 4, language: 5, vocab: 4 },
    tags: ['書信', '友誼', '書信格式'],
    preview: 'Dear Jason, I am writing this, as I promised myself, with honesty rather than judgment...',
    essay: `Dear Jason,

I am writing this, as I promised myself, with honesty rather than judgment. You are one of my closest friends, and it is precisely because of that closeness that I need to say something I have been holding back for too long: I am worried about you.

I know you already know. You have told me yourself, half-joking, in the way people confess to things they are not yet ready to change. You mentioned last week that you had stayed up until four in the morning three nights in a row. You laughed when you said it. I did not.

I am not saying games are wrong — I play them too. But there is a difference between enjoying a game and using it to avoid everything else. From what I have seen, the screen has become a place where the world makes sense in a way that life outside it does not. I understand that feeling. It is not weakness; it is exhaustion.

What I am asking is simple: talk to someone. A counselor, a parent, or at the very minimum, me. You deserve more than four in the morning and an empty room. And I would rather have you present — genuinely, messily present — than have a version of you that is technically here but entirely somewhere else.

Your friend,
Alex`,
    annotations: [
      { sentence: 'with honesty rather than judgment', note: '開宗明義確立勸說語氣：坦誠而非批評，一句話奠定全信最重要的情感基調' },
      { sentence: 'confess to things they are not yet ready to change', note: '精準捕捉一種普遍的人類心理狀態，語言簡潔而洞察力深刻，展現成熟的語言表達' },
      { sentence: 'technically here but entirely somewhere else', note: '「technically present」vs「entirely somewhere else」的對比描繪沉迷的狀態，措辭精彩，情感真實有力' }
    ]
  }
];

let grammarLessons = [
  {
    id: 'transitions',
    category: 'grammar',
    name: '轉折語與連接詞',
    intro: '適當使用轉折語可以大幅提升作文的組織分數，讓段落之間邏輯清晰。以下按功能分類，學測作文必備！',
    patterns: [
      {
        name: '時間順序（Sequence）',
        formula: 'First / Then / Next / Finally / Meanwhile / When / While + 句子',
        examples: [
          { en: 'First, we packed our luggage and loaded it onto the car.', zh: '首先，我們打包行李並把它搬上車。' },
          { en: 'Meanwhile, the crowd outside the entrance continued to grow.', zh: '與此同時，入口外的人群持續增加。' }
        ],
        tip: '敘述文（看圖寫作/混合題）中，時間連接詞是串連圖片情節的關鍵'
      },
      {
        name: '加強論點（Adding）',
        formula: 'Furthermore / Moreover / In addition / Besides, + 句子',
        examples: [
          { en: 'Furthermore, excessive screen time disrupts children\'s sleep patterns.', zh: '此外，過度使用螢幕會干擾孩子的睡眠模式。' },
          { en: 'Moreover, bullying leaves lasting psychological scars on victims.', zh: '再者，霸凌會在受害者身上留下持久的心理創傷。' }
        ],
        tip: '段落開頭使用，切記後面加逗號（,）'
      },
      {
        name: '表達對比（Contrasting）',
        formula: 'However / Nevertheless / That said / In contrast / On the other hand, + 句子',
        examples: [
          { en: 'However, banning screens entirely would be both impractical and counterproductive.', zh: '然而，完全禁止螢幕既不切實際，也會適得其反。' },
          { en: 'That said, technology itself is neither good nor bad.', zh: '儘管如此，科技本身既非好也非壞。' }
        ],
        tip: '「That said」比「However」更正式，適合在文章轉折時使用'
      },
      {
        name: '表達結果（Result）',
        formula: 'As a result / Consequently / Therefore / Thus, + 句子',
        examples: [
          { en: 'As a result, the detour turned out to be the best part of the day.', zh: '結果，那段繞路反而成了當天最棒的部分。' },
          { en: 'Consequently, students\' concentration in class decreases significantly.', zh: '因此，學生在課堂上的專注力大幅下降。' }
        ],
        tip: ''
      },
      {
        name: '表達個人觀點（Opinion）',
        formula: 'As far as I am concerned / From my perspective / Personally / I believe + 句子',
        examples: [
          { en: 'From my perspective, an ideal park should accommodate both types of users.', zh: '從我的角度來看，一個理想的公園應該同時滿足兩類使用者的需求。' },
          { en: 'I firmly believe that reasonable boundaries are essential for healthy development.', zh: '我堅信合理的界限對健康發展至關重要。' }
        ],
        tip: '表達個人觀點時，「I firmly believe」比「I think」更有說服力'
      }
    ],
    vocab: []
  },
  {
    id: 'participial',
    category: 'grammar',
    name: '分詞構句',
    intro: '分詞構句可以減少重複的主詞與連接詞，讓句子更簡潔、更有變化，是學測高分句型之一。',
    patterns: [
      {
        name: '現在分詞（主動）',
        formula: 'Verb-ing ..., 主要子句.',
        examples: [
          { en: 'Looking forward to the exhibition, we set off early in the morning.', zh: '期待著展覽，我們一早就出發了。' },
          { en: 'Walking to school every day, I began to appreciate the beauty of nature.', zh: '每天走路上學，我開始欣賞大自然的美。' }
        ],
        tip: '分詞的主詞必須與主要子句的主詞相同，否則是「懸垂分詞」錯誤'
      },
      {
        name: '過去分詞（被動）',
        formula: 'Verb-ed ..., 主要子句.',
        examples: [
          { en: 'Moved by the teacher\'s dedication, he decided to help despite the typhoon.', zh: '被老師的奉獻精神感動，他決定冒著颱風前去幫忙。' },
          { en: 'Given the opportunity to study abroad, I learned to be more independent.', zh: '有了出國留學的機會，我學會了更加獨立。' }
        ],
        tip: '「Given / Moved / Inspired / Encouraged + by」是常見的高分分詞短語組合'
      },
      {
        name: '獨立分詞（形容詞/名詞）',
        formula: '形容詞/名詞片語, 主要子句.',
        examples: [
          { en: 'The mood light and joyful, we set off on our family trip.', zh: '心情輕鬆愉快，我們踏上了家庭旅途。' },
          { en: 'Heart pounding, she stepped onto the stage for the first time.', zh: '心跳加速，她第一次踏上了舞台。' }
        ],
        tip: '這是進階句型，置於句首時用逗號隔開主要子句'
      }
    ],
    vocab: []
  },
  {
    id: 'emphasis',
    category: 'grammar',
    name: '強調句型',
    intro: '強調句型能突顯文章的重點，展現句型多樣性，讓閱卷老師印象深刻。',
    patterns: [
      {
        name: '強調句（It-cleft）',
        formula: 'It is / was + 強調部分 + that / who + 其餘句子',
        examples: [
          { en: 'It is how we use technology that determines its impact on society.', zh: '正是我們使用科技的方式決定了它對社會的影響。' },
          { en: 'It was the unexpected detour that became the highlight of our trip.', zh: '正是那段意外的繞路，成為了我們旅程中最精彩的部分。' }
        ],
        tip: '強調人用 who，強調事物或時間、地點、方式用 that'
      },
      {
        name: 'What 名詞子句強調',
        formula: 'What + 子句 + is/was + 名詞/形容詞',
        examples: [
          { en: 'What surprised me most was the sheer number of people at the entrance.', zh: '最讓我驚訝的是入口處多得驚人的人群。' },
          { en: 'What I truly want is not one or the other, but a balanced park design.', zh: '我真正想要的不是其中之一，而是一個均衡的公園設計。' }
        ],
        tip: '這個句型常放在段落開頭，能有效吸引讀者注意'
      },
      {
        name: 'Not only...but also',
        formula: 'Not only + 倒裝句, but + 主詞 + also + 動詞',
        examples: [
          { en: 'Not only does excessive screen time harm eyesight, but it also disrupts sleep.', zh: '過度使用螢幕不只傷害視力，還會干擾睡眠。' }
        ],
        tip: 'Not only 放句首時，後面需要助動詞倒裝（does / did / has 等）'
      }
    ],
    vocab: []
  },
  {
    id: 'chart',
    category: 'topic',
    name: '圖表寫作完整攻略',
    intro: '圖表寫作（Chart-analyzing）是指考重點題型，要求客觀描述數據並結合個人觀點。掌握以下三大步驟與句型公式，寫出結構清晰的高分圖表作文。',
    patterns: [
      {
        name: '第一步：圖表開場句（三種公式）',
        formula: `公式一（問句名詞子句）：圖表名稱 + shows/reveals/illustrates + how/what/how many + S + V
公式二（主題名詞＋關係子句）：圖表名稱 + reveals + [the number/amount] of + N + who/which + V
公式三（主題名詞＋分詞片語）：圖表名稱 + reveals + [the number/amount] of + N + V-ing/p.p.`,
        examples: [
          { en: 'The bar chart illustrates how high school students in Taiwan allocate their daily time across five activities.', zh: '（公式一）柱狀圖說明了台灣高中生如何將每日時間分配於五項活動。' },
          { en: 'The pie chart reveals the percentage of teenagers who spend more than three hours per day on social media.', zh: '（公式二）圓餅圖呈現每天花三小時以上使用社群媒體的青少年比例。' },
          { en: 'The line graph shows the number of students choosing to study abroad, rising steadily from 2010 to 2024.', zh: '（公式三）折線圖呈現選擇出國留學的學生人數，從2010年到2024年穩定上升。' }
        ],
        tip: '三種公式都以「圖表名稱 + 動詞」開場，選最適合圖表類型的一種，避免單調地每次都用 "The chart shows that..."'
      },
      {
        name: '第二步：描述整體趨勢與最顯著數據',
        formula: 'Overall, + 趨勢描述. / Notably, + 最驚人的數據. / It is worth noting that + 子句.',
        examples: [
          { en: 'Overall, the data reveals a clear upward trend in screen time among teenagers between 2015 and 2025.', zh: '整體而言，數據顯示2015至2025年間青少年螢幕使用時間明顯上升。' },
          { en: 'Notably, physical exercise accounts for only 5% of students\' daily schedule — the smallest category by far.', zh: '值得注意的是，體育運動僅佔學生每日行程的5%，是所有類別中最低的。' },
          { en: 'It is worth noting that spending on entertainment rises sharply between the ages of 14 and 17, before dropping off in adulthood.', zh: '值得注意的是，娛樂消費在14至17歲之間急劇上升，成年後才下降。' }
        ],
        tip: '描述趨勢後，挑一筆最讓人驚訝或最有意義的數據單獨說明——這讓段落更有說服力，也更吸引閱卷老師'
      },
      {
        name: '第三步：趨勢動詞＋修飾副詞組合表',
        formula: `上升：increase / rise / grow / climb + sharply / dramatically / steadily / gradually / slightly
下降：decrease / drop / fall / decline / plummet + sharply / rapidly / steadily / slightly
平穩：remain stable / level off / plateau / stabilize
波動：fluctuate / vary + moderately / considerably`,
        examples: [
          { en: 'The number of daily steps taken by students drops dramatically after entering senior high school.', zh: '學生每日步數在進入高中後急劇下降。' },
          { en: 'Spending on books and educational materials remains relatively stable across all age groups.', zh: '書籍與教育材料的消費在各年齡層中相對穩定。' }
        ],
        tip: '動詞與副詞的精準搭配是高分圖表寫作的關鍵——用 "drop dramatically" 比 "become very small" 精練得多'
      },
      {
        name: '第四步：第二段——連結個人觀點',
        formula: 'Compared with the data in the chart, I... / The trend shown in the chart resonates with my own experience... / As someone who..., I find this data...',
        examples: [
          { en: 'The trend shown in the chart resonates with my own experience. Like many of my peers, I spend far more time scrolling through social media than exercising — a habit I am only now beginning to examine honestly.', zh: '圖表中的趨勢與我個人的經驗不謀而合。和許多同齡人一樣，我花在刷社群媒體上的時間遠比運動多——這是我最近才開始認真審視的習慣。' },
          { en: 'Compared with the data in the chart, my school shows a notably different pattern. Our daily physical education period means that exercise takes up a larger share of our time than the chart suggests.', zh: '與圖表數據相比，我的學校呈現出明顯不同的模式。每天的體育課讓運動在我們時間表中的比重比圖表所顯示的更高。' }
        ],
        tip: '第二段的個人觀點不能只是重複圖表數據——要「連結自身經驗」並加入反思或建議，才能拿到內容分的高分'
      }
    ],
    vocab: [
      { word: 'illustrate / indicate / reveal / demonstrate / depict', cn: '說明、呈現', example: 'The chart clearly depicts a widening gap between study hours and leisure time.' },
      { word: 'account for / make up / represent / constitute', cn: '佔（比例）', example: 'Screen time accounts for nearly 40% of a typical teenager\'s waking hours.' },
      { word: 'show a sharp / gradual / steady upward trend', cn: '呈急劇/漸進/穩定上升趨勢', example: 'The data shows a steady upward trend in online learning from 2018 to 2024.' },
      { word: 'reach a peak / hit a low / level off / plateau', cn: '達到高峰/低點/趨於平穩', example: 'Entertainment spending reaches a peak at age 16, then gradually levels off.' },
      { word: 'fluctuate / vary considerably / remain relatively stable', cn: '波動/相當不穩定/維持穩定', example: 'The proportion of time spent on hobbies fluctuates considerably across different seasons.' },
      { word: 'by a margin of / by approximately / roughly / nearly', cn: '相差…/大約', example: 'Students spend nearly three times as much time on screens as on physical activity.' },
      { word: 'in contrast / by comparison / on the other hand', cn: '相比之下', example: 'In contrast, students in rural areas reported significantly higher rates of outdoor activity.' },
      { word: 'the most striking finding / notably / it is worth noting', cn: '最值得注意的發現', example: 'The most striking finding is that sleep accounts for less than 20% of students\' total time.' }
    ]
  },
  {
    id: 'letter',
    category: 'topic',
    name: '信函寫作格式與句型',
    intro: '信函寫作（Letter Writing）要求注意格式與語氣，開頭稱謂、正文結構、結尾語缺一不可。',
    patterns: [
      {
        name: '開頭問候',
        formula: 'Dear [Name], + 暖場句（問候對方近況或說明寫信目的）',
        examples: [
          { en: 'I hope this letter finds you in good health and high spirits.', zh: '希望這封信找到你時，你身體健康、心情愉快。' },
          { en: 'I am writing to share something that has been on my mind for a while.', zh: '我寫信是想分享一件困擾我一段時間的事。' }
        ],
        tip: '開頭必須有稱謂（Dear...）；不可在信中使用真實中文姓名，請用英文名或代稱'
      },
      {
        name: '表達建議（正文常用）',
        formula: 'I would suggest / I strongly recommend / It might be helpful to + V',
        examples: [
          { en: 'I would strongly suggest saying "yes" more often than your instincts tell you to.', zh: '我強烈建議你比本能告訴你的更頻繁地說「好」。' },
          { en: 'It might be helpful to join a club in the first week — it is the fastest way to make friends.', zh: '第一週加入一個社團可能會很有幫助——這是交朋友最快的方式。' }
        ],
        tip: '提建議時，語氣要誠懇而非命令，I suggest / I recommend 比 You must 更合適'
      },
      {
        name: '結尾語',
        formula: 'Yours sincerely, / With love, / Best regards, + [署名]',
        examples: [
          { en: 'With love and pride, Beatrice (six months from now)', zh: '帶著愛與驕傲，Beatrice（六個月後的你）' },
          { en: 'Yours sincerely, Ming', zh: '你真誠的，Ming' }
        ],
        tip: '結尾語後面直接換行寫署名；正式信件用 Yours sincerely，私人信件可用 With love / Best regards'
      }
    ],
    vocab: []
  },
  {
    id: 'concession',
    category: 'grammar',
    name: '讓步語氣',
    intro: '在論說文中展現「雖然...但是...」的辯證思維，是高分作文必備的邏輯結構。',
    patterns: [
      {
        name: 'Although / Even though',
        formula: 'Although + 子句, 主要子句.',
        examples: [
          { en: 'Although technology has its drawbacks, its benefits far outweigh the risks.', zh: '雖然科技有其缺點，但其好處遠超過風險。' },
          { en: 'Although the trip did not go as planned, it turned out to be memorable.', zh: '雖然這次旅行不如計劃，但事後證明它令人難忘。' }
        ],
        tip: '注意：although 和 but 不能同時使用在同一個句子中'
      },
      {
        name: '倒裝讓步（adj/adv + as）',
        formula: 'Adjective/Adverb + as + 主詞 + 動詞, 主要子句.',
        examples: [
          { en: 'Difficult as the task may be, I am determined to succeed.', zh: '這個任務雖然艱難，但我下定決心要成功。' },
          { en: 'Crowded as the entrance was, we waited patiently for over an hour.', zh: '入口雖然擁擠，我們還是耐心等了超過一個小時。' }
        ],
        tip: '這是高級倒裝句型，展現文法高度，適合在段落轉折處使用'
      }
    ],
    vocab: []
  },
  {
    id: 'picture',
    category: 'topic',
    name: '看圖寫作完整技法',
    intro: '看圖寫作是學測最常考的題型。第一段以客觀描述場景為主，第二段延伸個人觀點或故事結局。掌握以下句型，讓你的圖畫描述生動有說服力。',
    patterns: [
      {
        name: '第一段：場景描述開場句',
        formula: 'In the picture(s), + [主詞] + [動詞短語]... / The picture shows/depicts + [名詞片語], suggesting that...',
        examples: [
          { en: 'In the first picture, a young woman sits alone on a park bench, her gaze fixed on the ground as if weighed down by an invisible burden.', zh: '在第一張圖中，一名年輕女子獨自坐在公園長椅上，目光低垂，彷彿承受著某種無形的重量。' },
          { en: 'The two pictures present a striking contrast: in the first, a family shares a meal together, laughing and talking; in the second, the same table sits in silence, everyone staring at a separate screen.', zh: '兩張圖呈現出強烈的對比：第一張中，一家人歡笑交談地共進晚餐；第二張裡，同一張桌子上卻一片沉默，每個人盯著各自的螢幕。' }
        ],
        tip: '開場直接進入畫面，避免用「I see a picture of...」這類廢話開頭——直接描述場景更有衝擊力'
      },
      {
        name: '推測人物心情與動機',
        formula: '[主詞] + appears/seems/looks + [形容詞], suggesting/as if... / judging from [細節], [主詞] must be...',
        examples: [
          { en: 'The boy appears torn, glancing repeatedly at the wallet in his hands as if weighing honesty against temptation.', zh: '男孩看起來很掙扎，反覆看著手中的錢包，彷彿在誠實與誘惑之間反覆衡量。' },
          { en: 'Judging from the exhaustion on her face and the heavy bags she carries, the woman has clearly been on her feet for hours.', zh: '從她臉上的疲憊和手提的重物判斷，這名女性顯然已經站了好幾個小時。' }
        ],
        tip: '用細節推測心情比直接說「she is sad」高明得多——描述可觀察的行為，再用 suggesting / as if 帶出心理狀態'
      },
      {
        name: '時間順序與事件推進',
        formula: 'Before long, / Shortly after, / At that moment, / All of a sudden, / As [時間子句], + [事件]',
        examples: [
          { en: 'Before long, the elderly man lost his footing and stumbled forward, sending his groceries scattering across the pavement.', zh: '不一會兒，老人腳下一滑，身體向前傾，買的東西散落一地。' },
          { en: 'All of a sudden, a sharp horn startled him out of his phone-induced trance — he had stepped directly into traffic.', zh: '突然，一聲尖銳的喇叭聲把他從手機帶來的恍惚中驚醒——他直接走進了車流中。' }
        ],
        tip: '看圖寫作的第一段本質上是「說故事」，時間副詞能讓情節推進自然流暢，避免段落像流水帳'
      },
      {
        name: '第二段：延伸觀點與昇華主題',
        formula: 'What this scene illustrates is not just [表面現象], but [深層意涵]. / This image reminds me that... / The story does not end with [圖片內容]; it raises a larger question about...',
        examples: [
          { en: 'What this scene illustrates is not just one act of kindness, but a choice that defines who we are when no one is watching.', zh: '這幅場景所呈現的，不只是一次善舉，而是當沒有人看著我們時，我們選擇成為什麼樣的人。' },
          { en: 'The story does not end with the returned wallet. It raises a larger question about whether honesty is a habit we choose to build — or simply luck when the temptation is not great enough.', zh: '故事並不止於歸還錢包。它提出了一個更大的問題：誠實是我們選擇養成的習慣，還是只是在誘惑不夠大時的幸運？' }
        ],
        tip: '第二段不要只是「繼續描述圖片」——要「昇華」：從具體事件跳到普遍性的道理或個人反思'
      }
    ],
    vocab: [
      { word: 'gaze / stare / glance / peer', cn: '凝視/盯看/瞥視/窺視', example: 'She gazed at the empty seat beside her, as if expecting someone who would never arrive.' },
      { word: 'furrow one\'s brow / clench one\'s fists / slump in one\'s seat', cn: '皺眉/握緊拳頭/癱坐在位子上', example: 'He furrowed his brow, clearly struggling to make a decision.' },
      { word: 'a mixture of + emotion and emotion', cn: '...和...交雜的情緒', example: 'Her expression was a mixture of relief and disbelief.' },
      { word: 'in sharp contrast to / side by side with', cn: '與...形成強烈對比/與...並排', example: 'In sharp contrast to the laughter in the first image, the second shows silence and separation.' },
      { word: 'as if / as though + 假設語氣', cn: '彷彿（表推測）', example: 'The dog sat beside the door as if waiting for someone who had been gone for years.' }
    ]
  },
  {
    id: 'argumentative',
    category: 'topic',
    name: '論說文 & 主題式寫作架構',
    intro: '論說文要求清楚立場、充分論證。掌握「引言→論點→讓步→結論」的骨架，並搭配以下句型模板，讓你的論說文結構嚴密、觀點有力。',
    patterns: [
      {
        name: '引言段：背景 + 立場陳述（Thesis）',
        formula: 'In recent years/today\'s world, [現象描述]. While some argue that [反方觀點], I believe/maintain that [己方立場], because [核心理由].',
        examples: [
          { en: 'In recent years, the growing trend of young people choosing pets over parenthood has sparked heated debate. While some view this as a troubling sign of declining birth rates, I believe it reflects a rational response to genuine economic and social pressures.', zh: '近年來，年輕人以寵物取代生育的趨勢引發廣泛討論。雖然有些人認為這是生育率下降的警訊，但我認為這反映了對真實經濟與社會壓力的理性回應。' },
          { en: 'As smartphone use becomes increasingly central to modern life, the question of how it shapes human connection grows more urgent. I firmly believe that while technology connects us to the world, it can simultaneously disconnect us from the people sitting beside us.', zh: '隨著智慧手機使用在現代生活中越來越普遍，它如何影響人際連結的問題也變得越來越迫切。我堅信，科技雖將我們與世界連結，卻可能同時讓我們與身旁的人疏離。' }
        ],
        tip: '「While some argue... I believe...」是最標準的引言句型，先承認反方觀點再提出自己立場，顯示你的思考成熟、不偏激'
      },
      {
        name: '論點段：PEEL 結構（論點→例證→解釋→連結）',
        formula: 'First and foremost/To begin with, [論點(Point)]. For instance/To illustrate, [具體例子(Example)]. This demonstrates/suggests that [解釋(Explanation)]. Clearly, [連結回主題(Link)].',
        examples: [
          { en: 'To begin with, sharing household chores teaches children a sense of responsibility that no classroom lesson can replicate. When children are expected to cook, clean, and do their own laundry, they develop practical competence and genuine self-reliance. This demonstrates that domestic labor is not merely a burden but a form of education. Clearly, families that divide chores equitably raise children who are better prepared for independent life.', zh: '首先，分擔家務能讓孩子培養出課堂無法複製的責任感。當孩子被期待烹飪、清潔並自己洗衣服時，他們發展出實際能力與真正的自立精神。這說明家務勞動不只是負擔，更是一種教育形式。顯然，公平分擔家務的家庭，能讓孩子更做好獨立生活的準備。' }
        ],
        tip: 'PEEL 是論說文最穩健的段落框架：每一段只聚焦一個論點，再用例子支撐、用解釋收束——避免段落散漫、論點不清'
      },
      {
        name: '加強例證與反面觀點（Evidence & Rebuttal）',
        formula: `策略一（具體例證）：Consider the case of [具體例子/地點/人物] — [說明例子如何支撐論點].
策略二（引用研究）：Research/Studies suggest that [數據或研究發現], which indicates [解釋意涵].
策略三（引入反面觀點再反駁）：Some might argue that [反方立場]; however, [反駁 + 己方補充說明].`,
        examples: [
          { en: 'Consider the case of Finland, which reformed its education system to prioritize student well-being over standardized testing. Within a decade, academic performance not only improved but teacher satisfaction rose significantly — suggesting that reducing pressure can, counterintuitively, raise achievement.', zh: '以芬蘭為例，芬蘭改革教育制度，將學生的幸福感置於標準測驗之上。在不到十年內，學生表現不但有所提升，教師的工作滿意度也顯著提高——這表明降低壓力反而可能提升成就，這或許違反直覺。' },
          { en: 'Some might argue that teenagers are too immature to handle financial decisions; however, this assumption overlooks the fact that financial literacy must be taught, not waited for. Studies suggest that adolescents who manage small budgets at home develop stronger economic judgment by adulthood.', zh: '有些人可能認為青少年過於不成熟，無法應對財務決策；然而，這一假設忽略了一個事實：財務素養需要被教導，而非等待自然發展。研究表明，在家中管理小額預算的青少年，在成年後往往能發展出更強的經濟判斷力。' }
        ],
        tip: '例證要具體（國家、人名、時間、數據）才有說服力；引入反面觀點後必須清楚反駁，否則等於幫反方說話——「先認可再解構」是最有效的策略'
      },
      {
        name: '結論段：重申立場 + 前瞻',
        formula: 'In conclusion/Ultimately, [重申核心觀點（換句話說，不直接複製引言）]. Only when/If/Unless [條件], [will we/can society] [結果]. [一句有哲思的收尾].',
        examples: [
          { en: 'In conclusion, the benefits of shared household responsibilities extend far beyond practical efficiency. Only when every member of a family contributes to the home can true respect and equality take root. A household that divides labor fairly is not just a more functional unit — it is a small democracy in practice.', zh: '總而言之，分擔家務責任的好處遠遠超過了實際效率的提升。唯有家庭中的每一個成員都為家庭盡一份力，真正的尊重與平等才能生根。公平分工的家庭不只是更有效率的單位——它是一個小型民主的實踐。' },
          { en: 'Ultimately, the issue is not whether we should use emojis, but whether we allow them to replace the harder, richer work of articulating how we truly feel. A smiley face is a shortcut. Sometimes, a shortcut is exactly what we need. But the long way — finding the right words — is how we truly come to understand ourselves and each other.', zh: '歸根究底，問題不在於我們是否應該使用表情符號，而在於我們是否讓它們取代了更艱難、更豐富的工作：表達我們的真實感受。笑臉符號是一條捷徑。有時候，捷徑正是我們所需要的。但那條更長的路——找到正確的詞——才是我們真正理解自己與彼此的方式。' }
        ],
        tip: '結論的最後一句最好是「哲思性金句」，讓閱卷老師留下深刻印象——不要只是重複論點，而是提升到更高的層次'
      }
    ],
    vocab: [
      { word: 'I maintain / I argue / I firmly believe that', cn: '我主張…（比I think更正式有力）', example: 'I firmly believe that the root cause of this trend is not selfishness but structural inequality.' },
      { word: 'a pressing concern / a mounting challenge / a double-edged sword', cn: '迫切的問題/雙面刃', example: 'Social media has become a double-edged sword: connecting millions while isolating individuals.' },
      { word: 'far from / anything but / by no means', cn: '遠非/絕非（強調否定）', example: 'The solution is far from simple — it requires systemic, not individual, change.' },
      { word: 'the root cause / the underlying issue / the broader implication', cn: '根本原因/深層問題/更廣泛的意涵', example: 'The underlying issue is not technology itself, but our unreflective relationship with it.' },
      { word: 'not merely... but also / not only... but... as well', cn: '不只是…而且也是…', example: 'Sharing chores is not merely a practical arrangement; it is a form of mutual respect.' }
    ]
  },
  {
    id: 'hooks',
    category: 'grammar',
    name: '開頭與結尾技法',
    intro: '一篇作文的開頭決定了閱卷老師的第一印象，結尾則決定了文章留下的餘韻。學會這五種開頭技法與三種結尾技法，讓你的作文從第一句就脫穎而出。',
    patterns: [
      {
        name: '開頭技法①：問句鉤子（Reader Hook）',
        formula: 'Have you ever [情境]? / What would you do if [假設情境]? / When was the last time you [行為]?',
        examples: [
          { en: 'Have you ever found yourself scrolling through your phone while someone you love sat beside you, unnoticed?', zh: '你有沒有曾經一邊滑著手機，卻沒有注意到身旁坐著你愛的人？' },
          { en: 'What would you do if you found a wallet full of cash — and nobody was watching?', zh: '如果你撿到一個裝滿現金的錢包，而且沒有人看見，你會怎麼做？' }
        ],
        tip: '問句開頭能立刻把讀者拉進文章——但問題要有意義，不要問「Do you like animals?」這種沒有深度的問題'
      },
      {
        name: '開頭技法②：場景式開場（Vivid Scene）',
        formula: 'It was + [時間/地點]. + [一個生動的具體事件]. + [一句反思或轉折].',
        examples: [
          { en: 'It was an ordinary Tuesday morning. A line stretched around the block outside the newly opened café, and nobody seemed to know exactly why they were standing in it. That was the moment I began to wonder whether we queue for the thing itself, or for the story of having gotten it.', zh: '那是一個平凡的星期二早晨。一條隊伍延伸到剛開幕咖啡廳外的整條街，而似乎沒有人確切知道自己為什麼站在這裡。就在那一刻，我開始思考：我們排隊是為了得到那個東西本身，還是為了「得到它的故事」？' },
          { en: 'It was the thirty-eighth try at the claw machine. My sister had refused to give up. When the crane finally lifted the small dinosaur free, she turned to me with a look that had nothing to do with the toy.', zh: '那是第三十八次嘗試抓娃娃機。妹妹拒絕放棄。當夾子終於把那隻小恐龍夾起來時，她轉過頭看著我，那個表情和那個玩具毫無關係。' }
        ],
        tip: '場景式開場要「具體」——不是「有一天」而是「那是個平凡的星期二早晨」，細節讓讀者瞬間身臨其境'
      },
      {
        name: '開頭技法③：現象反問（Provocative Statement）',
        formula: 'It is often said that [常見觀點]. Yet / But [質疑或翻轉]. / [驚人的反常現象描述]. + 問題引入.',
        examples: [
          { en: 'It is often said that technology connects us. Yet here we are: a generation with more ways to communicate than any before us, and more people reporting loneliness than ever on record.', zh: '人們常說科技讓我們彼此連結。然而現狀是：我們這代人擁有史上最多的溝通管道，卻也是有史以來最多人表示感到孤獨的一代。' },
          { en: 'We tell children that honesty is always the right choice. We mean it. And then we build a world where telling the truth is often the harder, lonelier path.', zh: '我們告訴孩子誠實永遠是正確的選擇。我們是認真的。然後我們打造了一個說真話往往是更艱難、更孤獨之路的世界。' }
        ],
        tip: '「翻轉常識」是最能抓住閱卷老師注意力的開頭方式——先說大家熟悉的觀點，再用「Yet / But」翻轉它'
      },
      {
        name: '結尾技法：重申＋昇華＋哲思金句',
        formula: '[換句話說重申主旨（不直接複製引言）]. Only when/If [條件], [will we/can we] [正面結果]. [一句有哲思、讓人回味的收尾].',
        examples: [
          { en: 'In the end, a park is not just a patch of green space. It is a mirror of what a community values — rest, movement, connection, or all three at once. A well-designed park does not choose between its users; it makes room for all of them.', zh: '歸根究底，公園不只是一片綠地。它是一個社區所重視事物的鏡子——休息、動態、連結，或三者兼有。一個設計良好的公園不在使用者之間做選擇，而是為每一個人留下空間。' },
          { en: 'Some detours have a way of becoming exactly where you needed to go. The lesson of that afternoon was not about traffic or patience. It was about what happens when a plan fails and a family is left with nothing but each other.', zh: '有些繞路，往往就是你真正需要去的地方。那個下午的領悟，不是關於塞車或耐心。而是關於當計畫失敗、一家人只剩下彼此時，會發生什麼。' }
        ],
        tip: '最後一句是文章的「餘韻」——寫完後大聲唸一遍，如果你自己都覺得平淡，閱卷老師也會。嘗試以雙關、對比或哲思收尾'
      }
    ],
    vocab: [
      { word: 'paradoxically / ironically / curiously', cn: '矛盾地/諷刺地/奇妙地', example: 'Paradoxically, the device designed to keep us connected has made many people feel more isolated.' },
      { word: 'it strikes me that / I cannot help but wonder', cn: '我不禁覺得…/我不禁思考', example: 'It strikes me that we rarely ask why we want something — only how to get it.' },
      { word: 'in retrospect / looking back', cn: '回頭看/事後想來', example: 'In retrospect, that terrible afternoon turned out to be one of the best days of my life.' },
      { word: 'what lingers / what stays with me / what I keep returning to', cn: '留下的印象/縈繞心頭的是', example: 'What stays with me is not the wallet itself, but the look on her face when she got it back.' },
      { word: 'perhaps the most [adj.] thing about X is not... but...', cn: '關於X最…的事，也許不是…而是…', example: 'Perhaps the most beautiful thing about that trip was not the destination, but the detour.' }
    ]
  },
  {
    id: 'rhetoric',
    category: 'grammar',
    name: '文句修辭與細節描寫',
    intro: '高分作文的秘密不只在於「說了什麼」，更在於「怎麼說」。排比、長短交錯、感官細節、直接引語——這些修辭技巧能讓平淡的句子變得有力量、有溫度。',
    patterns: [
      {
        name: '排比句（Parallel Structure）',
        formula: '[動詞/名詞/形容詞] + [同結構] + [同結構], 製造語氣遞進或強調效果',
        examples: [
          { en: 'She had packed the sandwiches. She had charged the camera. She had printed the directions. Nothing, it turned out, had prepared her for the silence that followed.', zh: '她備好了三明治。她充好了相機的電。她印好了路線圖。然而，事後證明，這些都沒能讓她準備好迎接那份隨之而來的沉默。' },
          { en: 'The queue moved slowly, then more slowly, then not at all.', zh: '隊伍緩緩移動，越來越慢，然後完全停止。' }
        ],
        tip: '排比能製造節奏感與力量——三個同結構的短句疊加，比一個長句更有衝擊力。名句如「I came, I saw, I conquered」即是排比'
      },
      {
        name: '長短句交錯（Sentence Rhythm）',
        formula: '[複雜長句，鋪陳背景]. [一個極短的句子，製造強調效果].',
        examples: [
          { en: 'We had been planning the trip to the science museum for three weeks, booking the tickets, memorizing the exhibits, packing the perfect lunch. By nine-fifteen, we had moved exactly four hundred meters.', zh: '我們為那趟科學博物館之旅準備了整整三週，訂好票、背熟展品、備好完美的午餐。到了九點十五分，我們只移動了整整四百公尺。' },
          { en: 'I used to think that helping strangers was simply a matter of kindness — that good people helped and selfish ones did not. I now believe it is also a matter of courage.', zh: '我以前認為幫助陌生人只是善良的問題——好人幫忙，自私的人不幫。現在我相信，這也是勇氣的問題。' }
        ],
        tip: '長句之後跟一個短句，落差本身就是強調——這是英文寫作中最簡單也最有效的節奏技巧之一'
      },
      {
        name: '感官細節與具體意象',
        formula: '用視覺、聽覺、觸覺、嗅覺等細節代替籠統形容詞',
        examples: [
          { en: 'Instead of: "She was very sad." → Try: "She sat without speaking, turning her coffee cup in both hands as if the warmth of it were the only thing keeping her present."', zh: '不要說「她非常悲傷」，改為：「她默默坐著，用雙手轉著咖啡杯，彷彿那份溫度是讓她留在當下的唯一事物。」' },
          { en: 'Instead of: "The park was peaceful." → Try: "The only sounds were the distant creak of a swing and the unhurried footsteps of a woman walking a very old dog."', zh: '不要說「公園很寧靜」，改為：「唯一的聲音是遠處鞦韆輕輕的嘎吱聲，以及一名女士牽著一條老狗，不緊不慢的腳步聲。」' }
        ],
        tip: '「Show, don\'t tell」是英文寫作最重要的原則：與其說「她很難過」，不如描述她的行為讓讀者自己感受到難過'
      },
      {
        name: '直接引語與內心獨白',
        formula: '直接引語：[主詞] + [動詞], "[引語]." / 內心獨白：[主詞] + thought/wondered/told himself, "[想法]."',
        examples: [
          { en: '"You are one of my closest friends," he began, "and it is precisely because of that closeness that I need to say something I have been holding back for too long."', zh: '「你是我最親近的朋友之一，」他說，「正是因為這份親近，我才需要說一件我憋在心裡太久的事。」' },
          { en: 'She looked left, then right. Nobody was watching. "I could just keep it," she told herself. But her feet were already walking toward the counter.', zh: '她往左看，再往右看。沒有人注意到她。「我可以就這樣把它留下，」她自言自語。但她的腳已經向著服務台走去了。' }
        ],
        tip: '直接引語讓人物「活」起來，讓故事有溫度——比間接敘述更有戲劇張力。不需要多，兩三句放在關鍵情節就足夠'
      }
    ],
    vocab: [
      { word: 'unfold / unravel / take shape', cn: '（故事/情況）展開、逐漸明朗', example: 'As the story unfolded, it became clear that the boy\'s hesitation was not greed but fear.' },
      { word: 'linger / stay with / haunt', cn: '縈繞、留存（印象、情感）', example: 'The image of her face — relief mixed with disbelief — has lingered with me ever since.' },
      { word: 'a handful of / a trace of / a flicker of', cn: '少量的/一絲絲的/一閃而過的', example: 'There was a flicker of recognition in his eyes, as if he had seen this moment before.' },
      { word: 'unhurried / deliberate / tentative / resolute', cn: '從容不迫的/故意的/試探性的/堅決的', example: 'He walked with unhurried steps toward the woman, as if each one required a separate decision.' },
      { word: 'not [adj.] enough to [V], but [adj.] enough to [V]', cn: '不夠…以致於無法…，但足夠…以致於…', example: 'Not brave enough to speak, but brave enough to stay.' }
    ]
  },
  {
    id: 'vocab',
    category: 'grammar',
    name: '高分替換詞彙',
    intro: '學測高分作文的核心在於「精準用字」。以下分類整理最實用的詞彙升級對照表——從動詞到片語搭配，全面提升語言表達層次，並附學測常見主題高頻單字。',
    patterns: [
      {
        name: '動詞升級',
        formula: `think      →  believe / argue / maintain
say        →  state / claim / assert / point out
show       →  demonstrate / reveal / illustrate / indicate
change     →  transform / alter / reshape / revolutionize
help       →  enable / empower / facilitate / allow
use        →  employ / utilize / apply
make       →  create / generate / foster / cultivate
get        →  obtain / acquire / achieve
cause      →  trigger / spark / give rise to / lead to
face       →  confront / encounter / deal with
find       →  discover / realize / recognize / identify
need       →  require / demand / call for`,
        examples: [
          { en: 'The data clearly indicates that screen time has increased significantly over the past decade.', zh: '（indicate 比 show 更精確，適合圖表寫作）' },
          { en: 'Peer pressure can trigger a series of unhealthy behaviors in adolescents.', zh: '（trigger 比 cause 更有爆發感，適合分析因果）' },
          { en: 'Digital literacy has become an essential skill that every student must cultivate.', zh: '（cultivate 比 develop 更有意識栽培的感覺）' }
        ],
        tip: '動詞是句子的核心——換一個動詞，整句話的力道截然不同。優先升級 think / show / cause 這三個最常見的弱動詞。'
      },
      {
        name: '形容詞升級',
        formula: `good       →  outstanding / admirable / remarkable
bad        →  detrimental / harmful / adverse / destructive
important  →  crucial / vital / significant / essential
big        →  substantial / considerable / enormous / profound
clear      →  evident / apparent / undeniable / obvious
common     →  prevalent / widespread / typical / familiar
true/real  →  genuine / authentic / undeniable / real
new        →  innovative / novel / groundbreaking / unprecedented
hard       →  challenging / demanding / difficult / tough
different  →  distinct / diverse / contrasting / varied`,
        examples: [
          { en: 'The widespread use of social media has had a profound impact on teenagers\' mental health.', zh: '（widespread + profound 一句話升了兩個形容詞）' },
          { en: 'It is undeniable that excessive screen time poses a genuine threat to children\'s development.', zh: '（undeniable + genuine 雙重加強確信語氣）' }
        ],
        tip: '不說 very important，改說 crucial 或 essential。精準形容詞比 very + 普通詞更有說服力。'
      },
      {
        name: '副詞升級',
        formula: `very          →  greatly / deeply / remarkably / considerably
really        →  genuinely / truly / actually / deeply
quickly       →  rapidly / swiftly / promptly
slowly        →  gradually / steadily / progressively
often         →  frequently / consistently / regularly / persistently
clearly       →  evidently / apparently / obviously / notably
suddenly      →  abruptly / unexpectedly
especially    →  particularly / specifically / notably / in particular`,
        examples: [
          { en: 'The situation has deteriorated rapidly since the introduction of unrestricted social media access.', zh: '（rapidly 比 quickly 更有持續惡化的語感）' },
          { en: 'Young people are particularly vulnerable to the influence of peer pressure.', zh: '（particularly 比 especially 更學術書面）' }
        ],
        tip: '副詞是最容易被忽略的升分點。把文章裡所有 very / really 找出來，逐一替換。'
      },
      {
        name: '名詞升級',
        formula: `problem    →  challenge / issue / concern / difficulty
people     →  individuals / citizens / adolescents / one's peers / the public
way/method →  approach / strategy / measure / initiative
reason     →  factor / cause / motivation
result     →  outcome / consequence / impact / effect
idea       →  perspective / viewpoint / opinion / belief
experience →  encounter / exposure / engagement`,
        examples: [
          { en: 'Schools should implement concrete measures to address the growing concern over students\' mental health.', zh: '（measures + concern 替換 ways + problem）' },
          { en: 'The consequences of cyberbullying extend far beyond the school environment.', zh: '（consequences 比 results 更有延伸意涵）' }
        ],
        tip: '"People" 是最容易升級的名詞。根據語境換成 adolescents / citizens / one\'s peers，立刻顯示精準意識。'
      },
      {
        name: '高分片語搭配',
        formula: `play a role in       →  在⋯中扮演角色
have an impact on    →  對⋯產生影響
give rise to         →  導致、引起
be responsible for   →  對⋯負責、是⋯的原因
be aware of          →  意識到、察覺
cope with / deal with  →  應對、處理
contribute to        →  貢獻於、促成
be exposed to        →  接觸到、暴露於
stem from / be rooted in  →  源自於、根植於
call for             →  呼籲、需要`,
        examples: [
          { en: 'Overexposure to violent content online may give rise to harmful effects on young viewers.', zh: '（give rise to 比 cause 更書面正式）' },
          { en: 'The ability to cope with failure is a skill that contributes to long-term success.', zh: '（cope with + contribute to 同時出現，語言層次高）' }
        ],
        tip: '掌握 10 個精準片語搭配，比背 100 個孤立單字更有效。這些片語是作文高分的「連接組織」。'
      }
    ],
    vocab: [
      // 科技與網路
      { word: 'exacerbate', cn: '使（問題/情況）惡化', example: 'Social media has exacerbated feelings of loneliness among teenagers.' },
      { word: 'alleviate', cn: '減輕、緩和（壓力/問題）', example: 'Regular exercise can alleviate stress and improve overall well-being.' },
      { word: 'distraction', cn: '使人分心的事物', example: 'Smartphones have become a major distraction in classrooms worldwide.' },
      { word: 'digital divide', cn: '數位落差', example: 'The digital divide remains a significant barrier to equal education.' },
      // 環境
      { word: 'irreversible', cn: '不可逆的', example: 'Without immediate action, climate damage may become irreversible.' },
      { word: 'sustainable', cn: '可持續的', example: 'Adopting sustainable habits is a responsibility shared by every generation.' },
      { word: 'deteriorate', cn: '（情況/品質）逐漸惡化', example: 'Air quality in major cities continues to deteriorate as traffic increases.' },
      { word: 'biodiversity', cn: '生物多樣性', example: 'Deforestation threatens biodiversity and disrupts entire ecosystems.' },
      // 人際與社會
      { word: 'empathy', cn: '同理心', example: 'Developing empathy is essential to building a healthy school community.' },
      { word: 'resilience', cn: '韌性、復原力', example: 'Children who learn from failure develop greater resilience in adulthood.' },
      { word: 'peer pressure', cn: '同儕壓力', example: 'Peer pressure can push teenagers into decisions they later regret.' },
      { word: 'stereotype', cn: '刻板印象', example: 'It is dangerous to judge individuals based on stereotypes rather than merit.' },
      { word: 'mutual respect', cn: '相互尊重', example: 'A harmonious classroom depends on mutual respect between students and teachers.' },
      { word: 'foster (v.)', cn: '培養、促進', example: 'Group projects foster teamwork and communication skills simultaneously.' },
      // 教育與學習
      { word: 'critical thinking', cn: '批判性思考', example: 'Schools should prioritize critical thinking over rote memorization.' },
      { word: 'nurture (v.)', cn: '養育、培育（潛能/才能）', example: 'A supportive environment nurtures creativity and intellectual curiosity.' },
      { word: 'initiative', cn: '主動性；倡議行動', example: 'Students who take initiative in their learning tend to achieve more in the long run.' },
      { word: 'broaden one\'s horizons', cn: '拓展視野', example: 'Studying abroad broadens students\' horizons in ways no textbook can replicate.' },
      // 論述與觀點
      { word: 'compelling', cn: '令人信服的、有說服力的', example: 'The most compelling arguments are those that acknowledge opposing viewpoints.' },
      { word: 'nonetheless', cn: '儘管如此、然而', example: 'The policy has its drawbacks; nonetheless, its long-term benefits outweigh its costs.' },
      { word: 'underlying', cn: '潛在的、根本的（原因/問題）', example: 'The underlying cause of the conflict was a lack of open communication.' },
      { word: 'perspective', cn: '觀點、視角', example: 'Considering issues from multiple perspectives leads to more balanced judgments.' },
      { word: 'prevalent', cn: '普遍存在的、盛行的', example: 'The habit of scrolling before sleep has become prevalent among young people.' }
    ]
  }
];

// ── Flashcard Decks ───────────────────────────────────────────────────────────
const flashcardDecks = [
  {
    id: 'vocab-upgrade',
    name: '詞彙升級',
    icon: '🔄',
    cards: [
      // ── 動詞升級 (12) ──
      { front: 'think', frontSub: '動詞升級', back: 'believe / argue / maintain', backNote: '認為、主張', example: 'I firmly believe that digital literacy is no longer optional.' },
      { front: 'say', frontSub: '動詞升級', back: 'state / claim / assert / point out', backNote: '說、強調', example: 'The report clearly states that screen time has doubled since 2015.' },
      { front: 'show', frontSub: '動詞升級', back: 'demonstrate / reveal / illustrate / indicate', backNote: '顯示、說明', example: 'The bar chart illustrates a stark gap in daily study habits.' },
      { front: 'change', frontSub: '動詞升級', back: 'transform / alter / reshape / revolutionize', backNote: '改變', example: 'Social media has fundamentally transformed how teenagers communicate.' },
      { front: 'help', frontSub: '動詞升級', back: 'enable / empower / facilitate / allow', backNote: '幫助、使得', example: 'Digital tools empower students to take ownership of their learning.' },
      { front: 'use', frontSub: '動詞升級', back: 'employ / utilize / apply', backNote: '使用、運用', example: 'Successful writers employ simple words to convey profound ideas.' },
      { front: 'make', frontSub: '動詞升級', back: 'create / generate / foster / cultivate', backNote: '創造、培養', example: 'Good teachers foster an environment where curiosity is welcomed.' },
      { front: 'get', frontSub: '動詞升級', back: 'obtain / acquire / achieve', backNote: '獲得、達成', example: 'Students who set clear goals are more likely to achieve them.' },
      { front: 'cause', frontSub: '動詞升級', back: 'trigger / spark / give rise to / lead to', backNote: '導致、引起', example: 'Excessive screen time can trigger anxiety and poor sleep patterns.' },
      { front: 'face', frontSub: '動詞升級', back: 'confront / encounter / deal with', backNote: '面對、應對', example: 'Many young people today confront the pressure of social comparison.' },
      { front: 'find', frontSub: '動詞升級', back: 'discover / realize / recognize / identify', backNote: '發現、察覺', example: 'I gradually came to realize that failure was my best teacher.' },
      { front: 'need', frontSub: '動詞升級', back: 'require / demand / call for', backNote: '需要', example: 'Addressing climate change calls for immediate and collective action.' },
      // ── 形容詞升級 (10) ──
      { front: 'good', frontSub: '形容詞升級', back: 'outstanding / admirable / remarkable', backNote: '優秀的、值得讚揚的', example: 'Her dedication to community service is truly admirable.' },
      { front: 'bad', frontSub: '形容詞升級', back: 'detrimental / harmful / adverse / destructive', backNote: '有害的、不利的', example: 'Excessive social media use can have detrimental effects on self-esteem.' },
      { front: 'important', frontSub: '形容詞升級', back: 'crucial / vital / significant / essential', backNote: '重要的', example: 'Critical thinking is an essential skill for navigating the information age.' },
      { front: 'big', frontSub: '形容詞升級', back: 'substantial / considerable / enormous / profound', backNote: '巨大的、深遠的', example: 'The exchange experience had a profound effect on my worldview.' },
      { front: 'clear', frontSub: '形容詞升級', back: 'evident / apparent / undeniable / obvious', backNote: '明顯的、無可否認的', example: 'It is evident that today\'s students face unprecedented pressure.' },
      { front: 'common', frontSub: '形容詞升級', back: 'prevalent / widespread / typical', backNote: '普遍的', example: 'The habit of scrolling before sleep has become widespread among youth.' },
      { front: 'true / real', frontSub: '形容詞升級', back: 'genuine / authentic / undeniable / legitimate', backNote: '真實的、真正的', example: 'Genuine friendship is built on honesty rather than convenience.' },
      { front: 'new', frontSub: '形容詞升級', back: 'innovative / novel / groundbreaking / unprecedented', backNote: '創新的、前所未有的', example: 'The pandemic created unprecedented challenges for the education system.' },
      { front: 'hard', frontSub: '形容詞升級', back: 'challenging / demanding / difficult / tough', backNote: '艱難的、嚴峻的', example: 'Mastering a new language is a challenging but rewarding journey.' },
      { front: 'different', frontSub: '形容詞升級', back: 'distinct / diverse / contrasting / varied', backNote: '不同的、多樣的', example: 'The two cultures hold distinct views on the role of family.' },
      // ── 副詞升級 (8) ──
      { front: 'very', frontSub: '副詞升級', back: 'tremendously / profoundly / remarkably / considerably', backNote: '非常地', example: 'The exchange experience profoundly changed my view of the world.' },
      { front: 'really', frontSub: '副詞升級', back: 'genuinely / truly / undeniably / deeply', backNote: '真正地、確實地', example: 'She was genuinely interested in understanding the problem.' },
      { front: 'quickly', frontSub: '副詞升級', back: 'rapidly / swiftly / promptly', backNote: '迅速地', example: 'Misinformation spreads rapidly across unregulated platforms.' },
      { front: 'slowly', frontSub: '副詞升級', back: 'gradually / steadily / progressively', backNote: '逐漸地', example: 'Public attitudes toward mental health have gradually shifted.' },
      { front: 'often', frontSub: '副詞升級', back: 'frequently / consistently / regularly / persistently', backNote: '經常地', example: 'Students who read consistently outperform their peers in writing.' },
      { front: 'clearly', frontSub: '副詞升級', back: 'evidently / apparently / undeniably / notably', backNote: '明顯地、顯然', example: 'The data evidently points to a worsening sleep deficit among teenagers.' },
      { front: 'suddenly', frontSub: '副詞升級', back: 'abruptly / unexpectedly', backNote: '突然地', example: 'The conversation ended abruptly when his phone began ringing.' },
      { front: 'especially', frontSub: '副詞升級', back: 'particularly / specifically / notably / in particular', backNote: '特別地、尤其', example: 'Young people are particularly vulnerable to peer pressure.' },
      // ── 名詞升級 (7) ──
      { front: 'problem', frontSub: '名詞升級', back: 'challenge / issue / concern / dilemma / drawback', backNote: '問題', example: 'Cyberbullying has emerged as a pressing concern in modern schools.' },
      { front: 'people', frontSub: '名詞升級', back: 'individuals / adolescents / one\'s peers / citizens', backNote: '人們（視語境選擇）', example: 'Adolescents are particularly vulnerable to peer pressure.' },
      { front: 'way / method', frontSub: '名詞升級', back: 'approach / strategy / measure / mechanism / initiative', backNote: '方法、措施', example: 'Schools should implement concrete measures to address mental health concerns.' },
      { front: 'reason', frontSub: '名詞升級', back: 'factor / cause / motivation', backNote: '原因、動機', example: 'Economic insecurity is a key factor behind declining birth rates.' },
      { front: 'result', frontSub: '名詞升級', back: 'outcome / consequence / impact / effect', backNote: '結果、影響', example: 'The consequences of this decision will be felt for years to come.' },
      { front: 'idea', frontSub: '名詞升級', back: 'perspective / viewpoint / opinion / belief', backNote: '想法、觀點', example: 'Listening to opposing viewpoints sharpens our own beliefs.' },
      { front: 'experience', frontSub: '名詞升級', back: 'encounter / exposure / engagement', backNote: '經驗、體驗', example: 'Cultural exposure teaches lessons that no textbook can replicate.' },
      // ── 高分片語搭配 (10) ──
      { front: 'play a role in', frontSub: '高分片語搭配', back: '在⋯中扮演角色', backNote: '常用於說明影響力', example: 'Family upbringing plays a crucial role in shaping a child\'s values.' },
      { front: 'have an impact on', frontSub: '高分片語搭配', back: '對⋯產生影響', backNote: '可加形容詞 (profound / lasting)', example: 'Mentors can have a lasting impact on a student\'s career path.' },
      { front: 'give rise to', frontSub: '高分片語搭配', back: '導致、引起（= cause, 較書面）', backNote: '因果分析的高分片語', example: 'Overexposure to violent content may give rise to harmful effects on young viewers.' },
      { front: 'be responsible for', frontSub: '高分片語搭配', back: '對⋯負責、是⋯的原因', backNote: '中立指出責任歸屬', example: 'Social media algorithms are largely responsible for echo chambers.' },
      { front: 'be aware of', frontSub: '高分片語搭配', back: '意識到、察覺', backNote: '常見於提升意識的論述', example: 'Students should be aware of the long-term effects of poor sleep.' },
      { front: 'cope with / deal with', frontSub: '高分片語搭配', back: '應對、處理', backNote: 'cope with 偏情緒、deal with 偏實務', example: 'Resilient students learn to cope with setbacks constructively.' },
      { front: 'contribute to', frontSub: '高分片語搭配', back: '貢獻於、促成', backNote: '正面或負面結果皆可用', example: 'A balanced diet contributes to both physical and mental well-being.' },
      { front: 'be exposed to', frontSub: '高分片語搭配', back: '接觸到、暴露於', backNote: '多用於環境/資訊接觸', example: 'Children today are exposed to advertising from a very young age.' },
      { front: 'stem from / be rooted in', frontSub: '高分片語搭配', back: '源自於、根植於', backNote: '用於分析問題根源', example: 'Much of this conflict stems from a failure to listen to others.' },
      { front: 'call for', frontSub: '高分片語搭配', back: '呼籲、需要（較正式）', backNote: '可代替 need', example: 'The current crisis calls for urgent and coordinated action.' }
    ]
  },
  {
    id: 'theme-vocab',
    name: '主題單字',
    icon: '📚',
    cards: [
      { front: 'exacerbate', frontSub: '科技 / 社會議題', back: '使（問題/情況）惡化', example: 'Social media has exacerbated feelings of loneliness among teenagers.' },
      { front: 'alleviate', frontSub: '健康 / 社會議題', back: '減輕、緩和', example: 'Regular exercise can alleviate stress and improve overall well-being.' },
      { front: 'resilience', frontSub: '人格 / 教育', back: '韌性、復原力', example: 'Children who learn from failure develop greater resilience in adulthood.' },
      { front: 'empathy', frontSub: '人際關係', back: '同理心', example: 'Developing empathy is essential to building a healthy school community.' },
      { front: 'stereotype', frontSub: '社會 / 人際', back: '刻板印象', example: 'It is dangerous to judge individuals based on stereotypes rather than merit.' },
      { front: 'sustainable', frontSub: '環境', back: '可持續的', example: 'Adopting sustainable habits is a responsibility shared by every generation.' },
      { front: 'irreversible', frontSub: '環境 / 科學', back: '不可逆的', example: 'Without immediate action, climate damage may become irreversible.' },
      { front: 'deteriorate', frontSub: '環境 / 健康', back: '（情況/品質）逐漸惡化', example: 'Air quality in major cities continues to deteriorate as traffic increases.' },
      { front: 'foster', frontSub: '教育 / 人際', back: '培養、促進（v.）', example: 'Group projects foster teamwork and communication skills simultaneously.' },
      { front: 'critical thinking', frontSub: '教育', back: '批判性思考', example: 'Schools should prioritize critical thinking over rote memorization.' },
      { front: 'initiative', frontSub: '人格 / 行動', back: '主動性；倡議行動', example: 'Students who take initiative tend to achieve more in the long run.' },
      { front: 'compelling', frontSub: '論述 / 寫作', back: '令人信服的、有說服力的', example: 'The most compelling arguments acknowledge opposing viewpoints.' },
      { front: 'underlying', frontSub: '論述 / 分析', back: '潛在的、根本的（原因）', example: 'The underlying cause of the conflict was a lack of open communication.' },
      { front: 'peer pressure', frontSub: '青少年 / 社會', back: '同儕壓力', example: 'Peer pressure can push teenagers into decisions they later regret.' },
      { front: 'digital divide', frontSub: '科技 / 教育', back: '數位落差', example: 'The digital divide remains a significant barrier to equal education.' },
      { front: 'nurture', frontSub: '教育 / 人格', back: '養育、培育潛能（v.）', example: 'A supportive environment nurtures creativity and intellectual curiosity.' },
      { front: 'broaden one\'s horizons', frontSub: '教育 / 生活經驗', back: '拓展視野', example: 'Studying abroad broadens students\' horizons in ways no textbook can replicate.' },
      { front: 'distraction', frontSub: '科技 / 學習', back: '使人分心的事物', example: 'Smartphones have become a major distraction in classrooms worldwide.' },
      { front: 'biodiversity', frontSub: '環境 / 科學', back: '生物多樣性', example: 'Deforestation threatens biodiversity and disrupts entire ecosystems.' },
      { front: 'mutual respect', frontSub: '人際 / 社會', back: '相互尊重', example: 'A harmonious classroom depends on mutual respect between students and teachers.' },
      { front: 'nonetheless', frontSub: '論述 / 寫作', back: '儘管如此、然而', example: 'The policy has its drawbacks; nonetheless, its long-term benefits outweigh its costs.' },
      { front: 'perspective', frontSub: '論述 / 寫作', back: '觀點、視角', example: 'Considering issues from multiple perspectives leads to more balanced judgments.' },
      { front: 'prevalent', frontSub: '論述 / 社會', back: '普遍存在的、盛行的', example: 'The habit of scrolling before sleep has become prevalent among young people.' }
    ]
  },
  {
    id: 'sentence-patterns',
    name: '寫作句型',
    icon: '✍️',
    cards: [
      { front: '分詞構句 — 開場', frontSub: '句型升級', back: 'V-ing / Having V-ed, + 主句', backNote: '以分詞片語開場，升級句子結構', example: 'Seeing the two pictures side by side, one cannot help but notice the stark contrast.' },
      { front: '強調句 It is...that', frontSub: '句型升級', back: 'It is/was + 強調部分 + that + 其餘句子', backNote: '強調句中特定元素', example: 'It is precisely this lack of empathy that lies at the heart of the problem.' },
      { front: '讓步 — Although / While', frontSub: '轉折語氣', back: 'Although/While + S + V, S + V...', backNote: '先讓步再反駁，顯示邏輯縝密', example: 'Although social media offers genuine benefits, its drawbacks cannot be ignored.' },
      { front: '讓步 — Admittedly', frontSub: '轉折語氣', back: 'Admittedly, ... ; however/nevertheless, ...', backNote: '更書面的讓步寫法', example: 'Admittedly, technology has transformed education; however, it cannot replace human connection.' },
      { front: '圖表開場 公式一', frontSub: '圖表寫作', back: '[圖表名稱] + shows/illustrates + how/what + S + V', backNote: '問句名詞子句結構', example: 'The bar chart illustrates how high school students allocate their daily time.' },
      { front: '圖表開場 公式二', frontSub: '圖表寫作', back: '[圖表名稱] + reveals + [the number of] + N + who + V', backNote: '關係子句結構', example: 'The pie chart reveals the percentage of teenagers who spend over three hours on social media daily.' },
      { front: '問題式開頭', frontSub: '開頭技法', back: 'Have you ever wondered why...? / What would happen if...?', backNote: '用問題抓住讀者注意力', example: 'Have you ever wondered why the queue outside a new café stretches around the block?' },
      { front: '場景式開頭', frontSub: '開頭技法', back: 'Imagine... / Picture a scene where...', backNote: '以畫面代入，引起共鳴', example: 'Imagine waking up to find that the forests you grew up visiting have been cleared overnight.' },
      { front: 'PEEL 段落結構', frontSub: '論說文架構', back: 'Point → Evidence → Explanation → Link', backNote: '論說文每段的組織公式', example: 'P: Resilience matters. E: Studies show resilient students perform better. Ex: This suggests... L: Therefore...' },
      { front: '看圖情緒推測句', frontSub: '看圖寫作', back: '[S] appears/seems [adj.], suggesting/as if...', backNote: '推測圖中人物情緒或動機', example: 'The woman appears torn, as if weighing two equally difficult choices.' },
      { front: 'give rise to', frontSub: '因果關係', back: '= cause（但更書面）→ 導致、引起', backNote: '因果分析的高分片語', example: 'Overexposure to violent content can give rise to desensitization in young viewers.' },
      { front: 'stem from / be rooted in', frontSub: '因果關係', back: '= come from → 源自於、根植於', backNote: '用於分析問題根源', example: 'Much of this conflict stems from a failure to listen to opposing perspectives.' },
      { front: 'Nevertheless / Nonetheless', frontSub: '轉折語氣', back: '= however（但更書面）→ 儘管如此', backNote: '高級轉折，適合結論段前', example: 'The challenges are real; nevertheless, they are not insurmountable.' },
      { front: 'In contrast', frontSub: '對比關係', back: '= on the other hand（更精確）→ 相比之下', backNote: '用於兩種截然不同的情況', example: 'In contrast to older generations, today\'s youth have grown up entirely online.' },
      { front: '高分結尾 — 首尾呼應', frontSub: '結尾技法', back: '結尾呼應開頭意象 + 一句昇華點題', backNote: '最常見高分結尾策略', example: 'The queue may have seemed trivial, but what it reveals about our relationship with novelty is anything but.' },
    ]
  }
];

// ── Writing Guides ─────────────────────────────────────────────────────────────
const writingGuides = [
  // 學測（newest first）
  {
    relatedQId: 1, year: '115 學測', exam: '學測', type: '混合題', typeIcon: '🔀',
    prompt: '近年來養寵物的風氣在台灣日漸普遍，而寵物在人們生活中的角色也與過去不同。請以此為主題，並參考下列圖片，寫一篇英文作文，文分兩段。第一段描述這些圖片中所呈現的現象；第二段根據你自身的經驗或觀察，說明此現象的原因以及可能的影響。',
    structure: [
      '第一段：描述圖片所呈現的具體現象——人們如何對待寵物，以及這與過去有何不同',
      '第二段：說明此現象的成因（少子化、都市孤獨感、情感寄託）及可能帶來的影響'
    ],
    tips: [
      '第一段要抓住「新行為」的具體細節（嬰兒車、共餐等）——這些才是「現象」的核心',
      '第二段「原因＋影響」要有邏輯連結，不能各說各話',
      '可提社會背景因素（少子化、都市化、孤獨感）讓分析更有深度'
    ],
    vocab: 'humanize pets, surrogate family members, companionship, pet-friendly culture, emotional bond, declining birth rate'
  },
  {
    relatedQId: 2, year: '114 學測', exam: '學測', type: '混合題', typeIcon: '🔀',
    prompt: '每逢颱風逼近台灣，各縣市政府會依氣象預報的內容來決定隔日是否停止上班上課。請針對這個議題寫一篇英文作文，文分兩段。第一段根據下方對比圖片，描述颱風假時實際上可能出現的兩種不同情景；第二段說明你對放颱風假的看法與經驗。',
    structure: [
      '第一段：對比描述兩張圖所呈現的不同情景——有人趁颱風假外出購物，也有人必須在風雨中出行',
      '第二段：表達你對颱風假的看法（正面／反面／兩面皆提），加入個人經驗'
    ],
    tips: [
      '第一段要呈現「對比」——兩張圖的差異是核心，不要只描述其中一張',
      '第二段要有清楚立場，不要說了很多卻沒有表態',
      '個人經驗讓文章更真實（「我記得有一次颱風假⋯⋯」）'
    ],
    vocab: 'typhoon warning, precautionary measure, brace for impact, safety hazard, mixed blessings, irresponsible behavior'
  },
  {
    relatedQId: 3, year: '113 學測', exam: '學測', type: '混合題', typeIcon: '🔀',
    prompt: '這個世代的青少年除了有課業壓力外，生活上也常面對一些困擾和挑戰。下列三張圖分別呈現青少年經常遭遇的三種問題：① First Heartbreak（初戀失敗）② Caring What Others Think（在意別人眼光）③ Mood Swings（情緒波動）。如果你有一個機器人小幫手可以幫你解決其中一個問題，你會選擇哪一個？請寫一篇英文作文，文分兩段。第一段說明你最想解決哪一個問題，並解釋原因；第二段說明你希望這個機器人小幫手具備什麼樣的特質或能力，可以如何和你分工合作來解決此問題。',
    structure: [
      '第一段：選定一個挑戰，說明為何這個挑戰對你或你認識的人影響最大，理由要充分',
      '第二段：說明這個機器人應具備的特質／能力，以及你們如何具體分工合作'
    ],
    tips: [
      '選定後不能跑題，兩段都必須緊扣你選的那個挑戰',
      '機器人的「能力」要直接對應挑戰（選「在意別人眼光」→ 機器人要有幫助建立自信的能力）',
      '「分工合作」要有具體描述，不能只說「它會幫助我」'
    ],
    vocab: 'emotional resilience, peer pressure, self-esteem, empathetic AI, coping mechanism, collaboratively tackle'
  },
  {
    relatedQId: 4, year: '112 學測', exam: '學測', type: '混合題', typeIcon: '🔀',
    prompt: '隨著社群媒體的普及，表情符號（emoji）的使用也愈來愈廣泛。請參考下列表情符號（😊 😠 😲 😍），寫一篇英文作文，文分兩段。第一段說明人們為何以及如何廣泛使用表情符號，並從以下表情符號中選一至二例，說明表情符號在溝通上有何功能；第二段則以個人及親友的經驗為例，討論表情符號在訊息表達或解讀上可能造成的誤會及困擾，並提出可以化解的方法。',
    structure: [
      '第一段：解釋 emoji 廣泛使用的原因（方便、直覺、跨語言）＋ 挑選 1–2 個 emoji 分析其溝通功能',
      '第二段：用具體個人／親友經驗說明 emoji 造成的誤會，並提出解決方法'
    ],
    tips: [
      '第一段分析要有「深度」——不只說「emoji 很方便」，要說它為何能取代或補充文字',
      '第二段「誤會例子」要具體：例如 😂 在不同世代／文化中意思不同',
      '⚠️ 記得提出化解方法（clarify, follow up with words, be mindful of context）——原題明確要求，很多人漏掉！'
    ],
    vocab: 'convey emotions, non-verbal cues, ambiguity, misinterpretation, digital communication, generational gap'
  },
  {
    relatedQId: 5, year: '111 學測', exam: '學測', type: '混合題', typeIcon: '🔀',
    prompt: '不同的公園，可能樣貌不同，特色也不同。請以此為主題，並依據下列兩張圖片的內容，寫一篇英文作文，文分兩段。第一段描述圖A（遊樂設施型公園）和圖B（自然景觀型公園）中的公園各有何特色；第二段則說明你心目中理想公園的樣貌與特色，並解釋你的理由。',
    structure: [
      '第一段：用對比方式描述圖A（遊樂設施型）和圖B（自然景觀型）各自的特色與差異',
      '第二段：描述你心目中理想公園的樣貌，解釋為什麼這些特色對你重要'
    ],
    tips: [
      '第一段要有「對比意識」：使用 while, whereas, in contrast 等對比連接詞',
      '第二段可融合 A 和 B 的元素，但要說明原因，不能只列功能',
      '理想公園的描述要有畫面感（誰會去、做什麼、感受如何）'
    ],
    vocab: 'recreational facilities, serene greenery, tranquil escape, vibrant community space, blend of nature and fun'
  },
  {
    relatedQId: 6, year: '110 學測', exam: '學測', type: '看圖寫作', typeIcon: '📷',
    prompt: '下圖為遊客到訪某景點的所見景象（一片花田，有告示牌，遊客在花田中）。你對這個景象有什麼感想？請依據這圖片寫一篇英文作文，文分兩段，第一段描述圖中的內容，包括其中人、事、物及發生的情事；第二段則以遊客或場地主人的立場，表達你對這件事情的看法。',
    structure: [
      '第一段：描述圖中的場景——花田、告示牌內容、遊客的行為，以及整體氛圍',
      '第二段：選定一個立場（遊客 or 農場主人），表達你對眼前情況的感受與看法'
    ],
    tips: [
      '圖片描述有「觀察層次」：先說看到什麼（視覺），再說感受到什麼（情感／氛圍）',
      '選定立場後要貫徹到底，不要在段中混用兩種視角',
      '加入反思句——關於尊重自然、遵守規定或對他人努力的思考'
    ],
    vocab: 'stunning scenery, delicate blossoms, trespass, disregard the notice, violation of rules, etiquette'
  },
  {
    relatedQId: 7, year: '109 學測', exam: '學測', type: '看圖寫作', typeIcon: '📷',
    prompt: '請觀察以下有關某家賣場週年慶的新聞報導圖片，並根據圖片內容想像其中發生的一個事件或故事，寫一篇英文作文。文分兩段，第一段描述這兩張圖片中所呈現的場景，以及正在發生的狀況或事件；第二段則敘述該事件（或故事）接下來的發展和結果。',
    structure: [
      '第一段：描述兩張圖的場景、狀況與氛圍（人物在做什麼、感受如何）',
      '第二段：創作事件後續——例如某人搶到心儀商品、發生意外插曲、或感受到人情溫暖'
    ],
    tips: [
      '第一段加入氛圍詞彙讓描述更生動：chaotic, bustling, electric atmosphere, enthusiastic shoppers',
      '第二段故事要有完整「起—發展—結局」，主角要有情感變化',
      '兩段要有邏輯連貫——第 1 段描述現場，第 2 段延伸一個具體人物的故事'
    ],
    vocab: 'surge of shoppers, year-end sale, jostle through the crowd, snag a bargain, exhilarating chaos'
  },
  {
    relatedQId: 8, year: '108 學測', exam: '學測', type: '主題式寫作', typeIcon: '🌱',
    prompt: '身為台灣的一份子，台灣最讓你感到驕傲的是什麼？請以此為主題，寫一篇英文作文，設置兩個段落。第一段描述這二個讓你引以為傲的事物（如：人、事、物、文化、制度等），並說明它們為何引以為豪；第二段說明你認為可以用何種方式介紹這些台灣特色，讓世人更了解台灣。',
    structure: [
      '第一段：描述兩件最能代表台灣讓你驕傲的事物，說明它們的特色與意義',
      '第二段：說明你會用什麼方式把這些事物介紹給外國人，讓他們更了解台灣'
    ],
    tips: [
      '選的兩件事物要具體——不要只說「台灣食物好吃」，而是說「夜市文化代表著台灣人的⋯⋯」',
      '第二段的介紹方式要有創意（帶他們實際體驗、推薦影片或書籍、親身示範）',
      '善用「展示」類動詞：showcase, represent, reflect, embody, illustrate'
    ],
    vocab: '推薦主題：夜市文化、醫療制度、人情味（warmth of the people）、珍珠奶茶、廟宇文化'
  },
  {
    relatedQId: 9, year: '107 學測', exam: '學測', type: '主題式寫作', typeIcon: '🌱',
    prompt: '排除難關是生活中常有的體驗，但我們也常看到人們在困境中以一種向上提升的方式克服挑戰。以「排除難關」為主題，寫一篇英文作文，文分兩段。第一段以個人觀察或親身接觸過的具體例子說明排除難關的形式或意象；第二段說明自己已達成或希望未來能達成的目標或狀態。',
    structure: [
      '第一段：舉一個你親身經歷或觀察到的「排除難關」具體例子，說明遭遇什麼困難、如何一步步克服',
      '第二段：選擇一個意象（階梯、螺旋、橋）來象徵克服困境的過程，說明選擇理由，並連結到你希望達成的目標'
    ],
    tips: [
      '兩段任務都要完成——第 1 段＝具體事例，第 2 段＝目標與意象詮釋',
      '意象的選擇要有象徵意義，並充分解釋（不能只說「我選階梯」而不說為什麼）',
      '兩段之間用銜接句：「This experience made me realize that overcoming obstacles is like…」'
    ],
    vocab: '適合意象：spiral（向上螺旋）、staircase（階梯）、bridge（橋）、winding mountain path（山路）'
  },
  {
    relatedQId: 10, year: '106 學測', exam: '學測', type: '看圖寫作', typeIcon: '📷',
    prompt: '請仔細觀察以下三幅連環圖片的內容，並想像第四幅圖片可能的發展，然後寫出一篇涵蓋每張圖片內容且有完整結局的故事。（圖片主題：交通／搭便車情境——路邊等車、塞車、人群擁擠的場面）',
    structure: [
      '第一段：描述 3 格圖的場景、動作、人物關係與情緒',
      '第二段：創作第 4 格——事件如何收尾，加入人物心理感受與反思'
    ],
    tips: [
      '確認每格的主要動作都有提到，不可跳過任一格',
      '加入生活化細節讓故事真實（時間、天氣、人物身份）',
      '結尾帶一句關於助人或人情溫暖的反思，增加文章深度'
    ],
    vocab: null
  },
  {
    relatedQId: 11, year: '105 學測', exam: '學測', type: '論說文', typeIcon: '💬',
    prompt: '你認為家裡生活環境的維持應該是誰的責任？請寫一篇短文說明你的看法。文分兩段，第一段說明你對家事該如何分工的看法及理由；第二段舉例說明你家中家事分工的情形，並描述你自己做家事的經驗及感想。',
    structure: [
      '第一段：清楚表達你的立場（例如：家事是每位家庭成員共同的責任），並說明理由',
      '第二段：以自己家中為例——誰負責什麼、你個人做過哪些家事、感想如何'
    ],
    tips: [
      '立場要清楚，開頭第一句就表態，不要模糊兩可',
      '第二段的個人例子要具體（說出做了什麼家事、在什麼情況下）',
      '使用因果連接詞：therefore, as a result, consequently, this is why'
    ],
    vocab: 'household chores, equitable distribution, sense of responsibility, domestic duties, contribute to the household'
  },
  {
    relatedQId: 12, year: '104 學測', exam: '學測', type: '主題式寫作', typeIcon: '🌱',
    prompt: '下面兩本書是學校建議的暑假閱讀書籍，請依書名想看書的內容，並思考你會選擇哪一本書閱讀、為什麼？請在第一段說明你會選哪一本書及你認為這本書大概的內容是什麼；第二段提出你選擇讀這本書的理由。\n  ‧書A：Everyone is Beautiful: Respect Others & Be Yourself（Caroline Strong）\n  ‧書B：Leadership is a Choice: Conquer Your Fears & You Can Be a Leader Too（Austin Young）',
    structure: [
      '第一段：說明你選哪一本書，以及根據書名推測這本書大概的內容是什麼',
      '第二段：說明你選擇這本書的具體理由——結合個人經歷、面對的困難或對未來的期許'
    ],
    tips: [
      '選定一本後立場要貫徹全文，不要說「兩本都很好」',
      '第一段的內容推測要合理，扣緊書名關鍵字來發揮',
      '第二段理由要有「個人連結」——不是泛說「我想學習」，而是說「我曾經⋯⋯因此這本書對我很重要」'
    ],
    vocab: '"The title immediately resonated with me because…" / "I believe this book would help me deal with…"'
  },
  {
    relatedQId: 13, year: '103 學測', exam: '學測', type: '看圖寫作', typeIcon: '📷',
    prompt: '請仔細觀察以下三幅連環圖片的內容，並想像第四幅圖片可能的發展，寫出一篇涵蓋所有連環圖片內容且有完整結局的故事。（圖片主題：女孩們外出，途中發生插曲，涉及車輛／追車情節）',
    structure: [
      '第一段：描述 3 格圖，交代人物、場景與事件轉折',
      '第二段：創作合理的第 4 格——問題如何解決，故事如何結束，加入感受或反思'
    ],
    tips: [
      '把每一格當作一個小場景，描述要有「場景感」（時間、地點、動作、表情）',
      '第 4 格創作要呼應前面的張力，給出合理且完整的收尾',
      '多用情緒詞：thrilled, anxious, relieved, bewildered, frantic'
    ],
    vocab: '"Little did they know that…" / "To their relief…" / "What had started as a fun outing turned into…"'
  },
  {
    relatedQId: 14, year: '102 學測', exam: '學測', type: '看圖寫作', typeIcon: '📷',
    prompt: '請仔細觀察以下三幅連環圖片的內容，並想像第四幅圖片可能的發展，寫出一篇涵蓋所有連環圖片內容且有完整結局的故事。（圖片主題：公共交通博愛座 Priority Seats）',
    structure: [
      '第一段（描述）：依序描述 3 格圖片的場景、人物關係與情緒變化',
      '第二段（延伸）：創作第 4 格結局——推演故事，加入人物心理與完整收尾'
    ],
    tips: [
      '四格故事需要「起承轉合」——你的第 4 格就是「合」，要有明確結局',
      '加入人物對話或心理描寫讓故事生動（e.g. "Embarrassed, he slowly rose from his seat…"）',
      '多用時間過渡詞：just then, at that moment, eventually, without hesitation',
      '結尾可帶一句關於禮讓／公德心的反思讓文章有深度'
    ],
    vocab: 'priority seat, reluctantly, considerate, compassionate, give up one\'s seat'
  },
  {
    relatedQId: 15, year: '101 學測', exam: '學測', type: '信函寫作', typeIcon: '✉️',
    prompt: '你最好的朋友最近迷上電玩，因此常常熬夜、疏忽課業、並受到父母的責罵。你（英文名字必須假設為 Jack 或 Jill）打算寫一封信給他／她（英文名字必須假設為 Ken 或 Barbie），適當地給予勸告。請注意：必須以上述的 Jack 或 Jill 在信末署名，不得使用自己的真實中文或英文名字。',
    structure: [
      '開頭：Dear Ken / Dear Barbie,',
      '第一段：表示關心，描述你觀察到朋友的狀況（熬夜、疏忽課業、被父母責罵）',
      '第二段：提出 2–3 條具體可行的建議（設定每日遊戲時間上限、先完成功課再玩）',
      '結語：Yours sincerely, / Best regards, + Jack 或 Jill'
    ],
    tips: [
      '格式完整（稱呼、正文、結語）是基本分，不能少',
      '語氣溫暖關心，不要說教——以「我擔心你」而非「你這樣不對」出發',
      '建議要具體，不能只說「你應該少玩一點」',
      '⚠️ 絕對不能用自己的真實姓名署名——學測明文規定，違反直接扣分'
    ],
    vocab: '"I\'ve noticed that you\'ve been staying up late…" / "As your friend, I\'m truly worried about…" / "Have you considered setting a time limit for…?"'
  },

  // 指考（newest first）
  {
    relatedQId: 201, year: '110 指考', exam: '指考', type: '論說文', typeIcon: '💬',
    prompt: '近年來，很多大學鼓勵教授以英語講授專業課程，請寫一篇英文作文，說明你對這個現象的看法。文分兩段，第一段說明你是否認同這個趨勢並陳述理由；第二段說明如果你未來就讀的大學必修課是以英語授課，你將會如何因應或規劃。',
    structure: [
      '第一段：表態（認同／不認同英語授課）並說明理由（認同：提升競爭力、接軌國際；不認同：影響理解、課業壓力增加）',
      '第二段：假設必修課用英語授課，你會採取什麼具體的因應措施或學習規劃'
    ],
    tips: [
      '立場必須明確且貫徹全文',
      '第一段可先承認反方有道理，再用 However / Nevertheless 轉入自己立場，論述更有說服力',
      '第二段的因應計畫要具體可信（不能只說「我會努力學英文」——要說怎麼做）'
    ],
    vocab: 'English-medium instruction (EMI), academic proficiency, language barrier, immersive learning, competitive edge, adapt to'
  },
  {
    relatedQId: 202, year: '109 指考', exam: '指考', type: '論說文', typeIcon: '💬',
    prompt: '維護校園安全是校園內每個成員的責任，請寫一篇英文作文，說明應該如何維護校園安全。文分兩段，第一段說明校園安全的重要性及校園內可能發生的安全問題；第二段說明身為校園的一份子，你覺得校內成員應該採取哪些作為以維護校園安全。',
    structure: [
      '第一段：說明校園安全的重要性 ＋ 列舉校園中可能出現的安全問題（霸凌、意外事故、外來者入侵、網路霸凌等）',
      '第二段：提出具體行動建議（學生、老師、學校三個層次都可涵蓋）'
    ],
    tips: [
      '第一段的「安全問題」要多元——不只是物理安全，也可提心理安全、網路霸凌',
      '第二段行動建議要有層次（個人行動 → 學校政策），不要全部都是「互相舉報」',
      '結尾呼應「共同責任」主題，首尾呼應'
    ],
    vocab: 'foster a safe environment, proactive measures, bystander effect, zero-tolerance policy, mental well-being, surveillance'
  },
  {
    relatedQId: 203, year: '108 指考', exam: '指考', type: '圖表寫作', typeIcon: '📊',
    prompt: '右表顯示美國 18 至 29 歲青年對不同類別新聞的關注程度（百分比）。請根據此圖表寫一篇英文作文，文長至少 120 個單詞，文分兩段。第一段描述此圖表的主要內容並指出其中最重要的趨勢；第二段則對照你自己比較關注及較不關注的新聞主題分別為何，並說明理由。\n  ‧圖表數據：娛樂新聞 ~66%、社會事件 ~64%、學校教育 ~59%、犯罪新聞 ~58%、地方事件 ~55%',
    structure: [
      '第一段：描述圖表主要趨勢——哪類最高、哪類最低、最顯著的對比是什麼',
      '第二段：對照你自己的新聞閱讀習慣，說明你最關注和最少關注的類別，並解釋原因'
    ],
    tips: [
      '第一段必須引用具體數據："According to the chart, approximately 66% of young Americans follow entertainment news…"',
      '描述趨勢時用圖表語言：the highest/lowest proportion, a significant gap, roughly twice as many',
      '第二段要有自我反思——你的習慣與圖表相同還是不同？為什麼？',
      '⚠️ 不能只描述圖表數字，第二段的個人觀點是必要的'
    ],
    vocab: 'media consumption, civic engagement, public affairs, tabloid news, information diet, substantive reporting'
  },
  {
    relatedQId: 204, year: '107 指考', exam: '指考', type: '混合題', typeIcon: '🔀',
    prompt: '如果你就讀的學校預備舉辦一項社區活動，而目前初步討論到三個方向：（一）提供社區服務、（二）發展才藝技術、（三）手工藝品集資。這三個方向中，你會選擇哪一個？請以此為主題，寫一篇英文作文，文長至少 120 個單詞。文分兩段，第一段說明你的選擇及原因；第二段說明你為這個活動籌備的內容，並說明你的設計理念。',
    structure: [
      '第一段：說明你選哪個活動方向，以及為什麼選這個而非其他兩個',
      '第二段：具體描述活動的籌備內容（怎麼做、誰參與、需要什麼資源），以及這個活動的設計理念'
    ],
    tips: [
      '選定後整篇圍繞一個方向，不要三個都提到',
      '第二段的活動設計要具體可執行，讓閱卷老師覺得你真的想過怎麼做',
      '說明這個活動對學校、社區或個人有什麼意義'
    ],
    vocab: 'coordinate, community outreach, showcase talents, fundraising initiative, foster team spirit, design concept'
  },
  {
    relatedQId: 205, year: '106 指考', exam: '指考', type: '主題式寫作', typeIcon: '🌱',
    prompt: '每個人多少都有儲放物品的經驗和方式，當你找到或找不到東西時，也都有各自的處理辦法。請以此為主題，寫一篇英文作文，文長至少 120 個單詞。文分兩段，第一段說明你習慣以何種方式或在何種條件下儲放物品；第二段描述一次你找到或找不到某件物品的事例，說明當時的狀況或心情，以及你後來如何因應或處理。',
    structure: [
      '第一段：描述你整理／存放物品的習慣與方式（分類、固定位置、收納工具等）',
      '第二段：敘述一次具體的「找東西」經驗——找什麼、為什麼找不到／找得到、過程與感受、最後如何解決'
    ],
    tips: [
      '第一段要有具體細節，不能只說「我很整齊」，要說明你怎麼整理',
      '第二段的故事要有情感起伏（著急 → 搜尋 → 最後找到或放棄）',
      '結尾可帶一句改變習慣的決心或反思，增加文章深度'
    ],
    vocab: 'rummage through, misplace, meticulous organization, frantic search, declutter, designated spot'
  },
  {
    relatedQId: 206, year: '105 指考', exam: '指考', type: '論說文', typeIcon: '💬',
    prompt: '最近有一則新聞報導，標題為「碩士清潔員（waste collectors with a master\'s degree）」——50 位碩士畢業生應徵某事業單位清潔員職缺，引起各界關注。請就這個主題寫一篇英文作文，文長至少 120 個單詞。文分兩段，第一段說明你觀察到這個現象的成因；第二段則以你的家人（舉例）說明他們為了因應就業市場所做的努力或準備。',
    structure: [
      '第一段：分析「碩士清潔員」現象的成因（就業市場競爭激烈、學歷通膨、生活現實考量等）',
      '第二段：舉家人或身邊的人為例，說明他們如何因應就業壓力（轉換跑道、持續進修、調整期望等）'
    ],
    tips: [
      '第一段要有「分析性」——挖掘背後的社會／經濟原因，不只描述現象',
      '第二段的例子要連結第一段論點，不能說了例子卻忘了呼應主題',
      '保持理性客觀的語氣，可以從積極角度看待（打破學歷迷思、務實選擇）'
    ],
    vocab: 'overqualified, diploma inflation, pragmatic choice, redefine success, competitive labor market, embrace reality'
  }
];
