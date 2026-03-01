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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(EMPTY_FORM);
    }, 3000);
  };

  return { formData, isSubmitted, handleChange, handleSubmit };
}
