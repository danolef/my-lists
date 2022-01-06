class ListsController < ApplicationController
skip_before_action :authorize

def index
    render json: List.all
end

def create
    list= Lists.create!(list_params)
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
