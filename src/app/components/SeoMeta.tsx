import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object) {
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SeoMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const canonical = `${baseUrl}${pathname}`;
    const ogImage = 'https://images.unsplash.com/photo-1512372388054-a322888e67a6?auto=format&fit=crop&w=1200&q=80';

    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: `${t.home.heroTitle} | Madagascar Vanilla Exportation`,
        description: `${t.home.heroSubtitle} Premium vanilla from Madagascar with strict quality standards.`,
      },
      '/about': {
        title: `${t.about.title} | Vanilla Quality from Madagascar`,
        description: `${t.about.subtitle}. Trusted vanilla exportation partner focused on quality.`,
      },
      '/process': {
        title: `${t.process.title} | Vanilla Quality Process`,
        description: `${t.process.subtitle}. Traditional process for export-ready quality vanilla.`,
      },
      '/products': {
        title: `${t.products.title} | Madagascar Vanilla Exportation`,
        description: `${t.products.subtitle}. Vanilla beans, powder, and seeds with FOB references and consistent quality.`,
      },
      '/why-choose-us': {
        title: `${t.whyChooseUs.title} | Quality Vanilla Supplier`,
        description: `${t.whyChooseUs.subtitle}. Reliable Madagascar vanilla exportation and quality control.`,
      },
      '/contact': {
        title: `${t.contact.title} | Vanilla Exportation Contact`,
        description: `${t.contact.subtitle}. Contact us for Madagascar vanilla exportation and quality supply.`,
      },
    };

    const fallback = {
      title: 'Madagascar Vanilla Co. | Vanilla Exportation & Quality',
      description: 'Premium vanilla from Madagascar for exportation with consistent quality standards.',
    };

    const { title, description } = pages[pathname] ?? fallback;

    document.documentElement.lang = language;
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', 'vanilla, madagascar, exportation, quality, bourbon vanilla, vanilla beans');
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'Madagascar Vanilla Co.');
    setMeta('property', 'og:locale', language === 'fr' ? 'fr_FR' : language === 'mg' ? 'mg_MG' : 'en_US');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    setLink('canonical', canonical);
    setLink('alternate', `${baseUrl}${pathname}`, 'en');
    setLink('alternate', `${baseUrl}${pathname}`, 'fr');
    setLink('alternate', `${baseUrl}${pathname}`, 'mg');
    setLink('alternate', `${baseUrl}${pathname}`, 'x-default');

    setJsonLd('org-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Madagascar Vanilla Co.',
      url: baseUrl,
      email: 'hrstrans@yahoo.fr',
      telephone: '+261332060213',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'SAVA',
        addressCountry: 'MG',
      },
      areaServed: 'Worldwide',
      keywords: ['vanilla', 'madagascar', 'exportation', 'quality'],
    });

    setJsonLd('website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Madagascar Vanilla Co.',
      url: baseUrl,
      inLanguage: language,
    });
  }, [language, pathname, t]);

  return null;
}
