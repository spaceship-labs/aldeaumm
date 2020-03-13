import styled from "styled-components"
import { SectioPadding, Container as ContainerOrigin, Row } from "../../theme/layout.styled"

export const Section = styled(SectioPadding)`
  ${({ theme }) => theme.MediaQueryMedium}{
    padding-bottom: 60px;
  }
`

export const Container = styled(ContainerOrigin)`
  max-width: 1100px;
`

export const FeatImg = styled(Row)`
  position: relative;
  top: 0px;
  margin: 0 auto;
  img{
    width: 100%;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    top: -150px;
  }
`

export const FeatsRows = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FeatItem = styled.div`
  color: ${({ theme }) => theme.GreenDark};
  flex-basis: 45%;
  padding-bottom: 60px;
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
    h3{
      font-size: ${({ theme }) => theme.TextSmallSubtitle};
      line-height: 40px;
    }
  }
`
