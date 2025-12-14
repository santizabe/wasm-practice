# WebAssembly Practice Project

A practice project demonstrating WebAssembly integration by running C-compiled programs in the browser. This project showcases **Cub3D** (a raycasting game engine) and **Fractol** (Mandelbrot and Julia set fractals) compiled from C to JavaScript and WebAssembly using Emscripten.

## 🎮 Live Demos

- **Cub3D**: A 3D raycasting game engine inspired by Wolfenstein 3D
- **Fractol**: Interactive fractal visualizations (Mandelbrot and Julia sets)

## 🛠️ Technologies Used

### Frontend
- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

### WebAssembly
- **Emscripten** - C/C++ to WebAssembly compiler toolchain
- **WebAssembly (WASM)** - Binary instruction format for web

## 📁 Project Structure

```
wasm/
├── public/
│   ├── icon.webp
│   └── wasm/
│       └── cub3D.data          # Game assets
├── src/
│   ├── components/
│   │   ├── GameCanvas.tsx      # Canvas wrapper for WASM modules
│   │   ├── Loading.tsx         # Loading state component
│   │   └── Sidebar.tsx         # Navigation sidebar
│   ├── pages/
│   │   └── Games.tsx           # Main games page
│   ├── wasm/
│   │   ├── cub3D/
│   │   │   ├── cub3D.data      # Game data file
│   │   │   ├── cub3D.js        # Emscripten-generated JS
│   │   │   ├── cub3D.wasm      # Compiled WebAssembly binary
│   │   │   └── cub3D.d.ts      # TypeScript definitions
│   │   ├── fractol/
│   │   │   ├── fractol.js      # Emscripten-generated JS
│   │   │   ├── fractol.wasm    # Compiled WebAssembly binary
│   │   │   └── fractol.d.ts    # TypeScript definitions
│   │   └── wasmLauncher.ts     # WASM module loader utility
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🔗 Source Code

The original C implementations can be found in these repositories:

- **Cub3D**: [github.com/patrixampm/cub3D](https://github.com/patrixampm/cub3D)
- **Fractol**: [github.com/santizabe/fractol](https://github.com/santizabe/fractol)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd wasm
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📚 How It Works

### Compilation Process

The C programs were compiled to WebAssembly using Emscripten with the following key flags:

- `-sMODULARIZE=1` - Wraps the output in a factory function
- `-sEXPORT_ES6=1` - Exports as ES6 module
- `-sUSE_SDL=2` - Uses SDL2 for graphics
- `-sALLOW_MEMORY_GROWTH=1` - Allows dynamic memory allocation

### Integration

The compiled WASM modules are loaded dynamically in the React application:

1. **wasmLauncher.ts** - Handles module initialization and canvas setup
2. **GameCanvas.tsx** - Provides the HTML canvas element for rendering
3. **Games.tsx** - Manages module selection and loading states

### Module Loading

```typescript
// Simplified example of WASM module loading
import createModule from './wasm/cub3D/cub3D.js';

const module = await createModule({
  canvas: canvasElement,
  // Additional Emscripten module configuration
});
```

## 🎯 Features

- ✅ Full WebAssembly integration with React
- ✅ Type-safe TypeScript interfaces for WASM modules
- ✅ Responsive canvas rendering
- ✅ Loading states and error handling
- ✅ Multiple WASM modules in a single application
- ✅ Optimized build configuration with Vite

## 🧪 Learning Outcomes

This project demonstrates:

- Compiling C/C++ code to WebAssembly using Emscripten
- Integrating WASM modules into a modern React application
- Handling canvas-based graphics in WebAssembly
- Managing memory and module lifecycle
- Building a production-ready WASM application with TypeScript

## 📝 Notes

- The WASM modules run entirely in the browser - no server-side processing required
- Performance is near-native speed thanks to WebAssembly
- The project uses ES6 module format for better compatibility with modern bundlers

## 🤝 Contributing

This is a practice project, but suggestions and improvements are welcome!

## 📄 License

This project is for educational purposes. Please refer to the original repositories for their respective licenses.

---

Built with ❤️ as a WebAssembly learning project.