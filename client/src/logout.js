export function logout(route) {

  return (dispatch) => {
    fetch('/logout.json')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch({
        type: 'CLEAR_USER'
      })
    })
   .then(route())
  }
}
