import React, { Component } from "react"

import { Footerr } from "./styled"

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-global">
          <Footerr>
            <div className="bo-wrap clr4">
              <div className="bo-footer">
                <div className="bo-footer-social"></div>
              </div>
            </div>
            <div className="bo-wrap clr3">
              <div className="bo-footer">
                <div
                  className="bo-footer-power"
                  style={{ textAlign: "center" }}
                >
                  Desenvolvido por{" "}
                  <a href="https://wallacesanvier.netlify.com">
                    devwallace93@gmail.com
                  </a>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="bo-wrap clr4">
              <div className="bo-footer">
                <div className="bo-footer-copyright">
                  &copy;2020 Todos os direitos reservados
                </div>
              </div>
            </div>
          </Footerr>
        </div>
      </>
    )
  }
}
//
export default Footer
