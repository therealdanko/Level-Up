class CreateTeachingSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :teaching_skills do |t|
      t.references :user, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true
      t.string :description
      t.string :credentials

      t.timestamps
    end
  end
end
