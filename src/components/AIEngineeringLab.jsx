import RepoPilotDemo from "./RepoPilotDemo";
import PatchPilotDemo from "./PatchPilotDemo";

const AIEngineeringLab = () => (
  <section id="ai-lab" className="section">
    <div className="container">
      <p className="lab-eyebrow">03 / Public experiments</p>
      <h2 className="headline-2 mb-4">AI Engineering Lab</h2>
      <p className="text-gray-300 max-w-3xl mb-8 leading-relaxed">
        Explore retrieval and agentic maintenance through clean-room public demos. The examples use synthetic repositories and are separate from my professional work at Ford.
      </p>
      <RepoPilotDemo />
      <PatchPilotDemo />
    </div>
  </section>
);

export default AIEngineeringLab;
