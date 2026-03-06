#!/bin/bash

# Usage: ./__scripts/build-and-push-mi-admin.sh <github-username> <github-token>
# Example: ./__scripts/build-and-push-mi-admin.sh osmestad ghp_YourTokenHere

GITHUB_USER="$1"
GITHUB_TOKEN="$2"
IMAGE_NAME="ghcr.io/$GITHUB_USER/mi-admin:latest"

if [ -z "$GITHUB_USER" ] || [ -z "$GITHUB_TOKEN" ]; then
  echo "Usage: $0 <github-username> <github-token>"
  exit 1
fi

# Login to GitHub Container Registry
echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_USER" --password-stdin

echo "Building and pushing Docker image for ARM64: $IMAGE_NAME"
# Ensure buildx is available
if ! docker buildx version >/dev/null 2>&1; then
  echo "Docker Buildx is not available. Please install Docker Buildx."
  exit 1
fi

docker buildx build --platform linux/arm64 -t "$IMAGE_NAME" -f admin/Dockerfile . --push

echo "Done."
