import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.css';
const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <Box
      sx={{
        margin: '1rem',
        backgroundColor: '#fff',
      }}
    >
      <Box>
        <TextField
          type="text"
          placeholder="Enter Title"
          sx={{ width: '100%', marginBottom: '1rem' }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Box>
      <Paper>
        <Box className="post-wrapper">
          <textarea
            rows={20}
            className="create-post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </Box>
      </Paper>
      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export default NewPost;
