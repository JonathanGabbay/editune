## העלאה ל-GitHub Pages וחיבור editune.com (GoDaddy)

### מה כבר מוכן
- האתר מוכן להעלאה כאתר סטטי.
- יש `CNAME` שמגדיר את הדומיין: `editune.com`
- יש `.nojekyll`

### 1) יצירת Repo והעלאה (דרך האתר של GitHub)
1. היכנס ל-GitHub → Create new repository בשם: **`editune`**.
2. בתוך הריפו → Add file → Upload files.
3. העלה את כל הקבצים מה-ZIP/תיקייה:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `success.html`
   - `CNAME`
   - `.nojekyll`
4. Commit.

> הערה: בגלל שאתה מחבר **דומיין משלך** (`editune.com`), הריפו *לא* חייב להיקרא `JonathanGabbay.github.io`.

### 2) להפעיל GitHub Pages
Repo → Settings → Pages:
- Source: Deploy from a branch
- Branch: `main` + /(root)

### 3) Custom domain
Repo → Settings → Pages:
- Custom domain: `editune.com`
- שמור
- אחרי ש-DNS התעדכן: להדליק Enforce HTTPS

### 4) GoDaddy DNS
GoDaddy → Manage DNS → Records:

A records ל-@ (4 רשומות):
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

CNAME ל-www:
- `www` → `JonathanGabbay.github.io`

### הערה על הטופס (שליחה ישירה)
הטופס משתמש ב-FormSubmit כדי לשלוח הצעות למייל.
בדרך כלל יש **אימות חד-פעמי במייל** ל-`yehonatanga@gmail.com` כדי לאפשר קבלת פניות.
