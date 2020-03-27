import styled from "styled-components"

export const ModalMessage = styled.div`
  background-color: #fff;
  position: relative;
  padding: 20px 30px;
  max-width: 380px;
  width: 90%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.GreenDark};
  text-align: center;
  font-size: ${({ theme }) => theme.MobileTextCommon};
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    font-size: ${({ theme }) => theme.TextCommon};
  }
`