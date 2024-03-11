import React from 'react';
import { useTheme } from './ThemeContext'; // Tema bağlamını içe aktar

function ReloadButton() {
  // Tema bağlamını kullanarak temayı ve tema değiştirme işlevini al
  const { theme } = useTheme();

  // Yeniden başlatma butonunu oluştur
  return (
<button
  type="button"
  className={`btn ${theme === 'light' ? 'btn-outline-primary' : 'btn-outline-dark'}`} // Temaya göre düğme stiline karar ver
  style={{
    border: '2px solid black', // Çerçeve özelliği eklendi
    position: 'fixed',
    top: '10px',
    right: '10px'
  }} // Sayfanın sağ üst köşesine sabitle ve çerçeve ekle
  onClick={() => window.location.reload()} // Sayfayı yeniden yükle
>
  <p>Yeniden Başlat</p>
</button>
  );
}

export default ReloadButton;

