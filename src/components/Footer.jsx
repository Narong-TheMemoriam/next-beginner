import React from 'react';
import {Github,Twitter} from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between p-6 border">
        <h1>2026 NextStarter</h1>
        <div className="flex items-center gap-5">
            <a href="#"><Twitter /></a>
            <a href="#"><Github /></a>
        </div>
    </div>
  )
}
export default Footer
