# Portfolio Website Template

A modern, responsive portfolio website template for UI/UX designers, developers, and creative professionals.

## Features

- Clean, minimal design
- Fully responsive layout
- Mobile-first approach
- Touch-optimized for mobile devices
- Smooth scrolling navigation
- Lazy loading images for better performance
- Simple contact form
- Mobile navigation menu

## Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # JavaScript functionality
├── img/
│   ├── profile.jpg         # Profile image
│   ├── favicon.ico         # Favicon
│   ├── tools/              # Tool icons
│   │   ├── figma.png
│   │   ├── adobe-xd.png
│   │   └── sketch.png
│   └── work/               # Project images
│       ├── project1.jpg
│       ├── project2.jpg
│       └── ...
└── README.md               # This file
```

## Getting Started

### Option 1: GitHub Pages

1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. Your site will be published at `https://yourusername.github.io/repository-name/`

### Option 2: Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Open `index.html` in your browser or use a local server:
```bash
# If you have Python installed
python -m http.server
# or with npm
npx serve
```

## Customization

### Basic Information

Edit the following in `index.html`:

- Profile name and handle
- Bio text
- Portfolio projects
- Tools and software
- Contact information

### Images

1. Replace the placeholder images in the `img` folder:
   - `profile.jpg` - Your profile picture (ideally 400x400px)
   - `work/project*.jpg` - Your portfolio work samples
   - `tools/*.png` - Icons for tools you use

### Colors

Edit the CSS variables in `css/styles.css` to change the color scheme:

```css
:root {
  --primary: #5271FF;      /* Primary color */
  --primary-dark: #3A58E6; /* Primary hover state */
  --secondary: #F3F4F6;    /* Secondary/background color */
  --text: #333333;         /* Main text color */
  --text-light: #666666;   /* Secondary text color */
  /* ... other variables ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

This template is free to use for personal and commercial projects. A credit attribution is appreciated but not required.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) (Montserrat, Nunito)
- Inspiration: Modern portfolio designs

---

## Need Help?

If you need assistance or have questions about customizing this template, feel free to:

1. Open an issue in this repository
2. Contact me through the form on my website
3. Reach out on social media

Happy customizing!
