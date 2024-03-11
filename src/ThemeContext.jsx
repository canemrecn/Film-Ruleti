import React, { createContext, useContext, useState } from 'react';

// Tema bağlamını oluştur
const ThemeContext = createContext();

// Tema sağlayıcı bileşeni tanımla
export const ThemeProvider = ({ children }) => {
  // Tema durumu için başlangıç değeri olarak "light" seç
  const [theme, setTheme] = useState('light');

  // Temayı değiştirme işlevi
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Tema sağlayıcı bileşeni oluştur ve alt bileşenlere tema durumunu ve temasını değiştirme işlevini sağla
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Tema bağlamını kullanarak tema durumunu ve temasını değiştirme işlevini sağlayan özel bir kancayı (hook) tanımla
export const useTheme = () => {
  return useContext(ThemeContext);
};
