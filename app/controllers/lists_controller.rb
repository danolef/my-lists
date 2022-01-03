class ListsController < ApplicationController

def index
    lists= current_user.List
    render json: lists
end

def create
    item= current_user.list.create!(list_params)
    render json: item, status: :created
end

private

def list_params
    params.permit(:name)
end
end
