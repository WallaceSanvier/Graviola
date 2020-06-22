import styled from "styled-components"

export const Footerr = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: arial;
    font-size: 16px;
  }

  .footer-global {
    height: 2%;
  }

  .clearfix {
    clear: both;
  }
  .center {
    text-align: center;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }

  .clr1 {
    background: #ffffff;
    color: #333743;
  }
  .clr2 {
    background: #f1f3f5;
    color: #8f94a3;
  }
  .clr3 {
    background: #3e4352;
    color: #bdc3cf;
  }
  .clr4 {
    background: #636a7d;
    color: #e3e7f2;
  }
  .clr5 {
    background-color: #f1f3f5;
  }
  .clr6 {
    background-color: #39b5a1;
  }
  .clr7 {
    background-color: #d45245;
  }

  a {
    color: #bdc3cf;
    text-decoration: none;
  }
  a:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  a:visited {
  }

  /*##### Footer Structure #####*/
  .bo-wrap {
    clear: both;
    width: auto;
  }
  .bo-footer {
    clear: both;
    width: auto;
    padding: 5px;
    width: 960px;
    margin: 0 auto;
  }

  .bo-footer-copyright {
    text-align: center;
    color: #bdc3cf;
  }

  /*##### Footer Responsive #####*/
  /* for 980px or less */
  @media screen and (max-width: 980px) {
    .bo-footer {
      width: 95%;
      padding: 1% 2%;
    }
    .bo-footer-smap {
      width: 46%;
      padding: 1% 2%;
    }
    .bo-footer-uonline {
      width: 46%;
      padding: 1% 2%;
      float: right;
      text-align: right;
    }

    .bo-footer-power {
      clear: both;
      padding: 1% 2%;
      width: auto;
      float: none;
      text-align: center;
    }
  }
  /* for 700px or less */
  @media screen and (max-width: 600px) {
    .bo-footer-smap {
      width: auto;
      float: none;
      text-align: center;
      font-size: 5px;
    }

    .bo-footer-uonline {
      width: auto;
      float: none;
      text-align: center;
      height: 15px;
    }

    .bo-footer-power {
      width: auto;
      float: none;
      text-align: center;
    }
  }
`
