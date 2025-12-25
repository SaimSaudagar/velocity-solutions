# Velocity Solutions - Enterprise Software Development

Enterprise-grade software development for FinTech, SaaS, and PropTech companies.

## Project Overview

This is a modern web application built with React, TypeScript, and Vite, showcasing enterprise software development services.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:8080`

### Building for Production

Build the application for production:

```sh
npm run build
```

The built files will be in the `dist` directory.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Initial Setup:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your code to GitHub:**
   ```sh
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **The deployment will start automatically:**
   - GitHub Actions will build and deploy your site
   - Check the **Actions** tab in your repository to see the deployment progress
   - Once complete, your site will be available at: `https://<your-username>.github.io/<repository-name>/`

#### Using a Custom Domain (saimsaudagar.com):

Your domain is already configured in `public/CNAME`. For complete step-by-step instructions specific to Hostinger, see **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**.

**Quick Steps:**

1. **Configure DNS in Hostinger:**
   - Log in to [Hostinger hPanel](https://hpanel.hostinger.com)
   - Go to **Domains** → **Manage** → **DNS / Name Servers** → **Manage DNS Records**
   - Add 4 A records for `saimsaudagar.com` pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - (Optional) Add CNAME record for `www` pointing to `<your-username>.github.io`

2. **Enable custom domain in GitHub:**
   - Go to **Settings** → **Pages** in your repository
   - Under **Custom domain**, enter `saimsaudagar.com`
   - Click **Save** and wait for verification (green checkmark ✅)

3. **Wait for DNS propagation:**
   - DNS changes can take 15 minutes to 48 hours
   - GitHub will automatically provision SSL certificate
   - Your site will be live at `https://saimsaudagar.com`

📖 **For detailed Hostinger-specific instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

#### Manual Deployment:

If you prefer to deploy manually:

```sh
npm run build
# Then upload the contents of the 'dist' folder to GitHub Pages
```

#### Troubleshooting:

- **404 errors on routes:** Make sure your base path in `vite.config.ts` matches your repository name (if not using a custom domain)
- **Assets not loading:** Check that the base path is correctly configured
- **Custom domain not working:** Verify DNS settings and wait for propagation
