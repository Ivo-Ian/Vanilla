import { Flower, Sun, Droplets, Wind, Package, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Process() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672594429262-ceda365f82c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwZmxvd2VyJTIwb3JjaGlkfGVufDF8fHx8MTc3MjI4MzM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vanilla orchid flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Our Vanilla Process
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            From orchid to premium vanilla bean: a journey of craftsmanship and care
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Creating premium vanilla is an art form that requires patience, expertise, 
            and dedication. The process takes nearly a year from flower to finished 
            bean, and every step is crucial to developing the complex flavors and 
            aromas that make Madagascar vanilla exceptional.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <Flower size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 1</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Hand Pollination
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Vanilla orchids bloom for just one day each year. During this 
                      brief window, skilled farmers hand-pollinate each flower using 
                      a small wooden stick or bamboo needle. This delicate process 
                      must be done before noon, when the flowers are most receptive. 
                      It's labor-intensive but essential—without hand pollination, 
                      vanilla pods won't form.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672594429262-ceda365f82c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwZmxvd2VyJTIwb3JjaGlkfGVufDF8fHx8MTc3MjI4MzM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vanilla orchid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674653495432-732d7328fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhhcnZlc3RpbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzIyODMzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Harvesting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <Package size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 2</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Harvesting
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      After 8-9 months of growth, the green vanilla pods are ready 
                      to harvest. Timing is critical—pods must be picked when they've 
                      reached full maturity but before they split open. Experienced 
                      farmers carefully inspect each pod, selecting only those that 
                      meet size and quality standards. The pods are still green and 
                      have no aroma at this stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <Droplets size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 3</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Sweating & Blanching
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      The curing process begins with blanching—briefly immersing the 
                      pods in hot water (65°C) to halt growth and initiate enzymatic 
                      reactions. The pods are then "sweated" by wrapping them in 
                      blankets and storing them in wooden boxes. This sweating process 
                      lasts 12-24 hours and begins to develop the vanilla's 
                      characteristic brown color and aroma.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762380832403-ca2c91505e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnlpbmclMjB2YW5pbGxhJTIwYmVhbnMlMjBwcm9jZXNzfGVufDF8fHx8MTc3MjI4MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vanilla processing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512372388054-a322888e67a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdmFuaWxsYSUyMGJlYW5zJTIwcG9kc3xlbnwxfHx8fDE3NzIyODMzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vanilla beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <Sun size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 4</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Sun Drying
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Over the next 2-3 weeks, the pods are sun-dried daily. Each 
                      morning, farmers spread the beans on large racks or mats to 
                      absorb sunlight for several hours. In the afternoon, they're 
                      wrapped back up. This alternating pattern of exposure and 
                      insulation continues to develop flavor while reducing moisture 
                      content gradually.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <Wind size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 5</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Slow Drying & Conditioning
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      After sun drying, the beans enter a slower drying phase in 
                      shaded, well-ventilated areas for several more weeks. This is 
                      followed by conditioning, where beans are stored in closed 
                      containers for 1-2 months. During this time, the moisture 
                      redistributes evenly throughout the pods, and the complex vanilla 
                      flavor profile fully develops.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697546312799-e46bcbd73ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmb29kJTIwc3BpY2VzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIyODMzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spices and vanilla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg bg-amber-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="mx-auto text-amber-900 mb-4" size={64} />
                  <h4 className="text-2xl font-serif text-amber-900">Quality Inspection</h4>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center">
                      <CheckCircle size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 mb-2">Step 6</div>
                    <h3 className="text-2xl font-serif text-amber-900 mb-4">
                      Sorting & Grading
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Once fully cured, each bean is carefully inspected and graded. 
                      We sort by length, moisture content, appearance, flexibility, 
                      and aroma. Only beans that meet our strict standards are 
                      selected for export. Grade A beans are plump, oily, aromatic, 
                      and perfect for gourmet use. This final quality control ensures 
                      you receive only the finest Madagascar vanilla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">
            The Result: Premium Madagascar Vanilla
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            After 9-12 months of meticulous care, the result is a vanilla bean with 
            unparalleled depth of flavor, rich aroma, and the perfect balance of 
            sweetness and complexity. This is the vanilla that makes dishes 
            extraordinary—and it's what we're proud to deliver to you.
          </p>
        </div>
      </section>
    </div>
  );
}
