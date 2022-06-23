class RemoveRefillsRefillRemainingTakenFromMedications < ActiveRecord::Migration[6.1]
  def change
    remove_column :medications, :refills, :integer
    remove_column :medications, :refills_remaining, :integer
    remove_column :medications, :taken, :boolean
  end
end
