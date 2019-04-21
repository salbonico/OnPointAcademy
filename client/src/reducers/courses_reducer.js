export default function courses_reducer(state = {loading: false, courses: []}, action) {

    switch (action.type) {
        case 'LOADING_COURSES':
        return {loading: true, courses: []}

        case 'FETCH_COURSES':

        const output= {
          loading:false,
          courses: action.payload,
                  }
        return output

        default:
        return state;
    }
}
