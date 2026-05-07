import React, { useState } from 'react';
import {
  Square as ChessKnight,
  BookOpen,
  PlayCircle,
  ChevronRight,
  Award,
  Users,
  Star,
  Menu,
  X,
  Languages
} from 'lucide-react';

// Примечание: В библиотеке lucide-react иконка шахматного коня называется 'ChevronFirst' или 'Tower' в зависимости от версии.
// Для стабильности я заменил ее на подходящую по стилю иконку или Square (в качестве заглушки),
// но в реальном проекте обычно используется 'Crown' или 'Tower'.

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Данные для уроков (можно менять видео и описания)
  const lessons = [
    {
      id: 1,
      title: "Основы шахмат",
      duration: "45 мин",
      level: "Начинающий",
      description: "Изучаем правила передвижения фигур и цель игры.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Дебютные ловушки",
      duration: "60 мин",
      level: "Средний",
      description: "Как не проиграть партию в первые 10 ходов.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Эндшпиль: Матование",
      duration: "50 мин",
      level: "Все уровни",
      description: "Техника реализации преимущества в конце игры.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Навигационная панель */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Логотип */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                Tikhon_chess
              </span>
            </div>

            {/* Меню для ПК */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#lessons" className="hover:text-indigo-600 transition-colors">Уроки</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Записаться
              </button>
            </div>

            {/* Кнопка мобильного меню */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            <a href="#lessons" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Уроки</a>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">Записаться</button>
          </div>
        )}
      </nav>

      {/* Главный экран (Hero Section) */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-current text-amber-400" />
            <span>Школа шахматного мастерства Тихона</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
            Стань гроссмейстером <br/>
            <span className="text-indigo-600">своего будущего</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Авторские методики обучения, разбор партий мировых чемпионов и поддержка на каждом этапе твоего шахматного пути.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl">
              Начать обучение <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Сетка уроков */}
      <section id="lessons" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Доступные видео-уроки</h2>
              <p className="text-slate-500">Начни свой путь с основ или улучшай свои навыки в миттельшпиле.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-indigo-600 font-semibold cursor-pointer group">
              Смотреть все курсы <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="group bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
                <div className="aspect-video bg-indigo-900 rounded-3xl mb-6 overflow-hidden relative shadow-inner">
                   <iframe
                    className="absolute inset-0 w-full h-full"
                    src={lesson.videoUrl}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-2 mb-3">
                   <span className="bg-indigo-100 text-indigo-700 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
                     {lesson.level}
                   </span>
                   <span className="text-slate-400 text-xs">• {lesson.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 line-clamp-2">
                  {lesson.description}
                </p>
                <button className="w-full py-4 rounded-2xl border-2 border-slate-200 font-bold text-slate-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all transform active:scale-95">
                  Смотреть урок
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-6 opacity-50">
            <Award className="w-5 h-5" />
            <span className="font-bold">Tikhon_chess</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Tikhon_chess School. <br className="md:hidden"/> Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;