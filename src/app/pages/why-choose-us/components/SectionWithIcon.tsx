import { type LucideIcon } from 'lucide-react';

interface SectionWithIconProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function SectionWithIcon({ icon: Icon, title, children }: SectionWithIconProps) {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
          <Icon className="text-amber-900" size={32} />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-serif text-amber-900 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
