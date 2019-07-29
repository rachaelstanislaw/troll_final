class AddImageToTrolls < ActiveRecord::Migration[5.2]
  def change
    add_column :trolls, :image, :string
  end
end
