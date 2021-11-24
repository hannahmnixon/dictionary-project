import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiKey =
      "563492ad6f91700001000001df5a514897ff4cc3ad67ac2b54fd45bb";
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${photoApiKey}` };
    axios.get(photoApiUrl, { headers: headers }).then(handlePhotoResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="SearchForm">
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
      <div className="hint">
        <em>suggested searches: special, page, beach, wine...</em>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
