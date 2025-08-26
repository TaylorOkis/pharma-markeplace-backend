import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// initialize Firebase once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
}

// Export services
const db = admin.firestore();
const auth = admin.auth();

export { db, auth, admin };
