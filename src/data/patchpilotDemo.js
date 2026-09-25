export const patchpilotDemo = {
  issue: "Synthetic dependency issue detected in a sandboxed demo repository",
  plan: ["Review advisory and compatible version", "Update demo build file", "Run build and tests", "Generate patch for human review"],
  steps: ["Scan", "Identify issue", "Plan", "Modify sandbox", "Validate", "Generate patch", "Human review"],
  diff: `--- a/demo/build.gradle.kts
+++ b/demo/build.gradle.kts
@@ -1,3 +1,3 @@
 dependencies {
-    implementation("org.example:demo-lib:1.0.0")
+    implementation("org.example:demo-lib:1.0.1")
 }`
};
