# Deploying to Hugging Face Spaces

This React app is configured to deploy on Hugging Face Spaces with Docker.

## Quick Start

1. **Create a new Space on Hugging Face**
   - Go to https://huggingface.co/spaces
   - Click "Create new Space"
   - Name: `billingsmoore/test`
   - License: Choose one (e.g., MIT)
   - Space SDK: **Docker**
   - Visibility: Public or Private (your choice)

2. **Connect your repository**
   - Clone the HF Space repo locally:
     ```bash
     git clone https://huggingface.co/spaces/billingsmoore/test
     cd test
     ```

3. **Copy your code**
   - Copy all files from this repository (except `.git`) into the HF Space directory
   - Make sure you have:
     - `Dockerfile`
     - `package.json`
     - `package-lock.json`
     - `public/` directory with `stories.json`
     - `src/` directory with components

4. **Push to HF Spaces**
   ```bash
   git add .
   git commit -m "Initial deployment to HF Spaces"
   git push
   ```

5. **Watch it build**
   - HF Spaces will automatically detect the Dockerfile
   - It will build and deploy your app
   - Once complete, your app will be live at:
     ```
     https://huggingface.co/spaces/billingsmoore/test
     ```

## Updating Your App

Whenever you make changes:
1. Commit to your GitHub repo
2. Pull/sync changes to your HF Space clone
3. Push to HF Spaces
4. The app will rebuild and redeploy automatically

## Port Configuration

The app runs on port 7860, which is Hugging Face Spaces' default port. The Dockerfile handles this automatically.

## Troubleshooting

- **Build fails**: Check the "Logs" tab in your Space settings
- **App doesn't load**: Ensure all files are in the HF Space repo
- **Stories not loading**: Make sure `public/stories.json` is present

## Adding Stories

Edit `public/stories.json` and push to HF Spaces. The new stories will be available immediately after the app rebuilds.
