class SkillSerializer < ActiveModel::Serializer
  
  attributes :id, :name
  
  # , :skill_users
  
  has_many :users
  has_many :user_skills
  
end
