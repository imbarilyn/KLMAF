class RemoveCountryFromContracts < ActiveRecord::Migration[6.1]
  def change
    remove_column :contracts, :country
  end
end
