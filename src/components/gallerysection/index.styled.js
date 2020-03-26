import styled from "styled-components"

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
    
    width: 100%
  }
`

export const Arrow = styled.div`
  background-color: transparent!important;
  width: 50px;
  height: 50px;
  top: calc( 50% - 25px );
  z-index: 10;
  ${({ direction }) => direction === 'left' ? 'left: 15px;' : ''}
  ${({ direction }) => direction === 'right' ? 'right: 15px;' : '' }
  background-color: rgba(255,255,255,.4)!important;
  padding: 10px 0;
  &::before{
    display: none;
  }
  img{
    display: block;
    transform: rotate( ${({ direction }) => direction === 'left' ? 180 : 0 }deg )!important;
  }
  ${({ theme }) => theme.MediaQueryMedium}{
    padding: 0;
    ${({ direction }) => direction === 'left' ? 'left:-50px;' : ''}
    ${({ direction }) => direction === 'right' ? 'right:-50px;' : '' }
  }
`