class DashboardController < ApplicationController
	def index
		puts session[:company_id]
	end
end
