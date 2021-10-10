project = "waypoint-slides"

app "slides" {
    build {
        use "docker" {
          disable_entrypoint = true
        }

        registry {
          use "docker" {
            image = "dvitali/waypoint-slides"
            tag = "latest"
          }
        }
    }

    # Deploy to Kubernetes
    deploy {
        use "kubernetes" {
          service_port = 80
          replicas = 3
          namespace = "denvit-waypoint-example"
          resources = {
            limits_cpu = "100m"
            limits_memory = "64Mi"
            requests_cpu = "10m"
            requests_memory = "16Mi"
          }
        }
    }
}
