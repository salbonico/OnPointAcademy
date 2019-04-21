export function checkSession(route) {

  return (dispatch) => {
    fetch('/session.json')
    .then(response => response.json())
    .then(session => {if (session != null)
      { dispatch({
          type: 'SET_USER',
          payload: session
        })
      }})
    .catch(err => route())
  }
}
