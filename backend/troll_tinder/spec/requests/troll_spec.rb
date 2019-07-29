require 'rails_helper'

RSpec.describe Troll, :type => :request do

    describe "Trolls API" do
      it "gets a list of Trolls" do
        # Create a new cat in the Test Database (not the same one as development)
        Troll.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')

        # Make a request to the API
        get '/trolls'

        # Convert the response into a Ruby Hash
        json = JSON.parse(response.body)

        # Assure that we got a successful response
        expect(response).to be_success

        # Assure that we got one result back as expected
        expect(json.length).to eq 1
      end
    end
    it "creates a troll" do
        # The params we are going to send with the request
        troll_params = {
            troll: {
                name: 'Buster',
                age: 4,
                enjoys: 'Meow Mix, and plenty of sunshine.'
            }
        }

        # Send the request to the server
        post '/trolls', params: troll_params

        # Assure that we get a success back
        expect(response).to be_success

        # Look up the cat we expect to be created in the Database
        new_troll = Troll.first

        # Assure that the created cat has the correct attributes
        expect(new_troll.name).to eq('Buster')
    end


    it "doesn't create a troll without a name" do
        troll_params = {
            troll: {
                age: 4,
                enjoys: 'Meow Mix, and plenty of sunshine.'
        }
    }

    post '/trolls', params: troll_params
    expect(response.status).to eq 422
    json = JSON.parse(response.body)
    expect(json['name']).to include "can't be blank"

    end
end
