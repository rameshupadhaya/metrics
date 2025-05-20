import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-bg: #000000;
    --card-bg: #141414;
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent: #2d77f6;
    --success: #35c759;
    --danger: #ff3b30;
    --border-radius: 16px;
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--primary-bg);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }

  /* Animation classes */
  .fade-in {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-in.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default GlobalStyle;
