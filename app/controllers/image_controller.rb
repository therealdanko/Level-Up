require "cloudinary"

class ImageController < ApplicationController
    
    def create
    file = params[:file]
    auth = {
            cloud_name: ENV['cloud_name'],
            api_key: ENV['api_key'],
            api_secret: ENV['api_secret'], 
            resource_type: 'image'
         }
      byebug
        uploaded = Cloudinary::Uploader.upload(file, auth)
        render json: uploaded
    end

end
