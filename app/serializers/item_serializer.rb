class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :site_url, :price


  # has_many :list_items
  has_many :lists, through: :list_items
end
