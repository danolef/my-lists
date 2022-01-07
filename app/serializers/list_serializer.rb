class ListSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_one :user

  # has_many :list_items
  has_many :items, through: :list_items
end
