function markClickbaitVideos() {
  const thumbnails = document.querySelectorAll(
    'ytd-thumbnail-overlay-now-playing-renderer, ytd-thumbnail-overlay-playlist-renderer'
  );

  thumbnails.forEach((thumbnail) => {
    const thumbnailImage = thumbnail.querySelector('img');

    if (thumbnailImage && isClickbaitThumbnail(thumbnailImage)) {
      thumbnail.style.border = '3px solid red';
    }
  });
}

function isClickbaitThumbnail(thumbnailImage) {
  const title = thumbnailImage.getAttribute('alt').toLowerCase();
  const clickbaitPhrases = ['will shock you', 'satisfying', 'scary and creepy'];
  return clickbaitPhrases.some((phrase) => title.includes(phrase));
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'markClickbait') {
    markClickbaitVideos();
    sendResponse({ message: 'Clickbait videos marked.' });
  }
});
