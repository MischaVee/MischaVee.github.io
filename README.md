# Your Name — Personal Site

Plain HTML/CSS/JS, no build step. Five pages: Home, Gallery, Ideas, Essays, About.

## Before you launch

- Replace "Your Name" everywhere (search each `.html` file) with your actual name.
- Replace the placeholder blocks in `gallery.html` and `about.html` with real `<img>` tags once you've dropped images into `assets/images/`.
- Fill in real contact links in `about.html`.
- Write your first essay and link it from `essays.html`.

## 1. Put it on GitHub

```
cd site
git init
git add .
git commit -m "first version of the site"
```

Create a new repo on GitHub named exactly `yourusername.github.io` (this exact naming gives you the cleanest setup for a custom domain), then:

```
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

## 2. Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root)**. Save. Your site will be live at `https://yourusername.github.io` within a minute or two.

## 3. Point your Porkbun domain at it

In the repo, add a file named `CNAME` (no extension) at the root containing just your domain, e.g.:

```
yourdomain.com
```

Then in **Porkbun → your domain → DNS**, add these records (delete any conflicting A/CNAME records first):

| Type  | Host | Answer |
|-------|------|--------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | yourusername.github.io |

Back in **GitHub → Settings → Pages**, enter your custom domain in the field there too, and once DNS propagates (can take up to a few hours), tick **Enforce HTTPS**.

## Making changes later

Edit files locally, then:

```
git add .
git commit -m "describe the change"
git push
```

The live site updates automatically within a minute of the push.
