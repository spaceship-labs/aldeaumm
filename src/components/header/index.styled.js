import styled from "styled-components"
import { Row as RowLayout } from "../../theme/layout.styled"

const Header = styled.header`
  background-color: #fff;
  padding: 10px 0;
  position: relative;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 20px 0;
  }
`

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
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

const Menu = styled.ul`
  position: absolute;
  z-index: 100;
  width: 260px;
  top: 100%;
  background-color: ${({ theme }) => theme.GreenLightest};
  margin: 0;
  padding: 30px 20px 30px;
  list-style: none;
  transition: all .3s;
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  margin-top: ${({ open }) => open ? '0' : '20px'};
  a, button, span{
    font-size: 20px;
    background-color: transparent;
    border: 0 none;
    color: ${({ theme }) => theme.GreenDark};
    text-decoration: none;
    display: block;
    padding: 10px 5px;
    width: 100%;
    text-align: left;
  }
  a,button{
    cursor: pointer;
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

const Phone = styled.a`
  margin-left: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.GreenDark};
  display: none;
  img{
    display: inline-block;
    width: 11px;
    margin-right: 5px;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    display: inline-block;
  }
`

const LanguageSwitch = styled.li`
display: flex;
justify-content: flex-end;
  a,span{
    display: inline-block;
    width: auto;
    padding-left: 15px;
  }
`

export {
  MenuWrapper,
  Hamburguer,
  Menu,
  Logo,
  Header,
  Phone,
  LanguageSwitch,
}