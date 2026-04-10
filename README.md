# LAST WAR Server 561 Recruitment Portal

This is a premium, multilingual migration application form designed for Server 561's **runH** alliance.

## Features
- **5 Languages**: English, Japanese, Traditional Chinese, Korean, Thai.
- **Premium Design**: Gaming-themed dark mode with neon accents and glassmorphism.
- **Google Sheets Integration**: Submissions are automatically saved to your spreadsheet.
- **Mobile Responsive**: Works perfectly on phones and tablets.

## Setup Instructions

### 1. Database (Google Sheets)
1. Create a new Google Sheet.
2. Go to **Extensions** > **Apps Script**.
3. Copy the code from `Code.gs` and paste it there.
4. Click **Deploy** > **New Deployment**.
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize the permissions and **copy the Web App URL**.

### 2. Connect the Form
1. Open `script.js`.
2. Find the line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";`
3. Replace the placeholder with your copied Web App URL.

### 3. Hosting on Google Sites
Google Sites works best with iframes for custom code.
1. Open your Google Site editor.
2. Go to **Insert** > **Embed**.
3. Select **Embed code**.
4. Combine your HTML, CSS, and JS into one block (or use a tool like GitHub Pages for a cleaner URL and then use "Embed URL").

**Pro Tip:** If you want it as a standalone site, deploying the Apps Script as a Web App that serves the HTML is the cleanest method for Google environments.

---
*Created for Server 561 runH Alliance*
