import Image from 'next/image';

const WHATSAPP = "5511914344551";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

export default function WhatsAppButtonFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 drop-shadow-xl hover:scale-110 transition-transform duration-200"
    >
      <Image
        src="/images/whats.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </a>
  );
}