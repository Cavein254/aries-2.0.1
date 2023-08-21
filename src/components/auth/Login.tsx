import { Box, TextField } from '@mui/material';
import './styles.css';

const Login = () => {
  return (
    <Box>
      <Box></Box>
      <Box>
        <TextField
          variant="standard"
          placeholder="Enter your Email Address"
          type="email"
        />
        <TextField
          variant="standard"
          placeholder="Enter your Password"
          type="password"
        />
      </Box>
    </Box>
  );
};

export default Login;
