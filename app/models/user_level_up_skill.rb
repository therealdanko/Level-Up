class UserLevelUpSkill < ApplicationRecord
    belongs_to :user
    belongs_to :level_up_skill

end
