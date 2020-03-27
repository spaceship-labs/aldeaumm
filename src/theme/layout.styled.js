import styled from "styled-components"

const ContentWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  overflow: hidden;
`

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`

const Section = styled.section`
  margin: 0;
  padding: 0;
`;

const SectioPadding = styled(Section)`
  padding: 46px 0;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 86px 0;
  }
`

const SectioPaddingMedium = styled(Section)`
  padding: 30px 0;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 55px 0;
  }
`

const Container = styled.div`
  width: 95%;
  max-width: 1260px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`

const ContainerXLarge = styled(Container)`
  max-width: 1650px;
`

const ContainerLarge = styled(Container)`
  max-width: 1350px;
`

const ContainerCommon = styled(Container)`
  max-width: 1015px;
`

const ContainerMedium = styled(Container)`
  max-width: 795px;
`

const ContainerSmall = styled(Container)`
  max-width: 500px;
`

const Rows = styled.div`
  display: flex;
  flex-direction: ${({ mobileRow }) => (mobileRow ? 'row' : 'column')};
  ${({ wrap }) => (wrap && `flex-wrap:wrap;`)}
  ${({ align }) => `justify-content:${align ? align : 'flex-start'};` }
  ${({ verticalAlign }) => `align-items:${verticalAlign ? 'center' : 'stretch'};` }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    flex-direction: row;
  }
`

const Row = styled.div`
  box-sizing: border-box;
  ${({ width }) => (width && `flex-basis:${width};`)}
  ${({ grow }) => (grow && `flex-grow:1;`)}
  ${({ shrink }) => (shrink && `flex-shrink:1;`)}
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    ${({ widthSm }) => (widthSm && `flex-basis:${widthSm};`)}
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    ${({ widthM }) => (widthM && `flex-basis:${widthM};`)}
  }
`

const GoldButton = styled.button`
  width: 80%;
  color: #fff;
  background-color: ${({ theme }) => theme.Gold};
  padding: 15px;
  font-size: 18px;
  border: 0 none;
  position: relative;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  span{
    position: relative;
    z-index: 1;
    transition: color 0.3s;
  }
  &::before{
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.Green};
    z-index: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    transition: width 0.3s;
  }
  &:hover{
    color: #fff;
    &::before{
      width: 100%;
    }
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    max-width: 300px;
    font-size: 22px;
  }
`

const ButtonGreenLighter = styled(GoldButton)`
  color: ${({ theme }) => theme.GreenDark};
  background-color: ${({ theme }) => theme.GreenLighter};
`

export {
  ContentWrapper,
  Content,
  Section,
  SectioPadding,
  SectioPaddingMedium,
  Container,
  ContainerXLarge,
  ContainerLarge,
  ContainerCommon,
  ContainerMedium,
  ContainerSmall,
  Rows,
  Row,
  GoldButton,
  ButtonGreenLighter,
}