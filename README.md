# random-sorting-app

Приложение для генерации и сортировки случайных чисел

## Запуск в dev-режиме (без сборки, через ts-node)

1. **Установка зависимостей:**
   ```bash
   npm install
   ```

2. **Убедитесь, что установлен ts-node:**  
   Используется dev-скрипт:
   ```bash
   npm run dev
   ```
   Скрипт в package.json должен выглядеть так:
   ```json
   "dev": "ts-node src/index.ts"
   ```

3. **Переменные окружения:**
   - Для подгрузки `.env` используется:
     ```typescript
     import "dotenv/config";
     ```
   - Файл `.env` положите в корень проекта, например:
     ```env
     API_URL=https://ваш.сервер/api
     ```
---

## Сборка и запуск из dist (production)

1. **Соберите проект:**
   ```bash
   npx tsc
   ```
   Появится папка ./dist, в ней будут js-файлы.

2. **Запустите:**
   ```bash
   node dist/index.js
   ```
---
