require 'rails_helper'

RSpec.describe Api::V1::SpotsController, type: :controller do

    let!(:stetson_pond) {Spot.create(name: 'Stetson Pond', address: 'Plymouth St.', city: 'Pembroke', state: 'MA', boat_ramp: false, parking: true, dock: false ) }

    let!(:dunder_miflin) {Spot.create(name: 'Dunder Miflin', city: 'Pembroke', state: 'MA', parking: true)}

  describe "GET#index" do
    it "should return a list of all the spots" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["name"]).to eq "Stetson Pond"
      expect(returned_json[1]["name"]).to eq "Dunder Miflin"
    end
  end
end
