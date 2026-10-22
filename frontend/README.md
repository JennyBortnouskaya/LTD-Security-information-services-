# LTD Security Information Services - Landing Page

Переписанный лендинг на современном стеке: React 19 + TypeScript + Vite + Tailwind CSS v4.

## Стек технологий

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик
- **Tailwind CSS v4** - CSS фреймворк
- **Swiper.js** - слайдер для карусели
- **Yandex Maps API** - карты

## Установка

```bash
cd frontend
npm install
```

## Запуск

### Development

```bash
npm run dev
```

Проект будет доступен по адресу: http://localhost:5173

### Production Build

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

### Preview Production Build

```bash
npm run preview
```

## Структура проекта

```
frontend/
├── public/
│   ├── images/       # Изображения
│   └── fonts/        # Шрифты (Futura PT)
├── src/
│   ├── components/
│   │   ├── Carousel/         # Компонент карусели
│   │   ├── AboutUs/          # Компонент "О нас"
│   │   ├── Services/         # Компонент услуг
│   │   ├── Advantages/       # Компонент преимуществ
│   │   ├── ContactInformation/ # Компонент контактов и формы
│   │   ├── Map/              # Компонент карты
│   │   └── Footer/           # Компонент футера
│   ├── App.tsx              # Главный компонент
│   ├── index.css            # Глобальные стили и CSS-переменные
│   └── main.tsx             # Точка входа
├── tailwind.config.js       # Конфигурация Tailwind
├── postcss.config.js        # Конфигурация PostCSS
└── .browserslistrc          # Конфигурация поддерживаемых браузеров
```

## Компоненты

### Carousel
Слайдер в шапке с использованием Swiper.js. Включает:
- 2 слайда с навигацией
- Кнопку телефона
- Dropdown меню

### AboutUs
Секция "О нас" с изображением и текстом.

### Services
Секция "Наши услуги" с 7 карточками. Карточки имеют hover-эффекты (расширение).

### Advantages
Секция "Преимущества аутсорсинга" с 4 блоками. Имеет интерактивные кнопки для показа/скрытия контента.

### ContactInformation
Секция с контактной информацией и формой обратной связи (только UI).

### Map
Карта с использованием Yandex Maps API.

### Footer
Футер с навигацией, социальными сетями и кнопкой "Наверх".

## CSS-стратегия

- **Layout/сетка** → Tailwind utilities
- **Компонентные стили** → CSS Modules
- **Глобальные токены** → CSS-переменные + Tailwind theme

## Браузерная совместимость

### Поддерживаемые браузеры
- Chrome 84+
- Firefox 63+
- Safari 14.1+
- Edge 84+

Конфигурация в `.browserslistrc`:
```
>0.2%
not dead
not IE 11
```

### Fallback
Добавлены @supports fallback для:
- Gap в flexbox (через margin)
- CSS Custom Properties
- Gradients (через solid color)

## Удаленные хаки

Удалены все вендорные префиксы и IE-хаки:
- `-webkit-`, `-moz-`, `-ms-`, `-o-` префиксы
- Старый синтаксис flexbox
- EOT шрифты (оставлены WOFF2, WOFF, TTF)

## Отличия от оригинала

### Удалено
- jQuery (не использовался)
- Google Fonts Inter (не использовался)
- IE-хаки и вендорные префиксы
- js-2.2.min.js (заменен на Swiper.js)

### Сохранено
- 100% визуальное соответствие
- Все интерактивные элементы
- Анимации и переходы
- Яндекс.Карты
- Шрифт Futura PT

## TODO

- [ ] Улучшение responsive поведения
- [ ] Проверка браузерной совместимости
- [ ] Оптимизация изображений (WebP)
- [ ] Реализация отправки формы на сервер

## Разработка

### Добавление новых компонентов

1. Создать папку в `src/components/`
2. Создать файл компонента `.tsx`
3. Создать файл стилей `.module.css`
4. Создать файл `index.ts` для экспорта
5. Импортировать в `App.tsx`

### Использование Tailwind

Tailwind настроен с кастомными цветами и размерами из оригинального дизайна. Используйте утилиты для layout, spacing, typography.

```tsx
<div className="flex justify-center gap-4">
  <p className="text-[28px] text-white">Текст</p>
</div>
```

### CSS Modules

Для специфических стилей используйте CSS Modules:

```css
/* component.module.css */
.customButton {
  background: linear-gradient(180deg, #27214A 0%, rgba(118, 110, 162, 0) 100%);
  border-radius: 10px;
}
```

```tsx
import styles from './component.module.css';

<button className={styles.customButton}>Кнопка</button>
```

## Лицензия

Собственность LTD Security Information Services.
