class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :frequency, :instructions, :initial_amount, :remaining, :fill_date, :refill_date, :refills, :refills_remaining, :taken, :patient_id, :doctor_id
  has_one :patient
  has_one :doctor
end
