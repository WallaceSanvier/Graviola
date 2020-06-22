import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  position: relative;

  .grid-container {
    padding-top: 105px;
    max-width: 80vh;
    max-height: 50vh;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  h3,
  h4 {
    font-size: 12px;
  }

  @media (min-width: 1023px) {
    .grid-container {
      padding-top: 200px;
      max-width: 100vh;
      max-height: 50vh;
      text-align: center;
      margin: 0 auto;
    }

    h3,
    h4 {
      font-size: 30px;
      padding-left: 10%;
    }
  }
`

export const Place = styled.div`
  position: relative;
  padding-top: 11%;

  .endereco-google {
    display: flex;
    flex: 1;
    background-color: #a020f0;
    color: white;
    height: 50px;
    text-align: center;
    align-items: center;
  }

  .google-maps {
    display: flex;
    width: 100%;
    height: 500px;
    padding: 3em;
    background: black;
  }
  .frame {
    width: 600px;
    height: 450px;

    .endereco {
      display: flex;
      flex: 1;
      background-color: blue;
      color: white;
      height: 50px;
      text-align: center;
    }

    .google-maps,
    .iframe2 {
      height: 682px;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .google-maps,
      .iframe2 {
        height: 500px;
      }
    }
    @media (max-width: 991px) {
      .google-maps,
      .frame2 {
        height: 400px;
      }
    }
    @media (max-width: 360px) {
      .google-maps,
      .frame2 {
        height: 300px;
      }
    }
  }
`
