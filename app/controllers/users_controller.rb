class UsersController < ApplicationController

  def index
    @spots = Spot.all
  end

end
