class ListItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :list
  has_one :item
end
