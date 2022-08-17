class UsersController < ApplicationController

    # before_action :find_user
    
    skip_before_action :authenticate_user, only: [:create]

    def index	 
        render json: User.all	    
    end	     
    
      # GET '/me' ??
    def show
    if current_user
        render json: current_user, status: :ok
    else
        render json: { errors: "No active session" }, status: :unauthorized
    end
   
    end

    def convo_user
        find_user
        render json: find_user, status: :ok
    end
    
      # POST '/signup'
    def create
     user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

     def update
       current_user.update!(user_params)
        render json: current_user, status: :accepted        
    end


    #DELETE

    def destroy 
        current_user.destroy!
        head :no_content
    end

    
    private
    
     def user_params
        params.permit(:username, :password, :password_confirmation, :name, :email_address, :profile_image)
    end
    
  

    def find_user
        @user = User.find_by(id: params[:id])
    end

end
