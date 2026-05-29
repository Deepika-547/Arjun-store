const inventory = {
    "Vegetables": [
        { name: "Ladies Finger", price: 40, qty: "1kg", img: "ladyiesfinger.jpg" },
        { name: "Beetroot", price: 40, qty: "1kg", img: "beetroot.jpg" },
        { name: "brinjal", price: 40, qty: "1kg", img: "brinjal.jpg" },
        { name: "Bottle Guard", price: 30, qty: "1", img: "bottlegaurd.jpg" },
        { name: "carrot", price: 50, qty: "1kg", img: "carrot.jpg" },
        { name: "cauliflower", price: 20, qty: "1", img: "cauliflower.jpg" },
        { name: "Green Chilli", price: 50, qty: "1kg", img: "chilli.jpg" },
        { name: "coriander", price: 20, qty: "1", img: "coriander.jpg" },
        { name: "ginger", price: 100, qty: "1kg", img: "ginger.jpg" },
        { name: "ivygaurd", price: 60, qty: "1kg", img: "ivygaurd.jpg" },
        { name: "lemon", price: 10, qty: "4pcs", img: "lemon.jpg" },
        { name: "onion", price: 25, qty: "1kg", img: "onion.jpg" },
        { name: "peas", price: 40, qty: "1kg", img: "peas.jpg" },
        { name: "potato", price: 30, qty: "1kg", img: "potato.jpg" },
        { name: "ridgegaurd", price: 50, qty: "1kg", img: "ridgegaurd.jpg" },
        { name: "spinach", price: 15, qty: "1", img: "spinach.jpg" },
        { name: "sweet potato", price: 40, qty: "1kg", img: "sweetpotato.jpg" },
        { name: "Tomato", price: 50, qty: "1kg", img: "tomato.jpg" }
    ],
    "Spices": [
        { name: "Coriander Powder", price: 15, qty: "100g", img: "cori powder.jpg" },
        { name: "bayleaf", price: 20, qty: "50g", img: "bayleaf.jpg" },
        { name: "Barley", price: 100, qty: "1kg", img: "barley.jpg" },
        { name: "Black Pepper", price: 150, qty: "100g", img: "black pepper.jpg" },
        { name: "Black Cardamon", price: 40, qty: "1kg", img: "black cardamon.jpg" },
        { name: "Chicken Masala", price: 40, qty: "1kg", img: "chicken masala.jpg" },
        { name: "cashews", price: 40, qty: "1kg", img: "cashews.jpg" },
        { name: "Chilli Powder", price: 40, qty: "1kg", img: "chillipowder.jpg" },
        { name: "cinnamon", price: 40, qty: "1kg", img: "cinnamon.jpg" },
        { name: "cloves", price: 40, qty: "1kg", img: "cloves.jpg" },
        { name: "cumin seeds", price: 40, qty: "1kg", img: "cumin seeds.jpg" },
        { name: "coriander seeds", price: 40, qty: "1kg", img: "corianderseeds.jpg" },
        { name: "Basmathi Rice", price: 40, qty: "1kg", img: "basmathi rice.jpg" },
        { name: "Bansi Ravva", price: 40, qty: "1kg", img: "bansi ravva.jpg" },
        { name: "Besan Flour", price: 40, qty: "1kg", img: "besan.jpg" },
        { name: "Garam Masala", price: 40, qty: "1kg", img: "garam masala.jpg" },
        { name: "FishCurry Masala", price: 40, qty: "1kg", img: "fishcurry masala.jpg" },
        { name: "Fenugreek seeds", price: 40, qty: "1kg", img: "fenugrrek.jpg" },
        { name: "Groundnuts", price: 40, qty: "1kg", img: "groundnuts.jpg" },
        { name: "Ilachi", price: 40, qty: "1kg", img: "greencardamon.jpg" },
        { name: "kismiss", price: 40, qty: "1kg", img: "kismiss.jpg" },
        { name: "Kandhi podi", price: 40, qty: "1kg", img: "kandipodi.jpg" },
        { name: "Idly ravva", price: 40, qty: "1kg", img: "idly ravva.jpg" },
        { name: "Maida", price: 40, qty: "1kg", img: "maida.jpg" },
        { name: "Jaapathri", price: 40, qty: "1kg", img: "mace.jpg" },
        { name: "Mustard Seeds", price: 40, qty: "1kg", img: "mustard.jpg" },
        { name: "Mutton Masala", price: 40, qty: "1kg", img: "mutton masala.jpg" },
        { name: "Nutmeg", price: 40, qty: "1kg", img: "nutmeg.jpg" },
        { name: "Ragi Flour", price: 40, qty: "1kg", img: "ragi flour.jpg" },
        { name: "Red Chilli", price: 40, qty: "1kg", img: "red chili.jpg" },
        { name: "Rice Flour", price: 40, qty: "1kg", img: "rice flour.jpg" },
        { name: "Rice Ravva", price: 40, qty: "1kg", img: "rice ravva.jpg" },
        { name: "Rice", price: 40, qty: "1kg", img: "rice.jpg" },
        { name: "Sambar Powder", price: 40, qty: "1kg", img: "sambar powder.jpg" },
        { name: "semiya", price: 40, qty: "1kg", img: "semiya.jpg" },
        { name: "Sooji Ravva", price: 40, qty: "1kg", img: "sooji.jpg" },
        { name: "Star Anise", price: 40, qty: "1kg", img: "staranise.jpg" },
        { name: "tamarind", price: 40, qty: "1kg", img: "tamarind.jpg" },
        { name: "Turmeric", price: 40, qty: "1kg", img: "turmeric.jpg" },
        { name: "Biryani Masala", price: 65, qty: "50g", img: "biryani masala.jpg" }
    ],
    "Stationary": [
        { name: "Color Pencils", price: 120, qty: "1 Set", img: "color pencils.jpg" },
        { name: "A4 Sheets", price: 40, qty: "1kg", img: "a4.jpg" },
        { name: "Apsara Pencils", price: 40, qty: "1kg", img: "Apsara.jpg" },
        { name: "Crayons", price: 40, qty: "1kg", img: "crayons.jpg" },
        { name: "color papers", price: 40, qty: "1kg", img: "color papers.jpg" },
        { name: "Eraser", price: 40, qty: "1kg", img: "eraser.jpg" },
        { name: "Glue", price: 40, qty: "1kg", img: "glue.jpg" },
        { name: "Natraj pencils", price: 40, qty: "1kg", img: "natraj.jpg" },
        { name: "NoteBooks", price: 40, qty: "1kg", img: "notebooks.jpg" },
        { name: "Red Pens", price: 40, qty: "1kg", img: "red pens.jpg" },
        { name: "sharpener", price: 40, qty: "1kg", img: "sharpener.jpg" },
        { name: "Ruler", price: 40, qty: "1kg", img: "ruler.jpg" },
        { name: "Scissors", price: 40, qty: "1kg", img: "scissors.jpg" },
        { name: "sketches", price: 40, qty: "1kg", img: "sketches.jpg" },
        { name: "slate", price: 40, qty: "1kg", img: "slate.jpg" },
        { name: "Tape", price: 40, qty: "1kg", img: "tape.jpg" },
        { name: "Blue Pens", price: 10, qty: "1 Unit", img: "blue pens.jpg" }
    ],
    "Dairy": [
        { name: "Bread", price: 40, qty: "1pkt", img: "bread.jpg" },
        { name: "Cow Ghee", price: 450, qty: "1kg", img: "cow ghee.jpg" },
        { name: "Ghee", price: 400, qty: "1kg", img: "ghee.jpg" },
        { name: "Milk", price: 40, qty: "1L", img: "milk.jpg" },
        { name: "Curd", price: 20, qty: "50g", img: "curd.jpg" },
        { name: "Buns", price: 20, qty: "50g", img: "pav buns.jpg" }
    ]
};
const categories = [
    { name: "Vegetables", img: "veg.jpeg" },
    { name: "Spices", img: "spices.jpeg" },
    { name: "Stationary", img: "stationary.jpeg" },
    { name: "pulses", img: "dals.jpeg" },
    { name: "Dairy", img: "diary.jpeg" }
];
const snacksCategories = [
    { name: "Chips&Namkeens", img: "chips.jpeg" },
    { name: "ColdDrinks&Juices", img: "drinks&juices.jpeg" },
    { name: "chocolates", img: "choco.jpeg" },
    { name: "Instant Foods", img: "instant.jpeg" },
    { name: "Biscuits", img: "biscuits.jpeg" }
];
const beautyCategories = [
    { name: "Bath&Body", img: "bath&body.jpeg" },
    { name: "Haircare", img: "haircare.jpeg" },
    { name: "Skincare", img: "skincare.jpeg" },
    { name: "Oralcare", img: "oralcare.jpeg" },
    { name: "Babycare", img: "babycare.jpeg" },
    { name: "Feminine Hygiene", img: "fem.jpeg" },
    { name: "Makeup", img: "makeup.jpeg" }
];
const cleanCategories = [
    { name: "Cleaning", img: "clean.jpeg" },
    { name: "Washing", img: "clean&wash.jpeg" },
    { name: "Puja Essentials", img: "puja.jpeg" }
];
const cleanInventory = {
    "Cleaning": [
        { name: "Phenyl", price: 20, qty: "50g", img: "phenyl.jpg" },
        { name: "Steel Scrubber", price: 20, qty: "50g", img: "steel.jpg" },
        { name: "Vim Bar", price: 20, qty: "50g", img: "vim.jpg" }
    ],
    "Washing": [
        { name: "Arieal surf", price: 20, qty: "50g", img: "ariel.jpg" },
        { name: "Rin surf", price: 20, qty: "50g", img: "rin powder.jpg" },
        { name: "Rin Soap", price: 20, qty: "50g", img: "rin soap.jpg" },
        { name: "Surfexcel surf", price: 20, qty: "50g", img: "Surfexcel surf.jpg" },
        { name: "Surfexcel soap", price: 20, qty: "50g", img: "Surfexcel soap.jpg" },
        { name: "Tide surf", price: 20, qty: "50g", img: "tide.jpg" }
    ],
    "Puja Essentials": [
        { name: "Cycle 3in1 Agarbathi", price: 20, qty: "50g", img: "agar cycle.jpg" },
        { name: "Camphor", price: 20, qty: "50g", img: "camphor.jpg" },
        { name: "Candles", price: 20, qty: "50g", img: "candles.jpg" },
        { name: "Coconut Oil", price: 20, qty: "50g", img: "coconut oil.jpg" },
        { name: "Coconut", price: 20, qty: "50g", img: "coconut.jpg" },
        { name: "Cow ghee", price: 20, qty: "50g", img: "cow ghee.jpg" },
        { name: "Dhoop Sticks", price: 20, qty: "50g", img: "dhoop.jpg" },
        { name: "Kumkum", price: 20, qty: "50g", img: "kumkum.jpg" },
        { name: "Turmeric", price: 20, qty: "50g", img: "turmeric.jpg" },
        { name: "Gandham", price: 20, qty: "50g", img: "spowder.jpg" }
    ]
};
const snacksInventory = {
    "Chips&Namkeens": [
        { name: "MasalaLays", price: 20, qty: "50g", img: "bluelays.jpg" },
        { name: "Bingo Original", price: 10, qty: "40g", img: "bingooriginal.jpg" },
        { name: "Aloo Bhujia", price: 20, qty: "50g", img: "aloobhujia.jpg" },
        { name: "Banana Chips", price: 20, qty: "50g", img: "banchips.jpg" },
        { name: "Peri Peri Mad Angles", price: 20, qty: "50g", img: "bluemadangles.jpg" },
        { name: "Chana Cracker", price: 20, qty: "50g", img: "chana.jpg" },
        { name: "Cheesy Pringles", price: 20, qty: "50g", img: "cheesey.jpg" },
        { name: "Cheetos Masala Balls", price: 20, qty: "50g", img: "cheetos.jpg" },
        { name: "Chillie Lemon Lays", price: 20, qty: "50g", img: "greenlays.jpg" },
        { name: "Khatta Meetha", price: 20, qty: "50g", img: "khattameeta.jpg" },
        { name: "Green Chutney Kurkure", price: 20, qty: "50g", img: "lgkur.jpg" },
        { name: "Little Hearts", price: 20, qty: "50g", img: "littlehearts.jpg" },
        { name: "Achaari Masti Mad Angles", price: 20, qty: "50g", img: "madangles.jpg" },
        { name: "Masala kaju", price: 20, qty: "50g", img: "masalakaju.jpg" },
        { name: "Masala Peanuts", price: 20, qty: "50g", img: "maspea.jpg" },
        { name: "Mixture", price: 20, qty: "50g", img: "mixture.jpg" },
        { name: "Hot chilli lays", price: 20, qty: "50g", img: "orangelays.jpg" },
        { name: "Pringles Paprika", price: 20, qty: "50g", img: "paprika.jpg" },
        { name: "POHA", price: 20, qty: "50g", img: "poha.jpg" },
        { name: "Prawn Cocktail Pringles", price: 20, qty: "50g", img: "prawn.jpg" },
        { name: "Pringles Original", price: 20, qty: "50g", img: "pringles.jpg" },
        { name: "Masala Munch Kurkure", price: 20, qty: "50g", img: "redkur.jpg" },
        { name: "Salted Kaju", price: 20, qty: "50g", img: "salkaju.jpg" },
        { name: "Salted Peanuts", price: 20, qty: "50g", img: "salpea.jpg" },
        { name: "Soya Sticks", price: 20, qty: "50g", img: "soyasticks.jpg" },
        { name: "Sweet Honey Lays", price: 20, qty: "50g", img: "sweetlays.jpg" },
        { name: "Tedhe Medhe", price: 20, qty: "50g", img: "tedhemedhe.jpg" },
        { name: "Hot Spicy Bingo", price: 20, qty: "50g", img: "blacklays.jpg" },
        { name: "Creme Pringles", price: 20, qty: "50g", img: "creme.png" }
    ],
    "ColdDrinks&Juices": [
        { name: "Fanta", price: 100, qty: "1L", img: "fanta.jpg" },
        { name: "Frooti", price: 10, qty: "1", img: "frooti.jpg" },
        { name: "Maaza", price: 50, qty: "500ml", img: "maaza.jpg" },
        { name: "ORSL", price: 35, qty: "1", img: "orsl.jpg" },
        { name: "Sprite", price: 45, qty: "450ml", img: "sprite.jpg" },
        { name: "ThumsUP", price: 45, qty: "450ml", img: "thumsup.jpg" },
        { name: "CocoCola", price: 50, qty: "1L", img: "cococola.jpg" }
    ],
    "chocolates": [
        { name: "5 Star", price: 5, qty: "1", img: "5star.jpg" },
        { name: "Bar One", price: 5, qty: "1", img: "barone.jpg" },
        { name: "Dairy Milk", price: 10, qty: "5", img: "dairymilk.jpg" },
        { name: "Dark Fantasy", price: 5, qty: "1", img: "dark.jpg" },
        { name: "KitKat", price: 10, qty: "1", img: "kitkat.jpg" },
        { name: "MilkyBar", price: 10, qty: "1", img: "milkybar.jpg" },
        { name: "Munch", price: 5, qty: "1", img: "munch.jpg" },
        { name: "Perk", price: 5, qty: "1", img: "perk.jpg" }
    ],
    "Instant Foods": [
        { name: "Maggie Noodles", price: 14, qty: "1", img: "maggiee.jpg" },
        { name: "Yippee Noodles", price: 10, qty: "1", img: "yippee.jpg" }
    ],
    "Biscuits": [
        { name: "5050 Sweet&Salty", price: 50, qty: "60g", img: "5050.jpg" },
        { name: "Good Day-Cashew Nuts", price: 20, qty: "50g", img: "goodday.jpg" },
        { name: "Marie Gold", price: 20, qty: "50g", img: "mariegold.jpg" },
        { name: "MilK Bikis", price: 20, qty: "50g", img: "milkinickis.jpg" },
        { name: "Nutri Choice", price: 20, qty: "50g", img: "nutrichoice.jpg" },
        { name: "Oreo", price: 20, qty: "50g", img: "oreo.jpg" },
        { name: "Unibic", price: 10, qty: "1", img: "unibic.jpg" }
    ]
};
const beautyInventory = {
    "Bath&Body": [
        { name: "Dove sweet cream bar", price: 350, qty: "650ml", img: "dove.jpg" },
        { name: "Dettol Soap", price: 20, qty: "50g", img: "dettol soap.jpg" },
        { name: "Life Boy Soap", price: 20, qty: "50g", img: "lifeboy.jpg" },
        { name: "LUX soap", price: 20, qty: "50g", img: "lux.jpg" },
        { name: "Medimix soap", price: 20, qty: "50g", img: "medimix.jpg" },
        { name: "Mysore Sandal Soap", price: 20, qty: "50g", img: "ms soap.jpg" },
        { name: "Santoor AloeFresh Soap", price: 20, qty: "50g", img: "santoor.jpg" }
    ],
    "Haircare": [
        { name: "Chick shampoo", price: 200, qty: "190ml", img: "chik.jpg" },
        { name: "Clinic Plus", price: 1, qty: "2g", img: "clinic.jpg" },
        { name: "Head & Shoulders", price: 180, qty: "200ml", img: "head&s.jpg" },
        { name: "Meera Anti-Dandruff Shampoo", price: 20, qty: "50g", img: "meera.jpg" },
        { name: "Sunsilk Shampoo", price: 20, qty: "50g", img: "sunsilk.jpg" }
    ],
    "Skincare": [
        { name: "Parachute Coconut Oil", price: 90, qty: "200ml", img: "parachute.jpg" }
    ],
    "Oralcare": [
        { name: "CloseUp Paste", price: 10, qty: "20g", img: "closeup.jpg" },
        { name: "colgate Paste", price: 10, qty: "20g", img: "colgatr.jpg" },
        { name: "Dabur Red Paste", price: 10, qty: "20g", img: "dabur red.jpg" },
        { name: "ToothBrush Colgate", price: 80, qty: "6pcs", img: "toothbrush.jpg" },
        { name: "Steel Toungle Cleaner", price: 4, qty: "1", img: "tounge cleaner.jpg" }
    ],
    "Babycare": [
        { name: "Johnson's Baby Oil", price: 90, qty: "200ml", img: "baby oil.jpg" },
        { name: "Johnson's baby Powder", price: 20, qty: "50g", img: "baby powder.jpg" },
        { name: "Johnson's Baby Soap", price: 20, qty: "50g", img: "baby soap.jpg" },
        { name: "Nestle Cerelac wheat & Honey", price: 20, qty: "50g", img: "cerelac.jpg" },
        { name: "Diapers", price: 10, qty: "1", img: "diapers.jpg" }
    ],
    "Feminine Hygiene": [
        { name: "StayFree Secure", price: 110, qty: "18pcs", img: "stayfree.jpg" },
        { name: "Whisper XL", price: 400, qty: "50pcs", img: "whisper.jpg" }
    ],
    "Makeup": [
        { name: "Ponds Powder", price: 70, qty: "100g", img: "ponds.jpg" }
    ]
};

// ─── Global State ─────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
let currentAuthMode = 'login';

// ─── ON PAGE LOAD ─────────────────────────────────────────────────────────────

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category  = urlParams.get('category');
    const refCode   = urlParams.get('ref');

    // ── Fetch stock map FIRST so cards render correctly on first paint ──────────
    try {
        const r = await fetch('https://arjun-store.onrender.com/products/stock');
        const { stockMap } = await r.json();
        if (stockMap) window._stockMap = stockMap;
    } catch (e) {
        window._stockMap = {};
    }

    // ── Now render page content (stockMap is ready) ─────────────────────────────
    if (category) {
        renderItems(category);
    } else {
        if (document.getElementById("snack-grid"))     renderCategories(snacksCategories, "snack-grid");
        if (document.getElementById("beauty-grid"))    renderCategories(beautyCategories, "beauty-grid");
        if (document.getElementById("clean-grid"))     renderCategories(cleanCategories,  "clean-grid");
        if (document.getElementById("household-grid")) renderCategories(categories,        "household-grid");
        const mainTitle = document.getElementById("view-title");
        if (mainTitle) mainTitle.innerText = "Household Groceries";
    }

    updateCart();
    updateLoginUI();
    initStickyCategoryNav();
    manageCheckoutButton();
    loadFlashSales();
    updateWishlistBadge();
    renderRecentlyViewed();

    // ── Handle referral link ───────────────────────────────────
    if (refCode) {
        handleReferralLink(refCode);
    }
};
 
// ─── HANDLE AUTH (LOGIN & REGISTER) ──────────────────────────────────────────
async function handleAuth() {
    const name  = document.getElementById("user-name")?.value.trim() || "";
    const email = document.getElementById("user-email")?.value.trim() || "";
    const phone = document.getElementById("user-mobile")?.value.trim() || "";

    const errorDiv   = document.getElementById('auth-error');
    const successDiv = document.getElementById('auth-success');

    errorDiv.style.display   = 'none';
    successDiv.style.display = 'none';

    const isRegister = document.getElementById("tab-register").classList.contains("active");
    const btn        = document.getElementById('auth-submit-btn');

    // ── REGISTER FLOW ─────────────────────────────────────────────────────────
    if (isRegister) {

        // Step 1: Send OTP
        if (btn.dataset.step !== 'verify-reg') {

            if (name.length < 3) {
                errorDiv.innerText = "Please enter your full name.";
                errorDiv.style.display = "block";
                return;
            }

            if (!email.includes('@')) {
                errorDiv.innerText = "Enter a valid email address.";
                errorDiv.style.display = "block";
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                errorDiv.innerText = "Enter a valid 10-digit mobile number.";
                errorDiv.style.display = "block";
                return;
            }

            btn.innerText = "Sending OTP...";
            btn.disabled = true;

            try {

                const res = await fetch("https://arjun-store.onrender.com/send-register-otp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, phone })
                });

                const data = await res.json();

                if (data.success) {

                    successDiv.innerText = `✅ ${data.message}`;
                    successDiv.style.display = "block";

                    showOTPInput(phone, 'verify-reg');

                } else {

                    errorDiv.innerText = data.message;
                    errorDiv.style.display = "block";

                    btn.innerText = "Create Account";
                    btn.disabled = false;
                }

            } catch (err) {

                errorDiv.innerText = "Server error. Please try again.";
                errorDiv.style.display = "block";

                btn.innerText = "Create Account";
                btn.disabled = false;
            }

            return;
        }

        // Step 2: Verify OTP
        const otp = document.getElementById('user-otp')?.value.trim();

        if (!otp || otp.length !== 6) {
            errorDiv.innerText = "Please enter the 6-digit OTP.";
            errorDiv.style.display = "block";
            return;
        }

        btn.innerText = "Verifying...";
        btn.disabled = true;

        try {

            const res = await fetch("https://arjun-store.onrender.com/verify-register-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ phone, otp })
            });

            const data = await res.json();

            if (data.success) {

                successDiv.innerText = "✅ " + data.message;
                successDiv.style.display = "block";

                resetOTPState();

                setTimeout(() => {
                    switchTab('login');
                }, 1500);

            } else {

                errorDiv.innerText = data.message;
                errorDiv.style.display = "block";

                btn.innerText = "Verify OTP";
                btn.disabled = false;
            }

        } catch (err) {

            errorDiv.innerText = "Server error. Please try again.";
            errorDiv.style.display = "block";

            btn.innerText = "Verify OTP";
            btn.disabled = false;
        }

        return;
    }

    // ── LOGIN FLOW ────────────────────────────────────────────────────────────

    // Step 1: Send OTP
    if (btn.dataset.step !== 'verify-login') {

        if (!/^\d{10}$/.test(phone)) {
            errorDiv.innerText = "Enter a valid 10-digit mobile number.";
            errorDiv.style.display = "block";
            return;
        }

        btn.innerText = "Sending OTP...";
        btn.disabled = true;

        try {

            const res = await fetch("https://arjun-store.onrender.com/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ phone })
            });

            const data = await res.json();

            if (data.isAdmin) {

                successDiv.innerText = "✅ Admin verified! Redirecting...";
                successDiv.style.display = "block";

                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 800);

                return;
            }

            if (data.success) {

                successDiv.innerText = `✅ ${data.message}`;
                successDiv.style.display = "block";

                showOTPInput(phone, 'verify-login');

            } else {

                errorDiv.innerText = data.message;
                errorDiv.style.display = "block";

                btn.innerText = "Continue";
                btn.disabled = false;
            }

        } catch (err) {

            errorDiv.innerText = "Server error. Please try again.";
            errorDiv.style.display = "block";

            btn.innerText = "Continue";
            btn.disabled = false;
        }

        return;
    }

    // Step 2: Verify Login OTP
    const otp = document.getElementById('user-otp')?.value.trim();

    if (!otp || otp.length !== 6) {

        errorDiv.innerText = "Please enter the 6-digit OTP.";
        errorDiv.style.display = "block";
        return;
    }

    btn.innerText = "Verifying...";
    btn.disabled = true;

    try {

        const res = await fetch("https://arjun-store.onrender.com/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ phone, otp })
        });

        const data = await res.json();

        if (data.success) {

            localStorage.setItem("user", JSON.stringify(data.user));

            localStorage.setItem("userData", JSON.stringify({
                name: data.user.name,
                phone: data.user.phone
            }));

            localStorage.setItem("loggedIn", "true");

            localStorage.removeItem("selectedAddress");
            localStorage.removeItem("allSavedAddresses");

            isLoggedIn = true;

            successDiv.innerText = "✅ " + data.message;
            successDiv.style.display = "block";

            resetOTPState();

            setTimeout(() => {

                closeModal();
                updateLoginUI();
                manageCheckoutButton();

            }, 1000);

        } else {

            errorDiv.innerText = data.message;
            errorDiv.style.display = "block";

            btn.innerText = "Verify OTP";
            btn.disabled = false;
        }

    } catch (err) {

        errorDiv.innerText = "Server error. Please try again.";
        errorDiv.style.display = "block";

        btn.innerText = "Verify OTP";
        btn.disabled = false;
    }
}

// ─── Helper: Show OTP Input ───────────────────────────────────────────────────
function showOTPInput(phone, step) {

    const btn = document.getElementById('auth-submit-btn');

    // Add OTP input if not already there
    if (!document.getElementById('otp-wrapper')) {

        const mobileWrapper = document
            .querySelector('.phone-input-field')
            .closest('.input-wrapper');

        const div = document.createElement('div');

        div.className = 'input-wrapper';
        div.id = 'otp-wrapper';

        div.innerHTML = `
            <label>
                Enter OTP 
                <span style="color:#94a3b8;font-size:11px;">
                    (sent to your email)
                </span>
            </label>

            <div class="phone-input-field">

                <span class="country-code"
                    style="font-size:12px;padding:0 8px;">
                    OTP
                </span>

                <input
                    type="number"
                    id="user-otp"
                    placeholder="Enter 6-digit OTP"
                    maxlength="6"
                    style="letter-spacing:6px;
                           font-size:20px;
                           font-weight:700;
                           text-align:center;"
                >

            </div>

            <div style="display:flex;
                        justify-content:space-between;
                        margin-top:8px;">

                <p style="font-size:12px;
                          color:#94a3b8;
                          margin:0;">
                    OTP valid for 5 minutes
                </p>

                <p onclick="resendOTP('${phone}','${step}')"
                   style="font-size:12px;
                          color:#ff5200;
                          cursor:pointer;
                          margin:0;
                          font-weight:600;">
                    Resend OTP
                </p>

            </div>
        `;

        mobileWrapper.after(div);
    }

    // Lock inputs
    document.getElementById('user-mobile').disabled = true;

    const nameInput  = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');

    if (nameInput) {
        nameInput.disabled = true;
    }

    if (emailInput) {
        emailInput.disabled = true;
    }

    btn.dataset.step = step;
    btn.innerText = "Verify OTP";
    btn.disabled = false;

    // Focus OTP input
    setTimeout(() => {
        document.getElementById('user-otp')?.focus();
    }, 100);
}
// ─── Helper: Reset OTP State ──────────────────────────────────────────────────
function resetOTPState() {
    const btn = document.getElementById('auth-submit-btn');
    delete btn.dataset.step;
    document.getElementById('otp-wrapper')?.remove();

    const mobileInput = document.getElementById('user-mobile');
    const nameInput   = document.getElementById('user-name');
    const emailInput  = document.getElementById('user-email');
    if (mobileInput) mobileInput.disabled = false;
    if (nameInput)   nameInput.disabled   = false;
    if (emailInput)  emailInput.disabled  = false;
}

// ─── Resend OTP ───────────────────────────────────────────────────────────────
async function resendOTP(phone, step) {
    const errorDiv   = document.getElementById('auth-error');
    const successDiv = document.getElementById('auth-success');
    const name       = document.getElementById('user-name')?.value.trim() || '';
    const email      = document.getElementById('user-email')?.value.trim() || '';

    const url      = step === 'verify-reg' ? "https://arjun-store.onrender.com/send-register-otp" : "https://arjun-store.onrender.com/send-otp";
    const bodyData = step === 'verify-reg' ? { name, email, phone } : { phone };

    try {
        const res  = await fetch(url, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        });
        const data = await res.json();
        if (data.success) {
            successDiv.innerText = "✅ OTP resent to your email!";
            successDiv.style.display = "block";
            errorDiv.style.display = "none";
        } else {
            errorDiv.innerText = data.message;
            errorDiv.style.display = "block";
        }
    } catch (err) {
        errorDiv.innerText = "Could not resend OTP.";
        errorDiv.style.display = "block";
    }
}
// ─── CONFIRM ORDER (saves to MongoDB) ────────────────────────────────────────
function confirmOrder() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { openModal('login'); return; }


    if (!window.selectedSlot) { alert("Please select a delivery time slot!"); return; }

    const finalAddress = localStorage.getItem("selectedAddress") || "East Lakshmipuram, Yeleswaram";

    const deliveryDate   = window.selectedDate || "Today";
    const deliverySlot   = window.selectedSlot;
    const subtotal       = cart.reduce((t, i) => t + ((i.price || 0) * (i.qty || 1)), 0);
    const voucherDisc    = window.activeDiscount || 0;
    const pointsDisc     = window.pointsDiscountRs || 0;
    const delivery       = subtotal >= 499 ? 0 : 40;
    const total          = Math.max(0, subtotal - voucherDisc - pointsDisc + delivery);
    const pointsToRedeem = window.pointsToRedeem || 0;
    const pointsEarned   = Math.floor(total / 100) * 10;

    fetch("https://arjun-store.onrender.com/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: user.name, phone: user.phone, items: cart,
            totalAmount: "₹" + total, address: finalAddress,
            slot: deliverySlot, date: deliveryDate
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            const orderId = data.orderId;

            if (pointsToRedeem > 0) {
                fetch('https://arjun-store.onrender.com/loyalty/redeem/apply', {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone: user.phone, pointsToRedeem, orderId })
                }).catch(err => console.error('Points deduction error:', err));
            }

            let history = JSON.parse(localStorage.getItem("orderHistory")) || [];
            history.unshift({ id: orderId, items: [...cart], total: "₹" + total, date: new Date().toLocaleDateString(), time: deliverySlot, status: "In Progress" });
            localStorage.setItem("orderHistory", JSON.stringify(history));

            const finalItems = [...cart];
            cart = [];
            localStorage.removeItem('cart');
            window.activeDiscount   = 0;
            window.appliedCode      = "";
            window.pointsToRedeem   = 0;
            window.pointsDiscountRs = 0;
            updateCart();
            showOrderSuccess(orderId, deliveryDate, deliverySlot, finalItems, "₹" + total, pointsEarned, pointsToRedeem);
        } else {
            alert("Order failed: " + data.message);
        }
    })
    .catch(err => { console.error("Order error:", err); alert("Could not connect to server."); });
}
// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function initStickyCategoryNav() {
    const navItems = document.querySelectorAll(".category-list li");
    navItems.forEach(li => {
        li.addEventListener("click", function() {
            navItems.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
}
function handleCategoryClick(el, category) {
    document.querySelectorAll(".category-list li").forEach(i => i.classList.remove("active"));
    if (el.closest) el.closest('li').classList.add("active");
}
function redirectCategory(category) {
    const lowerCat = category.toLowerCase().trim();
    if (lowerCat === 'all' || lowerCat === 'household groceries') {
        document.getElementById("household-grid")?.scrollIntoView({ behavior: "smooth" });
    } else if (lowerCat === 'snacks & drinks') {
        document.getElementById("snack-grid")?.scrollIntoView({ behavior: "smooth" });
    } else if (lowerCat === 'beauty & wellness') {
        document.getElementById("beauty-grid")?.scrollIntoView({ behavior: "smooth" });
    } else if (lowerCat === 'home essentials') {
        document.getElementById("clean-grid")?.scrollIntoView({ behavior: "smooth" });
    } else {
        renderItems(category);
    }
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderCategories(targetCategories, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = targetCategories.map(cat => `
        <div class="card" onclick="renderItems('${cat.name}')" style="cursor:pointer">
            <img src="${cat.img}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${cat.name}</h3>
            <p style="color:var(--primary)">Browse Store</p>
        </div>
    `).join("");
}
async function renderItems(category) {
    // Always ensure stockMap is fresh before rendering
    if (!window._stockMap) {
        try {
            const r = await fetch('https://arjun-store.onrender.com/products/stock');
            const { stockMap } = await r.json();
            window._stockMap = stockMap || {};
        } catch(e) {
            window._stockMap = {};
        }
    }

    const allInventories = { ...inventory, ...snacksInventory, ...beautyInventory, ...cleanInventory };
    const items = category === 'all' ? Object.values(allInventories).flat() : (allInventories[category] || []);
    const homeView = document.getElementById("home-view");
    const itemView = document.getElementById("item-view");
    const grid     = document.getElementById("display-grid");
    const title    = document.getElementById("view-title");
    if (homeView) homeView.style.display = "none";
    if (itemView) itemView.style.display = "block";
    if (title) title.innerText = category;
    if (grid) {
       const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        // ✅ Step 1: Build the HTML grid first
        grid.innerHTML = items.length ? items.map(item => {
            const isInCart = currentCart.some(c => c.name === item.name);
            const wished = isWishlisted(item.name);
            // Use DB stock map — explicitly false means out of stock
            const isOutOfStock = window._stockMap[item.name] === false;
return `
    <div class="card">
        <div class="img-box" style="position:relative;">
            <img src="${item.img}" onerror="this.src='https://via.placeholder.com/150'" style="${isOutOfStock ? 'opacity:0.6;' : ''}">
            ${isOutOfStock ? `<div style="position:absolute;bottom:8px;left:8px;background:rgba(239,68,68,0.92);color:white;font-size:10px;font-weight:800;padding:3px 10px;border-radius:20px;letter-spacing:0.5px;">OUT OF STOCK</div>` : ''}
            <button
                class="wishlist-heart-btn ${wished ? 'wishlisted' : ''}"
                data-name="${item.name.replace(/"/g,'&quot;')}"
                onclick="event.stopPropagation(); toggleWishlist('${item.name.replace(/'/g,"\\'")}', ${item.price}, '${item.img}', '${item.qty}', this)"
                title="${wished ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                ${wished ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="card-details">
            <h4>${item.name}</h4>
            <p>₹${item.price} • ${item.qty}</p>
            <div id="rating-${item.name.replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_]/g,'')}" style="font-size:12px;color:#f59e0b;margin-bottom:6px;">
                ☆ Loading...
            </div>
            ${isOutOfStock
                ? `<div style="position:relative;">
                    <button class="add-btn oos-btn" data-product-name="${item.name.replace(/"/g,'&quot;')}" onclick="handleOutOfStockClick(this,'${item.name.replace(/'/g,"\'")}',${item.price},'${item.img}')"
                        style="background:#fee2e2;color:#dc2626;border:1.5px solid #fca5a5;cursor:pointer;width:100%;font-weight:700;">
                        ❌ Out of Stock
                    </button>
                   </div>`
                : isInCart
                    ? `<button class="add-btn go-to-cart" onclick="toggleCart()" style="background-color:#f59e0b;color:white;">Proceed to Cart →</button>`
                    : `<button class="add-btn" onclick="addToCart('${item.name.replace(/'/g,"\'")}',${item.price},'${item.img}')">🛒 Add to Basket</button>`
            }
            <button onclick="openReviews('${item.name.replace(/'/g,"\\'")}')"
                style="width:100%;margin-top:6px;padding:7px;background:transparent;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;font-size:12px;color:#64748b;">
                💬 Reviews
            </button>
        </div>
    </div>`;
        }).join("") : `<p style='text-align:center;padding:50px;width:100%;'>Coming Soon for ${category}!</p>`;

        // ✅ Step 2: AFTER grid is built, load ratings
        if (items.length) {
            items.forEach(item => {
                const safeId  = item.name.replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_]/g,'');
                const ratingEl = document.getElementById(`rating-${safeId}`);
                if (!ratingEl) return;
                fetch(`https://arjun-store.onrender.com/reviews/${encodeURIComponent(item.name)}`)
                    .then(r => r.json())
                    .then(data => {
                        if (!ratingEl) return;
                        if (data.totalReviews === 0) {
                            ratingEl.innerHTML = `<span style="color:#94a3b8;">☆ No reviews yet</span>`;
                        } else {
                            const stars = '⭐'.repeat(Math.round(data.avgRating));
                            ratingEl.innerHTML = `${stars} <b>${data.avgRating}</b> <span style="color:#94a3b8;">(${data.totalReviews} reviews)</span>`;
                        }
                    })
                    .catch(() => { if (ratingEl) ratingEl.innerHTML = ''; });
            });
        }
    }
    // ✅ Step 3: Fetch stock status from DB and patch buttons for out-of-stock items
    fetch('https://arjun-store.onrender.com/products/stock')
        .then(r => r.json())
        .then(({ stockMap }) => {
            if (!stockMap) return;
            items.forEach(item => {
                // Only act on items explicitly marked false in DB
                if (stockMap[item.name] === false) {
                    const safeId = item.name.replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_]/g,'');
                    // Find the card by looking for the add-btn inside this item's card
                    const allCards = document.querySelectorAll('#display-grid .card');
                    allCards.forEach(card => {
                        const heading = card.querySelector('h4');
                        if (heading && heading.textContent.trim() === item.name) {
                            const addBtn = card.querySelector('.add-btn');
                            if (addBtn && !addBtn.textContent.includes('Notify Me')) {
                                addBtn.outerHTML = `<button class="add-btn oos-btn"
                                    onclick="handleOutOfStockClick(this,'${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}')"
                                    style="background:#fee2e2;color:#dc2626;border:1.5px solid #fca5a5;cursor:pointer;font-weight:700;">
                                    ❌ Out of Stock
                                </button>`;
                            }
                            // Add OUT OF STOCK overlay on image
                            const imgBox = card.querySelector('.img-box');
                            if (imgBox && !imgBox.querySelector('.oos-badge')) {
                                const badge = document.createElement('div');
                                badge.className = 'oos-badge';
                                badge.style.cssText = 'position:absolute;bottom:8px;left:8px;background:rgba(239,68,68,0.92);color:white;font-size:10px;font-weight:800;padding:3px 10px;border-radius:20px;letter-spacing:0.5px;';
                                badge.textContent = 'OUT OF STOCK';
                                imgBox.appendChild(badge);
                            }
                        }
                    });
                }
            });
        })
        .catch(() => {}); // Silently ignore if server unreachable

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function openReviews(productName) {
    const user    = JSON.parse(localStorage.getItem("user"));
    const overlay = document.getElementById('full-profile-page');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    overlay.innerHTML = `
        <div style="background:#f8fafc;min-height:100vh;font-family:'Segoe UI',sans-serif;">
            <nav style="background:white;padding:15px 25px;display:flex;align-items:center;gap:15px;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:sticky;top:0;z-index:100;">
                <button onclick="closeFullProfile()" style="background:none;border:none;font-size:20px;cursor:pointer;">←</button>
                <h3 style="margin:0;">Reviews — ${productName}</h3>
            </nav>
            <div style="max-width:700px;margin:25px auto;padding:0 15px;">

                ${user ? `
<div id="review-form-box" id="review-form-box">
    <p id="review-access-msg" style="text-align:center;padding:15px;color:#94a3b8;font-size:13px;">
        Checking order history...
    </p>
</div>
                    <h4 style="margin:0 0 15px 0;">Write a Review</h4>
                    <div style="margin-bottom:15px;">
                        <label style="font-size:13px;color:#64748b;display:block;margin-bottom:8px;">Your Rating</label>
                        <div id="star-selector" style="display:flex;gap:8px;">
                            ${[1,2,3,4,5].map(i => `
                                <span onclick="selectStar(${i})" id="star-${i}"
                                    style="font-size:28px;cursor:pointer;opacity:0.3;transition:0.2s;">⭐</span>
                            `).join('')}
                        </div>
                        <input type="hidden" id="selected-rating" value="0">
                    </div>
                    <div style="margin-bottom:15px;">
                        <label style="font-size:13px;color:#64748b;display:block;margin-bottom:8px;">Your Review</label>
                        <textarea id="review-text" placeholder="Share your experience with this product..." 
                            style="width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;min-height:100px;outline:none;resize:vertical;font-family:'Segoe UI',sans-serif;"></textarea>
                    </div>
                    <button onclick="submitReview('${productName.replace(/'/g,"\\'")}')"
                        style="background:#ff5200;color:white;border:none;padding:12px 30px;border-radius:8px;cursor:pointer;font-weight:700;font-size:14px;">
                        Submit Review
                    </button>
                    <p id="review-msg" style="margin-top:10px;font-size:13px;display:none;"></p>
                </div>` : `
                <div style="background:#fff8f5;border:1px solid #fed7aa;padding:15px;border-radius:12px;margin-bottom:20px;text-align:center;font-size:13px;color:#92400e;">
                    Please login to write a review.
                </div>`}

                <div id="reviews-list">
                    <p style="text-align:center;color:#94a3b8;padding:20px;">Loading reviews...</p>
                </div>
            </div>
        </div>`;

    loadReviews(productName);
}

function selectStar(rating) {
    document.getElementById('selected-rating').value = rating;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        star.style.opacity = i <= rating ? '1' : '0.3';
        star.style.transform = i <= rating ? 'scale(1.2)' : 'scale(1)';
    }
}

async function submitReview(productName) {
    const user   = JSON.parse(localStorage.getItem("user"));
    const rating = parseInt(document.getElementById('selected-rating').value);
    const review = document.getElementById('review-text').value.trim();
    const msgEl  = document.getElementById('review-msg');

    if (!rating) {
        msgEl.innerText = '⚠️ Please select a star rating.';
        msgEl.style.color = '#ef4444';
        msgEl.style.display = 'block'; return;
    }
    if (review.length < 5) {
        msgEl.innerText = '⚠️ Please write at least 5 characters.';
        msgEl.style.color = '#ef4444';
        msgEl.style.display = 'block'; return;
    }

    try {
        const res  = await fetch('https://arjun-store.onrender.com/review', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productName,
                userName:  user.name,
                userPhone: user.phone,
                rating, review
            })
        });
        const data = await res.json();
        msgEl.innerText      = data.message;
        msgEl.style.color    = data.success ? '#16a34a' : '#ef4444';
        msgEl.style.display  = 'block';
        if (data.success) {
            document.getElementById('review-form-box').style.opacity = '0.5';
            loadReviews(productName);
        }
    } catch (err) {
        msgEl.innerText     = 'Server error. Try again.';
        msgEl.style.color   = '#ef4444';
        msgEl.style.display = 'block';
    }
}

function loadReviews(productName) {
    fetch(`https://arjun-store.onrender.com/reviews/${encodeURIComponent(productName)}`)
        .then(r => r.json())
        .then(data => {
            const container = document.getElementById('reviews-list');
            if (!container) return;

            if (data.totalReviews === 0) {
                container.innerHTML = `
                    <div style="text-align:center;padding:40px;color:#94a3b8;">
                        <div style="font-size:40px;margin-bottom:10px;">💬</div>
                        <p>No reviews yet. Be the first to review!</p>
                    </div>`;
                return;
            }

            const stars = n => '⭐'.repeat(n) + '☆'.repeat(5-n);

            container.innerHTML = `
                <div style="background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:20px;display:flex;gap:20px;align-items:center;">
                    <div style="text-align:center;">
                        <div style="font-size:48px;font-weight:800;color:#1e293b;">${data.avgRating}</div>
                        <div style="font-size:16px;color:#f59e0b;">${'⭐'.repeat(Math.round(data.avgRating))}</div>
                        <div style="font-size:12px;color:#94a3b8;">${data.totalReviews} reviews</div>
                    </div>
                </div>
                ${data.reviews.map(r => `
                    <div style="background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                            <div style="display:flex;align-items:center;gap:10px;">
                                <div style="width:36px;height:36px;border-radius:50%;background:#ff5200;color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;">
                                    ${r.userName.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p style="margin:0;font-weight:700;font-size:14px;">${r.userName}</p>
                                    <p style="margin:0;font-size:11px;color:#94a3b8;">${new Date(r.createdAt).toLocaleDateString('en-IN')}</p>
                                </div>
                            </div>
                            <div style="font-size:14px;">${stars(r.rating)}</div>
                        </div>
                        <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;">${r.review}</p>
                    </div>`).join('')}`;
        })
        .catch(() => {
            const container = document.getElementById('reviews-list');
            if (container) container.innerHTML = `<p style="text-align:center;color:red;">Could not load reviews.</p>`;
        });
}
// ✅ Check if user has ordered this product
if (user) {
    fetch(`https://arjun-store.onrender.com/my-orders/${user.phone}`)
        .then(r => r.json())
        .then(data => {
            const hasOrdered = data.orders?.some(order =>
                order.items?.some(item => item.name === productName)
            );
            const formBox = document.getElementById('review-form-box');
            if (!formBox) return;

            if (hasOrdered) {
                // ✅ Show review form
                formBox.innerHTML = `
                    <h4 style="margin:0 0 15px 0;">Write a Review</h4>
                    <div style="margin-bottom:15px;">
                        <label style="font-size:13px;color:#64748b;display:block;margin-bottom:8px;">Your Rating</label>
                        <div id="star-selector" style="display:flex;gap:8px;">
                            ${[1,2,3,4,5].map(i => `
                                <span onclick="selectStar(${i})" id="star-${i}"
                                    style="font-size:28px;cursor:pointer;opacity:0.3;transition:0.2s;">⭐</span>
                            `).join('')}
                        </div>
                        <input type="hidden" id="selected-rating" value="0">
                    </div>
                    <div style="margin-bottom:15px;">
                        <label style="font-size:13px;color:#64748b;display:block;margin-bottom:8px;">Your Review</label>
                        <textarea id="review-text" placeholder="Share your experience with this product..."
                            style="width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;min-height:100px;outline:none;resize:vertical;font-family:'Segoe UI',sans-serif;box-sizing:border-box;"></textarea>
                    </div>
                    <button onclick="submitReview('${productName.replace(/'/g, "\\'")}')"
                        style="background:#ff5200;color:white;border:none;padding:12px 30px;border-radius:8px;cursor:pointer;font-weight:700;font-size:14px;">
                        Submit Review
                    </button>
                    <p id="review-msg" style="margin-top:10px;font-size:13px;display:none;"></p>`;
            } else {
                // ❌ Not ordered — show message
                formBox.innerHTML = `
                    <div style="background:#fff8f5;border:1px solid #fed7aa;padding:20px;border-radius:12px;text-align:center;">
                        <div style="font-size:30px;margin-bottom:10px;">🛒</div>
                        <p style="margin:0;font-weight:700;color:#92400e;font-size:14px;">Purchase Required</p>
                        <p style="margin:8px 0 0;font-size:13px;color:#78350f;">
                            You can only review products you have ordered.<br>
                            Buy this product first to leave a review!
                        </p>
                    </div>`;
            }
        })
        .catch(() => {
            const formBox = document.getElementById('review-form-box');
            if (formBox) formBox.innerHTML = `<p style="color:red;text-align:center;">Could not verify order. Try again.</p>`;
        });
}
function showHomeView() {
    document.getElementById("item-view").style.display = "none";
    document.getElementById("home-view").style.display = "block";
    document.querySelectorAll(".category-list li").forEach(i => i.classList.remove("active"));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function syncAndRender(category) {
    const lowerCat = category.toLowerCase().trim();
    if (lowerCat === 'all' || lowerCat === 'household groceries') showHomeView();
    else renderItems(category);
}

// ─── CART ─────────────────────────────────────────────────────────────────────
function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);
    if (existing) { existing.qty++; } else { cart.push({ name, price, qty: 1, img }); }
    saveCart();
    document.getElementById("cart-sidebar").classList.add("active");
    const currentCategory = document.getElementById("view-title")?.innerText.trim();
    if (currentCategory) renderItems(currentCategory);
}
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    const currentCategory = document.getElementById("view-title")?.innerText.trim();
    if (currentCategory) renderItems(currentCategory);
}
function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
        const title = document.getElementById("view-title");
        if (title && title.innerText) renderItems(title.innerText.trim());
    }
    saveCart();
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}
function clearCart() { cart = []; saveCart(); }
function toggleCart() { document.getElementById("cart-sidebar").classList.toggle("active"); }
function updateCart() {
    const itemsList    =  document.getElementById('cart-items');
    const emptyCart    = document.getElementById('empty-cart');
    const countDisplay = document.getElementById('cart-count');
    const sideCount    = document.getElementById('side-cart-count');
    const progress     = document.getElementById('delivery-progress');
    const deliveryText = document.getElementById('delivery-text');
    const subtotalDisplay       = document.getElementById('subtotal-price');
    const deliveryChargeDisplay = document.getElementById('delivery-charge');
    const totalPriceDisplay     = document.getElementById('total-price');
    let subtotal   = 0;
    let totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    if (countDisplay) countDisplay.innerText = totalItems;
    if (sideCount) sideCount.innerText = `${totalItems} Items`;
    if (cart.length === 0) {
        if (itemsList) itemsList.innerHTML = "";
        if (emptyCart) emptyCart.style.display = "block";
        if (subtotalDisplay) subtotalDisplay.innerText = "₹0";
        if (totalPriceDisplay) totalPriceDisplay.innerText = "₹0";
        if (progress) progress.style.width = "0%";
        return;
    }
    if (emptyCart) emptyCart.style.display = "none";
    if (itemsList) {
        itemsList.innerHTML = cart.map((item, index) => {
            subtotal += (item.price * item.qty);
            return `
                <div class="cart-item">
                    <img src="${item.img}" onerror="this.src='https://via.placeholder.com/70'">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <button class="remove-item-btn" onclick="removeFromCart(${index})"><span class="trash-icon">🗑️</span></button>
                        <p style="color:#666;font-size:13px;">₹${item.price}</p>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="changeQty(${index},-1)">-</button>
                            <span style="font-weight:600">${item.qty}</span>
                            <button class="qty-btn" onclick="changeQty(${index},1)">+</button>
                        </div>
                    </div>
                    <p style="font-weight:700">₹${item.price * item.qty}</p>
                </div>`;
        }).join('');
    }
    const shippingFee = subtotal >= 499 ? 0 : 40;
    if (subtotalDisplay) subtotalDisplay.innerText = `₹${subtotal}`;
    if (deliveryChargeDisplay) {
        deliveryChargeDisplay.innerText = shippingFee === 0 ? "FREE" : `₹${shippingFee}`;
        if (shippingFee === 0) deliveryChargeDisplay.parentElement.classList.add('free');
        else deliveryChargeDisplay.parentElement.classList.remove('free');
    }
    if (totalPriceDisplay) totalPriceDisplay.innerText = `₹${subtotal + shippingFee}`;
    if (progress) {
        // Milestones: ₹499 = free delivery, ₹999 = 10% off
        const MILESTONE_DELIVERY = 499;
        const MILESTONE_DISCOUNT = 999;

        if (subtotal >= MILESTONE_DISCOUNT) {
            // Both unlocked
            progress.style.width      = "100%";
            progress.style.background = "#8b5cf6";
            if (deliveryText) deliveryText.innerHTML =
                `🎉 FREE Delivery + <b style="color:#8b5cf6;">10% OFF</b> unlocked! Use code <b>SAVE10</b>`;
        } else if (subtotal >= MILESTONE_DELIVERY) {
            // Free delivery unlocked, 10% off next
            const need = MILESTONE_DISCOUNT - subtotal;
            const pct  = Math.min(((subtotal - MILESTONE_DELIVERY) / (MILESTONE_DISCOUNT - MILESTONE_DELIVERY)) * 100, 100);
            progress.style.width      = pct + "%";
            progress.style.background = "#10b981";
            if (deliveryText) deliveryText.innerHTML =
                `✅ FREE Delivery unlocked! Add <b>₹${need}</b> more for <b style="color:#8b5cf6;">10% OFF</b>`;
        } else {
            // Nothing unlocked yet
            const pctDelivery = Math.min((subtotal / MILESTONE_DELIVERY) * 100, 100);
            progress.style.width      = pctDelivery + "%";
            progress.style.background = "#f59e0b";
            const needDelivery = MILESTONE_DELIVERY - subtotal;
            if (deliveryText) deliveryText.innerHTML =
                `Add <b>₹${needDelivery}</b> more for FREE Delivery`;
        }
    }
}

// ─── AUTH UI ──────────────────────────────────────────────────────────────────
function switchTab(mode) {
    currentAuthMode = mode;
    const isLogin = mode === 'login';
    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-register').classList.toggle('active', !isLogin);
    document.querySelectorAll('.reg-only').forEach(f => f.style.display = isLogin ? 'none' : 'block');
    document.getElementById('auth-subtitle').innerText = isLogin ? "Sign in to your account" : "Create your account";
    document.getElementById('auth-submit-btn').innerText = isLogin ? "Continue" : "Create Account";
    resetOTPState(); // ✅ Reset OTP state on tab switch
    const err = document.getElementById('auth-error');
    const suc = document.getElementById('auth-success');
    if (err) { err.style.display = 'none'; err.innerText = ''; }
    if (suc) { suc.style.display = 'none'; suc.innerText = ''; }
}
function openModal(mode) {
    document.getElementById('auth-modal').style.display = 'flex';
    switchTab(mode);
}
function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }
function updateLoginUI() {
    const dropdown = document.getElementById('profile-menu');
    if (!dropdown) return;
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        dropdown.innerHTML = `
            <div id="nav-guest-view">
                <a href="javascript:void(0)" onclick="openModal('login')"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
                <a href="javascript:void(0)" onclick="openModal('register')"><i class="fa-solid fa-user-plus"></i> Register</a>
                <a href="javascript:void(0)" onclick="openCorporatePage()" class="corporate-link"><i class="fa-solid fa-building"></i> Arjun Corporate</a>
            </div>`;
    } else {
        dropdown.innerHTML = `
            <div class="profile-header-box">
                <p class="profile-name">Hello, ${user.name}</p>
                <p class="profile-phone" style="font-size:11px">+91 ${user.phone}</p>
            </div>
            <a href="javascript:void(0)" onclick="openFullProfile()" style="color:var(--primary);font-weight:700;border-top:1px solid #eee;">Manage Account & Orders →</a>`;
    }
}
function handleLogout() { localStorage.clear(); location.reload(); }

// ─── PERIODIC SESSION VALIDATION ─────────────────────────────────────────────
async function validateSession() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.phone) return;
    try {
        const res  = await fetch("https://arjun-store.onrender.com/verify-user/" + user.phone);
        const data = await res.json();
        if (!data.valid) { localStorage.clear(); location.reload(); }
    } catch (e) {}
}
setInterval(validateSession, 30000);
function toggleProfileMenu(event) {
    if (event) event.stopPropagation();
    document.getElementById('profile-menu').classList.toggle('show');
}
window.onclick = function(event) {
    const menu    = document.getElementById('profile-menu');
    const trigger = document.getElementById('profile-dropdown-trigger');
    if (menu && menu.classList.contains('show') && !trigger.contains(event.target)) {
        menu.classList.remove('show');
    }
};

// ─── CHECKOUT BUTTON ──────────────────────────────────────────────────────────
function manageCheckoutButton() {
    const btn  = document.querySelector('.checkout-btn');
    if (!btn) return;
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        btn.disabled = true;
        btn.style.background = "#cccccc";
        btn.style.cursor = "not-allowed";
        btn.innerText = "Login to Checkout";
        btn.onclick = () => openModal("login");
    } else {
        btn.disabled = false;
        btn.style.background = "var(--primary)";
        btn.style.cursor = "pointer";
        btn.innerText = "Checkout Now";
        btn.onclick = checkout;
    }
}

// ─── CHECKOUT PAGE ────────────────────────────────────────────────────────────
function checkout() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { openModal('login'); return; }
    if (cart.length === 0) { alert("Your basket is empty!"); return; }

    const overlay = document.getElementById('full-profile-page');
    const now     = new Date();
    const todayDate    = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const tomorrowDate = new Date(Date.now() + 86400000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const allTodayFull = now.getHours() >= 19;
    window.selectedDate     = allTodayFull ? 'Tomorrow' : 'Today';
    window.selectedSlot     = null;
    window.pointsToRedeem   = 0;
    window.pointsDiscountRs = 0;

    const subtotal = cart.reduce((t, i) => t + ((i.price || 0) * (i.qty || 1)), 0);
    const discount = window.activeDiscount || 0;
    const delivery = subtotal >= 499 ? 0 : 40;
    const total    = subtotal - discount + delivery;

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    overlay.innerHTML = `
        <div style="background:#f4f7f9;min-height:100vh;padding-bottom:40px;">
            <nav style="background:white;padding:15px 25px;display:flex;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:sticky;top:0;z-index:100;">
                <button onclick="closeFullProfile()" style="background:none;border:none;font-size:20px;cursor:pointer;margin-right:15px;"><i class="fa-solid fa-arrow-left"></i></button>
                <h3 style="margin:0;">Checkout</h3>
            </nav>
            <div style="max-width:1000px;margin:25px auto;display:grid;grid-template-columns:1.5fr 1fr;gap:25px;padding:0 15px;">
                <div>
                    <div style="background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:20px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                            <h4 style="margin:0;"><i class="fa-solid fa-location-dot" style="margin-right:6px;"></i>Delivery Address</h4>
                            <button onclick="document.getElementById('location-modal').style.display='flex'" style="color:#16a34a;background:none;border:none;font-weight:bold;cursor:pointer;">CHANGE</button>
                        </div>
                        <p style="margin:0;color:#1e293b;font-size:15px;font-weight:500;">${localStorage.getItem("selectedAddress") || "Select delivery address"}</p>
                    </div>
                    <div style="background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:20px;">
                        <h4 style="margin:0 0 15px 0;"><i class="fa-solid fa-credit-card" style="margin-right:6px;"></i> Payment Method</h4>
                        <div style="display:flex;align-items:center;gap:12px;padding:15px;background:#f0fdf4;border:1px solid #22c55e;border-radius:10px;">
                            <span style="font-weight:700;color:#166534;">Cash on Delivery</span>
                        </div>
                    </div>
                    <div style="background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;">
                        <h4 style="margin:0 0 15px 0;"> <i class="fa-solid fa-clock" style="margin-right:6px;"></i>Delivery Slot</h4>
                        <div style="display:flex;gap:10px;margin-bottom:15px;">
                            <div id="today-tab" onclick="updateDateSelection(this,'Today')" style="min-width:80px;text-align:center;padding:10px;border:${allTodayFull?'1px solid #e2e8f0':'2px solid #2563eb'};border-radius:8px;cursor:pointer;background:${allTodayFull?'white':'#eff6ff'};">
                                <span style="display:block;font-size:12px;font-weight:bold;">TODAY</span>
                                <small>${todayDate}</small>
                            </div>
                            <div id="tomorrow-tab" onclick="updateDateSelection(this,'Tomorrow')" style="min-width:80px;text-align:center;padding:10px;border:${allTodayFull?'2px solid #2563eb':'1px solid #e2e8f0'};border-radius:8px;cursor:pointer;background:${allTodayFull?'#eff6ff':'white'};">
                                <span style="display:block;font-size:12px;font-weight:bold;">TOMORROW</span>
                                <small>${tomorrowDate}</small>
                            </div>
                        </div>
                        <div id="time-slots-container" style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                            ${generateTimeSlots(window.selectedDate)}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="background:white;padding:25px;border-radius:16px;border:1px solid #e2e8f0;position:sticky;top:90px;">
                        <h4 style="margin:0 0 16px 0;">Order Summary</h4>

                        <!-- LOYALTY POINTS PANEL -->
                        <div style="background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fcd34d;border-radius:12px;padding:14px;margin-bottom:16px;">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                                <span style="font-size:13px;font-weight:700;color:#92400e;"><i class="fa-solid fa-coins" style="margin-right:5px;"></i>Loyalty Points</span>
                                <span id="loyalty-balance-label" style="font-size:12px;color:#92400e;background:#fde68a;padding:3px 8px;border-radius:20px;font-weight:700;">Loading...</span>
                            </div>
                            <p style="font-size:11px;color:#a16207;margin:0 0 10px;">10 pts = ₹1 discount. Min 100 pts to redeem.</p>
                            <div id="loyalty-redeem-ui" style="display:none;">
                                <div style="display:flex;gap:8px;align-items:center;">
                                    <input type="number" id="redeem-points-input" placeholder="Enter points" min="100" step="10"
                                        style="flex:1;padding:8px;border:1px solid #fcd34d;border-radius:8px;font-size:13px;background:white;outline:none;">
                                    <button onclick="applyLoyaltyPoints()" style="background:#f59e0b;color:white;border:none;padding:8px 14px;border-radius:8px;font-weight:700;cursor:pointer;font-size:12px;white-space:nowrap;">APPLY</button>
                                </div>
                                <p id="loyalty-redeem-msg" style="font-size:12px;margin:6px 0 0;min-height:16px;"></p>
                            </div>
                            <p id="loyalty-no-points" style="display:none;font-size:12px;color:#a16207;margin:0;">Shop more to earn points! Every ₹100 = 10 pts <i class="fa-solid fa-cart-shopping"></i></p>
                            <div id="loyalty-applied-badge" style="display:none;background:#16a34a;color:white;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:700;margin-top:6px;">
                                <i class="fa-solid fa-check"></i> <span id="loyalty-applied-text"></span> &nbsp;—&nbsp;
                                <a onclick="removeLoyaltyPoints()" style="cursor:pointer;text-decoration:underline;color:#bbf7d0;">Remove</a>
                            </div>
                        </div>

                        <!-- VOUCHER -->
                        <div style="background:#f8fafc;padding:15px;border-radius:12px;margin-bottom:20px;border:1px solid #e2e8f0;position:relative;">
                            <p style="font-size:12px;font-weight:700;color:#689f38;margin-bottom:8px;">APPLY VOUCHER</p>
                            <div style="display:flex;gap:8px;">
                                <input type="text" id="checkout-promo-input" placeholder="Enter Code" onclick="showVoucherPanel()" onfocus="showVoucherPanel()" value="${window.appliedCode||''}" style="flex:1;padding:10px;border:1px solid #cbd5e1;border-radius:8px;font-size:14px;text-transform:uppercase;">
                                <button onclick="applyCheckoutPromo()" style="background:#2b3947;color:white;border:none;padding:0 15px;border-radius:8px;cursor:pointer;font-weight:bold;">APPLY</button>
                            </div>
                            <div id="voucher-dropdown-panel" style="display:none;position:absolute;top:100%;left:0;width:100%;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 8px 16px rgba(0,0,0,0.2);z-index:9999;margin-top:5px;">
                                <div onclick="selectAndApplyPromo('FIRST50')" style="padding:12px;border-bottom:1px solid #f5f5f5;cursor:pointer;">
                                    <strong style="color:#689f38;">FIRST50</strong> <span style="float:right;color:#ff5200;font-size:11px;">APPLY</span>
                                    <p style="margin:3px 0 0;font-size:11px;color:#666;">Free delivery + ₹50 off (on orders above ₹200) on your first order!</p>
                                </div>
                                <div onclick="selectAndApplyPromo('WEEKEND100')" style="padding:12px;cursor:pointer;">
                                    <strong style="color:#689f38;">WEEKEND100</strong> <span style="float:right;color:#ff5200;font-size:11px;">APPLY</span>
                                    <p style="margin:3px 0 0;font-size:11px;color:#666;">₹100 Cashback (Min ₹999)</p>
                                </div>
                                <div onclick="selectAndApplyPromo('SAVE10')" style="padding:12px;cursor:pointer;">
    <strong style="color:#8b5cf6;">SAVE10</strong> <span style="float:right;color:#ff5200;font-size:11px;">APPLY</span>
    <p style="margin:3px 0 0;font-size:11px;color:#666;">10% OFF on orders above ₹999 🎉</p>
</div>
                            </div>
                        </div>

                        <!-- ITEMS -->
                        <div style="max-height:180px;overflow-y:auto;margin-bottom:20px;">
                            ${cart.map(item => `
                                <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:10px;color:#475569;">
                                    <span>${item.name} × ${item.qty||1}</span>
                                    <span style="font-weight:600;">₹${(item.price||0)*(item.qty||1)}</span>
                                </div>`).join('')}
                        </div>

                        <!-- PRICE BREAKDOWN -->
                        <div style="border-top:1px solid #f1f5f9;padding-top:15px;">
                            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;color:#64748b;"><span>Item Total</span><span>₹${subtotal}</span></div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:8px;color:#16a34a;font-size:14px;font-weight:700;"><span>Voucher Discount</span><span>-₹${discount}</span></div>
                            <div id="co-points-row" style="display:none;justify-content:space-between;margin-bottom:8px;color:#f59e0b;font-size:14px;font-weight:700;"><span> <i class="fa-solid fa-coins" style="margin-right:4px;"></i>Points Discount</span><span id="co-points-disc">-₹0</span></div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:15px;font-size:14px;color:#64748b;"><span>Delivery Fee</span><span>${delivery===0?'FREE':'₹'+delivery}</span></div>
                            <div style="display:flex;justify-content:space-between;font-weight:800;font-size:22px;color:#1e293b;border-top:2px solid #f1f5f9;padding-top:15px;"><span>Total</span><span id="co-total">₹${total}</span></div>
                            <p id="co-earn-preview" style="margin:6px 0 0;font-size:11px;color:#f59e0b;font-weight:600;text-align:right;">  <i class="fa-solid fa-coins"></i>You'll earn ~${Math.floor(total/100)*10} points on this order!</p>
                        </div>
                        <div id="checkout-eta-banner" style="display:none;align-items:center;justify-content:center;gap:8px;background:#fff3ee;border:1.5px solid #ff5200;border-radius:10px;padding:12px;margin-top:16px;font-size:14px;text-align:center;"></div>
                        <button onclick="validateAndConfirm()" style="width:100%;background:#16a34a;color:white;border:none;padding:18px;border-radius:12px;font-weight:800;font-size:16px;margin-top:12px;cursor:pointer;">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>`;

    loadLoyaltyForCheckout(user.phone);
}
function validateAndConfirm() {
    if (!window.selectedSlot) { alert("Please select a delivery time slot!"); return; }
    confirmOrder();
}
// ─── LOYALTY: Checkout helpers ────────────────────────────────────────────────
function loadLoyaltyForCheckout(phone) {
    fetch(`https://arjun-store.onrender.com/loyalty/${phone}`)
        .then(r => r.json())
        .then(data => {
            const pts      = data.points || 0;
            const balLabel = document.getElementById('loyalty-balance-label');
            const redeemUI = document.getElementById('loyalty-redeem-ui');
            const noPoints = document.getElementById('loyalty-no-points');
            if (!balLabel) return;
            balLabel.innerText = `${pts} pts`;
            if (pts >= 100) {
                if (redeemUI) redeemUI.style.display = 'block';
                if (noPoints) noPoints.style.display = 'none';
                const inp = document.getElementById('redeem-points-input');
                if (inp) { inp.max = pts; inp.placeholder = `Max ${pts} pts`; }
            } else {
                if (redeemUI) redeemUI.style.display = 'none';
                if (noPoints) noPoints.style.display = 'block';
            }
        })
        .catch(() => {
            const l = document.getElementById('loyalty-balance-label');
            if (l) l.innerText = '0 pts';
        });
}

function applyLoyaltyPoints() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    const inp = document.getElementById('redeem-points-input');
    const msg = document.getElementById('loyalty-redeem-msg');
    const pts = parseInt(inp?.value || '0');
    if (!pts || pts < 100) {
        if (msg) { msg.style.color = '#ef4444'; msg.innerText = 'Minimum 100 points required.'; }
        return;
    }
    fetch('https://arjun-store.onrender.com/loyalty/redeem/validate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: user.phone, pointsToRedeem: pts })
    })
    .then(r => r.json())
    .then(data => {
        if (!data.success) {
            if (msg) { msg.style.color = '#ef4444'; msg.innerText = data.message; }
            return;
        }
        window.pointsToRedeem   = pts;
        window.pointsDiscountRs = data.discountRupees;
        const badge    = document.getElementById('loyalty-applied-badge');
        const text     = document.getElementById('loyalty-applied-text');
        const redeemUI = document.getElementById('loyalty-redeem-ui');
        if (text)     text.innerText          = `${pts} pts = ₹${data.discountRupees} off`;
        if (badge)    badge.style.display     = 'block';
        if (redeemUI) redeemUI.style.display  = 'none';
        if (msg)      msg.innerText           = '';
        recalcCheckoutTotal();
    })
    .catch(() => {
        if (msg) { msg.style.color = '#ef4444'; msg.innerText = 'Could not validate. Try again.'; }
    });
}

function removeLoyaltyPoints() {
    window.pointsToRedeem   = 0;
    window.pointsDiscountRs = 0;
    const badge    = document.getElementById('loyalty-applied-badge');
    const redeemUI = document.getElementById('loyalty-redeem-ui');
    const inp      = document.getElementById('redeem-points-input');
    if (badge)    badge.style.display    = 'none';
    if (redeemUI) redeemUI.style.display = 'block';
    if (inp)      inp.value              = '';
    recalcCheckoutTotal();
}

function recalcCheckoutTotal() {
    const subtotal    = cart.reduce((t, i) => t + ((i.price||0)*(i.qty||1)), 0);
    const voucherDisc = window.activeDiscount || 0;
    const pointsDisc  = window.pointsDiscountRs || 0;
    const delivery    = subtotal >= 499 ? 0 : 40;
    const total       = Math.max(0, subtotal - voucherDisc - pointsDisc + delivery);
    const pointsRow   = document.getElementById('co-points-row');
    const pointsDiscEl = document.getElementById('co-points-disc');
    const totalEl     = document.getElementById('co-total');
    const earnEl      = document.getElementById('co-earn-preview');
    if (pointsRow)   pointsRow.style.display = pointsDisc > 0 ? 'flex' : 'none';
    if (pointsDiscEl) pointsDiscEl.innerText = `-₹${pointsDisc}`;
    if (totalEl)      totalEl.innerText      = `₹${total}`;
    if (earnEl)       earnEl.innerText       = `🪙 You'll earn ~${Math.floor(total/100)*10} points on this order!`;
}
function getEstimatedDelivery(slot, dateChoice) {
    const slotEndMap = {
        "7 AM - 9 AM":   { h: 9,  m: 30 },
        "10 AM - 1 PM":  { h: 13, m: 30 },
        "4 PM - 7 PM":   { h: 19, m: 30 },
        "7 PM - 10 PM":  { h: 22, m: 30 }
    };
    const end = slotEndMap[slot];
    if (!end) return null;
    let h = end.h, m = end.m;
    if (m >= 60) { h += 1; m -= 60; }
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    const displayM = m === 0 ? '00' : String(m).padStart(2, '0');
    const dayLabel = (dateChoice === 'Tomorrow') ? ' Tomorrow' : ' Today';
    return `Delivery by ${displayH}:${displayM} ${period}${dayLabel}`;
}

function generateTimeSlots(dateChoice) {
    const currentHour = new Date().getHours();
    return [[7,"7 AM - 9 AM","Early Morning"],[10,"10 AM - 1 PM","Morning"],[16,"4 PM - 7 PM","Evening"],[19,"7 PM - 10 PM","Late Night"]]
        .map(([hour,label,desc]) => {
            const isClosed = (dateChoice==='Today' && currentHour>=hour);
            const eta = getEstimatedDelivery(label, dateChoice);
            return `<button onclick="handleSlotSelection(this,'${label}')" class="time-btn" ${isClosed?'disabled':''} style="padding:12px;border:1px solid #689f38;border-radius:8px;font-size:13px;cursor:${isClosed?'not-allowed':'pointer'};text-align:left;opacity:${isClosed?'0.6':'1'};background:${isClosed?'#f8fafc':'white'};">
                <b style="color:${isClosed?'#94a3b8':'#1e293b'};">${label}</b><br>
                <small style="color:${isClosed?'#94a3b8':'#689f38'};">${isClosed?'CLOSED':desc}</small>
            </button>`;
        }).join('');
}
function updateDateSelection(el, dateChoice) {
    window.selectedDate = dateChoice;
    window.selectedSlot = null;
    document.querySelectorAll('.date-slot, #today-tab, #tomorrow-tab').forEach(t => { t.style.border="1px solid #e2e8f0"; t.style.background="white"; });
    el.style.border="2px solid #2563eb"; el.style.background="#eff6ff";
    const container = document.getElementById('time-slots-container');
    if (container) container.innerHTML = generateTimeSlots(dateChoice);
}
function handleSlotSelection(btn, time) {
    document.querySelectorAll('.time-btn').forEach(el => { el.style.border="1px solid #689f38"; el.style.background="white"; });
    btn.style.border="2px solid #16a34a"; btn.style.background="#f0fdf4";
    window.selectedSlot = time;
    // Update the ETA banner in the order summary
    const etaBanner = document.getElementById('checkout-eta-banner');
    if (etaBanner) {
        const eta = getEstimatedDelivery(time, window.selectedDate || 'Today');
        if (eta) {
            etaBanner.innerHTML = `<i class="fa-solid fa-truck-fast" style="color:#ff5200;"></i> <span style="font-weight:800;color:#ff5200;">${eta}</span>`;
            etaBanner.style.display = 'flex';
        }
    }
}
async function applyCheckoutPromo() {
    const inputField = document.getElementById('checkout-promo-input');
    if (!inputField) return;
    const code = inputField.value.toUpperCase().trim();
    const currentSubtotal = cart.reduce((t,i) => t+((i.price||0)*(i.qty||1)),0);

    if (code === 'FIRST50') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.phone) {
            alert("Please log in to use this coupon.");
            return;
        }
        // Check if this is truly the user's first order
        try {
            const res = await fetch(`https://arjun-store.onrender.com/my-orders/${user.phone}`);
            const data = await res.json();
            const pastOrders = (data.orders || []).filter(o => o.status !== 'Cancelled');
            if (pastOrders.length > 0) {
                alert("FIRST50 is only valid on your first order.");
                window.activeDiscount = 0;
                window.appliedCode    = '';
                checkout();
                return;
            }
        } catch (e) {
            alert("Could not verify order history. Please try again.");
            return;
        }
        // First order confirmed — apply: free delivery + ₹50 off if subtotal >= ₹200
        const delivery = currentSubtotal >= 499 ? 0 : 40;
        let disc = delivery; // always give free delivery
        if (currentSubtotal >= 200) disc += 50;
        window.activeDiscount    = disc;
        window.appliedCode       = 'FIRST50';
        window.first50FreeDelivery = true; // flag to waive delivery charge
        const msg = currentSubtotal >= 200
            ? `Free delivery + ₹50 off applied!`
            : `Free delivery applied! (Add items worth ₹${200 - currentSubtotal} more to get ₹50 off too)`;
        triggerSuccess(msg);
    } else if (code === 'WEEKEND100' && currentSubtotal >= 999) {
        window.activeDiscount = 100;
        window.appliedCode    = 'WEEKEND100';
        triggerSuccess("₹100 cashback applied!");
    } else if (code === 'SAVE10' && currentSubtotal >= 999) {
        window.activeDiscount = Math.round(currentSubtotal * 0.10);
        window.appliedCode    = 'SAVE10';
        triggerSuccess("10% off applied!");
    } else if (code === 'SAVE10' && currentSubtotal < 999) {
        alert("Add items worth ₹" + (999 - currentSubtotal) + " more to use SAVE10.");
        window.activeDiscount = 0;
        window.appliedCode    = '';
        checkout();
    } else {
        alert("Code not valid or minimum amount not met.");
        window.activeDiscount = 0;
        window.appliedCode    = '';
        checkout();
    }
}
function showVoucherPanel() { const p=document.getElementById('voucher-dropdown-panel'); if(p) p.style.display='block'; }
function hideVoucherPanel() { const p=document.getElementById('voucher-dropdown-panel'); if(p) p.style.display='none'; }
function selectAndApplyPromo(code) { const f=document.getElementById('checkout-promo-input'); if(f){f.value=code;hideVoucherPanel();applyCheckoutPromo();} }
function triggerSuccess(msg) {
    const div = document.createElement('div');
    div.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.9);z-index:999999;display:flex;flex-direction:column;align-items:center;justify-content:center;";
    div.innerHTML=`<div style="background:white;padding:40px;border-radius:24px;box-shadow:0 20px 40px rgba(0,0,0,0.1);display:flex;flex-direction:column;align-items:center;">
        <div style="width:100px;height:100px;background:#22c55e;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h2 style="color:#22c55e;margin:0;">Success!</h2>
        <p style="color:#64748b;margin-top:8px;">${msg}</p>
    </div>`;
    document.body.appendChild(div);
    setTimeout(()=>{ div.style.opacity='0'; div.style.transition='0.4s'; setTimeout(()=>{ div.remove(); checkout(); },400); },2000);
}

// ─── ORDER SUCCESS PAGE ───────────────────────────────────────────────────────
function showOrderSuccess(orderId, date, slot, items=[], total="₹0", pointsEarned=0, pointsRedeemed=0) {
    const overlay = document.getElementById('full-profile-page');
    const orderSummaryHtml = items.map(item => `
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f1f5f9;">
            <div><div style="font-size:14px;font-weight:600;">${item.name}</div><div style="font-size:12px;color:#64748b;">Qty: ${item.qty||1}</div></div>
            <div style="font-weight:700;">₹${(item.price||0)*(item.qty||1)}</div>
        </div>`).join('');

    const pointsBanner = pointsEarned > 0 ? `
        <div style="width:100%;max-width:380px;background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fcd34d;border-radius:16px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;gap:14px;">
            <div style="font-size:32px;">🪙</div>
            <div>
                <p style="margin:0;font-weight:800;color:#92400e;font-size:15px;">+${pointsEarned} Points Earned!</p>
                <p style="margin:3px 0 0;font-size:12px;color:#a16207;">Added to your loyalty wallet${pointsRedeemed > 0 ? ` • ${pointsRedeemed} pts redeemed this order` : ''}</p>
            </div>
        </div>` : '';

    overlay.innerHTML = `
        <div style="background:white;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;text-align:center;">
            <div style="width:80px;height:80px;background:#f0fdf4;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;border:2px solid #16a34a;">
                <i class="fa-solid fa-check" style="color:#16a34a;font-size:40px;"></i>
            </div>
            <h1 style="color:#1e293b;margin:0 0 8px 0;font-size:28px;font-weight:800;">Order Received!</h1>
            <p style="color:#64748b;font-size:15px;margin:0 0 24px 0;">Confirmed for <b style="color:#16a34a;">${date||'Today'}</b> during <b style="color:#16a34a;">${slot||'Scheduled Slot'}</b></p>
            ${pointsBanner}
            <div style="width:100%;max-width:380px;background:#f8fafc;border-radius:24px;padding:20px;border:1px solid #e2e8f0;margin-bottom:20px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:15px;border-bottom:2px dashed #e2e8f0;">
                    <div><div style="font-size:11px;color:#94a3b8;font-weight:700;">ORDER ID</div><div style="color:#1e293b;font-weight:800;">#AE-${orderId}</div></div>
                    <span style="color:#16a34a;font-weight:800;font-size:11px;background:#dcfce7;padding:6px 12px;border-radius:12px;">CONFIRMED</span>
                </div>
                <details style="background:white;border-radius:16px;border:1px solid #e2e8f0;padding:12px;">
                    <summary style="list-style:none;cursor:pointer;font-weight:700;font-size:13px;color:#2563eb;">VIEW ITEMS & RECEIPT</summary>
                    <div style="margin-top:15px;border-top:1px solid #f1f5f9;padding-top:10px;">
                        <div style="max-height:200px;overflow-y:auto;margin-bottom:15px;">${orderSummaryHtml}</div>
                        <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:800;padding-top:10px;border-top:1px solid #e2e8f0;">
                            <span>Total Paid</span><span style="color:#16a34a;">${total}</span>
                        </div>
                    </div>
                </details>
            </div>
            <button onclick="localStorage.removeItem('cart');window.location.reload();" style="width:100%;max-width:380px;background:#16a34a;color:white;border:none;padding:18px;border-radius:16px;font-weight:800;font-size:16px;cursor:pointer;">GOT IT, THANKS!</button>
        </div>`;
}

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────
function openFullProfile() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { openModal('login'); return; }
    const userData = JSON.parse(localStorage.getItem("userData")) || { name: user.name, phone: user.phone };
    const overlay = document.getElementById('full-profile-page');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const wishCount = (JSON.parse(localStorage.getItem('wishlist')) || []).length;
    overlay.innerHTML = `
        <nav class="profile-nav">
            <div class="nav-content">
                <div class="brand-logo" onclick="closeFullProfile()" style="cursor:pointer;">
                    <span style="color:var(--primary);font-weight:900;font-size:22px;">ARJUN ENTERPRISES</span>
                </div>
                <div class="nav-links">
                    <a href="javascript:void(0)" onclick="closeFullProfile()"><i class="fa-solid fa-house nav-icon"></i> Home</a>
                    <a href="javascript:void(0)" onclick="renderProfileTab('about')"><i class="fa-solid fa-building nav-icon"></i> About</a>
                    <a href="javascript:void(0)" onclick="renderProfileTab('offers')"><i class="fa-solid fa-tag nav-icon"></i> Offers</a>
                    <a href="javascript:void(0)" onclick="redirectToSearch()"><i class="fa-solid fa-magnifying-glass nav-icon"></i> Search</a>
                    <a href="javascript:void(0)" onclick="renderProfileTab('help')"><i class="fa-solid fa-headset nav-icon"></i> Help</a>
                    <a href="javascript:void(0)" class="active-nav"><i class="fa-solid fa-circle-user nav-icon"></i> ${userData.name.split(' ')[0]}</a>
                </div>
            </div>
        </nav>
        <div class="account-content-wrapper" style="max-width:100%;margin-top:0;">
            <div class="profile-card-dark" style="background:#2b3947;padding:60px 80px;margin:0;border-radius:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto;">
                    <div>
                        <h1 id="display-user-name" style="margin:0;font-size:32px;color:white;">${userData.name}</h1>
                        <p id="display-user-phone" style="opacity:0.8;margin-top:5px;color:white;">+91 ${userData.phone}</p>
                    </div>
                    <button class="edit-profile-btn" onclick="openEditModal()" style="background:transparent;border:1px solid white;color:white;padding:10px 20px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:8px;border-radius:5px;">
                        <i class="fa-solid fa-user-pen"></i> EDIT PROFILE
                    </button>
                </div>
            </div>
            <div class="profile-layout" style="display:flex;max-width:1100px;margin:-30px auto 50px;background:white;box-shadow:0 10px 30px rgba(0,0,0,0.1);position:relative;z-index:10;min-height:500px;border-radius:12px;overflow:hidden;">
                <div class="profile-sidebar" style="background:#edf1f7;width:280px;padding:20px 0;">
                    <div class="sidebar-tab active" onclick="renderProfileTab('orders')"><i class="fa-solid fa-box nav-icon"></i> Purchase History</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('loyalty')"><i class="fa-solid fa-coins nav-icon"></i> Loyalty Points</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('referral')"><i class="fa-solid fa-gift nav-icon"></i> Refer & Earn</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('address')"><i class="fa-solid fa-location-dot nav-icon"></i> Saved Addresses</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('payment')"><i class="fa-solid fa-credit-card nav-icon"></i> Payments</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('about')"><i class="fa-solid fa-building nav-icon"></i> About Arjun Ent.</div>
                    <div class="sidebar-tab" onclick="renderProfileTab('settings')"><i class="fa-solid fa-gear nav-icon"></i> Settings</div>
                    <div class="sidebar-tab" onclick="handleLogout()" style="color:red;margin-top:50px;"><i class="fa-solid fa-power-off nav-icon"></i> Sign Out</div>
                </div>
                <div class="profile-main-content" style="padding:40px;flex:1;">
                    <h2 id="tab-title">Purchase History</h2>
                    <div id="tab-content-area"></div>
                </div>
            </div>
        </div>`;
    renderProfileTab('orders');
}
function closeFullProfile() { document.getElementById('full-profile-page').style.display='none'; document.body.style.overflow='auto'; }
function redirectToSearch() {
    closeFullProfile();
    window.scrollTo({top:0,behavior:'smooth'});
    const s = document.getElementById('productSearch');
    if (s) { setTimeout(()=>{ s.focus(); s.style.boxShadow="0 0 10px var(--primary)"; setTimeout(()=>s.style.boxShadow="none",2000); },300); }
}
function renderProfileTab(tabName) {
    const mainContent = document.querySelector('.profile-main-content');
    const tabs = document.querySelectorAll('.sidebar-tab');
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    tabs.forEach(t => { t.classList.remove('active'); if(t.innerText.toLowerCase().includes(tabName.toLowerCase())) t.classList.add('active'); });

    switch(tabName) {

        case 'orders': {
    mainContent.innerHTML = `<h2>Purchase History</h2>
        <div id="tab-content-area">
            <p style="text-align:center;padding:40px;color:#64748b;">Loading orders...</p>
        </div>`;

    const orderUser = JSON.parse(localStorage.getItem("user"));
    const orderContainer = document.getElementById('tab-content-area');

    if (!orderUser) {
        orderContainer.innerHTML = `<div style="text-align:center;padding:40px;opacity:0.6;">
            <i class="fa-solid fa-user-lock" style="font-size:30px;margin-bottom:10px;color:#3b82f6;"></i>
            <p>Please login to view orders.</p>
        </div>`;
        break;
    }

    fetch(`https://arjun-store.onrender.com/my-orders/${orderUser.phone}`)
        .then(res => res.json())
        .then(data => {
            if (!data.success || data.orders.length === 0) {
                orderContainer.innerHTML = `
                    <div style="text-align:center;padding:60px;opacity:0.6;">
                        <i class="fa-solid fa-box-open" style="font-size:40px;margin-bottom:15px;color:#f59e0b;"></i>
                        <h3>No orders placed yet.</h3>
                        <p style="color:#94a3b8;">Your order history will appear here.</p>
                    </div>`;
                return;
            }

            orderContainer.innerHTML = data.orders.map((o, idx) => {
                const isLatest = idx === 0;
                return `
                <div style="border:${isLatest ? '2px solid #ff5200' : '1px solid #e2e8f0'};padding:16px;border-radius:14px;margin-bottom:14px;background:white;position:relative;box-shadow:${isLatest ? '0 4px 16px rgba(255,82,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)'};">
                    ${isLatest ? `<div style="position:absolute;top:-10px;left:16px;background:#ff5200;color:white;font-size:10px;font-weight:800;padding:2px 10px;border-radius:20px;letter-spacing:0.5px;">LATEST ORDER</div>` : ''}

                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;margin-top:${isLatest ? '6px' : '0'};">
                        <span style="font-weight:800;color:#1e293b;">
                            <i class="fa-solid fa-receipt" style="color:#6366f1;"></i> 
                            Order #${o._id.toString().slice(-6).toUpperCase()}
                        </span>
                        <span style="color:#16a34a;font-size:11px;font-weight:bold;background:#dcfce7;padding:4px 10px;border-radius:20px;">
                            ${o.status || 'In Progress'}
                        </span>
                    </div>

                    <div style="font-size:13px;color:#64748b;margin-bottom:6px;">
                        <i class="fa-solid fa-list" style="color:#0ea5e9;"></i> 
                        ${o.items.map(i => i.name).join(', ')}
                    </div>

                    <div style="font-size:12px;color:#94a3b8;border-top:1px dashed #eee;padding-top:8px;margin-top:8px;margin-bottom:12px;">
                        <i class="fa-solid fa-calendar-days" style="color:#10b981;"></i> 
                        ${new Date(o.createdAt).toLocaleDateString('en-IN')} &nbsp;•&nbsp;
                        <i class="fa-solid fa-indian-rupee-sign" style="color:#22c55e;"></i> 
                        ${o.totalAmount} &nbsp;•&nbsp;
                        <i class="fa-solid fa-clock" style="color:#f97316;"></i> 
                        ${o.slot || 'ASAP'} &nbsp;•&nbsp;
                        <i class="fa-solid fa-location-dot" style="color:#ef4444;"></i> 
                        ${o.address || 'N/A'}
                    </div>

                    <button onclick="reorderFromServer(${JSON.stringify(o.items).replace(/"/g, '&quot;')})" style="
                        width:100%;padding:${isLatest ? '13px' : '10px'};border-radius:10px;border:none;cursor:pointer;
                        background:${isLatest ? '#ff5200' : '#fff3ee'};
                        color:${isLatest ? '#fff' : '#ff5200'};
                        font-weight:800;font-size:${isLatest ? '15px' : '13px'};
                        display:flex;align-items:center;justify-content:center;gap:8px;
                        transition:all 0.2s;border:${isLatest ? 'none' : '1.5px solid #ff5200'};"
                        onmouseover="this.style.opacity='0.85'"
                        onmouseout="this.style.opacity='1'">
                        <i class="fa-solid fa-rotate-right"></i>
                        ${isLatest ? '🛒 Reorder This — One Click!' : 'Reorder'}
                    </button>
                </div>`;
            }).join('');
        })
        .catch(err => {
            console.error(err);
            orderContainer.innerHTML = `
                <div style="text-align:center;padding:40px;color:red;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size:30px;color:#ef4444;"></i>
                    <p>Could not load orders.</p>
                    <p style="font-size:12px;color:#94a3b8;">Make sure your server is running on port 5000.</p>
                </div>`;
        });

    break;
}
case 'loyalty': {
    const loyUser = JSON.parse(localStorage.getItem("user"));
    if (!loyUser) {
        mainContent.innerHTML = `<h2>Loyalty Points</h2><p style="color:#94a3b8;text-align:center;padding:40px;">Please login to view your points.</p>`;
        break;
    }
    mainContent.innerHTML = `
        <h2 style="margin:0 0 4px;"><i class="fa-solid fa-coins" style="margin-right:8px;"></i> Loyalty Points</h2>
        <p style="color:#94a3b8;font-size:13px;margin:0 0 24px;">Every ₹100 spent = 10 points. Redeem at checkout.</p>
        <div id="loyalty-tab-content"><p style="color:#64748b;text-align:center;padding:30px;">Loading...</p></div>`;

    fetch(`https://arjun-store.onrender.com/loyalty/${loyUser.phone}`)
        .then(r => r.json())
        .then(data => {
            const pts     = data.points      || 0;
            const earned  = data.totalEarned || 0;
            const spent   = data.totalSpent  || 0;
            const history = data.history     || [];
            const rupeeVal = Math.floor(pts / 10);

            const historyHtml = history.length === 0
                ? `<p style="text-align:center;color:#94a3b8;padding:20px 0;">No transactions yet. Place an order to start earning!</p>`
                : history.slice().reverse().map(h => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #f1f5f9;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:36px;height:36px;border-radius:50%;background:${h.type==='earned'?'#f0fdf4':'#fff7ed'};display:flex;align-items:center;justify-content:center;font-size:16px;">
                                ${h.type==='earned'
    ? '<i class="fa-solid fa-coins" style="color:#16a34a;"></i>'
    : '<i class="fa-solid fa-gift" style="color:#f59e0b;"></i>'
}
                            </div>
                            <div>
                                <p style="margin:0;font-size:13px;font-weight:600;color:#1e293b;">${h.note}</p>
                                <p style="margin:2px 0 0;font-size:11px;color:#94a3b8;">${new Date(h.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</p>
                            </div>
                        </div>
                        <span style="font-weight:800;font-size:14px;color:${h.type==='earned'?'#16a34a':'#f59e0b'};">
                            ${h.type==='earned'?'+':'-'}${h.points} pts
                        </span>
                    </div>`).join('');

            document.getElementById('loyalty-tab-content').innerHTML = `
                <div style="background:linear-gradient(135deg,#1e293b,#2b3947);border-radius:20px;padding:28px;color:white;margin-bottom:20px;position:relative;overflow:hidden;">
                    <div style="position:absolute;right:-20px;top:-20px;font-size:120px;opacity:0.06;">🪙</div>
                    <p style="margin:0 0 4px;font-size:12px;opacity:0.7;letter-spacing:1px;text-transform:uppercase;">Available Balance</p>
                    <h2 style="margin:0;font-size:42px;font-weight:900;">${pts} <span style="font-size:18px;font-weight:400;opacity:0.8;">pts</span></h2>
                    <p style="margin:6px 0 0;font-size:14px;opacity:0.8;">≈ ₹${rupeeVal} discount value</p>
                    <div style="display:flex;gap:20px;margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.15);">
                        <div><p style="margin:0;font-size:11px;opacity:0.6;">TOTAL EARNED</p><p style="margin:2px 0 0;font-weight:700;font-size:16px;">+${earned} pts</p></div>
                        <div><p style="margin:0;font-size:11px;opacity:0.6;">TOTAL REDEEMED</p><p style="margin:2px 0 0;font-weight:700;font-size:16px;">-${spent} pts</p></div>
                    </div>
                </div>

                <div style="background:#fef9c3;border:1px solid #fcd34d;border-radius:12px;padding:16px 20px;margin-bottom:20px;">
                    <p style="margin:0 0 10px;font-weight:700;color:#92400e;font-size:13px;"><i class="fa-solid fa-bolt" style="margin-right:6px;"></i> How It Works</p>
                    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;">
                        <div style="background:white;border-radius:10px;padding:12px;">
                            <div style="font-size:22px;margin-bottom:4px;"><div style="font-size:22px;margin-bottom:4px;">
    <i class="fa-solid fa-cart-shopping"></i>
</div></div>
                            <p style="margin:0;font-size:11px;font-weight:700;color:#1e293b;">Shop</p>
                            <p style="margin:2px 0 0;font-size:10px;color:#64748b;">Place orders</p>
                        </div>
                        <div style="background:white;border-radius:10px;padding:12px;">
                            <div style="font-size:22px;margin-bottom:4px;"><i class="fa-solid fa-coins"></i></div>
                            <p style="margin:0;font-size:11px;font-weight:700;color:#1e293b;">Earn</p>
                            <p style="margin:2px 0 0;font-size:10px;color:#64748b;">₹100 = 10 pts</p>
                        </div>
                        <div style="background:white;border-radius:10px;padding:12px;">
                            <div style="font-size:22px;margin-bottom:4px;"><i class="fa-solid fa-gift"></i></div>
                            <p style="margin:0;font-size:11px;font-weight:700;color:#1e293b;">Redeem</p>
                            <p style="margin:2px 0 0;font-size:10px;color:#64748b;">10 pts = ₹1 off</p>
                        </div>
                    </div>
                    <p style="margin:10px 0 0;font-size:11px;color:#a16207;text-align:center;">Minimum 100 points required to redeem at checkout.</p>
                </div>

                <h4 style="margin:0 0 12px;color:#1e293b;">Transaction History</h4>
                <div>${historyHtml}</div>`;
        })
        .catch(() => {
            document.getElementById('loyalty-tab-content').innerHTML = `<p style="color:red;text-align:center;">Could not load points. Make sure server is running.</p>`;
        });
    break;
}
        case 'address': {
            mainContent.innerHTML = `
                <h2>Saved Addresses</h2>
                <div id="address-items-container">
                    <p style="text-align:center;padding:20px;color:#999;">Loading...</p>
                </div>
                <button id="add-address-btn" onclick="toggleAddressForm(true)" style="margin-top:20px;background:white;border:1px dashed #cbd5e1;width:100%;padding:15px;border-radius:12px;color:#64748b;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;">
                    <i class="fa-solid fa-plus"></i> Add New Address
                </button>
                <div id="new-address-form" style="display:none;margin-top:15px;background:white;padding:20px;border-radius:12px;border:1px solid #e2e8f0;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:15px;">
                        <input type="text" id="addr-name" placeholder="Name *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;">
                        <input type="text" id="addr-phone" placeholder="Contact Number *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;">
                    </div>
                    <input type="text" id="addr-pincode" placeholder="Pincode *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;margin-bottom:15px;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:15px;">
                        <input type="text" id="addr-city" placeholder="City *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;">
                        <input type="text" id="addr-state" placeholder="State *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;">
                    </div>
                    <input type="text" id="addr-house" placeholder="House no. / Building Name *" style="width:100%;padding:10px;border:none;border-bottom:2px solid var(--primary);outline:none;margin-bottom:15px;">
                    <input type="text" id="addr-road" placeholder="Road Name / Area / Colony *" style="width:100%;padding:10px;border:none;border-bottom:1px solid #ddd;outline:none;margin-bottom:20px;">
                    <button onclick="saveNewAddress()" style="width:100%;background:#9c27b0;color:white;border:none;padding:14px;border-radius:8px;font-weight:bold;cursor:pointer;">Save Address</button>
                    <button onclick="toggleAddressForm(false)" style="width:100%;background:transparent;color:#666;border:none;padding:10px;margin-top:5px;cursor:pointer;font-size:12px;">Cancel</button>
                </div>`;

            const addrUser = JSON.parse(localStorage.getItem("user"));
            if (!addrUser) break;

            fetch(`https://arjun-store.onrender.com/my-addresses/${addrUser.phone}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("allSavedAddresses", JSON.stringify(data.addresses || []));
                    const addrContainer = document.getElementById('address-items-container');
                    const selectedAddr  = localStorage.getItem("selectedAddress") || "";
                    const addresses     = data.addresses || [];

                    if (addresses.length === 0) {
                        addrContainer.innerHTML = `
                            <div style="padding:20px;border:1px solid #e2e8f0;background:#f0fff4;border-radius:12px;color:#444;">
                                No address saved yet. Click "Add New Address" below.
                            </div>`;
                        return;
                    }

                    addrContainer.innerHTML = addresses.map((addr, index) => `
                        <div style="display:flex;justify-content:space-between;align-items:center;
                                    background:white;border:2px solid ${addr.fullAddress === selectedAddr ? '#16a34a' : '#e2e8f0'};
                                    padding:15px;border-radius:12px;margin-bottom:10px;">
                            <div style="flex:1;cursor:pointer;" onclick="setQuickLocation('${addr.fullAddress.replace(/'/g, "\\'")}')">
                                <p style="margin:0;font-weight:700;color:#1e293b;">${addr.name || 'Address ' + (index+1)}</p>
                                <p style="margin:0;font-size:13px;color:#64748b;">${addr.fullAddress}</p>
                                <p style="margin:0;font-size:12px;color:#94a3b8;">${addr.contactPhone || addr.phone || ''}</p>
                            </div>
                            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
                                ${addr.fullAddress === selectedAddr
                                    ? '<span style="color:#16a34a;font-size:11px;font-weight:bold;">✓ SELECTED</span>'
                                    : `<button onclick="setQuickLocation('${addr.fullAddress.replace(/'/g, "\\'")}') " style="background:#f0fdf4;color:#16a34a;border:1px solid #16a34a;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:11px;font-weight:bold;">SELECT</button>`}
                                <button onclick="deleteAddress('${addr._id}')" style="background:none;border:none;color:#ef4444;cursor:pointer;padding:4px;">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>`).join('');
                })
                .catch(() => {
                    document.getElementById('address-items-container').innerHTML =
                        `<p style="color:red;text-align:center;">Could not load addresses. Check server.</p>`;
                });
            break;
        }

        case 'payment':
            mainContent.innerHTML = `
                <h2>Payment Methods</h2>
                <div style="display:flex;justify-content:space-between;padding:20px;border:1px solid #eee;border-radius:10px;align-items:center;">
                    <div style="display:flex;gap:15px;align-items:center;">
                        <i class="fa-solid fa-money-bill-1-wave" style="color:#2ecc71;font-size:20px;"></i>
                        <span>Cash on Delivery (Default)</span>
                    </div>
                    <span style="color:var(--primary);font-weight:700;font-size:12px;">ACTIVE</span>
                </div>`;
            break;

        case 'settings':
            mainContent.innerHTML = `
                <h2>Account Settings</h2>
                <div style="display:flex;justify-content:space-between;padding:20px;border-bottom:1px solid #eee;">
                    <div>
                        <p style="font-weight:600;margin:0;"><i class="fa-solid fa-comment-sms"></i> SMS Notifications</p>
                        <p style="font-size:12px;color:#666;margin:0;">Updates on +91 ${userData.phone}</p>
                    </div>
                    <input type="checkbox" checked style="accent-color:var(--primary);width:20px;height:20px;">
                </div>
                <button onclick="handleLogout()" style="margin-top:30px;background:#fff1f0;color:#ff4d4f;border:1px solid #ffa39e;padding:12px 25px;border-radius:8px;cursor:pointer;font-weight:600;">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout from Device
                </button>`;
            break;

        case 'about':
            mainContent.innerHTML = `
        <div class="corporate-section-inner">
            <h2 style="margin-bottom:10px;">Delivering for Everyone</h2>
            <p style="color:#64748b; margin-bottom:30px;">Building the most trusted grocery network in the region.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom:40px;">
                <div style="background:#f8fafc; padding:20px; border-radius:12px; border:1px solid #e2e8f0; text-align:center;">
                    <h3 style="color:var(--primary); margin:0; font-size:24px;">15K+</h3>
                    <p style="font-size:12px; color:#64748b; margin:0;">Happy Customers</p>
                </div>
                <div style="background:#f8fafc; padding:20px; border-radius:12px; border:1px solid #e2e8f0; text-align:center;">
                    <h3 style="color:var(--primary); margin:0; font-size:24px;">20 Min</h3>
                    <p style="font-size:12px; color:#64748b; margin:0;">Avg. Delivery Time</p>
                </div>
            </div>

            <div class="corp-info-block" style="margin-bottom: 40px;">
                <h3 style="font-size:20px; margin-bottom:15px;">Our Delivery Heroes</h3>
                <div style="width:100%; height:250px; border-radius:16px; overflow:hidden; margin-bottom:20px;">
                    <img src="delivery.jpg" 
                         alt="Delivery Hero" 
                         style="width:100%; height:100%; object-fit:cover;">
                </div>
                <p style="color:#64748b; line-height:1.6; font-size:14px;">
                    Our fleet of 50+ dedicated delivery partners ensures that even in the busiest hours, your essentials are delivered with a smile and on time. We take pride in our "Delivery Heroes" who are the backbone of Arjun Enterprises.
                </p>
            </div>

            <div style="display:flex; gap:15px; align-items:flex-start; background:#f0fff4; padding:20px; border-radius:12px; border: 1px solid #dcfce7;">
                <span style="font-size:24px;">🛡️</span>
                <div>
                    <p style="font-weight:700; margin:0; color:var(--primary);">Hygiene & Quality</p>
                    <p style="font-size:13px; color:#444; margin:0;">Every item undergoes a strict 5-step quality check before reaching your doorstep.</p>
                </div>
            </div>

            <div style="margin-top:40px; padding:25px; background:var(--primary); color:white; border-radius:12px; text-align:center;">
                <p style="margin:0; font-weight:700; font-size:18px;">Join Our Mission</p>
                <p style="font-size:13px; margin:5px 0 20px; opacity:0.9;">Want to become a delivery partner or vendor?</p>
                <button style="background:white; color:var(--primary); border:none; padding:12px 30px; border-radius:8px; font-weight:700; cursor:pointer; transition:0.3s;"
                        onmouseover="this.style.transform='scale(1.05)'" 
                        onmouseout="this.style.transform='scale(1)'"
                        onclick="contactSupport('business')">
                    Contact Business Team
                </button>
            </div>
        </div>
    `;
    break;

        case 'offers': {
            const offerUser    = JSON.parse(localStorage.getItem("user"));
            const cartSubtotal = cart.reduce((t,i) => t+((i.price||0)*(i.qty||1)), 0);
            const needForDisc  = Math.max(0, 999 - cartSubtotal);
            const needForFree  = Math.max(0, 499 - cartSubtotal);

            // Flash sale data (fetched fresh for the tab)
            mainContent.innerHTML = `
                <h2>Available Offers</h2>
                <div style="display:flex;flex-direction:column;gap:16px;">

                    <!-- ⚡ FLASH SALE LIVE DEALS -->
                    <div id="offers-flash-block"></div>

                    <!-- AUTO OFFER: 10% off at ₹999 -->
                    <div style="border-radius:14px;overflow:hidden;border:2px dashed #8b5cf6;position:relative;">
                        <div style="display:flex;">
                            <div style="background:#8b5cf6;color:white;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100px;">
                                <span style="font-size:24px;font-weight:900;">10%</span>
                                <span style="font-size:10px;">DELIVERY</span><span style="font-size:13px;font-weight:900;margin-top:4px;">+₹50</span><span style="font-size:9px;">OFF</span>
                            </div>
                            <div style="padding:15px;flex:1;">
                                <h4 style="margin:0;">Spend ₹999, Save 10%</h4>
                                <p style="font-size:12px;color:#64748b;margin:5px 0;">Automatically applied at checkout on orders above ₹999.</p>
                                <code style="background:#f3e8ff;padding:5px 10px;border-radius:4px;font-weight:bold;color:#8b5cf6;">SAVE10</code>
                                <button onclick="copyCode('SAVE10')" style="background:none;border:none;color:#8b5cf6;cursor:pointer;font-weight:bold;font-size:12px;margin-left:10px;">COPY</button>
                                ${cartSubtotal >= 999
                                    ? `<div style="margin-top:8px;background:#f3e8ff;border-radius:8px;padding:6px 10px;font-size:12px;color:#7c3aed;font-weight:700;">✅ Your cart qualifies! Apply at checkout.</div>`
                                    : `<div style="margin-top:8px;">
                                        <div style="height:5px;background:#f1f5f9;border-radius:4px;overflow:hidden;margin-bottom:4px;">
                                            <div style="height:100%;width:${Math.min((cartSubtotal/999)*100,100)}%;background:#8b5cf6;border-radius:4px;transition:width 0.4s;"></div>
                                        </div>
                                        <span style="font-size:11px;color:#94a3b8;">Add <b style="color:#8b5cf6;">₹${needForDisc}</b> more to unlock this offer</span>
                                       </div>`
                                }
                            </div>
                        </div>
                    </div>

                    <!-- AUTO OFFER: Free delivery at ₹499 -->
                    <div style="border-radius:14px;overflow:hidden;border:2px dashed #10b981;">
                        <div style="display:flex;">
                            <div style="background:#10b981;color:white;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100px;">
                                <span style="font-size:18px;font-weight:900;">FREE</span>
                                <span style="font-size:10px;">DELIVERY</span>
                            </div>
                            <div style="padding:15px;flex:1;">
                                <h4 style="margin:0;">Free Delivery on ₹499+</h4>
                                <p style="font-size:12px;color:#64748b;margin:5px 0;">No coupon needed — free delivery auto-applied above ₹499.</p>
                                ${cartSubtotal >= 499
                                    ? `<div style="margin-top:8px;background:#f0fdf4;border-radius:8px;padding:6px 10px;font-size:12px;color:#16a34a;font-weight:700;">✅ Free delivery active on your cart!</div>`
                                    : `<div style="margin-top:8px;">
                                        <div style="height:5px;background:#f1f5f9;border-radius:4px;overflow:hidden;margin-bottom:4px;">
                                            <div style="height:100%;width:${Math.min((cartSubtotal/499)*100,100)}%;background:#10b981;border-radius:4px;transition:width 0.4s;"></div>
                                        </div>
                                        <span style="font-size:11px;color:#94a3b8;">Add <b style="color:#10b981;">₹${needForFree}</b> more to unlock</span>
                                       </div>`
                                }
                            </div>
                        </div>
                    </div>

                    <!-- FIRST50 -->
                    <div style="display:flex;border:2px dashed #ff5200;border-radius:12px;overflow:hidden;">
                        <div style="background:#ff5200;color:white;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100px;">
                            <span style="font-size:16px;font-weight:900;">FREE</span>
                            <span style="font-size:10px;">DELIVERY</span><span style="font-size:13px;font-weight:900;margin-top:4px;">+₹50</span><span style="font-size:9px;">OFF</span>
                        </div>
                        <div style="padding:15px;">
                            <h4 style="margin:0;">First Order Special</h4>
                            <p style="font-size:12px;color:#64748b;margin:5px 0;">Free delivery on your first order + ₹50 off on orders above ₹200.</p>
                            <code style="background:#eee;padding:5px 10px;border-radius:4px;font-weight:bold;color:#ff5200;">FIRST50</code>
                            <button onclick="copyCode('FIRST50')" style="background:none;border:none;color:var(--primary);cursor:pointer;font-weight:bold;font-size:12px;margin-left:10px;">COPY</button>
                        </div>
                    </div>

                    <!-- WEEKEND100 -->
                    <div style="display:flex;border:2px dashed #25D366;border-radius:12px;overflow:hidden;">
                        <div style="background:#25D366;color:white;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100px;">
                            <span style="font-size:24px;font-weight:900;">₹100</span>
                            <span style="font-size:10px;">CASHBACK</span>
                        </div>
                        <div style="padding:15px;">
                            <h4 style="margin:0;">Weekend Bonanza</h4>
                            <p style="font-size:12px;color:#64748b;margin:5px 0;">₹100 cashback on orders above ₹999.</p>
                            <code style="background:#eee;padding:5px 10px;border-radius:4px;font-weight:bold;color:#25D366;">WEEKEND100</code>
                            <button onclick="copyCode('WEEKEND100')" style="background:none;border:none;color:#25D366;cursor:pointer;font-weight:bold;font-size:12px;margin-left:10px;">COPY</button>
                        </div>
                    </div>

                </div>`;

            // ⚡ Load live flash deals into the offers tab
            fetch('https://arjun-store.onrender.com/flash-sales')
                .then(r => r.json())
                .then(data => {
                    const block = document.getElementById('offers-flash-block');
                    if (!block) return;
                    const sales = (data.sales || []).filter(s => new Date(s.endsAt) > new Date());
                    if (sales.length === 0) { block.innerHTML = ''; return; }
                    const soonest = sales.reduce((a,b) => new Date(a.endsAt)<new Date(b.endsAt)?a:b);
                    const pad = n => String(n).padStart(2,'0');
                    const buildOT = (ms) => {
                        const h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000),s=Math.floor((ms%60000)/1000);
                        return [{v:h,l:'HRS'},{v:m,l:'MIN'},{v:s,l:'SEC'}].map((t,i,arr)=>
                            '<div style="background:linear-gradient(135deg,#ff5200,#ff8c42);color:white;border-radius:8px;padding:5px 10px;min-width:42px;text-align:center;box-shadow:0 3px 8px rgba(255,82,0,0.4);">'
                            +'<div style="font-size:18px;font-weight:900;line-height:1;">'+pad(t.v)+'</div>'
                            +'<div style="font-size:8px;opacity:0.85;font-weight:700;letter-spacing:1px;">'+t.l+'</div>'
                            +'</div>'+(i<arr.length-1?'<span style="color:#ff8c42;font-size:20px;font-weight:900;margin-top:-4px;">:</span>':'')
                        ).join('');
                    };
                    const cardsHtml = sales.map(sale => {
                        const disc = Math.round(((sale.originalPrice-sale.salePrice)/sale.originalPrice)*100);
                        const img  = sale.img && sale.img!=='placeholder.jpg' ? sale.img : 'https://via.placeholder.com/150';
                        return '<div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden;transition:transform 0.2s;" onmouseover="this.style.transform=\'translateY(-3px)\'" onmouseout="this.style.transform=\'\'"><div style="position:relative;"><img src="'+img+'" onerror="this.src=\'https://via.placeholder.com/150\'" style="width:100%;height:90px;object-fit:cover;display:block;"><span style="position:absolute;top:6px;left:6px;background:#ff5200;color:white;font-size:10px;font-weight:800;padding:2px 7px;border-radius:10px;">-'+disc+'%</span></div><div style="padding:9px;"><p style="margin:0 0 4px;font-size:12px;font-weight:700;color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+sale.productName+'</p><div style="display:flex;align-items:center;gap:5px;margin-bottom:8px;"><span style="font-size:14px;font-weight:900;color:#ff5200;">&#8377;'+sale.salePrice+'</span><span style="font-size:11px;color:#64748b;text-decoration:line-through;">&#8377;'+sale.originalPrice+'</span></div><button onclick="addToCart(this.dataset.n,'+sale.salePrice+',this.dataset.i);this.textContent=\'✓ Added!\';this.style.background=\'#10b981\';setTimeout(()=>{this.textContent=\'🛒 Grab\';this.style.background=\'\';},2000);" data-n="'+sale.productName.replace(/'/g,"\'").replace(/"/g,'&quot;')+'" data-i="'+sale.img+'" style="width:100%;background:#ff5200;color:white;border:none;padding:6px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;">🛒 Grab</button></div></div>';
                    }).join('');
                    const rem0 = new Date(soonest.endsAt) - new Date();
                    block.innerHTML =
                        '<div style="border-radius:16px;overflow:hidden;border:2px solid #ff5200;background:linear-gradient(135deg,#1e293b,#2b3947);">'
                        +'<div style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,82,0,0.3);">'
                        +'<div style="display:flex;align-items:center;gap:10px;"><span style="background:linear-gradient(135deg,#ff5200,#ff8c42);color:white;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:900;letter-spacing:1px;">⚡ FLASH SALE</span><span style="color:white;font-weight:700;font-size:14px;">Live Deals</span></div>'
                        +'<div style="display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="color:#94a3b8;font-size:9px;font-weight:700;letter-spacing:2px;">⏳ ENDS IN</span>'
                        +'<div style="display:flex;gap:5px;align-items:center;" id="offers-flash-timer">'+buildOT(rem0)+'</div></div>'
                        +'</div>'
                        +'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px;padding:16px;">'+cardsHtml+'</div>'
                        +'</div>';
                    const offTid = setInterval(() => {
                        const el = document.getElementById('offers-flash-timer');
                        if (!el) { clearInterval(offTid); return; }
                        const rem = new Date(soonest.endsAt) - new Date();
                        if (rem <= 0) { clearInterval(offTid); el.innerHTML = '<span style="color:#ef4444;font-weight:700;font-size:13px;">EXPIRED</span>'; return; }
                        el.innerHTML = buildOT(rem);
                    }, 1000);
                })
                .catch(() => { const b=document.getElementById('offers-flash-block'); if(b) b.innerHTML=''; });
            break;
        }
        case 'referral': {
            mainContent.innerHTML = `
                <h2>Refer & Earn 🎁</h2>
                <div id="referral-tab-content" style="text-align:center;padding:30px;color:#64748b;">
                    <div style="width:36px;height:36px;border:3px solid #f3f3f3;border-top:3px solid #ff5200;
                        border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 12px;"></div>
                    <p>Loading your referral details...</p>
                </div>`;
            const refUser = JSON.parse(localStorage.getItem('user'));
            if (!refUser) break;
            Promise.all([
                fetch(`https://arjun-store.onrender.com/referral/${refUser.phone}`).then(r => r.json()),
                fetch(`https://arjun-store.onrender.com/wallet/${refUser.phone}`).then(r => r.json())
            ]).then(([refData, walData]) => {
                const code     = refData.success ? refData.code         : '—';
                const uses     = refData.success ? refData.totalUses    : 0;
                const earned   = refData.success ? refData.earnedCredit : 0;
                const balance  = walData.balance  || 0;
                const txns     = walData.transactions || [];
                const origin   = window.location.origin + window.location.pathname;
                const shareUrl = `${origin}?ref=${code}`;
                const shareMsg = `Hey! Join Arjun SuperMarket and get ₹50 off! Use my code: ${code} 👉 ${shareUrl}`;
                document.getElementById('referral-tab-content').innerHTML = `
                <div style="background:linear-gradient(135deg,#1e293b,#2b3947);border-radius:16px;padding:24px 28px;color:white;margin-bottom:22px;position:relative;overflow:hidden;">
                    <div style="position:absolute;right:-10px;top:-10px;font-size:90px;opacity:0.07;pointer-events:none;">🎁</div>
                    <p style="margin:0 0 4px;font-size:11px;color:#94a3b8;letter-spacing:1px;font-weight:600;text-transform:uppercase;">Your Referral Code</p>
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap;">
                        <span style="font-size:26px;font-weight:900;letter-spacing:3px;color:#ff5200;">${code}</span>
                        <button onclick="copyReferralCode('${code}')" id="copy-ref-btn"
                                style="background:rgba(255,82,0,0.18);border:1px solid rgba(255,82,0,0.45);color:#ff5200;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:12px;font-weight:700;">
                            📋 COPY
                        </button>
                    </div>
                    <div style="display:flex;gap:24px;flex-wrap:wrap;">
                        <div><p style="margin:0;font-size:22px;font-weight:800;">${uses}</p><p style="margin:0;font-size:11px;color:#94a3b8;">Friends Joined</p></div>
                        <div style="width:1px;background:rgba(255,255,255,0.12);"></div>
                        <div><p style="margin:0;font-size:22px;font-weight:800;">₹${earned}</p><p style="margin:0;font-size:11px;color:#94a3b8;">Total Earned</p></div>
                        <div style="width:1px;background:rgba(255,255,255,0.12);"></div>
                        <div><p style="margin:0;font-size:22px;font-weight:800;color:#4ade80;">₹${balance}</p><p style="margin:0;font-size:11px;color:#94a3b8;">Wallet Balance</p></div>
                    </div>
                </div>
                <div style="background:#f8fafc;border-radius:14px;padding:20px;margin-bottom:20px;border:1px solid #e2e8f0;">
                    <h4 style="margin:0 0 16px;font-size:14px;font-weight:700;color:#1e293b;">How it works</h4>
                    <div style="display:flex;">
                        ${[['🔗','Share code','Send to friends'],['📲','Friend joins','Uses your code'],['💰','Both get ₹50','Instant credit'],['🛒','Use it','At checkout']]
                          .map(([icon,title,sub],i,arr)=>`
                        <div style="flex:1;text-align:center;position:relative;">
                            ${i<arr.length-1?`<div style="position:absolute;top:21px;left:50%;right:-50%;height:2px;background:#e2e8f0;z-index:0;"></div>`:''}
                            <div style="width:42px;height:42px;background:white;border:2px solid #e2e8f0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;margin:0 auto 8px;position:relative;z-index:1;">${icon}</div>
                            <p style="margin:0;font-size:12px;font-weight:700;color:#1e293b;">${title}</p>
                            <p style="margin:2px 0 0;font-size:10px;color:#94a3b8;">${sub}</p>
                        </div>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:22px;">
                    <p style="font-size:13px;font-weight:700;color:#1e293b;margin:0 0 12px;">Share via</p>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <button onclick="shareReferralWhatsApp('${shareMsg.replace(/'/g,"\\'")}')"
                                style="display:flex;align-items:center;gap:8px;background:#25d366;color:white;border:none;padding:11px 18px;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        <button onclick="copyReferralLink('${shareUrl}')"
                                style="display:flex;align-items:center;gap:8px;background:#f1f5f9;color:#1e293b;border:1px solid #e2e8f0;padding:11px 18px;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;">
                            🔗 Copy Link
                        </button>
                        <button onclick="shareReferralNative('${shareMsg.replace(/'/g,"\\'")}','${shareUrl}')"
                                style="display:flex;align-items:center;gap:8px;background:#6366f1;color:white;border:none;padding:11px 18px;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;">
                            <i class="fas fa-share-nodes"></i> More
                        </button>
                    </div>
                </div>
                <div style="border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
                    <div style="background:#f8fafc;padding:14px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
                        <h4 style="margin:0;font-size:14px;font-weight:700;color:#1e293b;">💳 Wallet Transactions</h4>
                        <span style="background:${balance>0?'#dcfce7':'#f1f5f9'};color:${balance>0?'#16a34a':'#64748b'};padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;">Balance: ₹${balance}</span>
                    </div>
                    <div style="max-height:240px;overflow-y:auto;">
                        ${txns.length===0
                            ? `<p style="text-align:center;padding:24px;color:#94a3b8;font-size:13px;">No transactions yet. Start referring!</p>`
                            : txns.map(t=>`
                            <div style="display:flex;align-items:center;gap:12px;padding:12px 18px;border-bottom:1px solid #f8fafc;">
                                <div style="width:36px;height:36px;border-radius:50%;flex-shrink:0;background:${t.type==='credit'?'#dcfce7':'#fee2e2'};display:flex;align-items:center;justify-content:center;font-size:15px;">
                                    ${t.type==='credit'?'💰':'🛒'}
                                </div>
                                <div style="flex:1;min-width:0;">
                                    <p style="margin:0;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.reason}</p>
                                    <p style="margin:0;font-size:11px;color:#94a3b8;">${new Date(t.at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</p>
                                </div>
                                <span style="font-weight:800;font-size:14px;flex-shrink:0;color:${t.type==='credit'?'#16a34a':'#ef4444'};">
                                    ${t.type==='credit'?'+':'−'}₹${t.amount}
                                </span>
                            </div>`).join('')}
                    </div>
                </div>`;
            }).catch(() => {
                document.getElementById('referral-tab-content').innerHTML = `
                    <div style="text-align:center;padding:40px;color:#ef4444;">
                        <i class="fa-solid fa-circle-exclamation" style="font-size:28px;margin-bottom:10px;display:block;"></i>
                        <p>Could not load referral data. Make sure server is running.</p>
                    </div>`;
            });
            break;
        }

        case 'help':
            mainContent.innerHTML = `
                <h2 id="tab-title">Help & Support</h2>
                <div id="tab-content-area">
                    <div style="max-width:600px;">

                        <!-- Category quick-select -->
                        <p style="color:#64748b;font-size:13px;margin-bottom:16px;">What do you need help with? Select a category and send us a message — we'll reply within 24 hours.</p>
                        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px;">
                            ${[
                                {id:'order',   icon:'fa-box-open',  label:'Order Issue',    sub:'Refunds & Tracking'},
                                {id:'payment', icon:'fa-wallet',    label:'Payment',        sub:'UPI & Failures'},
                                {id:'delivery',icon:'fa-truck',     label:'Delivery',       sub:'Late or Missing'},
                                {id:'account', icon:'fa-user-gear', label:'Account',        sub:'Login Issues'},
                                {id:'product', icon:'fa-tag',       label:'Product',        sub:'Wrong / Damaged'},
                                {id:'other',   icon:'fa-headset',   label:'Other',          sub:'General Query'}
                            ].map(c => `
                                <div class="help-cat-card" data-cat="${c.id}"
                                    onclick="selectHelpCategory('${c.id}')"
                                    style="border:2px solid #e2e8f0;padding:14px 10px;border-radius:12px;
                                           text-align:center;cursor:pointer;transition:all 0.2s;">
                                    <i class="fa-solid ${c.icon}" style="font-size:22px;color:#ff5200;margin-bottom:6px;display:block;"></i>
                                    <strong style="font-size:12px;display:block;color:#1e293b;">${c.label}</strong>
                                    <span style="font-size:11px;color:#94a3b8;">${c.sub}</span>
                                </div>`).join('')}
                        </div>

                        <!-- Contact Form -->
                        <div style="background:#f8fafc;border-radius:14px;padding:24px;">
                            <h3 style="font-size:16px;font-weight:700;color:#1e293b;margin:0 0 18px;">
                                <i class="fa-solid fa-envelope" style="color:#ff5200;margin-right:8px;"></i>Send us a Message
                            </h3>

                            <input type="hidden" id="help-category" value="other">

                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
                                <div>
                                    <label style="font-size:12px;color:#64748b;font-weight:600;">Your Name *</label>
                                    <input id="help-name" type="text" placeholder="Full name"
                                        style="width:100%;margin-top:5px;padding:10px 12px;border:1px solid #e2e8f0;
                                               border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;">
                                </div>
                                <div>
                                    <label style="font-size:12px;color:#64748b;font-weight:600;">Phone</label>
                                    <input id="help-phone" type="tel" placeholder="10-digit number"
                                        style="width:100%;margin-top:5px;padding:10px 12px;border:1px solid #e2e8f0;
                                               border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;">
                                </div>
                            </div>

                            <div style="margin-bottom:12px;">
                                <label style="font-size:12px;color:#64748b;font-weight:600;">Your Email (for our reply) *</label>
                                <input id="help-email" type="email" placeholder="you@example.com"
                                    style="width:100%;margin-top:5px;padding:10px 12px;border:1px solid #e2e8f0;
                                           border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;">
                            </div>

                            <div style="margin-bottom:12px;">
                                <label style="font-size:12px;color:#64748b;font-weight:600;">Subject *</label>
                                <input id="help-subject" type="text" placeholder="Brief description of your issue"
                                    style="width:100%;margin-top:5px;padding:10px 12px;border:1px solid #e2e8f0;
                                           border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;">
                            </div>

                            <div style="margin-bottom:18px;">
                                <label style="font-size:12px;color:#64748b;font-weight:600;">Message *</label>
                                <textarea id="help-message" rows="4" placeholder="Describe your issue in detail. Include your order ID if relevant..."
                                    style="width:100%;margin-top:5px;padding:10px 12px;border:1px solid #e2e8f0;
                                           border-radius:8px;font-size:13px;outline:none;resize:vertical;
                                           box-sizing:border-box;font-family:inherit;"></textarea>
                            </div>

                            <button onclick="submitHelpForm()"
                                style="width:100%;padding:13px;background:#ff5200;color:white;border:none;
                                       border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;">
                                <i class="fa-solid fa-paper-plane" style="margin-right:8px;"></i>Send Message
                            </button>

                            <div id="help-status" style="display:none;margin-top:14px;padding:12px 16px;
                                border-radius:8px;font-size:13px;font-weight:600;text-align:center;"></div>
                        </div>

                        <!-- Response time note -->
                        <p style="text-align:center;font-size:12px;color:#94a3b8;margin-top:16px;">
                            <i class="fa-solid fa-clock" style="margin-right:4px;"></i>
                            We typically respond within <strong>24 hours</strong> on business days.
                        </p>
                    </div>
                </div>
            `;

            // Pre-fill name & phone from logged-in user
            const helpUser = JSON.parse(localStorage.getItem('user'));
            if (helpUser) {
                const nameEl = document.getElementById('help-name');
                const phoneEl = document.getElementById('help-phone');
                if (nameEl && helpUser.name)  nameEl.value  = helpUser.name;
                if (phoneEl && helpUser.phone) phoneEl.value = helpUser.phone;
            }
            break;
    }
}

function selectHelpCategory(cat) {
    document.getElementById('help-category').value = cat;
    document.querySelectorAll('.help-cat-card').forEach(el => {
        const isActive = el.dataset.cat === cat;
        el.style.borderColor  = isActive ? '#ff5200' : '#e2e8f0';
        el.style.background   = isActive ? '#fff7f5' : 'white';
    });
}

async function submitHelpForm() {
    const name     = document.getElementById('help-name')?.value.trim();
    const phone    = document.getElementById('help-phone')?.value.trim();
    const email    = document.getElementById('help-email')?.value.trim();
    const subject  = document.getElementById('help-subject')?.value.trim();
    const message  = document.getElementById('help-message')?.value.trim();
    const category = document.getElementById('help-category')?.value || 'other';
    const statusEl = document.getElementById('help-status');
    const btn      = document.querySelector('[onclick="submitHelpForm()"]');

    if (!name || !email || !subject || !message) {
        statusEl.style.display = 'block';
        statusEl.style.background = '#fff1f0';
        statusEl.style.color = '#dc2626';
        statusEl.innerText = '⚠️ Please fill in all required fields (Name, Email, Subject, Message).';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusEl.style.display = 'block';
        statusEl.style.background = '#fff1f0';
        statusEl.style.color = '#dc2626';
        statusEl.innerText = '⚠️ Please enter a valid email address.';
        return;
    }

    btn.disabled = true;
    btn.innerText = 'Sending...';
    statusEl.style.display = 'none';

    try {
        const res  = await fetch('https://arjun-store.onrender.com/contact-support', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, subject, message, category })
        });
        const data = await res.json();

        statusEl.style.display = 'block';
        if (data.success) {
            statusEl.style.background = '#f0fdf4';
            statusEl.style.color = '#16a34a';
            statusEl.innerText = '✅ Message sent! Check your email — we\'ll reply within 24 hours.';
            // Clear form
            ['help-subject','help-message'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            document.getElementById('help-category').value = 'other';
            document.querySelectorAll('.help-cat-card').forEach(el => {
                el.style.borderColor = '#e2e8f0';
                el.style.background  = 'white';
            });
        } else {
            statusEl.style.background = '#fff1f0';
            statusEl.style.color = '#dc2626';
            statusEl.innerText = '❌ ' + (data.message || 'Something went wrong. Please try again.');
        }
    } catch (e) {
        statusEl.style.display = 'block';
        statusEl.style.background = '#fff1f0';
        statusEl.style.color = '#dc2626';
        statusEl.innerText = '❌ Could not connect to server. Please try again.';
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane" style="margin-right:8px;"></i>Send Message';
}

function toggleAddressForm(show) {
    const form = document.getElementById('new-address-form');
    const btn  = document.getElementById('add-address-btn');
    if (form && btn) { form.style.display=show?'block':'none'; btn.style.display=show?'none':'flex'; }
}
function saveNewAddress() {
    const name         = document.getElementById('addr-name').value.trim();
    const contactPhone = document.getElementById('addr-phone').value.trim();
    const pin          = document.getElementById('addr-pincode').value.trim();
    const city         = document.getElementById('addr-city').value.trim();
    const state        = document.getElementById('addr-state').value.trim();
    const house        = document.getElementById('addr-house').value.trim();
    const road         = document.getElementById('addr-road').value.trim();

    if (!name || !contactPhone || !pin || !house) {
        alert("Please fill all required fields (*)");
        return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { alert("Please login first."); return; }

    const fullAddress = `${house}, ${road}, ${city}, ${state} - ${pin}`;

    // ✅ Save to MongoDB
    fetch("https://arjun-store.onrender.com/save-address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: user.phone, name, contactPhone, fullAddress })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            // ✅ Also save to localStorage for quick access
            let saved = JSON.parse(localStorage.getItem("allSavedAddresses")) || [];
            saved.unshift({ _id: data.address._id, name, phone: contactPhone, fullAddress });
            localStorage.setItem("allSavedAddresses", JSON.stringify(saved));

            // ✅ Auto-select this address
            localStorage.setItem("selectedAddress", fullAddress);

            alert("Address saved successfully!");
            renderProfileTab('address');
        } else {
            alert("Failed to save: " + data.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert("Server error. Could not save address.");
    });
}
function deleteAddress(id) {
    if (!confirm("Delete this address?")) return;

    fetch(`https://arjun-store.onrender.com/delete-address/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // ✅ Remove from localStorage too
                let saved = JSON.parse(localStorage.getItem("allSavedAddresses")) || [];
                saved = saved.filter(a => a._id !== id);
                localStorage.setItem("allSavedAddresses", JSON.stringify(saved));
                renderProfileTab('address');
            }
        })
        .catch(err => console.error("Delete error:", err));
}
function reorderItems(orderId) {
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    const oldOrder = history.find(o => o.id.toString()===orderId.toString());
    if (oldOrder && oldOrder.items) {
        reorderFromServer(oldOrder.items);
    } else { alert("Could not find items for this order."); }
}

function reorderFromServer(items) {
    let itemsArr = items;
    if (typeof items === 'string') {
        try { itemsArr = JSON.parse(items); } catch(e) { alert("Could not load order items."); return; }
    }
    if (!itemsArr || itemsArr.length === 0) { alert("No items found in this order."); return; }
    itemsArr.forEach(newItem => {
        const existing = cart.find(c => c.name === newItem.name);
        if (existing) {
            existing.quantity = (existing.quantity || 1) + (newItem.quantity || 1);
        } else {
            cart.push({ ...newItem, quantity: newItem.quantity || 1 });
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    const toast = document.createElement('div');
    toast.textContent = '✅ ' + itemsArr.length + ' item' + (itemsArr.length > 1 ? 's' : '') + ' added to cart!';
    toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#1e293b;color:white;padding:12px 24px;border-radius:30px;font-weight:700;font-size:14px;z-index:999999;box-shadow:0 4px 20px rgba(0,0,0,0.3);';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
    if (typeof closeFullProfile === "function") closeFullProfile();
    setTimeout(() => { if (typeof toggleCart === "function") toggleCart(); }, 200);
}
function copyCode(code) { navigator.clipboard.writeText(code); alert("Code "+code+" copied!"); }
function openEditModal() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    document.getElementById('edit-name').value  = userData.name  || "";
    document.getElementById('edit-phone').value = userData.phone || "";
    document.getElementById('edit-profile-modal').style.display = 'flex';
}
function closeEditModal() { document.getElementById('edit-profile-modal').style.display = 'none'; }
function saveProfileChanges() {
    const newName  = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    if (newName && newPhone) {
        let userData = JSON.parse(localStorage.getItem("userData"));
        userData.name = newName; userData.phone = newPhone;
        localStorage.setItem("userData", JSON.stringify(userData));
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) { user.name=newName; user.phone=newPhone; localStorage.setItem("user",JSON.stringify(user)); }
        document.getElementById('display-user-name').innerText  = newName;
        document.getElementById('display-user-phone').innerText = "+91 " + newPhone;
        closeEditModal();
        alert("Profile Updated!");
    }
}

// ─── LOCATION ─────────────────────────────────────────────────────────────────

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function searchProducts() {
    const term = document.getElementById("productSearch").value.toLowerCase();
    if (!term) { showHomeView(); return; }
    const allInventories = { ...inventory, ...snacksInventory, ...beautyInventory, ...cleanInventory };
    const results = Object.values(allInventories).flat().filter(i=>i.name.toLowerCase().includes(term));
    const homeView = document.getElementById("home-view");
    const itemView = document.getElementById("item-view");
    const grid     = document.getElementById("display-grid");
    const title    = document.getElementById("view-title");
    if (homeView) homeView.style.display="none";
    if (itemView) itemView.style.display="block";
    if (title) title.innerText=`Results for "${term}"`;
    if (grid) {
        grid.innerHTML = results.length
            ? results.map(item => {
            const isOutOfStock = window._stockMap && window._stockMap[item.name] === false;
            const btn = isOutOfStock
                ? `<button class="add-btn oos-btn" onclick="handleOutOfStockClick(this,'${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}')" style="background:#fee2e2;color:#dc2626;border:1.5px solid #fca5a5;cursor:pointer;width:100%;font-weight:700;">❌ Out of Stock</button>`
                : `<button class="add-btn" onclick="addToCart('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}')">🛒 Add to Basket</button>`;
            return `<div class="card"><div class="img-box"><img src="${item.img}" onerror="this.src='https://via.placeholder.com/150'"></div><div class="card-details"><h4>${item.name}</h4><p>₹${item.price} • ${item.qty}</p>${btn}</div></div>`;
        }).join("")
            : "<p style='text-align:center;width:100%;color:#888;padding:50px;'>No products found.</p>";
    }
}

// ─── CORPORATE PAGE ───────────────────────────────────────────────────────────
function openCorporatePage() {
    const corpDiv = document.createElement('div');
    corpDiv.className = 'corporate-overlay';
    corpDiv.id = 'corp-page';
    document.body.appendChild(corpDiv);
    corpDiv.style.display = 'block';
    document.body.style.overflow = 'hidden';
    corpDiv.innerHTML = `
        <nav style="padding:20px 40px; border-bottom:1px solid #eee; position:sticky; top:0; background:white; display:flex; justify-content:space-between; align-items:center;">
            <h2 style="color:var(--primary); margin:0;">Arjun Enterprises</h2>
            <button onclick="document.getElementById('corp-page').remove(); document.body.style.overflow='auto'" style="background:none; border:none; font-weight:bold; cursor:pointer; font-size:24px;">×</button>
        </nav>
        <section class="corp-hero">
            <h1>Delivering for Everyone</h1>
            <p style="font-size:18px; color:#64748b; max-width:600px; margin:0 auto;">
                We are building the most trusted grocery and essentials network in the region.
            </p>
        </section>
        <div class="stats-grid">
            <div class="stat-card">
                <h2>15K+</h2>
                <p>Happy Customers</p>
            </div>
            <div class="stat-card">
                <h2>20 Min</h2>
                <p>Avg. Delivery Time</p>
            </div>
            <div class="stat-card">
                <h2>500+</h2>
                <p>Daily Essentials</p>
            </div>
        </div>
        <h2 class="section-title">Why Arjun Enterprises?</h2>
        <div class="info-row">
            <div class="info-text">
                <h3>Hygiene & Quality</h3>
                <p>Every item at Arjun Enterprises undergoes a strict 5-step quality check before reaching your doorstep. We partner with local farmers to ensure freshness.</p>
            </div>
            <div class="info-image">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800" style="width:100%; height:100%; object-fit:cover;">
            </div>
        </div>
        <div class="info-row">
            <div class="info-text">
                <h3>Our Delivery Heroes</h3>
                <p>Our fleet of 50+ delivery partners ensures that even in the busiest hours, your essentials are delivered with a smile and on time.</p>
            </div>
            <div class="info-image">
                <img src="delivery.jpg" style="width:100%; height:100%; object-fit:cover;">
            </div>
        </div>
        <footer style="padding:60px; text-align:center; background:#1f2937; color:white;">
            <p>&copy; 2026 Arjun Enterprises Corporate. All Rights Reserved.</p>
        </footer>
    `;
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function contactSupport(type) {
    const msg = type==='business' ? "Hello, I want to become a delivery partner." : "Hello Arjun Enterprises, I need some assistance.";
    window.open(`https://wa.me/9494126465?text=${encodeURIComponent(msg)}`, '_blank');
}
// ============================================================
// ADD THIS ENTIRE BLOCK TO script.js (Updated with Font Awesome Icons)
// ============================================================

let trackingInterval = null; 

const ORDER_STAGES = ['Order Placed', 'Being Prepared', 'Out for Delivery', 'Delivered'];

function openTrackingModal(orderId) {
    if (!document.getElementById('tracking-modal')) {
        document.body.insertAdjacentHTML('beforeend', `
        <div id="tracking-modal" style="
            display:none; position:fixed; inset:0; background:rgba(0,0,0,0.65);
            z-index:999999; align-items:center; justify-content:center;">
            <div style="
                background:#fff; border-radius:20px; width:90%; max-width:480px;
                padding:30px; position:relative; box-shadow:0 25px 60px rgba(0,0,0,0.25);
                max-height:90vh; overflow-y:auto;">
                <button onclick="closeTrackingModal()" style="
                    position:absolute; top:16px; right:18px; background:none;
                    border:none; font-size:24px; cursor:pointer; color:#94a3b8;">✕</button>
                <div id="tracking-content">
                    <div style="text-align:center;padding:40px 0;">
                        <div class="track-spinner"></div>
                        <p style="color:#64748b;margin-top:15px;">Loading order status...</p>
                    </div>
                </div>
            </div>
        </div>
        <style>
        .track-spinner {
            width:40px; height:40px; border:4px solid #f3f3f3;
            border-top:4px solid #ff5200; border-radius:50%;
            animation:spin 1s linear infinite; margin:0 auto;
        }
        @keyframes spin { to { transform:rotate(360deg); } }

        .track-step {
            display:flex; align-items:flex-start; gap:16px; margin-bottom:28px;
            position:relative;
        }
        .track-step:not(:last-child)::after {
            content:''; position:absolute; left:19px; top:42px;
            width:2px; height:calc(100% - 14px);
            background:#e2e8f0;
        }
        .track-step.done::after   { background:#22c55e; }
        .track-step.active::after { background:linear-gradient(#22c55e,#e2e8f0); }

        .track-icon {
            width:40px; height:40px; border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            font-size:16px; flex-shrink:0; border:2px solid #e2e8f0;
            background:#f8fafc; color:#94a3b8; transition:all 0.4s;
        }
        .track-step.done   .track-icon { background:#dcfce7; border-color:#22c55e; color:#22c55e; }
        .track-step.active .track-icon {
            background:#fff7ed; border-color:#ff5200; color:#ff5200;
            box-shadow:0 0 0 4px rgba(255,82,0,0.15);
            animation:pulse-ring 1.5s infinite;
        }
        @keyframes pulse-ring {
            0%   { box-shadow:0 0 0 0 rgba(255,82,0,0.35); }
            70%  { box-shadow:0 0 0 10px rgba(255,82,0,0); }
            100% { box-shadow:0 0 0 0 rgba(255,82,0,0); }
        }
        .track-label { font-weight:700; color:#1e293b; font-size:14px; margin:0 0 3px; }
        .track-sub   { font-size:12px; color:#94a3b8; margin:0; }
        .track-step.active .track-label { color:#ff5200; }
        .track-step.done   .track-label { color:#16a34a; }

        .tracking-header {
            display:flex; align-items:center; gap:12px; margin-bottom:24px;
            padding-bottom:20px; border-bottom:1px solid #f1f5f9;
        }
        .tracking-pulse-dot {
            width:10px; height:10px; border-radius:50%; background:#22c55e;
            animation:dot-pulse 1.5s infinite;
        }
        @keyframes dot-pulse {
            0%,100% { opacity:1; transform:scale(1); }
            50%      { opacity:0.4; transform:scale(0.7); }
        }
        </style>`);
    }

    const modal = document.getElementById('tracking-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    fetchAndRenderTracking(orderId);
    clearInterval(trackingInterval);
    trackingInterval = setInterval(() => fetchAndRenderTracking(orderId), 15000);
}

function closeTrackingModal() {
    const modal = document.getElementById('tracking-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(trackingInterval);
}

function fetchAndRenderTracking(orderId) {
    fetch(`https://arjun-store.onrender.com/order-status/${orderId}`)
        .then(r => r.json())
        .then(data => {
            if (!data.success) throw new Error(data.message);
            renderTrackingUI(data.order);
        })
        .catch(err => {
            document.getElementById('tracking-content').innerHTML = `
                <div style="text-align:center;padding:30px;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size:32px;color:#ef4444;"></i>
                    <p style="color:#ef4444;margin-top:10px;">Could not load tracking info.</p>
                    <p style="font-size:12px;color:#94a3b8;">${err.message}</p>
                </div>`;
        });
}

function renderTrackingUI(order) {
    const isCancelled = order.status === 'Cancelled';
    const isDelivered = order.status === 'Delivered';
    const currentIdx  = ORDER_STAGES.indexOf(order.status);

    // Font Awesome Icons instead of emojis
    const stageIcons  = [
        '<i class="fa-solid fa-box"></i>', 
        '<i class="fa-solid fa-fire-burner"></i>', 
        '<i class="fa-solid fa-motorcycle"></i>', 
        '<i class="fa-solid fa-house-chimney-check"></i>'
    ];
    const stageSubs   = [
        'Your order has been received',
        'Store is packing your items',
        'Delivery partner is on the way',
        'Enjoy your order!'
    ];

    const shortId = order._id.toString().slice(-6).toUpperCase();
    const placedAt = new Date(order.createdAt).toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', hour12:true });
    const placedDate = new Date(order.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short' });

    let stepsHtml = '';

    if (isCancelled) {
        stepsHtml = `<div style="text-align:center;padding:30px 0;">
            <div style="font-size:48px;margin-bottom:12px;color:#ef4444;"><i class="fa-solid fa-circle-xmark"></i></div>
            <h3 style="color:#ef4444;margin:0;">Order Cancelled</h3>
            <p style="color:#94a3b8;font-size:13px;margin-top:6px;">This order was cancelled.</p>
        </div>`;
    } else {
        stepsHtml = ORDER_STAGES.map((stage, i) => {
            const isDone   = i < currentIdx;
            const isActive = i === currentIdx;
            const cls = isDone ? 'done' : isActive ? 'active' : '';
            return `
            <div class="track-step ${cls}">
                <div class="track-icon">${stageIcons[i]}</div>
                <div>
                    <p class="track-label">${stage}</p>
                    <p class="track-sub">${isActive ? '<i class="fa-solid fa-hourglass-half"></i> In progress' : isDone ? '<i class="fa-solid fa-check"></i> Completed' : stageSubs[i]}</p>
                </div>
            </div>`;
        }).join('');
    }

    const etaBadge = order.estimatedDelivery && !isDelivered && !isCancelled
        ? `<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;padding:10px 16px;margin-bottom:22px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:20px;color:#ea580c;"><i class="fa-solid fa-stopwatch"></i></span>
                <div>
                    <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:600;text-transform:uppercase;">Estimated Delivery</p>
                    <p style="margin:0;font-weight:800;color:#ea580c;font-size:16px;">${order.estimatedDelivery}</p>
                </div>
           </div>`
        : isDelivered
        ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:10px 16px;margin-bottom:22px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:20px;color:#16a34a;"><i class="fa-solid fa-circle-check"></i></span>
                <p style="margin:0;font-weight:700;color:#16a34a;">Delivered Successfully!</p>
           </div>`
        : '';

    const cancelBtn = order.status === 'Order Placed'
        ? `<button onclick="cancelOrderFromTracking('${order._id}')" style="
                margin-top:20px;width:100%;padding:12px;border-radius:10px;
                background:#fff1f0;color:#ef4444;border:1px solid #fca5a5;
                font-weight:700;cursor:pointer;font-size:14px;">
                <i class="fa-solid fa-ban"></i> Cancel Order
           </button>` : '';

    document.getElementById('tracking-content').innerHTML = `
        <div class="tracking-header">
            <div>
                <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;text-transform:uppercase;">Tracking Order</p>
                <h3 style="margin:4px 0 0;color:#1e293b;font-size:20px;">#${shortId}</h3>
                <p style="margin:3px 0 0;font-size:12px;color:#94a3b8;">Placed on ${placedDate} at ${placedAt}</p>
            </div>
            ${!isCancelled && !isDelivered ? '<div class="tracking-pulse-dot" style="margin-left:auto;"></div>' : ''}
        </div>

        ${etaBadge}

        <div style="margin-bottom:8px;">
            ${stepsHtml}
        </div>

        <div style="background:#f8fafc;border-radius:10px;padding:14px;font-size:13px;color:#64748b;margin-top:10px;">
            <p style="margin:0 0 4px;"><i class="fa-solid fa-bag-shopping" style="color:#ff5200;margin-right:6px;"></i>
                ${order.items.map(i => i.name).join(', ')}
            </p>
            <p style="margin:0;"><i class="fa-solid fa-indian-rupee-sign" style="color:#22c55e;margin-right:6px;"></i>
                Total: <b style="color:#1e293b;">₹${order.totalAmount}</b>
                &nbsp;•&nbsp;
                <i class="fa-solid fa-location-dot" style="color:#ef4444;margin-right:4px;"></i>
                ${order.address || 'N/A'}
            </p>
        </div>

        <p style="text-align:center;font-size:11px;color:#cbd5e1;margin-top:14px;">
            Auto-refreshes every 15 seconds
        </p>

        ${cancelBtn}
    `;
}

function cancelOrderFromTracking(orderId) {
    if (!confirm('Are you sure you want to cancel this order?')) return;
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(`https://arjun-store.onrender.com/cancel-order/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: user.phone })
    })
    .then(r => r.json())
    .then(data => {
        alert(data.message);
        if (data.success) fetchAndRenderTracking(orderId);
    })
    .catch(() => alert('Could not cancel order. Try again.'));
}

const _origRenderProfileTab = window.renderProfileTab || renderProfileTab;

function renderProfileTabWithTracking(tabName) {
    if (tabName !== 'orders') {
        return _origRenderProfileTab(tabName);
    }

    const mainContent = document.querySelector('.profile-main-content');
    const tabs = document.querySelectorAll('.sidebar-tab');
    tabs.forEach(t => { t.classList.remove('active'); if(t.innerText.toLowerCase().includes('purchase')) t.classList.add('active'); });

    mainContent.innerHTML = `<h2>Purchase History</h2>
        <div id="tab-content-area">
            <p style="text-align:center;padding:40px;color:#64748b;">Loading orders...</p>
        </div>`;

    const orderUser = JSON.parse(localStorage.getItem("user"));
    const orderContainer = document.getElementById('tab-content-area');

    if (!orderUser) {
        orderContainer.innerHTML = `<div style="text-align:center;padding:40px;opacity:0.6;">
            <i class="fa-solid fa-user-lock" style="font-size:30px;margin-bottom:10px;color:#3b82f6;"></i>
            <p>Please login to view orders.</p>
        </div>`;
        return;
    }

    fetch(`https://arjun-store.onrender.com/my-orders/${orderUser.phone}`)
        .then(res => res.json())
        .then(data => {
            if (!data.success || data.orders.length === 0) {
                orderContainer.innerHTML = `
                    <div style="text-align:center;padding:60px;opacity:0.6;">
                        <i class="fa-solid fa-box-open" style="font-size:40px;margin-bottom:15px;color:#f59e0b;"></i>
                        <h3>No orders placed yet.</h3>
                        <p style="color:#94a3b8;">Your order history will appear here.</p>
                    </div>`;
                return;
            }

            const statusColor = {
                'Order Placed':     { bg:'#eff6ff', text:'#3b82f6', icon:'<i class="fa-solid fa-circle-dot"></i>' },
                'Being Prepared':   { bg:'#fff7ed', text:'#ea580c', icon:'<i class="fa-solid fa-spinner fa-spin"></i>' },
                'Out for Delivery': { bg:'#f0fdf4', text:'#16a34a', icon:'<i class="fa-solid fa-truck-fast"></i>' },
                'Delivered':        { bg:'#f0fdf4', text:'#15803d', icon:'<i class="fa-solid fa-circle-check"></i>' },
                'Cancelled':        { bg:'#fff1f2', text:'#e11d48', icon:'<i class="fa-solid fa-circle-xmark"></i>' },
                'In Progress':      { bg:'#eff6ff', text:'#3b82f6', icon:'<i class="fa-solid fa-circle-dot"></i>' }
            };

            orderContainer.innerHTML = data.orders.map((o, idx) => {
                const sc = statusColor[o.status] || statusColor['In Progress'];
                const isActive = !['Delivered','Cancelled'].includes(o.status);
                const isLatest = idx === 0;
                const itemsJson = JSON.stringify(o.items).replace(/"/g, '&quot;');
                return `
                <div style="border:${isLatest ? '2px solid #ff5200' : '1px solid #e2e8f0'};padding:16px;border-radius:14px;margin-bottom:14px;background:white;position:relative;box-shadow:${isLatest ? '0 4px 18px rgba(255,82,0,0.13)' : '0 2px 8px rgba(0,0,0,0.04)'};">
                    ${isLatest ? `<div style="position:absolute;top:-11px;left:14px;background:#ff5200;color:white;font-size:10px;font-weight:800;padding:2px 12px;border-radius:20px;letter-spacing:0.5px;">LATEST ORDER</div>` : ''}

                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;margin-top:${isLatest ? '6px' : '0'};">
                        <span style="font-weight:800;color:#1e293b;">
                            <i class="fa-solid fa-receipt" style="color:#6366f1;"></i> 
                            Order #${o._id.toString().slice(-6).toUpperCase()}
                        </span>
                        <span style="color:${sc.text};font-size:11px;font-weight:bold;background:${sc.bg};padding:4px 12px;border-radius:20px;">
                            ${sc.icon} ${o.status || 'In Progress'}
                        </span>
                    </div>

                    <div style="font-size:13px;color:#64748b;margin-bottom:8px;">
                        <i class="fa-solid fa-list" style="color:#0ea5e9;"></i> 
                        ${o.items.map(i => i.name).join(', ')}
                    </div>

                    <div style="font-size:12px;color:#94a3b8;border-top:1px dashed #eee;padding-top:8px;margin-top:8px;margin-bottom:12px;">
                        <i class="fa-solid fa-calendar-days" style="color:#10b981;"></i> 
                        ${new Date(o.createdAt).toLocaleDateString('en-IN')} &nbsp;•&nbsp;
                        <i class="fa-solid fa-indian-rupee-sign" style="color:#22c55e;"></i> 
                        ${o.totalAmount} &nbsp;•&nbsp;
                        <i class="fa-solid fa-clock" style="color:#f97316;"></i> 
                        ${o.slot || 'ASAP'} &nbsp;•&nbsp;
                        <i class="fa-solid fa-location-dot" style="color:#ef4444;"></i> 
                        ${o.address || 'N/A'}
                    </div>

                    <div style="display:flex;gap:8px;">
                        <button onclick="openTrackingModal('${o._id}')" style="
                            flex:1;padding:10px;border-radius:10px;border:none;cursor:pointer;
                            background:${isActive ? '#eff6ff' : '#f1f5f9'};
                            color:${isActive ? '#3b82f6' : '#64748b'};
                            font-weight:700;font-size:13px;display:flex;align-items:center;
                            justify-content:center;gap:6px;transition:0.2s;border:1px solid ${isActive ? '#bfdbfe' : '#e2e8f0'};"
                            onmouseover="this.style.opacity='0.8'"
                            onmouseout="this.style.opacity='1'">
                            <i class="fa-solid fa-location-arrow"></i>
                            ${isActive ? 'Track' : 'Details'}
                        </button>

                        <button onclick="reorderFromServer('${itemsJson}')" style="
                            flex:${isLatest ? '2' : '1'};padding:10px;border-radius:10px;border:none;cursor:pointer;
                            background:${isLatest ? '#ff5200' : '#fff3ee'};
                            color:${isLatest ? '#fff' : '#ff5200'};
                            font-weight:800;font-size:${isLatest ? '14px' : '13px'};
                            display:flex;align-items:center;justify-content:center;gap:6px;
                            transition:all 0.2s;border:${isLatest ? 'none' : '1.5px solid #ff5200'};
                            box-shadow:${isLatest ? '0 2px 10px rgba(255,82,0,0.3)' : 'none'};"
                            onmouseover="this.style.opacity='0.85'"
                            onmouseout="this.style.opacity='1'">
                            <i class="fa-solid fa-rotate-right"></i>
                            ${isLatest ? '🛒 Reorder This Again' : 'Reorder'}
                        </button>
                    </div>
                </div>`;
            }).join('');
        })
        .catch(err => {
            console.error(err);
            orderContainer.innerHTML = `
                <div style="text-align:center;padding:40px;color:red;">
                    <i class="fa-solid fa-circle-exclamation" style="font-size:30px;color:#ef4444;"></i>
                    <p>Could not load orders.</p>
                    <p style="font-size:12px;color:#94a3b8;">Make sure your server is running on port 5000.</p>
                </div>`;
        });
}

window.renderProfileTab = renderProfileTabWithTracking;
// ============================================================
// WISHLIST / FAVOURITES — paste at the END of your script.js
// ============================================================

// ─── Wishlist State (persisted in localStorage) ───────────────────────────────
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}
function saveWishlist(list) {
    localStorage.setItem('wishlist', JSON.stringify(list));
}
function isWishlisted(productName) {
    return getWishlist().some(p => p.name === productName);
}

// ─── Toggle heart on product card ─────────────────────────────────────────────
function toggleWishlist(name, price, img, qty, btnEl) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        // Shake the button, then prompt login
        btnEl.style.animation = 'wishlist-shake 0.4s';
        setTimeout(() => btnEl.style.animation = '', 500);
        showWishlistToast('❤️ Please login to save favourites', '#ff5200');
        setTimeout(() => openModal('login'), 700);
        return;
    }

    let list = getWishlist();
    const exists = list.findIndex(p => p.name === name);

    if (exists > -1) {
        list.splice(exists, 1);
        saveWishlist(list);
        btnEl.classList.remove('wishlisted');
        btnEl.innerHTML = '🤍';
        btnEl.title = 'Add to Wishlist';
        showWishlistToast('Removed from Wishlist', '#64748b');
    } else {
        list.push({ name, price, img, qty, addedAt: Date.now() });
        saveWishlist(list);
        btnEl.classList.add('wishlisted');
        btnEl.innerHTML = '❤️';
        btnEl.title = 'Remove from Wishlist';
        showWishlistToast('❤️ Added to Wishlist!', '#ef4444');

        // Animate the heart
        btnEl.style.transform = 'scale(1.5)';
        setTimeout(() => btnEl.style.transform = 'scale(1)', 300);
    }

    // Keep wishlist badge in nav up to date
    updateWishlistBadge();
}

// ─── Toast notification ───────────────────────────────────────────────────────
function showWishlistToast(message, color) {
    let toast = document.getElementById('wishlist-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'wishlist-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.cssText = `
        position:fixed; bottom:90px; left:50%; transform:translateX(-50%) translateY(20px);
        background:${color}; color:#fff; padding:10px 22px; border-radius:30px;
        font-size:13px; font-weight:700; z-index:9999999; opacity:0;
        transition:all 0.3s; white-space:nowrap; box-shadow:0 4px 15px rgba(0,0,0,0.2);
        pointer-events:none;`;
    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2200);
}

// ─── Wishlist badge on nav icon ───────────────────────────────────────────────
function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-nav-badge');
    if (!badge) return;
    const count = getWishlist().length;
    if (count > 0) {
        badge.style.display = 'flex';
        badge.innerText = count > 99 ? '99+' : count;
    } else {
        badge.style.display = 'none';
    }
}
// ─── Open the Wishlist page (full-screen overlay like profile) ────────────────
function openWishlistPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) { openModal('login'); return; }

    const overlay = document.getElementById('full-profile-page');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const wishlist = getWishlist();

    overlay.innerHTML = `
    <div style="background:#f4f7f9;min-height:100vh;padding-bottom:60px;">
        <!-- Sticky header -->
        <nav style="background:white;padding:15px 25px;display:flex;align-items:center;gap:16px;
                    box-shadow:0 2px 8px rgba(0,0,0,0.06);position:sticky;top:0;z-index:100;">
            <button onclick="closeFullProfile()" style="background:none;border:none;font-size:22px;cursor:pointer;color:#1e293b;">←</button>
            <h3 style="margin:0;font-size:18px;color:#1e293b;">My Wishlist ❤️</h3>
            <span id="wl-count-badge" style="background:#fee2e2;color:#ef4444;border-radius:20px;
                  padding:3px 12px;font-size:12px;font-weight:700;">
                ${wishlist.length} item${wishlist.length !== 1 ? 's' : ''}
            </span>
            ${wishlist.length > 0 ? `
            <button onclick="addAllWishlistToCart()" style="margin-left:auto;background:#ff5200;color:white;
                    border:none;padding:10px 20px;border-radius:10px;font-weight:700;cursor:pointer;
                    font-size:13px;display:flex;align-items:center;gap:8px;transition:0.2s;"
                    onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
                🛒 Add All to Cart
            </button>` : ''}
        </nav>

        <div id="wishlist-grid-container" style="max-width:1100px;margin:30px auto;padding:0 20px;">
            ${wishlist.length === 0 ? renderEmptyWishlist() : renderWishlistGrid(wishlist)}
        </div>
    </div>`;
}

function renderEmptyWishlist() {
    return `
    <div style="text-align:center;padding:80px 20px;">
        <div style="font-size:72px;margin-bottom:16px;line-height:1;">🤍</div>
        <h2 style="color:#1e293b;margin:0 0 8px;">Your wishlist is empty</h2>
        <p style="color:#94a3b8;font-size:15px;margin-bottom:28px;">
            Tap the ❤️ on any product to save it here for later.
        </p>
        <button onclick="closeFullProfile()" style="background:#ff5200;color:white;border:none;
                padding:14px 36px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;">
            Start Shopping
        </button>
    </div>`;
}

function renderWishlistGrid(wishlist) {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const cards = wishlist.map((item, idx) => {
        const inCart = currentCart.some(c => c.name === item.name);
        return `
        <div id="wl-card-${idx}" style="
            background:white; border-radius:16px; overflow:hidden;
            box-shadow:0 2px 12px rgba(0,0,0,0.07); border:1px solid #f1f5f9;
            transition:transform 0.2s, box-shadow 0.2s; position:relative;"
            onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'"
            onmouseout="this.style.transform='';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.07)'">

            <!-- Remove from wishlist -->
            <button onclick="removeFromWishlistPage('${item.name.replace(/'/g,"\\'")}', ${idx})"
                    title="Remove from wishlist"
                    style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,0.92);
                           border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;
                           font-size:15px;display:flex;align-items:center;justify-content:center;
                           box-shadow:0 2px 6px rgba(0,0,0,0.1);z-index:2;transition:0.2s;"
                    onmouseover="this.style.background='#fee2e2'"
                    onmouseout="this.style.background='rgba(255,255,255,0.92)'">❤️</button>

            <!-- Product image -->
            <div style="height:140px;background:#f8fafc;display:flex;align-items:center;justify-content:center;overflow:hidden;">
                <img src="${item.img}" alt="${item.name}"
                     onerror="this.src='https://via.placeholder.com/150'"
                     style="width:100%;height:100%;object-fit:contain;padding:12px;">
            </div>

            <!-- Product info -->
            <div style="padding:14px;">
                <h4 style="margin:0 0 4px;font-size:14px;color:#1e293b;font-weight:700;
                           white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${item.name}">
                    ${item.name}
                </h4>
                <p style="margin:0 0 12px;font-size:13px;color:#64748b;">
                    ₹${item.price} &nbsp;•&nbsp; ${item.qty}
                </p>

                ${inCart
                    ? `<button onclick="toggleCart()" style="width:100%;padding:10px;border-radius:10px;
                              border:2px solid #f59e0b;background:#fff7ed;color:#b45309;
                              font-weight:700;font-size:13px;cursor:pointer;">
                            ✓ In Basket — View Cart
                       </button>`
                    : `<button onclick="addWishlistItemToCart('${item.name.replace(/'/g,"\\'")}', ${item.price}, '${item.img}', ${idx})"
                              style="width:100%;padding:10px;border-radius:10px;border:none;
                                     background:#ff5200;color:white;font-weight:700;font-size:13px;
                                     cursor:pointer;transition:0.2s;"
                              onmouseover="this.style.opacity='0.85'"
                              onmouseout="this.style.opacity='1'">
                            🛒 Add to Cart
                       </button>`
                }
            </div>
        </div>`;
    }).join('');

    return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:20px;">
                ${cards}
            </div>`;
}

// ─── Remove single item from wishlist (while on wishlist page) ────────────────
function removeFromWishlistPage(name, idx) {
    let list = getWishlist();
    list = list.filter(p => p.name !== name);
    saveWishlist(list);
    updateWishlistBadge();

    // Re-render the whole grid
    const container = document.getElementById('wishlist-grid-container');
    const badge     = document.getElementById('wl-count-badge');
    if (badge) {
        badge.textContent = `${list.length} item${list.length !== 1 ? 's' : ''}`;
    }
    if (container) {
        container.innerHTML = list.length === 0 ? renderEmptyWishlist() : renderWishlistGrid(list);
    }
    // Also update the heart on the product card behind if visible
    const heartBtn = document.querySelector(`.wishlist-heart-btn[data-name="${CSS.escape(name)}"]`);
    if (heartBtn) {
        heartBtn.classList.remove('wishlisted');
        heartBtn.innerHTML = '🤍';
    }

    showWishlistToast('Removed from Wishlist', '#64748b');
}

// ─── Add single wishlist item to cart ────────────────────────────────────────
function addWishlistItemToCart(name, price, img, cardIdx) {
    addToCart(name, price, img);
    showWishlistToast('🛒 Added to cart!', '#10b981');

    // Update the button in the wishlist grid
    const card = document.getElementById(`wl-card-${cardIdx}`);
    if (card) {
        const btn = card.querySelector('button:last-child');
        if (btn) {
            btn.textContent = '✓ In Basket — View Cart';
            btn.style.cssText = 'width:100%;padding:10px;border-radius:10px;border:2px solid #f59e0b;background:#fff7ed;color:#b45309;font-weight:700;font-size:13px;cursor:pointer;';
            btn.onclick = () => toggleCart();
        }
    }
}

// ─── Add ALL wishlist items to cart ──────────────────────────────────────────
function addAllWishlistToCart() {
    const list = getWishlist();
    if (list.length === 0) return;
    list.forEach(item => {
        const existing = cart.find(c => c.name === item.name);
        if (!existing) {
            cart.push({ name: item.name, price: item.price, qty: 1, img: item.img });
        }
    });
    saveCart();
    showWishlistToast(`🛒 ${list.length} items added to cart!`, '#10b981');
    // Re-render to update all buttons
    const container = document.getElementById('wishlist-grid-container');
    if (container) {
        container.innerHTML = renderWishlistGrid(list);
    }
}

// ─── PATCH renderItems to inject heart buttons ────────────────────────────────
// ─── Add Wishlist icon to nav (call once on page load) ────────────────────────
function injectWishlistNav() {
    updateWishlistBadge();
}

// ─── Add Wishlist tab to My Account sidebar ───────────────────────────────────
// Patch openFullProfile to inject wishlist sidebar tab
const _origOpenFullProfile = window.openFullProfile || openFullProfile;
function openFullProfileWithWishlist() {
    _origOpenFullProfile();
    setTimeout(() => {
        const sidebar = document.querySelector('.profile-sidebar');
        if (!sidebar || sidebar.querySelector('[data-tab="wishlist"]')) return;
        const wishlistTab = document.createElement('div');
        wishlistTab.className = 'sidebar-tab';
        wishlistTab.dataset.tab = 'wishlist';
        wishlistTab.innerHTML = `<i class="fa-regular fa-heart nav-icon"></i> Wishlist
            <span style="background:#fee2e2;color:#ef4444;border-radius:20px;padding:2px 8px;
                         font-size:10px;font-weight:800;margin-left:4px;">${getWishlist().length}</span>`;
        wishlistTab.onclick = () => renderWishlistTab();

        // Insert after Purchase History tab
        const firstTab = sidebar.querySelector('.sidebar-tab');
        if (firstTab && firstTab.nextSibling) {
            sidebar.insertBefore(wishlistTab, firstTab.nextSibling);
        } else {
            sidebar.appendChild(wishlistTab);
        }
    }, 100);
}
window.openFullProfile = openFullProfileWithWishlist;

// ─── Wishlist tab inside My Account panel ────────────────────────────────────
function renderWishlistTab() {
    const mainContent = document.querySelector('.profile-main-content');
    const tabs = document.querySelectorAll('.sidebar-tab');
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelector('[data-tab="wishlist"]')?.classList.add('active');

    const wishlist = getWishlist();
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    mainContent.innerHTML = `
    <h2>My Wishlist ❤️</h2>
    <div id="wishlist-tab-content">
        ${wishlist.length === 0
            ? `<div style="text-align:center;padding:60px 20px;opacity:0.7;">
                    <div style="font-size:56px;margin-bottom:14px;">🤍</div>
                    <h3 style="color:#1e293b;margin:0 0 8px;">No favourites yet</h3>
                    <p style="color:#94a3b8;font-size:14px;margin-bottom:22px;">
                        Tap ❤️ on any product to save it here.
                    </p>
                    <button onclick="closeFullProfile()" style="background:#ff5200;color:white;border:none;
                            padding:12px 28px;border-radius:10px;font-weight:700;cursor:pointer;">
                        Browse Products
                    </button>
               </div>`
            : `
            ${wishlist.length > 1 ? `
            <div style="display:flex;justify-content:flex-end;margin-bottom:16px;">
                <button onclick="addAllToCartFromTab()" style="background:#ff5200;color:white;border:none;
                        padding:10px 20px;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;">
                    🛒 Add All to Cart
                </button>
            </div>` : ''}
            <div style="display:flex;flex-direction:column;gap:12px;">
                ${wishlist.map((item, i) => {
                    const inCart = currentCart.some(c => c.name === item.name);
                    return `
                    <div id="wl-tab-row-${i}" style="display:flex;align-items:center;gap:16px;
                              padding:14px;border:1px solid #f1f5f9;border-radius:14px;background:#fafafa;">
                        <img src="${item.img}" alt="${item.name}"
                             onerror="this.src='https://via.placeholder.com/60'"
                             style="width:64px;height:64px;object-fit:contain;border-radius:10px;background:white;border:1px solid #e2e8f0;padding:4px;">
                        <div style="flex:1;min-width:0;">
                            <h4 style="margin:0 0 3px;font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</h4>
                            <p style="margin:0;font-size:13px;color:#64748b;">₹${item.price} • ${item.qty}</p>
                        </div>
                        <div style="display:flex;gap:8px;flex-shrink:0;">
                            ${inCart
                                ? `<button onclick="toggleCart()" style="padding:8px 14px;border-radius:8px;
                                          border:1px solid #f59e0b;background:#fff7ed;color:#b45309;
                                          font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;">✓ In Cart</button>`
                                : `<button onclick="addToCartFromTab('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}',${i})"
                                          style="padding:8px 14px;border-radius:8px;border:none;background:#ff5200;
                                                 color:white;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;">
                                       🛒 Add
                                   </button>`
                            }
                            <button onclick="removeFromWishlistTab('${item.name.replace(/'/g,"\\'")}',${i})"
                                    style="padding:8px 10px;border-radius:8px;border:1px solid #fee2e2;
                                           background:#fff1f2;color:#ef4444;font-size:13px;cursor:pointer;">🗑️</button>
                        </div>
                    </div>`;
                }).join('')}
            </div>`
        }
    </div>`;
}

function addToCartFromTab(name, price, img, rowIdx) {
    addToCart(name, price, img);
    showWishlistToast('🛒 Added to cart!', '#10b981');
    // Swap button to "in cart"
    const row = document.getElementById(`wl-tab-row-${rowIdx}`);
    if (row) {
        const addBtn = row.querySelector('button');
        if (addBtn) {
            addBtn.textContent = '✓ In Cart';
            addBtn.style.cssText = 'padding:8px 14px;border-radius:8px;border:1px solid #f59e0b;background:#fff7ed;color:#b45309;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;';
            addBtn.onclick = () => toggleCart();
        }
    }
}

function removeFromWishlistTab(name, rowIdx) {
    let list = getWishlist();
    list = list.filter(p => p.name !== name);
    saveWishlist(list);
    updateWishlistBadge();
    // Animate row out
    const row = document.getElementById(`wl-tab-row-${rowIdx}`);
    if (row) {
        row.style.transition = 'opacity 0.3s, transform 0.3s';
        row.style.opacity = '0';
        row.style.transform = 'translateX(20px)';
        setTimeout(() => renderWishlistTab(), 320);
    }
    // Update heart on product grid if visible
    const heartBtn = document.querySelector(`.wishlist-heart-btn[data-name="${CSS.escape(name)}"]`);
    if (heartBtn) {
        heartBtn.classList.remove('wishlisted');
        heartBtn.innerHTML = '🤍';
    }
    showWishlistToast('Removed from Wishlist', '#64748b');
}

function addAllToCartFromTab() {
    const list = getWishlist();
    list.forEach(item => {
        if (!cart.find(c => c.name === item.name)) {
            cart.push({ name: item.name, price: item.price, qty: 1, img: item.img });
        }
    });
    saveCart();
    showWishlistToast(`🛒 ${list.length} items added to cart!`, '#10b981');
    renderWishlistTab();
}

// ─── Init on page load ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    injectWishlistNav();
    updateWishlistBadge();
});
// Also call directly in case DOMContentLoaded already fired
if (document.readyState !== 'loading') {
    injectWishlistNav();
    updateWishlistBadge();
}
// ============================================================
// REFERRAL PROGRAM — FIXED COMPLETE VERSION
// INSTRUCTIONS: In your script.js, DELETE everything from
// line 2641 to the end (line 2766), then paste this entire block.
// ============================================================


// ════════════════════════════════════════════════════════════
// PART 1: REFERRAL FIELD IN REGISTER FORM
// ════════════════════════════════════════════════════════════

const _origSwitchTab = window.switchTab;
window.switchTab = function(mode) {
    _origSwitchTab(mode);
    if (mode === 'register') {
        setTimeout(() => injectReferralField(), 50);
    }
};
function handleReferralLink(refCode) {
    const code    = refCode.toUpperCase().trim();
    const user    = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = !!user;
 
    // Save the ref code to sessionStorage so register form can pick it up
    sessionStorage.setItem('pendingRefCode', code);
 
    if (isLoggedIn) {
        // User is already logged in — they can't use a referral code for themselves.
        // Show a polite banner and do nothing else.
        showRefBanner(
            `👋 You're already logged in as <b>${user.name}</b>. Share this link with friends who haven't joined yet!`,
            '#2563eb'
        );
        return;
    }
 
    // Not logged in — show a welcome banner then open the Register modal
    showRefBanner(
        `🎁 You were invited! Create an account to get <b>₹50 off</b> your first order.`,
        '#16a34a'
    );
 
    // Small delay so banner is visible before modal opens
    setTimeout(() => {
        openModal('register');
 
        // Pre-fill the referral code input once the modal is open
        setTimeout(() => {
            // injectReferralField() is called by switchTab('register'),
            // but we make sure the field exists and is filled
            injectReferralField();
            const inp = document.getElementById('referral-code-input');
            if (inp) {
                inp.value = code;
                inp.style.borderColor = '#10b981';
                inp.style.background  = '#f0fdf4';
                inp.readOnly = true; // prevent accidental edits
            }
        }, 150);
    }, 800);
}
 // ─── Banner that slides in at top of screen ───────────────────────────────────
function showRefBanner(html, color) {
    // Remove any existing banner
    document.getElementById('ref-link-banner')?.remove();
 
    const banner = document.createElement('div');
    banner.id = 'ref-link-banner';
    banner.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; z-index: 999999;
        background: ${color}; color: white;
        padding: 13px 20px;
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        font-size: 14px; font-weight: 600; box-shadow: 0 3px 12px rgba(0,0,0,0.2);
        transform: translateY(-100%); transition: transform 0.4s ease;`;
 
    banner.innerHTML = `
        <span>${html}</span>
        <button onclick="document.getElementById('ref-link-banner').remove()"
                style="background:rgba(255,255,255,0.25);border:none;color:white;
                       border-radius:50%;width:26px;height:26px;cursor:pointer;
                       font-size:16px;display:flex;align-items:center;justify-content:center;
                       flex-shrink:0;">×</button>`;
 
    document.body.appendChild(banner);
 
    // Animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            banner.style.transform = 'translateY(0)';
        });
    });
 
    // Auto-dismiss after 8 seconds (only the green "already logged in" one)
    // The register prompt stays until dismissed manually
    if (color === '#2563eb') {
        setTimeout(() => {
            banner.style.transform = 'translateY(-100%)';
            setTimeout(() => banner.remove(), 400);
        }, 8000);
    }
}
function injectReferralField() {
    if (document.getElementById('referral-code-wrapper')) {
        // Already injected — just make sure it's filled from sessionStorage
        const pending = sessionStorage.getItem('pendingRefCode');
        const inp = document.getElementById('referral-code-input');
        if (inp && pending && !inp.value) {
            inp.value = pending;
            inp.style.borderColor = '#10b981';
        }
        return;
    }
 
    const submitBtn = document.getElementById('auth-submit-btn');
    if (!submitBtn) return;
 
    const div = document.createElement('div');
    div.id = 'referral-code-wrapper';
    div.style.marginBottom = '10px';
 
    const pending = sessionStorage.getItem('pendingRefCode') || '';
 
    div.innerHTML = `
        <label style="font-size:12px;font-weight:700;color:#64748b;display:block;margin-bottom:6px;">
            Referral Code <span style="color:#94a3b8;font-weight:400;">(optional)</span>
        </label>
        <input type="text" id="referral-code-input"
               placeholder="e.g. ARJUN-AB12"
               maxlength="12"
               value="${pending}"
               style="width:100%;padding:11px 14px;border:1.5px solid ${pending ? '#10b981' : '#e2e8f0'};
                      border-radius:10px;font-size:14px;outline:none;text-transform:uppercase;
                      letter-spacing:1px;box-sizing:border-box;
                      background:${pending ? '#f0fdf4' : 'white'};"
               oninput="this.value=this.value.toUpperCase()"
               onfocus="this.style.borderColor='#ff5200'"
               onblur="this.style.borderColor='${pending ? '#10b981' : '#e2e8f0'}'">
        <p style="font-size:11px;color:#10b981;margin:5px 0 0;font-weight:600;">
            🎁 Both you & your friend get ₹50 off!
        </p>`;
 
    submitBtn.parentNode.insertBefore(div, submitBtn);
}

// ════════════════════════════════════════════════════════════
// PART 2: HANDLE AUTH WITH REFERRAL CODE
// ════════════════════════════════════════════════════════════

const _origHandleAuth = window.handleAuth;
window.handleAuth = async function() {
    const isRegister = document.getElementById("tab-register")?.classList.contains("active");
    if (!isRegister) return _origHandleAuth();

    const name  = document.getElementById("user-name")?.value.trim() || "";
    const email = document.getElementById("user-email")?.value.trim() || "";
    const phone = document.getElementById("user-mobile")?.value.trim() || "";
    const ref   = (document.getElementById("referral-code-input")?.value || "").trim().toUpperCase();

    const errorDiv   = document.getElementById('auth-error');
    const successDiv = document.getElementById('auth-success');
    errorDiv.style.display   = 'none';
    successDiv.style.display = 'none';

    if (name.length < 3) { errorDiv.innerText = "Please enter your full name."; errorDiv.style.display = "block"; return; }
    if (!/^\d{10}$/.test(phone)) { errorDiv.innerText = "Enter a valid 10-digit mobile number."; errorDiv.style.display = "block"; return; }

    const btn = document.getElementById('auth-submit-btn');
    btn.innerText = "Please wait..."; btn.disabled = true;

    try {
        const res  = await fetch("https://arjun-store.onrender.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, referralCode: ref || undefined })
        });
        const data = await res.json();

        if (data.success) {
            if (data.referralBonus) {
                successDiv.innerHTML = `<div style="display:flex;align-items:center;gap:8px;"><span style="font-size:18px;">🎉</span><span>${data.message}</span></div>`;
            } else {
                successDiv.innerText = data.message;
                if (data.referralWarning) {
                    successDiv.innerHTML += `<br><small style="color:#f59e0b;">${data.referralWarning}</small>`;
                }
            }
            successDiv.style.display = "block";
            setTimeout(() => switchTab('login'), 2000);
        } else {
            errorDiv.innerText = data.message;
            errorDiv.style.display = "block";
        }
    } catch (err) {
        errorDiv.innerText = "Server error. Please try again.";
        errorDiv.style.display = "block";
    } finally {
        btn.innerText = "Create Account"; btn.disabled = false;
    }
};


// ════════════════════════════════════════════════════════════
// PART 3: WALLET BALANCE AT CHECKOUT
// ════════════════════════════════════════════════════════════

async function injectWalletAtCheckout() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    if (document.getElementById('wallet-checkout-box')) return;

    const voucherSection = document.getElementById('checkout-promo-input')?.closest('div');
    if (!voucherSection) return;

    let balance = 0;
    try {
        const res  = await fetch(`https://arjun-store.onrender.com/wallet/${user.phone}`);
        const data = await res.json();
        balance = data.balance || 0;
    } catch (e) { return; }

    if (balance <= 0) return;

    const walletBox = document.createElement('div');
    walletBox.id = 'wallet-checkout-box';
    walletBox.style.cssText = `background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1.5px solid #86efac;
        border-radius:12px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:12px;`;
    walletBox.innerHTML = `
        <div style="font-size:24px;">💰</div>
        <div style="flex:1;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#166534;">Wallet Balance: ₹${balance}</p>
            <p style="margin:3px 0 0;font-size:11px;color:#16a34a;">Apply your referral earnings at checkout</p>
        </div>
        <button id="wallet-apply-btn" onclick="applyWalletCredit(${balance})"
                style="background:#16a34a;color:white;border:none;padding:8px 16px;border-radius:8px;
                       font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;">
            USE ₹${Math.min(balance, 50)}
        </button>`;

    voucherSection.parentNode.insertBefore(walletBox, voucherSection);
    window._walletBalance = balance;
}

function applyWalletCredit(balance) {
    const maxApply = Math.min(balance, 50);
    window.walletDiscount = maxApply;
    const btn = document.getElementById('wallet-apply-btn');
    if (btn) { btn.textContent = `✓ ₹${maxApply} Applied`; btn.style.background = '#64748b'; btn.disabled = true; }
    showReferralToast(`💰 ₹${maxApply} wallet credit applied!`, '#16a34a');
}

const _origConfirmOrder = window.confirmOrder;
window.confirmOrder = function() {
    if (window.walletDiscount > 0) {
        const user = JSON.parse(localStorage.getItem('user'));
        fetch("https://arjun-store.onrender.com/wallet/redeem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: user.phone, amount: window.walletDiscount })
        }).catch(() => {});
    }
    window.walletDiscount = 0;
    _origConfirmOrder();
};

const _origCheckout = window.checkout;
window.checkout = function() {
    _origCheckout();
    setTimeout(() => injectWalletAtCheckout(), 250);
};


// ════════════════════════════════════════════════════════════
// PART 6: SHARE HELPERS & TOAST
// ════════════════════════════════════════════════════════════

function copyReferralCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showReferralToast('✅ Code copied!', '#10b981');
        const btn = document.getElementById('copy-ref-btn');
        if (btn) { btn.textContent = '✓ COPIED'; setTimeout(() => btn.textContent = '📋 COPY', 2000); }
    });
}
function copyReferralLink(url) {
    navigator.clipboard.writeText(url).then(() => showReferralToast('🔗 Link copied!', '#6366f1'));
}
function shareReferralWhatsApp(msg) {
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}
function shareReferralNative(msg, url) {
    if (navigator.share) {
        navigator.share({ title: 'Arjun SuperMarket — ₹50 Off!', text: msg, url }).catch(() => {});
    } else {
        copyReferralLink(url);
    }
}
function showReferralToast(message, color) {
    let t = document.getElementById('referral-toast');
    if (!t) { t = document.createElement('div'); t.id = 'referral-toast'; document.body.appendChild(t); }
    t.textContent = message;
    t.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(20px);
        background:${color};color:#fff;padding:10px 22px;border-radius:30px;font-size:13px;
        font-weight:700;z-index:9999999;opacity:0;transition:all 0.3s;white-space:nowrap;
        box-shadow:0 4px 15px rgba(0,0,0,0.2);pointer-events:none;`;
    requestAnimationFrame(() => { t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; });
    clearTimeout(t._t);
    t._t = setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(10px)'; }, 2500);
}
// ─── FLASH SALES ─────────────────────────────────────────────────────────────
// ─── FLASH SALES ─────────────────────────────────────────────────────────────
let flashSaleTimers = [];
let globalTimerInterval = null;

function loadFlashSales() {
    fetch('https://arjun-store.onrender.com/flash-sales')
        .then(r => r.json())
        .then(data => {
            const sales   = data.sales || [];
            const section = document.getElementById('flash-sale-section');
            const grid    = document.getElementById('flash-sale-grid');

            if (!section || !grid) return;

            if (sales.length === 0) {
                section.style.display = 'none';
                return;
            }

            section.style.display = 'block';

            // Build cards with new modern design — limit to 3 cards
            grid.innerHTML = sales.slice(0, 3).map((sale, idx) => {
                const discount = Math.round(((sale.originalPrice - sale.salePrice) / sale.originalPrice) * 100);
                const safeName = sale.productName.replace(/'/g, "\\'");
                const imgSrc   = sale.img && sale.img !== 'placeholder.jpg'
                    ? sale.img
                    : 'https://via.placeholder.com/150';

                // Format endsAt as "24 May at 04:38 pm"
                const endsDate = new Date(sale.endsAt);
                const day = endsDate.getDate();
                const month = endsDate.toLocaleString('en-IN', { month: 'short' });
                const hours = endsDate.getHours();
                const mins  = String(endsDate.getMinutes()).padStart(2, '0');
                const ampm  = hours >= 12 ? 'pm' : 'am';
                const h12   = hours % 12 === 0 ? 12 : hours % 12;
                const validUntil = `${day} ${month} at ${String(h12).padStart(2,'0')}:${mins} ${ampm}`;

                return `
                <div class="fs-card" style="animation-delay:${idx * 0.08}s">
                    <div class="fs-card-img-wrap">
                        <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/150'" alt="${sale.productName}">
                        <div class="fs-disc-badge">-${discount}% OFF</div>
                    </div>
                    <div class="fs-card-body">
                        <p class="fs-card-name">${sale.productName}</p>
                        <div class="fs-card-prices">
                            <span class="fs-sale-price">₹${sale.salePrice}</span>
                            <span class="fs-orig-price">₹${sale.originalPrice}</span>
                        </div>
                        <div class="fs-green-badge">🏷️ 60% OFF — Today Only!</div>
                        <div class="fs-valid-text">✅ Valid until ${validUntil}</div>
                        <button class="fs-grab-btn"
                            onclick="event.stopPropagation(); addToCart('${safeName}',${sale.salePrice},'${sale.img}'); this.textContent='✓ Added!'; this.style.background='linear-gradient(135deg,#10b981,#059669)'; setTimeout(()=>{this.textContent='🛒 Grab Deal';this.style.background='';},2000);">
                            🛒 Grab Deal
                        </button>
                    </div>
                </div>`;
            }).join('');

            // Clear old timers
            flashSaleTimers.forEach(clearInterval);
            flashSaleTimers = [];

            // Global header timer — soonest ending active sale
            const soonest = sales.reduce((a, b) =>
                new Date(a.endsAt) < new Date(b.endsAt) ? a : b
            );
            startGlobalFlashTimer(new Date(soonest.endsAt));
        })
        .catch(err => console.error('Flash sale load error:', err));
}

function buildTimerHTML(ms) {
    const h   = Math.floor(ms / 3600000);
    const m   = Math.floor((ms % 3600000) / 60000);
    const s   = Math.floor((ms % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');

    const box = (val, lbl) =>
        `<div style="display:inline-flex;flex-direction:column;align-items:center;justify-content:center;` +
        `width:58px;height:58px;background:linear-gradient(160deg,#ff6a00,#cc2200);` +
        `border-radius:12px;box-shadow:0 0 20px rgba(255,82,0,0.6);">` +
            `<b style="font-size:22px;font-weight:900;color:#fff;line-height:1;font-variant-numeric:tabular-nums;">${pad(val)}</b>` +
            `<span style="font-size:9px;font-weight:800;color:rgba(255,255,255,0.8);letter-spacing:1.5px;margin-top:2px;">${lbl}</span>` +
        `</div>`;

    const sep = `<b style="font-size:24px;font-weight:900;color:#ff5200;align-self:center;margin:0 2px;line-height:1;animation:fs-blink 1s step-end infinite;">:</b>`;

    // Return ONLY the boxes — no ENDS IN label (label is in the HTML wrapper)
    return box(h,'HRS') + sep + box(m,'MIN') + sep + box(s,'SEC');
}

function startGlobalFlashTimer(endsAt) {
    const updateGlobal = () => {
        const el = document.getElementById('global-flash-timer');
        if (!el) { clearInterval(globalTimerInterval); return; }
        const remaining = endsAt - new Date();
        if (remaining <= 0) {
            el.innerHTML = `<span style="color:#ef4444;font-weight:800;font-size:14px;letter-spacing:1px;">⏰ SALE ENDED</span>`;
            clearInterval(globalTimerInterval);
            setTimeout(loadFlashSales, 3000);
            return;
        }
        el.innerHTML = buildTimerHTML(remaining);
    };
    if (globalTimerInterval) clearInterval(globalTimerInterval);
    updateGlobal(); // immediate — no blank gap
    globalTimerInterval = setInterval(updateGlobal, 1000);
}
// ═══════════════════════════════════════════════════════════════
// RECENTLY VIEWED PRODUCTS
// ═══════════════════════════════════════════════════════════════

const MAX_RECENT = 10; // max items to store

// ─── Get / Save recently viewed ──────────────────────────────────────────────
function getRecentlyViewed() {
    return JSON.parse(localStorage.getItem('recentlyViewed')) || [];
}

function saveRecentlyViewed(list) {
    localStorage.setItem('recentlyViewed', JSON.stringify(list));
}

// ─── Track a product view ─────────────────────────────────────────────────────
function trackProductView(item) {
    if (!item || !item.name) return;

    let list = getRecentlyViewed();

    // Remove if already exists (to move it to front)
    list = list.filter(p => p.name !== item.name);

    // Add to front
    list.unshift({ name: item.name, price: item.price, img: item.img, qty: item.qty });

    // Keep only last MAX_RECENT
    if (list.length > MAX_RECENT) list = list.slice(0, MAX_RECENT);

    saveRecentlyViewed(list);
    renderRecentlyViewed();
}

// ─── Clear recently viewed ────────────────────────────────────────────────────
function clearRecentlyViewed() {
    localStorage.removeItem('recentlyViewed');
    renderRecentlyViewed();
}

// ─── Render recently viewed section ──────────────────────────────────────────
function renderRecentlyViewed() {
    const section = document.getElementById('recently-viewed-section');
    const grid    = document.getElementById('recently-viewed-grid');
    if (!section || !grid) return;

    const list = getRecentlyViewed();

    if (list.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    grid.innerHTML = list.map(item => {
        const inCart  = currentCart.some(c => c.name === item.name);
        const wished  = isWishlisted(item.name);
        return `
            <div class="card">
                <div class="img-box" style="position:relative;">
                    <img src="${item.img}" onerror="this.src='https://via.placeholder.com/150'">
                    <button
                        class="wishlist-heart-btn ${wished ? 'wishlisted' : ''}"
                        data-name="${item.name.replace(/"/g,'&quot;')}"
                        onclick="event.stopPropagation(); toggleWishlist('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}','${item.qty}',this)"
                        title="${wished ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                        ${wished ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="card-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} • ${item.qty}</p>
                    ${(window._stockMap && window._stockMap[item.name] === false)
                        ? `<button class="add-btn oos-btn" onclick="handleOutOfStockClick(this,'${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}')" 
                            style="background:#fee2e2;color:#dc2626;border:1.5px solid #fca5a5;cursor:pointer;font-weight:700;">
                            ❌ Out of Stock
                           </button>`
                        : inCart
                            ? `<button class="add-btn go-to-cart" onclick="toggleCart()" style="background:#f59e0b;color:white;">Proceed to Cart →</button>`
                            : `<button class="add-btn" onclick="addToCart('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.img}')">🛒 Add to Basket</button>`
                    }
                </div>
            </div>`;
    }).join('');
}

// ─── Patch renderItems to track views ────────────────────────────────────────
// Use window.renderItems to capture the latest patched version (wishlist may have already patched it)
const _origRenderItemsForRecent = window.renderItems || renderItems;

function renderItemsAndTrack(category) {
    _origRenderItemsForRecent(category);

    // Track all visible items
    setTimeout(() => {
        const allInventories = {
            ...inventory,
            ...snacksInventory,
            ...beautyInventory,
            ...cleanInventory
        };
        const items = category === 'all'
            ? Object.values(allInventories).flat()
            : (allInventories[category] || []);

        // Re-render recently viewed whenever a category is browsed
        if (items.length > 0) {
            renderRecentlyViewed();
        }
    }, 100);
}

// ✅ KEY FIX: assign the patched version so it actually runs
window.renderItems = renderItemsAndTrack;

// Track when a product card is clicked (add to cart = definite interest)
const _origAddToCart = window.addToCart || addToCart;
function addToCartAndTrack(name, price, img) {
    // Find full item details
    const allInventories = {
        ...inventory,
        ...snacksInventory,
        ...beautyInventory,
        ...cleanInventory
    };
    const allItems = Object.values(allInventories).flat();
    const item = allItems.find(i => i.name === name);
    if (item) trackProductView(item);

    _origAddToCart(name, price, img);
}
window.addToCart = addToCartAndTrack;

// Also track when user clicks Reviews on a product
const _origOpenReviews = openReviews;
function openReviewsAndTrack(productName) {
    const allInventories = {
        ...inventory,
        ...snacksInventory,
        ...beautyInventory,
        ...cleanInventory
    };
    const allItems = Object.values(allInventories).flat();
    const item = allItems.find(i => i.name === productName);
    if (item) trackProductView(item);

    _origOpenReviews(productName);
}
window.openReviews = openReviewsAndTrack;
// ─── QUICK REORDER — one-click from nav dropdown ──────────────────────────────
function quickReorderLastOrder() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) { openModal('login'); return; }

    fetch('https://arjun-store.onrender.com/my-orders/' + user.phone)
        .then(res => res.json())
        .then(data => {
            if (!data.success || !data.orders || data.orders.length === 0) {
                alert('No previous orders found. Place your first order!');
                return;
            }
            const lastOrder = data.orders[0];
            if (!lastOrder.items || lastOrder.items.length === 0) {
                alert('Could not load items from your last order.');
                return;
            }
            reorderFromServer(lastOrder.items);
        })
        .catch(() => {
            alert('Could not reach the server. Please try again.');
        });
}

// ─── OUT-OF-STOCK: Notify Me ──────────────────────────────────────────────────
// ─── Out-of-Stock button: first click shows Notify Me, second opens modal ────
function handleOutOfStockClick(btn, productName, price, img) {
    if (btn.dataset.notifyReady === "true") {
        // Already toggled — open the modal
        openNotifyMe(productName, price, img);
    } else {
        // First click: flip button to "Notify Me"
        btn.dataset.notifyReady = "true";
        btn.innerHTML = "🔔 Notify Me";
        btn.style.background = "#f1f5f9";
        btn.style.color = "#64748b";
        btn.style.border = "1.5px dashed #cbd5e1";
        btn.style.fontWeight = "700";
    }
}

function openNotifyMe(productName, price, img) {
    // Pre-fill email if user is logged in
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const prefillEmail = user.email || '';
    const prefillPhone = user.phone || '';

    // Remove any existing modal
    const existing = document.getElementById('notify-me-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'notify-me-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:999999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';
    modal.innerHTML = `
        <div style="background:white;border-radius:20px;padding:32px 28px;max-width:420px;width:100%;box-shadow:0 24px 48px rgba(0,0,0,0.2);position:relative;">
            <button onclick="document.getElementById('notify-me-modal').remove()"
                style="position:absolute;top:14px;right:16px;background:none;border:none;font-size:22px;cursor:pointer;color:#94a3b8;">✕</button>

            <div style="text-align:center;margin-bottom:20px;">
                <div style="width:64px;height:64px;background:#fff3ee;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:28px;">🔔</div>
                <h3 style="margin:0 0 6px;color:#1e293b;font-size:18px;">Out of Stock</h3>
                <p style="margin:0;color:#64748b;font-size:13px;">
                    <b style="color:#ff5200;">${productName}</b> is currently unavailable.<br>
                    Drop your email and we'll ping you the moment it's back!
                </p>
            </div>

            <div style="background:#f8fafc;border-radius:12px;padding:14px;margin-bottom:16px;display:flex;align-items:center;gap:12px;">
                <img src="${img}" onerror="this.src='https://via.placeholder.com/60'"
                    style="width:52px;height:52px;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;">
                <div>
                    <p style="margin:0;font-weight:700;color:#1e293b;font-size:14px;">${productName}</p>
                    <p style="margin:2px 0 0;color:#ff5200;font-weight:700;font-size:13px;">₹${price}</p>
                    <span style="display:inline-block;background:#fee2e2;color:#dc2626;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-top:4px;">OUT OF STOCK</span>
                </div>
            </div>

            <div style="margin-bottom:12px;">
                <label style="font-size:12px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">EMAIL ADDRESS *</label>
                <input id="notify-email-input" type="email" placeholder="you@example.com" value="${prefillEmail}"
                    style="width:100%;padding:12px 14px;border:1.5px solid #e2e8f0;border-radius:10px;font-size:14px;outline:none;box-sizing:border-box;"
                    onfocus="this.style.borderColor='#ff5200'" onblur="this.style.borderColor='#e2e8f0'">
            </div>

            <button onclick="submitNotifyMe('${productName.replace(/'/g,"\\'")}','${prefillPhone}')"
                style="width:100%;background:#ff5200;color:white;border:none;padding:14px;border-radius:12px;font-weight:800;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;"
                onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                <i class="fa-solid fa-bell"></i> Notify Me When Available
            </button>
            <p style="text-align:center;color:#94a3b8;font-size:11px;margin:10px 0 0;">We'll send one email — no spam, ever.</p>
        </div>`;

    document.body.appendChild(modal);
    // Focus email input
    setTimeout(() => document.getElementById('notify-email-input')?.focus(), 100);
}

async function submitNotifyMe(productName, phone) {
    const emailInput = document.getElementById('notify-email-input');
    const email = emailInput?.value?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.style.borderColor = '#ef4444';
        emailInput.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.15)';
        emailInput.placeholder = 'Please enter a valid email';
        return;
    }

    const btn = document.querySelector('#notify-me-modal button:last-of-type');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...'; }

    try {
        const res = await fetch('https://arjun-store.onrender.com/notify-me', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productName, email, phone })
        });
        const data = await res.json();

        // Close modal
        document.getElementById('notify-me-modal')?.remove();

        // Show success toast
        const toast = document.createElement('div');
        toast.innerHTML = `<i class="fa-solid fa-bell" style="color:#ff5200;"></i> &nbsp;${data.message || "You're on the waitlist!"}`;
        toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:white;color:#1e293b;padding:14px 24px;border-radius:30px;font-weight:700;font-size:14px;z-index:999999;box-shadow:0 4px 24px rgba(0,0,0,0.15);border:1.5px solid #ff5200;white-space:nowrap;';
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.transition = 'opacity 0.4s'; toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 3500);
    } catch (err) {
        document.getElementById('notify-me-modal')?.remove();
        alert('Could not connect to server. Please try again.');
    }
}

// ─── Invalidate stock cache so next renderItems re-fetches from DB ────────────
function refreshStockMap() {
    window._stockMap = null;
}
// ─── ENTER KEY HANDLERS ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // 1. Search bar — trigger search on Enter
    document.getElementById('productSearch')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') searchProducts();
    });

    // 2. Login/Register modal — Continue button on Enter
    document.getElementById('user-mobile')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleAuth();
    });
    document.getElementById('user-email')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleAuth();
    });

    // 3. OTP input — verify OTP on Enter (OTP input is dynamically rendered, use delegation)
    document.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        const active = document.activeElement;
        if (!active) return;

        // OTP field
        if (active.id === 'user-otp') {
            document.querySelector('#auth-submit-btn')?.click();
            return;
        }

        // Checkout promo/coupon input
        if (active.id === 'checkout-promo-input') {
            applyCheckoutPromo();
            return;
        }

        // Help form fields — submit on Enter from any field
        if (['help-name','help-phone','help-email','help-subject'].includes(active.id)) {
            submitHelpForm();
            return;
        }

        // Edit profile fields
        if (active.id === 'edit-name' || active.id === 'edit-phone') {
            document.querySelector('[onclick="saveProfileChanges()"]')?.click();
            return;
        }

        // Notify me email input
        if (active.id === 'notify-email-input') {
            document.querySelector('[onclick*="submitNotifyMe"]')?.click();
            return;
        }
    });
});
// ═══════════════════════════════════════════════════════════════
// LOCATION MODAL — header widget + checkout CHANGE button
// ═══════════════════════════════════════════════════════════════

function handleLocationUpdate() {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
    if (!isLoggedIn) {
        openModal('login');
        return;
    }
    const modal = document.getElementById('location-modal');
    if (modal) {
        modal.style.display = 'flex';
        renderSavedAddressesInModal();
    }
}

function closeLocationModal() {
    const modal = document.getElementById('location-modal');
    if (modal) modal.style.display = 'none';

    // Also update checkout address display if checkout is open
    const checkoutDisplay = document.getElementById('checkout-address-display');
    if (checkoutDisplay) {
        checkoutDisplay.innerText = localStorage.getItem("selectedAddress") || "East Lakshmipuram";
    }
}

function renderSavedAddressesInModal() {
    const container = document.getElementById('address-list-modal');
    if (!container) return;

    const userData = JSON.parse(localStorage.getItem("userData"));
    const selectedAddr = localStorage.getItem("selectedAddress") || "";

    if (userData && userData.phone) {
        fetch(`https://arjun-store.onrender.com/my-addresses/${userData.phone}`)
            .then(r => r.json())
            .then(data => {
                const addresses = data.addresses || [];
                localStorage.setItem("allSavedAddresses", JSON.stringify(addresses));
                _renderAddressListModal(addresses, selectedAddr, container);
            })
            .catch(() => {
                const saved = JSON.parse(localStorage.getItem("allSavedAddresses")) || [];
                _renderAddressListModal(saved, selectedAddr, container);
            });
    } else {
        const saved = JSON.parse(localStorage.getItem("allSavedAddresses")) || [];
        _renderAddressListModal(saved, selectedAddr, container);
    }
}

function _renderAddressListModal(addresses, selectedAddr, container) {
    if (!addresses || addresses.length === 0) {
        container.innerHTML = `<p style="font-size:13px; color:#94a3b8; text-align:center; padding:10px 0;">No saved addresses yet. Add one below!</p>`;
        return;
    }

    container.innerHTML = addresses.map((addr, index) => {
        const fullAddr = typeof addr === 'string' ? addr : (addr.fullAddress || '');
        const label    = typeof addr === 'string' ? `Address ${index + 1}` : (addr.name || `Address ${index + 1}`);
        const phone    = typeof addr === 'string' ? '' : (addr.phone || '');
        const isSelected = fullAddr === selectedAddr;

        return `
            <div onclick="setQuickLocation('${fullAddr.replace(/'/g, "\\'")}')"
                style="display:flex; align-items:center; gap:12px; padding:14px; border-radius:10px; margin-bottom:8px; cursor:pointer;
                       background:${isSelected ? '#f0fdf4' : 'white'}; border:${isSelected ? '1.5px solid #16a34a' : '1px solid #e2e8f0'};">
                <div style="width:36px; height:36px; border-radius:50%; background:${isSelected ? '#dcfce7' : '#f1f5f9'}; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <i class="fa-solid fa-location-dot" style="color:${isSelected ? '#16a34a' : '#64748b'}; font-size:14px;"></i>
                </div>
                <div style="flex:1; min-width:0;">
                    <p style="margin:0; font-weight:700; color:#1e293b; font-size:14px;">${label}</p>
                    <p style="margin:2px 0 0; font-size:12px; color:#64748b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${fullAddr}</p>
                    ${phone ? `<p style="margin:2px 0 0; font-size:11px; color:#94a3b8;">${phone}</p>` : ''}
                </div>
                ${isSelected
                    ? `<span style="background:#16a34a; color:white; font-size:10px; font-weight:800; padding:4px 8px; border-radius:6px;">ACTIVE</span>`
                    : `<span style="background:#f0f9ff; color:#2563eb; font-size:10px; font-weight:800; padding:4px 8px; border-radius:6px; border:1px solid #bfdbfe;">SELECT</span>`
                }
            </div>
        `;
    }).join('');
}

function setQuickLocation(fullAddr) {
    localStorage.setItem("selectedAddress", fullAddr);

    const navText = document.getElementById("nav-location-text");
    if (navText) navText.innerText = fullAddr;

    const checkoutDisplay = document.getElementById('checkout-address-display');
    if (checkoutDisplay) checkoutDisplay.innerText = fullAddr;

    let saved = JSON.parse(localStorage.getItem("allSavedAddresses")) || [];
    const exists = saved.some(a => (typeof a === 'string' ? a : a.fullAddress) === fullAddr);
    if (!exists) {
        saved.unshift(fullAddr);
        if (saved.length > 5) saved.pop();
        localStorage.setItem("allSavedAddresses", JSON.stringify(saved));
    }

    closeLocationModal();
    renderSavedAddressesInModal();
}

function getUserGPSLocation() {
    if (!navigator.geolocation) {
        alert("Location access is not supported by your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        () => {
            setQuickLocation("East Lakshmipuram, Yeleswaram");
        },
        () => {
            alert("Please allow location access or type an address manually.");
        }
    );
}

function openAddNewAddressFromModal() {
    closeLocationModal();
    openFullProfile();
    setTimeout(() => {
        renderProfileTab('address');
        setTimeout(() => toggleAddressForm(true), 200);
    }, 300);
}

// Restore saved address in header on page load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem("selectedAddress");
    if (saved) {
        const navText = document.getElementById("nav-location-text");
        if (navText) navText.innerText = saved;
    }
});

// Manual location search — press Enter to set
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('manual-location-input')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const val = this.value.trim();
            if (val) {
                setQuickLocation(val);
                this.value = '';
            }
        }
    });
});