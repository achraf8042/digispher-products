/**
 * DigiSpher Sales Page Interactive Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky CTA Bar on Scroll
  const stickyBar = document.getElementById('stickyCtaBar');
  const heroSection = document.querySelector('.hero-section');

  if (stickyBar && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 100) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }

  // 2. Interactive SOP Checklists
  document.querySelectorAll('.interactive-check-item').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      item.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        item.classList.toggle('completed', checkbox.checked);
      });
      checkbox.addEventListener('change', () => {
        item.classList.toggle('completed', checkbox.checked);
      });
    }
  });

  // 3. BLUF Sample Interactive Toggle
  const blufToggleBtn = document.getElementById('toggleBlufBtn');
  const blufBeforeCard = document.getElementById('blufBeforeCard');
  const blufAfterCard = document.getElementById('blufAfterCard');

  if (blufToggleBtn && blufBeforeCard && blufAfterCard) {
    let isAfter = true;
    blufToggleBtn.addEventListener('click', () => {
      isAfter = !isAfter;
      if (isAfter) {
        blufBeforeCard.classList.add('d-none');
        blufAfterCard.classList.remove('d-none');
        blufToggleBtn.innerHTML = '<i class="bi bi-arrow-left-right me-2"></i>Show Traditional SEO (Before)';
        blufToggleBtn.classList.replace('btn-outline-warning', 'btn-ds-outline');
      } else {
        blufBeforeCard.classList.remove('d-none');
        blufAfterCard.classList.add('d-none');
        blufToggleBtn.innerHTML = '<i class="bi bi-arrow-left-right me-2"></i>Show GEO Extractable Format (After)';
        blufToggleBtn.classList.replace('btn-ds-outline', 'btn-outline-warning');
      }
    });
  }

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
