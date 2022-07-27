class SkillsToLevelUpsController < ApplicationController

    before_action :find_skill_to_level
   before_action :authorize_user, only: [:update, :destroy]
 
def index
    render json: SkillToLevel_up.all
end

def show
    render json: @skill_to_level_up
end

def create 
    new_skill_to_level_up = current_user.user_skills.create!(user_skill_params)
    render json: new_skill_to_level_upl, status: :created
end

def update
    @skill_to_level_up.update!(user_skill_params)
    render json: @skill_to_level_up, status: :accepted
end

def destroy 
    @skill_to_level_up.destroy!
    head :no_content
end

private 

def find_skill_to_level 
    @skill_to_level_up = SkillToLevelUp.find_by(id: params[:id])
end

def authorize_user
    return if current_user.admin? || current_user == skill_to_level_up.user
    render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
  end


def user_skill_params 
    params.permit(skill_id:)
end

end
