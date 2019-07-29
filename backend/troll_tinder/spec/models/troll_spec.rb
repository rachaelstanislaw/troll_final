require 'rails_helper'

RSpec.describe Troll, :type => :model do

  it "should validate name" do
    troll = Troll.create
    expect(troll.errors[:name]).to_not be_empty
  end
  
end
