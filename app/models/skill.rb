class Skill < ApplicationRecord
  has_many :teaching_skills, dependent: :destroy
  has_many :teachers, through: :teaching_skills, source: :user
  has_many :learning_skills, dependent: :destroy
  has_many :learners, through: :learning_skills, source: :user
 
  # validates presence: true, uniqueness: true

def teaching_skill_users
  
  users = self.teachers

end

end