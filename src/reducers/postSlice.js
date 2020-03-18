import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    receivePosts(state, action) {
      action.payload.forEach((post) => state.push(post));
    },
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const {
  receivePosts,
  addPost,
} = postsSlice.actions;

export default postsSlice.reducer;
