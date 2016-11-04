require "#{Rails.root}/lib/jars/Word"
class ChoosePointController < ApplicationController
	def index
		url = "#{Rails.root}/lib/ftl"
		name = ["county","projectname","numberone","numbertwo","numberthree","numberfour","nameone","nametwo","namethree","namefour","countryside","county","village","town","year","month","day"]
		value = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"]
		Word.create_word(url,"e:\\\\",name,value)
		puts "#{Rails.root}"
		#Test.test("1","2","3")
	end
end
