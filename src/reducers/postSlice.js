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
    patchPost(state, action) {
      const { _id, text, sharedWith } = action.payload;
      const postToUpdate = state.find((post) => post._id === _id);
      if (postToUpdate) {
        postToUpdate.text = text;
        postToUpdate.sharedWith = sharedWith;
      }
    },
    removePost(state, action) {
      const postToRemove = state.find((post) => post._id === action.payload);
      state.splice(state.indexOf(postToRemove), 1);
    },
  },
});

export const {
  receivePosts,
  addPost,
  patchPost,
  removePost,
} = postsSlice.actions;

export default postsSlice.reducer;
