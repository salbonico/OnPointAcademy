export function checkSession(route) {

  return (dispatch) => {
    fetch('/session.json')
    .then(response => response.json())
    .then(session => {if (session != null)
      {console.log(session)
        dispatch({
          type: 'SET_USER',
          payload: session
      })
      route()}})
    .catch(err => console.log("No Session"))
  }
}
