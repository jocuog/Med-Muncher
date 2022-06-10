class ChangeFrequencyToIntegerInMedications < ActiveRecord::Migration[6.1]
  def change
    remove_column :medications, :frequency
    add_column :medications, :frequency, :integer 
  end
end
