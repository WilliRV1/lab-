import React from 'react';

const Clinic = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600 ring-1 ring-inset ring-primary-600/20 mb-6">
                C&P Smile Clinic
              </span>
              <h1 className="text-4xl font-black tracking-tight text-accent-navy sm:text-6xl mb-6 uppercase">
                Odontología <span className="text-primary-600 italic">Rigurosa & Humana</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg">
                Atención odontológica de alta gama dirigida por docentes universitarios. Especialistas en rehabilitación, estética e implantología.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/yournumber" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
                  Agendar Valoración <span className="material-symbols-outlined">calendar_month</span>
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="aspect-w-5 aspect-h-3 rounded-3xl bg-slate-100 overflow-hidden shadow-2xl border border-slate-200">
                <div className="flex items-center justify-center h-full text-slate-400">
                  <span className="material-symbols-outlined text-9xl">dentistry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-accent-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Horarios de Clínica</h2>
            <p className="text-slate-400">Atención personalizada con el Dr. John Freddy Prada</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-primary-600 font-bold mb-2">Martes</h3>
              <p className="text-2xl font-black">1:00 PM - 6:00 PM</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-primary-600 font-bold mb-2">Viernes</h3>
              <p className="text-2xl font-black">7:00 AM - 12:00 PM</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-primary-600 font-bold mb-2">Sábado</h3>
              <p className="text-2xl font-black">7:00 AM - 6:00 PM</p>
            </div>
          </div>
          <p className="text-center mt-12 text-slate-400 text-sm">
            * Otros horarios disponibles mediante coordinación previa para urgencias.
          </p>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-slate-400">person</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-accent-navy mb-4">Dr. John Freddy Prada</h2>
              <p className="text-primary-600 font-bold mb-6">Odontólogo, Abogado & Magister en Derecho Médico</p>
              <div className="space-y-4 text-slate-600 text-sm">
                <p>• Más de 16 años de ejercicio profesional ininterrumpido.</p>
                <p>• Docente universitario en la Universidad del Valle y Universidad de Santiago.</p>
                <p>• Especialista en estética dental e implantología con enfoque basado en evidencia científica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clinic;
