import React from "react";

function LifeResume() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Pratham Mhatre</h1>
        <p className="text-lg italic text-gray-600">
          Curious Builder | Automation Architect | AI Explorer
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I’m not just a software engineer — I’m a <strong>systems thinker</strong> who sees inefficiencies and instinctively wants to solve them.
          Whether it's building Chrome extensions, crafting AI pipelines, or designing storytelling engines — every project I take on is a conversation between logic and imagination.
        </p>
        <p>
          I don’t chase roles. I chase <strong>impact</strong>. And I’ve learned that the shortest path to mastery is through <strong>obsession</strong> and <strong>experimentation</strong> — not just credentials.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Signature Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>AI Resume Tailor:</strong> A hybrid job description parser + tone-matching resume generator.</li>
          <li><strong>Voice-Controlled PC Automation:</strong> Offline Whisper-powered personal assistant.</li>
          <li><strong>Minecraft Wuxia Engine:</strong> Mod-based storytelling adventure system.</li>
          <li><strong>Emotion + Logic Book:</strong> Ongoing introspective writing project.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Core Traits</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Pattern Seeker:</strong> Detect automatable workflows fast.</li>
          <li><strong>Emotional Architect:</strong> Design for meaning, not just structure.</li>
          <li><strong>Relentless Simplifier:</strong> Remove unnecessary friction.</li>
          <li><strong>Self-Taught Innovator:</strong> Rapid independent upskilling.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Career Archetype</h2>
        <p>
          The Quiet Technologist Who Builds for Empowerment — I don’t speak the loudest, but I build tools that give voice to others.
          I’m not trying to be everywhere. I just want to leave <em>one thing behind</em> that makes people think — <em>"someone who cared made this."</em>
        </p>
      </section>

      <section className="space-y-2 border-t pt-4">
        <h2 className="text-2xl font-semibold">Closing Statement</h2>
        <p className="italic text-gray-700">
          “I don’t believe in tailoring who I am to every job. I believe in finding the few who see the value in what I’ve already become.”
        </p>
      </section>
    </div>
  );
}

export default LifeResume;
