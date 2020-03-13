import styled from "styled-components"
import { SectioPadding as SectioPaddingOrigin } from "../../theme/layout.styled"

export const SectioPadding = styled(SectioPaddingOrigin)`
  background-color: ${({theme}) => theme.GreenLight};
`

export const BoxText = styled.div`
  background-color: ${({ theme }) => theme.GoldLight};
  color: ${({ theme }) => theme.Black};
  padding: 40px 35px;
  box-sizing: border-box;
  margin-bottom: -60px;
  width: 80%;
  z-index:2;
  h3{
    font-size: ${({ theme }) => theme.MobileTextSmallSubtitle};
    margin: 0;
    margin-bottom: 25px;
  }
  ul{
    list-style:none;
    margin: 0; padding: 0;
    font-size: 17px;
    span{
      font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
      margin-right: 10px;
    }
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 50%;
    margin-bottom: 0px;
    h3{
      font-size: ${({ theme }) => theme.TextSmallSubtitle};
    }
    ul span{
      font-size: ${({ theme }) => theme.TextCommonSubtitle};
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 80px 70px;
  }
`

export const BoxImage = styled.div`
  z-index:1;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 50%;
    img{
      max-width: 120%;
      max-width: calc( 100% + 70px );
      float: right;
    }
  }
`