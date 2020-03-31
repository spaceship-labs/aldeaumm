import styled from "styled-components"
import img from "../../theme/images/casa-club-alberca.jpg"

export const BoxText = styled.div`
  background-image: url(${img});
  background-size: cover;
  color: #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  position: relative;
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
    font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
    font-weight: normal;
    margin: 0;map
    em{
      font-style: italic;
      font-weight: bold;
    }
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 40%;
    margin-bottom: 0px;
    padding: 100px;
    h3{
      font-size: ${({ theme }) => theme.TextCommonSubtitle};
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 130px 140px;
  }
`

export const BoxMap = styled.div`
  z-index:1;
  img, iframe{
    width: 100%;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 60%;
  }
`