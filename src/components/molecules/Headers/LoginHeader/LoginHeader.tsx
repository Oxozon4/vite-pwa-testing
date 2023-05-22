import { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderButtonsWrapper,
  HeaderButton,
  HeaderWrapperOuter,
} from './LoginHeader-styled';
import Link from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';

const LoginHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 576);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderWrapperOuter>
      <HeaderWrapper isScrolled={isMobileView || isScrolled}>
        <HeaderLogo href="/">ef</HeaderLogo>
        <HeaderButtonsWrapper>
          {isMobileView ? (
            <Link title="zaloguj się">
              <Icon variant="User" size="64px" withhover="false" />
            </Link>
          ) : (
            <>
              <HeaderButton isScrolled={isScrolled}>zaloguj się</HeaderButton>
              <HeaderButton isScrolled={isScrolled}>
                zarejestruj się
              </HeaderButton>
            </>
          )}
        </HeaderButtonsWrapper>
      </HeaderWrapper>
    </HeaderWrapperOuter>
  );
};

export default LoginHeader;
