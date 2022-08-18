class TeachingSkillSerializer < ActiveModel::Serializer
  
  attributes :id, :description, :credentials, :skill_id, :skill_name
  
  has_one :user
  has_one :skill


end
