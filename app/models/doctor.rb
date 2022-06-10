class Doctor < ApplicationRecord
    has_many :medications
    has_many :patients, through: :medications
end
