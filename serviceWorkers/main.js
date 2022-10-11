if (navigator.serviceWorker) { 
  navigator.serviceWorker
    .register('./sw.js', { type: 'module' /* Only supported in Chrome and Edge */ })
    .then((registration) => {
    })
    .catch(console.error)
}