import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@components/app/App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
