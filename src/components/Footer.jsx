import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-cp-smile-lab.svg" alt="C&P Smile Lab Logo" className="h-10 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Líderes en prótesis dentales con certificación académica. Excelencia técnica y tecnología 3D de vanguardia.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Navegación</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link className="hover:text-primary transition-colors" to="/">Inicio</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/servicios">Servicios</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/proceso">El Proceso</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/logistica">Logística</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contacto</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-muted text-xl">location_on</span>
                <span>Cl. 52 Nte. #2 DN 05,<br/>La Merced, Cali</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-muted text-xl">call</span>
                <span>+57 310 637 2455</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Horarios</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between"><span>Lun - Vie:</span> <span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span>8:00 AM - 1:00 PM</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span className="text-primary font-bold">Cerrado</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} C&P Smile Laboratory. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest" href="https://cypsmile.online" target="_blank" rel="noopener noreferrer">Clínica Dental</a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a href="https://wa.me/573106372455" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined">chat_bubble</span>
      </a>
    </footer>
  );
};

export default Footer;
