export const demoRepositories = [
  { id: "demo-auth", name: "Demo Auth", description: "Synthetic Spring security example" },
  { id: "demo-incidents", name: "Demo Incidents", description: "Synthetic incident service" },
  { id: "demo-media", name: "Demo Media", description: "Synthetic upload service" }
];

export const demoQuestions = [
  { repository: "demo-auth", query: "Where is authentication enforced?", key: "authentication" },
  { repository: "demo-auth", query: "How does the application authorize managers?", key: "managers" },
  { repository: "demo-incidents", query: "How are incidents persisted?", key: "incidents" },
  { repository: "demo-media", query: "Where are image uploads handled?", key: "uploads" }
];

const documents = {
  security: {
    id: "security", repository: "demo-auth", path: "src/main/java/demo/auth/SecurityConfig.java",
    symbol: "SecurityConfig.filterChain", snippet: "http.authorizeHttpRequests(requests -> requests\n    .requestMatchers(\"/manager/**\").hasRole(\"MANAGER\")\n    .anyRequest().authenticated());"
  },
  filter: {
    id: "filter", repository: "demo-auth", path: "src/main/java/demo/auth/JwtAuthFilter.java",
    symbol: "JwtAuthFilter.doFilterInternal", snippet: "String token = bearerToken(request);\nif (token != null && jwtService.isValid(token)) {\n    SecurityContextHolder.getContext().setAuthentication(authentication(token));\n}"
  },
  jwt: {
    id: "jwt", repository: "demo-auth", path: "src/main/java/demo/auth/JwtService.java",
    symbol: "JwtService.isValid", snippet: "boolean isValid(String token) {\n    return verifier.verify(token) != null;\n}"
  },
  manager: {
    id: "manager", repository: "demo-auth", path: "src/main/java/demo/auth/ManagerController.java",
    symbol: "ManagerController.listReports", snippet: "@PreAuthorize(\"hasRole('MANAGER')\")\n@GetMapping(\"/manager/reports\")\nList<Report> listReports() { return service.findReports(); }"
  },
  incident: {
    id: "incident", repository: "demo-incidents", path: "src/main/java/demo/incidents/IncidentService.java",
    symbol: "IncidentService.record", snippet: "Incident record(CreateIncident command) {\n    Incident incident = mapper.from(command);\n    return incidentRepository.save(incident);\n}"
  },
  repository: {
    id: "repository", repository: "demo-incidents", path: "src/main/java/demo/incidents/IncidentRepository.java",
    symbol: "IncidentRepository", snippet: "interface IncidentRepository extends JpaRepository<Incident, UUID> {\n    List<Incident> findBySiteId(UUID siteId);\n}"
  },
  event: {
    id: "event", repository: "demo-incidents", path: "src/main/java/demo/incidents/IncidentEvents.java",
    symbol: "IncidentEvents.publishRecorded", snippet: "void publishRecorded(Incident incident) {\n    eventPublisher.publish(new IncidentRecorded(incident.id()));\n}"
  },
  upload: {
    id: "upload", repository: "demo-media", path: "src/main/java/demo/media/ImageUploadService.java",
    symbol: "ImageUploadService.store", snippet: "StoredImage store(MultipartFile image) {\n    validateContentType(image);\n    return objectStore.put(image.getInputStream());\n}"
  },
  endpoint: {
    id: "endpoint", repository: "demo-media", path: "src/main/java/demo/media/UploadController.java",
    symbol: "UploadController.upload", snippet: "@PostMapping(\"/images\")\nStoredImage upload(@RequestPart MultipartFile image) {\n    return imageUploadService.store(image);\n}"
  },
  storage: {
    id: "storage", repository: "demo-media", path: "src/main/java/demo/media/ObjectStore.java",
    symbol: "ObjectStore.put", snippet: "StoredImage put(InputStream contents) {\n    return storageClient.write(contents);\n}"
  }
};

export const demoDocuments = documents;

export const demoRankings = {
  authentication: { lexical: ["security", "jwt", "filter"], semantic: ["filter", "security", "jwt"] },
  managers: { lexical: ["security", "manager", "filter"], semantic: ["manager", "security", "jwt"] },
  incidents: { lexical: ["repository", "incident", "event"], semantic: ["incident", "event", "repository"] },
  uploads: { lexical: ["upload", "endpoint", "storage"], semantic: ["endpoint", "upload", "storage"] }
};

export const demoAgentOutcomes = {
  authentication: {
    evidence: ["security", "filter"],
    response: "Authentication is enforced in SecurityConfig.filterChain, which requires authenticated requests by default. JwtAuthFilter.doFilterInternal validates a bearer token and sets the security context.",
    nextStep: "Inspect the route matchers and token validation path before changing access rules."
  },
  managers: {
    evidence: ["security", "manager"],
    response: "The manager route is restricted in SecurityConfig.filterChain, and ManagerController.listReports also declares a MANAGER role check.",
    nextStep: "Review both policy and method-level checks before changing manager access."
  },
  incidents: {
    evidence: ["incident", "repository"],
    response: "IncidentService.record maps the incoming command and calls IncidentRepository.save. The repository defines the persistence boundary.",
    nextStep: "Inspect the entity mapping and transaction boundary before changing persistence behavior."
  },
  uploads: {
    evidence: ["endpoint", "upload"],
    response: "UploadController.upload delegates to ImageUploadService.store, which validates the file type and passes its contents to ObjectStore.",
    nextStep: "Inspect validation and storage error handling before changing the upload flow."
  }
};
