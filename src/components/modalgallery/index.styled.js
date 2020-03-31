import styled from "styled-components"
import { ContainerLarge as ContainerCommon } from "../../theme/layout.styled"

export const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  transition: all 0.3s;
`

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.9);
`

export const Container = styled(ContainerCommon)`
  width: 85%;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    width: 90%;
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  h3{
    color: #fff;
    font-size: 25px;
    text-align: center;
  }
  .slick-list{
    transition: height .3s;
  }
`

export const SliderItem = styled.div`
  display: flex!important;
  justify-content: center;
  align-items: center;
  img{
    max-height: ${({ fullScreen }) => fullScreen === true ? 90 : 80}vh;
    width: ${({ fullScreen }) => fullScreen === true ? '100%' : 'auto'};
  }
`

export const Close = styled.button`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: 0 none;
  text-align: center;
  background-color: #c4c4c4;
  cursor: pointer;
  font-size: 19px;
  font-weight: bold;
  font-family: monospace;
  line-height: 0;
`