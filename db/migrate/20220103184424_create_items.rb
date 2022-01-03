class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image_url
      t.string :site_url
      t.float :price

      t.timestamps
    end
  end
end
