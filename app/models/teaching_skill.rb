require'active_support'

class TeachingSkill < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  validates :skill, uniqueness: {scope: :user}

  # validate :check, on: :create

  # def check
   
  #     return if skill_id.present? && .skills.ids.includes(skill_id)
  #       errors.add :teaching_skill, "Already have that skill, pick another one!"

  # end
  
  # def ts_ids
  #   # skills = current_user.skills.map((skill) => skill.id)
  #    self.map((skill) => skill.id)
  # end


  def skill_name
 
   skill_id = self.skill.name
  
  end

end
