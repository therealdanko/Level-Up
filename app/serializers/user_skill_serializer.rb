class UserSkillSerializer < ActiveModel::Serializer
  
  attributes :id, :description, :experience, :credentials, :skill_id, :skill_name
  
  has_one :user
  has_one :skill


end
