import {
  TryForFreeSectionWrapper,
  TryForFreeSectionHeader,
  TryForFreeSectionParagraph,
} from './TryForFreeSection-styled';
import Button from '../../atoms/Button/Button';

const TryForFreeSection = () => {
  return (
    <TryForFreeSectionWrapper>
      <TryForFreeSectionHeader data-aos="fade-up">
        Spróbuj za darmo
      </TryForFreeSectionHeader>
      <TryForFreeSectionParagraph data-aos="fade-up">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </TryForFreeSectionParagraph>
      <Button text="Zarejestruj się teraz!" data-aos="fade-up" />
    </TryForFreeSectionWrapper>
  );
};

export default TryForFreeSection;
