# Docker Setup for Emife Portfolio

This portfolio is now containerized with Docker for easy deployment and consistency across environments.

## Quick Start

### Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine

### Running the Container

#### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up -d
```

Then visit: `http://localhost`

To stop:
```bash
docker-compose down
```

#### Option 2: Using Docker CLI
```bash
# Build the image
docker build -t emife-portfolio .

# Run the container
docker run -d -p 80:80 --name emife-portfolio emife-portfolio
```

Then visit: `http://localhost`

To stop:
```bash
docker stop emife-portfolio
docker rm emife-portfolio
```

## Configuration Files

- **Dockerfile**: Builds the container with Nginx web server
- **docker-compose.yml**: Orchestrates container deployment
- **nginx.conf**: Configures Nginx server settings
- **.dockerignore**: Excludes unnecessary files from the image

## Features

✅ Lightweight Nginx Alpine image (~20MB)  
✅ Gzip compression enabled  
✅ 30-day caching for static assets  
✅ URL rewriting for cleaner navigation  
✅ Easy development mode (see docker-compose.yml volumes)

## Development Mode

To enable live reloading during development, uncomment the volumes section in `docker-compose.yml`:

```yaml
volumes:
  - .:/usr/share/nginx/html
```

Then run:
```bash
docker-compose up
```

Changes to files will be reflected immediately in the browser.

## Deployment

### Deploy to Production

1. Build the image:
```bash
docker build -t emife-portfolio:latest .
```

2. Push to Docker registry (Docker Hub, AWS ECR, etc.):
```bash
docker tag emife-portfolio:latest yourregistry/emife-portfolio:latest
docker push yourregistry/emife-portfolio:latest
```

3. Deploy using the same docker-compose.yml or your preferred container orchestration platform (Kubernetes, Docker Swarm, AWS ECS, etc.)

### Environment Considerations

- For production, consider using a reverse proxy (Traefik, Nginx) for SSL/TLS termination
- Add health checks in docker-compose.yml if needed
- Set resource limits (CPU, memory) in docker-compose.yml

## Troubleshooting

### Container won't start
```bash
docker-compose logs portfolio
```

### Port 80 already in use
Change the port mapping in docker-compose.yml:
```yaml
ports:
  - "8080:80"  # Access at http://localhost:8080
```

### Clear Docker cache
```bash
docker-compose down -v
docker system prune -a
```

## Additional Notes

- Nginx is configured to serve static files with optimal caching headers
- The container restarts automatically unless manually stopped
- All environment variables can be customized in docker-compose.yml
