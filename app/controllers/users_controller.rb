class UsersController < ApplicationController

skip_before_action :authenticate_user, only: [:create, :show]    

def create
    user= User.create(user.params)
    session[:user_id] = user.id
    render json: user, status: :ok
end

def show
    if current_user
        render json: current_user, status: :ok
    else
        render json: "No current session stored", status: :unauthorized
    end
end

private

    def user_params
        params.permit(:username, :email, :password)
    end

end
