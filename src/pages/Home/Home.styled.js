import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const Title = styled.h1`
  font-weight: 900;
  font-size: 40px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: ${globalColor.darkText};
`;

export const Description = styled.p`
  color: ${globalColor.lightText};
  margin-bottom: 46px;
`;

export const Benefits = styled.h2`
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: ${globalColor.darkText};
`;

export const BenefitsImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: center;
  margin-top: 40px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const SectionWrapperTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
