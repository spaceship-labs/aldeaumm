import styled from "styled-components"
import { SectioPaddingMedium, Row } from "../../theme/layout.styled"

export const Section = styled(SectioPaddingMedium)`
  background-color: ${({ theme }) => theme.Gold};
  padding-bottom: 80px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding-bottom: 120px;
  }
`

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
  margin: 0;
  margin-bottom: 45px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    font-size: ${({ theme }) => theme.TextCommonSubtitle};
  }
`

export const Form = styled.div`
  form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  input{
    width: 48%;
    font-size: 13px;
    box-sizing: border-box;
    padding: 14px 15px;
    border: 1px solid #fff;
    background-color: transparent;
    margin: 2% 0;
    color: #fff;
  }
  button{
    width: 48%;
    box-sizing: border-box;
    padding: 14px 15px;
    border: 0 none;
    background-color: #fff;
    color: ${({ theme }) => theme.GreenDark};
    margin: 2% 0;
    position: relative;
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
  }
`

export const ContactData = styled(Row)`
  font-size: ${({ theme }) => theme.MobileTextCommon};
  img{
    display: inline-block;
    vertical-align: middle;
    margin-right: 24px;
    width: 15px;
  }
  p{
    margin: 10px 0;
  }
  a{
    color: ${({ theme }) => theme.Black};
    text-decoration: none;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    font-size: ${({ theme }) => theme.TextCommon};
  }
`