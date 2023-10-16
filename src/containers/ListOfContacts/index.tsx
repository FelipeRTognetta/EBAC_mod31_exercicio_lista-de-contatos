import { useSelector } from 'react-redux'

import Contact from '../../components/Contact'
import { Grid } from './style'
import { RootReducer } from '../../store'

const ListOfContacts = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Grid>
      {filtraTarefas().map((c) => (
        <li key={c.name}>
          <Contact name={c.name} mail={c.mail} phone={c.phone} id={c.id} />
        </li>
      ))}
    </Grid>
  )
}

export default ListOfContacts
