class CompletesController < ApplicationController
	protect_from_forgery with: :exception
	skip_before_action :verify_authenticity_token

	def create
		user = User.find(session[:user_id])
		@complete = Complete.new(:course_id => params[:course_id], :user_id => user.id, :completed => true)
		@complete.save
		@user = User.find(session[:user_id])
		render json: @user.to_json, status: 201
	end

	def destroy
		complete = Complete.find(params[:course_id])
		if session[:user_id] != complete.user_id
			render json: "fail", status: 304
		else
			course= Course.find(complete.course_id)
			complete.destroy
			render json: "success", status: 201
		end
	end
end
