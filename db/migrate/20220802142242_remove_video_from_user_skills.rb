class RemoveVideoFromUserSkills < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_skills, :video, :string
  end
end
