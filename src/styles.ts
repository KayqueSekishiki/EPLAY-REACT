import { createGlobalStyle } from 'styled-components'

const Cores = {
  branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;


body {
background-color: ${Cores.preta};
color: ${Cores.branca};
}`
