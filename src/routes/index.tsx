import { Routes, Route } from "react-router-dom";
import { SearchSong, SearchHistory, SearchResult, Song } from "../pages";

export const MainRoute = () => {

  return (
    <Routes>
      <Route path="/" element={<SearchSong />} />
      <Route path="/history" element={<SearchHistory/>} />
      <Route path="/searchresult" element={<SearchResult/>} />
      <Route path="/song" element={<Song/>} />
      //. Com Query Strings
      <Route path="/aaa" element={<h3>AAA</h3>} />
    </Routes>
  );
};
