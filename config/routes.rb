Rails.application.routes.draw do
  
  resources :skills_to_level_ups
 resources :user_skills
 resources :skills
 resources :users

 post "/image", to: "image#create"
 get "/me", to: "users#show"
 post "/signup", to: "users#create"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
end
