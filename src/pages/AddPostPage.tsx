import { Box, Paper } from '@mui/material';

const AddPostPage = () => {
  return (
    <Box>
      <Paper>
        <textarea rows={20} className="create-post" />
      </Paper>
    </Box>
  );
};

export default AddPostPage;
