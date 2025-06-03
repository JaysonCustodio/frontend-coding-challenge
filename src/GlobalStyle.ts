import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Play';
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
    padding: ${theme.spacing(4)};
    
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .loader {
    text-align: center;
  }

  .tournament-list {
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing(6)};
    margin-top: ${theme.spacing(4)};
  }

  .tournament-item {
    background: ${theme.palette.background.base};
    padding: ${theme.spacing(4)};
    border-radius: 4px;
    box-sizing: border-box;
    
    /* Mobile first - iPhone 12 Pro Max and smaller */
    flex: 1 1 100%;

    /* iPad */
    @media (min-width: 768px) {
      flex: 1 1 calc(50% - ${theme.spacing(4)});
    }

    /* Laptop 13" */
    @media (min-width: 1280px) {
      flex: 1 1 calc(33.333% - ${theme.spacing(4)});
    }

    /* iMac Retina 27" and larger */
    @media (min-width: 2560px) {
      flex: 1 1 calc(25% - ${theme.spacing(4)});
    }
  }

  .tournament-details {
    display: flex;
    flex-direction: column;
  }

  .tournament-actions {
    display: flex;
    gap: ${theme.spacing(2)}; 
    margin-top: ${theme.spacing(2)};
  }

  .filter-create {
    display: flex;
    justify-content: space-between;
    align-items: center;  
    }
`;

export default GlobalStyle;