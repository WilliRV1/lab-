import React, { useEffect } from 'react';

const Tecnica = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="bg-white">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <span className="section-label text-accent">Proceso C&P</span>
              <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
                Rigor <span className="text-primary italic">Académico</span>, Precisión Digital
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                No solo fabricamos piezas; aplicamos ciencia odontológica en cada restauración. Nuestro enfoque combina la docencia universitaria con la tecnología Leaf Dental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STEPS ═══════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 aspect-square group">
                <img 
                  src="/proceso.png" 
                  alt="Proceso de Caracterización y Diseño Dental Digital C&P" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-12 fade-in">
              <div>
                <span className="text-5xl font-black text-primary/20 mb-4 block">01</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Planificación Digital</h3>
                <p className="text-slate-500 leading-relaxed">
                  Analizamos cada archivo .STL con software de última generación, evaluando morfología, espacios interoclusales y puntos de contacto críticos.
                </p>
              </div>
              <div>
                <span className="text-5xl font-black text-primary/20 mb-4 block">02</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Selección de Material</h3>
                <p className="text-slate-500 leading-relaxed">
                  Zirconios de alta translucidez, Disilicatos inyectados o PMMA de alta densidad. Elegimos el material basándonos en la exigencia mecánica y estética del caso.
                </p>
              </div>
              <div>
                <span className="text-5xl font-black text-primary/20 mb-4 block">03</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Caracterización Humana</h3>
                <p className="text-slate-500 leading-relaxed">
                  La tecnología fresa la pieza, pero nuestro equipo técnico le da el alma. Maquillaje artesanal y pulido mecánico para mimetizar la pieza con el entorno natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tecnica;
