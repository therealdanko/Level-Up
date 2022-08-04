class UserSkill < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  
  def skill_name
 
   skill_id = self.skill.name
  
  end

end
