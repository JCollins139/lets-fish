class Api::V1::SpotsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Spot.all, adapter: :json
  end

  def show
    render json: Spot.find(params[:id])
  end

  # def create
  #
  # end

end
