class ListsController < ApplicationController

def index
    render json: List.all
end

def create
    list= @current_user.lists.create!(list_params)
    render json: list, status: :created
end

def show
    list= List.find(params[:id])
    render json: list
end

def destroy
    list= List.find_by(id: params[:id])
    list.destroy
    head :no_content
end

private

def list_params
    params.permit(:name)
end

end
