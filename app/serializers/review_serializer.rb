class ReviewSerializer < ActiveModel::Serializer
  attributes :body, :rating, :season, :id

  belongs_to :spot
end
