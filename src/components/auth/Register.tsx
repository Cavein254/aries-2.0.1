import { Box, Button, InputLabel, TextField } from '@mui/material';
import './styles.css';

const Login = () => {
  return (
    <Box className="auth">
      <Box className="auth-container">
        <Box></Box>
        <form className="auth-form">
          <InputLabel>Username</InputLabel>
          <TextField
            variant="standard"
            placeholder="Enter your username"
            type="text"
          />
          <InputLabel>Email</InputLabel>
          <TextField
            variant="standard"
            placeholder="Enter your Email Address"
            type="email"
          />
          <InputLabel>Password</InputLabel>
          <TextField
            variant="standard"
            placeholder="Enter your Password"
            type="password"
          />
          <InputLabel>Confirm Password</InputLabel>
          <TextField
            variant="standard"
            placeholder="Re-enter your password"
            type="password"
          />
          <Button variant="contained">Login</Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
