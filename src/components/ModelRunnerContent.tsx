export const modelRunnerContent = {
  title: "Docker Model Runner",
  description: "Run Large Language Models locally with Docker Desktop",
  duration: "45 min",
  difficulty: "Intermediate",
  content: `
Docker Model Runner is an experimental feature in Docker Desktop 4.40+ that provides a Docker-native experience for running Large Language Models (LLMs) locally. It seamlessly integrates with existing container tooling and workflows, offering GPU-accelerated inference engines accessible through both Docker socket and TCP connections.

## What's Docker Model Runner All About?

Docker Model Runner provides inference capabilities directly on your laptop, allowing you to run LLM models locally without relying on external APIs. This is crucial for developing GenAI applications with enhanced privacy and reduced latency.

### Key Benefits

- **Native Docker Integration**: AI models are treated as first-class citizens in Docker CLI
- **GPU Acceleration**: Direct access to hardware GPU acceleration on Apple Silicon
- **Local Inference**: Your data never leaves your infrastructure
- **OCI Artifacts**: Models stored as standardized artifacts in Docker Hub
- **No Containerization Overhead**: Models run directly on host for better performance

## Native Docker Integration through docker model CLI

Docker Desktop 4.40+ introduces the docker model CLI as a first-class citizen. This means AI models are now fundamental, well-supported objects within Docker CLI, similar to containers, images, and volumes.

### CLI Capabilities

- Pull models from registries (Docker Hub)
- Run models locally with GPU acceleration
- Integrate models into development workflows
- Test GenAI applications without external APIs

## How Model Runner Works

Unlike traditional Docker containers, AI models DO NOT run in containers with Model Runner. Instead, Docker uses a host-installed inference server (llama.cpp) that runs natively on your machine.

### Architecture

1. **Host-level Process**: Docker Desktop runs llama.cpp directly on your host machine
2. **GPU Acceleration**: Direct access to Apple's Metal API for GPU acceleration
3. **Model Loading**: Models downloaded from Docker Hub are cached locally and dynamically loaded

### Advantages of OCI Artifacts

- **No Compression**: Model weights are largely uncompressible, so no compression overhead
- **Faster Deployments**: No need for both compressed and uncompressed versions
- **Lower Disk Requirements**: More efficient storage usage
- **Standardized Format**: Works with any Docker Registry

## Who's This For?

- **Application Developers**: Building GenAI applications with local testing capabilities
- **Data Scientists**: Need simple ways to run models locally with GPU acceleration
- **Mac Users**: Apple Silicon (M1/M2/M3/M4) users wanting to leverage GPU capabilities
- **Privacy-Conscious Teams**: Those requiring local AI workflows without external data sharing
- **Prototype Developers**: Teams needing quick iteration cycles without cloud deployments

## Getting Started

### Prerequisites

- Docker Desktop 4.40+
- Apple Silicon Mac (M-series) - Windows support available
- "Docker Model Runner" enabled in settings

### Enable Model Runner

**Using CLI:**
docker desktop enable model-runner

**Using Docker Dashboard:**
Navigate to Settings → Features → Enable "Docker Model Runner"

### Check Status

docker model status
Output: Docker Model Runner is running

## Working with Models

### Available Commands

- docker model pull - Download a model
- docker model list - List available models
- docker model run - Run a model
- docker model rm - Remove a model
- docker model inspect - Display model details
- docker model version - Show version information

### Download and Run Models

Models are available from Docker Hub under the ai/ namespace:
- ai/llama3.2
- ai/gemma3
- ai/mistral
- ai/phi4
- ai/qwen2.5
- ai/deepseek-r1-distill-llama

## Connection Methods

### 1. From Within Containers
http://model-runner.docker.internal/

### 2. From Host via Docker Socket
Access via the Docker socket for internal communication

### 3. From Host via TCP
When TCP host support is enabled (default port 12434)

## OpenAI API Compatibility

Model Runner implements OpenAI-compatible endpoints:
- GET /engines/{backend}/v1/models
- GET /engines/{backend}/v1/models/{namespace}/{name}
- POST /engines/{backend}/v1/chat/completions
- POST /engines/{backend}/v1/completions
- POST /engines/{backend}/v1/embeddings

## Latest Updates (June 2025)

- Available on x86 Windows machines with NVIDIA GPUs
- Windows support for Qualcomm/ARM GPUs
- Real-time logs tab in Models view
- Push models to Docker Hub capability
- Docker Compose and Testcontainers support
- Streaming and tool calling support in llama.cpp server
- Docker CE compatibility

## Use Cases

- **Local GenAI Development**: Build applications without external API dependencies
- **Privacy-First AI**: Keep sensitive data within your infrastructure
- **Rapid Prototyping**: Quick iteration cycles for AI-powered features
- **Edge Computing**: Deploy AI capabilities on edge devices
- **Development Testing**: Test AI integrations before cloud deployment
  `,
  codeExample: {
    title: "Complete Model Runner Workflow",
    description: "Download, run, and interact with an LLM using Model Runner",
    code: `# Check if Model Runner is active
docker model status

# List available models (initially empty)
docker model ls

# Download a model from Docker Hub
docker model pull ai/llama3.2:1B-Q8_0

# Verify the model is downloaded
docker model ls
# MODEL                PARAMETERS  QUANTIZATION  ARCHITECTURE  MODEL ID      CREATED       SIZE
# ai/llama3.2:1B-Q8_0  1.24 B      Q8_0          llama         a15c3117eeeb  20 hours ago  1.22 GiB

# Send a single message to the model
docker model run ai/llama3.2:1B-Q8_0 "Explain Docker in simple terms"

# Start interactive chat mode
docker model run ai/llama3.2:1B-Q8_0
# Interactive chat mode started. Type '/bye' to exit.
# > What are the benefits of containerization?

# Access via Docker socket (from host)
curl --unix-socket /var/run/docker.sock \\
    localhost/exp/vDD4.40/engines/llama.cpp/v1/chat/completions \\
    -H "Content-Type: application/json" \\
    -d '{
      "model": "ai/llama3.2:1B-Q8_0",
      "messages": [
        {"role": "user", "content": "Hello from Docker socket!"}
      ]
    }'

# Enable TCP support for external access
docker desktop enable model-runner --tcp 12434

# Test TCP connection
curl -X POST http://localhost:12434/engines/llama.cpp/v1/chat/completions \\
    -H "Content-Type: application/json" \\
    -d '{
      "model": "ai/llama3.2:1B-Q8_0",
      "messages": [
        {"role": "user", "content": "Hello via TCP!"}
      ]
    }'

# Clean up - remove the model
docker model rm ai/llama3.2:1B-Q8_0

# Check logs (macOS)
tail -f ~/Library/Containers/com.docker.docker/Data/log/host/inference-llama.cpp.log`,
    language: "bash"
  }
};