import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Description() {
  return (
    <Typography  style={{textAlign: "center"}}  sx={{ mt: 3, mb: 3 }} color="text.secondary">
      이 사이트는 현재 개발중이며 코드는 <Link href="https://github.com/Roharui/Novel_Statics_React">여기</Link>서
      확인이 가능합니다.
    </Typography>
  );
}
