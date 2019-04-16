import { withRouter, Link } from 'react-router-dom'

export function fetchUser(input, route) {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
  }

return (dispatch) => {
    fetch(`/login.json`, data)
      .then(response => response.json())
      .then(response2 => {
        if (response2 != null)
          {console.log(response2)
            dispatch({
              type: 'SET_USER',
              payload: response2
          })
          {route()}
        }
        else
        {
          {alert("Incorrect Username or Password")}
        }
          })
      .catch(err => alert("Incorrect Username or Password"))
}
}
