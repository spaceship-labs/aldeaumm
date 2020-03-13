import styled from "styled-components"

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
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 80px 100px;
    h3{
      font-size: ${({ theme }) => theme.TextBigSubtitle};
    }
    p{
      font-size: ${({ theme }) => theme.TextCommonSubtitle};
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
