# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


nip = Spot.create!(name: 'Lake Nippenicket', city: 'Bridgewater', state: 'MA', boat_ramp: true, parking: true, dock: false)
stetson = Spot.create!(name: 'Stetson Pond', address: 'Plymouth St.', city: 'Pembroke', state: 'MA', boat_ramp: false, parking: true, dock: false )
dundee = Spot.create!(name: 'Dunder Miflin', city: 'Pembroke', state: 'MA', parking: true)
