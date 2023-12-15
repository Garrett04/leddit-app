const axios = require('axios');
const subredditInput = 'popular'; 
const postsPerRequest = 10;


const fetchRedditData = async () => {
    try {
        
    const response = await axios.get(`https://www.reddit.com/r/${subredditInput}.json?limit=${postsPerRequest}`); // not sure this is not liked
    return response;

    } catch(error) {
        console.log(error)
    }
}; 

const getData = async () => {
    try {
      const response = await fetchRedditData();
      console.log(response.data.data.children[1].data.title);
    } catch (error) {

      console.log(error);
    }
  };
  

getData();