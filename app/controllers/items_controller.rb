class ItemsController < ApplicationController
    
    def index
        render json: Item.all
    end
    
    def create
        item= Item.create!(list_params)
        render json: item, status: :created
    end

    def destroy
        item= Item.find_by(id: params[:id])
        item.destroy
        head :no_content
    end

    def update
        item= Item.find_by(id: params[:id])
        item.update({name:params[:name], site_url:params[:site_url], image_url:params[:image_url], price:params[:price]})
        render json: item
    end

    private
    
    def list_params
        params.permit(:name, :image_url, :site_url, :price)
    end

end
