export function createComplete(input,route) {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
  }

return (dispatch) => {
    fetch(`/completes/new.json`, data)
      .then(response => response.json())
      .then(route())
      .catch(err => console.log(err))
}
}
