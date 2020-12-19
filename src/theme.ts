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
    primary: '#3f50b5'
  },
  spacing: ['4px', '8px', '16px', '32px', '64px']
};

export default defaultTheme;