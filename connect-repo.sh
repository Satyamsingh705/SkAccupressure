#!/bin/bash

echo "Connecting local folder to GitHub repository..."

# Initialize Git repository if not already initialized
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
else
  echo "Git repository already initialized."
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
  echo "Remote 'origin' already exists. Removing it to update..."
  git remote remove origin
fi

# Add the remote repository
echo "Adding remote repository..."
git remote add origin https://github.com/satyamsingh705/SkAccupressure.git

# Configure Git credentials (optional, remove if not needed)
echo "Configuring Git credentials..."
echo "Please enter your GitHub username:"
read username
git config user.name "$username"
echo "Please enter your email address:"
read email
git config user.email "$email"

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing files..."
echo "Enter a commit message (e.g., 'Initial commit' or 'Update website'):"
read commit_message
git commit -m "$commit_message"

# Pull from remote (optional - uncomment if you want to pull first)
# echo "Pulling from remote repository..."
# git pull origin main --allow-unrelated-histories

# Push to GitHub
echo "Pushing to GitHub repository..."
echo "Enter the branch name (typically 'main' or 'master'):"
read branch_name
git push -u origin $branch_name

echo "Done! Your local folder is now connected to the GitHub repository."
echo "Visit https://satyamsingh705.github.io/SkAccupressure/ to see your published site."
