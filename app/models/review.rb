class Review < ApplicationRecord

  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :body, presence: true
  validates :season, presence: true

  belongs_to :spot
end
