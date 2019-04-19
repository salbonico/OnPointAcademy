export function nextCourse(thisuser, courses) {



  function completeCheck(course,user) {
    return course.completes.find(function (complete) {return complete.user_id === user.id})? true:false
  }

 function checkNoncomplete(user,courses) {
  return courses.find(function (element) {return completeCheck(element,user) === false})
 }


  let coursecheck = courses
  let output = checkNoncomplete(thisuser,courses)

return output

}
