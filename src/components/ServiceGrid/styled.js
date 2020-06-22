import styled from "styled-components"

export const Container = styled.div`
  position: relative;

  .grid-container {
    padding-top: 4%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    max-width: 90%;
    margin: auto;
    position: relative;
  }

  .card {
    margin: auto;
    border-width: medium;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    position: relative;
    max-width: 80%;
  }

  h4,
  p {
    text-align: center;
    font-size: 80%;
    color: black;
  }

  @media screen and (min-width: 552px) {
    .grid-container {
      max-width: 60%;
    }
  }
  @media screen and (min-width: 1000px) {
    .grid-container {
      float: left;
      max-width: 30%;
    }
  }
`
