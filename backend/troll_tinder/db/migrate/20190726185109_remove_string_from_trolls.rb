class RemoveStringFromTrolls < ActiveRecord::Migration[5.2]
  def change
    remove_column :trolls, :string, :string
  end
end
