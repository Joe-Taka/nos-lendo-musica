import { NavBar, History } from "../../components"
import { clearSearchHistory } from '../../../utils/clearSearchHistory'

const ClearHistoryButton = (
  <button onClick={clearSearchHistory}>
    Limpar histórico X
  </button>
)

export const SearchHistory= () => {
  return (
    <div>
      <NavBar secondaryElement={ClearHistoryButton} />
      <History />
    </div>
  )
}