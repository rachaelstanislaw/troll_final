class TrollsController < ApplicationController
    def index
        trolls = Troll.all
        render json: trolls
    end

    def create
        # Create a new cat
        troll = Troll.create(troll_params)
        if troll.valid?
            render json: troll
        else
            render json: troll.errors, status: :unprocessable_entity
        end
    end

    def troll_params
        params.require(:troll).permit(:name, :age, :enjoys)
    end
end
