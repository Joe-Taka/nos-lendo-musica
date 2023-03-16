import {NavBar, Lyrics} from '../../components'
import {useNavigate, Link} from 'react-router-dom'

const BackToSearch = () => {
  return (
    <Link to={'/'}>Voltar para a busca</Link>
  )
}

export const Song = () => {

  const navigate = useNavigate();

  return (
    <div>
      <NavBar secondaryElement={BackToSearch()}/>
      <Lyrics/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '2rem',
        marginTop: '5rem'
      }}>
      <h3>Curtiu? Busque mais letras</h3>
      <button onClick={() => navigate('/')}>Nova busca</button>
      </div>
    </div>
  )
}