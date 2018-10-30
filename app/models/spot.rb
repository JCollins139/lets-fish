class Spot < ApplicationRecord

  validates :name, presence: true, uniqueness: true
  validates :state, presence: true

  has_many :visits
  has_many :reviews
  has_many :catches
  has_many :fish, through: :catches

end
