const request = async ({
  path, method, data, token,
}) => {
  const url = `${process.env.REACT_APP_API_URL}/${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => console.log(`Error: ${error}`));
  return response;
};

export const login = async (data) => request({
  path: 'auth', method: 'post', data,
});

export const signUp = async (data) => request({
  path: 'users', method: 'post', data,
});

export const validateToken = async (token) => request({
  path: 'auth/introspect', method: 'post', token,
});

export const createPost = async (data, token) => request({
  path: 'posts', method: 'post', data, token,
});

export const updatePost = async (postId, data, token) => request({
  path: `posts/${postId}`, method: 'put', data, token,
});

export const deletePost = async (postId, token) => request({
  path: `posts/${postId}`, method: 'delete', token,
});

export const listPosts = async (token) => request({
  path: 'posts', method: 'get', token,
});
