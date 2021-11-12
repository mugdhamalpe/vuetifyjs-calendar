import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA8h3sdDPc_1vFXFbiel9erCZIkM9cUx8k",
  authDomain: "vuetifyjs-calendar.firebaseapp.com",
  projectId: "vuetifyjs-calendar",
  storageBucket: "vuetifyjs-calendar.appspot.com",
  messagingSenderId: "996375437183",
  appId: "1:996375437183:web:8632b0275fbe99e422044a"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
