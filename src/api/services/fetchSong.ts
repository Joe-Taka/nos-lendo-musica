//. Typescript exige a tipagem dos dados com a qual estamos trabalhando
export interface TMusic {
  type:     string;
  art:      Art;
  mus:      Mus[];
  badwords: boolean;
}

export interface Art {
  id:   string;
  name: string;
  url:  string;
}

export interface Mus {
  id:        string;
  name:      string;
  url:       string;
  lang:      number;
  text:      string;
  translate: Translate[];
}

export interface Translate {
  id:   string;
  lang: number;
  url:  string;
  text: string;
}

//. Função que faz um fetch na API e retorna a resposta.
export const fetchSong = async (artist:string,song:string) => {

  const url = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artist}&mus=${song}`;

  const resp = await fetch(url);
  const data:TMusic = await resp.json();
  return data;
}