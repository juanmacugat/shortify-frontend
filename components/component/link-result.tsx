import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export function LinkResult({ shortLink } : any) {

  const copyToClipboard = async () => {
      navigator.clipboard.writeText(shortLink);
  }
  
    return shortLink && (
        <div className="flex items-center space-x-2 w-full">
          <input
            value={shortLink}
            aria-label="Shortened URL"
            className="p-2 border border-gray-200 rounded-md flex-grow"
            placeholder="Shortened URL will appear here..."
            readOnly
            type="text"
          />
            <Button onClick={copyToClipboard} className="bg-black text-white">Copy to clipboard</Button>
        </div>
    )
}