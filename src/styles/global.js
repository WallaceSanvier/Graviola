import { createGlobalStyle } from "styled-components"

export default createGlobalStyle` 
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  width: 100%;
  text-decoration: none !important;

  
}

html,body, #root{
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  height: 100vh;
  
  
}


body {
  -webkit-font-smoothing: antialiased !important;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Anton'
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  
`
