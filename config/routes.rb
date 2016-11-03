Rails.application.routes.draw do
  root :to => 'home#index', as: 'home'
  get '/dashboard' => 'dashboard#index'
  
  resources :project_application
  resources :project_search
  resources :project_apply
  resources :dynamic_management
  resources :home_page
  resources :publicity
  resources :choose_point
  resources :plan_reported
  resources :design
  resources :county_check
  resources :province_respond
  resources :build_publicity
  controller :sessions do
    post 'login' => :create
    delete 'logout' => :destroy
  end
end
