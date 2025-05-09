# ResumeWebsiteNextJs
A repository that holds code for the [resume website](https://www.andrew-doser.com).

Continuous Integration is done using Github Actions.

Continuous Deployment is done using Elastic Registry Service and Elastic Container Service.

## Completed Goals:

- [x] Add Continuous Deployment using AWS Lambda, EventBridge, ECR and ECS.
- [x] Add DynamoDB
- [x] Add Lambdas
- [x] Add API Gateway
- [x] Create a different repo for backend api `NOTE: used API Gateway`
    - [x] Added Profile
    - [x] Added Jobs
    - [x] Added Testimonials
- [x] Add async loading
- [x] Converted to AWS App Runner from ECS for testing purposes
  - For some odd reason had to change how the entrypoint to the docker container works. Cannot use standalone server file.

## Future Goals:

- [ ] Add unit testing
- [ ] Create a different repo for backend api
- [ ] Add some other example projects to better showcase skill

