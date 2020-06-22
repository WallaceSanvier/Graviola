import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    overflow-x: hidden;
  }
`

export const Navigation = styled.nav`
  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none !important;
  }

  h1 {
    font-size: 30px;
    color: black;
    text-align: center;
    padding-top: 15px;
  }

  nav {
    position: fixed;
    z-index: 10;
    width: 100%;
    max-width: 1300px;
    border-radius: 10px;
  }
  .btn {
    flex: 1;
  }

  .logo img {
    display: block;
    max-width: 70px;
    max-width: 70px;
    padding-left: 8px;
  }
  .nome-logo .logo {
    display: block;
  }

  .bar {
    margin: 8px;
    height: 4px;
    color: black;
    background: black;
  }

  .logo-btn {
    background: #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    width: 90%;
    max-width: 800px;
    margin: auto;
    border-radius: 10px;
  }

  ul {
    list-style: none;
    height: 0px;
    overflow: hidden;
    transition: all 0.5s ease;
    position: relative;
  }

  li {
    position: relative;
  }

  .showNav {
    height: 400px;
  }

  ul li a {
    background: #f4f4f4;
    display: block;
    color: black;
    padding-top: 15px;
    font-size: 23px;
    height: 60px;
    text-align: center;
    position: relative;
  }

  ul li a:hover {
    background: #a020f0;
    color: white;
    height: 60px;
    border-radius: 15px;
  }

  img {
    float: left;
  }
  @media screen and (min-width: 1249px) {
    nav {
      background: #f4f4f4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      position: fixed;
    }

    .logo img {
      padding-left: 1px;
    }
    .btn {
      display: none;
      background: #f4f4f4;
    }
    ul {
      display: flex;
      height: auto;
    }
    .showNav {
      height: auto;
    }
    .logo-btn {
      border: none;
    }
    ul li a:hover {
      background: #a020f0;
      color: white;
      border-radius: 15px;
    }
    h1 {
      font-size: 40px;
    }
  }
  /*responsive mode */
`
