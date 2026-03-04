interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-neutral-50 rounded-lg p-8">
      <p className="text-neutral-700 italic mb-4">{quote}</p>
      <p className="text-sm text-amber-900 font-medium">{author}</p>
    </div>
  );
}
