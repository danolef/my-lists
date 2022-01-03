class ListSerializer < ActiveModel::Serializer
  attributes :name
  has_one :user
end
