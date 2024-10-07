import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeConfig } from 'config/theme';
import HomePage from 'features/HomePage';
import BaseConversionPage from 'features/BaseConversionPage';
import NotFoundPage from 'features/NotFoundPage';

function App() {
  const theme = createTheme(themeConfig);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/home" element={<Navigate to="/" />}/>
            <Route path="/convert/:conversionBases" element={<BaseConversionPage />}/>
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
