class Skill < ApplicationRecord
  has_many :user_skills, dependent: :destroy
  has_many :users, through: :user_skills
  has_many :skills_to_level_up, dependent: :destroy
  has_many :users, through: :skills_to_level_up
end
