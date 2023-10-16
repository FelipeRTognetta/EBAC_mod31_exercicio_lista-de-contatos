import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  padding: 0 400px;
  height: 100vh;
  overflow-y: scroll;
`

export const Nome = styled.h3`
  color: ${variaveis.cinzaEscuro};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  margin-right: 8px;
`

export const RedButton = styled(Botao)`
  background-color: ${variaveis.roxo};
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinza};
  border-color: ${variaveis.azul};
  width: 100%;
  margin-top: 24px;
`

export default EstiloGlobal
