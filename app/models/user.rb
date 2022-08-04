class User < ApplicationRecord
  has_many :user_skills, dependent: :destroy
  has_many :skills, through: :user_skills
  has_many :user_level_up_skills, dependent: :destroy
  has_many :level_up_skills, through: :user_level_up_skills
  

  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create

  validates :name, presence: true
  validates :email_address, presence: true, uniqueness: true
  validate :password_lower_case, on: :create

  validate :password_uppercase, on: :create

  validate :password_special_char, on: :create

  validate :password_contains_number, on: :create


  def password_uppercase
      return if password.present? && !!password.match(/\p{Upper}/)
      errors.add :password, ' must contain at least 1 uppercase '
  end
  
  def password_lower_case
      return  if password.present? && !!password.match(/\p{Lower}/)
      errors.add :password, ' must contain at least 1 lowercase '
  end
  
  def password_special_char
      special = "?<>',?[]}{=-)(*&^%$#`~{}!"
      regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
      return if  password.present? && password =~ regex
      errors.add :password, ' must contain special character'
  end
  
  def password_contains_number
      return if password.present? && password.count("0-9") > 0
      errors.add :password, ' must contain at least one number'
  end
  
end
