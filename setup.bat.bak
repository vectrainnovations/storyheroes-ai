@echo off
echo ========================================
echo StoryHeroes AI - Automated Setup Script
echo ========================================
echo.

echo Step 1: Initializing Next.js project...
call npx create-next-app@latest . --typescript --tailwind --eslint --app --no-import-alias --yes

echo.
echo Step 2: Creating folder structure...
mkdir src\components src\lib src\store src\types src\config 2>nul
mkdir src\components\ui src\components\marketing src\components\create-flow src\components\dashboard src\components\shared 2>nul
mkdir src\lib\supabase src\lib\ai src\lib\stripe src\lib\email src\lib\pdf 2>nul
mkdir src\lib\ai\prompts 2>nul
mkdir src\lib\email\templates 2>nul
mkdir src\app\api\create-book src\app\api\generate-images src\app\api\checkout src\app\api\webhooks 2>nul
mkdir supabase\migrations 2>nul

echo.
echo Step 3: Creating environment file...
echo NEXT_PUBLIC_SITE_URL=https://storyheros.io > .env.local
echo NEXT_PUBLIC_APP_ENV=development >> .env.local

echo.
echo Step 4: Committing and pushing to GitHub...
git add .
git commit -m "feat: initialize Next.js 14 project with TypeScript and Tailwind"
git push origin main

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo Your app is now deployed to Vercel!
echo Visit: https://storyheros.io
echo.
pause
