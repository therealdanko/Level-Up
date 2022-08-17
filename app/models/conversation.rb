class Conversation < ApplicationRecord
    belongs_to :sender, class_name: 'User'
    belongs_to :receiver, class_name: 'User'
    has_many :messages, -> {order(created_at: :asc)}, dependent: :destroy

    validates :sender, uniqueness: {scope: :receiver}

    scope :participating, -> (user) do
        where("(conversations.sender_id =? OR conversations.receiver_id =?)", user.id, user.id)
    end

    scope :between, -> (sender_id, receiver_id) do
        where("(conversations.sender_id = ? AND conversations.receiver_id = ?) OR (conversations.receiver_id = ? AND conversations.sender_id = ?)", sender_id, receiver_id, receiver_id, sender_id)
    end


end
