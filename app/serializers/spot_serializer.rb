class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :boat_ramp, :parking, :dock

  has_many :visits
  has_many :reviews
end
