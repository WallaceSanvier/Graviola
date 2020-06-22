import styled from "styled-components"

export const Container = styled.div`
  .masthead {
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .black-overlay {
    display: -webkit-flex; /*Safari*/
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    align-items: center;
    text-align: center;
    color: white;
  }
  .content-box {
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
  }

  .content-box,
  h1,
  h2 {
    font-size: 100%;
  }

  @media screen and (min-width: 1000px) {
    .masthead {
      width: 100%;
      height: 60vh;
    }

    h1,
    h2 {
      font-size: 40px;
    }
  }
`
