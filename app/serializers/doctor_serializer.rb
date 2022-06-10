class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :phone, :email
end
