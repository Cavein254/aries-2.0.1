import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllposts } from '../../features/posts/postsSlice';

type PostProps = {
  id: number;
  message: string;
};
const PostList = () => {
  const posts = useSelector<PostProps[]>(selectAllposts);
  const renderedPost = posts.map((post) => {
    return (
      <Box key={post.id}>
        <Typography variant="h4">{post.message.substring(0, 100)}</Typography>
      </Box>
    );
  });
  return <div>{renderedPost}</div>;
};

export default PostList;
