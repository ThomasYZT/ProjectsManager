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
  resources :province_order
  resources :city_order
  resources :fund_contract
  resources :construct_contract
  resources :letter_of_authorization
  resources :fund_publicity
  controller :sessions do
    post 'login' => :create
    delete 'logout' => :destroy
  end
end
