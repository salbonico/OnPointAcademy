class SessionsController < ApplicationController
protect_from_forgery with: :exception
skip_before_action :verify_authenticity_token

	def new
		@users = User.all
	end

	def create
		if params[:name] != nil && params[:name] != ""
				@user = User.find_by(name: params[:name])
    		return head(:forbidden) unless @user.authenticate(params[:password])
    		session[:user_id] = @user.id
				respond_to do |format|
		      		format.html { redirect_to '/home'}
		      		format.json { render json: @user, status: 200 }
		    end
		elsif session[:user_id] != [] && session[:user_id] != nil
				redirect_to '/home'
		else
				redirect_to '/login'
		end
	end

	def destroy
		session.delete :user_id
		respond_to do |format|
				format.html { redirect_to '/login'}
				format.json { render json: {logoutstatus:"success"}, status: 200 }
		end
	end

	def show
		currentUser = User.find(session[:user_id])
		render json: currentUser.to_json(only: [:id, :name, :email, :bio, :firstname, :lastname], include: [:completes])
	end

  def socialcreate
    	if session[:user_id] != [] && session[:user_id] != nil
    		redirect_to '/home'
    	else
		    @user = User.find_or_create_by(uid: auth['uid']) do |u|
			    u.name = auth['info']['name']
			    u.email = auth['info']['email']
			    u.password = auth['info']['email']
			    u.image = auth['info']['image']
				end
		    session[:user_id] = @user.id
		    redirect_to '/home'
    	end
  end

	private

	def auth
	  request.env['omniauth.auth']
	end
end
