import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
      <div className="container">
        <div className="Dictionary">
          <img
            src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/100/000000/external-dictionary-foreign-language-smashingstocks-detailed-outline-smashing-stocks-2.png"
            alt="Dictionary logo"
            className="Dictionary-logo img-fluid"
          />
          <h1 className="text-center">Dictionary</h1>
          <section className="border rounded shadow">
            <h2 className="text-center">
              What word would you like to look up?
            </h2>
            <form className="text-center" onSubmit={search}>
              <input
                type="Search"
                autoFocus={true}
                onChange={handleKeywordChange}
                size="70"
                placeholder="Cat..."
              />
            </form>
          </section>
        </div>
      </div>
    );
}
