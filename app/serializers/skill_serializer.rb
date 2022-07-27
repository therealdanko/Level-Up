class SkillSerializer < ActiveModel::Serializer
  
  attributes :id, :name
  has_many :user_skills

end
