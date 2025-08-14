# Проект SM

> Макет в Figma: [ссылка](https://www.figma.com/design/Lrhk1JCno3yf4ggEnQj5m0/Untitled?node-id=0-1&p=f&t=GKQQR1E8pc7okZF1-0)

## О проекте

 Проект построен на **Next.js 14 + TypeScript 5**, состояние хранится в **Zustand**, данные запрашиваются через **Axios**, стили написаны на **Tailwind CSS**.


## Технологии

- **Next.js 14 / TypeScript 5** — базовый стек, сборка через `create-next-app`
- **Zustand** — глобальное состояние корзины
- **Axios** — REST‑запросы
- **Tailwind CSS** — стили и адаптивная вёрстка (CSS Grid + Flexbox)

## Как запустить проект локально

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/Mehrob007/dilpur.git
cd test-task

# 2. Установите зависимости
pnpm install        # или npm install / yarn

# 3. Настройте переменные окружения
# Создайте файл .env.local и добавьте, например:
NEXT_PUBLIC_API_URL=https://api.example.com

# 4. Запустите dev‑сервер
pnpm dev            # http://localhost:3000

# 5. Сборка production
pnpm build          # создаётся папка .next
pnpm start          # запуск production‑сервера
```

## Структура проекта

```
├─ public/            # статические ассеты
│  ├─ icons/          # иконки
│  └─ images/         # изображения
├─ src/
│  ├─ api/            # обёртка Axios
│  ├─ ui/             # UI‑компоненты
│  ├─ hooks/          # кастомные хуки
│  ├─ app/            # маршруты (Next App Router)
│  ├─ modules/        # бизнес‑модули (Cart, ProductItems и т. д.)
│  ├─ store/          # Zustand‑слайсы
│  ├─ types/          # общие типы TS
│  ├─ constants/      # const
│  └─ utils/          # вспомогательные функции
│  └─ fonts/          # шрифты страниц
└─ README.md
```

## Лицензия

MIT