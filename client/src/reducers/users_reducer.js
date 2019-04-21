export default function users_reducer(state = {user: []}, action) {

    switch (action.type) {

      case 'SET_USER':
      const output= {
        user: action.payload
        }
      return output

      case 'CLEAR_USER':

      const output2= {
        user: []
      }
      return output2

      default:
      return state;
    }
}
