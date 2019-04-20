export function createComplete(input) {

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
      .catch(err => console.log(err))
}
}
