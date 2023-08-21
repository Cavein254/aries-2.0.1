import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'This is the first post',
    body: 'This is body one',
  },
  {
    id: 2,
    title: 'This is the second post',
    body: 'This is body two',
  },
  {
    id: 3,
    title: 'This is the third post',
    body: 'This is body three',
  },
  {
    id: 4,
    title: 'This is the fourth post',
    body: 'This is body four',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
          },
        };
      },
    },
  },
});

export const selectAllposts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
