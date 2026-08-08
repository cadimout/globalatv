# Global-ATV — Astro сайт

## Запуск
```
npm install
npm run dev
```

## Сборка
```
npm run build   # → dist/
```

## Деплой
- GitHub Pages: workflow `.github/workflows/deploy.yml` уже настроен (пуш в `main` → сборка → Pages). Домен указан в `public/CNAME`.
- AI-чат (`src/components/AiChat.astro`) обращается к `/api/chat` — это серверная функция, GitHub Pages её не выполняет. Разверните `api/chat.js` отдельно на Vercel/Netlify Functions (пример готов, нужен `ANTHROPIC_API_KEY`) и поменяйте `data-endpoint` в компоненте на URL этой функции.
- Погода в `WeatherWidget.astro` — живые данные с бесплатного Open-Meteo API, ключ не требуется, работает сразу.

## Контент
Услуги, цены, бренды, отзывы редактируются в `src/data/site.ts`. Фото галереи и карту — замените плейсхолдеры в `Gallery.astro` / `Contact.astro`.


