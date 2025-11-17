import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="relative py-24 bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/nightbeach/1920/1080')] bg-cover bg-center"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Begin Your Journey</h2>
        <p className="text-slate-300 mb-12 font-light text-lg">
          Dates for 2025 are filling quickly. Contact our team to schedule a private consultation.
        </p>

        <form className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-left text-xs uppercase tracking-widest mb-2 text-sand-200">Names</label>
              <input type="text" placeholder="You & Your Partner" className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all" />
            </div>
            <div>
              <label className="block text-left text-xs uppercase tracking-widest mb-2 text-sand-200">Email</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
              <label className="block text-left text-xs uppercase tracking-widest mb-2 text-sand-200">Proposed Date</label>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all" />
            </div>
             <div>
              <label className="block text-left text-xs uppercase tracking-widest mb-2 text-sand-200">Guest Count</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all">
                  <option className="text-slate-900">Just the two of us</option>
                  <option className="text-slate-900">10 - 30 Guests</option>
                  <option className="text-slate-900">30 - 80 Guests</option>
                  <option className="text-slate-900">80 - 150 Guests</option>
                  <option className="text-slate-900">150+ Guests</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-left text-xs uppercase tracking-widest mb-2 text-sand-200">Message</label>
            <textarea rows={4} placeholder="Tell us about your dream wedding..." className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all"></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-sand-600 hover:bg-sand-500 text-white uppercase tracking-[0.2em] text-sm font-bold rounded-sm transition-all">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;