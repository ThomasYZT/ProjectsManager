class SessionsController < ApplicationController
	def create
		puts params[:company_id],params[:number],params[:password]
		if params[:company_id] == "4311290111" || params[:company_id] == "431129" || params[:company_id] == "43"
			if params[:number] == '1'
				if params[:password] == '123456'
					session[:company_id] = params[:company_id]
					session[:number] = params[:number]
					redirect_to dashboard_path
				else 
					redirect_to home_path, alert: '密码错误!'
				end
			else
				redirect_to home_path, alert: '工号错误!'
			end
		else
			redirect_to home_path, alert: '公司代码错误!'
		end
	end

	def destroy
		
	end
end
