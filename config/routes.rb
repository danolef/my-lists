Rails.application.routes.draw do
  
  resources :list_items, only:[:show, :create]
  resources :items, only:[:create, :destroy]
  resources :lists, only: [:index, :create, :destroy]
  resources :users
  
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
