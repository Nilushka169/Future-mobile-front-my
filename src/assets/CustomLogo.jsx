import { Box } from '@mui/material';

function CustomLogo() {
  return (
    <Box
      component="span" // use 'span' or 'div' to wrap
      sx={{ cursor: 'pointer', display: 'inline-block', width: 50 }}
    >
      <svg
        width="100%" 
        height="auto"
        viewBox="0 0 30 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.2655 0H2.73446C1.22426 0 0 1.17387 0 2.62192V15.3781C0 16.8261 1.22426 18 2.73446 18H27.2655C28.7757 18 30 16.8261 30 15.3781V2.62192C30 1.17387 28.7757 0 27.2655 0Z" fill="black"/>
        <path d="M4.71562 6.70656H2.89532V15.2702H4.71562V6.70656Z" fill="white"/>
        <path d="M24.7456 2.85343H22.9253V15.2407H24.7456V2.85343Z" fill="white"/>
        <path d="M10.2489 8.45194V6.70656H3.48912V8.45194H10.2489Z" fill="white"/>
        <path d="M13.3801 4.47279V2.72741L2.89531 2.72741V4.47279L13.3801 4.47279Z" fill="white"/>
        <path d="M17.9835 9.83983L19.2953 8.6298L13.3776 2.73145L12.0658 3.94148L17.9835 9.83983Z" fill="white"/>
        <path d="M16.9304 8.38196L18.1924 9.6398L24.1903 4.10735L22.9283 2.84951L16.9304 8.38196Z" fill="white"/>
        <path d="M23.4762 13.9823L24.7388 15.2393L27.106 13.0557V10.6342L23.4762 13.9823Z" fill="white"/>
      </svg>
    </Box>
  );
}

export default CustomLogo;
