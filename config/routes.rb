Rails.application.routes.draw do
  
mount ActionCable.server => "/cable"
  
resources :messages
resources :conversations
resources :conversations do
  resources :messages
end

  
resources :learning_skills
resources :teaching_skills
resources :skills
resources :users

 post "/image", to: "image#create"
 get "/me", to: "users#show"
 get "/skills", to: "skills#index"
 post "/signup", to: "users#create"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
 patch "/me", to: "users#update"
 delete "/me", to: "users#destroy"
 get "/teaching_skills/:id", to: "teaching_skills#show"
 get "/users/:id", to: "users#convo_user"
 post "/teaching_skills", to: "teaching_skills#create"
 delete "/teaching_skills/:id", to: "teaching_skills#destroy"
 patch "/teaching_skills/:id", to: "teaching_skills#update"

 get "/conversations", to: "conversations#index"
 post "/conversations", to: "conversations#create"
 
 get "/conversation/:conversation_id/messages", to: "messages#index"
 post "/conversation/:conversation_id/messages", to: "messages#create"

end
