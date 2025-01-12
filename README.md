# Cloud computing practical task

## Practical task 1

Log in to the Cloud.
Create the infrastructure setup.
You will need the following resources: serverless function, message broker (queue or topic), blob or file storage.\
Verify connectivity between resources: function and message broker - function should be able to pick messages from broker, function should have access to storage.\
You should be able to trigger your function, by calling its IP or by REST. If it’s impossible please create the app gateway or other load balancer for the function.
Create the application setup.\
Upload a code for a function that will process a message from the broker. Code logic should be the following: when a new message arrives in the message broker, the function is triggered, and processes the message by putting it into the file storage as a new file.\
Verify the whole setup.\
Create a trigger for a message broker or trigger it by calling load balancer to check if the function is processing messages and putting it into storage.\

## Practical task 2

Create a network.\
Create a single network with public and private subnets. Network setup should achieve high availability for resources deployed further.\
Create required resources to archive private networking to cloud services from the network.Services: container registry, objects storage, queue service.\
Create a cloud managed container registry.\
Configure lifecycle policies to remove stale images to optimize costs for storing images.\
The configuration of the CR should provide increased high-availability.\
Restrict public access.\
Create a cloud managed objects storage.\
Apply lifecycle policies to automatically move objects between tiers for cost optimization.\
Configure it with high-availability in mind.\
Restrict public access.\
Create cloud managed queue service.\
Restrict public access.\
Create cloud managed relational databases.\
Restrict public access and allow access only from the created network.\
Create a dedicated user for the application. Use a bastion host to access the DB. User credentials should be placed in cloud managed secrets store.\
Deploy cloud managed kubernetes cluster.\
The configuration should allow workloads to be deployed in a private network with an option to be exposed to the public with load balancer solutions.\
The configuration should achieve increased high-availability.\
Access to the kubernetes API should be public.\
Grant kubernetes nodes permissions to pull images from managed container registry.\
Use cloud cloud proposed solutions for metrics & logs.\
Select appropriate solution for monitoring of kubernetes. Optimize it to be cost effective.\
Enable if needed and configure monitoring for services used.\
Build a dashboard with key metrics for kubernetes cluster and other services.\
Install and integrate kubernetes addons with cloud.\
In case access to the cloud for the addon is required then it should be fine-grained, scoped, and credential-free.\
Addons should be running on separate nodes isolated from the other workloads.\
[EKS & AKS] Install and configure Karpenter to achieve node autoscaling. Configuration should involve spot interruption handling.\
Install Horizontal Pod Autoscaler controller and Metrics server in case it is not installed.\
Install External Secrets or CSI Secrets Driver addon to securely access secrets in cloud managed secrets stores.
Install KEDA addon.\
Deploy the applications.\
Credentials to the relational database should be provided to the backend using External Secrets or CSI Secrets Driver addon. This way secrets provided to the app should be synced with secrets stored in cloud managed secrets store.\
Access for the backend to the object's cloud storage should be credential-free.\
Backend and Frontend should be exposed to the public with the L7 Load Balancer solution.\
img-processor should have access to the cloud managed queue and object’s storage.\
Create KEDA ScaledObject targeting cloud queue and kubernetes Deployment of img-processor application to archive scaling based on number of messages in the queue.\
