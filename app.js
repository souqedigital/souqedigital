// =======================
// WhatsApp number (no +, no spaces)
// =======================
const STORE_WHATSAPP = "212782901677";

// =======================
// PRODUCTS (خلي هنا products ديالك كاملين)
// IMPORTANT: category خاصها تكون: streaming | social | design
// =======================
const products = [
  // 🔥 حط هنا المنتجات ديالك (كما كانوا عندك)
  // مثال واحد:
  {
    id:"netflix",
    name:"NETFLIX",
    price:3.5,
    tag:"30 days Acont",
    category:"Most requested",
    desc:"Available",
    color:"#00ff04",
    details:"👈 في خانة ملحوظة : ضع رقم واتساب الخاص بك",
    offers:[
      { title:"NETFLIX 30 DAYS", sub:"Private account • Fast activation", price:3.5 },
    ],
    img:"https://image2url.com/r2/default/images/1771378091653-ef174194-8bb2-4bb9-bf9a-2f6b9ff07011.jpg"
  },
  { id:"spotify", name:"SPOTIFY", price:3.5, tag:"30 days Acont",
    desc:"Available",
    category:"Most requested",
    color:"#00ff04",
    details:" 👈 في خانة ملحوظة : ضع رقم واتساب الخاص بك   ",
 offers:[
      { title:"SPOTIFY 30 DAYS", sub:"Private account • Fast activation", price:3.5 },
    ],
    img:"https://image2url.com/r2/default/images/1771378213185-4a6e25db-4f1e-4a67-87d9-98aeda0ba526.png"
  },
  { id:"instagram-followers", name:"FOLLOWERS-INSTAGRAM", price:1.5, tag:"1000 Followers",
    category:"Social",
    desc:"Available",
    color: "#00ff2f",
    details:" 👈  في خانة ملحوظة : ضع رابط الصفحة/الحساب   ",
    offers:[
      { title:"مع ضمان 30 يوم", sub:"Private account • Fast activation", price:1.5 },
      { title:"مع ضمان 365 يوم", sub:"Private account • Fast activation", price:2 },
    ],
    img:"https://image2url.com/r2/default/images/1771378343460-c59582e5-0277-4852-8d6f-51a176eb6fcc.jpg"
  },
  { id:"facebook-followers", name:"FOLLOWERS-FACEBOOK", price:1.5, tag:"1000 Followers",
    desc:"Available",
    category:"Social",
    color: "#00ff2f",
    details:" 👈  في خانة ملحوظة : ضع رابط الصفحة/الحساب ",       offers:[
      { title:"مع ضمان 30 يوم", sub:"Private account • Fast activation", price:1.5 },
      { title:"مع ضمان 365 يوم", sub:"Private account • Fast activation", price:2 },
    ],
    img:"https://image2url.com/r2/default/images/1771380567868-859912da-83df-445c-b141-1469193059e9.png"
  },
    { id:"chatgbt", name:"CHATGBT 5PLUS", price:3.5, tag:"30 days Acont",
    desc:"Available",
    category:"Most requested",
    color: "#00ff2f",
    details:" 👈 في خانة ملحوظة : ضع الايميل الخاص بك   ",
       offers:[
      { title:"CHAT GPT-5 BUSINESS", sub:"يمكن دعوة 5 أشخاص", price:7 },
      { title:"CHAT GPT-5 PLUS", sub:"حساب واحد", price:3.5 },
    ],
    img:"https://image2url.com/r2/default/images/1771378038777-9e78c201-5448-44f6-94df-c6b4c91c1ec2.jpg"
  },
      { id:"vip شاهد", name:"VIP شاهد", price:2, tag:"30 days Acont",
    desc:"Available",
    category:"Most requested",
    color: "#00ff2f",
    details:" 👈 في خانة ملحوظة : ضع رقم واتساب الخاص بك   ",
        offers:[
      { title:"مع ضمان 30 يوم", sub:"Private account • Fast activation", price:2 },
      { title:"مع ضمان 90 يوم", sub:"Private account • Fast activation", price:3.5 },
      { title:"مع ضمان 180 يوم", sub:"Private account • Fast activation", price:6 },
      { title:"مع ضمان 365 يوم", sub:"Private account • Fast activation", price:12 },
    ],
    img:"https://image2url.com/r2/default/images/1771428815603-0ba94c02-3617-4ce6-b0b9-0e037fd7bf1b.png"
  },
   { id:"canva", name:"CANVA", price:1, tag:"30 days Acont",
    desc:"Available",
        category:"Design",
    color: "#00ff2f",
    details:" 👈 في خانة ملحوظة : ضع الايميل الخاص بك   ",
          offers:[
      { title:"CANVA PRO", sub:"Private account • Fast activation", price:1 },
    ],
    img:"https://image2url.com/r2/default/images/1771429130694-c30ad253-080f-4e80-9dbb-7eeaf0776f4a.jpg"
  },
     { id:"capcut pro", name:"CAPCUT PRO", price:1.5, tag:"30 days Acont",
    desc:"Available",
    color: "#00ff2f",
    details:" 👈 في خانة ملحوظة : رقم واتساب الخاص بك   ",
    offers:[
      { title:"CAPCUT PRO", sub:"Private account • Fast activation", price:1.5 },
    ],
    img:"https://image2url.com/r2/default/images/1771429817459-c8138b4b-0b90-4bd7-a985-0976695a4609.jpg"
  },
  { id:"adobe creative", name:"ADOBE CREATIVE", price:12.5, tag:"90 days Acont", 
    desc:"unavailable",
    category:"Design",
    color: "#ff0000",
    details:" 👈 في خانة ملحوظة : رقم واتساب الخاص بك   ",
            offers:[
      { title:"مع ضمان 30 يوم", sub:"Private account • Fast activation", price:12.5 },
      { title:"مع ضمان 180 يوم", sub:"Private account • Fast activation", price:22 },
      { title:"مع ضمان 365 يوم", sub:"Private account • Fast activation", price:39 },
    ],
    img:"https://image2url.com/r2/default/images/1771430206714-6bd6359a-a503-4322-9098-5b4b1e1a8e50.jpg"
  },
    { id:"gemini", name:"GEMINI 3 PRO + VEO 3", price:6.5, tag:"1 ANS Acont", 
    desc:"Available",
    color: "#4dff00",
    details:" 👈 في خانة ملحوظة : رقم واتساب الخاص بك   ",            offers:[
      { title:"يوم 365", sub:"Private account • Fast activation", price:6 },
    ],
    img:"https://image2url.com/r2/default/images/1771430681556-f7d1846b-f970-4830-9464-1db51e1c8326.png"
  },
      { id:"free fire", name:"FREE FIRE", price:1.4, tag:"game", 
    desc:"Available",
   category:"game",
    color: "#4dff00",
    details:" 👈 في خانة ملحوظة : الأيدي خاص بك الخاص بك   ",           
     offers:[
      { title:"100 جوهر ", sub:"Private account • Fast activation", price:1.4 },
      { title:"210 جوهر ", sub:"Private account • Fast activation", price:2.5},
            { title:"530 جوهر ", sub:"Private account • Fast activation", price:5.9 },
    ],
    img:"https://image2url.com/r2/default/images/1771527420240-c5a195c0-cbe0-46bd-b36d-702b28ba2183.jpg"
  },
];

// =======================
// Helpers
// =======================
const $ = (sel) => document.querySelector(sel);
const money = (n) => `$${Number(n).toFixed(2)}`;

let toastTimer = null;
function showToast(msg){
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove("show"), 1500);
}

function generateOrderId(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `VX-${yyyy}${mm}${dd}-${rand}`;
}

function openWhatsApp(message){
  const url = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function buildWhatsAppMessage({ orderId, product, offer, qty, fullName, email, phone, note }){
  const unit = offer?.price ?? product.price;
  const total = unit * qty;

  return [
    "🧾 *NEW ORDER*",
    `ID Ordre: *${orderId}*`,
    "----------------------",
    `Product: *${product.name}*`,
    `Offer: *${offer ? offer.title : "-"}*`,
    `Offer Price: *${offer ? money(offer.price) : money(product.price)}*`,
    `Quantity: *${qty}*`,
    `Total Price: *${money(total)}*`,
    "----------------------",
    `Full name: ${fullName}`,
    `Gmail: ${email}`,
    `Number: ${phone}`,
    `Note: ${note ? note : "-"}`,
    "----------------------",
    `Date: ${new Date().toLocaleString()}`
  ].join("\n");
}

// normalize (حل نهائي ديال category mismatch)
function norm(s){
  return String(s ?? "").toLowerCase().trim();
}

// =======================
// HOME: render products
// =======================
function renderProducts(list){
  const gridEl = $("#productGrid");
  if (!gridEl) return;

  if (!list.length){
    gridEl.innerHTML = `
      <div class="muted" style="padding:14px;border:1px solid rgba(72,213,255,.14);border-radius:16px;background:rgba(255,255,255,.03);">
        No products found.
      </div>
    `;
    return;
  }

  gridEl.innerHTML = list.map(p => {
    const isUnavailable = norm(p.desc).includes("unavailable");
    const btnClass = isUnavailable ? "btn primary disabled" : "btn primary";
    const btnText = isUnavailable ? "Unavailable" : "Order";
    const btnHref = isUnavailable ? "#" : `product.html?id=${encodeURIComponent(p.id)}`;

    return `
      <article class="card" style="border:2px solid ${p.color}">
        <img class="card__img" src="${p.img}" alt="${p.name}" />
        <div class="card__body">
          <div class="card__row">
            <h4 class="card__title">${p.name}</h4>
            <span class="tag">${p.tag || ""}</span>
          </div>
          <p class="card__desc" style="color:${p.color}">${p.desc || ""}</p>
          <div class="card__row">
            <div class="price">${money(p.price)}</div>
            <div class="card__actions">
              <a class="${btnClass}" href="${btnHref}">${btnText}</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  gridEl.querySelectorAll("a.disabled").forEach(a=>{
    a.addEventListener("click",(e)=>{
      e.preventDefault();
      showToast("This product is unavailable.");
    });
  });
}

function initHome(){
  const gridEl = $("#productGrid");
  if (!gridEl) return;
  renderProducts(products);

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// =======================
// FILTERS
// =======================
function initFilters(){
  const searchInput = $("#searchInput");
  const catButtons = document.querySelectorAll(".cat-btn");
  const gridEl = $("#productGrid");
  if (!searchInput || !gridEl || !catButtons.length) return;

  let currentCategory = "all";
  let currentSearch = "";

  const apply = () => {
    const filtered = products.filter(p => {
      const pCat = norm(p.category);
      const byCat = currentCategory === "all" || pCat === currentCategory;
      const bySearch = norm(p.name).includes(norm(currentSearch));
      return byCat && bySearch;
    });
    renderProducts(filtered);
  };

  searchInput.addEventListener("input", (e)=>{
    currentSearch = e.target.value || "";
    apply();
  });

  catButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      catButtons.forEach(b=> b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = norm(btn.dataset.cat || "all");
      apply();
    });
  });

  // إذا كانت شي button active فـ HTML (مثلاً streaming)، نخدم بها مباشرة
  const activeBtn = document.querySelector(".cat-btn.active");
  if (activeBtn) currentCategory = norm(activeBtn.dataset.cat || "all");
  apply();
}

// =======================
// PRODUCT PAGE (زر واحد + عروض طوال + collapse animation)
// =======================
function initProductPage(){
  const holder = $("#productPage");
  if (!holder) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = products.find(x => x.id === id);

  if (!p){
    holder.innerHTML = `<div class="product-info"><h2>Product not found</h2></div>`;
    return;
  }

  holder.innerHTML = `
    <div class="product-media">
      <img src="${p.img}" alt="${p.name}">
    </div>

    <div class="product-info">
      <h2 class="product-title">${p.name}</h2>
      <div class="product-price">${money(p.price)}</div>

      <div class="product-meta">
        <span>${p.tag || ""}</span>
        <span>Digital</span>
        <span>${p.category || ""}</span>
      </div>

      <p class="muted">${p.details || ""}</p>

      <form class="form" id="orderForm">
        <div>
          <div class="label">Full name</div>
          <input class="input" id="fullName" required placeholder="Your full name" />
        </div>

        <div>
          <div class="label">Gmail</div>
          <input class="input" id="email" type="email" required placeholder="example@gmail.com" />
        </div>

        <div>
          <div class="label">Number</div>
          <input class="input" id="phone" required placeholder="06xxxxxxxx" />
        </div>

        <div>
        <div class="label">offre</div>
          <button type="button" class="btn primary" id="offerBtn">اختار العرض</button>
          <div class="offer-collapse" id="offersBox"></div>
        </div>

        <div>
          <div class="label">Quantity</div>
          <div class="qty-controls">
            <button class="qty-btn" type="button" id="decQty">-</button>
            <input class="input qty-input" id="qtyInput" type="number" min="1" value="1" />
            <button class="qty-btn" type="button" id="incQty">+</button>
          </div>
        </div>

        <div>
          <div class="label">Note</div>
          <textarea class="textarea" id="note" placeholder="Any note... (optional)"></textarea>
        </div>

        <button class="btn primary" type="submit">Send order on WhatsApp</button>
      </form>
    </div>
  `;

  const qtyInput = $("#qtyInput");
  $("#incQty").addEventListener("click", ()=> qtyInput.value = String((parseInt(qtyInput.value,10)||1)+1));
  $("#decQty").addEventListener("click", ()=> qtyInput.value = String(Math.max(1,(parseInt(qtyInput.value,10)||1)-1)));

  const offerBtn = $("#offerBtn");
  const offersBox = $("#offersBox");
  let selectedOfferIndex = null;

  function openOffers(){
  offersBox.classList.add("open");
  offerBtn.classList.add("open");
}
function closeOffers(){
  offersBox.classList.remove("open");
  offerBtn.classList.remove("open");
}


  offerBtn.addEventListener("click", ()=>{
    if (offersBox.classList.contains("open")) closeOffers();
    else openOffers();
  });

  function renderOffers(){
    offersBox.innerHTML = (p.offers || []).map((o,i)=>`
      <button type="button" class="offer-row ${selectedOfferIndex===i ? "selected" : ""}" data-idx="${i}">
        <div class="offer-left">
          <div class="offer-title">${o.title}</div>
          <div class="offer-sub">${o.sub || ""}</div>
        </div>
        <div class="offer-price">${money(o.price)}</div>
      </button>
    `).join("");

    offersBox.querySelectorAll("[data-idx]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        selectedOfferIndex = parseInt(btn.getAttribute("data-idx"), 10);
        const chosen = p.offers[selectedOfferIndex];
        offerBtn.textContent = `${chosen.title} — ${money(chosen.price)}`;
        closeOffers();
        renderOffers();
      });
    });
  }

  renderOffers();

  $("#orderForm").addEventListener("submit", (e)=>{
    e.preventDefault();

    if (selectedOfferIndex === null){
      showToast("خصك تختار عرض ✅");
      openOffers();
      return;
    }

    const fullName = $("#fullName").value.trim();
    const email = $("#email").value.trim();
    const phone = $("#phone").value.trim();
    const note = $("#note").value.trim();
    const qty = Math.max(1, parseInt(qtyInput.value,10)||1);

    if (!fullName || !email || !phone){
      showToast("Fill Full name, Gmail, and Number.");
      return;
    }

    const offer = p.offers[selectedOfferIndex];
    const orderId = generateOrderId();
    const msg = buildWhatsAppMessage({ orderId, product:p, offer, qty, fullName, email, phone, note });

    showToast("Opening WhatsApp… ✅");
    openWhatsApp(msg);
  });
}

// =======================
// INIT (safe)
// =======================
document.addEventListener("DOMContentLoaded", ()=>{
  initHome();
  initFilters();
  initProductPage();
});





