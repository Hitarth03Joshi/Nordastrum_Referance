/**
 * NORDASTRUM Petrochemicals & Advanced Materials
 * Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroFlagships();
  initProductCatalog();
  initTdsModal();
  initRfqCalculator();
  initInfrastructureTabs();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileBtn.innerHTML = '☰';
      });
    });
  }
}

/* ==========================================================================
   2. HERO FLAGSHIP QUICK SELECTION
   ========================================================================== */
function initHeroFlagships() {
  const container = document.getElementById('heroFlagshipList');
  const products = window.PETROCHEMICAL_PRODUCTS || [];
  if (!container || products.length === 0) return;

  const flagships = products.slice(0, 4);
  container.innerHTML = flagships.map(p => `
    <div class="flagship-item" onclick="openProductTds('${p.id}')">
      <div class="flagship-info">
        <h4>${p.name}</h4>
        <p>${p.formula} | CAS: ${p.cas}</p>
      </div>
      <div class="flagship-badge">${p.purity}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. PRODUCT CATALOG & REAL-TIME FILTERING
   ========================================================================== */
let currentCategory = 'all';
let searchQuery = '';

function initProductCatalog() {
  const grid = document.getElementById('productsGrid');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('productSearchInput');
  const products = window.PETROCHEMICAL_PRODUCTS || [];

  if (!grid) return;

  function render() {
    const filtered = products.filter(item => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      const matchSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery) ||
        item.cas.toLowerCase().includes(searchQuery) ||
        item.formula.toLowerCase().includes(searchQuery) ||
        item.categoryName.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 14px; border: 1px solid var(--color-border-light);">
          <h3 style="font-family: var(--font-heading); color: var(--color-deep-plum); margin-bottom: 8px;">No Chemical Formulations Found</h3>
          <p style="color: var(--color-text-muted);">Try adjusting your search criteria or filter tabs.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="product-card" id="card-${item.id}">
        <div>
          <div class="product-card-header">
            <span class="product-category-tag">${item.categoryName}</span>
            <span class="product-cas-tag">CAS ${item.cas}</span>
          </div>
          <h3 class="product-title">${item.name}</h3>
          <div class="product-formula">Molecular: ${item.formula}</div>
          <p class="product-description-short">${item.description}</p>
          
          <table class="product-specs-table">
            <tr>
              <td>Purity Standard</td>
              <td>${item.purity}</td>
            </tr>
            <tr>
              <td>Density / Viscosity</td>
              <td>${item.density}</td>
            </tr>
            <tr>
              <td>Boiling / Melt Temp</td>
              <td>${item.boilingPoint}</td>
            </tr>
            <tr>
              <td>Testing Methods</td>
              <td>${item.astmStandards}</td>
            </tr>
          </table>
        </div>

        <div class="product-card-actions">
          <button class="btn btn-outline-dark btn-sm" onclick="openProductTds('${item.id}')">
            <span>📄 TDS Specs</span>
          </button>
          <button class="btn btn-gold btn-sm" onclick="selectForRfq('${item.id}')">
            <span>+ Add to RFQ</span>
          </button>
        </div>
      </div>
    `).join('');
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

/* ==========================================================================
   4. TECHNICAL DATA SHEET (TDS) MODAL DRAWER
   ========================================================================== */
function initTdsModal() {
  const modal = document.getElementById('tdsModal');
  const closeBtn = document.getElementById('closeTdsModal');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

window.openProductTds = function(productId) {
  const modal = document.getElementById('tdsModal');
  const products = window.PETROCHEMICAL_PRODUCTS || [];
  if (!modal || products.length === 0) return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('tdsTitle').innerText = product.name;
  document.getElementById('tdsFormulaCas').innerText = `${product.formula} • CAS: ${product.cas} • Category: ${product.categoryName}`;
  document.getElementById('tdsDescription').innerText = product.description;

  document.getElementById('tdsPurity').innerText = product.purity;
  document.getElementById('tdsAppearance').innerText = product.appearance;
  document.getElementById('tdsDensity').innerText = product.density;
  document.getElementById('tdsBoilingPoint').innerText = product.boilingPoint;
  document.getElementById('tdsFlashPoint').innerText = product.flashPoint;
  document.getElementById('tdsAstm').innerText = product.astmStandards;

  const appContainer = document.getElementById('tdsApplications');
  appContainer.innerHTML = product.applications.map(app => `<span class="tds-app-pill">${app}</span>`).join('');

  const packContainer = document.getElementById('tdsPackaging');
  packContainer.innerHTML = product.packaging.map(pk => `<span class="tds-app-pill" style="background:#EBF3F8;">📦 ${pk}</span>`).join('');

  const rfqBtn = document.getElementById('tdsRfqAction');
  if (rfqBtn) {
    rfqBtn.onclick = () => {
      modal.classList.remove('active');
      selectForRfq(product.id);
    };
  }

  const downloadBtn = document.getElementById('tdsDownloadBtn');
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      simulateDownloadTds(product.name);
    };
  }

  modal.classList.add('active');
};

function simulateDownloadTds(productName) {
  const alertBox = document.createElement('div');
  alertBox.style.position = 'fixed';
  alertBox.style.bottom = '30px';
  alertBox.style.right = '30px';
  alertBox.style.backgroundColor = '#30253D';
  alertBox.style.color = '#F7F7F5';
  alertBox.style.border = '1px solid #B89A68';
  alertBox.style.borderRadius = '8px';
  alertBox.style.padding = '16px 24px';
  alertBox.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
  alertBox.style.zIndex = '3000';
  alertBox.style.fontFamily = 'var(--font-heading)';
  alertBox.innerHTML = `<strong>✓ Technical Data Sheet Generated:</strong><br><span style="color:#B89A68;">${productName}_Specification_TDS.pdf</span>`;
  
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.style.opacity = '0';
    alertBox.style.transition = 'opacity 0.5s';
    setTimeout(() => alertBox.remove(), 500);
  }, 3500);
}

/* ==========================================================================
   5. INTERACTIVE RFQ (REQUEST FOR QUOTE) CALCULATOR
   ========================================================================== */
function initRfqCalculator() {
  const selectProduct = document.getElementById('rfqProduct');
  const tonnageSlider = document.getElementById('rfqTonnageSlider');
  const tonnageDisplay = document.getElementById('rfqTonnageDisplay');
  const portSelect = document.getElementById('rfqPort');
  const packagingRadios = document.querySelectorAll('.packaging-option-card');
  const quoteForm = document.getElementById('rfqForm');

  // Summary Elements
  const summaryProduct = document.getElementById('summaryProduct');
  const summaryVolume = document.getElementById('summaryVolume');
  const summaryPackaging = document.getElementById('summaryPackaging');
  const summaryPort = document.getElementById('summaryPort');
  const summaryDeliveryEst = document.getElementById('summaryDeliveryEst');
  const summaryIncoterm = document.getElementById('summaryIncoterm');

  const products = window.PETROCHEMICAL_PRODUCTS || [];
  const hubs = window.LOGISTICS_HUBS || [];

  if (!selectProduct || !tonnageSlider || products.length === 0) return;

  // Populate Products Dropdown
  selectProduct.innerHTML = products.map(p => `
    <option value="${p.id}">${p.name} (${p.categoryName})</option>
  `).join('');

  // Populate Ports Dropdown if hubs exist
  if (portSelect && hubs.length > 0) {
    portSelect.innerHTML = hubs.map(h => `
      <option value="${h.id}">${h.name}</option>
    `).join('');
  }

  let selectedPackaging = "Bulk ISO Tank Containers";

  function updateSummary() {
    const prodId = selectProduct.value;
    const prod = products.find(p => p.id === prodId) || products[0];
    const tons = tonnageSlider.value;
    const selectedPortText = portSelect && portSelect.options.length > 0 && portSelect.selectedIndex >= 0 
      ? portSelect.options[portSelect.selectedIndex].text 
      : "Port of Rotterdam (ARA Hub)";

    if (tonnageDisplay) tonnageDisplay.innerText = `${parseInt(tons).toLocaleString()} MT`;
    if (summaryProduct) summaryProduct.innerText = prod ? prod.name : "Polymer-Grade Ethylene";
    if (summaryVolume) summaryVolume.innerText = `${parseInt(tons).toLocaleString()} Metric Tons`;
    if (summaryPackaging) summaryPackaging.innerText = selectedPackaging;
    if (summaryPort) summaryPort.innerText = selectedPortText;

    // Dynamic shipping estimate based on port
    let est = "7 - 12 Business Days";
    let incoterm = "CIF Port Delivery";
    if (selectedPortText.includes("Houston") || selectedPortText.includes("Rotterdam")) {
      est = "5 - 8 Business Days";
      incoterm = "FOB / CIF Terminal";
    } else if (selectedPortText.includes("Singapore") || selectedPortText.includes("Fujairah")) {
      est = "4 - 9 Business Days";
      incoterm = "CIF Deepwater Jetty";
    }

    if (summaryDeliveryEst) summaryDeliveryEst.innerText = est;
    if (summaryIncoterm) summaryIncoterm.innerText = incoterm;
  }

  tonnageSlider.addEventListener('input', updateSummary);
  selectProduct.addEventListener('change', updateSummary);
  if (portSelect) portSelect.addEventListener('change', updateSummary);

  packagingRadios.forEach(card => {
    card.addEventListener('click', () => {
      packagingRadios.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedPackaging = radio.value;
        updateSummary();
      }
    });
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tons = tonnageSlider.value;
      const prodName = summaryProduct ? summaryProduct.innerText : 'Ethylene';
      const clientEmail = document.getElementById('rfqEmail').value || 'commercial@nordastrum.com';

      alert(`Official RFQ Transmitted!\n\nNordastrum Commercial Desk will dispatch formal CIF contract pricing for ${parseInt(tons).toLocaleString()} MT of ${prodName} to ${clientEmail} within 2 business hours.`);
    });
  }

  updateSummary();
}

window.selectForRfq = function(productId) {
  const rfqSection = document.getElementById('rfq');
  const selectProduct = document.getElementById('rfqProduct');

  if (selectProduct) {
    selectProduct.value = productId;
    selectProduct.dispatchEvent(new Event('change'));
  }

  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   6. REFINING & INFRASTRUCTURE TABS
   ========================================================================== */
function initInfrastructureTabs() {
  const tabBtns = document.querySelectorAll('.infra-tab-btn');
  const panes = document.querySelectorAll('.infra-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. SMOOTH SCROLLING
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
