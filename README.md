# 💜 Сайт-вітачка на 4 місяці річниці

## Структура файлів

```
anniversary-site/
├── index.html          # Головний файл
├── css/
│   └── style.css       # Стилі
├── js/
│   └── script.js       # Анімації і слайдер
├── images/             # Ваші фото
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── README.md           # Цей файл
```

## Функції слайдера:

- ✅ Автоматична зміна кожні 4 секунди
- ✅ Кнопки ❮ ❯ для ручного переключення
- ✅ Точки для швидкого переходу
- ✅ Свайп на телефоні (проведи пальцем)

## Як запустити локально?

Просто відкрий `index.html` у браузері.

---

# 🚀 Як захостити на GitHub Pages

## Крок 1: Створіть репозиторій на GitHub

1. Зайдіть на [github.com](https://github.com)
2. Натисніть **"New repository"** (зелена кнопка)
3. Назвіть репозиторій, наприклад: `anniversary-site`
4. Зробіть його **Public** (публічним)
5. Натисніть **"Create repository"**

## Крок 2: Завантажте файли

### Варіант А: Через веб-інтерфейс (простий)

1. У вашому новому репозиторії натисніть **"uploading an existing file"**
2. Перетягніть ВСІ файли і папки з проєкту
3. Натисніть **"Commit changes"**

### Варіант Б: Через Git (для досвідчених)

```bash
# Відкрийте термінал у папці проєкту
git init
git add .
git commit -m "💜 Anniversary site"

# Підключіть до GitHub (замініть YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/anniversary-site.git
git branch -M main
git push -u origin main
```

## Крок 3: Увімкніть GitHub Pages

1. У репозиторії перейдіть у **Settings** (налаштування)
2. Зліва знайдіть **Pages**
3. У розділі **Source** оберіть **Deploy from a branch**
4. У **Branch** оберіть `main` і папку `/ (root)`
5. Натисніть **Save**

## Крок 4: Отримайте посилання!

Через 1-2 хвилини ваш сайт буде доступний за адресою:

```
https://YOUR_USERNAME.github.io/anniversary-site/
```

Поділіться цим посиланням з коханою! 💕

---

## 💡 Поради

- Можна змінити тексти в `index.html` під себе
- Кольори можна змінити в `css/style.css` (шукай `#ff6b9d`)
- Швидкість слайдера: в `js/script.js` зміни `4000` (мілісекунди)
