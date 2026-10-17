# Learn Driving With Manny — Website

A complete, ready-to-host static website for the driving school. No build tools needed — plain HTML, CSS and JavaScript.

## What's inside

```
├── index.html          ← the full landing page
├── styles.css          ← all styling (colors, fonts, animations)
├── js/
│   └── main.js         ← menu, FAQ accordion, carousel, scroll animations, enquiry form
└── assets/
    ├── logo.png        ← "Learn driving With Manny" logo
    ├── hero-car.jpg    ← branded car photo (hero section)
    ├── vehicle-showcase.jpg ← branded car photo (vehicle section)
    └── favicon.png     ← browser tab icon
```

## How to put it on GitHub

1. Create a new repository on GitHub (for example `manny-driving-website`).
2. Upload **all files and folders in this package** to the repository — `index.html` must be at the top level of the repo, not inside a subfolder.
3. Turn on the website:
   - In your repository, go to **Settings → Pages**.
   - Under "Build and deployment", set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then Save.
4. After a minute or two your site will be live at `https://YOUR-USERNAME.github.io/manny-driving-website/`.

## How to put it on GoHighLevel (alternative)

Open `index.html`, select everything, and paste it into a **Custom HTML/Javascript** block, or upload the whole page as a file. Keep the `assets` folder, `styles.css` and `js/main.js` next to it wherever you host it.

## The enquiry form

The form is live: every enquiry is saved to the website's database (with the person's consent checkbox required). Enquiries appear in the Lovable project backend. No changes needed — it works out of the box.

## Things to replace before going live

- **Phone, email, address & opening hours** in the Contact section and footer currently show placeholder text like "Add your phone number". Search `index.html` for "Add your" to find them.
- **Testimonials** are clearly marked demo placeholders ("Example review text…"). Replace them with real reviews in `index.html` (4 reviews) and in `js/main.js` (the same 4 reviews — keep both in sync), then remove the "Demo placeholders" badge.
- **Favicon/site name** are already set.

## Made with

- HTML, CSS, JavaScript (no frameworks)
- Fonts: Archivo + Plus Jakarta Sans (loaded from Google Fonts)
