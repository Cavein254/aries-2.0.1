import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

type PostProps = {
  id: number;
  message: string;
};
const PostList = () => {
  const posts = useSelector<PostProps[]>((state) => state.posts);
  const renderedPost = posts.map((post) => {
    return (
      <Box key={post.id}>
        <Typography variant="h4">{post.message}</Typography>
      </Box>
    );
  });
  return <div>{renderedPost}</div>;
};

export default PostList;
