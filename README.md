# 🎮 Pokemon Pokedex

A modern, interactive Pokemon Pokedex built with React, TypeScript, and Vite. This application allows users to browse through the first 151 Pokemon from the original Kanto region, view detailed information about each Pokemon, and enjoy a smooth, responsive user experience.

## ✨ Features

- **Complete Pokemon Database**: Browse all 151 Pokemon from the original Kanto region
- **Interactive Grid Layout**: Click on any Pokemon to view detailed information
- **Detailed Pokemon Cards**: View Pokemon stats including:
  - Name (properly capitalized)
  - High-quality Dream World artwork
  - Type information
  - Height and weight measurements
- **Loading Animations**: Custom Pokeball loading spinner while fetching Pokemon data
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Tooltips**: Hover over Pokemon to see their names
- **Modal Dialogs**: Clean, accessible modal windows for Pokemon details

## 🛠️ Technologies Used

- **React 19.1.1** - Modern React with hooks
- **TypeScript 5.9.2** - Type-safe development
- **Vite 7.1.1** - Fast build tool and development server
- **Material-UI 7.3.1** - UI component library
- **Axios 1.11.0** - HTTP client for API calls
- **Sass 1.90.0** - Advanced CSS preprocessing
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pokemondex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Key Components

### PokemonGrid
The main component that displays all Pokemon in a responsive grid layout. Features:
- Modal dialog for detailed Pokemon information
- Loading states with custom Pokeball animation
- Click handlers for Pokemon selection

### API Integration
The application integrates with the [PokeAPI](https://pokeapi.co/) to fetch:
- Pokemon list (first 151 Pokemon)
- Individual Pokemon details including stats, types, and artwork

### Type Safety
Full TypeScript implementation with proper interfaces for:
- `PokemonList` - Basic Pokemon information
- `PokemonDialogInfo` - Detailed Pokemon data
- `PokemonTypesData` - Pokemon type information



## 🌐 API Integration

The application uses the PokeAPI to fetch Pokemon data:
- **Base URL**: `https://pokeapi.co/api/v2/pokemon`
- **Endpoints**:
  - `GET /?limit=151` - Fetch first 151 Pokemon
  - `GET /{id_or_name}` - Fetch individual Pokemon details

## 🚀 Deployment

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data
- [Pokemon Company](https://www.pokemon.com/) for the Pokemon franchise
- React and TypeScript communities for excellent documentation and tools

---

**Catch 'em all!** 🎮⚡
