import {NavBar, SearchSongForms} from '../../components'
import { Link } from 'react-router-dom'

const LastSearches = (
    <Link to="/history">
      Últimas buscas
    </Link>
)

export const SearchSong = () => {
  return (
    <div>
      <NavBar secondaryElement={LastSearches} />
      <SearchSongForms/>
    </div>
  )
}