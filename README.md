## editune.com — “Domain for sale” landing page

This folder is a **static** landing page for selling the domain **editune.com**.

### Direct send (no email client)

A static site cannot send email by itself.

This page uses **FormSubmit** (a free form-to-email relay) so the **offer form sends directly**.

- Visitors don’t need any account.
- You may need to **confirm the recipient email once** (FormSubmit typically sends a confirmation email to `yehonatanga@gmail.com`).

### GitHub Pages deployment (free)

#### 1) Create the repo

Create a new GitHub repository named: **`editune`**.

> Note: since you’re using a **custom domain** (`editune.com`), the repo does **not** need to be named `JonathanGabbay.github.io`.

#### 2) Upload files

Upload these files to the repo root:

- `index.html`
- `styles.css`
- `script.js`
- `success.html`
- `CNAME` (contains `editune.com`)
- `.nojekyll`

#### 3) Enable Pages

In GitHub repo:

- **Settings → Pages**
- **Build and deployment → Source: Deploy from a branch**
- Select branch: `main` (root)

#### 4) Add the custom domain

In **Settings → Pages**:

- **Custom domain**: `editune.com`
- Save
- Enable **Enforce HTTPS** (after DNS is set and it becomes available)

### GoDaddy DNS (point editune.com to GitHub Pages)

GoDaddy → My Products → `editune.com` → **DNS / Manage DNS**.

#### Records to set

**A records for root (@)** (create 4 A records):

- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

**CNAME for www**:

- `www` → `JonathanGabbay.github.io`

#### Notes

- DNS propagation can take minutes to 24h.
- If you already have conflicting `A` or `CNAME` records for `@` or `www`, remove/replace them.

### Form redirect after submit

The form redirects to:

- `https://editune.com/success.html`
