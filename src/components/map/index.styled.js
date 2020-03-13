import styled from "styled-components"
import img from "../../theme/images/aldea-umm-games.png"

export const BoxText = styled.div`
  background-image: url(${img});
  color: #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  h3{
    font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
    font-weight: normal;
    margin: 0;
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
  img{
    width: 100%;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 60%;
  }
`