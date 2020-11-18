import axios from 'axios';

export async function fetchSomeData() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
}
