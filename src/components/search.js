import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const search = async () => {

        debugger;
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
        origin: '*',
        format:'json',
        srsearch: term
        }
      });

      setResult(data);
    };

    if(term){
        search();
    }
  }, [term]);

  const renderedResults = result.map((result)=>{
      return (<div className="item">
            <div className="content">
            <div className="header">{result.title}</div>
            </div>
      </div>)
  })

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
    </div>
  );
};

export default Search;
