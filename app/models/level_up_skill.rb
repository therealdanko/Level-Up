class LevelUpSkill < ApplicationRecord
    has_many :user_level_up_skills, dependent: :destroy
    has_many :users, through: :user_level_up_skills
end
