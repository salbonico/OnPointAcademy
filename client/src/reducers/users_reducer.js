export default function users_reducer(state = {user: []}, action) {

    switch (action.type) {

      case 'SET_USER':

        const output= {

          user: action.payload
                  }
        return output

      default:
        return state;
    }
}
