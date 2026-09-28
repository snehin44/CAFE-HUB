/**
 * CAFE HUB - Interactive Application Script
 * Powered by pure vanilla JS for instant snappy performance
 */

// Full Menu Database with Unique, Cool, Gen-Z and Universal-Appeal Items
const MENU_ITEMS = [
  // --- CAFFEINATED / ESPRESSO ---
  {
    id: 'm1',
    name: 'Main Character Energy',
    category: 'espresso',
    price: '$6.50',
    rawPrice: 6.50,
    quote: '"For when you are romanticizing your morning walk with headphones on"',
    description: 'Double-shot artisanal ristretto pulled over velvety oat milk, infused with Madagascar vanilla bean and dusted with smoked cinnamon.',
    badge: 'Staff Pick 🔥',
    badgeClass: 'staff-pick',
    dietary: ['top-pick', 'vegan'],
    vibeScore: 'Vibe: 10/10 ✨',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm2',
    name: 'Delulu Lemon Cold Brew',
    category: 'espresso',
    price: '$6.75',
    rawPrice: 6.75,
    quote: '"Delusional optimism bottled in a chilled glass with sparkling citrus"',
    description: '20-hour steeped Ethiopian cold brew shaken with sparkling Meyer lemon tonic, fresh crushed rosemary, and a candied citrus wheel.',
    badge: 'Viral on TikTok 🍋',
    badgeClass: 'viral',
    dietary: ['top-pick', 'vegan', 'gf'],
    vibeScore: 'Refreshment: 100%',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm3',
    name: 'Overthinking at 2 AM',
    category: 'espresso',
    price: '$7.00',
    rawPrice: 7.00,
    quote: '"Quad-shot caffeine rocket. Sleep is an overrated construct anyway"',
    description: 'Four shots of dark roast espresso folded into Dutch dark cocoa, salted caramel drizzle, and topped with sea-salt espresso crunch.',
    badge: 'High Caffeine ⚡',
    badgeClass: 'high-caffeine',
    dietary: ['high-energy'],
    vibeScore: 'Brain Activity: 999%',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm4',
    name: 'Ghosted Flat White',
    category: 'espresso',
    price: '$5.75',
    rawPrice: 5.75,
    quote: '"Smooth, sweet, and suddenly it is gone with zero explanation"',
    description: 'Micro-foamed whole milk poured over Australian white velvet espresso and subtle macadamia nut syrup. Silky smooth texture.',
    badge: 'Classic Twist 🤍',
    badgeClass: 'aesthetic',
    dietary: ['gf'],
    vibeScore: 'Smoothness: 10/10',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm5',
    name: 'Golden Hour Glow',
    category: 'espresso',
    price: '$6.25',
    rawPrice: 6.25,
    quote: '"A warm aesthetic sunset in a ceramic cup for your feed"',
    description: 'Organic golden turmeric, fresh ginger, wild honey, and ashwagandha steamed with almond milk, topped with gold-dusted microfoam.',
    badge: 'Wellness Era ✨',
    badgeClass: 'aesthetic',
    dietary: ['vegan', 'gf'],
    vibeScore: 'Immunity: +100',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm6',
    name: 'No Cap Cappuccino',
    category: 'espresso',
    price: '$5.25',
    rawPrice: 5.25,
    quote: '"Zero gimmicks, no fluff, just raw unadulterated Italian craft"',
    description: 'Equal thirds single-origin Colombian espresso, steamed whole milk, and dense velvety dry foam dusted with Valrhona cocoa powder.',
    badge: 'Purist Choice ☕',
    badgeClass: 'staff-pick',
    dietary: ['gf'],
    vibeScore: 'Authentic: 100%',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80'
  },

  // --- MATCHA & TONICS ---
  {
    id: 'm7',
    name: 'Iced Matcha Cloud 9',
    category: 'matcha',
    price: '$7.25',
    rawPrice: 7.25,
    quote: '"The TikTok holy grail that actually tastes better than it looks"',
    description: 'First-harvest ceremonial Uji matcha whisked fresh, layered over homemade crushed strawberry compote and cold vanilla cloud foam.',
    badge: 'Most Photographed 📸',
    badgeClass: 'viral',
    dietary: ['top-pick', 'gf'],
    vibeScore: 'Aesthetic: Peak',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm8',
    name: 'Clean Girl Aesthetic Tea',
    category: 'matcha',
    price: '$6.50',
    rawPrice: 6.50,
    quote: '"Hydrated, glowing skin, minding my own business vibes"',
    description: 'Rare silver needle white tea cold-infused with Japanese white peach, rose water droplets, and floating edible organic botanical blooms.',
    badge: 'Zen & Calm 🌸',
    badgeClass: 'aesthetic',
    dietary: ['vegan', 'gf'],
    vibeScore: 'Peace: Restored',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm9',
    name: 'Dopamine Hit Refresher',
    category: 'matcha',
    price: '$6.75',
    rawPrice: 6.75,
    quote: '"Instant mood booster. Colorful, sparkling, and popping with joy"',
    description: 'Sparkling pink dragonfruit and passionfruit elixir charged with antioxidant green coffee extract, topped with popping mango boba pearls.',
    badge: 'Pure Joy 🍬',
    badgeClass: 'viral',
    dietary: ['top-pick', 'vegan', 'gf'],
    vibeScore: 'Euphoria: Unlocked',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm10',
    name: 'Chronically Online',
    category: 'matcha',
    price: '$7.00',
    rawPrice: 7.00,
    quote: '"Changes color from neon blue to galaxy purple when stirred"',
    description: 'Infused butterfly pea botanical tea, wild Maine blueberry syrup, fresh lemon squeeze, and sparkling botanical tonic over carved clear ice.',
    badge: 'Color Shift 🔮',
    badgeClass: 'viral',
    dietary: ['vegan', 'gf', 'high-energy'],
    vibeScore: 'Screens: 12 hrs/day',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm11',
    name: 'Chai There Gorgeous',
    category: 'matcha',
    price: '$6.25',
    rawPrice: 6.25,
    quote: '"Like a cozy oversized thrifted knit sweater in liquid form"',
    description: '8-spice slow simmered Assam tea with ginger, cardamom, clove, and cinnamon, fortified with a dirty espresso shot and spiced brown sugar.',
    badge: 'Cozy Core 🍂',
    badgeClass: 'staff-pick',
    dietary: ['gf', 'high-energy'],
    vibeScore: 'Warmth: 100%',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80'
  },

  // --- SAVAGE EATS & BRUNCH ---
  {
    id: 'm12',
    name: 'Smashed & Unbothered',
    category: 'eats',
    price: '$12.50',
    rawPrice: 12.50,
    quote: '"The avocado toast that older generations claimed ruined our economy"',
    description: 'Thick toasted country sourdough, whipped Meyer lemon feta, chunky Hass avocado, toasted pepitas, chili crunch oil, and a 6-minute runny egg.',
    badge: 'Brunch Icon 🥑',
    badgeClass: 'viral',
    dietary: ['top-pick'],
    vibeScore: 'Delicious: Unbothered',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm13',
    name: 'The Rizz Bagel',
    category: 'eats',
    price: '$13.50',
    rawPrice: 13.50,
    quote: '"Flawless breakfast charisma that makes everyone in the cafe look twice"',
    description: 'Toasted seeded everything bagel, house-cured Scottish salmon, scallion & fresh dill cream cheese, pickled shallots, and fried capers.',
    badge: 'Chef Favorite 🥯',
    badgeClass: 'staff-pick',
    dietary: ['top-pick'],
    vibeScore: 'Rizz: Maxed Out',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81ae08?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm14',
    name: 'Side Eye Croissant',
    category: 'eats',
    price: '$9.25',
    rawPrice: 9.25,
    quote: '"Bombastic side eye to anyone who asks for a bite of this"',
    description: 'Twice-baked flaky French butter croissant filled with gooey roasted Sicilian pistachio praline cream, coated in crushed salted pistachios.',
    badge: 'Flaky & Insane 🥐',
    badgeClass: 'viral',
    dietary: ['top-pick'],
    vibeScore: 'Zero Sharing Policy',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm15',
    name: 'Core Memory Grilled Cheese',
    category: 'eats',
    price: '$11.75',
    rawPrice: 11.75,
    quote: '"The ultimate cheese pull that rewires your brain forever"',
    description: 'Artisanal brioche bread toasted golden with butter, filled with sharp cheddar, cave-aged Gruyère & melted brie, hot honey, served with tomato basil bisque dip.',
    badge: 'Cheese Pull 🧀',
    badgeClass: 'viral',
    dietary: ['top-pick'],
    vibeScore: 'Nostalgia: 10/10',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm16',
    name: 'Girl Dinner Grazing Board',
    category: 'eats',
    price: '$14.00',
    rawPrice: 14.00,
    quote: '"An unhinged assortment of random delicious things that somehow slaps"',
    description: 'Mini cream-filled burrata ball, prosciutto ribbons, spiced Castelvetrano olives, truffle seeded crisps, white truffle honey, and pickled green grapes.',
    badge: 'Aesthetic Grazing 🍇',
    badgeClass: 'aesthetic',
    dietary: ['gf'],
    vibeScore: 'No Cooking Tonight',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm17',
    name: 'Truffle Shuffle Fries',
    category: 'eats',
    price: '$8.50',
    rawPrice: 8.50,
    quote: '"Skin-on fries tossed in white truffle oil that vanish in 90 seconds"',
    description: 'Triple-cooked hand-cut Idaho potatoes, infused white truffle oil, freshly microplaned 24-month Parmigiano-Reggiano, with garlic chive aioli.',
    badge: 'Dangerously Addictive 🍟',
    badgeClass: 'staff-pick',
    dietary: ['gf', 'high-energy'],
    vibeScore: 'Cravings: Cured',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80'
  },

  // --- SWEET ERAS ---
  {
    id: 'm18',
    name: 'Era of Softness Soufflé',
    category: 'sweets',
    price: '$13.00',
    rawPrice: 13.00,
    quote: '"Jiggles when you move the plate. Lighter than your study anxiety"',
    description: 'Double-stacked fluffy Tokyo-style soufflé pancakes with salted honeycomb whipped butter, organic maple mist, and fresh wild blackberries.',
    badge: 'Cloud Level 🥞',
    badgeClass: 'viral',
    dietary: ['top-pick'],
    vibeScore: 'Fluffiness: Maximum',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm19',
    name: 'Red Flag Brownie',
    category: 'sweets',
    price: '$7.50',
    rawPrice: 7.50,
    quote: '"You know it is toxic and rich, but you keep going back for more"',
    description: 'Warm, gooey molten Belgian dark chocolate fudge brownie topped with sea salt flakes, tart raspberry reduction, and Madagascar vanilla bean gelato.',
    badge: 'Guilty Pleasure 🍫',
    badgeClass: 'staff-pick',
    dietary: ['top-pick', 'gf'],
    vibeScore: 'Regret: None',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm20',
    name: 'Midnight Scroll Cookie',
    category: 'sweets',
    price: '$5.50',
    rawPrice: 5.50,
    quote: '"The heavy, warm cookie made exclusively for 1:00 AM doomscrolling"',
    description: 'Thick New York style cookie loaded with chopped dark chocolate chunks, stuffed with warm Nutella lava, and sprinkled with Maldon crystal salt.',
    badge: 'Chunky & Molten 🍪',
    badgeClass: 'viral',
    dietary: ['high-energy'],
    vibeScore: 'Comfort: 1000%',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm21',
    name: 'Croffle In My Feelings',
    category: 'sweets',
    price: '$8.75',
    rawPrice: 8.75,
    quote: '"Croissant turned waffle because choosing just one pastry is impossible"',
    description: 'Crispy caramelized pressed croissant waffle loaded with melted Lotus Biscoff speculoos spread, caramelized banana slices, and cinnamon crema.',
    badge: 'Crispy & Chewy 🧇',
    badgeClass: 'aesthetic',
    dietary: ['top-pick'],
    vibeScore: 'Mood: Euphoric',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80'
  }
];

// Era / Mood Recommendations Configuration
const ERA_CONFIGS = {
  lockin: {
    title: 'The "Finals Season / Academic Weapon" Combo',
    desc: 'Quad-shot "Overthinking at 2 AM" paired with the "Core Memory Grilled Cheese". Extreme brain fuel for 6-hour focus sprints.',
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80',
    tag: '⚡ 400mg Caffeine + Comfort Carbs',
    items: ['m3', 'm15']
  },
  romantic: {
    title: 'The "Main Character in Paris" Aesthetic Duo',
    desc: 'The viral "Iced Matcha Cloud 9" with fresh strawberry cold foam + the buttery "Side Eye Pistachio Croissant".',
    img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80',
    tag: '📸 100% Guaranteed Insta Story',
    items: ['m7', 'm14']
  },
  sleepdeprived: {
    title: 'The "Running on 3 Hours of Sleep" Emergency Kit',
    desc: 'The "Main Character Energy" double-shot cortado alongside piping hot "Truffle Shuffle Fries" to revive your soul.',
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80',
    tag: '💀 Resurrecting from the dead',
    items: ['m1', 'm17']
  },
  cleangirl: {
    title: 'The "Clean Girl / Glow Up" Serenity Set',
    desc: 'The chilled botanical "Clean Girl Aesthetic Tea" with edible blooms + the crunchy "Smashed & Unbothered" avocado sourdough.',
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80',
    tag: '✨ Hydrated, Focused & Glowing',
    items: ['m8', 'm12']
  },
  heartbroken: {
    title: 'The "Heartbroken & Emotionally Petty" Cure',
    desc: 'The warm molten "Red Flag Brownie" + refreshing sparkling "Delulu Lemon Cold Brew". Sweet revenge in culinary form.',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80',
    tag: '💔 You deserve better anyway',
    items: ['m19', 'm2']
  }
};

// Global App State
let state = {
  cart: [],
  activeCategory: 'all',
  activeDietary: 'all',
  searchQuery: '',
  activeEra: 'lockin'
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupEventListeners();
  updateEraResult('lockin');
});

// Setup Events
function setupEventListeners() {
  // Category tabs
  const categoryTabs = document.querySelectorAll('.cat-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // Dietary filter pills
  const dietPills = document.querySelectorAll('.diet-pill');
  dietPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dietPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeDietary = pill.dataset.diet;
      renderMenu();
    });
  });

  // Search input with instant filtering
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  // Era selection chips
  const eraChips = document.querySelectorAll('.era-chip');
  eraChips.forEach(chip => {
    chip.addEventListener('click', () => {
      eraChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const eraKey = chip.dataset.era;
      state.activeEra = eraKey;
      updateEraResult(eraKey);
    });
  });

  // Cart Drawer toggles
  const cartBtn = document.getElementById('cartToggleBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const cartDrawer = document.getElementById('cartDrawer');

  if (cartBtn) cartBtn.addEventListener('click', () => openCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => openCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => openCartDrawer(false));

  // WiFi copy button
  const copyWifiBtn = document.getElementById('copyWifiBtn');
  if (copyWifiBtn) {
    copyWifiBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('icedoatlatte').then(() => {
        showToast('🔑 WiFi Password "icedoatlatte" copied!');
      }).catch(() => {
        showToast('Password is: icedoatlatte');
      });
    });
  }

  // Checkout modal close
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      document.getElementById('orderModal').classList.remove('open');
    });
  }
}

// Render Menu Items
function renderMenu() {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filteredItems = MENU_ITEMS.filter(item => {
    // Category match
    const categoryMatch = state.activeCategory === 'all' || item.category === state.activeCategory;

    // Dietary match
    const dietaryMatch = state.activeDietary === 'all' || (item.dietary && item.dietary.includes(state.activeDietary));

    // Search query match (name, description, quote, category)
    const q = state.searchQuery;
    const searchMatch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.quote.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);

    return categoryMatch && dietaryMatch && searchMatch;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">☕💔</div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.5rem;">No exact match found</h3>
        <p>No item matches your search "${state.searchQuery}". Try searching "matcha", "coffee", "cheese", or reset filters!</p>
        <button onclick="resetFilters()" style="margin-top: 1.25rem;" class="btn-secondary">Show All Goodies</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredItems.map(item => {
    const dietBadges = (item.dietary || []).map(d => {
      if (d === 'vegan') return `<span class="diet-icon-tag">🌱 Vegan</span>`;
      if (d === 'gf') return `<span class="diet-icon-tag">🌾 GF</span>`;
      if (d === 'high-energy') return `<span class="diet-icon-tag">⚡ 2x Boost</span>`;
      if (d === 'top-pick') return `<span class="diet-icon-tag">🔥 Gen Z Hit</span>`;
      return '';
    }).join('');

    return `
      <article class="menu-card" data-id="${item.id}">
        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" />
          <span class="card-badge ${item.badgeClass}">${item.badge}</span>
          <span class="price-pill">${item.price}</span>
        </div>
        <div class="card-body">
          <div class="card-header-meta">
            <span class="item-category-tag">${item.category}</span>
            <span class="vibe-rating">${item.vibeScore}</span>
          </div>
          <h3 class="item-name">${item.name}</h3>
          <p class="item-genz-quote">${item.quote}</p>
          <p class="item-desc">${item.description}</p>
          
          <div class="card-footer">
            <div class="dietary-tags-row">
              ${dietBadges}
            </div>
            <button class="add-bag-btn" onclick="addToCart('${item.id}')">
              <span>+ Add to Bag</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Reset filters
window.resetFilters = function() {
  state.activeCategory = 'all';
  state.activeDietary = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.category === 'all');
  });
  document.querySelectorAll('.diet-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.diet === 'all');
  });

  renderMenu();
};

// Era Matcher updater
function updateEraResult(eraKey) {
  const data = ERA_CONFIGS[eraKey];
  const container = document.getElementById('eraResultContainer');
  if (!data || !container) return;

  container.innerHTML = `
    <img src="${data.img}" alt="${data.title}" class="era-result-img" />
    <div class="era-result-content">
      <span class="era-pair-badge">${data.tag}</span>
      <h4>${data.title}</h4>
      <p>${data.desc}</p>
    </div>
    <div>
      <button class="btn-primary" onclick="addEraBundle('${eraKey}')" style="padding: 0.75rem 1.4rem; font-size: 0.88rem;">
        <span>✨ Add Bundle to Bag</span>
      </button>
    </div>
  `;
}

// Add Era Bundle to cart
window.addEraBundle = function(eraKey) {
  const data = ERA_CONFIGS[eraKey];
  if (!data) return;

  data.items.forEach(itemId => {
    addToCart(itemId, false);
  });
  showToast(`✨ Added "${data.title}" bundle to your bag!`);
  openCartDrawer(true);
};

// Cart Logic
window.addToCart = function(itemId, notify = true) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const existing = state.cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      rawPrice: item.rawPrice,
      image: item.image,
      qty: 1
    });
  }

  updateCartUI();
  if (notify) {
    showToast(`Added "${item.name}" to your bag ☕`);
  }
};

window.changeQty = function(itemId, delta) {
  const index = state.cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  updateCartUI();
};

function updateCartUI() {
  // Update header counter
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById('cartCountBadge');
  if (cartCountEl) {
    cartCountEl.textContent = totalCount;
  }

  // Update Drawer list
  const listEl = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const taxEl = document.getElementById('cartTax');
  const totalEl = document.getElementById('cartTotal');

  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-icon">☕✨</div>
        <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">Your bag is currently empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Tap any "+ Add to Bag" button to stock up on iced cold brews, matcha, and savory fuel!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (taxEl) taxEl.textContent = '$0.00';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  listEl.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} each</div>
      </div>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
        <span class="qty-count">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((acc, curr) => acc + (curr.rawPrice * curr.qty), 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function openCartDrawer(isOpen) {
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.toggle('open', isOpen);
    drawer.classList.toggle('open', isOpen);
  }
}

// Checkout simulation
window.handleCheckout = function() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add some treats first.');
    return;
  }

  openCartDrawer(false);

  // Generate cool random order number
  const orderNumber = '#HUB-' + Math.floor(1000 + Math.random() * 9000);
  const orderNumEl = document.getElementById('modalOrderNumber');
  if (orderNumEl) orderNumEl.textContent = orderNumber;

  // Open modal
  const modal = document.getElementById('orderModal');
  if (modal) modal.classList.add('open');

  // Reset cart
  state.cart = [];
  updateCartUI();
};

// Toast notification
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
