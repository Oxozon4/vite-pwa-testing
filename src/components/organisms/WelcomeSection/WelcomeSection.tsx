import {
  SectionWrapper,
  SectionTitle,
  SectionContent,
} from './WelcomeSection-styled';
import Button from '../../atoms/Button/Button';

const WelcomeSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SectionTitle>
      <SectionContent>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged
      </SectionContent>
    </SectionWrapper>
  );
};

export default WelcomeSection;
