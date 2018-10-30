class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :body, null: false
      t.string :season, null: false

      t.belongs_to :spot

      t.timestamps null: false
    end
  end
end
