class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :dosage
      t.integer :frequency
      t.text :instructions
      t.integer :count
      t.datetime :fill_date
      t.datetime :refill_date
      t.integer :refills
      t.boolean :taken
      t.belongs_to :patient, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
