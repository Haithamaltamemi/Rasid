# رصيــد 🧾 Rasid

**Customer Account Management System (Egyptian Pound)**

A complete debt and payment management system for markets and retail stores, running entirely as a web application (`index.html` file) in the browser — no server or internet connection required. It can also be built as a standalone Windows executable (`.exe`) using web technologies (HTML/CSS/JavaScript), packaged with **Electron** and **electron-builder**.

---

## 📋 Overview

**Rasid** is a simplified accounting app for small shops and businesses, allowing you to record customer debts, track their payments, print account statements, run automatic backups, and export/import the database. It is designed specifically to meet the needs of **grocery stores, retail markets, and restaurants** that operate on a "credit" or "running account" basis.

**Base currency:** Egyptian Pound (ج.م / EGP) — can be changed in the source code.

### Key Features

- **Customer Management**: Add/edit/delete customer records (name, phone, address, notes).
- **Transaction Logging**: Add debts and payments through a fast interface (side-by-side type buttons), always defaulting to "Debt" as the initial value.
- **Smart Transaction History Behavior**:
  - On full payment (balance = zero), the transaction history is automatically cleared to keep the interface clean.
  - On partial payment, the history is replaced with a single entry representing the "remaining net debt from the previous account."
- **Database Export/Import**: A unified dialog supporting export, and import with the option to either merge with the current data or fully replace it.
- **Backups**:
  - **Automatic** backup after every change (via the Electron API, or via a folder chosen by the user in the browser).
  - **Instant** manual backup with a single button click.
- **Printed Reports**:
  - **General Report**: A comprehensive summary of all customers (debts, payments, balances).
  - **Detailed Report**: The general report followed by a full account statement for every customer, in a single print file.
- **Live Dashboard Stats**: Number of customers, total debts, total paid, net outstanding balance.
- **Full Arabic Language Support** with right-to-left (RTL) writing direction.

---

## 📥 Installing as a Web App (via Browser)

#### 1. Download the File

Save the `index.html` file to any folder on your device, for example: `%USERPROFILE%\Rasid\index.html` (recommended)

#### 2. Create the Backup Folder

Create a backup folder named `Data` in the same location (the folder containing `index.html`)

> **Note:** You can name the folder `Data` or anything else — the browser will ask you to select it on first use.

#### 3. Run the App

Double-click the `index.html` file to open it in your browser.

#### 4. First-Time Setup (on the first backup)

- On the first add or edit operation, a confirmation prompt will appear asking you to select the `Data` folder.
- Click **"OK"** and choose the folder you created earlier.
- Grant access when the browser requests permission.

> **Warning:** Do not delete or move the `Data` folder after selecting it, or you will need to select it again.

---

## ⚙️ Building the Windows App

Before starting the build process, make sure [Node.js](https://nodejs.org) (18.x or newer, includes npm) is installed on your machine. You can verify the installation with the following commands:

```bash
node -v
npm -v
```

## 🚀 Build Steps

1. **Clone the repository** to your machine:

   ```bash
   git clone https://github.com/Haithamaltamemi/rasid.git
   cd rasid
   ```

2. **Install the packages** (Electron and electron-builder):

   ```bash
   npm install
   ```

3. **Run the app in development mode**:

   ```bash
   npm start
   ```

4. **Build the Windows app:**

```bash
npm run build
```

This command runs **electron-builder**, which:

1. Packages `index.html`, `main.js`, `preload.js`, and the remaining files into the Electron bundle.
2. Uses `Icon.ico` as the icon for the app and the executable file.
3. Produces an installer (Installer) or a portable version (Portable), depending on the `build` settings in `package.json`.

Once the build completes successfully, you will typically find the output inside:

```
Rasid App/dist/
```

This includes the `.exe` file (installer or portable, depending on the configuration), along with helper files (such as `latest.yml` if auto-update is enabled).

> If `package.json` specifies a different output path (`"directories": { "output": "..." }`), the resulting file will be located there instead of `dist/`.

---

## 💾 Backups and Data Storage

- When the final Electron desktop app runs, its files are extracted and installed to:
```bash
%USERPROFILE%\AppData\Local\Programs\Rasid
```
- The database (`localStorage`) is saved in a folder dedicated and protected for the app.
- An **automatic** backup is saved after every change as a `JSON` file in the app's data folder:
```bash
%appdata%\Rasid\backups
```
- **On app close**, one final automatic backup is taken to ensure all data is preserved.
- A manual, **instant** backup can also be triggered from within the app interface.
- The database can be **exported** as a `.json` file and imported later (with the option to merge or fully replace).

---

## 🖨️ Printing

The app provides a "**Print Report**" feature with two options:

- **General Report**: A summary table of debts, payments, and balances for all customers.
- **Detailed Report**: The general report plus a full account statement for each individual customer, in a single `pdf` file.

A single customer's account statement can also be printed directly from within their detail page.

---

## 🧩 Technologies Used

- **HTML / CSS / JavaScript (Vanilla)** were used to build the app's interface and logic, without any external frameworks (Framework-free).
- **Electron** was used to package the app as a desktop program.
- **electron-builder** was used to build and distribute the `.exe` file for Windows.
- The **Tajawal** font (Google Fonts) is used for Arabic text (free for non-commercial use).

---

## 📝 Licensing

- **Fonts:** Google Fonts (Tajawal) (free for commercial use).
- **Icons:** Standard Emoji symbols.
- **Source Code:** Fully owned by "[Haitham Altamemi](https://github.com/Haithamaltamemi)".
- **Redistribution is not permitted without permission.**

## 🙏 Acknowledgment

Thank you for using the **"Rasid"** system to manage your customer accounts. This system was designed to give you a smooth and secure experience, with the ability to easily import your old data.
📞 **Contact:** 📧 haitham.altamemi@gmail.com
