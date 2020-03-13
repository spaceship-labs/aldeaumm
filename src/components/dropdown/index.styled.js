import styled from "styled-components"

const DropdownWrap = styled.div`
    position: relative;
`

const DropdownAction = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.GreenLighter};
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  img{
    margin-right: 10px;
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
    padding: 15px 25px;
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
      p{
        margin: 0 0 15px 0;
      }
      input{
        display: block;
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
        border: 0 none;
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: ${({ theme }) => theme.TextCommon};
      }
    }
`

export {
    DropdownWrap,
    DropdownAction,
    DropdownScreen
}