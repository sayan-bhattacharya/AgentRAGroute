# First, remove the old git remote
git remote remove origin

# Add your new repository as the remote
git remote add origin https://github.com/sayan-bhattacharya/AgentRAGroute.git

# Verify the new remote
git remote -v

# Create a new main branch if needed
git checkout -b main

# Add all your changes
git add .

# Commit your changes
git commit -m "Initial commit: AI Agent Builder with RAG routing"

# Push to your new repository
git push -u origin main