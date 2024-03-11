import React from 'react';
import Header from './Header'; // Header bileşenini içeri aktarır
import PosterContainer from './PosterContainer'; // PosterContainer bileşenini içeri aktarır
import ReloadButton from './ReloadButton'; // ReloadButton bileşenini içeri aktarır
import { ThemeProvider } from './ThemeContext'; // Tema sağlayıcısını içeri aktarır
import { FilmProvider } from './FilmContext'; // Film sağlayıcısını içeri aktarır
import './App.css'; // Uygulama CSS dosyasını içeri aktarır
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <ThemeProvider> {/* Tema sağlayıcısı bileşenini kullanarak tema bağlamını sağlar */}
      <FilmProvider> {/* Film sağlayıcısı bileşenini kullanarak film bağlamını sağlar */}
      <Navbar>
        <div>
          <Header /> {/* Header bileşenini ekler */}
          <PosterContainer /> {/* PosterContainer bileşenini ekler */}
          <ReloadButton /> {/* ReloadButton bileşenini ekler */}
        </div>
        </Navbar>
      </FilmProvider>
    </ThemeProvider>
  );
}

export default App; // App bileşenini dışa aktarır
