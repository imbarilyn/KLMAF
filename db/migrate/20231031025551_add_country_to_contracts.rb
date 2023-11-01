class AddCountryToContracts < ActiveRecord::Migration[6.1]
  def change
    add_column :contracts, :country,
    :string
  end
end
