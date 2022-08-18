class LearningSkillSerializer < ActiveModel::Serializer
  attributes :id, :user, :skill_name

  has_one  :user
  has_one  :skill
end
