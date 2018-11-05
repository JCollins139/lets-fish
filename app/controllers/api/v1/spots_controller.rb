class Api::V1::SpotsController < ApplicationController
  def index
    render json: Spot.all, adapter: :json
  end

  def show
    render json: Spot.find(params[:id])
  end

end
