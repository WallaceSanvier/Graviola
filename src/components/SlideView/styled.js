import styled from "styled-components"

export const Container = styled.div`
  max-width: 640px;

  @media (min-width: 765px) {
    display: none;
  }
`
export const Divisoria = styled.div`
  max-width: 90%;
  margin: 0 auto;

  .nome-divisoria {
    display: flex;

    background-color: #a020f0;
    color: white;
    height: 30px;
    text-align: center;
    align-items: center;
    border-radius: 5px;
  }

  .nome-divisoria h2 {
    font-size: 100%;
    align-content: center;
  }
`

export const SlideStyled = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  margin: 0 auto;

  h3 {
    color: black;
  }

  .carousel {
    z-index: 8;
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 200px;
    max-height: 150px;
  }

  @media (min-width: 765px) {
    .carousel {
      display: block;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      max-height: 80%;
    }
  }
`
