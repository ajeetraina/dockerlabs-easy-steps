
import { ArrowRight, ArrowLeft, CheckCircle, Copy, Play, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';

interface TutorialContentProps {
  currentTopic: string;
}

const tutorialContent = {
  "docker-desktop-intro": {
    title: "What is Docker Desktop?",
    description: "Learn about Docker Desktop and its benefits for modern development",
    duration: "10 min read",
    difficulty: "Beginner",
    content: `
Docker Desktop is an all-in-one application that provides an intuitive GUI for managing Docker containers, images, and volumes. It simplifies container development and makes Docker accessible to developers of all skill levels.

## Why Docker Desktop?

Docker Desktop transforms the way developers work with containers by providing:

- **Visual Interface**: Manage containers, images, and volumes through an intuitive GUI
- **Integrated Development**: Built-in tools for development workflows
- **Cross-Platform**: Consistent experience across Windows, macOS, and Linux
- **Developer Tools**: Extensions, Docker Compose integration, and debugging tools

## Key Features

### Container Management
Docker Desktop provides a centralized dashboard to view, start, stop, and manage all your containers with just a few clicks.

### Image Repository
Browse and pull images from Docker Hub or other registries directly from the interface.

### Volume Management
Easily create, inspect, and manage Docker volumes for persistent data storage.

### Extensions Ecosystem
Access a rich marketplace of extensions that enhance your development workflow.
    `,
    codeExample: {
      title: "Verify Docker Desktop Installation",
      description: "Check if Docker Desktop is running properly",
      code: `# Check Docker version
docker --version

# Check Docker Desktop is running
docker info

# Test with hello-world
docker run hello-world`,
      language: "bash"
    }
  },
  "install-windows": {
    title: "Docker Desktop for Windows",
    description: "Complete installation guide for Windows 10/11",
    duration: "15 min",
    difficulty: "Beginner",
    content: `
Docker Desktop for Windows provides a seamless containerization experience on Windows 10 and 11. This guide walks you through the complete installation process.

## System Requirements

Before installing Docker Desktop, ensure your system meets these requirements:

- **Windows 10 64-bit**: Pro, Enterprise, or Education (Build 19041 or higher)
- **Windows 11 64-bit**: Home or Pro version 21H2 or higher
- **Hardware**: 4GB RAM minimum, 8GB recommended
- **BIOS**: Virtualization enabled
- **Features**: Hyper-V and Containers Windows features enabled

## Installation Steps

### Step 1: Download Docker Desktop
Visit the official Docker website and download Docker Desktop for Windows. The installer is approximately 500MB.

### Step 2: Run the Installer
Double-click the installer and follow these steps:
1. Accept the license agreement
2. Choose installation location (default recommended)
3. Select additional components if needed
4. Complete the installation

### Step 3: Enable WSL 2 Backend
Docker Desktop uses WSL 2 as the default backend for better performance:
1. Open Docker Desktop settings
2. Navigate to General settings
3. Ensure "Use WSL 2 based engine" is checked

## Post-Installation Setup

After installation, Docker Desktop will start automatically. You'll see the Docker whale icon in your system tray indicating it's running.
    `,
    codeExample: {
      title: "Windows-Specific Docker Commands",
      description: "Essential commands for Docker Desktop on Windows",
      code: `# Check WSL 2 integration
wsl --list --verbose

# Set WSL 2 as default
wsl --set-default-version 2

# Restart Docker Desktop service
net stop com.docker.service
net start com.docker.service

# Check Docker Desktop status
docker system info`,
      language: "bash"
    }
  },
  "install-mac": {
    title: "Docker Desktop for macOS",
    description: "Complete installation guide for macOS",
    duration: "15 min",
    difficulty: "Beginner",
    content: `
Docker Desktop for macOS brings containerization to Apple's ecosystem with native performance and seamless integration.

## System Requirements

Ensure your Mac meets these requirements:

- **macOS**: Version 10.15 or newer
- **Hardware**: 4GB RAM minimum, 8GB recommended
- **Architecture**: Intel chip or Apple Silicon (M1/M2)
- **Storage**: At least 4GB of free disk space

## Installation Process

### Step 1: Choose the Right Version
Docker Desktop offers two variants:
- **Intel Chip**: For Macs with Intel processors
- **Apple Silicon**: For Macs with M1/M2 chips

### Step 2: Download and Install
1. Download the appropriate .dmg file from Docker's website
2. Double-click the downloaded file
3. Drag Docker.app to your Applications folder
4. Launch Docker from Applications

### Step 3: First-Time Setup
When you first launch Docker Desktop:
1. Accept the service agreement
2. Provide administrator password when prompted
3. Complete the onboarding tutorial

## macOS-Specific Features

### Native Performance
Docker Desktop leverages macOS's native virtualization framework for optimal performance.

### File Sharing
Configure which directories can be accessed by containers in Docker Desktop preferences.

### Resource Management
Adjust CPU, memory, and disk usage limits to optimize performance for your workflow.
    `,
    codeExample: {
      title: "macOS Docker Commands",
      description: "Platform-specific commands and checks",
      code: `# Check Docker Desktop status
docker version

# View system resource usage
docker system df

# Configure file sharing (via GUI)
# Go to Docker Desktop > Preferences > Resources > File Sharing

# Reset Docker Desktop (if needed)
# Go to Docker Desktop > Troubleshoot > Reset to factory defaults`,
      language: "bash"
    }
  },
  "install-linux": {
    title: "Docker Desktop for Linux",
    description: "Installation guide for Linux distributions",
    duration: "20 min",
    difficulty: "Beginner",
    content: `
Docker Desktop for Linux provides the same user experience as Windows and macOS, with full GUI support and native Linux integration.

## Supported Distributions

Docker Desktop supports these Linux distributions:
- **Ubuntu**: 18.04 LTS and newer
- **Debian**: 10 and newer
- **Fedora**: 35 and newer
- **Arch Linux**: Current release

## Prerequisites

Before installation, ensure you have:
- 64-bit processor with virtualization support
- KVM virtualization support
- systemd init system
- GNOME or KDE desktop environment

## Installation Steps

### Step 1: Update System Packages
Keep your system updated for the best compatibility.

### Step 2: Install Required Dependencies
Most distributions need additional packages for Docker Desktop to function properly.

### Step 3: Download and Install
Choose the appropriate package format for your distribution (DEB or RPM).

### Step 4: Configure User Permissions
Add your user to the docker group to run Docker commands without sudo.

## Post-Installation Configuration

### Enable Docker Service
Ensure Docker service starts automatically with your system.

### Configure Resources
Adjust memory, CPU, and storage allocations based on your system capabilities.

### Test Installation
Verify everything works correctly with a simple container test.
    `,
    codeExample: {
      title: "Linux Installation Commands",
      description: "Step-by-step installation for Ubuntu/Debian",
      code: `# Update package index
sudo apt update

# Install prerequisites
sudo apt install -y ca-certificates curl gnupg lsb-release

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Download Docker Desktop DEB package
wget https://desktop.docker.com/linux/main/amd64/docker-desktop-4.25.0-amd64.deb

# Install Docker Desktop
sudo apt install ./docker-desktop-4.25.0-amd64.deb

# Add user to docker group
sudo usermod -aG docker $USER

# Verify installation
docker --version`,
      language: "bash"
    }
  },
  "docker-compose": {
    title: "Docker Compose with Docker Desktop",
    description: "Multi-container applications made easy",
    duration: "25 min",
    difficulty: "Intermediate",
    content: `
Docker Compose is included with Docker Desktop and allows you to define and run multi-container Docker applications using a simple YAML file.

## What is Docker Compose?

Docker Compose simplifies the process of managing multiple containers that work together. Instead of running multiple docker run commands, you define your entire application stack in a single file.

## Key Benefits

### Simplified Configuration
Define complex multi-container setups in a readable YAML format.

### Environment Management
Easily switch between development, testing, and production configurations.

### Service Discovery
Containers can communicate with each other using service names.

### Volume and Network Management
Automatically creates and manages networks and volumes for your application.

## Basic Docker Compose Workflow

1. **Define**: Create a docker-compose.yml file
2. **Build**: Run docker-compose up to start your services
3. **Manage**: Use docker-compose commands to control your application
4. **Scale**: Easily scale services up or down

## Docker Desktop Integration

Docker Desktop provides excellent Compose integration:
- Visual representation of your compose stack
- Easy log viewing for all services
- Quick start/stop controls
- Built-in resource monitoring

## Common Use Cases

- **Web Applications**: Frontend, backend, and database
- **Microservices**: Multiple interconnected services
- **Development Environments**: Consistent dev setups
- **Testing**: Isolated test environments
    `,
    codeExample: {
      title: "Sample Docker Compose File",
      description: "A complete web application stack",
      code: `# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - database
    volumes:
      - .:/app
      - /app/node_modules

  database:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:

# Run with: docker-compose up -d`,
      language: "yaml"
    }
  },
  "model-runner": {
    title: "AI Model Runner in Docker Desktop",
    description: "Run AI models locally using Docker Desktop",
    duration: "30 min",
    difficulty: "Intermediate",
    content: `
Docker Desktop's Model Runner feature allows you to easily deploy and run AI models locally, providing a simple way to integrate machine learning into your applications.

## What is Model Runner?

Model Runner is a Docker Desktop feature that simplifies running AI/ML models in containers. It provides pre-configured environments for popular machine learning frameworks and models.

## Key Features

### Pre-built Images
Access optimized Docker images with popular ML frameworks like TensorFlow, PyTorch, and scikit-learn.

### GPU Support
Leverage GPU acceleration for faster model inference and training.

### Model Versioning
Manage different versions of your models with ease.

### API Integration
Expose models as REST APIs for easy integration with applications.

## Supported Frameworks

Model Runner supports various AI/ML frameworks:
- **TensorFlow**: Deep learning and neural networks
- **PyTorch**: Dynamic neural networks and research
- **scikit-learn**: Traditional machine learning algorithms
- **Hugging Face**: Natural language processing models
- **ONNX**: Cross-platform model format

## Getting Started

### Step 1: Enable Model Runner
Access Model Runner through Docker Desktop's extensions marketplace.

### Step 2: Choose a Model
Browse available models or import your own trained models.

### Step 3: Configure Resources
Set appropriate CPU, memory, and GPU allocations.

### Step 4: Deploy and Test
Start your model container and test with sample data.

## Use Cases

- **Local Development**: Test ML models without cloud dependencies
- **Prototyping**: Quickly experiment with different models
- **Production**: Deploy models in containerized environments
- **Edge Computing**: Run models on edge devices
    `,
    codeExample: {
      title: "Running a TensorFlow Model",
      description: "Deploy a pre-trained model with Model Runner",
      code: `# Pull TensorFlow Serving image
docker pull tensorflow/serving

# Run a model server
docker run -d --name tf-serving \\
  -p 8501:8501 \\
  -v /path/to/model:/models/my_model \\
  -e MODEL_NAME=my_model \\
  tensorflow/serving

# Test the model API
curl -d '{"instances": [1.0, 2.0, 5.0]}' \\
  -X POST http://localhost:8501/v1/models/my_model:predict

# View running models
docker ps

# Check model logs
docker logs tf-serving`,
      language: "bash"
    }
  },
  "mcp-toolkit": {
    title: "Docker MCP Toolkit",
    description: "Model Context Protocol integration with Docker",
    duration: "25 min",
    difficulty: "Advanced",
    content: `
The Docker MCP (Model Context Protocol) Toolkit provides seamless integration between AI models and containerized applications, enabling sophisticated AI workflows within Docker Desktop.

## Understanding MCP

Model Context Protocol (MCP) is a standardized way for AI models to interact with external tools and data sources. The Docker MCP Toolkit brings this capability to containerized environments.

## Key Components

### Context Providers
Services that supply context and data to AI models running in containers.

### Tool Integration
Connect models with external tools and APIs for enhanced capabilities.

### Session Management
Maintain conversation context across multiple container interactions.

### Security Layer
Secure communication between models and external resources.

## Docker Desktop Integration

The MCP Toolkit integrates deeply with Docker Desktop:
- **Visual Management**: Monitor MCP sessions through the GUI
- **Resource Allocation**: Optimize resources for AI workloads
- **Extension Support**: Enhance functionality with community extensions
- **Logging**: Comprehensive logging of model interactions

## Setting Up MCP Toolkit

### Installation
Install the MCP Toolkit extension from Docker Desktop's marketplace.

### Configuration
Configure context providers and tool integrations.

### Model Setup
Deploy MCP-compatible models using provided templates.

### Testing
Verify the setup with sample interactions.

## Use Cases

### Intelligent Automation
Create containers that can make decisions based on real-time data.

### Development Assistance
AI-powered code analysis and generation within development containers.

### Data Processing
Intelligent data transformation and analysis workflows.

### Customer Support
AI chatbots with access to containerized knowledge bases.
    `,
    codeExample: {
      title: "MCP Toolkit Configuration",
      description: "Basic setup for Model Context Protocol",
      code: `# docker-compose.yml for MCP setup
version: '3.8'

services:
  mcp-server:
    image: docker/mcp-toolkit:latest
    ports:
      - "8080:8080"
    environment:
      - MCP_CONFIG_PATH=/config/mcp.yml
    volumes:
      - ./config:/config
      - ./models:/models
    
  context-provider:
    image: docker/mcp-context:latest
    ports:
      - "8081:8081"
    environment:
      - PROVIDER_TYPE=database
      - DB_CONNECTION=postgresql://user:pass@db:5432/context
    depends_on:
      - database

  ai-model:
    image: docker/mcp-model:latest
    environment:
      - MODEL_TYPE=llama2
      - MCP_SERVER_URL=http://mcp-server:8080
    volumes:
      - ./models:/app/models

# Start the MCP stack
# docker-compose up -d`,
      language: "yaml"
    }
  },
  "docker-extensions": {
    title: "Docker Extensions Ecosystem",
    description: "Extend Docker Desktop functionality with powerful extensions",
    duration: "20 min",
    difficulty: "Intermediate",
    content: `
Docker Extensions transform Docker Desktop into a comprehensive development platform by adding specialized tools and integrations directly into the interface.

## What are Docker Extensions?

Docker Extensions are third-party tools that integrate seamlessly with Docker Desktop, providing additional functionality without leaving the Docker environment.

## Popular Extension Categories

### Development Tools
Extensions that enhance the development workflow:
- **Code Editors**: Integrated development environments
- **Database Tools**: GUI clients for various databases
- **API Testing**: Tools like Postman or Insomnia
- **Monitoring**: Real-time container and application monitoring

### DevOps and CI/CD
Streamline deployment and operations:
- **Kubernetes**: Manage K8s clusters and deployments
- **Registry Management**: Private registry administration
- **Security Scanning**: Vulnerability assessment tools
- **Backup Solutions**: Container and volume backup utilities

### Observability
Monitor and debug applications:
- **Log Aggregation**: Centralized logging solutions
- **Metrics Collection**: Performance monitoring dashboards
- **Tracing**: Distributed tracing for microservices
- **Alerting**: Notification and alerting systems

## Installing Extensions

### From the Marketplace
1. Open Docker Desktop
2. Navigate to the Extensions tab
3. Browse available extensions
4. Click "Install" on desired extensions

### From Command Line
Use the Docker CLI to manage extensions programmatically.

## Managing Extensions

### Enable/Disable
Toggle extensions on or off without uninstalling.

### Configuration
Most extensions provide configuration options within Docker Desktop.

### Updates
Keep extensions updated through the marketplace or CLI.

## Building Custom Extensions

Create your own extensions using the Docker Extensions SDK:
- **Web-based UI**: Build interfaces with HTML, CSS, and JavaScript
- **Backend Integration**: Connect to external services and APIs
- **Docker API Access**: Interact with Docker daemon directly
    `,
    codeExample: {
      title: "Managing Docker Extensions",
      description: "Command-line extension management",
      code: `# List installed extensions
docker extension list

# Install an extension
docker extension install docker/logs-explorer-extension

# Install from marketplace
docker extension install portainer/portainer-docker-extension

# Update all extensions
docker extension update

# Remove an extension
docker extension remove docker/logs-explorer-extension

# Enable/disable extension
docker extension enable docker/logs-explorer-extension
docker extension disable docker/logs-explorer-extension

# View extension details
docker extension inspect docker/logs-explorer-extension`,
      language: "bash"
    }
  }
};

export function TutorialContent({ currentTopic }: TutorialContentProps) {
  const content = tutorialContent[currentTopic as keyof typeof tutorialContent];
  
  if (!content) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h2>
        <p className="text-gray-600">This tutorial section is being prepared.</p>
      </div>
    );
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {content.difficulty}
          </Badge>
          <span className="text-sm text-gray-500">{content.duration}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-xl text-gray-600">{content.description}</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed">
        <ReactMarkdown>
          {content.content}
        </ReactMarkdown>
      </div>

      {/* Code Example */}
      {content.codeExample && (
        <Card className="mb-8 border-gray-200 shadow-sm">
          <CardHeader className="bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Terminal className="w-5 h-5 text-gray-600" />
                  <span>{content.codeExample.title}</span>
                </CardTitle>
                <CardDescription>{content.codeExample.description}</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(content.codeExample.code)}
                className="flex items-center space-x-2"
              >
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto rounded-b-lg">
              <code>{content.codeExample.code}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Button variant="outline" className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600">Mark as Complete</span>
        </div>
        
        <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
