import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-width: 65%;

  .flex-container {
    text-align: center;

    margin: 0 auto;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }

  .card {
    margin: 5%;
    border-radius: 5px;
    justify-content: center;
  }

  @media screen and (min-width: 950px) {
    max-width: 800px;
    margin: auto;
    .flex-container {
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .card {
      border: none;
    }

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 25px;
    }
  }
`
