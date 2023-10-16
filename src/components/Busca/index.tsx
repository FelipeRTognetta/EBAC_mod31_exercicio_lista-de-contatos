import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'

const Busca = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()

  return (
    <Campo
      type="text"
      placeholder="Buscar"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default Busca
