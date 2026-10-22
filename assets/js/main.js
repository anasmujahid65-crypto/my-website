// KHALIS BAZAAR INTERACTIVE SCRIPTS
document.addEventListener('DOMContentLoaded', function() {
  console.log('⚡ Khalis Bazaar Live Store Initialized');
  
  // Cart Drawer Elements
  window.openCartDrawer = function() {
    var drawer = document.getElementById('cart-drawer');
    var backdrop = document.getElementById('cart-drawer-backdrop');
    var panel = document.getElementById('cart-drawer-panel');
    if (!drawer || !backdrop || !panel) return;
    drawer.classList.remove('pointer-events-none');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
  };

  window.closeCartDrawer = function() {
    var drawer = document.getElementById('cart-drawer');
    var backdrop = document.getElementById('cart-drawer-backdrop');
    var panel = document.getElementById('cart-drawer-panel');
    if (!drawer || !backdrop || !panel) return;
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
    setTimeout(function() {
      drawer.classList.add('pointer-events-none');
    }, 300);
  };

  // Wire up all cart trigger buttons
  var cartTriggers = document.querySelectorAll('[data-pf-overlay="cart-drawer"], .cart-toggle-btn');
  cartTriggers.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      if (document.body.classList.contains('pf-edit-active')) {
        return;
      }
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Mobile navigation toggle
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
