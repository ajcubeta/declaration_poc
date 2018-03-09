source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.1.5'
gem 'mysql2', '~> 0.3.21'
gem 'lardawge-rfm', '1.4.1.2', require: 'rfm'
gem 'fm_store', git: 'https://github.com/mech/fm_store.git'
gem 'awesome_print'
group :development do
  gem 'listen'
  gem 'wirble'
  gem 'hirb'
  gem 'sextant'
  gem 'pry'
end
