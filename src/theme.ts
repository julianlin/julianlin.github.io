import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    medium: '768px',
    large: '1200px'
  },
  colors: {
    contrast: '#ffffff',
    dark: '#002884',
    light: '#757ce8',
    modalBackground: 'rgba(0, 0, 0, 0.8);',
    primary: '#3f50b5',
    text: '#363a40'
  },
  spacing: ['4px', '8px', '16px', '32px', '64px']
};

export default defaultTheme;