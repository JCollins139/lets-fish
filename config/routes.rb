Rails.application.routes.draw do
  get '/spots', to: 'spots#index'
  root 'homes#index'
  get '/spots/:id', to: 'spots#index'

  devise_for :users

  resources :spots, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :spots, only: [:index, :show] do

      end
    end
  end
end
