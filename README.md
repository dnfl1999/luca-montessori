# Luca Montessori Website

static website for kindergarten

## Project Structure

Production files:

- `index.html`
- `ko.html`
- `vi.html`
- `style.css`
- `site-lite.js`
- `images/favicon.svg`
- `images/gallery-placeholder.svg`

Optional project files:

- `README.md`
- `.gitignore`

Not used in production and safe to remove from the working folder:

- `language-select.html`
- `script.js`
- `site.js`
- `site.webmanifest`
- `HANDOFF.md`

## Deployment Notes

- Main entry page is `index.html`
- Korean page is `ko.html`
- Vietnamese page is `vi.html`
- All internal asset paths are configured with relative paths for static hosting
- For Netlify, set the publish directory to the project root `.`

## Netlify Setup

This project is already structured as a plain static site.

### Recommended Netlify settings

- Build command: leave empty
- Publish directory: `.`

Because this is a static HTML/CSS/JS site, no build step is required.

## GitHub + Netlify Auto Deployment Guide

Follow this if you want the site to deploy automatically every time you push updates to GitHub.

### 1. Create a GitHub Repository

1. Go to GitHub and log in.
2. Click `New repository`.
3. Enter a repository name.
4. Choose `Public` or `Private`.
5. Click `Create repository`.

After creation, GitHub will show the repository URL.

Example:

```bash
https://github.com/your-id/luca-montessori-vungtau.git
```

### 2. Connect This Project to GitHub

Open a terminal in this project folder and run:

```bash
git init
git add index.html ko.html vi.html style.css site-lite.js images README.md .gitignore
git commit -m "Initial static site setup"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the real GitHub repository URL.

### 3. Connect GitHub to Netlify

1. Go to Netlify and log in.
2. Click `Add new site`.
3. Click `Import an existing project`.
4. Choose `GitHub`.
5. Authorize Netlify to access your GitHub account if prompted.
6. Select the repository you just pushed.

### 4. Set Basic Deploy Options in Netlify

When Netlify asks for deploy settings, use:

- Branch to deploy: `main`
- Build command: leave empty
- Publish directory: `.`

Then click `Deploy site`.

### 5. How Automatic Deployment Works

Once GitHub and Netlify are connected:

1. You edit files in this project.
2. You commit the changes locally.
3. You push the changes to GitHub.
4. Netlify detects the new push automatically.
5. Netlify deploys the updated site automatically.

That means after the first setup, you usually only need:

```bash
git add .
git commit -m "Update website content"
git push
```

### 6. How to Update the Site Later

If you change text, images, styling, or links:

1. Save your edits.
2. Run:

```bash
git add .
git commit -m "Describe your change"
git push
```

3. Wait for Netlify to finish deployment.
4. Refresh your live site.

### 7. How to Check If Deployment Succeeded

In Netlify:

1. Open your site dashboard.
2. Click `Deploys`.
3. Check the latest deploy status.

If it says `Published`, the live site was updated successfully.

### 8. Beginner Tips

- Keep `index.html` as the main page.
- Do not rename `ko.html` or `vi.html` unless you also update internal links.
- Keep image paths inside the `images/` folder.
- If Netlify shows a failed deploy, first check whether a referenced file was deleted or renamed.
- For this project, most deploy issues come from wrong file paths or missing assets.

## GitHub Upload Order

1. Create a new GitHub repository.
2. In this project folder, initialize Git:

```bash
git init
```

3. Add the production files first:

```bash
git add index.html ko.html vi.html style.css site-lite.js images README.md .gitignore
```

4. Review staged files:

```bash
git status
```

5. Create the first commit:

```bash
git commit -m "Prepare static site for GitHub and Netlify deployment"
```

6. Connect the GitHub repository:

```bash
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
```

7. Push to GitHub:

```bash
git branch -M main
git push -u origin main
```

8. In Netlify, choose `Add new site` -> `Import from Git`.
9. Connect your GitHub repository.
10. Confirm publish directory is `.` and build command is empty.
11. Deploy the site.

## Recommended Cleanup Before Public Release

If you want the repository itself to stay minimal, remove these unused local files before pushing:

- `language-select.html`
- `script.js`
- `site.js`
- `site.webmanifest`
- `HANDOFF.md`

## Updating Placeholder Contact Items Later

When real contact information is ready:

- Replace the phone placeholder text with a real `tel:` link
- Replace disabled Zalo and Facebook placeholder spans with real anchor links
- Replace `images/gallery-placeholder.svg` with actual school photos if available
- Replace `images/favicon.svg` if a final branded favicon is prepared
