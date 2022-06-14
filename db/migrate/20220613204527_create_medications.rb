class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.integer :dosage
      t.integer :frequency
      t.text :instructions
      t.integer :initial_amount
      t.integer :remaining
      t.integer :refills
      t.integer :refills_remaining
      t.boolean :taken
      t.datetime :fill_date
      t.datetime :refill_date
      t.references :patient, null: false, foreign_key: true
      t.references :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
