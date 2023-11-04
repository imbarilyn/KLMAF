Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# gets all the contracts in our db
 get "/contracts", to: "contract#index"

#  gets contract by id

get "/contracts/:id", to: "contract#show"

post "/contracts", to: "contract#create"

end
