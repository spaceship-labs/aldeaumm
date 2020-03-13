import styled from "styled-components"
import { Row as RowLayout } from "../../theme/layout.styled"

const Header = styled.header`
  background-color: #fff;
  padding: 10px 0;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 20px 0;
  }
`

const Hamburguer = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  background: ${({theme}) => theme.GoldLight};
  border: 0 none;
  padding: 0;
  outline: 0 none!important;
  transition: all 0.3s;
  span {
    display: block;
    border: 1px solid #fff;
    width: 19px;
    margin: 3px 0;
    transition: all 0.3s;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    width: 90px;
    height: 90px;
    span{
      width: 39px;
      margin: 5px 0;
    }
  }
`

const Logo = styled.a`
  display: inline-block;
  padding: 0 15px;
  max-width: 300px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    width: auto;
  }
`

export {
    Hamburguer,
    Logo,
    Header,
}