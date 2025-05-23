# 🧭 User Profile Map Viewer

This is a **React-based web application** that displays a list of user profiles and integrates a dynamic map to show the selected user's location. The app includes admin features for managing profiles and uses Leaflet for mapping.

> ⚠️ **Note:** The package `react-loader-spinner` is currently not compatible with React v19. This caused deployment issues. A working video demo is provided below instead.

---

## 🚀 Features ✅

### 🖼️ 1. Profile Display
- Grid of user profiles.
- Each profile shows:
  - Name
  - Photo
  - Short description

### 🗺️ 2. Interactive Mapping
- Integrated **Leaflet map**.
- Updates dynamically based on user interaction.

### 📍 3. "Summary" Button
- Each profile has a **"Summary" button**.
- When clicked:
  - Displays the map
  - Shows a marker on the user’s location

### 🌐 4. Map Service Integration
- Uses **OpenStreetMap** via Leaflet.
- Marker accurately shows location using coordinates.

### 😊 5. User-Friendly UI
- Clean and minimal design
- Smooth user experience

### 🛠️ 6. Admin Panel for Profile Management
- Add, edit, or delete profiles
- Accessible through a separate dashboard

### 🔍 7. Search and Filter
- Filter profiles by:
  - Name
  - Location
  - Tags (if any)

### 📱 8. Responsive Design
- Fully responsive on:
  - Mobile
  - Tablet
  - Desktop

### ⚠️ 9. Error Handling
- Friendly error messages for:
  - Invalid coordinates
  - Map loading failures

### 🔄 10. Loading Indicators
- Loader shown during:
  - Profile fetch
  - Map updates

### 🧾 11. Profile Details Page
- Clicking on a profile shows detailed info:
  - Contact info
  - Interests
  - etc.

---

## 🗃️ Data Handling

- A **fake/mock database** is used to simulate profile data.
- This helps demonstrate all app functionalities without requiring a real backend or API.

---

## 🐞 Known Issue

- The loader component (`react-loader-spinner`) does **not currently work** with React 19.
- This caused issues during deployment.

## 🎥 Demo

Since there was a deployment issue, a demo video is provided instead:

👉 [Watch the Demo Video](#) *(insert video link here)*

---

## 🧰 Tech Stack

- React
- Leaflet (OpenStreetMap)
- React Leaflet
- JavaScript / JSX
- Optional: Node.js backend for profile storage (future enhancement)

---
