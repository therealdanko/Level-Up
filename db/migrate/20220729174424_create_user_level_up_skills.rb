class CreateUserLevelUpSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :user_level_up_skills do |t|
      t.references :user, null: false, foreign_key: true
      t.references :level_up_skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
