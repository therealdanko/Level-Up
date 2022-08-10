class MessageSerializer < ActiveModel::Serializer
    attributes :id, :body, :user_id

    has_one :conversations
    has_one :user
  
  end