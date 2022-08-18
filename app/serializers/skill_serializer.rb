class SkillSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :teaching_skill_users
  
  # , :skill_users
  
  has_many :teaching_skills
  has_many :learning_skills
  has_many :teachers
  has_many :learners

end
