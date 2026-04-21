import { useState } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "haircut",
    date: "",
    time: "",
  });

  const services = [
    { id: "haircut", label: "Classic Haircut - $35", name: "Classic Haircut" },
    { id: "beard", label: "Beard Trim - $25", name: "Beard Trim" },
    { id: "premium", label: "Premium Package - $65", name: "Premium Package" },
  ];

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all fields");
      return;
    }

    const selectedService = services.find((s) => s.id === formData.service);
    const message = `Hi UrbanFade! I'd like to book an appointment:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${selectedService?.name}\nDate: ${formData.date}\nTime: ${formData.time}`;

    const whatsappLink = `https://wa.me/12135555323?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-card border border-border rounded-lg shadow-xl w-full max-w-sm max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-card flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-xl sm:text-2xl font-bold">Book Your Cut</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(213) 555-1234"
              className="w-full px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm"
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
              Preferred Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm"
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary justify-center text-sm sm:text-base mt-4 sm:mt-6 py-2 sm:py-3"
          >
            Send to WhatsApp
          </button>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center mt-3">
            You'll be redirected to WhatsApp to confirm your booking
          </p>
        </form>
      </div>
    </div>
  );
}
