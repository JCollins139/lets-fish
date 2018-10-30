require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'Charlie'}
    last_name {'Moore'}
    user_name {'MadFisherMan'}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
