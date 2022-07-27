class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :password_digest, :name, :email_address, :profile_image
  has_many :user_skills
  has_many :skills
  has_many :skills_to_level_up
end
