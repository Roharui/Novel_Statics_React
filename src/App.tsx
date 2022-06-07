import React, { useState } from 'react';
import { search } from './api/api.sender';

import Charts from './chart/Charts';
import { AnalyzeNovelDto } from './chart/dto/novel-analyze.dto';

function App() {

  const [show, setShow] = useState(false);
  const [link, setLink] = useState("")
  const [result, setResult] = useState(new AnalyzeNovelDto({}));

  return (
    <div className="App">
      <input type="text" placeholder='link...' onChange={(e) => setLink(e.target.value)}/>
      <button onClick={() => {
        search(link)
        .then(res => setResult(res))
        .then(() => setShow(true))
      }}>Search</button>
      {show ? <Charts result={result} /> : null}
    </div>
  );
}

export default App;
