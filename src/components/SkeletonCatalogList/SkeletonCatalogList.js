import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { styleImg, styleWrapper } from './SkeletonCatalogList.styled';

export default function SkeletonCatalogList() {
  return (
    <Box wrap="nowrap" sx={styleWrapper}>
      {Array.from(new Array(20)).map((item, index) => (
        <Box key={index} sx={{ p: 2, bgcolor: '#fff', borderRadius: 2 }}>
          <Skeleton variant="rectangular" sx={styleImg} />
          <Box>
            <Skeleton
              width="75%"
              sx={{ height: '20px', borderRadius: '8px', mb: '6px' }}
            />
            <Skeleton
              width="50%"
              sx={{ height: '20px', borderRadius: '8px', mb: '24px' }}
            />
            <Skeleton
              width="25%"
              sx={{ height: '20px', borderRadius: '8px', mb: '24px' }}
            />
            <Skeleton
              width="60%"
              sx={{ height: '20px', borderRadius: '8px' }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
