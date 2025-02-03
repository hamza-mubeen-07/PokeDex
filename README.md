# Pokemon Explorer

## 🚀 Project Overview
This is a React application built with **TypeScript, Redux Toolkit, and RTK Query** that fetches and displays a list of Pokémon. Users can click on a Pokémon to view its details.

### **Key Features**
✅ Fetches a list of Pokémon using the **PokeAPI**.
✅ Stores the fetched data persistently using **Redux Toolkit**.
✅ Displays detailed information when a Pokémon is selected.
✅ Uses **React Router** for navigation.
✅ **Unit & Integration tests** using **Jest & React Testing Library**.
✅ Configurable **BASE API URL** using an environment file.
✅ Clean code with **modular and reusable components**.

---

## 🛠️ Tech Stack
- **React** with **TypeScript**
- **Redux Toolkit & RTK Query**
- **React Router**
- **Tailwind CSS**
- **Jest & React Testing Library** (for Unit & Integration testing)
- **Vite** (for fast development and build)

---

## 🏗️ Project Setup

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file in the root directory and define:
```env
VITE_BASE_API_URL=https://pokeapi.co
```

### **4️⃣ Start the Development Server**
```sh
npm run dev
```

The app will be running at **http://localhost:5173/** (default Vite port).

---

## 📜 Folder Structure
```
📂 src
 ├── 📁 components         # UI Components
 ├── 📁 pages              # Page Components (List & Detail Page)
 ├── 📁 store              # Redux Toolkit store
 ├── 📁 api                # RTK Query API service
 ├── 📁 utils              # Utility functions
 ├── 📁 constants          # Constants & configuration
 ├── 📁 layout             # Layout components
 ├── main.tsx              # React root file
 ├── App.tsx               # Main App component
```

---

## 🔗 API Handling & Data Persistence

### **Fetching Pokémon List with Images**
The PokeAPI does not provide Pokémon images in the list API. To handle this:
- We extract the **ID** from the Pokémon's `url`.
- We construct the image URL dynamically using: **getPokemonIdAndImage** utils function
- This transformation is applied **before storing data in Redux**.
- This approach seems simple and straight as opposed to fetching the images by calling details API against each Pokemon in list API.

---

## 🧪 Testing
### **Running Tests**
```sh
npm run test
```
- **Unit tests** cover individual components, utilities.

---

## 📌 Notes
- The **coverage folder** and **snapshot folders** are not committed to Git (`.gitignore`).

---

## 📬 Contact
If you have any questions, feel free to reach out! 🚀

---

## 🎯 Future Improvements
- **Infinite Scroll or Pagination** for the Pokémon list.
- **More test coverage for pages and store mocking**.

