import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao, RedButton, Campo, Nome } from '../../styles'
import { Form, Inputs } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        name,
        mail,
        phone
      })
    )
    navigate('/')
  }

  return (
    <>
      <Form onSubmit={cadastrarContato}>
        <Nome>Novo Contato</Nome>
        <Inputs>
          <Campo
            value={name}
            onChange={(evento) => setName(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Campo
            value={mail}
            onChange={(evento) => setMail(evento.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <Campo
            value={phone}
            onChange={(evento) => setPhone(evento.target.value)}
            type="text"
            placeholder="Telefone"
          />
        </Inputs>
        <Botao type="submit">Cadastrar</Botao>
        <RedButton onClick={() => navigate('/')} type="button">
          Voltar a lista de contatos
        </RedButton>
      </Form>
    </>
  )
}

export default Cadastro
