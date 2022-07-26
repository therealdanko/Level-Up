class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email_address
      t.boolean :is_admin, default: false
      t.string :profile_image

      t.timestamps
    end
  end
end
