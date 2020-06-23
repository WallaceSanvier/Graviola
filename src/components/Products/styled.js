import styled from "styled-components"

export const Container = styled.div`
  margin-top: 2%;
  position: relative;

  .grid-container {
    display: grid;
    padding-bottom: 5%;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    max-width: 80%;
    position: relative;
    margin: 0 auto;
    padding-left: 5%;
  }

  .card {
    border-width: medium;
    border-style: solid;
    border-color: lightgrey;
    border-radius: 5px;
    position: relative;
  }

  h4 {
    color: red;
    font-size: 20px;
  }

  p {
    text-align: center;
    font-size: 100%;
  }

  h5 {
    text-align: center;
    font-size: 80%;
  }

  button {
    background: #00bfff;
    color: white;
    border-radius: 4px;
  }
  button:hover {
    background: blue;
  }

  @media screen and (min-width: 700px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
      max-width: 600px;
    }
    .grid-container {
      display: grid;
      padding-bottom: 5%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      max-width: 60%;
      height: 100px;
      position: relative;
      margin: 0 auto;
      padding-left: 5%;
    }

    .card {
      border-width: medium;
      border-style: solid;
      border-color: lightgrey;
      border-radius: 5px;
      position: relative;
    }
  }

  @media screen and (min-width: 1000px) {
    .grid-container {
      max-width: 650px;
    }
    .grid-container {
      display: grid;
      padding-bottom: 5%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      max-width: 62%;
      height: 200px;
      position: relative;
      margin: 0 auto;
      padding-left: 5%;
    }

    .card {
      border-width: medium;
      border-style: solid;
      border-color: lightgrey;
      border-radius: 5px;
      position: relative;
    }
  }
`
