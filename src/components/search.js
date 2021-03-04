import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      debugger;
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResult(data.query.search);
    };

    if (term && !result) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [term]);

  const renderedResults = result.map((result, index) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
