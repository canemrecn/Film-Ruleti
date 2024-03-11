import React, { useState } from 'react';
import { useFilm } from './FilmContext';

function PosterContainer() {
  const { moviePosters } = useFilm();
  const [selectedCategory, setSelectedCategory] = useState('');

  const showPoster = () => {
    const filteredPosters = moviePosters.filter(poster => poster.category === selectedCategory);
    if (filteredPosters.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredPosters.length);
    const randomPoster = filteredPosters[randomIndex]?.path || '';

    const moviePoster = document.getElementById('moviePoster');
    if (moviePoster) {
      moviePoster.src = randomPoster;
      // Resmin boyutunu ayarlayın
      moviePoster.style.width = '900px'; // Genişliği 200 piksel olarak ayarlayın
      moviePoster.style.height = '1200px'; // Yüksekliği 300 piksel olarak ayarlayın
    }
    
  };

  const carGifPath = '/cark.gif';
  return (
    <div>
      <div className="category-selector" style={{ position: 'fixed', top: '0', left: '0', width: '20%', height: '100vh', overflowY: 'auto', background: '#fff' }}>
        <h1>Film Ruleti</h1>
        <h3>Kategoriler</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {['İMDB EN İYİ 100', 'AİLE FİLMLERİ', 'AKSİYON FİLMLERİ', 'ANİMASYON FİLMLERİ', 'BİLİMKURGU FİLMLERİ', 'BLUERAY FİLMLERİ', 'ÇİZGİ FİLMLER', 'DRAM FİLMLERİ', 'FANTASTİK FİLMLER', 'GİZEM FİLMLERİ', 'KOMEDİ FİLMLERİ', 'KORKU FİLMLERİ', 'MÜZİKAL FİLMLER', 'PSİKOLOJİK FİLMLER', 'ROMANTİK FİLMLER', 'SAVAŞ FİLMLERİ', 'SUÇ FİLMLERİ', 'TARİH FİLMLERİ', 'YERLİ FİLMLER'].map(category => (
            <li key={category}>
              <button onClick={() => setSelectedCategory(category)}>{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <img src={carGifPath} alt="Ruleti Başlat" onClick={showPoster} style={{cursor: 'pointer', display: 'block', margin: '20px auto', maxWidth: '300px', position: 'fixed', bottom: '0px', left: '90%', transform: 'translateX(-50%)', // X ekseni boyunca %50 geri taşıyarak tam ortasını bul
  }}
/>

      <div className="poster-container" style={{ marginLeft: '20%', marginTop: '1px' }}>
        <img id="moviePoster" alt="" src="a.jpg"  style={{ maxWidth: '100%', maxHeight: '90vh' }} />
      </div>
    </div>
  );
}

export default PosterContainer;
