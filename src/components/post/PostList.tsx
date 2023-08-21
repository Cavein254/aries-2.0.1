import { Box, Typography } from '@mui/material';
import { useGetPostsQuery } from '../../features/posts/api/apiSlice';

type PostProps = {
  id: number;
  message: string;
};
const PostList = () => {
  //   const posts = useSelector<PostProps[]>(selectAllposts);
  const {
    data: posts,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetPostsQuery();
  console.log(posts);
  console.log(posts);
  const renderedPost = posts.map((post) => {
    return (
      <Box key={post.id}>
        <Typography variant="h1">{post?.title}</Typography>
        <Typography variant="h4">{post?.body?.substring(0, 100)}</Typography>
      </Box>
    );
  });
  return <div>{renderedPost}</div>;
};

export default PostList;
