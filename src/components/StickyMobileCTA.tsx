
import React from 'react';
import { Button } from "@/components/ui/button";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t sticky-cta md:hidden z-40">
      <Button className="btn-primary w-full">Start Saving Time</Button>
    </div>
  );
}
