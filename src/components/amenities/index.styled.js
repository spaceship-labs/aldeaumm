import styled from "styled-components"
import { Section as SectionOrigin, Row } from "../../theme/layout.styled"
import img from "../../theme/images/arq-pi-rend-1b.jpg"

export const Section = styled(SectionOrigin)`
  background: linear-gradient(180deg,
    #fff 0%, 
    #fff 27%, 
    ${({ theme }) => theme.GoldLight} 27%, 
    ${({ theme }) => theme.GoldLight } 95%, 
    #fff 95%
  );
`
export const AmenitiesBox = styled.div`
  background-color: ${({ theme }) => theme.GreenLighter};
  text-align: center;
  transition: padding 0.3s;
  padding: 30px 20px 50px;
  h3{
    font-size: ${({ theme }) => theme.MobileTextBigSubtitle};
    font-weight: normal;
    color: ${({ theme }) => theme.Black};
    margin: 0;
    margin-bottom: 15px;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 40px 60px 60px;
    h3{
      font-size: ${({ theme }) => theme.TextBigSubtitle};
      margin-bottom: 50px;
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 65px 130px 50px;
  }
`

export const AmenitieItem = styled(Row)`
  color: ${({ theme }) => theme.GreenDark};
  font-size: ${({ theme }) => theme.MobileTextCommon};
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  h4{
    margin: 20px 0;
    font-weight: normal;
  }
  &:hover{
    background-color: #ead6c4;
    transform: scale(1.1);
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    font-size: ${({ theme }) => theme.TextCommon};
    padding: 30px;
  }
`

export const Overlap = styled.div`
  background: ${({ theme }) => theme.GreenDark} url(${img}) no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 150px 0 100px;
  margin: 0 auto;
  margin-top: -100px;
  z-index: 0;
  text-align: center;
  width: 90%;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.25);
    z-index: 0;
  }
  h3{
    position: relative;
    font-size: ${({ theme }) => theme.MobileTextMediumSubtitle};
    font-weight: normal;
  }
  em{
    font-weight: bold;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 300px 0 120px;
    margin-top: -220px;
    h3{
      font-size: ${({ theme }) => theme.TextMediumSubtitle};
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    width: 100%;
  }
`