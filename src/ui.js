import { isFavorite } from './favorites.js';

const destinationsGrid = document.getElementById('destinations-grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

/**
 * Creates the HTML for a single destination card.
 * @param {object} destination - The destination object.
 * @returns {string} The HTML string for the card.
 */
function createDestinationCard(destination) {
  const isSaved = isFavorite(destination.id);
  const savedClass = isSaved ? 'saved' : '';
  const heartIconPath = '/node_modules/lucide-static/icons/heart.svg';

  return `
    <div class="destination-card" data-id="${destination.id}">
      <img src="${destination.images[0]}" alt="Primary image of ${destination.name}" class="card-image">
      <div class="card-content">
        <div class="card-header">
          <div>
            <h4>${destination.name}</h4>
            <p>${destination.country}</p>
          </div>
          <button class="favorite-btn ${savedClass}" aria-label="Save to favorites">
            <img src="${heartIconPath}" alt="Favorite Icon" class="icon" />
          </button>
        </div>
        <p class="card-description">${destination.description.substring(0, 100)}...</p>
        <button class="view-details-btn">View Details &rarr;</button>
      </div>
    </div>
  `;
}

/**
 * Renders destination cards to the DOM.
 * @param {Array<object>} destinations - An array of destination objects.
 */
export function renderCards(destinations) {
  if (!destinationsGrid) return;
  destinationsGrid.innerHTML = destinations.map(createDestinationCard).join('');
}

/**
 * Updates the visual state of a favorite button on a card.
 * @param {string} destinationId - The ID of the destination.
 * @param {boolean} isSaved - Whether the destination is saved.
 */
export function updateCardFavoriteState(destinationId, isSaved) {
    const card = destinationsGrid.querySelector(`.destination-card[data-id="${destinationId}"]`);
    if (card) {
        const favButton = card.querySelector('.favorite-btn');
        if (isSaved) {
            favButton.classList.add('saved');
        } else {
            favButton.classList.remove('saved');
        }
    }
}


/**
 * Populates and opens the details modal with an image gallery.
 * @param {object} destination - The destination object to display.
 */
export function openModal(destination) {
  if (!modal || !modalBody) return;

  const thumbnailsHTML = destination.images.map((imgUrl, index) => `
    <img 
      src="${imgUrl}" 
      alt="Thumbnail of ${destination.name} ${index + 1}" 
      class="modal-thumbnail ${index === 0 ? 'active' : ''}" 
      data-src="${imgUrl}"
    >
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-gallery">
      <img src="${destination.images[0]}" alt="Image of ${destination.name}" id="modal-main-image" class="modal-main-image">
      <div class="modal-thumbnails">
        ${thumbnailsHTML}
      </div>
    </div>
    <h3>${destination.name}</h3>
    <p class="country">${destination.country}</p>
    <h4>Description</h4>
    <p>${destination.description}</p>
    <h4>Travel Tips</h4>
    <p>${destination.tips.replace(/\n/g, '<br>')}</p>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling

  // Add event listener for thumbnail clicks
  const thumbnailsContainer = modalBody.querySelector('.modal-thumbnails');
  const mainImage = modalBody.querySelector('#modal-main-image');
  
  thumbnailsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-thumbnail')) {
      const newSrc = e.target.dataset.src;
      mainImage.src = newSrc;
      
      // Update active class on thumbnails
      thumbnailsContainer.querySelector('.active')?.classList.remove('active');
      e.target.classList.add('active');
    }
  });
}

/**
 * Closes the details modal.
 */
export function closeModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scrolling
}
