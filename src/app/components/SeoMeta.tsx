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
    const domain = 'vanilla.hrsmg.com';
    const baseUrl = `https://${domain}`;
    const canonical = `${baseUrl}${pathname}`;
    const ogImage = 'https://images.unsplash.com/photo-1512372388054-a322888e67a6?auto=format&fit=crop&w=1200&q=80';

    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: `${t.home.heroTitle} | PREMIUM MADAGASCAR VANILLA EXPORTATION`,
        description: `${t.home.heroSubtitle} Direct Madagascar bean exportation with guaranteed high quality.`,
      },
      '/about': {
        title: `${t.about.title} | MALAGASY VANILLA EXPORT EXPERTISE`,
        description: `${t.about.subtitle}. Professional Madagascar vanilla beans exportation with focus on certification and quality.`,
      },
      '/process': {
        title: `${t.process.title} | TRADITIONAL VANILLA QUALITY PROCESS`,
        description: `${t.process.subtitle}. Authentic Madagascar process from curing to vacuum packaging for international exportation.`,
      },
      '/products': {
        title: `${t.products.title} | GRADE A/B/C VANILLA BEANS EXPORT`,
        description: `${t.products.subtitle}. Buy premium Madagascar beans, powder, and seeds for global exportation. Best prices for quality vanilla.`,
      },
      '/why-choose-us': {
        title: `${t.whyChooseUs.title} | RELIABLE VANILLA QUALITY SUPPLIER`,
        description: `${t.whyChooseUs.subtitle}. Why we are the preferred partner for Madagascar vanilla exportation and high quality worldwide.`,
      },
      '/contact': {
        title: `${t.contact.title} | MADAGASCAR VANILLA CONTACT & EXPORT`,
        description: `${t.contact.subtitle}. Reach out to our Madagascar office for wholesale vanilla exportation and quality samples.`,
      },
    };

    const fallback = {
      title: 'HRS VANILLA | PREMIUM MADAGASCAR VANILLA EXPORT & QUALITY',
      description: 'Expert Madagascar vanilla exportation service providing high-quality pods, powder, and seeds globally.',
    };

    const { title, description } = pages[pathname] ?? fallback;

    document.documentElement.lang = language;
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', 'vanilla, madagascar, exportation, quality, bourbon vanilla, vanilla beans, wholesale vanilla, grade A vanilla, vanilla seeds');
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'HRS Vanilla Madagascar');
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
      '@type': 'ProfessionalService',
      name: 'HRS Vanilla Madagascar',
      url: baseUrl,
      email: 'soloniaina@hrsmg.com',
      telephone: '+261332060213',
      logo: `${baseUrl}/logo.png`,
      image: ogImage,
      description: fallback.description,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'SAVA',
        addressCountry: 'MG',
      },
      areaServed: 'Worldwide',
      serviceType: 'Vanilla Exportation and Quality Control',
      currenciesAccepted: 'USD, EUR',
      openingHours: 'Mo,Tu,We,Th,Fr 08:00-17:00',
      priceRange: '$$$',
      keywords: ['vanilla', 'madagascar', 'exportation', 'quality'],
    });

    setJsonLd('website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'HRS Vanilla',
      url: baseUrl,
      inLanguage: language,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/products?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }, [language, pathname, t]);

  return null;
}
