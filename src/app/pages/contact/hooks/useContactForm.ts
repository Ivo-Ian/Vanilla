import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  company: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Country: ${formData.country}\n` +
      `Product: ${formData.product}\n` +
      `Quantity: ${formData.quantity}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:hrstrans@yahoo.fr?subject=${subject}&body=${body}`;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = mailtoUrl;
    document.body.appendChild(iframe);
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 100);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(EMPTY_FORM);
    }, 3000);
  };

  return { formData, isSubmitted, handleChange, handleSubmit };
}
