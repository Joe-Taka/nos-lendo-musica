
//. Função que verifica se já existe um storage chamado 'searchHistory' no localStorage do seu browser. Se existir, deleta-o e exibe um pop-up.
//. 'location.reload()' dá um refresh na página.
export const clearSearchHistory = () => {
  localStorage.getItem('searchHistory') && localStorage.removeItem('searchHistory');
  alert('Histórico deletado')
  location.reload();
}