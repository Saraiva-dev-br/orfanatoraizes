// Conexão com Firebase (exemplo simplificado)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuração
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enviar doação para Firebase
document.getElementById('doacao-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const valor = document.getElementById('valor').value;
    const pagamento = document.getElementById('pagamento').value;

    try {
        await addDoc(collection(db, 'doacoes'), {
            nome,
            email,
            valor,
            pagamento,
            data: new Date()
        });
        document.getElementById('doacao-feedback').textContent = 'Doação realizada com sucesso!';
    } catch (error) {
        document.getElementById('doacao-feedback').textContent = 'Erro ao processar doação.';
    }
});

// Agendar visita no Firebase
document.getElementById('visita-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome-visita').value;
    const email = document.getElementById('email-visita').value;
    const data = document.getElementById('data').value;

    try {
        await addDoc(collection(db, 'visitas'), {
            nome,
            email,
            data
        });
        document.getElementById('visita-feedback').textContent = 'Visita agendada com sucesso!';
    } catch (error) {
        document.getElementById('visita-feedback').textContent = 'Erro ao agendar visita.';
    }
});
