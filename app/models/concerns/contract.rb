class Contract < ApplicationRecord
    def summary
        "#{self.name}: #{self.country}"
        
       
    end
end