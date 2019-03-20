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
monponsett = Spot.create!(name: 'Monponsett West', address: 'Rt 105', city: 'Halifax', state: 'MA', boat_ramp: true, parking: true, dock: true )


review1 = Review.create!(rating: 4, body: "This is a tough spot to catch fish, some days they're biting like crazy, other days I can't get a nibble", season: "Summer", spot: nip)
review2 = Review.create!(rating: 2, body: "This pond is ok for a canoe or kayak, not too big to get around but there's some big fish in there not great shore fishing", season: "Spring", spot: stetson)
review3 = Review.create!(rating: 3, body: "Small little honey hole, haven't seen many big fish come out of here but they're always biting", season: "Spring", spot: dundee)
review4 = Review.create!(rating: 1, body: "This place is way too small and crowded plus the pollen was out of control", season: "Spring", spot: dundee)
review5 = Review.create!(rating: 1, body: "This place sucks I destroyed my prop because it's way to shallow and all I caught was weeds", season: "Summer", spot: nip)
review6 = Review.create!(rating: 3, body: "This place has some huge bass, I've caught a big one here but also have struck out here a lot", season: "Summer", spot: monponsett)
