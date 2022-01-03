Rails.application.routes.draw do
  
  resources :list_items
  resources :items
  resources :lists
  resources :users
  
  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
