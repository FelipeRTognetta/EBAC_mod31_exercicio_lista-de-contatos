import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background: linear-gradient(
    90deg,
    rgba(42, 131, 196, 1) 0%,
    rgba(180, 107, 250, 1) 100%
  );
  color: ${variaveis.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
