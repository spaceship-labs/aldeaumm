import styled from "styled-components"

export const Footer = styled.footer`
  padding: 35px;
  text-align: center;
  p{
    color: #656565;
    font-size: 11px;
  }
`

export const SocialItems = styled.a`
  width: 35px;
  height: 35px;
  margin: 0 17px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.Gray};
  transition: all 0.3s;
  &:hover{
    background-color: ${({ theme }) => theme.Gold};
  }
`