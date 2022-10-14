async function start() {
  
  try {
    const response = await fetch('https://celebrated-peony-ac4e26.netlify.app/.netlify/functions/api/json')

    if(response === null)
      throw new Error("Backend unreachable")

    const jsonRes = await response.json()
  
    const p = document.getElementById("responseP")
    p.textContent = jsonRes.message
  
    console.log(jsonRes.message);
  } catch (error) {
    console.log(error)
  }
}

start()