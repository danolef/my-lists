class ListItemsController < ApplicationController

    def show
        list= List.find_by(params[:id])
        list_items= list.list_items
        render json; list_items
    end

end
