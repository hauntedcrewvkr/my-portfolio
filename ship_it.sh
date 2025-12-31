#!/bin/bash

# --- THE ARCHITECT DEPLOYMENT SEQUENCE ---

# 1. Colors for Feedback
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}--------------------------------------${NC}"
echo -e "${CYAN}   INITIATING DEPLOYMENT PROTOCOL     ${NC}"
echo -e "${CYAN}--------------------------------------${NC}"

# 2. Check Status
echo -e "${YELLOW}==> Scanning for changes...${NC}"
git status --short

# 3. Add Changes
echo -e "${YELLOW}==> Staging files...${NC}"
git add .

# 4. Commit with Timestamp (Dynamic)
# अगर आपने कमांड के साथ मैसेज दिया तो वो यूज़ होगा, वरना टाइमस्टैम्प
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
if [ -z "$1" ]; then
    COMMIT_MSG="Auto-Update: $TIMESTAMP"
else
    COMMIT_MSG="$1"
fi

echo -e "${YELLOW}==> Committing: '$COMMIT_MSG'${NC}"
git commit -m "$COMMIT_MSG"

# 5. Push to Orbit
echo -e "${YELLOW}==> Pushing to GitHub Main Branch...${NC}"
git push origin main

echo -e "${GREEN}--------------------------------------${NC}"
echo -e "${GREEN}   SUCCESS! SITE UPDATING IN ~60s     ${NC}"
echo -e "${GREEN}--------------------------------------${NC}"