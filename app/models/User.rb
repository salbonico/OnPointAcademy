class User < ActiveRecord::Base
	has_many :completes
	has_many :courses, through: :completes
	accepts_nested_attributes_for :courses
	validates :name, presence: true
	validates :email, presence: true
	validates :name, uniqueness: true
	validates :email, uniqueness: true
	has_secure_password

end
