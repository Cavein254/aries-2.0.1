import { Box, Button, TextField } from '@mui/material';
import './styles.css';

const Login = () => {
  return (
    <Box className="auth">
      <Box className="auth-container">
        <Box></Box>
        <form className="auth-form">
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
          <Button variant="contained">Login</Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
