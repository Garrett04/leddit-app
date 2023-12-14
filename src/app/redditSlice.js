const fetchData = async () => {
  const response = await fetch('https://www.reddit.com/r/adventofcode.json');
  const data = await response.json();
  Object.values(data.data.children).forEach((data, index) => console.log(data.data.title, data.data.url, data.data.author, data.data.created_utc, data.data.selftext_html))
  //console.log(data.data.children[0].data.title)
  //console.log(data)
}
fetchData();