class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :frequency, :instructions, :count, :fill_date, :refill_date, :refills, :taken
  has_one :patient
  has_one :doctor
end
