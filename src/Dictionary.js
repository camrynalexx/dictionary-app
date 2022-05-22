import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
      event.preventDefault();
      alert(`searching for ${keyword} definition`);

      // documentation: https://api.dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

      axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
      <div className="container">
        <div className="Dictionary pt-5">
          <img
            src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/100/000000/external-dictionary-foreign-language-smashingstocks-detailed-outline-smashing-stocks-2.png"
            alt="Dictionary logo"
            className="Dictionary-logo img-fluid"
          />
          <h1 className="text-center mt-3 mb-4">Dictionary</h1>
          <section className="border rounded shadow">
            <h2 className="text-center mb-3">
              What word would you like to look up?
            </h2>
            <form className="text-center" onSubmit={search}>
              <input
                type="Search"
                autoFocus={true}
                onChange={handleKeywordChange}
                size="65"
                placeholder="Hello..."
              />
            </form>
          </section>
          <section className="border rounded shadow">
            <Results results={results} />
          </section>
        </div>
      </div>
    );
}
