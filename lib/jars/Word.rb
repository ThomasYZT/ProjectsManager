require 'java'


Dir.entries(Rails.root.join('lib', 'jars')).sort.each do |entry|
  require Rails.root.join('lib', 'jars', entry) if entry =~/.jar$/
end

module Word
	java_import 'orz.yzt.gnerateWord.WordTest'
	
	def self.create_word(url1, url2, name, value)
		test = WordTest.new
		test.createWord url1,url2,name,value
	end

	
end