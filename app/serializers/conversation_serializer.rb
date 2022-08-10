class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id
    
    has_many :messages
    belongs_to :sender, class_name: 'User'
    belongs_to :receiver, class_name: 'User'
end
