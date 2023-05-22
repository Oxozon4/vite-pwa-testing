import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import LandingPage from '../components/templates/LandingPage/LandingPage';
import { Wrapper } from './Root-styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
