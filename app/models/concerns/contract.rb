class Contract < ApplicationRecord
    def summary
        "#{self.name}: #{self.country}"
        "#{name} #{expirydate}"
       
    end
end