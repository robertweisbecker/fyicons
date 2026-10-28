import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';
import { ToastProvider } from './components/ui/toast';
import { TooltipProvider } from './components/ui/tooltip';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <TooltipProvider delay={350} closeDelay={100}>
        <App />
      </TooltipProvider>
    </ToastProvider>
  </StrictMode>,
);
