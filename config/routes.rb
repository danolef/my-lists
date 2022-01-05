Rails.application.routes.draw do
  

  resources :list_items, only:[:index, :show, :create]
  resources :items
  resources :lists
  resources :users, only: [:index]

  

  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  
  
end
