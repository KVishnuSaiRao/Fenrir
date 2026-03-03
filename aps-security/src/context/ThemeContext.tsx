// "use client";
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     // This line is crucial for Tailwind dark: variants to work
//     if (isDark) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);



"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark'; // Tells the browser we are in dark mode
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);