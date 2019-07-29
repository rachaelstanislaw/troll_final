class RemoveImageFromTrolls < ActiveRecord::Migration[5.2]
  def change
    remove_column :trolls, :image, :string
  end
end
