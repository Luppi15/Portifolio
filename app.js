// This file contains the main JavaScript logic for the PWA. It initializes the application, handles user interactions, and registers the service worker.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    console.log('PWA is ready!');

    // Register the service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }

    // Add any additional app initialization logic here
});