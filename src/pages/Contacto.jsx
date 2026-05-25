import React, { useEffect } from 'react';

const Contacto = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in">
              <span className="section-label">Canales Directos</span>
              <h1 className="text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Hablemos de su <span className="text-primary">Próximo Caso</span></h1>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                Estamos listos para integrar su flujo digital a nuestra excelencia académica. Contáctenos para dudas técnicas o solicitudes de recogida.
              </p>
              
              <div className="space-y-8">
                <a href="https://wa.me/573106372455" className="flex items-center gap-6 group">
                  <div className="size-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">WhatsApp Business</h3>
                    <p className="text-xl font-bold text-slate-600">+57 310 637 2455</p>
                  </div>
                </a>
                <a href="mailto:lab@cpsmile.com" className="flex items-center gap-6 group">
                   <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">alternate_email</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Correo Institucional</h3>
                    <p className="text-xl font-bold text-slate-600">lab@cpsmile.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm fade-in mt-16 lg:mt-0">
               <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight text-center">Formulario de Solicitud</h2>
               <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block ml-1">Nombre</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300" placeholder="Dr. John Doe" />
                    </div>
                    <div className="col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block ml-1">Clínica</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300" placeholder="Nombre de Clínica" />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block ml-1">Correo Electrónico</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300" placeholder="doctor@clinica.com" />
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block ml-1">Asunto</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none text-slate-600">
                       <option>Solicitud de Recogida</option>
                       <option>Duda Técnica sobre Materiales</option>
                       <option>Información sobre Tarifas</option>
                       <option>Otro</option>
                    </select>
                 </div>
                 <button type="submit" className="btn-primary w-full py-5 text-lg shadow-primary/20">
                   Enviar Solicitud
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
