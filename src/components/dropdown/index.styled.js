import styled from "styled-components"

const DropdownWrap = styled.div`
    position: relative;
    float: right;
`

const MobileOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: ${({ open }) => open ? 'block' : 'none'};
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    display: none;
  }
`

const DropdownAction = styled.button`
  background: transparent;
  border: 0 none;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  position: relative;
  z-index: 1;
  img{
    margin-right: 2px;
  }
  span{
    font-size: 8px;
    padding: 3px 5px;
    color: ${({ theme }) => theme.GreenDark};
    font-weight: 900;
    &.info{
      font-size: ${({ theme }) => theme.TextSmall};
      display: none;
    }
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    border: 2px solid ${({ theme }) => theme.GreenLighter};
    padding: 15px 25px;
    img{
      margin-right: 10px;
    }
    span{
      &.info{
        display: block;
      }
    }
  }
`

const DropdownScreen = styled.div`
    position: absolute;
    z-index: 10;
    right: 0;
    min-width: 260px;
    top: 100%;
    background-color: #fff;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    visibility: ${ ({ open }) => open ? 'visible' : 'hidden'};
    opacity: ${ ({ open }) => open ? '1' : '0' };
    transition: all .3s;
    background: linear-gradient(180deg, ${({ theme }) => theme.Green} 0%, ${({ theme }) => theme.Green } 84%, rgba(0,0,0,0) 84%);
    form{
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

export {
  DropdownWrap,
  MobileOverlay,
  DropdownAction,
  DropdownScreen
}