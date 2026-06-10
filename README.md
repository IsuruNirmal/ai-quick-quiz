# AI Quick Quiz

A mobile-friendly event quiz that gives each participant 5 randomly selected questions from a bank of 50 approachable AI questions.

## Run locally

Open `index.html` directly, or serve this folder with any static web server.

## Publish

This is a static site and can be hosted on GitHub Pages, Netlify, Cloudflare Pages, an internal company server, or any normal web host.

After publishing:

1. Open `qr.html`.
2. Enter the public URL of `index.html`.
3. Select **Update QR**.
4. Select **Download PNG** and place the image on the event poster or display.

## Notes

- Questions and answer choices are randomized in the participant's browser.
- No participant information is stored or sent anywhere.
- The QR generator uses QuickChart to create the downloadable QR image.
- A backend would be required to guarantee that no two participants ever receive the same combination.
