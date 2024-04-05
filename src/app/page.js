import { LLMPrompt } from "./components/llmpromt";

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Ask something</h1>
        <LLMPrompt />

      </div>
    </main>
  );
}
