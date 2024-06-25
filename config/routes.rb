Rails.application.routes.draw do
  devise_for :users
  resources :listings do
    get "photos", to: "listings#photos", on: :member
  end

  resource :settings, only: [:show, :create]
  resource :owner_signup, only: [:show, :create], controller: :owner_signup 

  namespace :stripe do
    resource :account_sessions, only: [:create]
    resource :webhook_events, only: [:create]
  end

  namespace :listings do
    resource :file_uploads, only: [:create]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "listings#index"
end
