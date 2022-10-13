async function start() {
  const response = await fetch('http://localhost:8885/.netlify/functions/api/json')
  const jsonRes = await response.json()

  const p = document.getElementById("responseP")
  p.textContent = jsonRes.message

  console.log(jsonRes.message);
}

start()