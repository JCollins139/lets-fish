class Api::V1::ReviewsController < ApplicationController


  def index
    @spot = Spot.find(params[:spot_id])
    render json: @spot.reviews, adapter: :json
  end

  def show
    render json: Review.find(params[:id])
  end

  def create

    @spot = Spot.find(params[:spot_id])

    @review = Review.new(review_params)
    @review.spot = @spot

    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors.full_messages }
    end
  end
end
