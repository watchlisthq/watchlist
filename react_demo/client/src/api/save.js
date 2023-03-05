export async function readData() {
  let fetchData = async() => {
    let resp = await fetch('http://localhost:3000/save-data.json');
    let final = await resp.text();
    let json = JSON.parse(final);
    return json
  }
  return await fetchData();
}