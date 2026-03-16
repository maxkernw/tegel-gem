# Project: My booking app for authenticated users (typescript and scss)


## 📅 Feature: Event Booking System
- **Core Logic:** A user can only book an event if `new_event.start < existing_event.end` AND `new_event.end > existing_event.start` is false for all existing events.
- **Data Model:** Events must have `name`, `startTime` (Unix), `endTime` (Unix), and `userId`.
- **Auth Rule:** Users must be logged in (Firebase Auth) to view the calendar or attempt a booking.
This is a simple username password authentication not coupled with a google account
- **Calendar UI:** The frontend should provide a "View Model" that maps events to a 24-hour / 7-day grid.
- **Calendar Type:** Monthly Grid (7 columns).
- **Responsibility:** Generate a "Month View" object containing an array of 28-31 day objects.
- **Day Object:** Each day must contain its date and a that falls within that day.

## Technical Stack
- **Database:** Firebase Realtime Database (RTDB).
- **Schema:** Check the rtdb_schema.json to see the structure of the scehma.
- **Glue Code:** TypeScript.
- **Environment:** Firebase Emulator for local testing.

## Constraints & Rules
- **Data Integrity:** Refer to the existing RTDB JSON structure (see context) for all data models.
- **Testing Mandate:** - All logic needs test
  - All Firebase interactions must have a corresponding test using the Firebase Emulator.
- **Security:** Do not hardcode the Firebase config provided; use environment variables or a placeholder file.

## Response Style
- Provide a "Plan" before writing large code blocks.


## UI
- Make use of sass, make it possible to add ADs
- Use a lot of neon synthwave style on components
- Make smooth animations and ripple effects
- Make the website easy to use and smooth