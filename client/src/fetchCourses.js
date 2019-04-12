export function fetchCourses() {

  return (dispatch) => {
    fetch('/courses.json')
    .then(response => response.json())
    .then(courses => dispatch({type: 'FETCH_COURSES', payload: courses}))
  }
}
