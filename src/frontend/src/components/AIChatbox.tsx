import { ChevronDown, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

type Role = "bot" | "user";
type Msg = {
  id: number;
  role: Role;
  text?: string;
  chips?: string[];
  form?: "contact";
};

const KB = {
  greeting:
    "Hi! Welcome to MG Media 👋 How can I help you today? Ask me anything about our services, plans, or projects!",
  plans:
    "Here are our website design plans:\n\n🚀 **Starter — ₹499**\n• 3–4 Pages\n• Website Design & Development\n• Fast Loading (Mobile & Laptop)\n• Basic Social Media Integration\n\n⭐ **Professional — ₹999** *(Most Popular)*\n• 5–7 Pages\n• All Starter features\n• Enhanced SEO Optimization\n• AI Chatbox\n• Free Logo Design\n\n👑 **Premium — ₹1599**\n• Up to 10 Pages\n• All Professional features\n• Professional Brand Logo Design\n• Google My Business Setup\n• Custom Design",
  services:
    "We offer the following services at MG Media:\n\n🎨 Website Design & Development\n📱 Mobile Responsive Design\n🔍 SEO Optimization\n📲 Social Media Integration\n🤖 AI Chatbox Integration\n🎯 Google My Business Setup\n✨ Brand Logo Design",
  contact:
    "You can reach Monika Gupta at:\n\n📧 **Email:** monikamkg0725@gmail.com\n\nFeel free to drop a message and she'll get back within 24 hours!",
  projects:
    "Here are some of our recent projects:\n\n🍽️ **Restaurant Website** — Modern digital menus and integrated online booking.\n\n💅 **Beauty Salon Website** — Elegant design with seamless booking system.",
  about:
    "MG Media is a web design studio by **Monika Gupta**, based in Gorakhpur, India. We specialize in building professional, affordable, and high-converting websites for local businesses. Our goal is to make local businesses visible online!",
  unknown:
    "I can only answer questions about MG Media. Please ask about our plans, services, projects, or contact details. 😊",
};

const QUICK_QUESTIONS = [
  "What are your plans & pricing?",
  "What services do you offer?",
  "How can I contact you?",
  "Tell me about your projects",
];

function getResponse(input: string): string {
  const q = input.toLowerCase();
  if (/\b(hi|hello|hey|hii|namaste)\b/.test(q))
    return "Hello! 👋 Great to meet you! How can I help you with MG Media today?";
  if (/plan|price|pricing|cost|package|₹|starter|professional|premium/.test(q))
    return KB.plans;
  if (/service|offer|provide|what do you do/.test(q)) return KB.services;
  if (/contact|email|reach|phone|call|whatsapp/.test(q)) return KB.contact;
  if (/project|work|portfolio|restaurant|salon|example|live/.test(q))
    return KB.projects;
  if (/about|who|monika|gorakhpur|mg media|studio/.test(q)) return KB.about;
  return KB.unknown;
}

function renderText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`b-${i}-${part.slice(0, 4)}`}>{part}</strong>
    ) : (
      <span key={`s-${i}-${part.slice(0, 4)}`}>{part}</span>
    ),
  );
}

let msgCounter = 3;

export default function AIChatbox() {
  const { isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 1,
      role: "bot",
      text: KB.greeting,
      chips: QUICK_QUESTIONS,
    },
  ]);
  const [input, setInput] = useState("");
  const [userMsgCount, setUserMsgCount] = useState(0);
  const [contactAsked, setContactAsked] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const msgCountRef = useRef(0);

  // Auto-scroll whenever a new message is added
  useEffect(() => {
    const currentCount = messages.length;
    if (currentCount !== msgCountRef.current) {
      msgCountRef.current = currentCount;
      setTimeout(
        () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
        50,
      );
    }
  });

  // Also scroll when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(
        () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
    }
  }, [open]);

  function addMessage(msg: Omit<Msg, "id">) {
    msgCounter++;
    setMessages((prev) => [...prev, { ...msg, id: msgCounter }]);
  }

  function sendMessage(text: string) {
    if (!text.trim()) return;
    addMessage({ role: "user", text });
    setInput("");
    const count = userMsgCount + 1;
    setUserMsgCount(count);

    setTimeout(() => {
      const resp = getResponse(text);
      addMessage({ role: "bot", text: resp });

      if (count >= 2 && !contactAsked && !contactSubmitted) {
        setContactAsked(true);
        setTimeout(() => {
          addMessage({
            role: "bot",
            text: "Would you like to leave your contact info so we can reach out to you? 😊",
            form: "contact",
          });
        }, 700);
      }
    }, 500);
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactSubmitted(true);
    addMessage({
      role: "bot",
      text: `Thanks ${contactForm.name}! 🎉 We've noted your details. Monika will reach out to you at ${contactForm.phone} soon!`,
    });
    setContactForm({ name: "", phone: "" });
  }

  const bg = isDark ? "#1a1a2e" : "#ffffff";
  const textColor = isDark ? "#e5e7eb" : "#1f2937";
  const borderColor = isDark ? "#333355" : "#e5e7eb";
  const inputBg = isDark ? "#111122" : "#f9fafb";
  const userBubble = "#8c52ff";
  const botBubble = isDark ? "#2a2a4a" : "#f5f0ff";

  return (
    <>
      {/* Floating label when closed */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed bottom-[5.5rem] right-20 z-50 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-purple-200 whitespace-nowrap pointer-events-none"
        >
          Chat with us! 💬
        </motion.div>
      )}

      {/* Pulsing ring when closed */}
      {!open && (
        <span
          className="fixed bottom-20 right-6 z-40 w-14 h-14 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: "#8c52ff" }}
        />
      )}

      {/* Chat Button */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid="chatbox.open_modal_button"
        className="fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: "#8c52ff" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!open ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={
          !open
            ? {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }
            : { duration: 0.2 }
        }
        aria-label="Open chat"
      >
        {open ? (
          <ChevronDown size={22} color="white" />
        ) : (
          <MessageCircle size={22} color="white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            data-ocid="chatbox.modal"
            className="fixed bottom-36 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              maxHeight: "500px",
              backgroundColor: bg,
              border: `1px solid ${borderColor}`,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ backgroundColor: "#8c52ff" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={16} color="white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    MG Media Assistant
                  </p>
                  <p className="text-white/70 text-xs">
                    Usually replies instantly
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-ocid="chatbox.close_button"
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ backgroundColor: bg }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-[85%]">
                    {msg.text && (
                      <div
                        className="px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                        style={{
                          backgroundColor:
                            msg.role === "user" ? userBubble : botBubble,
                          color: msg.role === "user" ? "white" : textColor,
                          borderBottomRightRadius:
                            msg.role === "user" ? "4px" : undefined,
                          borderBottomLeftRadius:
                            msg.role === "bot" ? "4px" : undefined,
                        }}
                      >
                        {msg.role === "bot" ? renderText(msg.text) : msg.text}
                      </div>
                    )}
                    {msg.chips && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.chips.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => sendMessage(chip)}
                            className="text-xs px-3 py-1.5 rounded-full border transition-all hover:opacity-80"
                            style={{
                              backgroundColor: isDark ? "#2a2a4a" : "#f5f0ff",
                              borderColor: "#8c52ff",
                              color: "#8c52ff",
                            }}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                    {msg.form === "contact" && !contactSubmitted && (
                      <form
                        onSubmit={handleContactSubmit}
                        className="mt-2 p-3 rounded-xl"
                        style={{ backgroundColor: botBubble }}
                      >
                        <p
                          className="text-xs font-semibold mb-2"
                          style={{ color: textColor }}
                        >
                          Leave your details:
                        </p>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          data-ocid="chatbox.input"
                          className="w-full text-xs px-3 py-2 rounded-lg mb-2 focus:outline-none"
                          style={{
                            backgroundColor: inputBg,
                            border: `1px solid ${borderColor}`,
                            color: textColor,
                          }}
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm((f) => ({
                              ...f,
                              name: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          data-ocid="chatbox.input"
                          className="w-full text-xs px-3 py-2 rounded-lg mb-2 focus:outline-none"
                          style={{
                            backgroundColor: inputBg,
                            border: `1px solid ${borderColor}`,
                            color: textColor,
                          }}
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm((f) => ({
                              ...f,
                              phone: e.target.value,
                            }))
                          }
                        />
                        <button
                          type="submit"
                          data-ocid="chatbox.submit_button"
                          className="w-full text-xs font-bold py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                          style={{ backgroundColor: "#8c52ff" }}
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
              style={{
                borderTop: `1px solid ${borderColor}`,
                backgroundColor: bg,
              }}
            >
              <input
                type="text"
                placeholder="Type your message..."
                data-ocid="chatbox.search_input"
                className="flex-1 text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
              />
              <button
                type="button"
                data-ocid="chatbox.primary_button"
                onClick={() => sendMessage(input)}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#8c52ff" }}
                aria-label="Send"
              >
                <Send size={16} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
