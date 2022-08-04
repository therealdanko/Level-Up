class UserLevelUpSkillsController < ApplicationController

    before_action :find_user_level_up_skill
    before_action :authorize_user, only: [:update, :destroy]
  
 def index
     render json: UserlevelUpSkill.all
 end
 
 def show
     render json: @user_level_up_skill
 end
 
 def create 
     new_user_level_up_skill = current_user.user_level_up_skills.create!(user_skill_params)
     render json: new_user_skill, status: :created
 end
 
 def update
    @user_level_up_skill.update!(user_skill_params)
     render json: @user_level_up_skill, status: :accepted
 end
 
 def destroy 
    @user_level_up_skill.destroy!
     head :no_content
 end
 
 private 
 
 def find_user_level_up_skill 
     @user_level_up_skill = UserLevelUpSkill.find_by(id: params[:id])
 end
 
 def authorize_user
     return if current_user.admin? || current_user == user_level_up_skill.user
     render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
   end
 
 
 def user_skill_params 
     params.permit(:video, :description, :experience, :credentials, :level_up_skill_id)
 end

end
