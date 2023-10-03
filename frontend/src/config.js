let API_URL = '';

if (process.env.REACT_APP_NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000';
} else if (process.env.REACT_APP_NODE_ENV === 'production') {
  API_URL = 'https://kingfood.vercel.app';
}

export const BASE_URL = API_URL;
