Rails.application.routes.draw do
  root :to => 'home#index', as: 'home'
  get '/dashboard' => 'dashboard#index'
  
  resources :project_application
  resources :project_search
  resources :project_apply
  resources :dynamic_management
  resources :home_page
  resources :publicity
  resources :plan_reported
  resources :county_check
  resources :province_respond
  resources :build_publicity
  resources :province_order
  resources :city_order
  resources :fund_contract
  resources :construct_contract
  resources :letter_of_authorization
  resources :fund_publicity

  resources :acceptance_apply
  resources :acceptance_scene
  resources :acceptance_sheet
  resources :acceptance_start
  resources :acceptance_update
  resources :maintenance_protocol
  resources :project_transfer
  resources :set_team
  resources :tender
  resources :visa_apply
  resources :visa_check
  resources :visa_update
  resources :class_apply
  resources :city_plan_collect
  resources :county_plan_collect
  resources :plan
  
  controller :sessions do
    post 'login' => :create
    delete 'logout' => :destroy
  end
end
