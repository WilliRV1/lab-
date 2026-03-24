import React, { useEffect } from 'react';

const Logistica = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <span className="section-label">Flujo de Trabajo</span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Logística & <span className="text-primary">Entregas</span></h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Hemos optimizado cada paso para que el tiempo sea su mejor aliado. Eficiencia digital sin fronteras físicas.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm fade-in">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 text-3xl">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Vía Digital (STL)</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                El flujo más rápido. Envíe sus escaneos directamente a nuestro servidor o por correo electrónico. Ideal para casos que requieren la promesa de 24 horas.
              </p>
              <ul className="space-y-4 text-sm font-bold text-slate-700">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Notificación inmediata</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Recepción 24/7</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Ahorro en Logística</li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm fade-in">
              <div className="size-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 text-3xl">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Recogida Física</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Para impresiones análogas, contamos con servicio de mensajería especializado. Solicite su recogida y nosotros nos encargamos del resto.
              </p>
              <ul className="space-y-4 text-sm font-bold text-slate-700">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">schedule</span> Reporte de recogida</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">package_2</span> Embalaje protector</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">location_on</span> Cobertura en toda el área</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center fade-in">
            <h2 className="text-3xl font-black uppercase mb-12">Nuestros Tiempos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-primary text-4xl font-black block mb-2">24h</span>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Zirconio & PMMA</p>
               </div>
               <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-primary text-4xl font-black block mb-2">48h</span>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Cerámica Inyectada</p>
               </div>
               <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-primary text-4xl font-black block mb-2">+72h</span>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Casos Complejos</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Logistica;
