import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-20 text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: "rgba(140,82,255,0.1)" }}
          >
            <CheckCircle size={40} style={{ color: "#8C52FF" }} />
          </div>
          <h1
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#8C52FF" }}
          >
            Thank You! Your vision is in safe hands.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            We've received your details and will reach out to you at{" "}
            <strong className="text-gray-800">monikamkg0725@gmail.com</strong>{" "}
            within 24 hours.
          </p>
          <Link
            to="/"
            data-ocid="thankyou.home.button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-white font-semibold text-sm hover:opacity-90 transition-all"
            style={{ backgroundColor: "#8C52FF" }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
