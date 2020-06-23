import styled from "styled-components"

export const ModalContainer = styled.div`
  visibility: ${ ({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${ ({ open }) => open ? '1' : '0'};
  transition: all .4s;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`

export const ModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  z-index: 0;
`

export const ModalFormContainer = styled.div`
    position: relative;
    z-index: 1;
    min-width: 260px;
    width: 90%;
    max-width: 300px;
    background: linear-gradient(180deg, ${({ theme }) => theme.Green} 0%, ${({ theme }) => theme.Green} 84%, rgba(0,0,0,0) 84%);
    padding: 20px;
    form{
      p{
        margin: 0 0 15px 0;
      }
      input{
        margin: 0 0 15px 0;
        display: block;
        font-size: 14px;
        width: 100%;
        color: #fff;
        box-sizing: border-box;
        border: 1px solid ${({ theme }) => theme.GreenLighter};
        background: transparent;
        padding: 9px 15px;
      }
      button{
        display: block;
        width: 100%;
        background-color: ${({ theme }) => theme.Gold};
        border: 2px solid ${({ theme }) => theme.Gold};
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: ${({ theme }) => theme.TextCommon};
        position: relative;
        span{
          position: relative;
          z-index: 1;
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
        &:hover::before{
          width: 100%;
        }
      }
    }
`

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-size: ${({ theme }) => theme.MobileTextCommonSubtitle};
  margin: 0;
  margin-bottom: 25px;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    font-size: ${({ theme }) => theme.TextCommonSubtitle};
  }
`
export const Close = styled.button`
  border: 1px solid #fff;
  color: #fff;
  background: ${({ theme }) => theme.Gold};
  border-radius: 50%;
  display: inline-block;
  width: 35px;
  height: 35px;
  text-align: center;
  position: absolute;
  right: -15px;
  top: -15px;
  cursor: pointer;
`