class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :password_digest, :name, :email_address, :profile_image
  has_many :teaching_skills
  has_many :learning_skills
  has_many :skills
 
end
