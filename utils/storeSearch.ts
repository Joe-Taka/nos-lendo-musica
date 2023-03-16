
//. Função que verifica se já existe um storage chamado 'searchHistory' no localStorage do seu browser. Se não existir, cria-o. Se já existir, pega esse storage e acrescenta um novo item artista-música.
export const storeSearch = (artist:string, song:string) => {
  if(!localStorage.getItem('searchHistory')) {
    localStorage.setItem('searchHistory', JSON.stringify([{artist, song}]))
  } else {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    searchHistory.push({artist, song})
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
  }
}