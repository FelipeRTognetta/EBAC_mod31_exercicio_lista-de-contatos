import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 16px;

  textarea {
    resize: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }
`

export const Info = styled.div`
  color: ${variaveis.cinza};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: flex;
  align-items: top;
  width: 100%;
  margin-bottom: 8px;
  margin-left: 8px;
`
export const Icon = styled.svg`
  margin-right: 8px;
  color: ${variaveis.cinza};
`
export const InfoItem = styled.textarea`
  font-family: 'Roboto Mono', monospace;
`
