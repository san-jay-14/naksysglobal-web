import React from "react";

export function PurpleActionButton({ text }: { text: string }) {
  return (
    <button
      className={`px-4 py-2 bg-[#df540c] text-white rounded-3xl hover:bg-purple-700 transition-colors}`}
    >
      {text}
    </button>
  );
}

export function TransparentWhiteButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-white text-black border border-black rounded-3xl hover:bg-gray-100 transition-colors">
      {text}
    </button>
  );
}

export function TransparentBlackButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-black text-white border border-white rounded-3xl hover:bg-gray-800 transition-colors">
      {text}
    </button>
  );
}

export function GreyActionButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-[#e6e7e7] text-black rounded-3xl hover:bg-[#b8b9b9] transition-colors">
      {text}
    </button>
  );
}

export function WhiteActionButton({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 bg-[#e6e7e7] text-black rounded-3xl hover:bg-[#b8b9b9] transition-colors">
      {text}
    </button>
  );
}
