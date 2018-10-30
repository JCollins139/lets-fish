class SpotsController < ApplicationController
  def index
    @spots = Spot.all
  end

  def new
    @spot = Spot.new
  end

  private

  def spot_params
    params.require(:spot).permit(:name, :address, :city, :state, :boat_ramp, :parking)
  end
end
