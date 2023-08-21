import { Box, Paper, TextareaAutosize } from '@mui/material';
import React from 'react';
import Editor from '../editor/Editor';

const Pad = () => {
  const [userInput, setUserInput] = React.useState('');
  return (
    <Box>
      <Paper>
        <TextareaAutosize />
      </Paper>
      <div>
        <h1>Enter your text</h1>
        <textarea
          rows={5}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></textarea>
        <Editor userInput={userInput} />
      </div>
    </Box>
  );
};

export default Pad;
