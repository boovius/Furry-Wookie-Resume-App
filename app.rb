require 'sinatra'
require 'mongoid'
require 'oj'
require 'sinatra/reloader' if development?

Mongoid.load!("mongoid.yml")

module Mongoid
  module Serialization 
    def serializable_hash_with_id(options = nil)
      json = serializable_hash_without_id options
      json['id'] = json['_id'] if json.has_key? '_id'
      json
    end
    alias_method_chain :serializable_hash, :id
  end
end

class Doc
	include Mongoid::Document 

  field :email,       type: String
  field :password,    type: String

	field :first_name,  type: String 
	field :last_name,   type: String
	field :phone, 			type: String
	
  field :street,      type: String
  field :city,        type: String
  field :state,       type: String
  field :zip_code,    type: String
	field :linkedin,    type: String
	field :website,     type: String
	field :twitter,     type: String

  embeds_many :employers
  embeds_many :schools
  embeds_many :skills
  embeds_many :accomplishments

end

class Employer
  include Mongoid::Document
  
  field :organization,      type: String
  field :job_location,      type: String
  field :project,           type: String
  field :role,              type: String
  field :start_month_year,  type: String
  field :end_month_year,    type: String
  field :responsibilities,  type: Array
  
  embedded_in :doc
end

class School
  include Mongoid::Document
  
  field :school_name,       type: String
  field :degree,            type: String
  field :major,             type: String
  field :minor,             type: String
  field :start_month_year,  type: String
  field :end_month_year,    type: String
  field :gpa,               type: Float
  
  embedded_in :doc
end

class Skill
  include Mongoid::Document
  
  field :skill_title,       type: String
  field :skill_category,    type: String
  field :yrs_skill_exp,     type: Integer
  
  embedded_in :doc
end

class Accomplishment
  include Mongoid::Document
  
  field :accomplishment_name,       type: String
  field :accomp_description,        type: String
  field :accomp_date,               type: String
  
  embedded_in :doc
end


get '/' do 
	content_type :json

	docs = Doc.all
	docs.to_json

	
end

get '/:id' do 
  content_type :json

  doc = Doc.find params[:id]
  doc.to_json

  
end

post '/' do 
  data = JSON.parse(request.body.read)["resume"]
  id = Doc.create!(data)._id
  status 201
  { success: true, message: "#{id}"}.to_json
end

put '/:id' do 
  content_type :json
  
  doc = Doc.find(params[:id])
  data = JSON.parse(request.body.read)["resume"]
  doc.update_attributes!(data)
  id = doc._id
  status 200
  { success: true, message: "#{id}"}.to_json


end


delete '/:id' do 
  content_type :json
  
  Doc.find(params[:id]).destroy
  status 204  
  { success: true}.to_json


end




