import { get } from 'axios';

const getDataFromAPI = (url) => {
  return get(url)
    .then(destructuredData);
};

const character = () => {
  return get('https://rickandmortyapi.com/api/character/1')
    .then(destructuredData)
};

const destructuredData = ({ data }) => data;

export { getDataFromAPI, character };