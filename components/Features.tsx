import React from 'react';
import { SectionId } from '../types';
import { Sun, Wind, Utensils, Music } from 'lucide-react';

const features = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Private Beaches",
    description: "Two miles of secluded white sands dedicated solely to your celebration."
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Gourmet Dining",
    description: "Michelin-star chefs crafting bespoke menus from local catch."
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Oceanfront Villas",
    description: "Luxury accommodation for you and your guests over the water."
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Curated Entertainment",
    description: "From acoustic trios to full bands, we set the perfect mood."
  }
];

const Features: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-sand-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/seed/wedding1/400/500"
              alt="Ceremony setup"
              className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
            />
             <img
              src="https://picsum.photos/seed/wedding2/400/500"
              alt="Couple on beach"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
             <img
              src="https://picsum.photos/seed/wedding3/400/500"
              alt="Table setting"
              className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
            />
             <img
              src="https://picsum.photos/seed/wedding4/400/500"
              alt="Sunset view"
              className="w-full h-64 object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sand-600 uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-slate-900">
              Elegance in Nature's Embrace
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
              At Azure Sands, we believe your wedding should be as timeless as the ocean itself.
              Nestled in a private enclave, we offer an escape from the ordinary, where tailored
              service meets breathtaking natural beauty. We don't just host weddings; we curate experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex flex-col space-y-2">
                  <div className="text-sand-600 mb-2">{f.icon}</div>
                  <h3 className="font-serif text-xl text-slate-900">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;