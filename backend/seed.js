/**
 * ─── ARJUN ENTERPRISES — Product Seeder ───────────────────────────────────────
 * Run once: node seed.js
 * Inserts all products from the frontend inventory into MongoDB.
 * Safe to re-run — skips products that already exist (matched by name).
 */

const mongoose = require('mongoose');

// ─── Connect ──────────────────────────────────────────────────────────────────
mongoose.connect(
    "mongodb+srv://deepika:deepika%40547@cluster0.7otaztm.mongodb.net/arjunDB?retryWrites=true&w=majority"
);

// ─── Product Schema (mirrors server.js) ──────────────────────────────────────
const productSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    price:     { type: Number, required: true },
    qty:       { type: String, required: true },
    img:       { type: String, default: 'placeholder.jpg' },
    category:  { type: String, required: true },
    inStock:   { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});
const Product = mongoose.model('Product', productSchema, 'products');

// ─── All Products (copied from frontend script.js) ────────────────────────────
const allProducts = [

    // ── Vegetables ─────────────────────────────────────────────────────────────
    { name: "Ladies Finger",      price: 40,  qty: "1kg",   img: "ladyiesfinger.jpg",   category: "Vegetables" },
    { name: "Beetroot",           price: 40,  qty: "1kg",   img: "beetroot.jpg",         category: "Vegetables" },
    { name: "brinjal",            price: 40,  qty: "1kg",   img: "brinjal.jpg",          category: "Vegetables" },
    { name: "Bottle Guard",       price: 30,  qty: "1",     img: "bottlegaurd.jpg",      category: "Vegetables" },
    { name: "carrot",             price: 50,  qty: "1kg",   img: "carrot.jpg",           category: "Vegetables" },
    { name: "cauliflower",        price: 20,  qty: "1",     img: "cauliflower.jpg",      category: "Vegetables" },
    { name: "Green Chilli",       price: 50,  qty: "1kg",   img: "chilli.jpg",           category: "Vegetables" },
    { name: "coriander",          price: 20,  qty: "1",     img: "coriander.jpg",        category: "Vegetables" },
    { name: "ginger",             price: 100, qty: "1kg",   img: "ginger.jpg",           category: "Vegetables" },
    { name: "ivygaurd",           price: 60,  qty: "1kg",   img: "ivygaurd.jpg",         category: "Vegetables" },
    { name: "lemon",              price: 10,  qty: "4pcs",  img: "lemon.jpg",            category: "Vegetables" },
    { name: "onion",              price: 25,  qty: "1kg",   img: "onion.jpg",            category: "Vegetables" },
    { name: "peas",               price: 40,  qty: "1kg",   img: "peas.jpg",             category: "Vegetables" },
    { name: "potato",             price: 30,  qty: "1kg",   img: "potato.jpg",           category: "Vegetables" },
    { name: "ridgegaurd",         price: 50,  qty: "1kg",   img: "ridgegaurd.jpg",       category: "Vegetables" },
    { name: "spinach",            price: 15,  qty: "1",     img: "spinach.jpg",          category: "Vegetables" },
    { name: "sweet potato",       price: 40,  qty: "1kg",   img: "sweetpotato.jpg",      category: "Vegetables" },
    { name: "Tomato",             price: 50,  qty: "1kg",   img: "tomato.jpg",           category: "Vegetables" },

    // ── Spices ──────────────────────────────────────────────────────────────────
    { name: "Coriander Powder",   price: 15,  qty: "100g",  img: "cori powder.jpg",      category: "Spices" },
    { name: "bayleaf",            price: 20,  qty: "50g",   img: "bayleaf.jpg",          category: "Spices" },
    { name: "Barley",             price: 100, qty: "1kg",   img: "barley.jpg",           category: "Spices" },
    { name: "Black Pepper",       price: 150, qty: "100g",  img: "black pepper.jpg",     category: "Spices" },
    { name: "Black Cardamon",     price: 40,  qty: "1kg",   img: "black cardamon.jpg",   category: "Spices" },
    { name: "Chicken Masala",     price: 40,  qty: "1kg",   img: "chicken masala.jpg",   category: "Spices" },
    { name: "cashews",            price: 40,  qty: "1kg",   img: "cashews.jpg",          category: "Spices" },
    { name: "Chilli Powder",      price: 40,  qty: "1kg",   img: "chillipowder.jpg",     category: "Spices" },
    { name: "cinnamon",           price: 40,  qty: "1kg",   img: "cinnamon.jpg",         category: "Spices" },
    { name: "cloves",             price: 40,  qty: "1kg",   img: "cloves.jpg",           category: "Spices" },
    { name: "cumin seeds",        price: 40,  qty: "1kg",   img: "cumin seeds.jpg",      category: "Spices" },
    { name: "coriander seeds",    price: 40,  qty: "1kg",   img: "corianderseeds.jpg",   category: "Spices" },
    { name: "Basmathi Rice",      price: 40,  qty: "1kg",   img: "basmathi rice.jpg",    category: "Spices" },
    { name: "Bansi Ravva",        price: 40,  qty: "1kg",   img: "bansi ravva.jpg",      category: "Spices" },
    { name: "Besan Flour",        price: 40,  qty: "1kg",   img: "besan.jpg",            category: "Spices" },
    { name: "Garam Masala",       price: 40,  qty: "1kg",   img: "garam masala.jpg",     category: "Spices" },
    { name: "FishCurry Masala",   price: 40,  qty: "1kg",   img: "fishcurry masala.jpg", category: "Spices" },
    { name: "Fenugreek seeds",    price: 40,  qty: "1kg",   img: "fenugrrek.jpg",        category: "Spices" },
    { name: "Groundnuts",         price: 40,  qty: "1kg",   img: "groundnuts.jpg",       category: "Spices" },
    { name: "Ilachi",             price: 40,  qty: "1kg",   img: "greencardamon.jpg",    category: "Spices" },
    { name: "kismiss",            price: 40,  qty: "1kg",   img: "kismiss.jpg",          category: "Spices" },
    { name: "Kandhi podi",        price: 40,  qty: "1kg",   img: "kandipodi.jpg",        category: "Spices" },
    { name: "Idly ravva",         price: 40,  qty: "1kg",   img: "idly ravva.jpg",       category: "Spices" },
    { name: "Maida",              price: 40,  qty: "1kg",   img: "maida.jpg",            category: "Spices" },
    { name: "Jaapathri",          price: 40,  qty: "1kg",   img: "mace.jpg",             category: "Spices" },
    { name: "Mustard Seeds",      price: 40,  qty: "1kg",   img: "mustard.jpg",          category: "Spices" },
    { name: "Mutton Masala",      price: 40,  qty: "1kg",   img: "mutton masala.jpg",    category: "Spices" },
    { name: "Nutmeg",             price: 40,  qty: "1kg",   img: "nutmeg.jpg",           category: "Spices" },
    { name: "Ragi Flour",         price: 40,  qty: "1kg",   img: "ragi flour.jpg",       category: "Spices" },
    { name: "Red Chilli",         price: 40,  qty: "1kg",   img: "red chili.jpg",        category: "Spices" },
    { name: "Rice Flour",         price: 40,  qty: "1kg",   img: "rice flour.jpg",       category: "Spices" },
    { name: "Rice Ravva",         price: 40,  qty: "1kg",   img: "rice ravva.jpg",       category: "Spices" },
    { name: "Rice",               price: 40,  qty: "1kg",   img: "rice.jpg",             category: "Spices" },
    { name: "Sambar Powder",      price: 40,  qty: "1kg",   img: "sambar powder.jpg",    category: "Spices" },
    { name: "semiya",             price: 40,  qty: "1kg",   img: "semiya.jpg",           category: "Spices" },
    { name: "Sooji Ravva",        price: 40,  qty: "1kg",   img: "sooji.jpg",            category: "Spices" },
    { name: "Star Anise",         price: 40,  qty: "1kg",   img: "staranise.jpg",        category: "Spices" },
    { name: "tamarind",           price: 40,  qty: "1kg",   img: "tamarind.jpg",         category: "Spices" },
    { name: "Turmeric",           price: 40,  qty: "1kg",   img: "turmeric.jpg",         category: "Spices" },
    { name: "Biryani Masala",     price: 65,  qty: "50g",   img: "biryani masala.jpg",   category: "Spices" },

    // ── Stationary ──────────────────────────────────────────────────────────────
    { name: "Color Pencils",      price: 120, qty: "1 Set", img: "color pencils.jpg",    category: "Stationary" },
    { name: "A4 Sheets",          price: 40,  qty: "1kg",   img: "a4.jpg",               category: "Stationary" },
    { name: "Apsara Pencils",     price: 40,  qty: "1kg",   img: "Apsara.jpg",           category: "Stationary" },
    { name: "Crayons",            price: 40,  qty: "1kg",   img: "crayons.jpg",          category: "Stationary" },
    { name: "color papers",       price: 40,  qty: "1kg",   img: "color papers.jpg",     category: "Stationary" },
    { name: "Eraser",             price: 40,  qty: "1kg",   img: "eraser.jpg",           category: "Stationary" },
    { name: "Glue",               price: 40,  qty: "1kg",   img: "glue.jpg",             category: "Stationary" },
    { name: "Natraj pencils",     price: 40,  qty: "1kg",   img: "natraj.jpg",           category: "Stationary" },
    { name: "NoteBooks",          price: 40,  qty: "1kg",   img: "notebooks.jpg",        category: "Stationary" },
    { name: "Red Pens",           price: 40,  qty: "1kg",   img: "red pens.jpg",         category: "Stationary" },
    { name: "sharpener",          price: 40,  qty: "1kg",   img: "sharpener.jpg",        category: "Stationary" },
    { name: "Ruler",              price: 40,  qty: "1kg",   img: "ruler.jpg",            category: "Stationary" },
    { name: "Scissors",           price: 40,  qty: "1kg",   img: "scissors.jpg",         category: "Stationary" },
    { name: "sketches",           price: 40,  qty: "1kg",   img: "sketches.jpg",         category: "Stationary" },
    { name: "slate",              price: 40,  qty: "1kg",   img: "slate.jpg",            category: "Stationary" },
    { name: "Tape",               price: 40,  qty: "1kg",   img: "tape.jpg",             category: "Stationary" },
    { name: "Blue Pens",          price: 10,  qty: "1 Unit",img: "blue pens.jpg",        category: "Stationary" },

    // ── Dairy ───────────────────────────────────────────────────────────────────
    { name: "Bread",              price: 40,  qty: "1pkt",  img: "bread.jpg",            category: "Dairy" },
    { name: "Cow Ghee",           price: 450, qty: "1kg",   img: "cow ghee.jpg",         category: "Dairy" },
    { name: "Ghee",               price: 400, qty: "1kg",   img: "ghee.jpg",             category: "Dairy" },
    { name: "Milk",               price: 40,  qty: "1L",    img: "milk.jpg",             category: "Dairy" },
    { name: "Curd",               price: 20,  qty: "50g",   img: "curd.jpg",             category: "Dairy" },
    { name: "Buns",               price: 20,  qty: "50g",   img: "pav buns.jpg",         category: "Dairy" },

    // ── Cleaning ────────────────────────────────────────────────────────────────
    { name: "Phenyl",             price: 20,  qty: "50g",   img: "phenyl.jpg",           category: "Cleaning" },
    { name: "Steel Scrubber",     price: 20,  qty: "50g",   img: "steel.jpg",            category: "Cleaning" },
    { name: "Vim Bar",            price: 20,  qty: "50g",   img: "vim.jpg",              category: "Cleaning" },

    // ── Washing ─────────────────────────────────────────────────────────────────
    { name: "Arieal surf",        price: 20,  qty: "50g",   img: "ariel.jpg",            category: "Washing" },
    { name: "Rin surf",           price: 20,  qty: "50g",   img: "rin powder.jpg",       category: "Washing" },
    { name: "Rin Soap",           price: 20,  qty: "50g",   img: "rin soap.jpg",         category: "Washing" },
    { name: "Surfexcel surf",     price: 20,  qty: "50g",   img: "Surfexcel surf.jpg",   category: "Washing" },
    { name: "Surfexcel soap",     price: 20,  qty: "50g",   img: "Surfexcel soap.jpg",   category: "Washing" },
    { name: "Tide surf",          price: 20,  qty: "50g",   img: "tide.jpg",             category: "Washing" },

    // ── Puja Essentials ─────────────────────────────────────────────────────────
    { name: "Cycle 3in1 Agarbathi", price: 20, qty: "50g", img: "agar cycle.jpg",        category: "Puja Essentials" },
    { name: "Camphor",            price: 20,  qty: "50g",   img: "camphor.jpg",          category: "Puja Essentials" },
    { name: "Candles",            price: 20,  qty: "50g",   img: "candles.jpg",          category: "Puja Essentials" },

    // ── Chips & Namkeens ────────────────────────────────────────────────────────
    { name: "Aloo Bhujia",        price: 20,  qty: "50g",   img: "aloobhujia.jpg",       category: "Chips&Namkeens" },
    { name: "Banana Chips",       price: 20,  qty: "50g",   img: "banchips.jpg",         category: "Chips&Namkeens" },
    { name: "Bingo Original Style", price: 20, qty: "50g", img: "bingooriginal.jpg",     category: "Chips&Namkeens" },
    { name: "Black Pepper Lays",  price: 20,  qty: "50g",   img: "blacklays.jpg",        category: "Chips&Namkeens" },
    { name: "Blue Lays",          price: 20,  qty: "50g",   img: "bluelays.jpg",         category: "Chips&Namkeens" },
    { name: "Blue Mad Angles",    price: 20,  qty: "50g",   img: "bluemadangles.jpg",    category: "Chips&Namkeens" },
    { name: "Chana Cracker",      price: 20,  qty: "50g",   img: "chana.jpg",            category: "Chips&Namkeens" },
    { name: "Cheesy Pringles",    price: 20,  qty: "50g",   img: "cheesey.jpg",          category: "Chips&Namkeens" },
    { name: "Cheetos Masala Balls", price: 20, qty: "50g",  img: "cheetos.jpg",          category: "Chips&Namkeens" },
    { name: "Chillie Lemon Lays", price: 20,  qty: "50g",   img: "greenlays.jpg",        category: "Chips&Namkeens" },
    { name: "Khatta Meetha",      price: 20,  qty: "50g",   img: "khattameeta.jpg",      category: "Chips&Namkeens" },
    { name: "Green Chutney Kurkure", price: 20, qty: "50g", img: "lgkur.jpg",            category: "Chips&Namkeens" },
    { name: "Little Hearts",      price: 20,  qty: "50g",   img: "littlehearts.jpg",     category: "Chips&Namkeens" },
    { name: "Achaari Masti Mad Angles", price: 20, qty: "50g", img: "madangles.jpg",     category: "Chips&Namkeens" },
    { name: "Masala kaju",        price: 20,  qty: "50g",   img: "masalakaju.jpg",       category: "Chips&Namkeens" },
    { name: "Masala Peanuts",     price: 20,  qty: "50g",   img: "maspea.jpg",           category: "Chips&Namkeens" },
    { name: "Mixture",            price: 20,  qty: "50g",   img: "mixture.jpg",          category: "Chips&Namkeens" },
    { name: "Hot chilli lays",    price: 20,  qty: "50g",   img: "orangelays.jpg",       category: "Chips&Namkeens" },
    { name: "Pringles Paprika",   price: 20,  qty: "50g",   img: "paprika.jpg",          category: "Chips&Namkeens" },
    { name: "POHA",               price: 20,  qty: "50g",   img: "poha.jpg",             category: "Chips&Namkeens" },
    { name: "Prawn Cocktail Pringles", price: 20, qty: "50g", img: "prawn.jpg",          category: "Chips&Namkeens" },
    { name: "Pringles Original",  price: 20,  qty: "50g",   img: "pringles.jpg",         category: "Chips&Namkeens" },
    { name: "Masala Munch Kurkure", price: 20, qty: "50g",  img: "redkur.jpg",           category: "Chips&Namkeens" },
    { name: "Salted Kaju",        price: 20,  qty: "50g",   img: "salkaju.jpg",          category: "Chips&Namkeens" },
    { name: "Salted Peanuts",     price: 20,  qty: "50g",   img: "salpea.jpg",           category: "Chips&Namkeens" },
    { name: "Soya Sticks",        price: 20,  qty: "50g",   img: "soyasticks.jpg",       category: "Chips&Namkeens" },
    { name: "Sweet Honey Lays",   price: 20,  qty: "50g",   img: "sweetlays.jpg",        category: "Chips&Namkeens" },
    { name: "Tedhe Medhe",        price: 20,  qty: "50g",   img: "tedhemedhe.jpg",       category: "Chips&Namkeens" },
    { name: "Hot Spicy Bingo",    price: 20,  qty: "50g",   img: "blacklays.jpg",        category: "Chips&Namkeens" },
    { name: "Creme Pringles",     price: 20,  qty: "50g",   img: "creme.png",            category: "Chips&Namkeens" },

    // ── Cold Drinks & Juices ────────────────────────────────────────────────────
    { name: "Fanta",              price: 100, qty: "1L",    img: "fanta.jpg",            category: "ColdDrinks&Juices" },
    { name: "Frooti",             price: 10,  qty: "1",     img: "frooti.jpg",           category: "ColdDrinks&Juices" },
    { name: "Maaza",              price: 50,  qty: "500ml", img: "maaza.jpg",            category: "ColdDrinks&Juices" },
    { name: "ORSL",               price: 35,  qty: "1",     img: "orsl.jpg",             category: "ColdDrinks&Juices" },
    { name: "Sprite",             price: 45,  qty: "450ml", img: "sprite.jpg",           category: "ColdDrinks&Juices" },
    { name: "ThumsUP",            price: 45,  qty: "450ml", img: "thumsup.jpg",          category: "ColdDrinks&Juices" },
    { name: "CocoCola",           price: 50,  qty: "1L",    img: "cococola.jpg",         category: "ColdDrinks&Juices" },

    // ── Chocolates ──────────────────────────────────────────────────────────────
    { name: "5 Star",             price: 5,   qty: "1",     img: "5star.jpg",            category: "chocolates" },
    { name: "Bar One",            price: 5,   qty: "1",     img: "barone.jpg",           category: "chocolates" },
    { name: "Dairy Milk",         price: 10,  qty: "5",     img: "dairymilk.jpg",        category: "chocolates" },
    { name: "Dark Fantasy",       price: 5,   qty: "1",     img: "dark.jpg",             category: "chocolates" },
    { name: "KitKat",             price: 10,  qty: "1",     img: "kitkat.jpg",           category: "chocolates" },
    { name: "MilkyBar",           price: 10,  qty: "1",     img: "milkybar.jpg",         category: "chocolates" },
    { name: "Munch",              price: 5,   qty: "1",     img: "munch.jpg",            category: "chocolates" },
    { name: "Perk",               price: 5,   qty: "1",     img: "perk.jpg",             category: "chocolates" },

    // ── Instant Foods ───────────────────────────────────────────────────────────
    { name: "Maggie Noodles",     price: 14,  qty: "1",     img: "maggiee.jpg",          category: "Instant Foods" },
    { name: "Yippee Noodles",     price: 10,  qty: "1",     img: "yippee.jpg",           category: "Instant Foods" },

    // ── Biscuits ────────────────────────────────────────────────────────────────
    { name: "5050 Sweet&Salty",   price: 50,  qty: "60g",   img: "5050.jpg",             category: "Biscuits" },
    { name: "Good Day-Cashew Nuts", price: 20, qty: "50g",  img: "goodday.jpg",          category: "Biscuits" },
    { name: "Marie Gold",         price: 20,  qty: "50g",   img: "mariegold.jpg",        category: "Biscuits" },
    { name: "MilK Bikis",         price: 20,  qty: "50g",   img: "milkinickis.jpg",      category: "Biscuits" },
    { name: "Nutri Choice",       price: 20,  qty: "50g",   img: "nutrichoice.jpg",      category: "Biscuits" },
    { name: "Oreo",               price: 20,  qty: "50g",   img: "oreo.jpg",             category: "Biscuits" },
    { name: "Unibic",             price: 10,  qty: "1",     img: "unibic.jpg",           category: "Biscuits" },

    // ── Bath & Body ─────────────────────────────────────────────────────────────
    { name: "Dove sweet cream bar", price: 350, qty: "650ml", img: "dove.jpg",           category: "Bath&Body" },
    { name: "Dettol Soap",        price: 20,  qty: "50g",   img: "dettol soap.jpg",      category: "Bath&Body" },
    { name: "Life Boy Soap",      price: 20,  qty: "50g",   img: "lifeboy.jpg",          category: "Bath&Body" },
    { name: "LUX soap",           price: 20,  qty: "50g",   img: "lux.jpg",              category: "Bath&Body" },
    { name: "Medimix soap",       price: 20,  qty: "50g",   img: "medimix.jpg",          category: "Bath&Body" },
    { name: "Mysore Sandal Soap", price: 20,  qty: "50g",   img: "ms soap.jpg",          category: "Bath&Body" },
    { name: "Santoor AloeFresh Soap", price: 20, qty: "50g", img: "santoor.jpg",         category: "Bath&Body" },

    // ── Haircare ────────────────────────────────────────────────────────────────
    { name: "Chick shampoo",      price: 200, qty: "190ml", img: "chik.jpg",             category: "Haircare" },
    { name: "Clinic Plus",        price: 1,   qty: "2g",    img: "clinic.jpg",           category: "Haircare" },
    { name: "Head & Shoulders",   price: 180, qty: "200ml", img: "head&s.jpg",           category: "Haircare" },
    { name: "Meera Anti-Dandruff Shampoo", price: 20, qty: "50g", img: "meera.jpg",      category: "Haircare" },
    { name: "Sunsilk Shampoo",    price: 20,  qty: "50g",   img: "sunsilk.jpg",          category: "Haircare" },

    // ── Skincare ────────────────────────────────────────────────────────────────
    { name: "Parachute Coconut Oil", price: 90, qty: "200ml", img: "parachute.jpg",      category: "Skincare" },

    // ── Oralcare ────────────────────────────────────────────────────────────────
    { name: "CloseUp Paste",      price: 10,  qty: "20g",   img: "closeup.jpg",          category: "Oralcare" },
    { name: "colgate Paste",      price: 10,  qty: "20g",   img: "colgatr.jpg",          category: "Oralcare" },
    { name: "Dabur Red Paste",    price: 10,  qty: "20g",   img: "dabur red.jpg",        category: "Oralcare" },
    { name: "ToothBrush Colgate", price: 80,  qty: "6pcs",  img: "toothbrush.jpg",       category: "Oralcare" },
    { name: "Steel Toungle Cleaner", price: 4, qty: "1",    img: "tounge cleaner.jpg",   category: "Oralcare" },

    // ── Babycare ────────────────────────────────────────────────────────────────
    { name: "Johnson's Baby Oil", price: 90,  qty: "200ml", img: "baby oil.jpg",         category: "Babycare" },
    { name: "Johnson's baby Powder", price: 20, qty: "50g", img: "baby powder.jpg",      category: "Babycare" },
    { name: "Johnson's Baby Soap", price: 20, qty: "50g",   img: "baby soap.jpg",        category: "Babycare" },
    { name: "Nestle Cerelac wheat & Honey", price: 20, qty: "50g", img: "cerelac.jpg",   category: "Babycare" },
    { name: "Diapers",            price: 10,  qty: "1",     img: "diapers.jpg",          category: "Babycare" },

    // ── Feminine Hygiene ────────────────────────────────────────────────────────
    { name: "StayFree Secure",    price: 110, qty: "18pcs", img: "stayfree.jpg",         category: "Feminine Hygiene" },
    { name: "Whisper XL",         price: 400, qty: "50pcs", img: "whisper.jpg",          category: "Feminine Hygiene" },

    // ── Makeup ──────────────────────────────────────────────────────────────────
    { name: "Ponds Powder",       price: 70,  qty: "100g",  img: "ponds.jpg",            category: "Makeup" },
];

// ─── Seed ─────────────────────────────────────────────────────────────────────
async function seed() {
    try {
        await mongoose.connection.once('open', () => {});
        // Wait for connection
        await new Promise(r => setTimeout(r, 2000));

        console.log('✅ Connected to MongoDB');
        console.log(`📦 Seeding ${allProducts.length} products...\n`);

        let inserted = 0;
        let skipped  = 0;

        for (const p of allProducts) {
            const exists = await Product.findOne({ name: p.name });
            if (exists) {
                console.log(`  ⏭  Skipped (already exists): ${p.name}`);
                skipped++;
            } else {
                await new Product({ ...p, inStock: true }).save();
                console.log(`  ✅ Inserted: ${p.name} [${p.category}]`);
                inserted++;
            }
        }

        console.log(`\n─────────────────────────────────────`);
        console.log(`✅ Done! Inserted: ${inserted} | Skipped: ${skipped} | Total: ${allProducts.length}`);
        console.log(`─────────────────────────────────────`);
        console.log(`\n🎉 Open the Admin Panel → Products tab to see all products!`);

    } catch (err) {
        console.error('❌ Seeding failed:', err.message);
    } finally {
        mongoose.disconnect();
    }
}

seed();