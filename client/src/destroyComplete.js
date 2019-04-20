export function destroyComplete(input, route) {

  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
  }

return (dispatch) => {
    fetch(`/completes/destroy.json`, data)
      .then(response => response.json())
      .catch(err => console.log(err))
}
}
