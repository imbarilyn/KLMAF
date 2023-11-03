class ContractController < ApplicationController
    def summary
        "#{self.name}: $#{self.country}"
    end
end