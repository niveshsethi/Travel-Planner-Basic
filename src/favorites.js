const FAVORITES_KEY = 'voyageVistaFavorites';

/**
 * Retrieves favorite destination IDs from local storage.
 * @returns {Array<string>} An array of favorite IDs.
 */
export function getFavorites() {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

/**
 * Saves an array of favorite IDs to local storage.
 * @param {Array<string>} favorites - The array of favorite IDs to save.
 */
function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * Checks if a destination is in the favorites list.
 * @param {string} destinationId - The ID of the destination.
 * @returns {boolean} True if the destination is a favorite.
 */
export function isFavorite(destinationId) {
  const favorites = getFavorites();
  return favorites.includes(destinationId);
}

/**
 * Adds or removes a destination from the favorites list.
 * @param {string} destinationId - The ID of the destination to toggle.
 */
export function toggleFavorite(destinationId) {
  let favorites = getFavorites();
  const index = favorites.indexOf(destinationId);

  if (index > -1) {
    // Remove from favorites
    favorites.splice(index, 1);
  } else {
    // Add to favorites
    favorites.push(destinationId);
  }

  saveFavorites(favorites);
}
