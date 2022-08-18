class LearningSkill < ApplicationRecord
    belongs_to :user
    belongs_to :skill

    # validates :skill, uniqueness: {scope: :user}

  
  def skill_name
 
   skill_id = self.skill.name
  
  end

end
