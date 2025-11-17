import React from 'react';
import { SectionId, WeddingPackage } from '../types';
import { Check } from 'lucide-react';

const packages: WeddingPackage[] = [
  {
    id: 'elopement',
    title: 'Intimate Elopement',
    price: '$4,500',
    guests: 'Up to 10 Guests',
    image: 'https://picsum.photos/seed/elope/600/400',
    features: [
      'Private Beach Ceremony',
      'Officiant & Legal Services',
      'Bridal Bouquet & Boutonniere',
      'Romantic Dinner for Two',
      '1 Night in Honeymoon Suite'
    ]
  },
  {
    id: 'classic',
    title: 'Classic Coastline',
    price: '$12,000',
    guests: 'Up to 50 Guests',
    image: 'https://picsum.photos/seed/classic/600/400',
    features: [
      'Ceremony & Reception Venue',
      '3-Course Plated Dinner',
      '3 Hours Open Bar',
      'Floral Arch & Aisle Decor',
      'Professional Photography (4 Hrs)'
    ]
  },
  {
    id: 'grand',
    title: 'Grand Gala',
    price: '$25,000+',
    guests: 'Up to 150 Guests',
    image: 'https://picsum.photos/seed/grand/600/400',
    features: [
      'Exclusive Venue Buyout',
      'Gourmet Buffet or 5-Course Meal',
      'Full Premium Open Bar',
      'Live Band & DJ Services',
      'Fireworks Display'
    ]
  }
];

const Packages: React.FC = () => {
  return (
    <section id={SectionId.PACKAGES} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-sand-600 uppercase tracking-widest text-sm font-bold">Curated Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-slate-900">Wedding Packages</h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Choose from our carefully designed packages, or let us create a bespoke experience just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group bg-sand-50 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-900">
                  {pkg.guests}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-slate-900 mb-2">{pkg.title}</h3>
                <div className="text-3xl text-sand-600 font-serif mb-6">{pkg.price}</div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-sand-500 mr-2 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 border border-slate-900 text-slate-900 uppercase tracking-widest text-xs font-bold hover:bg-slate-900 hover:text-white transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;