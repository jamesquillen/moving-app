require 'rails_helper'

RSpec.describe "Boxes", type: :request do
  describe "GET /index" do
    it 'returns a list of boxes' do 
      
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.boxes.create(
        name: 'James Quillen',
        contents: 'toothbrush and underwear',
        size: 'small',
        user_id: 1,
      )

      get '/boxes'

      box = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(box.length).to eq(1)

    end
  end

  describe "POST /create" do
    it 'creates a new box' do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      box_params = {
        box: {
            name: 'Dom Travis',
            contents: 'Dumbells',
            size: 'Medium',
            user_id: user.id,
        }
      }
      post '/boxes', params: box_params
      expect(response).to have_http_status(200)

      box = Box.first
      expect(box.name).to eq('Dom Travis')
    end    
  end

  describe "DELETE /destroy" do
    it 'gets rid of a box' do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
  
      box = Box.new(
          name: 'James Quillen',
          contents: 'toothbrush and underwear',
          size: 'small',
          user_id: user.id
        )
        box.save!

      delete "/boxes/#{box.id}"

      expect(response).to have_http_status(200)
      expect(Box.all.length).to eq(0)

    end
  end

  describe "PATCH /update" do
    it 'edits information about a box' do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      box_params = {
        box: {
          name: 'Bora Ros',
          contents: 'laptop and games',
          size: 'medium',
          user_id: user.id,
        }
      }
      
      post "/boxes", params: box_params
      box = Box.first

      new_box_params = {
        box: {
          name: 'Lea Hazel',
          contents: 'art supplies',
          size: 'extra small',
          user_id: user.id,
        }
      }
      
      patch "/boxes/#{box.id}", params: new_box_params
      expect(response).to have_http_status(200)
      answer = JSON.parse(response.body)
      expect(answer['name']).to eq("Lea Hazel")
     
    end
  end
end
