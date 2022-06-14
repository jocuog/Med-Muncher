class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :username
      t.string :avatar
      t.string :image
      t.integer :points
      t.integer :level
      t.string :password_digest

      t.timestamps
    end
  end
end
