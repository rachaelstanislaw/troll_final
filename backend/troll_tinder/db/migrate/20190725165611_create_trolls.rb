class CreateTrolls < ActiveRecord::Migration[5.2]
  def change
    create_table :trolls do |t|
      t.string :name
      t.integer :age
      t.string :enjoys

      t.timestamps
    end
  end
end
