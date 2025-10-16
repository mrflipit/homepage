# Deploying to Netlify

This document provides instructions for deploying the Flipit Home Page to Netlify.

## Deployment Options

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, Bitbucket)
4. Select the repository containing this project
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI if you haven't already:
   ```
   npm install netlify-cli -g
   ```

2. Log in to your Netlify account:
   ```
   netlify login
   ```

3. Initialize Netlify in your project:
   ```
   netlify init
   ```

4. Follow the prompts to set up your site

5. Deploy your site:
   ```
   netlify deploy --prod
   ```

## Configuration Files

The following files have been set up for Netlify deployment:

- `netlify.toml` - Contains build settings and redirect rules
- `public/_redirects` - Ensures proper SPA routing

## Environment Variables

No environment variables are required for this deployment.

## Post-Deployment Steps

After deployment, verify that:

1. The site loads correctly
2. All routes work properly (test navigation)
3. All images and assets are loading
4. The flipping animations work as expected in different browsers

## Troubleshooting

If you encounter issues:

1. Check the Netlify deployment logs
2. Verify that the build completed successfully
3. Test locally with `npm run preview` to simulate production
4. Ensure all assets have the correct paths
