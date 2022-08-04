Rails.application.routes.draw do
  
  

  resources :conversations, only: [:index, :create] do
    resources :messages, only: [:index, :create]
  end
  
resources :user_level_up_skills
resources :level_up_skills
resources :user_skills
resources :skills
resources :users

 post "/image", to: "image#create"
 get "/me", to: "users#show"
 post "/signup", to: "users#create"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
 patch "/me", to: "users#update"
 delete "/me", to: "users#destroy"
#  get "/select_skill_users/:id", to: "skills#show", as: "selected_skill_show"

#  patch "/email", to: "users#update_email"
#  patch "/username", to: "users#update_username"
end
