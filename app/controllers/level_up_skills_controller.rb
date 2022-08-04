class LevelUpSkillsController < ApplicationController
    # before_action :authorize_user, only: [:create]
    before_action :find_level_up_skill
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: LevelUpSkill.all  
    end

    def show
        render json: @level_up_skill
    end

    # def create
    #     new_skill = current_user.skills.create!(level_up_skill_params)
    #     render json: new_skill, status: :created
    # end

    private 

    def find_level_up_skill
        @level_up_skill = LevelUpSkill.find_by(id: params[:id])
    end

    # def authorize_user
    #     return if current_user.admin? || current_user 
    #     render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
    # end
    

    # def level_up_skill_params
    #     params.permit(:name)
    # end

end
