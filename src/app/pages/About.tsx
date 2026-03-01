import { Users, Heart, Award, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695236013915-2636f16aa938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwbGFuZHNjYXBlJTIwZmFybWVyc3xlbnwxfHx8fDE3NzIyODMzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Madagascar landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Connecting Madagascar's finest vanilla farmers with the world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  Madagascar Vanilla Co. was founded on a simple belief: the world's 
                  finest vanilla deserves to be sourced with integrity, respect, and 
                  a commitment to excellence.
                </p>
                <p>
                  We work directly with local farmers across Madagascar, building 
                  long-term relationships based on trust and mutual success. By 
                  cutting out middlemen, we ensure farmers receive fair compensation 
                  while delivering unmatched quality to our clients.
                </p>
                <p>
                  Every vanilla bean we export tells a story of dedication—from the 
                  careful hand-pollination of vanilla orchids to the meticulous 
                  months-long curing process. We're proud to share Madagascar's 
                  vanilla legacy with businesses and chefs around the world.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674653495432-732d7328fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhhcnZlc3RpbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzIyODMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hands harvesting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Ethical Sourcing</h3>
              <p className="text-neutral-600">
                Fair partnerships with farmers, ensuring sustainable livelihoods 
                and community growth.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Award className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Premium Quality</h3>
              <p className="text-neutral-600">
                Rigorous quality control at every stage, from harvest to export.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Handshake className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Long-Term Partnerships</h3>
              <p className="text-neutral-600">
                Building lasting relationships with farmers and clients based on 
                trust and reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Users className="text-amber-900" size={32} />
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Community Focus</h3>
              <p className="text-neutral-600">
                Supporting local communities and preserving Madagascar's vanilla-growing 
                traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Madagascar Origin */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
              Why Madagascar?
            </h2>
            <div className="text-lg text-neutral-700 space-y-4">
              <p>
                Madagascar is home to the world's most sought-after vanilla. The 
                island's unique terroir—combining tropical climate, rich volcanic 
                soil, and traditional growing methods—produces vanilla beans with 
                exceptional flavor complexity and aromatic intensity.
              </p>
              <p>
                The Bourbon vanilla variety grown in Madagascar is renowned for its 
                sweet, creamy flavor profile with notes of caramel and chocolate. 
                This is the gold standard that chefs, pastry makers, and food 
                manufacturers seek for their premium products.
              </p>
              <p>
                By partnering with us, you're not just getting vanilla—you're 
                getting a piece of Madagascar's rich agricultural heritage and the 
                expertise of generations of vanilla growers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
