import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-accent-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-primary-400 font-bold tracking-widest uppercase text-sm mb-4">Bienvenidos a C&P Smile</span>
          <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            Ciencia & Arte <br />
            <span className="text-primary-600">Dental</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Un ecosistema integral de salud dental: Clínica de alta gama, Laboratorio de prótesis y Educación continua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/clinica" className="bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Ver Clínica
            </a>
            <a href="/laboratorio" className="bg-white text-accent-navy px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Ver Laboratorio
            </a>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-accent-navy uppercase">Nuestras Unidades</h2>
            <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinic */}
            <div className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary-600/30 transition-all hover:shadow-2xl">
              <span className="material-symbols-outlined text-5xl text-primary-600 mb-6 group-hover:scale-110 transition-transform inline-block">medical_services</span>
              <h3 className="text-2xl font-black text-accent-navy mb-4 uppercase">Smile Clinic</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">Atención clínica especializada para adultos y extranjeros. Expertos en implantes y estética.</p>
              <a href="/clinica" className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm">
                Saber más <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Lab */}
            <div className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary-600/30 transition-all hover:shadow-2xl">
              <span className="material-symbols-outlined text-5xl text-primary-600 mb-6 group-hover:scale-110 transition-transform inline-block">precision_manufacturing</span>
              <h3 className="text-2xl font-black text-accent-navy mb-4 uppercase">Smile Lab</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">Prótesis de alta precisión fabricadas con tecnología 3D. Rapidez y calidad académica.</p>
              <a href="/laboratorio" className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm">
                Saber más <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Education */}
            <div className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary-600/30 transition-all hover:shadow-2xl">
              <span className="material-symbols-outlined text-5xl text-primary-600 mb-6 group-hover:scale-110 transition-transform inline-block">school</span>
              <h3 className="text-2xl font-black text-accent-navy mb-4 uppercase">Smile Academy</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">Formación continua y perfeccionamiento para profesionales del sector dental.</p>
              <a href="/educacion" className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm">
                Muy pronto <span className="material-symbols-outlined">update</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
