import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';
import { ToastProvider } from './components/ui/toast';
import { loadIconCategories } from './lib/catalog';

const categoryError = await loadIconCategories();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App categoryError={categoryError} />
    </ToastProvider>
  </StrictMode>,
);
