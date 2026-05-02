import { useState } from 'react';
import { skills } from './data/skills';
import { Navbar, SkillCard, SkillDetail, QuestionGenerator, EssayPlanner, NineMarkGuide, SelfChecklist, FeedbackSimulator } from './components/AppComponents';

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="bg-gradient-to-r from-emerald-700 to-blue-700 text-white rounded-2xl p-6">
          <h1 className="text-3xl font-bold">ESS Paper 2 Essay Assistant</h1>
          <p className="mt-2">Master the 10 essential skills needed to write strong, balanced, and examiner-focused ESS Paper 2 essays.</p>
        </header>

        <section id="skills">
          <h2 className="text-2xl font-bold mb-3">10 Essential Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => <SkillCard key={skill.id} skill={skill} onOpen={setSelectedSkill} />)}
          </div>
        </section>

        <QuestionGenerator />
        <EssayPlanner />
        <NineMarkGuide />
        <SelfChecklist />
        <FeedbackSimulator />
      </main>
      <SkillDetail skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  );
}
