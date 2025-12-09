import { Timeline } from "@/components/animation/timeline";

import EXPEERIENCES from "@/config/experiences";

function MyJourney() {
  return (
    <div className="relative w-full">
      <Timeline
        title="My Journey"
        description="Over the past five years, I have been advancing my journey with Aceternity. Here’s a timeline of my progress."
        items={EXPEERIENCES}
      />
    </div>
  );
}

export default MyJourney;
