import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Description from './Description';
import SearchBar from './component/Search';

import { AnalyzeNovelDto } from './chart/dto/novel-analyze.dto';
import { search } from './api/api.sender';
import Charts from './chart/Charts';

export default function App() {

  const [show, setShow] = React.useState(false);
  const [link, setLink] = React.useState("")
  const [result, setResult] = React.useState(new AnalyzeNovelDto({}));

  return (
    <div>
      <Container maxWidth="sm">
        <title>웹소설 분석 사이트</title>
        <Box sx={{ my: 4 }}>
          <Typography style={{textAlign: "center"}} variant="h4" component="h1" gutterBottom>
            웹소설 분석 사이트
          </Typography>
          <SearchBar 
            onChange={(e) => setLink(e.target.value)} 
            onEnter={() => {
              search(link)
              .then((res) => setResult(res))
              .then(() => setShow(true))
            }} />
          <Description />
        </Box>
      </Container>
        <Box>
          {show ? <Charts result={result} /> : null}
        </Box>
    </div>
  );
}
