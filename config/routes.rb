Rails.application.routes.draw do
  root :to => 'home#index', as: 'home'
  get '/dashboard' => 'dashboard#index'
  
  resources :project_application
  resources :project_search
  resources :project_apply
  resources :dynamic_management
  controller :sessions do
    post 'login' => :create
    delete 'logout' => :destroy
  end
end
