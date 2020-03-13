import styled from "styled-components"
import bg from "../../theme/images/aldea-umm-aereo.png"
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
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    height: 100vh;
    height: calc( 100vh - 114px );
  }
`
export const Button = styled.button`
  width: 80%;
  color: ${({ theme }) => theme.GreenDark};
  padding: 15px;
  background-color: ${({ theme }) => theme.GreenLighter};
  font-size: 18px;
  border: 0 none;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    max-width: 300px;
    padding: 25px;
    font-size: 22px;
  }
`

export const BoxRows = styled(Rows)`
  margin-bottom: 50px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    margin-bottom: 100px;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 20px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    padding: 5px 50px;
  }
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