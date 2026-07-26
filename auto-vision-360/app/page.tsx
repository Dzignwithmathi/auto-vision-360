import ProgressBar from "@/components/ProgressBar";
import MirrorIndicator from "@/components/MirrorIndicator";

import ColdOpen from "@/components/sections/ColdOpen";
import Hero from "@/components/sections/Hero";
import DriveHome from "@/components/sections/DriveHome";
import EverythingNormal from "@/components/sections/EverythingNormal";
import MindMap from "@/components/sections/MindMap";
import CarsVsAutos from "@/components/sections/CarsVsAutos";
import VisibilityReveal from "@/components/sections/VisibilityReveal";
import Hypothesis from "@/components/sections/Hypothesis";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import Interviews from "@/components/sections/Interviews";
import Findings from "@/components/sections/Findings";
import Synthesis from "@/components/sections/Synthesis";
import CompetitiveAnalysis from "@/components/sections/CompetitiveAnalysis";
import RoadObservation from "@/components/sections/RoadObservation";
import Principles from "@/components/sections/Principles";
import Sketches from "@/components/sections/Sketches";
import ConceptEvolution from "@/components/sections/ConceptEvolution";
import Introducing from "@/components/sections/Introducing";
import Features from "@/components/sections/Features";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import Scenarios from "@/components/sections/Scenarios";
import Impact from "@/components/sections/Impact";
import Reflection from "@/components/sections/Reflection";
import FutureRoadmap from "@/components/sections/FutureRoadmap";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <MirrorIndicator />

      <ColdOpen />
      <Hero />
      <DriveHome />
      <EverythingNormal />
      <MindMap />
      <CarsVsAutos />
      <VisibilityReveal />
      <Hypothesis />
      <ResearchTimeline />
      <Interviews />
      <Findings />
      <Synthesis />
      <CompetitiveAnalysis />
      <RoadObservation />
      <Principles />
      <Sketches />
      <ConceptEvolution />
      <Introducing />
      <Features />
      <BeforeAfterSection />
      <Scenarios />
      <Impact />
      <Reflection />
      <FutureRoadmap />
      <Closing />
    </main>
  );
}
