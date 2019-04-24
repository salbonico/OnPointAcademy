class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :firstname, :admin, :lastname, :completedcids, :email, :bio
  has_many :completes
end
