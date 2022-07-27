class UserSkillSerializer < ActiveModel::Serializer
  
  attributes :id, :video, :description, :experience, :credentials
  
  belongs_to :user
  belongs_to :skill

end
