// Пример серверной функции для AI-чата (совместим с Vercel/Netlify Functions).
// Разверните отдельно (GitHub Pages не выполняет серверный код) и укажите её URL
// в data-endpoint компонента AiChat.astro. Требует переменную окружения ANTHROPIC_API_KEY.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { messages } = req.body;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 500,
        system: 'Ты бесплатный AI-помощник мотосервиса Global-ATV (Кубинка, ремонт и ТО мотоциклов, квадроциклов, снегоходов). Отвечай дружелюбно и просто, короткими абзацами на русском. Дай вероятные причины неисправности и простые советы, но всегда заканчивай рекомендацией привезти технику в сервис для точной диагностики. Не придумывай точные цены.',
        messages,
      }),
    });
    const data = await r.json();
    res.status(200).json({ reply: data.content?.[0]?.text ?? 'Извините, не удалось сформировать ответ.' });
  } catch (e) {
    res.status(500).json({ reply: 'Сервис временно недоступен. Позвоните нам: +7 (926) 388-28-90.' });
  }
}
