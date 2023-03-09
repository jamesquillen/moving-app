class CreateBoxes < ActiveRecord::Migration[7.0]
  def change
    create_table :boxes do |t|
      t.string :name
      t.string :contents
      t.string :size
      t.integer :user_id

      t.timestamps
    end
  end
end
