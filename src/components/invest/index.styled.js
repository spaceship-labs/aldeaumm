import styled from "styled-components"
import { Row } from "../../theme/layout.styled"

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-direction: row;
    flex-basis: 100%;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    flex-direction: column;
    flex-basis: 50%;
  }
`

const Box = styled.div`
  display: flex;
  flex: 1;
  padding: 80px 50px;
  * {
    color: ${({ theme }) => theme.GreenDark};
  }
`

export const BoxGreen = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.GreenLight};
  position: relative;
  img{
    width: 120px;
    position: absolute;
    top: -90px;
    margin: 0 auto;
  }
  h3{
    font-size: ${({ theme }) => theme.MobileTextBigSubtitle};
    margin: 0;
    font-weight: normal;
    max-width: 350px;
    margin-bottom: 10px;
  }
  p{
    font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
    margin: 0;
    font-weight: bold;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    img{
      right: -57px;
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 80px 100px;
    img{
      width: 150px;
      top: -140px;
      right: initial;
    }
    h3{
      font-size: ${({ theme }) => theme.TextBigSubtitle};
    }
    p{
      font-size: ${({ theme }) => theme.TextCommonSubtitle};
    }
  }
  ${({ theme }) => theme.MediaQueryCommon}{
    img{
      width: 170px;
      top: -125px;
    }
  }
`

export const BoxWhite = styled(Box)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img{
    margin-right: 30px;
  }
  h3{
    font-size: ${({ theme }) => theme.MobileTextSmallSubtitle};
    margin: 0;
  }
  span{
    font-size: 35px;
  }
  p{
    font-size: 16px;
    margin: 0;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    align-items: flex-start;
    h3{
      font-size: ${({ theme }) => theme.TextSmallSubtitle};
    }
    span{
      font-size: 60px;
    }
  }
`

export const ImageBox = styled.div`
  margin: 0px auto 40px;
  img{
    width: 100%;
    position: relative;
    top: 0;
    margin: 0 auto;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    margin: 0;
    flex: 0 0 50%;
    img{
      top: -75px;
    }
  }
`

export const BoxGold = styled(Row)`
  background-color: ${({ theme }) => theme.Gold};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 80px;
  text-align: center;
  *{
    color: #fff;
  }
  img{
    position: relative;
    width: 150px;
    margin-top: -140px;
    margin-bottom: 20px;
  }
  h3{
    font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
    margin: 0;
    margin-bottom: 10px;
  }
  p{
    font-size: ${({ theme }) => theme.MobileTextCommon};
    margin: 0;
    line-height: 1.8;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    h3{
      font-size: ${({ theme }) => theme.TextCommonSubtitle};
    }
    p{
      font-size: ${({ theme }) => theme.TextCommon};
    }
  }
`

export const ImagesBox = styled(Row)`
  position: relative;
  min-height: 250px;
  overflow: hidden;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    min-height: 350px;
  }
`
export const ImageItem = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: unset;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity .4s;
  opacity: ${({ show }) => show ? 1 : 0};
`