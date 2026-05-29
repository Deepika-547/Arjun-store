require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.static(path.join(__dirname, '../frontend')));

// ─── Single DB Connection (arjunDB) ───────────────────────────────────────────
mongoose.connect(
    process.env.MONGO_URI,
    { serverSelectionTimeoutMS: 10000 }
)
.then(() => console.log('✅MongoDB Connected'))
.catch(err => console.error('❌MongoDB Error:', err.message));

// ─── Schemas ──────────────────────────────────────────────────────────────────
const registrationSchema = new mongoose.Schema({
    name:         { type: String, required: true, trim: true },
    email:        { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone:        { type: String, required: true, unique: true, trim: true },
    blocked:      { type: Boolean, default: false },
    registeredAt: { type: Date, default: Date.now }
});
const Registration = mongoose.model('Registration', registrationSchema, 'registrations');

const loginSchema = new mongoose.Schema({
    phone:   { type: String, required: true },
    name:    { type: String, default: 'unknown' },
    loginAt: { type: Date, default: Date.now },
    status:  { type: String, enum: ['success', 'failed'], default: 'success' }
});
const Login = mongoose.model('Login', loginSchema, 'logins');

const orderSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    phone:       { type: String, required: true },
    items:       { type: Array,  required: true },
    totalAmount: { type: String },
    address:     { type: String },
    slot:        { type: String },
    date:        { type: String },
    status:      { type: String, default: 'Order Placed' },
    createdAt:   { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', orderSchema, 'orders');

const addressSchema = new mongoose.Schema({
    phone:        { type: String, required: true },
    name:         { type: String },
    contactPhone: { type: String },
    fullAddress:  { type: String, required: true },
    createdAt:    { type: Date, default: Date.now }
});
const Address = mongoose.model('Address', addressSchema, 'addresses');

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

// ─── Stock Notification Schema ───────────────────────────────────────────────
const stockNotificationSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    email:       { type: String, required: true, lowercase: true, trim: true },
    phone:       { type: String, default: '' },
    notifiedAt:  { type: Date, default: null },   // null = waiting, set when email sent
    createdAt:   { type: Date, default: Date.now }
});
const StockNotification = mongoose.model('StockNotification', stockNotificationSchema, 'stock_notifications');


// ─── Admin Schemas (also stored in arjunDB) ───────────────────────────────────
const adminProfileSchema = new mongoose.Schema({
    username:  { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    name:      { type: String, default: 'Admin' },
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now }
});
const AdminProfile = mongoose.model('AdminProfile', adminProfileSchema, 'admin_profiles');

const adminLoginLogSchema = new mongoose.Schema({
    username: { type: String },
    loginAt:  { type: Date, default: Date.now },
    status:   { type: String, enum: ['success', 'failed'], default: 'success' },
    ip:       { type: String }
});
const AdminLoginLog = mongoose.model('AdminLoginLog', adminLoginLogSchema, 'admin_logins');
const reviewSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    userName:    { type: String, required: true },
    userPhone:   { type: String, required: true },
    rating:      { type: Number, required: true, min: 1, max: 5 },
    review:      { type: String, required: true },
    createdAt:   { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', reviewSchema, 'reviews');

const referralSchema = new mongoose.Schema({
    ownerPhone:   { type: String, required: true, unique: true }, // who owns this code
    ownerName:    { type: String },
    code:         { type: String, required: true, unique: true }, // e.g. "ARJUN-AB12"
    usedBy:       [{ 
        phone:      String, 
        name:       String, 
        usedAt:     { type: Date, default: Date.now } 
    }],
    earnedCredit: { type: Number, default: 0 },  // total ₹ earned by owner
    createdAt:    { type: Date, default: Date.now }
});
 
const walletSchema = new mongoose.Schema({
    phone:        { type: String, required: true, unique: true },
    balance:      { type: Number, default: 0 },   // current ₹ balance
    transactions: [{
        type:      { type: String, enum: ['credit', 'debit'] },
        amount:    Number,
        reason:    String,
        at:        { type: Date, default: Date.now }
    }]
});

const loyaltySchema = new mongoose.Schema({
    phone:       { type: String, required: true, unique: true },
    name:        { type: String },
    points:      { type: Number, default: 0 },
    totalEarned: { type: Number, default: 0 },
    totalSpent:  { type: Number, default: 0 },
    history:     [{
        type:      { type: String, enum: ['earned', 'redeemed'] },
        points:    Number,
        orderId:   String,
        note:      String,
        createdAt: { type: Date, default: Date.now }
    }],
    updatedAt:   { type: Date, default: Date.now }
});
const Loyalty = mongoose.model('Loyalty', loyaltySchema, 'loyalty_points');
const flashSaleSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    salePrice:     { type: Number, required: true },
    img:           { type: String, default: 'placeholder.jpg' },
    category:      { type: String },
    qty:           { type: String },
    endsAt:        { type: Date, required: true },
    isActive:      { type: Boolean, default: true },
    createdAt:     { type: Date, default: Date.now }
});
const FlashSale = mongoose.model('FlashSale', flashSaleSchema, 'flash_sales');
const Referral = mongoose.model('Referral', referralSchema, 'referrals');
function generateReferralCode(name) {
    const initials = name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() || 'AR';
    const suffix   = Math.floor(10 + Math.random() * 90); // 2-digit number
    return `ARJUN-${initials}${suffix}`;
}
 const Wallet = mongoose.model('Wallet', walletSchema, 'wallets');
// Credit ₹ to a user's wallet
async function creditWallet(phone, amount, reason) {
    await Wallet.findOneAndUpdate(
        { phone },
        {
            $inc: { balance: amount },
            $push: { transactions: { type: 'credit', amount, reason } }
        },
        { upsert: true, returnDocument: 'after' }
    );
}
// ─── Admin Middleware ─────────────────────────────────────────────────────────
function isAdmin(req, res, next) {
    if (req.headers['admin-key'] !== process.env.ADMIN_KEY) {
        return res.status(403).json({ success: false, message: 'Unauthorized.' });
    }
    next();
}

// ─── Email Transporter ────────────────────────────────────────────────────────
const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 20000
});
transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP VERIFY ERROR:", error);
    } else {
        console.log("SMTP SERVER READY");
    }
});
// ─── Admin Order Notification ────────────────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

function sendAdminOrderEmail(order) {
    const itemsList = (order.items || []).map(i =>
        `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;">${i.name || ''}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;text-align:center;">${i.qty || i.quantity || 1}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;text-align:right;color:#ff5200;font-weight:700;">₹${i.price || ''}</td>
        </tr>`
    ).join('');

    const orderId = order._id ? order._id.toString().slice(-6).toUpperCase() : 'NEW';
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

    const mailOptions = {
        from: `"Arjun SuperMarket 🛒" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `🛍️ New Order #${orderId} — ${order.totalAmount} from ${order.name}`,
        html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:560px;margin:0 auto;background:#f8fafc;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:28px 32px;text-align:center;">
                <div style="font-size:36px;margin-bottom:8px;">🛍️</div>
                <h2 style="color:#fff;margin:0;font-size:22px;font-weight:800;">New Order Received!</h2>
                <p style="color:#38bdf8;margin:8px 0 0;font-size:13px;font-weight:600;letter-spacing:1px;">ORDER #${orderId}</p>
            </div>
            <div style="background:#fff7ed;border-left:4px solid #ff5200;padding:14px 24px;">
                <b style="color:#c2410c;font-size:14px;">⏰ Action Required</b>
                <p style="color:#9a3412;font-size:12px;margin:4px 0 0;">Please confirm and process this order promptly.</p>
            </div>
            <div style="background:#fff;padding:24px 32px;">
                <h3 style="color:#1e293b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 12px;">👤 Customer Details</h3>
                <table style="width:100%;border-collapse:collapse;font-size:13px;">
                    <tr><td style="padding:5px 0;color:#64748b;width:120px;">Name</td><td style="color:#1e293b;font-weight:700;">${order.name}</td></tr>
                    <tr><td style="padding:5px 0;color:#64748b;">Phone</td><td style="color:#1e293b;font-weight:700;">${order.phone}</td></tr>
                    <tr><td style="padding:5px 0;color:#64748b;">Address</td><td style="color:#1e293b;">${order.address || 'Not provided'}</td></tr>
                    <tr><td style="padding:5px 0;color:#64748b;">Delivery Slot</td><td style="color:#1e293b;">${order.slot || 'ASAP'}${order.date ? ' · ' + order.date : ''}</td></tr>
                    <tr><td style="padding:5px 0;color:#64748b;">Ordered At</td><td style="color:#1e293b;">${now}</td></tr>
                </table>
            </div>
            <div style="background:#fff;padding:0 32px 24px;">
                <h3 style="color:#1e293b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 12px;">🛒 Items Ordered</h3>
                <table style="width:100%;border-collapse:collapse;border-radius:10px;overflow:hidden;">
                    <thead>
                        <tr style="background:#1e293b;">
                            <th style="padding:10px 12px;text-align:left;color:#94a3b8;font-size:12px;">Item</th>
                            <th style="padding:10px 12px;text-align:center;color:#94a3b8;font-size:12px;">Qty</th>
                            <th style="padding:10px 12px;text-align:right;color:#94a3b8;font-size:12px;">Price</th>
                        </tr>
                    </thead>
                    <tbody style="background:#f8fafc;">${itemsList}</tbody>
                </table>
            </div>
            <div style="background:#fff;padding:0 32px 28px;">
                <div style="background:linear-gradient(135deg,#ff5200,#f97316);border-radius:10px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
                    <span style="color:#fff;font-weight:700;font-size:15px;">Total Amount</span>
                    <span style="color:#fff;font-weight:900;font-size:22px;">${order.totalAmount}</span>
                </div>
            </div>
            <div style="background:#f1f5f9;padding:16px 32px;text-align:center;">
                <p style="color:#94a3b8;font-size:11px;margin:0;">© 2026 Arjun Enterprises · Auto-notification system</p>
            </div>
        </div>`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) { console.error('❌ Admin order email error:', err.message); reject(err); }
            else     { console.log('✅ Admin notified for order #' + orderId + ' → ' + info.messageId); resolve(info); }
        });
    });
}
// ─── OTP Store (in memory, expires in 5 mins) ─────────────────────────────────
const otpStore = {};

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTPEmail(email, otp, name = '') {
    const mailOptions = {
        from: `"Arjun SuperMarket" <${process.env.EMAIL_USER}>`,
        to:   email,
        subject: '🔐 Your OTP for Arjun SuperMarket',
        html: `
        <div style="font-family:'Segoe UI',sans-serif;max-width:500px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;">
            <div style="background:#1e293b;padding:25px;text-align:center;">
                <h2 style="color:#fff;margin:0;">Arjun <span style="color:#ff5200;">SuperMarket</span></h2>
                <p style="color:#94a3b8;margin:5px 0 0;font-size:13px;">OTP Verification</p>
            </div>
            <div style="background:#fff;padding:35px 40px;text-align:center;">
                <p style="color:#1e293b;font-size:16px;margin-bottom:5px;">Hello${name ? ' <b>' + name + '</b>' : ''},</p>
                <p style="color:#64748b;font-size:14px;margin-bottom:25px;">Use the OTP below to verify your account.</p>

                <div style="background:#f8fafc;border:2px dashed #ff5200;border-radius:12px;padding:20px;margin:20px 0;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Your OTP is</p>
                    <h1 style="margin:10px 0;font-size:48px;font-weight:900;color:#ff5200;letter-spacing:10px;">${otp}</h1>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">Valid for <b>5 minutes</b> only</p>
                </div>

                <p style="color:#94a3b8;font-size:12px;margin-top:20px;">
                    If you didn't request this OTP, please ignore this email.
                </p>
            </div>
            <div style="background:#f8fafc;padding:15px;text-align:center;border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8;font-size:11px;margin:0;">
                    © 2026 Arjun Enterprises, Visakhapatnam
                </p>
            </div>
        </div>`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) { console.error('❌ OTP email error:', err.message); reject(err); }
            else     { console.log('✅ OTP email sent to:', email); resolve(info); }
        });
    });
}
// ─── Test ─────────────────────────────────────────────────────────────────────
app.get('/test', (req, res) => res.json({ success: true, message: 'Server is working!' }));

// ─── REGISTER ─────────────────────────────────────────────────────────────────
app.post('/register', (req, res) => {
    const { name, email, phone, referralCode } = req.body;
 
    if (!name || !email || !phone)
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    if (!/^\d{10}$/.test(phone))
        return res.status(400).json({ success: false, message: 'Enter a valid 10-digit mobile number.' });
 
    Registration.findOne({ $or: [{ phone }, { email }] })
        .then(async existing => {
            if (existing) {
                return res.status(409).json({ success: false, message: 'Mobile or Email already registered.' });
            }
 
            // Save the new user
            const saved = await new Registration({ name, email, phone }).save();
 
            // Auto-create their own referral code
            let code = generateReferralCode(name);
            // Make sure it's unique (retry once on collision)
            const codeExists = await Referral.findOne({ code });
            if (codeExists) code = generateReferralCode(name + Date.now());
            await new Referral({ ownerPhone: phone, ownerName: name, code }).save();
 
            // ── Handle incoming referral code ──────────────────────────────
            if (referralCode) {
                const ref = await Referral.findOne({ code: referralCode.toUpperCase().trim() });
 
                if (!ref) {
                    // Invalid code — still register successfully, just no bonus
                    sendWelcomeEmail(name, email);
                    return res.status(201).json({
                        success: true,
                        message: 'Registered! (Referral code not found — no bonus applied)',
                        user: { name, email, phone },
                        referralWarning: 'Invalid referral code.'
                    });
                }
 
                if (ref.ownerPhone === phone) {
                    sendWelcomeEmail(name, email);
                    return res.status(201).json({
                        success: true,
                        message: 'Registered! (Cannot use your own referral code)',
                        user: { name, email, phone },
                        referralWarning: 'You cannot use your own referral code.'
                    });
                }
                await Referral.findOneAndUpdate(
                    { code: referralCode.toUpperCase().trim() },
                    {
                        $push:       { usedBy: { phone, name } },
                        $inc:        { earnedCredit: 50 }
                    }
                );
                await creditWallet(ref.ownerPhone, 50, `Referral bonus — ${name} joined using your code`);
                await creditWallet(phone, 50, `Welcome bonus — joined via referral code ${referralCode.toUpperCase()}`);
 
                sendWelcomeEmail(name, email);
                return res.status(201).json({
                    success: true,
                    message: `<i class="fa-solid fa-party-horn" style="color:#f59e0b;"></i> Registered with referral! ₹50 added to your wallet.`,
                    user: { name, email, phone },
                    referralBonus: true
                });
            }
 
            // ── Normal registration (no referral code) ─────────────────────
            sendWelcomeEmail(name, email);
            return res.status(201).json({
                success: true,
                message: 'Registration successful! You can now sign in.',
                user: { name, email, phone }
            });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 
// ─── GET: User's own referral code ────────────────────────────────────────────
app.get('/referral/:phone', (req, res) => {
    Referral.findOne({ ownerPhone: req.params.phone })
        .then(ref => {
            if (!ref) return res.status(404).json({ success: false, message: 'Referral not found.' });
            res.json({
                success: true,
                code:         ref.code,
                usedBy:       ref.usedBy,
                totalUses:    ref.usedBy.length,
                earnedCredit: ref.earnedCredit
            });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 
// ─── GET: User's wallet balance ────────────────────────────────────────────────
app.get('/wallet/:phone', (req, res) => {
    Wallet.findOne({ phone: req.params.phone })
        .then(wallet => {
            if (!wallet) return res.json({ success: true, balance: 0, transactions: [] });
            res.json({ success: true, balance: wallet.balance, transactions: wallet.transactions.slice(-20).reverse() });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 
// ─── POST: Redeem wallet balance at checkout (deduct from wallet) ──────────────
app.post('/wallet/redeem', (req, res) => {
    const { phone, amount } = req.body;
    if (!phone || !amount || amount <= 0)
        return res.status(400).json({ success: false, message: 'Invalid redemption.' });
 
    Wallet.findOne({ phone })
        .then(wallet => {
            if (!wallet || wallet.balance < amount)
                return res.status(400).json({ success: false, message: 'Insufficient wallet balance.' });
            return Wallet.findOneAndUpdate(
                { phone },
                {
                    $inc:  { balance: -amount },
                    $push: { transactions: { type: 'debit', amount, reason: 'Redeemed at checkout' } }
                },
                { returnDocument: 'after' }
            );
        })
        .then(updated => {
            if (updated) res.json({ success: true, message: `₹${amount} redeemed!`, newBalance: updated.balance });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 
// ─── ADMIN: All referrals ──────────────────────────────────────────────────────
app.get('/admin/referrals', isAdmin, (req, res) => {
    Referral.find().sort({ createdAt: -1 })
        .then(refs => res.json({ success: true, referrals: refs }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── LOGIN ────────────────────────────────────────────────────────────────────
app.post('/login', (req, res) => {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ success: false, message: 'Mobile number is required.' });
    if (!/^\d{10}$/.test(phone)) return res.status(400).json({ success: false, message: 'Enter a valid 10-digit mobile number.' });
    if (phone === '0000000000') {
        return res.status(200).json({
            success: true,
            isAdmin: true,
            message: 'Welcome Admin!',
            user:    { name: 'Admin', phone: '0000000000', email: 'admin@arjun.com' }
        });
    }

    Registration.findOne({ phone })
        .then(user => {
            if (!user) {
                return new Login({ phone, name: 'unknown', status: 'failed' }).save()
                    .then(() => res.status(401).json({ success: false, message: '<i class="fa-solid fa-triangle-exclamation" style="color:#f59e0b;"></i> Mobile number not registered. Please create an account first.' }));
            }
            if (user.blocked) {
                return new Login({ phone, name: user.name, status: 'failed' }).save()
                    .then(() => res.status(403).json({ success: false, message: '<i class="fa-solid fa-ban" style="color:#dc2626;"></i> Your account has been blocked. Contact support.' }));
            }
            return new Login({ phone, name: user.name, status: 'success' }).save()
                .then(() => res.status(200).json({
                    success: true,
                    message: 'Welcome back, ' + user.name + '!',
                    user:    { name: user.name, email: user.email, phone: user.phone }
                }));
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});


// ─── VERIFY USER SESSION ──────────────────────────────────────────────────────
app.get("/verify-user/:phone", (req, res) => {
    const { phone } = req.params;
    if (!phone) return res.status(400).json({ valid: false });
    if (phone === "0000000000") return res.json({ valid: true });
    Registration.findOne({ phone, blocked: { $ne: true } })
        .then(user => res.json({ valid: !!user }))
        .catch(() => res.json({ valid: false }));
});

// ─── ORDERS ───────────────────────────────────────────────────────────────────
app.post('/place-order', (req, res) => {
    const { name, phone, items, totalAmount, address, slot, date } = req.body;
    if (!name || !phone || !items || items.length === 0)
        return res.status(400).json({ success: false, message: 'Order details incomplete.' });
    new Order({ name, phone, items, totalAmount, address, slot, date }).save()
    .then(saved => {
        // Strip currency symbol and parse
        const amountPaid = parseFloat(String(totalAmount || '0').replace(/[^0-9.]/g, '')) || 0;
        console.log(`📦 Order saved. Amount: ${amountPaid}. Crediting loyalty to ${phone}`);
        earnLoyaltyPoints(phone, name, saved._id, amountPaid);
        // ── Notify admin via email (non-blocking) ──
        sendAdminOrderEmail({ ...saved.toObject(), name, phone, items, totalAmount, address, slot, date })
            .catch(err => console.error('Admin notify error:', err.message));
        // ── Track for live polling ──
        latestOrderTime = new Date();
        newOrdersCount++;
        res.status(201).json({ success: true, message: 'Order placed!', orderId: saved._id });
    })
    .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.get('/my-orders/:phone', (req, res) => {
    Order.find({ phone: req.params.phone }).sort({ createdAt: -1 })
        .then(orders => res.json({ success: true, orders }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── ORDER TRACKING: Get single order status ─────────────────────────────────
app.get('/order-status/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            if (!order) return res.status(404).json({ success: false, message: 'Order not found.' });
            res.json({
                success: true,
                order: {
                    _id: order._id,
                    status: order.status,
                    createdAt: order.createdAt,
                    items: order.items,
                    totalAmount: order.totalAmount,
                    address: order.address,
                    slot: order.slot,
                    estimatedDelivery: getEstimatedDelivery(order.createdAt, order.status)
                }
            });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── FLASH SALES ──────────────────────────────────────────────────────────────
// Get all active flash sales (for frontend)
app.get('/flash-sales', (req, res) => {
    const now = new Date();
    FlashSale.find({ isActive: true, endsAt: { $gt: now } })
        .then(sales => res.json({ success: true, sales }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// Admin: get all flash sales
app.get('/admin/flash-sales', isAdmin, (req, res) => {
    FlashSale.find().sort({ createdAt: -1 })
        .then(sales => res.json({ success: true, sales }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// Admin: create flash sale
app.post('/admin/flash-sale', isAdmin, (req, res) => {
    const { productName, originalPrice, salePrice, img, category, qty, endsAt } = req.body;
    if (!productName || !originalPrice || !salePrice || !endsAt)
        return res.status(400).json({ success: false, message: 'All fields required.' });
    new FlashSale({ productName, originalPrice, salePrice, img, category, qty, endsAt, isActive: true }).save()
        .then(s => res.status(201).json({ success: true, message: 'Flash sale created!', sale: s }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// Admin: toggle active/inactive
app.put('/admin/flash-sale/:id/toggle', isAdmin, (req, res) => {
    FlashSale.findById(req.params.id)
        .then(sale => {
            if (!sale) return res.status(404).json({ success: false, message: 'Not found.' });
            sale.isActive = !sale.isActive;
            return sale.save();
        })
        .then(updated => res.json({ success: true, message: `Sale ${updated.isActive ? 'activated' : 'deactivated'}.`, sale: updated }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// Admin: delete flash sale
app.delete('/admin/flash-sale/:id', isAdmin, (req, res) => {
    FlashSale.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true, message: 'Flash sale deleted.' }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── ORDER TRACKING: Update status (Admin only) ───────────────────────────────
// NOTE: You already have PUT /admin/order/:id/status — it works as-is.
// The allowed statuses for tracking are:
//   "Order Placed" | "Being Prepared" | "Out for Delivery" | "Delivered" | "Cancelled"
// Update your admin panel to use these exact status strings.

// ─── Helper: Estimate delivery time ──────────────────────────────────────────
function getEstimatedDelivery(createdAt, status) {
    if (status === 'Delivered' || status === 'Cancelled') return null;
    const placed = new Date(createdAt);
    const eta = new Date(placed.getTime() + 9 * 60 * 1000); // 9 minutes after order placed
    return eta.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

// ─── ORDER TRACKING: Cancel order (by user, only if "Order Placed") ───────────
app.put('/cancel-order/:id', (req, res) => {
    const { phone } = req.body;
    Order.findOne({ _id: req.params.id, phone })
        .then(order => {
            if (!order) return res.status(404).json({ success: false, message: 'Order not found.' });
            if (order.status !== 'Order Placed') {
                return res.status(400).json({ success: false, message: 'Order cannot be cancelled at this stage.' });
            }
            return Order.findByIdAndUpdate(req.params.id, { status: 'Cancelled' }, { returnDocument: 'after'});
        })
        .then(updated => {
            if (updated) res.json({ success: true, message: 'Order cancelled successfully.' });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── ADDRESSES ────────────────────────────────────────────────────────────────
app.post('/save-address', (req, res) => {
    const { phone, name, contactPhone, fullAddress } = req.body;
    if (!phone || !fullAddress) return res.status(400).json({ success: false, message: 'Phone and address required.' });
    new Address({ phone, name, contactPhone, fullAddress }).save()
        .then(saved => res.status(201).json({ success: true, message: 'Address saved!', address: saved }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.get('/my-addresses/:phone', (req, res) => {
    Address.find({ phone: req.params.phone }).sort({ createdAt: -1 })
        .then(addresses => res.json({ success: true, addresses }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.delete('/delete-address/:id', (req, res) => {
    Address.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true, message: 'Address deleted.' }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

 
// Earn points after order placed (called internally after place-order succeeds)
// Rate: ₹100 spent = 10 points
function earnLoyaltyPoints(phone, name, orderId, amountPaid) {
    const earned = Math.floor(amountPaid / 100) * 10;
    console.log(`🪙 Earning points: phone=${phone}, amountPaid=${amountPaid}, earned=${earned}`);
    if (earned <= 0) {
        console.log('⚠️ No points earned — amount too low');
        return;
    }
    Loyalty.findOneAndUpdate(
        { phone },
        {
            $set:  { name, updatedAt: new Date() },
            $inc:  { points: earned, totalEarned: earned },
            $push: { history: { type: 'earned', points: earned, orderId: orderId.toString(), note: `Order #${orderId.toString().slice(-6).toUpperCase()} — ₹${amountPaid} paid` } }
        },
        { upsert: true, returnDocument: 'after' }
    )
    .then(doc => console.log(`✅ +${earned} points credited to ${phone}. New balance: ${doc.points}`))
    .catch(err => console.error('❌ Loyalty earn error:', err.message));
}
 
// Redeem points: validate before order (check if user has enough)
app.post('/loyalty/redeem/validate', (req, res) => {
    const { phone, pointsToRedeem } = req.body;
    if (!phone || !pointsToRedeem || pointsToRedeem <= 0)
        return res.status(400).json({ success: false, message: 'Invalid request.' });
    Loyalty.findOne({ phone })
        .then(doc => {
            if (!doc || doc.points < pointsToRedeem)
                return res.status(400).json({ success: false, message: 'Insufficient points.' });
            const discountRupees = Math.floor(pointsToRedeem / 10); // 10 points = ₹1
            res.json({ success: true, discountRupees, pointsToRedeem });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 
// Deduct points after successful order
app.post('/loyalty/redeem/apply', (req, res) => {
    const { phone, pointsToRedeem, orderId } = req.body;
    if (!phone || !pointsToRedeem || !orderId)
        return res.status(400).json({ success: false, message: 'Missing fields.' });
    Loyalty.findOne({ phone })
        .then(doc => {
            if (!doc || doc.points < pointsToRedeem)
                return res.status(400).json({ success: false, message: 'Insufficient points.' });
            return Loyalty.findOneAndUpdate(
                { phone },
                {
                    $inc:  { points: -pointsToRedeem, totalSpent: pointsToRedeem },
                    $push: { history: { type: 'redeemed', points: pointsToRedeem, orderId, note: `Redeemed on Order #${orderId.toString().slice(-6).toUpperCase()}` } },
                    $set:  { updatedAt: new Date() }
                },
                { returnDocument: 'after' }
            );
        })
        .then(updated => {
            if (updated) res.json({ success: true, message: 'Points redeemed!', remainingPoints: updated.points });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 app.get('/loyalty/:phone', (req, res) => {
    Loyalty.findOne({ phone: req.params.phone })
        .then(doc => {
            if (!doc) return res.json({ success: true, points: 0, totalEarned: 0, totalSpent: 0, history: [] });
            res.json({ success: true, points: doc.points, totalEarned: doc.totalEarned, totalSpent: doc.totalSpent, history: doc.history });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// Admin: get all loyalty accounts
app.get('/admin/loyalty', isAdmin, (req, res) => {
    Loyalty.find().sort({ points: -1 })
        .then(docs => res.json({ success: true, loyalty: docs }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
 

// ─── SUBMIT REVIEW ────────────────────────────────────────────────────────────
app.post('/review', (req, res) => {
    const { productName, userName, userPhone, rating, review } = req.body;

    if (!productName || !userName || !userPhone || !rating || !review) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    Order.findOne({ phone: userPhone, 'items.name': productName })
        .then(order => {
            if (!order) {
                return res.status(403).json({
                    success: false,
                    message: '<i class="fa-solid fa-triangle-exclamation" style="color:#f59e0b;"></i> You can only review products you have ordered.'
                });
            }
            return Review.findOne({ productName, userPhone })
                .then(existing => {
                    if (existing) {
                        return res.status(409).json({
                            success: false,
                            message: 'You have already reviewed this product.'
                        });
                    }
                    return new Review({ productName, userName, userPhone, rating, review }).save()
                        .then(() => res.status(201).json({
                            success: true,
                            message: 'Review submitted successfully!'
                        }));
                });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── GET REVIEWS for a product ────────────────────────────────────────────────
app.get('/reviews/:productName', (req, res) => {
    Review.find({ productName: req.params.productName }).sort({ createdAt: -1 })
        .then(reviews => {
            const avgRating = reviews.length
                ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
                : 0;
            res.json({ success: true, reviews, avgRating, totalReviews: reviews.length });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Get all reviews ───────────────────────────────────────────────────
app.get('/admin/reviews', isAdmin, (req, res) => {
    Review.find().sort({ createdAt: -1 })
        .then(reviews => res.json({ success: true, reviews }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Delete review ─────────────────────────────────────────────────────
app.delete('/admin/review/:id', isAdmin, (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true, message: 'Review deleted.' }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── ADMIN: Login ─────────────────────────────────────────────────────────────
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        new AdminLoginLog({ username, status: 'success', ip: req.ip }).save()
            .then(() => console.log('<i class="fa-solid fa-circle-check" style="color:#16a34a;"></i> Admin login logged'))
            .catch(err => console.error('Log error:', err.message));
        AdminProfile.findOneAndUpdate(
            { username: process.env.ADMIN_USERNAME },
            { username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD, name: 'Arjun Admin', lastLogin: new Date() },
            { upsert: true, returnDocument: 'after' }
        )
        .then(() => console.log('<i class="fa-solid fa-circle-check" style="color:#16a34a;"></i> Admin profile updated'))
        .catch(err => console.error('Profile error:', err.message));

        return res.json({ success: true, message: 'Admin logged in!', adminKey: process.env.ADMIN_KEY });

    } else {
        new AdminLoginLog({ username, status: 'failed', ip: req.ip }).save()
            .catch(err => console.error('Log error:', err.message));
        return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
    }
});

// ─── Live Order Polling State ────────────────────────────────────────────────
let latestOrderTime = null;
let newOrdersCount  = 0;

// Admin polls this every 30s; returns count since last reset
app.get('/admin/poll-orders', isAdmin, (req, res) => {
    res.json({ success: true, newOrders: newOrdersCount, latestOrderTime });
});

// Admin calls this to acknowledge/clear the badge
app.post('/admin/poll-orders/reset', isAdmin, (req, res) => {
    newOrdersCount = 0;
    res.json({ success: true });
});

// ─── ADMIN: Stats ─────────────────────────────────────────────────────────────
app.get('/admin/stats', isAdmin, (req, res) => {
    Promise.all([
        Registration.countDocuments(),
        Order.countDocuments(),
        Registration.countDocuments({ blocked: true }),
        Order.find().sort({ createdAt: -1 }).limit(5),
        Registration.countDocuments({ registeredAt: { $gte: new Date(Date.now() - 7*24*60*60*1000) } }),
        Order.find({ status: { $ne: 'Cancelled' } }, 'totalAmount')
    ])
    .then(([totalUsers, totalOrders, blockedUsers, recentOrders, newUsersThisWeek, allOrders]) => {
        const totalRevenue = allOrders.reduce((sum, o) => {
            const amt = parseFloat(String(o.totalAmount || '0').replace(/[^0-9.]/g, '')) || 0;
            return sum + amt;
        }, 0);
        res.json({ success: true, stats: { totalUsers, totalOrders, blockedUsers, recentOrders, newUsersThisWeek, totalRevenue } });
    })
    .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Revenue Analytics ─────────────────────────────────────────────────
app.get('/admin/revenue-analytics', isAdmin, async (req, res) => {
    try {
        const { period = 'daily' } = req.query;
        const now = new Date();
        let startDate, groupFormat, labelFn;

        if (period === 'weekly') {
            // Last 12 weeks
            startDate = new Date(now);
            startDate.setDate(startDate.getDate() - 84);
            groupFormat = { $dateToString: { format: '%Y-W%V', date: '$createdAt' } };
        } else if (period === 'monthly') {
            // Last 12 months
            startDate = new Date(now);
            startDate.setMonth(startDate.getMonth() - 12);
            groupFormat = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
        } else {
            // Daily — last 30 days
            startDate = new Date(now);
            startDate.setDate(startDate.getDate() - 30);
            groupFormat = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };
        }

        const orders = await Order.find({ createdAt: { $gte: startDate }, status: { $ne: 'Cancelled' } }, 'totalAmount createdAt status');

        // Group by period
        const grouped = {};
        orders.forEach(o => {
            const amt = parseFloat(String(o.totalAmount || '0').replace(/[^0-9.]/g, '')) || 0;
            let key;
            const d = new Date(o.createdAt);
            if (period === 'weekly') {
                // ISO week number
                const jan1 = new Date(d.getFullYear(), 0, 1);
                const week = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
                key = `${d.getFullYear()}-W${String(week).padStart(2,'0')}`;
            } else if (period === 'monthly') {
                key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
            } else {
                key = d.toISOString().slice(0, 10);
            }
            grouped[key] = (grouped[key] || 0) + amt;
        });

        // Build sorted label/value arrays
        const labels = Object.keys(grouped).sort();
        const values = labels.map(k => Math.round(grouped[k]));

        // Make labels human-friendly
        const prettyLabels = labels.map(k => {
            if (period === 'monthly') {
                const [y, m] = k.split('-');
                return new Date(y, m-1).toLocaleString('en-IN', { month: 'short', year: '2-digit' });
            } else if (period === 'weekly') {
                return k; // e.g. 2026-W21
            } else {
                const d = new Date(k);
                return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
            }
        });

        res.json({ success: true, labels: prettyLabels, values, total: values.reduce((a,b)=>a+b,0) });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
// ─── ADMIN: Users ─────────────────────────────────────────────────────────────
app.get('/admin/users', isAdmin, (req, res) => {
    Registration.find().sort({ registeredAt: -1 })
        .then(users => res.json({ success: true, users }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.put('/admin/user/:id/block', isAdmin, (req, res) => {
    Registration.findByIdAndUpdate(req.params.id, { blocked: req.body.blocked }, { returnDocument: 'after' })
        .then(user => res.json({ success: true, message: `User ${req.body.blocked ? 'blocked' : 'unblocked'}.`, user }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Orders ────────────────────────────────────────────────────────────
app.get('/admin/orders', isAdmin, (req, res) => {
    Order.find().sort({ createdAt: -1 })
        .then(orders => res.json({ success: true, orders }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.put('/admin/order/:id/status', isAdmin, (req, res) => {
    Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { returnDocument: 'after' })
        .then(order => res.json({ success: true, message: 'Status updated.', order }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Products ──────────────────────────────────────────────────────────
// ─── PUBLIC: Stock status (name → inStock) ───────────────────────────────────
app.get('/products/stock', async (req, res) => {
    try {
        const products = await Product.find({}, 'name inStock');
        // Return a simple map: { "Diapers": false, "Milk": true, ... }
        const stockMap = {};
        products.forEach(p => { stockMap[p.name] = p.inStock; });
        res.json({ success: true, stockMap });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.get('/admin/products', isAdmin, (req, res) => {
    Product.find().sort({ category: 1 })
        .then(products => res.json({ success: true, products }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.post('/admin/product', isAdmin, (req, res) => {
    const { name, price, qty, img, category, inStock } = req.body;
    if (!name || !price || !category)
        return res.status(400).json({ success: false, message: 'Name, price and category required.' });
    new Product({ name, price, qty, img, category, inStock }).save()
        .then(p => res.status(201).json({ success: true, message: 'Product added!', product: p }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.put('/admin/product/:id', isAdmin, (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
        .then(p => res.json({ success: true, message: 'Product updated!', product: p }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.delete('/admin/product/:id', isAdmin, (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true, message: 'Product deleted.' }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: User Login Activity ───────────────────────────────────────────────
app.get('/admin/logins', isAdmin, (req, res) => {
    Login.find().sort({ loginAt: -1 }).limit(100)
        .then(logins => res.json({ success: true, logins }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── ADMIN: Admin Login Activity ──────────────────────────────────────────────
app.get('/admin/admin-logins', isAdmin, (req, res) => {
    AdminLoginLog.find().sort({ loginAt: -1 }).limit(100)
        .then(logins => res.json({ success: true, logins }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── SEND OTP (Login) ─────────────────────────────────────────────────────────
app.post('/send-otp', (req, res) => {
    const { phone } = req.body;

    if (!phone || !/^\d{10}$/.test(phone))
        return res.status(400).json({ success: false, message: 'Enter a valid 10-digit mobile number.' });

    // Admin bypass
    if (phone === '0000000000')
        return res.json({ success: true, isAdmin: true, message: 'Admin detected.' });

    Registration.findOne({ phone })
        .then(user => {
            if (!user)
                return res.status(401).json({ success: false, message: '⚠️ Mobile number not registered. Please create an account first.' });
            if (user.blocked)
                return res.status(403).json({ success: false, message: '🚫 Your account has been blocked. Contact support.' });

            const otp = generateOTP();
            otpStore[phone] = { otp, expires: Date.now() + 5 * 60 * 1000, name: user.name, email: user.email };
            console.log(`📧 OTP for ${phone} (${user.email}): ${otp}`);

            sendOTPEmail(user.email, otp, user.name)
                .then(() => res.json({ success: true, message: `OTP sent to ${maskEmail(user.email)}` }))
                .catch(() => res.status(500).json({ success: false, message: 'Failed to send OTP email. Try again.' }));
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── SEND OTP (Register) ──────────────────────────────────────────────────────
app.post('/send-register-otp', (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone)
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    if (!/^\d{10}$/.test(phone))
        return res.status(400).json({ success: false, message: 'Enter a valid 10-digit mobile number.' });

    Registration.findOne({ $or: [{ phone }, { email }] })
        .then(existing => {
            if (existing)
                return res.status(409).json({ success: false, message: 'Mobile or Email already registered.' });

            const otp = generateOTP();
            otpStore[`reg_${phone}`] = { otp, expires: Date.now() + 5 * 60 * 1000, name, email, phone };
            console.log(`📧 Register OTP for ${email}: ${otp}`);

            sendOTPEmail(email, otp, name)
                .then(() => res.json({ success: true, message: `OTP sent to ${maskEmail(email)}` }))
                .catch(() => res.status(500).json({ success: false, message: 'Failed to send OTP email. Try again.' }));
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// ─── VERIFY OTP (Login) ───────────────────────────────────────────────────────
app.post('/verify-otp', (req, res) => {
    const { phone, otp } = req.body;
    const stored = otpStore[phone];

    if (!stored)
        return res.status(400).json({ success: false, message: 'OTP expired or not sent. Please request again.' });
    if (Date.now() > stored.expires) {
        delete otpStore[phone];
        return res.status(400).json({ success: false, message: '⏰ OTP expired. Please request a new one.' });
    }
    if (stored.otp !== otp)
        return res.status(400).json({ success: false, message: '❌ Invalid OTP. Please try again.' });

    delete otpStore[phone];

    new Login({ phone, name: stored.name, status: 'success' }).save()
        .catch(err => console.error('Login log error:', err.message));

    res.json({
        success: true,
        message: `Welcome back, ${stored.name}!`,
        user: { name: stored.name, email: stored.email, phone }
    });
});

// ─── VERIFY OTP (Register) ────────────────────────────────────────────────────
app.post('/verify-register-otp', (req, res) => {
    const { phone, otp } = req.body;
    const stored = otpStore[`reg_${phone}`];

    if (!stored)
        return res.status(400).json({ success: false, message: 'OTP expired or not sent. Please request again.' });
    if (Date.now() > stored.expires) {
        delete otpStore[`reg_${phone}`];
        return res.status(400).json({ success: false, message: '⏰ OTP expired. Please request a new one.' });
    }
    if (stored.otp !== otp)
        return res.status(400).json({ success: false, message: '❌ Invalid OTP. Please try again.' });

    delete otpStore[`reg_${phone}`];

    new Registration({ name: stored.name, email: stored.email, phone: stored.phone }).save()
        .then(saved => {
            // Send welcome email
            sendWelcomeEmail(stored.name, stored.email);
            res.status(201).json({
                success: true,
                message: 'Registration successful! You can now sign in.',
                user: { name: stored.name, email: stored.email, phone: stored.phone }
            });
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});
// ─── Helper: Mask Email ───────────────────────────────────────────────────────
function maskEmail(email) { 
    const [user, domain] = email.split('@');
    return user.substring(0, 3) + '***@' + domain;
}

// ─── NOTIFY ME (Out of Stock) ─────────────────────────────────────────────────
app.post('/notify-me', async (req, res) => {
    const { productName, email, phone } = req.body;
    if (!productName || !email)
        return res.status(400).json({ success: false, message: 'Product name and email are required.' });

    try {
        // Avoid duplicates for same product+email that haven't been notified yet
        const exists = await StockNotification.findOne({ productName, email, notifiedAt: null });
        if (exists)
            return res.json({ success: true, message: 'You are already on the waitlist for this product!' });

        await new StockNotification({ productName, email, phone: phone || '' }).save();
        res.json({ success: true, message: `We'll notify you at ${email} when ${productName} is back in stock!` });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// ─── ADMIN: Mark Product Back In Stock → fires notification emails ────────────
app.put('/admin/product/:id/restock', isAdmin, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { inStock: true },
            { returnDocument: 'after' }
        );
        if (!product) return res.status(404).json({ success: false, message: 'Product not found.' });

        // Find all pending notifications for this product
        const waitlist = await StockNotification.find({ productName: product.name, notifiedAt: null });
        if (waitlist.length > 0) {
            const emailPromises = waitlist.map(n => sendBackInStockEmail(n.email, product.name, product.price, product.img));
            await Promise.allSettled(emailPromises);
            // Mark all as notified
            await StockNotification.updateMany(
                { productName: product.name, notifiedAt: null },
                { notifiedAt: new Date() }
            );
        }

        res.json({ success: true, message: `Product restocked. ${waitlist.length} notification email(s) sent.`, product });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// ─── ADMIN: Get waitlist for a product ───────────────────────────────────────
app.get('/admin/notify-waitlist/:productName', isAdmin, async (req, res) => {
    try {
        const list = await StockNotification.find({
            productName: decodeURIComponent(req.params.productName),
            notifiedAt: null
        }).sort({ createdAt: -1 });
        res.json({ success: true, count: list.length, list });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
// ─── CONTACT SUPPORT (User → Admin email) ────────────────────────────────────
app.post('/contact-support', async (req, res) => {
    const { name, phone, email, subject, message, category } = req.body;
    if (!name || !message || !subject) {
        return res.status(400).json({ success: false, message: 'Name, subject and message are required.' });
    }

    const categoryLabels = {
        order: '📦 Order Issue',
        payment: '💳 Payment Issue',
        account: '👤 Account Issue',
        delivery: '🚚 Delivery Issue',
        other: '💬 Other'
    };
    const categoryLabel = categoryLabels[category] || '💬 General';

    try {
        await transporter.sendMail({
            from: `"Arjun SuperMarket Support" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: `[Support] ${categoryLabel} — ${subject}`,
            html: `
                <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                    <div style="background:#ff5200;padding:20px 25px;">
                        <h2 style="color:white;margin:0;font-size:20px;">🎧 New Support Request</h2>
                        <p style="color:rgba(255,255,255,0.85);margin:5px 0 0;font-size:13px;">${categoryLabel}</p>
                    </div>
                    <div style="padding:25px;">
                        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
                            <tr><td style="padding:8px 0;color:#64748b;width:110px;">Name</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${name}</td></tr>
                            <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;color:#1e293b;">${phone || '—'}</td></tr>
                            <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;color:#1e293b;">${email || '—'}</td></tr>
                            <tr><td style="padding:8px 0;color:#64748b;">Subject</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${subject}</td></tr>
                        </table>
                        <div style="background:#f8fafc;border-left:4px solid #ff5200;padding:15px;border-radius:0 8px 8px 0;">
                            <p style="margin:0;font-size:13px;color:#64748b;margin-bottom:6px;">Message</p>
                            <p style="margin:0;color:#1e293b;line-height:1.6;">${message.replace(/\n/g,'<br>')}</p>
                        </div>
                        <p style="margin-top:20px;font-size:11px;color:#94a3b8;">Sent from Arjun Supermarket Help & Support — ${new Date().toLocaleString('en-IN')}</p>
                    </div>
                </div>`
        });

        // Also send confirmation to user if they provided email
        if (email) {
            await transporter.sendMail({
                from: `"Arjun SuperMarket 🛒" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: `We received your message — ${subject}`,
                html: `
                    <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                        <div style="background:#1e293b;padding:20px 25px;">
                            <h2 style="color:#ff5200;margin:0;font-size:20px;">Arjun Supermarket</h2>
                        </div>
                        <div style="padding:25px;">
                            <p style="color:#1e293b;font-size:16px;">Hi <strong>${name}</strong>,</p>
                            <p style="color:#64748b;line-height:1.6;">We've received your message and will get back to you as soon as possible. Our support team typically responds within <strong>24 hours</strong>.</p>
                            <div style="background:#f8fafc;border-radius:8px;padding:15px;margin:20px 0;">
                                <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">Your message</p>
                                <p style="margin:0;color:#1e293b;font-size:14px;">${message.replace(/\n/g,'<br>')}</p>
                            </div>
                            <p style="color:#64748b;font-size:13px;">Thank you for reaching out!<br><strong>— Arjun Supermarket Team</strong></p>
                        </div>
                    </div>`
            });
        }

        res.json({ success: true, message: 'Your message has been sent to our support team!' });
    } catch (err) {
        console.error('Support email error:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
});

// ─── START ────────────────────────────────────────────────────────────────────
const PORT = 5000;
app.listen(PORT, () => {
    console.log('🚀 Server running on http://localhost:' + PORT);
});
// ─── Send Welcome Email Function ──────────────────────────────────────────────
function sendWelcomeEmail(name, email) {
    const mailOptions = {
        from: `"Arjun SuperMarket" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: '🎊 Welcome to Arjun SuperMarket!',
        html: `
        <div style="font-family:'Segoe UI',sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;">

            <!-- Header -->
            <div style="background:#1e293b;padding:30px;text-align:center;">
                <h1 style="color:#fff;margin:0;font-size:24px;">
                    Arjun <span style="color:#ff5200;">SuperMarket</span>
                </h1>
                <p style="color:#94a3b8;margin:8px 0 0;font-size:13px;">Your neighbourhood grocery store</p>
            </div>

            <!-- Body -->
            <div style="background:#fff;padding:35px 40px;">
                <h2 style="color:#1e293b;margin-bottom:10px;">Welcome, ${name}! <i class="fa-solid fa-party-horn" style="color:#f59e0b;"></i></h2>
                <p style="color:#64748b;line-height:1.7;font-size:15px;">
                    Thank you for registering with <b>Arjun SuperMarket</b>. Your account has been successfully created!
                </p>

                <div style="background:#fff8f5;border-left:4px solid #ff5200;border-radius:8px;padding:16px 20px;margin:24px 0;">
                    <p style="margin:0;color:#1e293b;font-size:14px;font-weight:600;">Your Account Details</p>
                    <p style="margin:8px 0 0;color:#64748b;font-size:13px;"><i class="fa-solid fa-envelope" style="color:#2563eb;"></i> Email: <b>${email}</b></p>
                </div>

                <p style="color:#64748b;line-height:1.7;font-size:15px;">You can now:</p>
                <ul style="color:#64748b;font-size:14px;line-height:2;">
                    <li><i class="fa-solid fa-cart-shopping" style="color:#2563eb;"></i> Browse & order fresh groceries</li>
                    <li><i class="fa-solid fa-bolt" style="color:#f59e0b;"></i> Get 9-minute delivery to your doorstep</li>
                    <li><i class="fa-solid fa-gift" style="color:#ec4899;"></i> Use code <b style="color:#ff5200;">FIRST50</b> for 50% off your first order</li>
                    <li><i class="fa-solid fa-map-location-dot" style="color:#2563eb;"></i> Save your delivery addresses</li>
                </ul>

                <div style="text-align:center;margin:30px 0;">
                    <a href="https://arjun-store.onrender.com"
                       style="background:#ff5200;color:#fff;padding:14px 40px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;display:inline-block;">
                        Start Shopping Now
                    </a>
                </div>

                <div style="background:#f0fdf4;border-radius:8px;padding:16px 20px;margin-top:20px;">
                    <p style="margin:0;font-size:13px;color:#16a34a;font-weight:600;">
                        <i class="fa-solid fa-gift" style="color:#ec4899;"></i> First Order Offer
                    </p>
                    <p style="margin:6px 0 0;font-size:13px;color:#64748b;">
                        Use code <b>FIRST50</b> at checkout to get 50% off on your first order!
                    </p>
                </div>
            </div>

            <!-- Footer -->
            <div style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8;font-size:12px;margin:0;">
                    Need help? Contact us at
                    <a href="mailto:deepikathota054@gmail.com" style="color:#ff5200;">deepikathota054@gmail.com</a>
                    or call <b>+91 8639697577</b>
                </p>
                <p style="color:#cbd5e1;font-size:11px;margin:8px 0 0;">
                    © 2026 Arjun Enterprises, Visakhapatnam. All rights reserved.
                </p>
            </div>

        </div>
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('❌ Email error:', err.message);
        } else {
            console.log('<i class="fa-solid fa-circle-check" style="color:#16a34a;"></i> Welcome email sent to:', email);
        }
    });
}

// ─── Send Back-In-Stock Notification Email ────────────────────────────────────
function sendBackInStockEmail(email, productName, price, img) {
    const mailOptions = {
        from: `"Arjun SuperMarket" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `✅ ${productName} is Back in Stock! — Arjun SuperMarket`,
        html: `
        <div style="font-family:'Segoe UI',sans-serif;max-width:520px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;">
            <div style="background:#1e293b;padding:25px;text-align:center;">
                <h2 style="color:#fff;margin:0;">Arjun <span style="color:#ff5200;">SuperMarket</span></h2>
                <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Back in Stock Alert 🛒</p>
            </div>
            <div style="background:#fff;padding:35px 40px;text-align:center;">
                <div style="font-size:48px;margin-bottom:16px;">🎉</div>
                <h2 style="color:#1e293b;margin:0 0 8px;">Great news!</h2>
                <p style="color:#64748b;font-size:15px;margin:0 0 24px;">
                    <b style="color:#ff5200;">${productName}</b> is now back in stock at Arjun SuperMarket.
                </p>
                <div style="background:#fff3ee;border:2px solid #ff5200;border-radius:12px;padding:18px;margin:20px 0;display:inline-block;min-width:200px;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Price</p>
                    <p style="margin:4px 0 0;font-size:28px;font-weight:900;color:#ff5200;">₹${price}</p>
                </div>
                <p style="color:#64748b;font-size:13px;margin:16px 0 24px;">
                    Hurry — popular items sell out fast! Order now before it's gone again.
                </p>
                <a href="https://arjun-store.onrender.com" style="display:inline-block;background:#ff5200;color:#fff;padding:14px 32px;border-radius:10px;font-weight:800;font-size:15px;text-decoration:none;">
                    Shop Now →
                </a>
            </div>
            <div style="background:#f8fafc;padding:15px;text-align:center;border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8;font-size:11px;margin:0;">
                    You subscribed to back-in-stock alerts for this item. © 2026 Arjun Enterprises
                </p>
            </div>
        </div>`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) { console.error('❌ Back-in-stock email error:', err.message); reject(err); }
            else     { console.log('✅ Back-in-stock email sent to:', email); resolve(info); }
        });
    });
}