Rails.application.routes.draw do
  resources :boxes
  devise_for :users
  get '/boxes' => "boxes#index", :as => :user_root
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end

