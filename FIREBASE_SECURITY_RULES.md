# 🔐 Firebase Storage Security Rules (CORS Fix)

## ⚠️ Current Problem

You're seeing this CORS error when trying to upload PDFs:

```
Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com/...'
from origin 'https://manual-hro.vercel.app' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check
```

**Root Cause**: Firebase Storage Rules are blocking uploads from your domain.

---

## ✅ Solution: Configure Firebase Storage Rules

### **Step 1: Access Firebase Console**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click on project **`manual-hro`**
3. On the left menu, click **Storage** (under Build section)

### **Step 2: Find the Rules Tab**

You should see:
- **Files** tab (shows your uploaded PDFs)
- **Rules** tab (security rules - THIS IS WHAT WE NEED)

Click the **Rules** tab.

### **Step 3: Replace Rules with This Code**

You'll see existing rules. **Replace ALL content** with this:

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    // Allow anyone to read PDFs from protocols folder
    match /protocols/{document=**} {
      allow read: if true;
      allow write: if request.auth != null || true;
    }

    // Deny access to everything else by default
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

### **Step 4: Publish Rules**

1. Click the blue **"Publish"** button (top right)
2. Confirmation dialog appears
3. Click **"Publish"** again
4. Wait ~1 minute for rules to deploy (you'll see ✅ checkmark)

---

## ✨ What These Rules Do

| Rule | Effect |
|------|--------|
| `allow read: if true;` | Anyone can download PDFs (no authentication) |
| `allow write: if request.auth != null \|\| true;` | Anyone can upload PDFs (for testing) |
| Default `allow read, write: if false;` | Denies all other access |

---

## 🔒 Production Rules (After Testing)

Once upload/download works, update to these stricter rules:

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    // Allow authenticated users to upload and read their PDFs
    match /protocols/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Deny access to everything else
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

This requires Firebase Authentication setup (future feature).

---

## 🧪 Testing After Rules Update

1. **Wait 1-2 minutes** for rules to deploy
2. Go to https://manual-hro.vercel.app
3. Click **"Importar Conteúdo"**
4. Upload a PDF
5. Click **"Visualizar no App"**
6. Console should show: ✅ **PDF uploaded successfully**
7. Click **"Baixar PDF"** button on protocol detail page

---

## 📋 Troubleshooting

### Rules still show old content after publishing?
- Click **⟲ Refresh** button in Firebase Console
- Or refresh your browser (Ctrl+F5 / Cmd+Shift+R)

### Still getting CORS error after publishing?
- Verify you clicked **"Publish"** (not just saved)
- Wait another minute for deployment
- Check that rules show your new code (not default text)

### Upload works but download doesn't?
- Check that `allow read: if true;` is in your rules
- Verify protocol has `pdfUrl` filled in localStorage

---

## 🚀 Next Steps

1. Update Firebase Storage Rules (above)
2. Wait 1-2 minutes for deployment
3. Test PDF upload/download on https://manual-hro.vercel.app
4. Let me know if it works! ✅

---

**Location in Firebase Console**:
```
Firebase Console
  → manual-hro project
    → Build (left menu)
      → Storage
        → Rules tab ← YOU ARE HERE
```

