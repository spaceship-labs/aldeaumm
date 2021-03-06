import styled from "styled-components"
import { SectioPadding, Container as ContainerOrigin, Row } from "../../theme/layout.styled"

export const Section = styled(SectioPadding)``

export const Container = styled(ContainerOrigin)`
  max-width: 1100px;
`

export const FeatImg = styled(Row)`
  position: relative;
  top: 0px;
  margin: 0 auto;
  img{
    width: 100%;
    max-width: 180px;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    img{
      max-width: 350px;
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    img{
      max-width: inherit;
    }
    top: -150px;
  }
`

export const FeatsRows = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ theme }) => theme.MediaQueryMedium}{
    padding-left: 30px;
  }
`

export const VideoRow = styled(Row)`
  padding-top:30px;
  video{
    width: 100%;
    max-width: 100%;
  }
`

export const FeatItem = styled.div`
  color: ${({ theme }) => theme.GreenDark};
  padding-bottom: 60px;
  flex-basis: 80%;
  margin: 0 auto;
  text-align: center;
  img{
    margin-bottom: 25px;
  }
  p{
    font-size: 16px;
    margin: 0;
    margin-bottom: 15px;
  }
  h3{
    font-size: ${({ theme }) => theme.MobileTextSmallSubtitle};
    margin: 0;
    line-height: 30px;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-basis: 45%;
    text-align: left;
    h3{
      font-size: ${({ theme }) => theme.TextSmallSubtitle};
      line-height: 40px;
    }
  }
`
