import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <AppHeader />
      <main className="flex-grow">{children}</main>
      <AppFooter />
    </div>
  );
}