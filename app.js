/**
 * =============================================================================
 * SPICY FOOD RESTAURANT (مطعم سبايسي فود) - JAVASCRIPT ENGINE
 * نظام العدادات الذكية، سلة المشتريات، خدمة التوصيل، الفواتير وربط واتساب
 * =============================================================================
 */

// ==========================================
// 1. DATA: قائمة الأصناف والأسعار بالدينار العراقي
// ==========================================
const MENU_ITEMS = [
  // --- 1. قسم الفلافل (Falafel) ---
  {
    id: 'falafel-1',
    name: 'لفة فلافل عراقية',
    category: 'falafel',
    categoryName: 'فلافل',
    price: 500,
    spiceLevel: 2,
    desc: 'لفة فلافل مقرمشة مع الخضار الطازجة، الطرشي، والعمبة العراقية الأصيلة.',
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'falafel-2',
    name: 'طبق فلافل صغير',
    category: 'falafel',
    categoryName: 'فلافل',
    price: 2000,
    spiceLevel: 2,
    desc: 'طبق فلافل ذهبية ساخنة (8 أقراص) مع مقبلات، طماطم، خيار، طرشي وصمون حار.',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=600&auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'falafel-3',
    name: 'طبق فلافل عائلي كبير',
    category: 'falafel',
    categoryName: 'فلافل',
    price: 3000,
    spiceLevel: 2,
    desc: 'طبق عائلي مشبع (20 قرص فلافل) مع تشكيلة صوصات خاصة، عمبة، سلطات وصمون كافي للعائلة.',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&auto=format&fit=crop&q=80',
    popular: true
  },

  // --- 2. قسم السندويشات (Sandwiches) ---
  {
    id: 'sand-1',
    name: 'سندويش فلر دجاج',
    category: 'sandwiches',
    categoryName: 'سندويشات',
    price: 1500,
    spiceLevel: 1,
    desc: 'صدر دجاج فلر مقرمش ومتبل بالخلطة السرية مع الخس وصوص المايونيز اللذيذ.',
    image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'sand-2',
    name: 'سندويش زنكر حار',
    category: 'sandwiches',
    categoryName: 'سندويشات',
    price: 2000,
    spiceLevel: 3,
    desc: 'قطعة زنكر دجاج سوبر مقرمشة ومتبلة بالفلفل الحار مع الجبن الذائب وصوص السبايسي.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'sand-3',
    name: 'زنكر سبايسي فود الخارق ⭐',
    category: 'sandwiches',
    categoryName: 'سندويشات',
    price: 3000,
    spiceLevel: 3,
    desc: 'الوجبة الأقوى! دبل زنكر مقرمش محشو بالجبنة السائلة، شرائح الهالبينو النارية وصوص الشعلة الخاص.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
    popular: true
  },

  // --- 3. قسم الريزو (Rizo) ---
  {
    id: 'rizo-1',
    name: 'ريزو دجاج مقرمش سبايسي',
    category: 'rizo',
    categoryName: 'ريزو',
    price: 3500,
    spiceLevel: 2,
    desc: 'أرز ريزو أصفر مبهر بالنكهات الشرقية تعلوه قطع دجاج مقرمشة مع صوص الباربيكيو الحار.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'rizo-2',
    name: 'ريزو زنكر سبايسي فود',
    category: 'rizo',
    categoryName: 'ريزو',
    price: 4000,
    spiceLevel: 3,
    desc: 'أرز الريزو الذهبي مع قطع الزنكر الحارة جداً، صوص الرانش وصوص الشعلة الحار.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'rizo-3',
    name: 'ريزو مكس لحم ودجاج',
    category: 'rizo',
    categoryName: 'ريزو',
    price: 4500,
    spiceLevel: 2,
    desc: 'توليفة فاخرة من قطع شاورما اللحم العراقي وقطع الدجاج الكريسبي فوق أرز الريزو المبهر.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80',
    popular: false
  },

  // --- 4. قسم البركر (Burgers) ---
  {
    id: 'burger-1',
    name: 'بركر لحم عراقي كلاسيك',
    category: 'burgers',
    categoryName: 'بركر',
    price: 2500,
    spiceLevel: 1,
    desc: 'شريحة لحم عجل صافي مشوية على الفحم مع الطماطم، الخس، الجبن وصوص الكلاسيك.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'burger-2',
    name: 'بركر دجاج كريسبي سبايسي',
    category: 'burgers',
    categoryName: 'بركر',
    price: 2500,
    spiceLevel: 2,
    desc: 'شريحة بركر دجاج مقرمشة وذهبية مع صوص الجبن والخردل بالعسل ولمسة حارة.',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'burger-3',
    name: 'بركر دبل سبايسي فود الملكي',
    category: 'burgers',
    categoryName: 'بركر',
    price: 4000,
    spiceLevel: 3,
    desc: 'طبقتين لحم مشوي + طبقة جبن شيدر مدخن + هالبينو حار + صوص سبايسي فود المبتكر.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80',
    popular: true
  },

  // --- 5. قسم الكنتاكي والكريسبي (Kentucky & Crispy) ---
  {
    id: 'kfc-1',
    name: 'وجبة كنتاكي 3 قطع + بطاطا',
    category: 'kentucky',
    categoryName: 'كنتاكي',
    price: 4000,
    spiceLevel: 2,
    desc: '3 قطع دجاج كنتاكي متبلة ومقرمشة مع علبة بطاطا فنگر، ثومية، وصوص خاص.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'kfc-2',
    name: 'وجبة كنتاكي عائلية 8 قطع',
    category: 'kentucky',
    categoryName: 'كنتاكي',
    price: 9000,
    spiceLevel: 2,
    desc: '8 قطع دجاج مقرمش ذهبي حار أو عادي + بطاطا عائلية + كول سلو + لتر بيبسي وصوصات.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'kfc-3',
    name: 'وجبة ستربس دجاج ناري (5 قطع)',
    category: 'kentucky',
    categoryName: 'كنتاكي',
    price: 3500,
    spiceLevel: 3,
    desc: 'أصابع صدور دجاج كريسبي بدون عظم متبلة بتوابل الفلفل الأحمر الحار مع صوص الشيدر.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80',
    popular: false
  },

  // --- 6. قسم البيتزا (Pizza) ---
  {
    id: 'pizza-1',
    name: 'بيتزا مارغريتا إيطالية',
    category: 'pizza',
    categoryName: 'بيتزا',
    price: 4000,
    spiceLevel: 0,
    desc: 'عجينة طازجة رقيقة، صوص طماطم ريحان، وجبنة موزاريلا غنية وذائبة.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'pizza-2',
    name: 'بيتزا ببروني سبايسي حارة',
    category: 'pizza',
    categoryName: 'بيتزا',
    price: 5000,
    spiceLevel: 2,
    desc: 'شرائح ببروني بقري بقرمشة شهية، فلفل حار، وموزاريلا مطاطية.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'pizza-3',
    name: 'بيتزا مكس سبايسي فود الخاصة',
    category: 'pizza',
    categoryName: 'بيتزا',
    price: 6000,
    spiceLevel: 3,
    desc: 'مكس دجاج كريسبي مع لحم مفروم، زيتون، فطر، فلفل أحمر حار وصوص الجبنة الخاص.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
    popular: true
  },

  // --- 7. قسم المشروبات (Drinks) ---
  {
    id: 'drink-1',
    name: 'مشروب غازي مثلج (بيبسي / سفن / ميرندا)',
    category: 'drinks',
    categoryName: 'مشروبات',
    price: 500,
    spiceLevel: 0,
    desc: 'كانز 330 مل بارد ومنعش يطفئ حرارة السبايسي.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
    popular: true
  },
  {
    id: 'drink-2',
    name: 'عصير برتقال طبيعي طازج',
    category: 'drinks',
    categoryName: 'مشروبات',
    price: 1500,
    spiceLevel: 0,
    desc: 'عصير برتقال فريش معصور يومياً وغني بالفيتامينات.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80',
    popular: false
  },
  {
    id: 'drink-3',
    name: 'موهيتو سبايسي فود المنعش',
    category: 'drinks',
    categoryName: 'مشروبات',
    price: 2000,
    spiceLevel: 0,
    desc: 'موهيتو توت أو ليمون ونعناع مثلج يمنحك انتعاشاً خرافياً.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    popular: true
  }
];

// العروض الترويجية المميزة (Special Deals)
const SPECIAL_OFFERS = [
  {
    id: 'offer-1',
    name: 'عرض التوفير الناري 🔥',
    oldPrice: 5500,
    price: 4500,
    badge: 'وفر 1,000 د.ع',
    items: ['2 سندويش زنكر حار ومقرمش', 'علبة بطاطا فنگر مقرمشة', '1 بيبسي مثلج'],
    desc: 'العرض الأفضل لعشاق القرمشة والحرارة العالية بسعر اقتصادي.'
  },
  {
    id: 'offer-2',
    name: 'عرض اللمة العائلية 👨‍👩‍👧‍👦',
    oldPrice: 12000,
    price: 9500,
    badge: 'عرض عائلي سوبر',
    items: ['طبق فلافل عائلي كبير (20 قرص)', '2 لفة فلر دجاج مقرمش', '1 بيتزا مارغريتا حجم وسط', '1 لتر بيبسي عائلي'],
    desc: 'يكفي لـ 4 إلى 5 أشخاص مع تشكيلة من أشهى أطباقنا.'
  },
  {
    id: 'offer-3',
    name: 'بوكس سبايسي الخرافي ⭐',
    oldPrice: 13000,
    price: 10000,
    badge: 'الأكثر طلباً',
    items: ['1 ريزو دجاج سبايسي', '1 وجبة كنتاكي 3 قطع + بطاطا', '1 بركر لحم عراقي', '1 موهيتو سبايسي منعش'],
    desc: 'تشكيلة متكاملة من الريزو والكنتاكي والبركر مع مشروب الموهيتو المميز.'
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('spicy_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let deliveryFee = 1000; // 1,000 د.ع للتوصيل

// تنسيق العملة بالدينار العراقي (IQD)
function formatCurrency(amount) {
  return new Intl.NumberFormat('ar-IQ').format(amount) + ' د.ع';
}

// ==========================================
// 3. DOM READY INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderOffers();
  renderMenu();
  updateCartUI();
  setupEventListeners();
});

// ==========================================
// 4. RENDER FUNCTIONS
// ==========================================

// رندر قسم العروض الخاصة
function renderOffers() {
  const container = document.getElementById('offers-container');
  if (!container) return;

  container.innerHTML = SPECIAL_OFFERS.map(offer => `
    <div class="offer-card">
      <div class="offer-ribbon">${offer.badge}</div>
      <div class="offer-content">
        <h3 class="offer-title">${offer.name}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">${offer.desc}</p>
        <ul class="offer-items-list">
          ${offer.items.map(it => `<li>${it}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="offer-price-row">
          <span class="offer-new-price">${formatCurrency(offer.price)}</span>
          <span class="offer-old-price">${formatCurrency(offer.oldPrice)}</span>
        </div>
        <button class="offer-btn" onclick="addOfferToCart('${offer.id}')">
          <span>🛒 إضافة العرض للسلة</span>
        </button>
      </div>
    </div>
  `).join('');
}

// رندر قائمة الطعام مع العدادات الحية وارتفاع السعر التلقائي
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  let filtered = MENU_ITEMS;

  // تصفية حسب القسم
  if (activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  // تصفية حسب البحث
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="color: #fff; margin-bottom: 8px;">لم نجد أي وجبة مطابقة لبحثك</h3>
        <p style="color: var(--text-muted);">جرب البحث عن فلافل، زنكر، ريزو، أو تصفح الأقسام أعلاه.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    let spicyIcons = '';
    if (item.spiceLevel === 1) spicyIcons = '🌶️ خفيف';
    else if (item.spiceLevel === 2) spicyIcons = '🌶️🌶️ حار';
    else if (item.spiceLevel === 3) spicyIcons = '🌶️🌶️🌶️ ناري';
    else spicyIcons = '🌱 عادي';

    return `
      <div class="food-card" id="card-${item.id}">
        <div class="food-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" />
          <span class="food-spice-badge">${spicyIcons}</span>
          <span class="food-category-badge">${item.categoryName}</span>
        </div>
        
        <div class="food-card-body">
          <h3 class="food-card-title">${item.name}</h3>
          <p class="food-card-desc">${item.desc}</p>
          
          <div class="food-pricing-row">
            <div class="food-unit-price">
              <span class="price-label">سعر المفرد</span>
              <span class="price-value">${formatCurrency(item.price)}</span>
            </div>
            
            <div class="food-live-subtotal">
              <span class="subtotal-label">المجموع للعدد المحدد:</span>
              <span class="subtotal-val" id="subtotal-${item.id}">${formatCurrency(item.price)}</span>
            </div>
          </div>

          <!-- عداد الكمية التفاعلي مع ارتفاع السعر وزر الإضافة -->
          <div class="food-card-controls">
            <div class="qty-control-group">
              <button class="qty-btn" onclick="changeCardQty('${item.id}', 1)" title="زيادة العدد">+</button>
              <input type="text" class="qty-input" id="qty-${item.id}" value="1" readonly />
              <button class="qty-btn" onclick="changeCardQty('${item.id}', -1)" title="تقليل العدد">-</button>
            </div>
            
            <button class="btn-add-cart" onclick="addItemToCartFromCard('${item.id}')">
              <span>إضافة للسلة 🛒</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 5. INTERACTION & CARD QUANTITY LOGIC
// ==========================================

// تغيير الكمية داخل بطاقة الوجبة مع تحديث السعر المباشر
function changeCardQty(itemId, change) {
  const qtyInput = document.getElementById(`qty-${itemId}`);
  const subtotalEl = document.getElementById(`subtotal-${itemId}`);
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!qtyInput || !item) return;

  let currentQty = parseInt(qtyInput.value) || 1;
  currentQty += change;

  if (currentQty < 1) currentQty = 1;
  if (currentQty > 50) currentQty = 50;

  qtyInput.value = currentQty;

  // تحديث السعر الإجمالي الحي للبطاقة
  const liveTotal = item.price * currentQty;
  if (subtotalEl) {
    subtotalEl.innerText = formatCurrency(liveTotal);
    subtotalEl.style.transform = 'scale(1.15)';
    subtotalEl.style.color = 'var(--spicy-gold)';
    setTimeout(() => {
      subtotalEl.style.transform = 'scale(1)';
    }, 200);
  }
}

// إضافة وجبة من بطاقة القائمة إلى السلة
function addItemToCartFromCard(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  const qtyInput = document.getElementById(`qty-${itemId}`);
  if (!item) return;

  const qty = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;

  const existingIndex = cart.findIndex(c => c.id === item.id);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`تمت إضافة ${qty} × ${item.name} إلى السلة! 🔥`);

  // إعادة تعيين العداد للبطاقة إلى 1
  if (qtyInput) {
    qtyInput.value = 1;
    const subtotalEl = document.getElementById(`subtotal-${itemId}`);
    if (subtotalEl) subtotalEl.innerText = formatCurrency(item.price);
  }
}

// إضافة عرض مخصص إلى السلة
function addOfferToCart(offerId) {
  const offer = SPECIAL_OFFERS.find(o => o.id === offerId);
  if (!offer) return;

  const existingIndex = cart.findIndex(c => c.id === offer.id);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: offer.id,
      name: offer.name,
      price: offer.price,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80',
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`تمت إضافة "${offer.name}" إلى السلة! 🎉`);
}

// ==========================================
// 6. CART MANAGEMENT & UI
// ==========================================

function saveCart() {
  localStorage.setItem('spicy_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge-count');
  const priceBadge = document.getElementById('cart-btn-price');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDeliveryEl = document.getElementById('cart-delivery-fee');
  const cartGrandTotalEl = document.getElementById('cart-grand-total');

  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const grandTotal = subtotalAmount > 0 ? (subtotalAmount + deliveryFee) : 0;

  if (badge) badge.innerText = totalItemsCount;
  if (priceBadge) priceBadge.innerText = formatCurrency(subtotalAmount);

  if (cartSubtotalEl) cartSubtotalEl.innerText = formatCurrency(subtotalAmount);
  if (cartDeliveryEl) cartDeliveryEl.innerText = formatCurrency(deliveryFee);
  if (cartGrandTotalEl) cartGrandTotalEl.innerText = formatCurrency(grandTotal);

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4 style="color: #fff; margin-bottom: 6px;">سلة المشتريات فارغة</h4>
        <p style="font-size: 0.85rem;">اختر وجباتك المفضلة من المنيو وسنقوم بتوصيلها ساخنة إليك!</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
      
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-unit-price">${formatCurrency(item.price)} للقطعة</div>
        <div class="cart-item-total-price">${formatCurrency(item.price * item.qty)}</div>
      </div>

      <div class="cart-item-controls">
        <div class="cart-item-qty-group">
          <button class="cart-qty-btn" onclick="modifyCartItemQty(${index}, 1)">+</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="modifyCartItemQty(${index}, -1)">-</button>
        </div>
        <button class="cart-remove-btn" onclick="removeCartItem(${index})" title="حذف الوجبة">🗑️ حذف</button>
      </div>
    </div>
  `).join('');
}

function modifyCartItemQty(index, change) {
  if (!cart[index]) return;
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast('تم حذف العنصر من السلة');
}

function clearCart() {
  if (confirm('هل أنت متأكد من رغبتك في تفريغ السلة؟')) {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('تم تفريغ السلة بالكامل');
  }
}

// ==========================================
// 7. MODALS & CHECKOUT (واتساب والفاتورة)
// ==========================================

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (open) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// فتح نافذة بيانات الزبون للتوصيل
function openCheckoutModal() {
  if (cart.length === 0) {
    alert('سلة المشتريات فارغة! يرجى اختيار بعض الوجبات أولاً.');
    return;
  }
  toggleCartDrawer(false);
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
}

// إتمام الطلب وتوجيهه إلى واتساب مع رسالة احترافية منسقة
function submitOrderToWhatsApp(event) {
  if (event) event.preventDefault();

  const name = document.getElementById('cust-name')?.value.trim() || 'زبون محترم';
  const phone = document.getElementById('cust-phone')?.value.trim() || 'غير محدد';
  const area = document.getElementById('cust-area')?.value.trim() || 'غير محدد';
  const notes = document.getElementById('cust-notes')?.value.trim() || 'لا توجد ملاحظات';

  if (!phone || phone.length < 8) {
    alert('يرجى إدخال رقم هاتف صحيح للتواصل والتوصيل.');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const grandTotal = subtotal + deliveryFee;
  const orderNumber = 'SPICY-' + Math.floor(100000 + Math.random() * 900000);
  const orderTime = new Date().toLocaleString('ar-IQ');

  // إنشاء نص الرسالة المنسقة لواتساب
  let message = `*🔥 طلب جديد من مطعم سبايسي فود 🔥*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *رقم الطلب:* ${orderNumber}\n`;
  message += `🕒 *الوقت:* ${orderTime}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *اسم الزبون:* ${name}\n`;
  message += `📞 *رقم الهاتف:* ${phone}\n`;
  message += `📍 *عنوان التوصيل:* ${area}\n`;
  if (notes !== 'لا توجد ملاحظات') {
    message += `📝 *ملاحظات:* ${notes}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🍽️ *تفاصيل الوجبات المطلوبة:*\n`;

  cart.forEach((item, i) => {
    message += `${i + 1}. *${item.name}* \n   العدد: ${item.qty} × السعر: ${formatCurrency(item.price)} = ${formatCurrency(item.price * item.qty)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *مجموع الوجبات:* ${formatCurrency(subtotal)}\n`;
  message += `🛵 *أجور التوصيل:* ${formatCurrency(deliveryFee)}\n`;
  message += `⭐ *المبلغ الإجمالي النهائي:* *${formatCurrency(grandTotal)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🌶️ *شكراً لاختياركم سبايسي فود - طعم النار والأصالة!*`;

  // رقم واتساب المطعم
  const restaurantWhatsAppNumber = '07762193552';
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${restaurantWhatsAppNumber}&text=${encodedMsg}`;

  // فتح واتساب
  window.open(whatsappUrl, '_blank');

  // عرض الفاتورة الإلكترونية للزبون وتفريغ السلة
  closeCheckoutModal();
  showInvoiceReceipt({
    orderNumber,
    orderTime,
    name,
    phone,
    area,
    notes,
    subtotal,
    deliveryFee,
    grandTotal,
    items: [...cart]
  });

  cart = [];
  saveCart();
  updateCartUI();
}

// إظهار نافذة الفاتورة الرقمية المنبثقة
function showInvoiceReceipt(orderData) {
  const modal = document.getElementById('receipt-modal');
  const body = document.getElementById('receipt-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="receipt-paper">
      <div class="receipt-header">
        <img src="assets/logo.png" class="receipt-logo" alt="سبايسي فود" />
        <h2 style="color: #0b0d11; font-weight: 900; font-size: 1.3rem;">مطعم سبايسي فود</h2>
        <p style="font-size: 0.8rem; color: #6b7280;">فاتورة طلب إلكترونية - خدمة التوصيل السريع</p>
        <div style="margin-top: 8px; font-weight: 700; font-size: 0.85rem; color: #d90429;">
          رقم الطلب: ${orderData.orderNumber}
        </div>
        <div style="font-size: 0.75rem; color: #9ca3af;">${orderData.orderTime}</div>
      </div>

      <div style="margin-bottom: 12px; font-size: 0.85rem;">
        <div><strong>الزبون:</strong> ${orderData.name}</div>
        <div><strong>الهاتف:</strong> ${orderData.phone}</div>
        <div><strong>العنوان:</strong> ${orderData.area}</div>
      </div>

      <table class="receipt-table">
        <thead>
          <tr>
            <th>الصنف</th>
            <th style="text-align: center;">العدد</th>
            <th style="text-align: left;">المجموع</th>
          </tr>
        </thead>
        <tbody>
          ${orderData.items.map(it => `
            <tr>
              <td>${it.name}</td>
              <td style="text-align: center;">${it.qty}</td>
              <td style="text-align: left;">${formatCurrency(it.price * it.qty)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="font-size: 0.88rem; margin-top: 10px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>مجموع الأصناف:</span>
          <span>${formatCurrency(orderData.subtotal)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>أجور التوصيل:</span>
          <span>${formatCurrency(orderData.deliveryFee)}</span>
        </div>
        <div class="receipt-total-row">
          <span>المجموع الكلي:</span>
          <span>${formatCurrency(orderData.grandTotal)}</span>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; border-top: 1px dashed #e5e7eb; padding-top: 12px; font-size: 0.78rem; color: #6b7280;">
        🔥 ألف عافية! شكراً لطلبكم من سبايسي فود 🔥
      </div>
    </div>

    <div style="display: flex; gap: 10px; margin-top: 18px;">
      <button onclick="window.print()" class="btn-primary" style="flex: 1; padding: 10px;">
        🖨️ طباعة الفاتورة
      </button>
      <button onclick="closeReceiptModal()" class="btn-secondary" style="flex: 1; padding: 10px;">
        إغلاق
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// 8. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 9. EVENT LISTENERS & MOBILE NAV
// ==========================================
function setupEventListeners() {
  // تصفية الفئات عند الضغط على التبويبات
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      renderMenu();
    });
  });

  // البحث المباشر
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }

  // تأثير التمرير على الهيدر
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

// التبديل في قائمة الموبايل
function toggleMobileNav() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '80px';
    navLinks.style.right = '0';
    navLinks.style.left = '0';
    navLinks.style.background = 'var(--bg-onyx-surface)';
    navLinks.style.padding = '20px';
    navLinks.style.borderBottom = '1px solid var(--border-glow)';
    navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
  }
}
