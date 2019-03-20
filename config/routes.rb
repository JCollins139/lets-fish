Rails.application.routes.draw do
  root 'homes#index'
  get '/spots/:id', to: 'spots#index'

  devise_for :users

  resources :users, only: [:show]

  resources :spots, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :spots, only: [:index, :show, :create] do
        resources :reviews, only: [:index, :show, :create]

      end
    end
  end
end
