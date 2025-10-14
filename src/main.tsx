import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="0b9dc4eeaee4470884b207c29a655532"
      domain="https://islameldeep.kinde.com"
      redirectUri={
        import.meta.env.MODE === 'production'
          ? 'https://todo-app-ts-tailwind.vercel.app'
          : 'http://localhost:5173'
      }
      logoutUri={
        import.meta.env.MODE === 'production'
          ? 'https://todo-app-ts-tailwind.vercel.app'
          : 'http://localhost:5173'
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
