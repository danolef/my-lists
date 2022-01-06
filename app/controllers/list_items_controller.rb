class ListItemsController < ApplicationController

    def index
        render json: ListItem.all
    end
    
    def show
        list= List.find_by(params[:id])
        list_items= list.list_items
        render json: list_items
    end

    def create
        list_item= List_item.create(list_item_params)
        render json: list_item, status: :created
    end

private

    def list_item_params
        params.permit(:item_id, :list_id)
    end
end
