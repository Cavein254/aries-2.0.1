import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    message: 'This is the first post',
  },
  {
    id: 2,
    message: 'This is the second post',
  },
  {
    id: 3,
    message: 'This is the third post',
  },
  {
    id: 4,
    message: 'This is the fourth post',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
