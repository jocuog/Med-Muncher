class Doctor < ApplicationRecord
    has_many :medications, dependent: :destroy
    has_many :patients, through: :medications
end
