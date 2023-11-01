class ContractController < ApplicationController
    def index
        render json: {"name": "Panari"}
    end
end