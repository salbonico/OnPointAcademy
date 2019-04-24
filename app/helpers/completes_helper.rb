module CompletesHelper

	def iscompleted(course)
		user = User.find(session[:user_id])
		if user.completes.find_by(:course_id => course.id)
			return true
		else
			return false
		end
	end

	def uncompleteid(course)
		user = User.find(session[:user_id])
		if user.completes.find_by(:course_id => course.id)
			complete = user.completes.find_by(:course_id => course.id)
			return complete.id
		else
			return ""
		end
	end
end
