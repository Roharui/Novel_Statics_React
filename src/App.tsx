import React, { useState } from 'react';

import Charts from './chart/Charts';
import { AnalyzeNovelDto } from './chart/dto/novel-analyze.dto';

function App() {

  const [show, setShow] = useState(false);

  const [link, setLink] = useState("")

  const [result, setResult] = useState(new AnalyzeNovelDto({}));

  function search() {
    fetch("http://localhost:3000/n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link
      }),
    })
    .then(res => res.json())
    .then(res => setResult(res))
    .then(() => setShow(true))
  }

  return (
    <div className="App">
      <input type="text" placeholder='link...' onChange={(e) => setLink(e.target.value)}/>
      <button onClick={() => search()}>Search</button>
      {show ? <Charts result={result} /> : null}
    </div>
  );
}

export default App;
