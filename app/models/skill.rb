class Skill < ApplicationRecord
  has_many :user_skills, dependent: :destroy
  has_many :users, through: :user_skills

  # validates presence: true, uniqueness: true

  def skill_users

    skill_users = self.users
  end

end
