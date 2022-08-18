class TeachingSkillsController < ApplicationController

   before_action :find_teaching_skill
 
def index
    render json: teachingSkill.all
end

def show
    selected_user = User.find(params[:id])
    
    render json: selected_user
end

def create 
   
    new_teaching_skill = current_user.teaching_skills.create!(teaching_skill_params)
     render json: new_teaching_skill, status: :created
 
end

def update
   updatedSkill = @teaching_skill.update!(teaching_skill_params)
    render json: updatedSkill, status: :accepted
end

def destroy 
    @teaching_skill.destroy!
    head :no_content
end

private 

def find_teaching_skill 
    @teaching_skill = TeachingSkill.find_by(id: params[:id])
end

# def authorize_user
#     return if current_user.admin? || current_user == teaching_skill.user
#     render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
#   end


def teaching_skill_params 
    params.permit(:skill_id, :description, :credentials )
end

end
