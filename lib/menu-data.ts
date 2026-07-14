import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'rolls',
    name: 'Madras Parota Rolls',
    description: 'Lacha parota rolled around your favourite filling, wrapped fresh to go.',
    iconName: 'WrapIcon', // Custom mapping in UI
    items: [
      {
        name: 'Chicken Parota Roll',
        description: 'Tender spiced chicken pieces rolled in a flaky, warm lacha parota.',
        type: 'non-veg',
        price: 160,
        bestseller: true
      },
      {
        name: 'Egg Parota Roll',
        description: 'Freshly cooked spiced scrambled eggs rolled in a layered parota.',
        type: 'non-veg',
        price: 120
      },
      {
        name: 'Madras Special Non-Veg Parota Roll',
        description: 'Signature roll loaded with roasted chicken, egg, and house special spices.',
        type: 'non-veg',
        price: 200
      },
      {
        name: 'Chicken Noodles Parota Roll',
        description: 'Stir-fried chicken noodles wrapped in a crisp, golden-layered parota roll.',
        type: 'non-veg',
        price: 180
      },
      {
        name: 'Vegetable Parota Roll',
        description: 'Assorted spiced vegetables cooked and rolled inside a fresh parota.',
        type: 'veg',
        price: 120
      },
      {
        name: 'Paneer Masala Parota Roll',
        description: 'Marinated paneer cubes in house gravy, rolled inside a flaky parota.',
        type: 'veg',
        price: 160
      },
      {
        name: 'Veg Noodles Parota Roll',
        description: 'Savory stir-fried garden vegetables and noodles wrapped in a parota.',
        type: 'veg',
        price: 180
      },
      {
        name: 'Madras Special Veg Parota Roll',
        description: 'Loaded vegetarian roll featuring special spiced paneer and mixed vegetables.',
        type: 'veg',
        price: 200
      }
    ]
  },
  {
    id: 'omelette-parota',
    name: 'Omelette Parota',
    description: 'Egg and parota, folded together and finished in our house chicken gravy.',
    iconName: 'EggIcon',
    items: [
      {
        name: 'Double Omelette Parota',
        description: 'Two eggs and shredded parota folded together, served with chicken gravy.',
        type: 'non-veg',
        price: { regular: 100, butter: 110, cheese: 130 }
      },
      {
        name: 'Egg Veechu Parota',
        description: 'Paper-thin folded sandwich parota stuffed with egg and served with chicken gravy.',
        type: 'non-veg',
        price: { regular: 120, butter: 130, cheese: 150 }
      },
      {
        name: 'Chicken Veechu Parota',
        description: 'Flaky folded sandwich parota packed with spiced chicken and chicken gravy.',
        type: 'non-veg',
        price: { regular: 140, butter: 150, cheese: 170 }
      },
      {
        name: 'Madras Special Veechu Parota',
        description: 'House special sandwich parota stuffed with eggs, chicken, and rich gravies.',
        type: 'non-veg',
        price: { regular: 150, butter: 160, cheese: 180 }
      }
    ]
  },
  {
    id: 'omelette',
    name: 'Egg & Chicken Omelette',
    description: 'Classic omelette-counter favourites, from a simple half-fry to our loaded chicken kalakki.',
    iconName: 'FlameIcon',
    items: [
      {
        name: 'Egg Kalakki',
        description: 'Soft, runny scrambled eggs mixed with chicken gravy and traditional spices.',
        type: 'non-veg',
        price: 50
      },
      {
        name: 'Madras Special Chicken Kalakki',
        description: 'Runny eggs cooked with chicken bits, rich gravy, and fresh veggies.',
        type: 'non-veg',
        price: 70
      },
      {
        name: 'Chicken Omelette (Single Egg)',
        description: 'Single egg omelette loaded with minced boneless chicken and chicken gravy.',
        type: 'non-veg',
        price: 80
      },
      {
        name: 'Chicken Omelette (Double Egg)',
        description: 'Fluffy double-egg omelette stuffed with spiced chicken pieces and gravy.',
        type: 'non-veg',
        price: 120
      },
      {
        name: 'Omelette Single',
        description: 'Classic single-egg omelette seasoned with onions, chillies, and black pepper.',
        type: 'non-veg',
        price: 30
      },
      {
        name: 'Omelette Double',
        description: 'Traditional double-egg omelette cooked with chopped onions, green chillies, and spices.',
        type: 'non-veg',
        price: 50
      },
      {
        name: 'Half Fry',
        description: 'Perfectly seasoned single-egg half fry with a soft, runny yolk.',
        type: 'non-veg',
        price: 30
      }
    ]
  },
  {
    id: 'biryani',
    name: 'Biryani',
    description: 'Slow dum-cooked South Indian biryani, served with raita and boiled egg.',
    iconName: 'SoupIcon',
    items: [
      {
        name: 'South Indian Chicken Dum Biryani',
        description: 'Aromatic dum-cooked basmati rice served with four chicken pieces and raita.',
        type: 'non-veg',
        price: 200,
        bestseller: true
      },
      {
        name: 'South Indian Chicken Leg Piece Biryani',
        description: 'Fragrant rice served with a chicken leg piece, gravy, and raita.',
        type: 'non-veg',
        price: 250
      },
      {
        name: 'Bucket Biryani (serves 4–5 people)',
        description: 'Feast-sized biryani with chicken pieces, boiled eggs, gravy, and green chutney.',
        type: 'non-veg',
        price: 900
      },
      {
        name: 'South Indian Mutton Dum Biryani',
        description: 'Richly spiced dum biryani served with tender mutton pieces and raita.',
        type: 'non-veg',
        price: 300
      }
    ]
  },
  {
    id: 'non-veg-dosa',
    name: 'Non-Veg Dosa Corner',
    description: 'Dosa from the non-veg counter, served with coconut chutney and chicken gravy.',
    iconName: 'ChefHatIcon',
    items: [
      {
        name: 'Sada Dosa',
        description: 'Classic thin, crisp rice-and-lentil crepe, served hot with chutney.',
        type: 'veg',
        price: { regular: 60, butter: 80, cheese: 90 }
      },
      {
        name: 'Egg Dosa',
        description: 'Crisp rice crepe coated with spiced egg and cooked to perfection.',
        type: 'non-veg',
        price: { regular: 100, butter: 110, cheese: 130 }
      },
      {
        name: 'Chicken Boneless Curry Dosa',
        description: 'Crisp dosa topped with savory shredded boneless chicken curry.',
        type: 'non-veg',
        price: { regular: 160, butter: 170, cheese: 190 }
      },
      {
        name: 'Chicken Kothu Dosa',
        description: 'Spiced dosa stuffed with minced parota, eggs, chicken, and gravy.',
        type: 'non-veg',
        price: { regular: 160, butter: 170, cheese: 190 }
      },
      {
        name: 'Egg Kothu Dosa',
        description: 'Savory dosa loaded with scrambled eggs, onions, spices, and gravy.',
        type: 'non-veg',
        price: { regular: 130, butter: 140, cheese: 160 }
      },
      {
        name: 'Omelette Uttappam',
        description: 'Thick rice pancake topped with a seasoned egg omelette layer.',
        type: 'non-veg',
        price: { regular: 110, butter: 120, cheese: 140 }
      },
      {
        name: 'Chicken Noodles Dosa',
        description: 'Crisp rice crepe filled with stir-fried chicken noodles.',
        type: 'non-veg',
        price: { regular: 160, butter: 170, cheese: 190 }
      },
      {
        name: 'Chicken Schezwan Noodles Dosa',
        description: 'Crisp dosa stuffed with spicy Schezwan chicken noodles.',
        type: 'non-veg',
        price: { regular: 170, butter: 180, cheese: 200 }
      },
      {
        name: 'Chicken Chilli Dosa',
        description: 'Spicy crepe filled with dry chilli chicken and green chillies.',
        type: 'non-veg',
        price: 200
      },
      {
        name: 'Madras Special Omelette Dosa',
        description: 'Signature dosa combined with a loaded double-egg herb omelette.',
        type: 'non-veg',
        price: { regular: 120, butter: 130, cheese: 150 }
      }
    ]
  },
  {
    id: 'extras',
    name: 'Extras & Sides',
    description: 'Add a parota, a splash of butter, or extra cheese to any order.',
    iconName: 'PlusCircleIcon',
    items: [
      {
        name: 'Parota',
        description: 'Single layer of our classic, flaky, hand-rolled Madras maida parota.',
        type: 'veg',
        price: { regular: 25, butter: 35, cheese: 45 }
      },
      {
        name: 'Wheat Parota',
        description: 'Healthy, hand-layered parota made from whole wheat flour.',
        type: 'veg',
        price: { regular: 35, butter: 45, cheese: 55 }
      },
      {
        name: 'Bun Parota',
        description: 'Thick, soft, and fluffy coin-shaped parota, popular in Madurai.',
        type: 'veg',
        price: { regular: 30, butter: 40, cheese: 50 }
      },
      {
        name: 'Nool Parota',
        description: 'Stringy, noodle-like layered parota, extremely flaky and crispy.',
        type: 'veg',
        price: { regular: 35, butter: 45, cheese: 55 }
      },
      {
        name: 'Neer Dosa',
        description: 'Lacy, paper-thin rice crepes that are melt-in-the-mouth soft.',
        type: 'veg',
        price: 25
      },
      {
        name: 'Extra Butter',
        description: 'A generous serving of premium quality unsalted butter.',
        type: 'veg',
        price: 20
      },
      {
        name: 'Extra Cheese',
        description: 'Additional portion of grated cheddar cheese for your dishes.',
        type: 'veg',
        price: 30
      },
      {
        name: 'Extra Raitha',
        description: 'Cool yogurt mixed with finely chopped onions and coriander.',
        type: 'veg',
        price: 30
      }
    ]
  },
  {
    id: 'starters',
    name: 'Starters & Gravy',
    description: 'Chettinad-style starters and dry-roasted classics, cooked to order.',
    iconName: 'FlameKindlingIcon',
    items: [
      {
        name: 'Chettinadu Chicken Sukka',
        description: 'Pan-roasted dry chicken cooked in black pepper and Chettinad spices.',
        type: 'non-veg',
        price: 220
      },
      {
        name: 'Chicken 65',
        description: 'Crisp, deep-fried chicken bites marinated in curry leaves and spices.',
        type: 'non-veg',
        price: 180,
        bestseller: true
      },
      {
        name: 'Madras Special Egg Masala Fry',
        description: 'Boiled eggs tossed in a rich, spicy onion-tomato masala.',
        type: 'non-veg',
        price: 190
      },
      {
        name: 'Chicken Chilli Parota',
        description: 'Shredded parota stir-fried with chicken, bell peppers, and chilli sauce.',
        type: 'non-veg',
        price: 240
      },
      {
        name: 'Garlic Chicken',
        description: 'Tender chicken chunks stir-fried with fragrant garlic and mild spices.',
        type: 'non-veg',
        price: 250
      },
      {
        name: 'Ginger Chicken',
        description: 'Wok-tossed chicken cooked with fresh ginger, onions, and spices.',
        type: 'non-veg',
        price: 250
      },
      {
        name: 'Pepper Mutton',
        description: 'Slow-cooked mutton pieces stir-fried with ground black pepper and spices.',
        type: 'non-veg',
        price: 350
      },
      {
        name: 'Chettinadu Mutton Sukka',
        description: 'Dry-roasted tender mutton cooked in traditional Chettinad spice blend.',
        type: 'non-veg',
        price: 350
      }
    ]
  },
  {
    id: 'parota-gravy',
    name: 'Parota with Gravy',
    description: 'Lacha parota served with in-house South Indian gravy, raita, and pickle.',
    iconName: 'LayersIcon',
    items: [
      {
        name: 'Parota with Chicken Gravy',
        description: 'Two parotas served with a bowl of rich, spiced chicken gravy.',
        type: 'non-veg',
        price: { regular: 70, wheat: 90, bun: 90, nool: 90 }
      },
      {
        name: 'Parota with Mutton Gravy',
        description: 'Two parotas served alongside our signature slow-cooked mutton gravy.',
        type: 'non-veg',
        price: { regular: 90, wheat: 110, bun: 110, nool: 110 }
      },
      {
        name: 'Parota with Egg Gravy',
        description: 'Two flaky parotas paired with a rich, aromatic egg gravy.',
        type: 'non-veg',
        price: { regular: 70, wheat: 90, bun: 90, nool: 90 }
      },
      {
        name: 'Parota with Chicken Gravy + 2 Pcs Chicken',
        description: 'Two layered parotas served with chicken gravy and two chicken pieces.',
        type: 'non-veg',
        price: { regular: 120, wheat: 140, bun: 140, nool: 140 }
      },
      {
        name: 'Parota with Mutton Gravy + 2 Pcs Mutton',
        description: 'Two layered parotas paired with mutton gravy and two tender mutton pieces.',
        type: 'non-veg',
        price: { regular: 160, wheat: 180, bun: 180, nool: 180 }
      },
      {
        name: 'Parota with Egg Gravy + 2 Pcs Egg',
        description: 'Two parotas served with egg gravy and two hard-boiled eggs.',
        type: 'non-veg',
        price: { regular: 110, wheat: 130, bun: 130, nool: 130 }
      }
    ]
  },
  {
    id: 'kothu-parota',
    name: 'Kothu Parota',
    description: 'Egg and parota chopped together with spices, finished in house gravy.',
    iconName: 'HammerIcon',
    items: [
      {
        name: 'Boneless Chicken Kothu Parota',
        description: 'Shredded parota beaten on the grill with eggs, chicken, and gravy.',
        type: 'non-veg',
        price: { regular: 180, butter: 190, cheese: 210 }
      },
      {
        name: 'Madras Special Boneless Chicken Kothu Parota',
        description: 'Loaded kothu parota with extra chicken, eggs, and house spices.',
        type: 'non-veg',
        price: { regular: 200, butter: 210, cheese: 230 }
      },
      {
        name: 'Egg Kothu Parota',
        description: 'Street-style shredded parota chopped with eggs, onions, and chicken gravy.',
        type: 'non-veg',
        price: { regular: 150, butter: 160, cheese: 180 }
      },
      {
        name: 'Mutton Kothu Parota',
        description: 'Flaky parota shredded and minced with tender mutton pieces and spices.',
        type: 'non-veg',
        price: { regular: 240, butter: 250, cheese: 280 }
      }
    ]
  },
  {
    id: 'veg-gravy',
    name: 'Parota & Veg Gravy',
    description: 'Vegetarian parota mains, served with our home-style veg kurma.',
    iconName: 'LeafIcon',
    items: [
      {
        name: 'Parotta with Veg Kurma',
        description: 'Two layered parotas served with a side of mixed vegetable kurma.',
        type: 'veg',
        price: 70
      },
      {
        name: 'Vegetable Kothu Parota',
        description: 'Minced parota chopped with garden vegetables and home-style veg kurma.',
        type: 'veg',
        price: { regular: 150, butter: 160, cheese: 180 }
      },
      {
        name: 'Paneer Veg Kothu Parota',
        description: 'Minced parota beaten on the grill with paneer, vegetables, and kurma.',
        type: 'veg',
        price: { regular: 180, butter: 190, cheese: 210 }
      },
      {
        name: 'Veg Chilli Parota with Veg Kurma',
        description: 'Crisp shredded parota tossed with green chillies, capsicum, and kurma.',
        type: 'veg',
        price: 230
      },
      {
        name: 'Rice Roti with Veg Kurma',
        description: 'Three soft, gluten-free rice rotis served with vegetable kurma.',
        type: 'veg',
        price: 150
      },
      {
        name: 'Neer Dosa with Veg Curry & Coconut Chutney',
        description: 'Three lacy neer dosas served with veg curry and fresh chutney.',
        type: 'veg',
        price: 100
      }
    ]
  },
  {
    id: 'idli-vada',
    name: 'Idli & Vada',
    description: 'Steamed breakfast classics served with sambhar, coconut chutney, and green chutney.',
    iconName: 'DiscIcon',
    items: [
      {
        name: 'Idli',
        description: 'Three fluffy steamed rice cakes served with sambar and chutneys.',
        type: 'veg',
        price: 50
      },
      {
        name: 'Vada',
        description: 'Three crispy, savory lentil donuts served with hot sambar and chutney.',
        type: 'veg',
        price: 60
      },
      {
        name: 'Idli Vada',
        description: 'Combination of two steamed idlis and one crispy vada with sambar.',
        type: 'veg',
        price: 60
      },
      {
        name: 'Set Dosa',
        description: 'Three soft, spongy rice pancakes served with sambar and chutneys.',
        type: 'veg',
        price: 60
      },
      {
        name: 'Ghee Idli',
        description: 'Two soft steamed idlis drenched in pure, fragrant aromatic ghee.',
        type: 'veg',
        price: 90
      },
      {
        name: 'Butter Idli',
        description: 'Two hot steamed idlis topped with a dollop of butter.',
        type: 'veg',
        price: 90
      },
      {
        name: 'Fry Idly',
        description: 'Eight crispy, deep-fried idli slices tossed in aromatic spices.',
        type: 'veg',
        price: 130
      },
      {
        name: 'Schezwan Idli',
        description: 'Eight fried idli slices wok-tossed in spicy Schezwan sauce.',
        type: 'veg',
        price: 130
      }
    ]
  },
  {
    id: 'veg-dosa',
    name: 'Veg Dosa',
    description: 'Crisp-edged dosa, made to order, served with sambhar and chutneys.',
    iconName: 'CompassIcon',
    items: [
      {
        name: 'Sada Dosa',
        description: 'Thin, crispy golden rice and lentil crepe served with sambar.',
        type: 'veg',
        price: { regular: 60, butter: 80, cheese: 90 }
      },
      {
        name: 'Onion Dosa',
        description: 'Crisp crepe topped with finely chopped raw red onions.',
        type: 'veg',
        price: { regular: 80, butter: 100, cheese: 110 }
      },
      {
        name: 'Masala Dosa',
        description: 'Crispy rice crepe stuffed with a spiced potato-onion mash.',
        type: 'veg',
        price: { regular: 80, butter: 100, cheese: 110 },
        bestseller: true
      },
      {
        name: 'Mysore Sada Dosa',
        description: 'Crisp dosa lined with spicy garlic-chilli chutney inside.',
        type: 'veg',
        price: { regular: 90, butter: 110, cheese: 120 }
      },
      {
        name: 'Mysore Masala Dosa',
        description: 'Mysore style dosa filled with seasoned potato masala filling.',
        type: 'veg',
        price: { regular: 110, butter: 130, cheese: 140 }
      },
      {
        name: 'Schezwan Sada Dosa',
        description: 'Crisp rice crepe spread with fiery in-house Schezwan sauce.',
        type: 'veg',
        price: { regular: 90, butter: 110, cheese: 120 }
      },
      {
        name: 'Schezwan Masala Dosa',
        description: 'Crisp dosa stuffed with spicy Schezwan-tossed potato filling.',
        type: 'veg',
        price: { regular: 120, butter: 140, cheese: 150 }
      },
      {
        name: 'Podi Dosa',
        description: 'Crisp rice crepe coated with aromatic South Indian spiced gunpowder.',
        type: 'veg',
        price: { regular: 70, butter: 90, cheese: 100 }
      },
      {
        name: 'Podi Masala Dosa',
        description: 'Gunpowder coated dosa filled with a spiced potato masala.',
        type: 'veg',
        price: { regular: 90, butter: 110, cheese: 120 }
      },
      {
        name: 'Ghee Sada Dosa',
        description: 'Thin crisp rice crepe roasted in pure, fragrant cow ghee.',
        type: 'veg',
        price: 90
      },
      {
        name: 'Ghee Masala Dosa',
        description: 'Fragrant ghee roasted dosa stuffed with spiced potato masala.',
        type: 'veg',
        price: 120
      },
      {
        name: 'Ghee Podi Dosa',
        description: 'Crisp dosa layered with spiced gunpowder and roasted with ghee.',
        type: 'veg',
        price: 130
      },
      {
        name: 'Mayonnaise Sada Dosa',
        description: 'Crispy rice crepe spread with creamy eggless mayonnaise.',
        type: 'veg',
        price: 110
      },
      {
        name: 'Jini Dosa',
        description: 'Mumbai style rolled dosa stuffed with cheese, butter, and veggies.',
        type: 'veg',
        price: 170
      },
      {
        name: 'Chinese Dosa',
        description: 'Crisp crepe filled with stir-fried noodles and vegetables.',
        type: 'veg',
        price: 170
      },
      {
        name: 'Paneer Chilli Dosa',
        description: 'Crisp dosa stuffed with spicy paneer chilli chunks.',
        type: 'veg',
        price: 190
      },
      {
        name: 'Madras Parota\'s Special Dosa',
        description: 'Signature crepe loaded with paneer, potato masala, and cheese.',
        type: 'veg',
        price: 180
      }
    ]
  },
  {
    id: 'uttappam',
    name: 'Uttappam',
    description: 'Thick, savoury rice pancakes topped and served with sambhar and chutneys.',
    iconName: 'GridIcon',
    items: [
      {
        name: 'Sada Uttappam',
        description: 'Thick, soft rice and lentil pancake cooked until golden.',
        type: 'veg',
        price: { regular: 80, butter: 90, cheese: 110 }
      },
      {
        name: 'Onion Uttappam',
        description: 'Savory thick pancake topped with lots of sweet red onions.',
        type: 'veg',
        price: { regular: 90, butter: 100, cheese: 120 }
      },
      {
        name: 'Tomato Uttappam',
        description: 'Thick rice pancake topped with juicy chopped ripe tomatoes.',
        type: 'veg',
        price: { regular: 90, butter: 100, cheese: 120 }
      },
      {
        name: 'Onion Tomato Uttappam',
        description: 'Thick pancake loaded with a mix of sweet onions and tomatoes.',
        type: 'veg',
        price: { regular: 100, butter: 110, cheese: 130 }
      },
      {
        name: 'Cheese Uttappam',
        description: 'Thick rice pancake topped with a layer of melted cheese.',
        type: 'veg',
        price: { regular: 120, butter: 130, cheese: 150 }
      },
      {
        name: 'Masala Uttappam',
        description: 'Savoury thick pancake topped with spiced potato-onion mixture.',
        type: 'veg',
        price: { regular: 110, butter: 120, cheese: 140 }
      },
      {
        name: 'Mysore Sada Uttappam',
        description: 'Thick pancake lined with spicy red garlic-chilli paste.',
        type: 'veg',
        price: { regular: 110, butter: 120, cheese: 140 }
      },
      {
        name: 'Mysore Masala Uttappam',
        description: 'Savoury thick pancake topped with Mysore chutney and potato masala.',
        type: 'veg',
        price: { regular: 130, butter: 140, cheese: 160 }
      },
      {
        name: 'Schezwan Sada Uttappam',
        description: 'Thick pancake spread with spicy in-house Schezwan sauce.',
        type: 'veg',
        price: { regular: 110, butter: 120, cheese: 140 }
      },
      {
        name: 'Schezwan Masala Uttappam',
        description: 'Thick pancake loaded with spicy Schezwan potato filling.',
        type: 'veg',
        price: { regular: 130, butter: 140, cheese: 160 }
      },
      {
        name: 'Mayonnaise Uttappam',
        description: 'Thick rice pancake topped with creamy mayonnaise and spices.',
        type: 'veg',
        price: { regular: 110, butter: 120, cheese: 140 }
      },
      {
        name: 'Mayonnaise Masala Uttappam',
        description: 'Thick pancake topped with potato masala and rich mayonnaise.',
        type: 'veg',
        price: { regular: 130, butter: 140, cheese: 160 }
      },
      {
        name: 'Madras Parota\'s Special Uttappam',
        description: 'Signature thick pancake topped with paneer, vegetables, and cheese.',
        type: 'veg',
        price: { regular: 140, butter: 150, cheese: 170 }
      }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Filter coffee and cool buttermilk, served all day.',
    iconName: 'CoffeeIcon',
    items: [
      {
        name: 'Butter Milk',
        description: 'Chilled diluted yogurt mixed with ginger, green chillies, and coriander.',
        type: 'veg',
        price: 25
      },
      {
        name: 'Madras Special Filter Coffee',
        description: 'Traditional South Indian chicory coffee brewed in hot milk.',
        type: 'veg',
        price: 30
      },
      {
        name: 'Nes Coffee',
        description: 'Instant Nescafe coffee served frothy in a traditional tumbler.',
        type: 'veg',
        price: 30
      },
      {
        name: 'Narasus Coffee',
        description: 'Premium South Indian chicory blend coffee brewed fresh.',
        type: 'veg',
        price: 30
      },
      {
        name: 'Black Coffee',
        description: 'Strong and aromatic black coffee brewed without milk.',
        type: 'veg',
        price: 20
      }
    ]
  }
];
