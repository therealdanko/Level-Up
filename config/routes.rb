Rails.application.routes.draw do
  
mount ActionCable.server => "/cable"
  
resources :messages
resources :conversations
resources :conversations do
  resources :messages
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
 get "/user_skills/:id", to: "user_skills#show"

 get "/conversations", to: "conversations#index"
 post "/conversations", to: "conversations#create"
 
 get "/conversations/:conversation_id/messages", to: "messages#index"
 post "/conversations/:conversation_id/messages", to: "messages#create"

end
