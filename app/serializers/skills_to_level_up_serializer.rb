class SkillsToLevelUpSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :skill
end
