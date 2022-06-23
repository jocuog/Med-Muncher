class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :frequency, :instructions, :initial_amount, :remaining, :fill_date, :refill_date, :patient_id, :doctor_id
  has_one :patient
  has_one :doctor

  # validates :dosage, :frequency, :initial_amount, :refills, :remaining, numericality: ( only_integer: true )
end
