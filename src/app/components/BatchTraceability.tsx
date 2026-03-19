import { motion } from 'motion/react';
import { MapPin, Droplets, FlaskConical, Calendar, ScanLine } from 'lucide-react';

interface BatchData {
  batchId: string;
  harvestDate: string;
  region: string;
  moistureContent: string;
  vanillinLevel: string;
  certification: string;
}

export function BatchTraceability({ batch }: { batch: BatchData }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 my-10" itemScope itemType="https://schema.org/Product">
      {/* Hidden SEO Schema Injection */}
      <meta itemProp="name" content={`Vanilla Batch ${batch.batchId}`} />
      <meta itemProp="description" content={`Premium Madagascar Bourbon Vanilla from ${batch.region}. Moisture: ${batch.moistureContent}, Vanillin: ${batch.vanillinLevel}`} />
      
      <div className="bg-amber-900 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-serif flex items-center gap-2">
            <ScanLine size={24} className="text-amber-300" />
            Batch Traceability & Quality Control
          </h3>
          <p className="text-amber-100/80 text-sm mt-1">E-E-A-T Verified • Direct from Source</p>
        </div>
        <div className="bg-amber-800/50 px-4 py-2 rounded-lg font-mono text-sm tracking-wider border border-amber-700/50">
          LOT: {batch.batchId}
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3"
        >
          <div className="bg-amber-50 p-2 rounded-lg"><MapPin className="text-amber-700" size={20} /></div>
          <div>
            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Origin</span>
            <span className="font-medium text-neutral-800">{batch.region}, Madagascar</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex items-start gap-3"
        >
          <div className="bg-blue-50 p-2 rounded-lg"><Droplets className="text-blue-700" size={20} /></div>
          <div>
            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Moisture</span>
            <span className="font-medium text-neutral-800">{batch.moistureContent}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-start gap-3"
        >
          <div className="bg-purple-50 p-2 rounded-lg"><FlaskConical className="text-purple-700" size={20} /></div>
          <div>
            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Vanillin</span>
            <span className="font-medium text-neutral-800">{batch.vanillinLevel}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex items-start gap-3"
        >
          <div className="bg-green-50 p-2 rounded-lg"><Calendar className="text-green-700" size={20} /></div>
          <div>
            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Harvest</span>
            <span className="font-medium text-neutral-800">{batch.harvestDate}</span>
          </div>
        </motion.div>
      </div>

      <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-sm text-neutral-500 font-medium">Certification: <span className="text-green-600">{batch.certification}</span></span>
        <button className="text-amber-700 text-sm font-semibold hover:text-amber-900 transition-colors">
          View Lab Report →
        </button>
      </div>
    </div>
  );
}
