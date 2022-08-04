class CreateLevelUpSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :level_up_skills do |t|
      t.string :name

      t.timestamps
    end
  end
end
