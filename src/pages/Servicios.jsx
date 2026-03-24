import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Servicios = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  const priceCategories = [
     {
      title: "CERAMICALINE",
      desc: "Perfecto para restauraciones estéticas puras.",
      items: [
        { name: "Carilla", price: "260.000", tag: "Estética" },
        { name: "Corona", price: "275.000", tag: "Premium" },
        { name: "Incrustación", price: "260.000", tag: "Funcional" },
      ]
    },
    {
      title: "ZIRCONIOLINE",
      desc: "Resistencia extrema en flujo digital.",
      items: [
        { name: "Corona", price: "295.000", tag: "24h Deliver" },
        { name: "PPF (más de 4 unidades)", price: "310.000", tag: "Puentes" },
        { name: "Híbridas (por unidad)", price: "950.000", tag: "Complejo" },
      ]
    },
    {
      title: "3D-RESIN LINE",
      desc: "Versatilidad y rapidez.",
      items: [
        { name: "Corona en Resina", price: "130.000", tag: "Provisionales" },
        { name: "Carilla en Resina", price: "145.000", tag: "Provisionales" },
      ]
    },
    {
      title: "SERVICIOS DIGITALES",
      desc: "Integración Lead Dental.",
      items: [
        { name: "Escaneo Digital", price: "150.000", icon: "center_focus_strong" },
        { name: "Modelos 3D (Z/D)", price: "40.000", icon: "layers" },
        { name: "Prueba en Resina", price: "6.000", icon: "done_all" },
      ]
    },
    {
      title: "LINE PMMA",
      desc: "Estructuras ligeras.",
      items: [
        { name: "Unidad PMMA", price: "135.000", tag: "Fresado" },
      ]
    },
    {
      title: "LINE TRILOR",
      desc: "Material aeroespacial.",
      items: [
        { name: "Estructura Trilor", price: "2'000.000", tag: "Top Tier" },
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-primary/20 opacity-30 transform -skew-y-6 translate-y-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8 border border-primary/30">
            C&P Smile Laboratory
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
            Servicios & <br/> <span className="text-primary italic">Tarifario 2026</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transparencia y excelencia en cada pieza. Descubra nuestras líneas de rehabilitación oral.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
             <a href="https://wa.me/570000000000" className="btn-primary px-10">
                Iniciar un Pedido
             </a>
             <a href="/public/prices.pdf" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors border-b border-white/20 pb-1" download>
               <span className="material-symbols-outlined">download</span>
               Descargar Tarifario (PDF)
             </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CATEGORIES ═══════════════════ */}
      <section className="py-32 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {priceCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 fade-in group">
                <div className="p-8 bg-white border-b border-slate-100">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{category.title}</h3>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{category.desc}</p>
                </div>
                <ul className="p-8 space-y-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-slate-800 text-lg">{item.name}</span>
                        <span className="font-black text-primary text-xl">${item.price}</span>
                      </div>
                      {item.tag && (
                        <span className="text-[10px] font-black uppercase text-muted tracking-widest bg-slate-200 w-fit px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="px-8 py-6 bg-slate-100/50">
                   <Link to="/contacto" className="text-xs font-black uppercase tracking-widest text-primary hover:gap-4 flex items-center gap-2 group-hover:gap-3 transition-all">
                     Consultar por este servicio
                     <span className="material-symbols-outlined text-base">arrow_forward</span>
                   </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════ HELP CARD ═══════════════════ */}
          <div className="mt-24 rounded-[3rem] bg-gradient-to-br from-primary to-primary-dark p-16 text-white relative overflow-hidden fade-in">
             <div className="absolute right-0 top-0 -mr-20 -mt-20 size-80 bg-white/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 opacity-70">Soporte Técnico</span>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">¿Alguna duda sobre un caso específico?</h2>
                <p className="text-xl text-primary-light max-w-2xl mb-12 font-medium">
                   Nuestro equipo de especialistas le ayudará a elegir el material y flujo de trabajo idóneo para su paciente.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                   <a href="https://wa.me/570000000000" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl">
                     Hablar con un Especialista
                   </a>
                   <a href="mailto:lab@cpsmile.com" className="bg-primary-dark/30 border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-primary-dark/50 transition-all">
                     Enviar Archivos .STL
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicios;
