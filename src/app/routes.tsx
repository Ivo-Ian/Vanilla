import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Process } from './pages/Process';
import { Products } from './pages/Products';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Contact } from './pages/Contact';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif text-amber-900 mb-4">404</h1>
        <p className="text-xl text-neutral-700">Page not found</p>
      </div>
    </div>
  );
}

function RootLayout() {
  return <Layout><Home /></Layout>;
}

function AboutPage() {
  return <Layout><About /></Layout>;
}

function ProcessPage() {
  return <Layout><Process /></Layout>;
}

function ProductsPage() {
  return <Layout><Products /></Layout>;
}

function WhyChooseUsPage() {
  return <Layout><WhyChooseUs /></Layout>;
}

function ContactPage() {
  return <Layout><Contact /></Layout>;
}

function NotFoundPage() {
  return <Layout><NotFound /></Layout>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/process',
    Component: ProcessPage,
  },
  {
    path: '/products',
    Component: ProductsPage,
  },
  {
    path: '/why-choose-us',
    Component: WhyChooseUsPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
