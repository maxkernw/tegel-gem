import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, ref, onValue, push, set, remove, connectDatabaseEmulator } from "firebase/database";
import { Event, ChalkLine } from './types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

if (import.meta.env.DEV) {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectDatabaseEmulator(db, "127.0.0.1", 9000);
}

export function subscribeToEvents(callback: (events: Event[]) => void) {
  const eventsRef = ref(db, 'events');
  return onValue(eventsRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback([]);
      return;
    }
    const events: Event[] = Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
    callback(events);
  });
}

export async function addEvent(event: Omit<Event, 'id'>) {
  const eventsRef = ref(db, 'events');
  const newEventRef = push(eventsRef);
  return set(newEventRef, event);
}

export async function deleteEvent(eventId: string) {
  const eventRef = ref(db, `events/${eventId}`);
  return set(eventRef, null);
}

export async function deleteMultipleEvents(eventIds: string[]) {
  const promises = eventIds.map(id => deleteEvent(id));
  return Promise.all(promises);
}

export function subscribeToChalkboard(callback: (lines: ChalkLine[]) => void) {
  const linesRef = ref(db, 'chalkboard');
  return onValue(linesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback([]);
      return;
    }
    const lines: ChalkLine[] = Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
    callback(lines);
  });
}

export async function addChalkLine(line: Omit<ChalkLine, 'id'>) {
  const linesRef = ref(db, 'chalkboard');
  const newLineRef = push(linesRef);
  return set(newLineRef, line);
}

export async function clearChalkboard() {
  const linesRef = ref(db, 'chalkboard');
  return remove(linesRef);
}
