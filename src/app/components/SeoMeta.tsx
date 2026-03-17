import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

function setJsonLd(data: object) {
  const id = 'seo-structured-data';
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function SeoMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const keywordTarget = 'vanilla, madagascar, exportation, quality';

    const pageMeta: Record<string, { title: string; description: string }> = {
      '/': { title: t.home.heroTitle, description: `${t.home.heroSubtitle} Focus: vanilla, madagascar, exportation, quality.` },
      '/about': { title: t.about.title, description: `${t.about.subtitle}. Vanilla exportation and quality from Madagascar.` },
      '/process': { title: t.process.title, description: `${t.process.subtitle}. Process built for exportation quality.` },
      '/products': { title: t.products.title, description: `${t.products.subtitle}. Madagascar vanilla exportation with consistent quality.` },
      '/why-choose-us': { title: t.whyChooseUs.title, description: `${t.whyChooseUs.subtitle}. Reliable vanilla exportation and quality.` },
      '/contact': { title: t.contact.title, description: `${t.contact.subtitle}. Contact us for vanilla exportation from Madagascar.` },
    };

    const fallback = {
      title: 'Madagascar Vanilla Co.',
      description: 'Premium vanilla from Madagascar for exportation with strict quality standards.',
    };

    const current = pageMeta[pathname] ?? fallback;
    const siteName = 'Madagascar Vanilla Co.';
    const fullTitle = `${current.title} | ${siteName}`;
    const url = `${window.location.origin}${pathname}`;
    const locale = language === 'fr' ? 'fr_FR' : language === 'mg' ? 'mg_MG' : 'en_US';

    document.documentElement.lang = language;
    document.title = fullTitle;

    setMeta('name', 'description', current.description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('name', 'keywords', `Madagascar vanilla, Bourbon vanilla, vanilla exportation, vanilla quality, ${keywordTarget}`);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', current.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', locale);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', current.description);

    setLink('canonical', url);

    setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: siteName,
          description: 'Vanilla exportation company from Madagascar focused on quality.',
          email: 'hrstrans@yahoo.fr',
          telephone: '+261332060213',
          url: window.location.origin,
          areaServed: 'Worldwide',
        },
        {
          '@type': 'WebSite',
          name: siteName,
          url: window.location.origin,
          inLanguage: language,
          keywords: keywordTarget,
        },
      ],
    });
  }, [language, pathname, t]);

  return null;
}
