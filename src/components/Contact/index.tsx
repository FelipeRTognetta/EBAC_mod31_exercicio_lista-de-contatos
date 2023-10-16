import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Contato from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contatos'

import * as S from './styles'
import { Botao, RedButton, Nome } from '../../styles'

type Props = Contato

const Contact = ({
  name,
  mail: mailOriginal,
  phone: phoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (mailOriginal.length > 0) {
      setMail(mailOriginal)
    }
  }, [mailOriginal])

  useEffect(() => {
    if (phoneOriginal.length > 0) {
      setPhone(phoneOriginal)
    }
  }, [phoneOriginal])

  function cancelEditing() {
    setEditing(false)
    setMail(mailOriginal)
    setPhone(phoneOriginal)
  }

  return (
    <S.Card>
      <Nome>
        {editing && <em>Editando: </em>}
        {name}
      </Nome>
      <S.Info>
        <S.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-mail"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </S.Icon>
        <S.InfoItem
          disabled={!editing}
          value={mail}
          onChange={(evento) => setMail(evento.target.value)}
        />
      </S.Info>

      <S.Info>
        <S.Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-phone"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </S.Icon>
        <S.InfoItem
          disabled={!editing}
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
        />
      </S.Info>
      {editing ? (
        <>
          <Botao
            onClick={() => {
              dispatch(
                editar({
                  name,
                  mail,
                  phone,
                  id
                })
              )
              setEditing(false)
            }}
          >
            Salvar
          </Botao>
          <RedButton onClick={cancelEditing}>Cancelar</RedButton>
        </>
      ) : (
        <>
          <Botao onClick={() => setEditing(true)}>Editar</Botao>
          <RedButton onClick={() => dispatch(remover(id))}>Remover</RedButton>
        </>
      )}
    </S.Card>
  )
}

export default Contact
