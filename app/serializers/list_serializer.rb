class ListSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_one :user
end
