import {useLocation} from 'react-router-dom'
import {LyricsContainer} from './styles';
import { TMusic } from "../../api/services/fetchSong";

//! URL States
export const Lyrics = () => {

  const location = useLocation()

  const data:TMusic['mus'] = location.state;

  return (
   <LyricsContainer>
    <h3>{data[0].name}</h3>
    <p>{data[0].text}</p>
   </LyricsContainer> 
  )
}