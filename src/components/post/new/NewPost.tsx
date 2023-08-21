import { Box, Paper } from '@mui/material';
import './styles.css';
const NewPost = () => {
  return (
    <Box>
      <Paper>
        <Box className="post-wrapper">
          <textarea rows={20} className="create-post" />
        </Box>
      </Paper>
    </Box>
  );
};

export default NewPost;
