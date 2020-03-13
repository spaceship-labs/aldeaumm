import styled from "styled-components"

export const TextWrapper = styled.div`
  color: ${({ theme }) => theme.GreenDark};
  text-align: center;
  p{
    font-size: ${({ theme }) => theme.TextCommon};
    line-height: 1.6;
    margin: 25px 0;
  }
  h3{
    font-size: ${({ theme }) => theme.TextCommonSubtitle};
    font-style: italic;
    margin: 0;
  }
`

export const OverlapImageContainer = styled.div`
  margin-top: -90px;
  text-align: center;
  ${({ theme }) => theme.MediaQueryMediumSmall}{
    margin-top: -150px;
  }
`
