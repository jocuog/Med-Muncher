class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :avatar, :image, :points, :level, :password
end
