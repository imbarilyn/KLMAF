# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Contract.create!([
    {name: "Panari", expirydate: "20 Sept 2009", country: "Kenya"},
    {name: "Lazizi", expirydate: "20 Sept 2027", country: "Kenya"},
    {name: "Auamist", expirydate: "20 Sept 2030", country: "Uganda"},
    {name: "Hyatt", expirydate: "20 Sept 2026", country: "Tanzania"}
    ])