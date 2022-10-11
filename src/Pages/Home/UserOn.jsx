import React from "react";
import { Header } from "../../components/Header/Header";
import requests from "../../Request";
import { GroupRow } from "../../components/GroupRow/GroupRow";
import "./userOn.scss";

export const UserOn = () => {
  // Base de The Mobie DB
  const baseURL = "https://api.themoviedb.org/3/";

  // Base para imagenes
  const baseImgURL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="userOn-bg">
      {/* Portada */}
      <Header
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchTrending}
      />

      {/* Categorias */}
      <GroupRow
        title="Netfilm Originals"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchNetfilmOriginals}
        isLarge
      />
      <GroupRow
        title="Top Rated"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchTopRated}
      />
      <GroupRow
        title="Action Movies"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchActionMovies}
      />
      <GroupRow
        title="Comedy Movies"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchComedyMovies}
      />
      <GroupRow
        title="Horror Movies"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <GroupRow
        title="Documentaries"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchDocumentaries}
      />
      <GroupRow
        title="Romance Movies"
        baseURL={baseURL}
        baseImgURL={baseImgURL}
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
};
