class Message < ApplicationRecord
    belongs_to :conversation
    belongs_to :user

    validates :body, :conversation_id, :user_id, presence: true

    def conversation_id
      conversation = self.conversation.id
    end

    def message_time
        created_at.strftime("%m/%d/%y at %l:%M %p")
      end
   
end
