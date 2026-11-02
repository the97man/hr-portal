import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
export default function AskAI({ showToast }) {
  const prompts = [
    "Summarise pending approvals",
    "Who is joining this month?",
    "Show open roles by department",
    "Explain the annual leave policy",
  ];
  const ask = () =>
    showToast("Your question has been added to the assistant queue.");
  return (
    <>
      <SectionTitle
        eyebrow="WORKSPACE ASSISTANT"
        title="Ask AI"
        subtitle="Your HR assistant for people insights, policies and everyday tasks."
      />
      <div className="ai-panel">
        <div className="ai-orb">
          <Sparkles size={24} />
        </div>
        <h2>How can I help today?</h2>
        <p>
          Ask questions about your people data, policies, hiring pipeline or HR
          workflows.
        </p>
        <div className="ai-input">
          <input
            placeholder="Ask anything about your people operations..."
            onKeyDown={(event) => event.key === "Enter" && ask()}
          />
          <Button onClick={ask} icon={ArrowUpRight}>
            Ask
          </Button>
        </div>
        <div className="prompt-chips">
          {prompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => showToast(`Prompt selected: ${prompt}`)}
            >
              {prompt} <ArrowUpRight size={12} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
