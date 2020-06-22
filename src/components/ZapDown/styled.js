import styled from "styled-components"

export const Container = styled.div`
  max-width: 1000px;
`

export const ZapInferior = styled.div`
  .botao-zap-inferior {
    position: fixed;
    width: 80px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    border-radius: 50px;
    font-size: 50px;
    z-index: 1000;
    bottom: 10;
    right: 21px;
  }

  @media screen and (min-width: 640px) {
    .botao-zap-inferior img {
      bottom: 10;
    }
  }
`
