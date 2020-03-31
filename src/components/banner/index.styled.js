import styled from "styled-components"
import bg from "../../theme/images/p-30-acceso.jpg"
import { Rows } from "../../theme/layout.styled"

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  height: 0;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.GreenDark} url(${bg}) no-repeat center center;
  color: ${({ theme }) => theme.GoldLight};
  background-size: cover;
  transition: height 0.3s;
  padding: 40px 0 50px;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.25);
    z-index: 0;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 0;
    height: 100vh;
    height: calc( 100vh - 114px );
    min-height: 550px;
  }
`
export const Button = styled.button`
  width: 80%;
  color: ${({ theme }) => theme.GreenDark};
  padding: 15px;
  background-color: ${({ theme }) => theme.GreenLighter};
  font-size: 18px;
  border: 0 none;
  position: relative;
  cursor: pointer;
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
    padding: 25px;
    font-size: 22px;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 20px;
  &:nth-child(3){
    display: none;
  }
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    &:nth-child(3){
      display: flex;
    }
    padding: 5px 50px;
  }
`

export const BoxRows = styled(Rows)`
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
`

export const BoxItemTitle = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 5px;
  ${({ theme }) => theme.MediaQueryMedium}{
    font-size: 31px;
  }
`

export const BoxItemAmount = styled.p`
  font-size: 40px;
  margin: 0;
  span{
    font-size: 12px;
    line-height: 17px;
    display: inline-block;
    width: 55px;
    text-transform: uppercase;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    font-size: 56px;
    span{
      font-size: 17px;
      line-height: 26px;
    }
  }
`

export const BoxItemFooter = styled.p`
  margin: 0;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  ${({ theme }) => theme.MediaQueryMedium}{
    font-size: 20px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.GoldLight};
  position: relative;
  font-size: ${({ theme }) => theme.MobileTextMediumSubtitle};
  font-weight: normal;
  width: 90%;
  text-align: center;
  margin: 20px 0;
  max-width: 650px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    font-size: 35px;
  }
`