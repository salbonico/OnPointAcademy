export function updateProfile(input,route) {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
  }

  return (dispatch) => {
    fetch(`/users/edit.json`, data)
      .then(response => response.json())
      .then(route())
      .catch(err => console.log(err)
    )
  }
}
