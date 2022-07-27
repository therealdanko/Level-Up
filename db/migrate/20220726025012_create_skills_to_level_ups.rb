class CreateSkillsToLevelUps < ActiveRecord::Migration[6.1]
  def change
    create_table :skills_to_level_ups do |t|
      t.references :user, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
