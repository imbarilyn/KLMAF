class ContractController < ApplicationController
   
    def index
        contracts = Contract.all
        render json: contracts, except: [:created_at, :updated_at], methods: [:summary]
    end

    def show
        contract = Contract.find_by(id: params[:id])
        if contract
            render json: contract, except: [:created_at, :updated_at], methods: [:summary]
        else
            render json: {error: "Contract not found"}, status: 404
        end
    end



end