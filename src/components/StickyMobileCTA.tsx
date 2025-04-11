
import React from 'react';
import { Button } from "@/components/ui/button";

export function StickyMobileCTA() {
  const handleTryNowClick = () => {
    // Find the ElevenLabs widget and click its button
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      const widgetButton = widget.shadowRoot?.querySelector('button');
      if (widgetButton) {
        widgetButton.click();
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t sticky-cta md:hidden z-40">
      <Button className="btn-primary w-full" onClick={handleTryNowClick}>Start Saving Time</Button>
    </div>
  );
}
