async function start() {
  const response = await fetch('http://localhost:8888/.netlify/functions/api/json')
  const jsonRes = await response.json()
  console.log(jsonRes);
}

start()