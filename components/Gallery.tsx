import React from 'react';
import { SectionId } from '../types';

const Gallery: React.FC = () => {
  // Using specific seeds to keep images thematic
  const images = [
    'https://picsum.photos/seed/wed1/800/600',
    'https://picsum.photos/seed/wed2/600/800',
    'https://picsum.photos/seed/wed3/800/800',
    'https://picsum.photos/seed/wed4/600/600',
    'https://picsum.photos/seed/wed5/800/600',
    'https://picsum.photos/seed/wed6/600/800',
  ];

  return (
    <section id={SectionId.GALLERY} className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-sand-600 uppercase tracking-widest text-sm font-bold">Visual Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 text-slate-900">Captured Moments</h2>
          </div>
          <a href="#" className="text-sand-800 border-b border-sand-800 pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors mt-4 md:mt-0">
            View Full Portfolio &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
                <img src={images[0]} className="rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 1" />
                <img src={images[1]} className="rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 2" />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
                <img src={images[2]} className="rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 3" />
                <div className="bg-sand-200 p-8 rounded-sm flex items-center justify-center text-center h-64">
                    <div>
                        <p className="font-serif text-2xl text-slate-800 italic">"The most magical day of our lives. Azure Sands took care of everything."</p>
                        <p className="mt-4 text-sm font-bold uppercase text-sand-600">- Sarah & James, 2024</p>
                    </div>
                </div>
            </div>
             {/* Column 3 */}
             <div className="flex flex-col gap-4">
                <img src={images[3]} className="rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 4" />
                <img src={images[4]} className="rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 5" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;