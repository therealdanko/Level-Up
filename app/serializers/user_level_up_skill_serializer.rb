class UserLevelUpSkillSerializer < ActiveModel::Serializer
  attributes :id, :user, :level_up_skill

  has_one  :user
  has_one  :level_up_skill
end
