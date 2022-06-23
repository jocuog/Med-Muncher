class Patient < ApplicationRecord
    has_many :medications
    has_many :doctors, through: :medications

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true, uniqueness: true
    # validates :username, presence: true, uniqueness: true
end
