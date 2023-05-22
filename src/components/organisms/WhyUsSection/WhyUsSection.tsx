import {
  WhyUsSectionWrapper,
  WhyUsSectionTitle,
  WhyUsSectionCardWrapper,
} from './WhyUsSections-styled';
import Card from '../../molecules/Card/Card';

const WhyUsSection: React.FC = () => {
  return (
    <WhyUsSectionWrapper>
      <WhyUsSectionTitle>Dlaczego my?</WhyUsSectionTitle>
      <WhyUsSectionCardWrapper>
        <Card
          image="Fast"
          title="Szybko"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        />
        <Card
          image="Efficient"
          title="Sprawnie"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        />
        <Card
          image="Free"
          title="Bezpłatnie"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        />
      </WhyUsSectionCardWrapper>
    </WhyUsSectionWrapper>
  );
};

export default WhyUsSection;
