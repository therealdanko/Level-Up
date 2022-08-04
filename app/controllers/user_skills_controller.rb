class UserSkillsController < ApplicationController

   before_action :find_user_skill
   before_action :authorize_user, only: [:update, :destroy]
 
def index
    render json: UserSkill.all
end

def show
    render json: @user_skill
end

def create 
    new_user_skill = current_user.user_skills.create!(user_skill_params)
    render json: new_user_skill, status: :created
end

def update
    @user_skill.update!(user_skill_params)
    render json: @user_skill, status: :accepted
end

def destroy 
    @user_skill.destroy!
    head :no_content
end

private 

def find_user_skill 
    @user_skill = UserSkill.find_by(id: params[:id])
end

def authorize_user
    return if current_user.admin? || current_user == user_skill.user
    render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
  end


def user_skill_params 
    params.permit(:video, :description, :experience, :credentials, :skill_id)
end

end
