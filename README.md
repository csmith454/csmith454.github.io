# csmith454.github.io

Personal blog and CV site, built with Jekyll and hosted on GitHub Pages.

## Structure

- `_config.yml`: site settings, nav tabs, and profile info (name, tagline, photo path, links)
- `index.markdown`: landing page (photo, bio, latest posts)
- `blog.html`: list of all posts
- `cv.html`: CV page with embedded PDF
- `about.html`: redirects `/about/` to the home page
- `404.html`: not-found page
- `_posts/`: blog posts (`YYYY-MM-DD-title.markdown`)
- `_layouts/`: `default.html` (page shell), `page.html`, `post.html` (includes Utterances comments)
- `_includes/`: `header.html` (nav tabs, theme toggle), `footer.html`
- `assets/css/style.css`: all styling, with dark mode
- `assets/js/main.js`: dark mode toggle and mobile menu
- `assets/images/`: profile photo
- `assets/files/cv.pdf`: the CV shown on the CV page
