import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'zh') return saved;
  } catch {}
  return navigator.language.startsWith('zh') ? 'zh' : 'en';
}

function App() {
  const [lang, setLang] = useState(initialLang);
  const t = (en, zh) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">
      <Header t={t} toggleLang={() => setLang(lang === 'zh' ? 'en' : 'zh')} />
      <main>
        <About t={t} />
        <Experiences t={t} />
        <Education t={t} />
        <Projects t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
