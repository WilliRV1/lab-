import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Laboratory = () => {
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

  return (
    <main>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40 bg-white">
        {/* Abstract background elements for premium feel */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-10 fade-in">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-50 border border-slate-100 px-5 py-2 text-slate-600 font-bold text-xs uppercase tracking-[0.2em] w-fit shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Alianza Tecnológica Leaf Dental
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
                Un futuro con <br/>
                <span className="text-primary">restauraciones</span> digitales
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Precisión digital milimétrica bajo nuestra alianza tecnológica con Leaf Dental. Combinamos rigor académico, maquinaria de última generación y entregas en 24 horas para soluciones definitivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/servicios" className="btn-primary px-10 py-5 text-lg group">
                  Empezar un caso
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <a href="#contacto" className="btn-secondary px-10 py-5 text-lg">
                  Agendar Recogida
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-200 shadow-sm overflow-hidden">
                       <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">CP</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-semibold">
                  +100 Clínicas aliadas en Cali
                </p>
              </div>
            </div>
            
            <div className="mt-20 lg:mt-0 lg:col-span-5 relative fade-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-15 rounded-[2.5rem] blur-2xl group-hover:opacity-25 transition-opacity duration-500"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-gradient-to-br from-slate-50 to-white flex flex-col items-center justify-center p-8">
                  <div className="flex items-center justify-center gap-6 w-full max-w-sm mb-12">
                    <div className="flex-1 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 h-24">
                      <img
                        src="/logo-cp-smile-lab.svg"
                        alt="Logo C&P Smile Lab"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="material-symbols-outlined text-primary/40 text-3xl font-black">handshake</span>
                    <div className="flex-1 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 h-24">
                      <img
                        src="/logo-leaf-dental.png"
                        alt="Logo Leaf Dental"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  {/* Premium overlay text box at the bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900 backdrop-blur-md rounded-xl p-4 border border-slate-800 shadow-lg">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-0.5">Alianza Estratégica</p>
                    <p className="text-xs font-bold text-white leading-normal">
                      C&P Smile Laboratory & Leaf Dental: Maquinaria digital de alta precisión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUE STRIP ═══════════════════ */}
      <section className="bg-slate-900 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white/80">
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-3xl font-black text-white">100%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Garantía Digital</span>
               </div>
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-3xl font-black text-white">2k+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Casos Exitosos</span>
               </div>
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-3xl font-black text-white">Cali</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Cobertura Local</span>
               </div>
               <div className="flex flex-col gap-1 items-center">
                  <span className="text-3xl font-black text-white">3D</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Tech Lead</span>
               </div>
            </div>
         </div>
      </section>

      {/* ═══════════════════ ALIANZA ESTRATÉGICA & MAQUINARIA DE CALIDAD ═══════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 fade-in">
              <span className="section-label">Alianza Exclusiva</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase mb-6">
                C&P Smile <br/>
                <span className="text-primary italic">& Leaf Dental</span>
              </h2>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  En <span className="font-bold text-slate-900">C&P Smile Laboratory</span>, nos asociamos con los mejores. Nuestra alianza estratégica con <span className="font-bold text-slate-900">Leaf Dental</span> nos permite equipar nuestro laboratorio con tecnología digital de punta a nivel global.
                </p>
                <p className="text-base text-slate-500">
                  Gracias a esta sinergia, importamos y adaptamos directamente sistemas CAD/CAM y equipos de sinterizado/impresión dental de máxima gama. Esto garantiza a odontólogos y pacientes piezas de precisión milimétrica y una durabilidad insuperable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Maquinaria de Alta Gama</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Fresadoras de 5 ejes Roland y sistemas de sinterizado SEED de última generación para una exactitud sin precedentes.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="size-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Insumos Certificados</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Utilizamos exclusivamente bloques de zirconio y disilicatos premium respaldados directamente por la red Leaf Dental.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="size-12 bg-slate-900/10 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Garantía Directa</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  El soporte técnico y la calibración constante de los equipos por parte de Leaf Dental aseguran la regularidad perfecta en cada restauración.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="size-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Eficiencia Extrema</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Flujos de trabajo 100% integrados que nos permiten entregar prótesis sobre implantes y coronas unitarias en tiempo récord de 24 horas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED SERVICES ═══════════════════ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 fade-in">
            <div className="max-w-xl">
              <span className="section-label">Lo que hacemos</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Soluciones Protésicas de <span className="text-primary italic">Vanguardia</span></h2>
            </div>
            <Link to="/servicios" className="btn-secondary group">
              Explorar todo el portafolio
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-all">chevron_right</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "ZirconioLine", desc: "Zirconio translúcido fresado con tecnología alemana para máxima resistencia y estética.", color: "primary", icon: "diamond" },
              { title: "CeramicaLine", desc: "Disilicatos inyectados y carillas ultradelgadas con caracterización artesanal superior.", color: "accent", icon: "brush" },
              { title: "3D Digital Line", desc: "Escaneos intraorales, modelos 3D y guías quirúrgicas integradas en flujo digital.", color: "slate-900", icon: "view_in_ar" }
            ].map((s, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group fade-in">
                <div className={`size-20 rounded-2xl bg-${s.color}/10 flex items-center justify-center text-${s.color} mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                <Link to="/servicios" className="inline-flex items-center text-primary font-black uppercase text-xs tracking-widest hover:gap-3 transition-all">
                  Detalles y Precios
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TECNOLOGÍA & EQUIPAMIENTO ═══════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in">
            <span className="section-label">Infraestructura Digital</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Tecnología de <span className="text-primary italic">Vanguardia</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
              Equipados con las máquinas más avanzadas del mercado dental digital. Cada pieza sale de un flujo completamente controlado, del diseño a la entrega.
            </p>
          </div>

          {/* Hero machine — Roland 52Di */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://dgshape.com/wp-content/uploads/it/2025/03/DWX-52Di-Plus_photo_front_w_zirconia_dgs_wo_background-scaled-e1741275233621.webp"
                alt="Roland DGShape DWX-52Di Plus"
                className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                #1 Vendida a Nivel Mundial
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted mb-3">Fresado en Seco — 5 Ejes</p>
              <h3 className="text-4xl font-black text-slate-900 mb-4">Roland DGShape<br/><span className="text-primary">52Di Plus</span></h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                La fresadora dental con más unidades vendidas a nivel mundial y estándar de calidad en fresado dental. Fresado en seco con arco en C para máxima precisión en zirconio, PMMA, ceras y resinas.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "diamond", label: "Zirconio Multicapa" },
                  { icon: "emergency", label: "PMMA & Resinas" },
                  { icon: "auto_awesome", label: "Software Millbox" },
                  { icon: "grain", label: "Fresas 0.6 / 1.0 / 2.0mm" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                    <span className="material-symbols-outlined text-primary text-xl">{f.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resto del equipamiento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {[
              {
                icon: "local_fire_department",
                img: "https://cdn.prod.website-files.com/63935d3193cd21c8044dfcc5/6751e6be5ef7b4b3ef498d25_Seed-Fire-P9-02.jpg",
                name: "SEED Fire S9",
                category: "Horno de Sinterización",
                desc: "Sinterización rápida de última generación. 1 corona en 1.5h, puente de 3 unidades en 3h, arcada completa en 8h.",
                tags: ["Zirconio", "Alta Temperatura"],
                color: "orange",
              },
              {
                icon: "compress",
                img: "https://www.ivoclar.com/cache-buster-1/GLOBAL%20-%20MEDIA/Products/Equipment/Programat%20Press%20furnaces/94582/image-thumb__94582__cms_image/Programat-EP5010_0423_1920x1220px.5ec1fca2.jpg",
                name: "SEED Press 2",
                category: "Horno de Prensado",
                desc: "Prensado de disilicato de litio con bomba de vacío integrada. Resultados con máxima naturalidad y translucidez.",
                tags: ["Disilicato de Litio", "Vacío"],
                color: "primary",
              },
              {
                icon: "view_in_ar",
                img: "https://cdn.prod.website-files.com/63935d3193cd21c8044dfcc5/66fca1f6568f426dd1dc65c9_Seed-Print-2-Plus-16.jpg",
                name: "SEED Print 2+",
                category: "Impresión 3D",
                desc: "Impresora 3D de resinas de alta precisión (14K). Modelos, provisionales y guías quirúrgicas con detalle micrométrico.",
                tags: ["Resinas", "14K"],
                color: "accent",
              },
              {
                icon: "air",
                img: "https://www.donaldsonbofa.com/wp-content/uploads/2024/08/Donaldson-BOFA-dust-extractor-DentalPRO-Universal.jpg",
                name: "Sistema BOFA",
                category: "Aspiración Industrial",
                desc: "Sistema de aspiración original con filtro HEPA, tecnología de flujo de aire inverso (RFA) y sensor de dióxido de nitrógeno.",
                tags: ["HEPA", "SureCHECK"],
                color: "primary",
              },
              {
                icon: "wb_sunny",
                img: "https://cdn.prod.website-files.com/5f91f939a305ed77435fc110/651459e2de44f8ee1dfecf15_SeedPrint%20Power%20Cure.jpg",
                name: "Seed Print Power Cure",
                category: "Postcurado Profundo",
                desc: "Lámpara de postcurado profundo y estación Wash & Cure para acabado y polimerización total de impresiones 3D.",
                tags: ["Wash & Cure", "UV"],
                color: "orange",
              },
              {
                icon: "display_settings",
                img: "https://articon.com/wp-content/uploads/2018/06/articon-millBox-make-mill-1.jpg",
                name: "Software Millbox",
                category: "CAD/CAM Digital",
                desc: "Software de diseño y anidado CAD/CAM dental. Compatible con upgrade a Millbox Advance para flujos más complejos.",
                tags: ["CAD/CAM", "STL / PLY"],
                color: "accent",
              },
            ].map((m, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group fade-in">
                {m.img ? (
                  <div className="h-44 overflow-hidden bg-white border-b border-slate-100 flex items-center justify-center p-4">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : null}
                <div className="p-8">
                  {!m.img && (
                    <div className={`size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="material-symbols-outlined text-3xl">{m.icon}</span>
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted mb-1">{m.category}</p>
                  <h4 className="text-xl font-black text-slate-900 mb-3">{m.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t, j) => (
                      <span key={j} className="text-[10px] bg-primary/10 text-primary font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ NUESTRO EQUIPO ═══════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <span className="section-label">Las personas detrás del trabajo</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Nuestro <span className="text-primary italic">Equipo</span></h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto mt-4">Técnicas especializadas con pasión por la precisión y la estética dental de alta calidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto fade-in">
            {/* Chica 1 */}
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <img
                  src="/equipo/foto1.jpeg"
                  alt="Alison Armero - Técnica de Laboratorio Dental"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-1">Alison Armero</h3>
                <p className="text-primary font-bold text-sm">Técnica de Laboratorio Dental</p>
              </div>
            </div>
            {/* Chica 2 */}
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <img
                  src="/equipo/foto2.jpeg"
                  alt="Yuliana Quiñonez - Técnica de Laboratorio Dental"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-1">Yuliana Quiñonez</h3>
                <p className="text-primary font-bold text-sm">Técnica de Laboratorio Dental</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section id="contacto" className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in">
           <div className="size-24 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-primary/40">
             <span className="material-symbols-outlined text-4xl">rocket_launch</span>
           </div>
           <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase">Eleve el estándar de su consulta</h2>
           <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
             Sea parte de la red de especialistas que confían su flujo digital a C&P Lab. Calidad académica, eficiencia digital.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="https://wa.me/573106372455" className="btn-primary py-6 flex flex-col gap-1 group shadow-primary/20">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">chat_bubble</span>
                <span className="uppercase text-[10px] tracking-widest font-bold">WhatsApp Business</span>
              </a>
              <a href="mailto:lab@cpsmile.com" className="btn-secondary py-6 flex flex-col gap-1 group">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">mail</span>
                <span className="uppercase text-[10px] tracking-widest font-bold">Enviar Orden Digital</span>
              </a>
              <div className="bg-slate-50 border border-slate-100 rounded-xl py-6 flex flex-col gap-1 items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-2xl text-primary">local_shipping</span>
                <span className="uppercase text-[10px] tracking-widest font-bold text-slate-500">Recogida Gratuita</span>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Laboratory;
