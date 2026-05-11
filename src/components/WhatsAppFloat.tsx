import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/250784909020";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
