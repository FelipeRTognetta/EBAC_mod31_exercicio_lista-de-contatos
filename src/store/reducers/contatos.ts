import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      name: 'Felipe Tognetta',
      mail: 'felipe@gmail.com',
      phone: '+55 19 9 9199 3456',
      id: 1
    },
    {
      name: 'Larissa Lima',
      mail: 'larissa@hotmail.com',
      phone: '+55 19 9 9199 3456',
      id: 2
    },
    {
      name: 'Gabriel Pinheiro',
      mail: 'gabriel@gmail.com',
      phone: '+55 19 9 9898 5050',
      id: 3
    },
    {
      name: 'Lucas Martim',
      mail: 'lucas@hotmail.com',
      phone: '+55 19 9 9199 3456',
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoRepetido = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoRepetido) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
