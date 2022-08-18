class LearningSkillsController < ApplicationController

    before_action :find_learning_skill
   
  
 def index
     render json: LearningSkill.all
 end
 
 def show
     render json: @learning_skill
 end
 
 def create 
     new_learning_skill = current_user.learning_skills.create!(learning_params)
     render json: learning_skill, status: :created
 end
 
 def update
    @learning_skill.update!(learning_params)
     render json: @learning_skill, status: :accepted
 end
 
 def destroy 
    @learning_skill.destroy!
     head :no_content
 end
 
 private 
 
 def find_learning_skill 
     @learning_skill = LearningSkill.find_by(id: params[:id])
 end
 
 def authorize_user
     return if current_user.admin? || current_user == learning_skill.user
     render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
   end
 
 
 def learning_skill_params 
     params.permit(:user_id, :skill_id)
 end

end
