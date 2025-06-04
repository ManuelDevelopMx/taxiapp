// Importar funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuración de tu app Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDMCpLYCiO0eADiBMVLpto2G3BFd-s8WQ",
  authDomain: "taxiappglobal-91191.firebaseapp.com",
  projectId: "taxiappglobal-91191",
  storageBucket: "taxiappglobal-91191.appspot.com",
  messagingSenderId: "494247517856",
  appId: "1:494247517856:web:ad63b0c5f25cf0aab473c5",
  measurementId: "G-702PZ1J90V",
  databaseURL: "https://taxiappglobal-91191-default-rtdb.firebaseio.com" // <--- este es el importante
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener base de datos
const database = getDatabase(app);

// Exportar para usar en otros scripts
export { database };
