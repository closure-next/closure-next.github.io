if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker successfully registered:', registration);
      })
      .catch((error) => {
        console.log('Failed to register Service Worker:', error);
      });
  });
}
