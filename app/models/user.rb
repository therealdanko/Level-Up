class User < ApplicationRecord
  has_many :teaching_skills, dependent: :destroy
  has_many :skills, through: :teaching_skills
  has_many :learning_skills, dependent: :destroy
  has_many :learning_skills, through: :skills
  has_many :sender_conversations, class_name: 'Conversation', foreign_key: 'sender_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'receiver_id'
  has_many :messages, dependent: :destroy
  

  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create

  validates :name, presence: true
  validates :email_address, presence: true, uniqueness: true
  validate :password_lower_case, on: :create

  validate :password_uppercase, on: :create

  validate :password_special_char, on: :create

  validate :password_contains_number, on: :create

  scope :all_except, ->(user) {where.not(id: user.id)}

#   def get_convo_users 
#     convo_user_ids = self.conversations.pluck(convo_user_ids).map do |conversation|
#         conversation.convo_user_id
#     end
#     convo_users = User.all.where(id: convo_user_ids)
#     convo_users.filter do |convo_user|
#         convo_user.conversations.where(convo_user_id: self.id)[0] && convo_user.conversation.where(convo_user_id: self.id)[0][
#   end

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
