#Cloud computing practical task

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

