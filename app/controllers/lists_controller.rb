class ListsController < ApplicationController

def index
    lists= current_user.List
    render json: lists
end

def create
    list= current_user.list.create!(list_params)
    render json: list, status: :created
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
