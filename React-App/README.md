# React Event Handlers Demo

A modern, interactive React application showcasing different event handling patterns with beautiful, responsive UI components.

## 🚀 Features

### Interactive Components

- **OnChange Component** - Real-time input updates with blue theme
- **OnClick Component** - Button-triggered updates with red theme
- **Quantity Component** - Counter with increment/decrement buttons (green theme)
- **Payment Component** - Payment method selector with dropdown (orange theme)
- **Shipping Component** - Radio button selection for shipping options (green theme)

### Design Features

- ✨ **Modern UI Design** - Clean, professional interface
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎨 **Consistent Theming** - Each component has its own color scheme
- ⚡ **Smooth Animations** - Optimized for performance
- ♿ **Accessibility Ready** - Proper focus states and ARIA labels
- 🎯 **Interactive Elements** - Hover effects and visual feedback

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **Modern CSS** - Flexbox, Grid, and CSS custom properties

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd React-Vite-Learning/React-App
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── OnChange/
│   │   ├── OnChange.jsx
│   │   └── OnChange.module.css
│   ├── OnClick/
│   │   ├── OnClick.jsx
│   │   └── OnClick.module.css
│   ├── Quantity/
│   │   ├── Quantity.jsx
│   │   └── Quantity.module.css
│   ├── Payment/
│   │   ├── Payment.jsx
│   │   └── Payment.module.css
│   └── Shipping/
│       ├── Shipping.jsx
│       └── Shipping.module.css
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

## 🎨 Component Details

### OnChange Component

- **Purpose**: Demonstrates real-time input handling
- **Theme**: Blue (#1976d2)
- **Features**: Live updates as you type

### OnClick Component

- **Purpose**: Shows button-triggered state updates
- **Theme**: Red (#d32f2f)
- **Features**: Button click to update display

### Quantity Component

- **Purpose**: Counter with increment/decrement controls
- **Theme**: Green (#2e7d32)
- **Features**: Buttons and direct input, prevents negative values

### Payment Component

- **Purpose**: Payment method selection
- **Theme**: Orange (#f57c00)
- **Features**: Dropdown with icons, dynamic display

### Shipping Component

- **Purpose**: Radio button selection demo
- **Theme**: Green (#2e7d32)
- **Features**: Custom radio styling, pricing information

## 🚀 Deployment

This project is ready for deployment on any static hosting service:

- **Vercel**: Connect your GitHub repo and deploy instantly
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder contents

### Build Optimization

- CSS is automatically minified
- JavaScript is optimized and tree-shaken
- Images and assets are optimized
- Modern CSS with fallbacks for older browsers

## 🎯 Performance Features

- **Optimized Animations**: Uses `will-change` and `transform` for smooth performance
- **Efficient CSS**: Minimal reflows and repaints
- **Responsive Images**: Optimized for different screen densities
- **Fast Loading**: Minimal bundle size with code splitting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Vite
