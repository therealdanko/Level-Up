class SkillsController < ApplicationController
    # before_action :authorize_user, only: [:create]
    before_action :find_skill
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: Skill.all  
    end

    def show
        render json: @skill
    end

    def create
        new_skill = current_user.skills.create!(skill_params)
        render json: new_skill, status: :created
    end

    # def selected_skill_show
    #   selected_skill_users = @skill.users
    #     render json: selected_skill_users
    # end

    private 

    def find_skill
        @skill = Skill.find_by(id: params[:id])
    end

    # def authorize_user
    #     return if current_user.admin? || current_user 
    #     render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
    # end
    

    def skill_params
        params.permit(:name)
    end

end
