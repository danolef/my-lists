class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticate_user
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
  def authenticate_user
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end

  private

  def render_not_found(excepetion)
    render json: {error: "#{excepetion.model} not found"}, status: :not_found
  end

  def render_invalid(excepetion)
    render json: {errors: excepetion.record.errors.full_messages}, status: :unprocessable_entity
  end

  def authorize
    @current_user ||= User.find_by(id: session[:user_id])
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @current_user
  end


end
