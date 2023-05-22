import { useState, useEffect, useRef } from 'react';
import Aos from 'aos';

import LoginHeader from '../../molecules/Headers/LoginHeader/LoginHeader';
import Footer from '../../molecules/Footer/Footer';
import WelcomeSection from '../../organisms/WelcomeSection/WelcomeSection';
import WhyUsSection from '../../organisms/WhyUsSection/WhyUsSection';
import TryForFreeSection from '../../organisms/TryForFreeSection/TryForFreeSection';
import { Wrapper } from './LandingPage-styled';
import BackToTopIcon from '../../atoms/BackToTopIcon/BackToTopIcon';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Wrapper>
      <LoginHeader />
      <WelcomeSection />
      <WhyUsSection />
      <TryForFreeSection />
      <BackToTopIcon />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
