class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
  # post '/items' do
  #   item = Item.create(name: params[:name], 
  #                     image_url: params[:image_url],
  #                     site_url: params[:site_url],
  #                     price: params[:price] )
  #   render json: item
  # end
  
  private
  
  def render_not_found(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def render_invalid(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def authorize
    @current_user ||= User.find_by(id: session[:user_id])
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @current_user
  end



end
