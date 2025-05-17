import React from "react";
import { FaTwitter, FaGithub, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto mt-10 p-6 text-white rounded-lg shadow-lg">
      <h1 className="text-center text-black text-5xl font-bold mb-6">Contact Me</h1>

      <div className="space-y-4">
        <ContactItem icon={<FaTwitter />} title="Twitter/X" onClick={() => window.open("https://x.com/selidevJS", "_blank")} />
        <ContactItem icon={<FaGithub />} title="GitHub" onClick={() => window.open("https://github.com/ShoutSeli", "_blank")} />
        <ContactItem icon={<FaPhone />} title="Phone" text="+233201802290" />
        <ContactItem icon={<FaWhatsapp />} title="WhatsApp" onClick={() => window.open("https://wa.me/+233549567324", "_blank")} />
        <ContactItem icon={<FaEnvelope />} title="Email" onClick={() => window.open("mailto:samuelyawmawuli094@gmail.com")} />
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; onClick?: () => void; text?: string }> = ({ icon, title, onClick, text }) => {
  return (
    <div className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600">
      <div className="text-xl">{icon}</div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {text ? (
          <p className="text-gray-300">{text}</p>
        ) : (
          <button onClick={onClick} className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white">
            Open
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
