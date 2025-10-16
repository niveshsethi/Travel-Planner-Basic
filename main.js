import { generateDestinations } from './src/data.js';
import { renderCards, openModal, closeModal, updateCardFavoriteState } from './src/ui.js';
import { getFavorites, toggleFavorite, isFavorite } from './src/favorites.js';

document.addEventListener('DOMContentLoaded', () => {
  const allDestinations = generateDestinations();
  let currentFilter = 'all'; // 'all' or 'favorites'

  const searchInput = document.getElementById('search-input');
  const destinationsGrid = document.getElementById('destinations-grid');
  const modal = document.getElementById('modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const favoritesBtn = document.getElementById('favorites-btn');
  const showAllBtn = document.getElementById('show-all-btn');
  const noResultsEl = document.getElementById('no-results');
  const sectionTitle = document.getElementById('section-title');

  const renderFilteredDestinations = () => {
    const searchTerm = searchInput.value.toLowerCase();
    let destinationsToRender = allDestinations;

    if (currentFilter === 'favorites') {
      const favoriteIds = getFavorites();
      destinationsToRender = allDestinations.filter(d => favoriteIds.includes(d.id));
      sectionTitle.textContent = 'Your Favorites';
      favoritesBtn.classList.add('active');
      showAllBtn.classList.remove('active');
    } else {
      sectionTitle.textContent = 'Popular Destinations';
      favoritesBtn.classList.remove('active');
      showAllBtn.classList.add('active');
    }

    const filteredBySearch = destinationsToRender.filter(
      dest =>
        dest.name.toLowerCase().includes(searchTerm) ||
        dest.country.toLowerCase().includes(searchTerm)
    );

    if (filteredBySearch.length > 0) {
        renderCards(filteredBySearch);
        noResultsEl.classList.add('hidden');
    } else {
        destinationsGrid.innerHTML = '';
        noResultsEl.classList.remove('hidden');
    }
  };

  // --- Event Listeners ---

  searchInput.addEventListener('input', renderFilteredDestinations);

  favoritesBtn.addEventListener('click', () => {
    currentFilter = 'favorites';
    renderFilteredDestinations();
  });

  showAllBtn.addEventListener('click', () => {
    currentFilter = 'all';
    renderFilteredDestinations();
  });

  destinationsGrid.addEventListener('click', e => {
    const card = e.target.closest('.destination-card');
    if (!card) return;

    const destinationId = card.dataset.id;
    const destination = allDestinations.find(d => d.id === destinationId);

    if (e.target.closest('.favorite-btn')) {
      toggleFavorite(destinationId);
      updateCardFavoriteState(destinationId, isFavorite(destinationId));
      if (currentFilter === 'favorites') {
          renderFilteredDestinations();
      }
    } else {
      openModal(destination);
    }
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);

  // --- Initial Render ---
  renderFilteredDestinations();
});
