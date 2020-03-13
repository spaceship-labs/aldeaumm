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

const ButtonBlue = styled.button`
  border: 0 none;
  background: linear-gradient(to right, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 50%, rgba(24,65,153,1) 100%);
  color: #fff;
  display: inline-block;
  padding: 10px 50px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #fff;
  transition: all .3s;
  cursor: pointer;
  &:hover{
    background: linear-gradient(to right, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 100%);;
  }
`

export {
  ContentWrapper,
  Content,
  Section,
  SectioPadding,
  SectioPaddingMedium,
  Container,
  ContainerLarge,
  ContainerCommon,
  ContainerMedium,
  ContainerSmall,
  Rows,
  Row,
  ButtonBlue,
}