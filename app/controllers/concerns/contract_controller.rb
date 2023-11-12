class ContractController < ApplicationController
    wrap_parameters format: []

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

    def update
        #find
        contract = Contract.find_by(id: params[:id])
        if contract 
            #update
            contract.update(contract_params)
            render json: contract, except: [:created_at, :updated_at], status: :accepted
        else
            render json: {error: "Contract not found"}, status: :not_found
        end        
    end

    def destroy
        #find
        contract = Contract.find_by(id: params[:id])
        if contract 
            #delete
            contract.destroy
            head :no_content  
        else
            render json: {error: "contract no found"}, status: :not_found
        end      
    end

    def create
        contract = Contract.create(contract_params)
        if contract
        render json: contract, except: [:created_at, :updated_at], status: 201
        else
            render json: {error: "Cound not create object"}, status: :unprocessable_entity
        end
    end

    private     
    def contract_params
        params.permit(:name, :expirydate, :country)
    end



end