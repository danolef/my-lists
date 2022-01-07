class Item < ApplicationRecord
    has_many :list_items, dependent: :destroy
    has_many :lists, through: :list_items
end
