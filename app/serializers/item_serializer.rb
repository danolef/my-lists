class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :site_url, :price
end
