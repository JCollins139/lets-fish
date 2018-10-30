class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false, unique: true
      t.string :address
      t.string :city
      t.string :state, null: false
      t.boolean :boat_ramp
      t.boolean :parking
      t.boolean :dock

      t.timestamps null: false
    end
  end
end
