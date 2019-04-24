class UsersController < ApplicationController
protect_from_forgery with: :exception
skip_before_action :verify_authenticity_token

	def new
		if session[:user_id] != nil
			redirect_to "/home"
		else
			@user = User.new
		end
	end

	def admin
		redirect_to "/home" unless isadmin?
		@users = User.all
	end

	def create
		if session[:user_id] != nil
			redirect_to '/home'
		else
			  @user = User.new(user_params)
				if @user.save
	     		session[:user_id] = @user.id
		 		redirect_to "/home"
	    	else
	     		render :new
				end
		end
	end

	def home
		if session[:user_id] == nil
			redirect_to '/login'
		else
			@user = User.find(session[:user_id])
			@complete = @user.completes
		end
	end

	def edit
		redirect_to "/home" unless isadmin?
		@user = User.find(params[:id])
	end

	def update
	    @user = User.find(params[:id])
			if session[:user_id] != @user.id
				render json: "fail", status: 304
			else
			  @user.update(user_params)
		    if @user.save
					respond_to do |format|
		 					 format.html { redirect_to '/home'}
		 					 format.json { render json: @user, status: 200 }
		 			end
				else
					render json: "fail", status: 304
				end
			end
	end

	def show
	   @user = User.find_by(name: params[:name])
		 respond_to do |format|
					 format.html { redirect_to '/home'}
					 format.json { render json: @user, status: 200 }
		 end
	end

	def destroy
		redirect_to "/home" unless isadmin?
		user = User.find(params[:format])
	    user.destroy
	    flash[:notice] = "You have deleted #{user.name}."
	    redirect_to "/home"
	end

	private

	  def user_params
	    params.require(:user).permit(:name, :password, :firstname, :completes, :lastname, :email, :admin, :bio)
	  end

end
