# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Wiping Old Data'
List.destroy_all
Item.destroy_all
ListItem.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(username: 'Ban Bishop', email: 'banbishop@gmail.com', password: 'password', password_confirmation: 'password')

puts "🌱 Seeding lists..."
l1 = List.create({name: 'Hats', user_id: u1.id}) 
l2 = List.create({name: 'Shirts', user_id: u1.id})
l3 = List.create({name: 'Car Manuals', user_id: u1.id})
l4 = List.create({name: 'Game Manuals', user_id: u1.id})
l5 = List.create({name: 'SportsWear', user_id: u1.id})

lists = [l1, l2, l3, l4, l5]

puts "🌱 Seeding listItems..."
li1 = ListItem.create({list_id: l1.id})
li2 = ListItem.create({list_id: l2.id})
li3 = ListItem.create({list_id: l3.id})
li4 = ListItem.create({list_id: l4.id})
li5 = ListItem.create({list_id: l5.id})

puts "🌱 Seeding items..."

i1 = Item.create({name: 'D&D PLayer Handbook', image_url: 'https://m.media-amazon.com/images/I/81pViXqeVLL._AC_SL1500_.jpg', site_url: 'https://orkerhulen.dk/onewebmedia/DnD%205e%20Players%20Handbook%20%28BnW%20OCR%29.pdf'})
i2 = Item.create({name: 'Mortal Kombat User Manual', image_url: 'https://www.mobygames.com/images/covers/l/338257-mortal-kombat-snes-manual.jpg', site_url: 'https://thecompany.pl/manual/107_mortal_kombat-manual.pdf'})
i3 = Item.create({name: 'Jeep Grand Cherokee Owners Manual', image_url: 'https://manual-directory.com/wp-content/uploads/2021/02/2021-jeep-grand-cherokee-owners-manual-cover.jpg', site_url: 'https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2021-grandcherokee.pdf'})
i4 = Item.create({name: 'BMW Owners Manual', image_url: 'https://www.carmanualsonline.info/img/1/2845/w960_2845-0.png', site_url: 'http://www.linquist.net/system/files/E462004i.pdf'})
i5 = Item.create({name: 'KDAND One Piece Baseball Cap', image_url: 'https://m.media-amazon.com/images/I/51+DR3TzIqL._AC_UX569_.jpg', site_url: 'https://www.amazon.com/Pirate-Embroidery-Luffy-Piece-Baseball/dp/B08VJ8CL7H/ref=asc_df_B08VJ8CL7H/?tag=hyprod-20&linkCode=df0&hvadid=507775402063&hvpos=&hvnetw=g&hvrand=976187261250372125&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029717&hvtargid=pla-1216343022448&psc=1', price: 14.98})
i6 = Item.create({name: 'Prairie MP Cap', image_url: 'https://cdn.shopify.com/s/files/1/0415/3819/1512/products/gcodmtr1jhhhifv8mb1e.jpg?v=1641305682', site_url: 'https://www.brixton.com/collections/mens-snapbacks/products/prairie-mp-cap-lion?mens=true', price: 35.00})
i7 = Item.create({name: 'Relaxed Fit Corduroy Overshirt', image_url: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Fcf%2F62cf6f48d2de8a6f8cd1f1671a7823d5e72b21ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', site_url: 'https://www2.hm.com/en_us/productpage.1008152003.html', price: 49.99})
i8 = Item.create({name: 'Relaxed Viscone Shirt with deep revere in stone', image_url: 'https://images.asos-media.com/products/asos-design-relaxed-viscose-shirt-with-deep-revere-in-stone/201186180-3?$n_640w$&wid=513&fit=constrain', site_url: 'https://www.asos.com/us/asos-design/asos-design-relaxed-viscose-shirt-with-deep-revere-in-stone/prd/201186180?clr=stone&colourWayId=201186181&cid=3602', price: 32.00})
i9 = Item.create({name: "Nike Air Force 1 '07'", image_url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png', site_url: 'https://www.nike.com/t/air-force-1-07-mens-shoes-5QFp5Z/CW2288-111', price: 100.00})
i10 = Item.create({name: 'NMD_R1 PRIMEBLUE SHOES', image_url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3bd9dda9fdd4a7cbc9aad1e00dd0045_9366/NMD_R1_Primeblue_Shoes_White_GZ9260_01_standard.jpg', site_url: 'https://www.adidas.com/us/nmd_r1-primeblue-shoes/GZ9260.html', price: 150.00})

puts "✅ Done seeding!"