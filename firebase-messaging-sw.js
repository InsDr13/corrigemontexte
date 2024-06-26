import { getMessaging,onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDXOb0iC2h7u8NeqP2BGOXyg8UIuFU6w7w",
    authDomain: "corrigemontexte-b49d4.firebaseapp.com",
    projectId: "corrigemontexte-b49d4",
    storageBucket: "corrigemontexte-b49d4.appspot.com",
    messagingSenderId: "1048516464696",
    appId: "1:1048516464696:web:42023412cd3cb5d40816cd",
    measurementId: "G-ZZXP0D5PQT"
  };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
onBackgroundMessage(messaging, (payload) => {
    console.log("receiving");
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.title,
      icon: '/blue.png'
    };
  
    navigator.serviceWorker.ready.then(function(serviceWorker) {
        serviceWorker.showNotification(notificationTitle, notificationOptions);
      });
   
  });

  /* eslint-disable no-undef */

/*importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

const firebaseConfig = undefined // firebaseConfig is required

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
}). */