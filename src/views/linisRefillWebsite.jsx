import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import video1 from "../assets/video1.mp4";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

import {
  Menu,
  X,
  Droplet,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Recycle,
  Store,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";

export default function LinisRefillWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-green-50"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`shadow-md fixed w-full z-50 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="./src/assets/without_bg.png"
                alt="logo"
                className={`w-24 h-24 ${
                  isDarkMode ? "filter brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {[
                "home",
                "about",
                "showcase",
                "products",
                "how-it-works",
                "advocacy",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition ${
                    activeSection === section
                      ? "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {section === "how-it-works" ? "How It Works" : section}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isDarkMode ? "text-white" : "text-gray-900"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {[
                "home",
                "about",
                "products",
                "how-it-works",
                "advocacy",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 capitalize rounded transition ${
                    isDarkMode
                      ? "hover:bg-gray-700 text-gray-300"
                      : "hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  {section === "how-it-works" ? "How It Works" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-24 pb-16 px-4 min-h-screen flex items-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div
            className={`absolute inset-0 ${
              isDarkMode ? "bg-black/60" : "bg-black/40"
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Refill Stations at Your Local Sari-Sari Store
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white drop-shadow-lg">
              Fighting plastic waste, one refill at a time. Get your dishwashing
              soap, liquid detergent, and fabric conditioner without buying new
              bottles.
            </p>
            <p className="text-lg md:text-xl text-green-400 font-semibold mb-8 drop-shadow-lg">
              ♻️ Same quality. Less waste. More savings.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-xl"
              >
                Find a Station Near You
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="bg-white/90 backdrop-blur text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-white transition shadow-xl"
              >
                Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-4 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Linis Refill
          </h2>
          <p
            className={`text-center text-xl mb-12 max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're on a mission to reduce plastic waste in the Philippines by
            placing refill stations in strategically located sari-sari stores
            across communities.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`text-center p-6 rounded-xl transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900 to-blue-800"
                  : "bg-gradient-to-br from-blue-50 to-blue-100"
              }`}
            >
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-10 w-10 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Strategic Locations
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our refill stations are carefully placed in sari-sari stores
                where communities gather, making sustainable choices convenient
                and accessible.
              </p>
            </div>
            <div
              className={`text-center p-6 rounded-xl transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-green-900 to-green-800"
                  : "bg-gradient-to-br from-green-50 to-green-100"
              }`}
            >
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-10 w-10 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Plastic Waste Reduction
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Every refill means one less plastic bottle in our landfills and
                oceans. Together, we're making a real environmental impact.
              </p>
            </div>
            <div
              className={`text-center p-6 rounded-xl transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900 to-purple-800"
                  : "bg-gradient-to-br from-purple-50 to-purple-100"
              }`}
            >
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Quality Products
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Premium cleaning solutions at affordable prices. No compromise
                on quality, just a better way to shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section
        id="showcase"
        className={`py-16 px-4 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-10 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Linis Refill in Action
          </h2>

          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="max-w-4xl"
          >
            {[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
            ].map((img, index) => (
              <SwiperSlide
                key={index}
                className="w-72 h-96 bg-transparent flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Showcase ${index + 1}`}
                  className="rounded-2xl shadow-xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Products
          </h2>
          <p
            className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Three essential cleaning products available for refill at all our
            stations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-white">
                <Droplet className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold">Dishwashing Soap</h3>
              </div>
              <div className="p-6">
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Powerful grease-cutting formula that makes dishes sparkle.
                  Gentle on hands, tough on grime.
                </p>
                <ul
                  className={`space-y-2 text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <li>✓ Cuts through tough grease</li>
                  <li>✓ Long-lasting suds</li>
                  <li>✓ Fresh lemon scent</li>
                  <li>✓ Safe for all dishware</li>
                </ul>
              </div>
            </div>

            <div
              className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 text-white">
                <Sparkles className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold">Liquid Detergent</h3>
              </div>
              <div className="p-6">
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Deep cleaning power for all your laundry needs. Removes tough
                  stains while caring for fabrics.
                </p>
                <ul
                  className={`space-y-2 text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <li>✓ Deep cleans all fabrics</li>
                  <li>✓ Removes tough stains</li>
                  <li>✓ Color-safe formula</li>
                  <li>✓ Fresh, lasting fragrance</li>
                </ul>
              </div>
            </div>

            <div
              className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-8 text-white">
                <Leaf className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold">Fabric Conditioner</h3>
              </div>
              <div className="p-6">
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Makes clothes soft, smooth, and beautifully scented. Reduces
                  static and makes ironing easier.
                </p>
                <ul
                  className={`space-y-2 text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <li>✓ Ultra-soft finish</li>
                  <li>✓ Long-lasting freshness</li>
                  <li>✓ Reduces wrinkles</li>
                  <li>✓ Anti-static formula</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className={`py-16 px-4 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            How It Works
          </h2>
          <p
            className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Simple, convenient, and eco-friendly. Here's how to use our refill
            stations.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Bring Your Container",
                desc: "Use any clean empty bottle - old detergent bottles, water jugs, or any container with a lid",
              },
              {
                step: "2",
                title: "Visit Our Station",
                desc: "Find the nearest Linis Refill station at your trusted neighborhood sari-sari store",
              },
              {
                step: "3",
                title: "Choose & Refill",
                desc: "Select your product and dispense the exact amount you need from our refill machine",
              },
              {
                step: "4",
                title: "Pay & Save",
                desc: "Pay only for the product, not the packaging. Save money and help save the planet!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-700 to-gray-600"
                    : "bg-gradient-to-br from-blue-50 to-green-50"
                }`}
              >
                <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 text-center transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-center transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section
        id="advocacy"
        className="py-16 px-4 bg-gradient-to-br from-green-600 to-blue-600 text-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <Recycle className="h-20 w-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Our Advocacy: Reducing Plastic Waste
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              The Philippines generates over 2.7 million tons of plastic waste
              annually. We're committed to being part of the solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🌊 The Problem</h3>
              <ul className="space-y-3">
                <li>
                  • Single-use plastic bottles take 450+ years to decompose
                </li>
                <li>
                  • Millions of plastic bottles end up in our oceans yearly
                </li>
                <li>• Plastic waste clogs waterways and harms marine life</li>
                <li>• Communities lack accessible eco-friendly alternatives</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">💚 Our Solution</h3>
              <ul className="space-y-3">
                <li>• Refill stations eliminate single-use plastic bottles</li>
                <li>• One bottle can be reused hundreds of times</li>
                <li>• Strategic placement makes sustainability convenient</li>
                <li>• Affordable prices encourage eco-friendly choices</li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
            <p className="text-xl mb-6 opacity-90">
              Every refill makes a difference. Together, we can reduce plastic
              waste and create a cleaner, greener Philippines for future
              generations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <div className="opacity-90">Bottles Saved Monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Partner Stores</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={"py-16 px-4 " + (isDarkMode ? "bg-gray-800" : "bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Find Us or Partner With Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Looking for a refill station near you? Want to host a station at
            your sari-sari store?
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Phone className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600">+63 XXX XXX XXXX</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Mail className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">hello@linisrefill.ph</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Facebook className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Facebook</h3>
              <p className="text-gray-600">@LinisRefillPH</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Find a Station
              </h3>
              <p className="text-gray-600 mb-6">
                Locate the nearest Linis Refill station in your area and start
                your sustainable journey today.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                View Locations
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <Store className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                Become a Partner
              </h3>
              <p className="text-gray-600 mb-6">
                Own a sari-sari store? Partner with us and bring eco-friendly
                solutions to your community!
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Droplet className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Linis Refill</span>
          </div>
          <p className="text-gray-400 mb-2">
            Reducing Plastic Waste, One Refill at a Time
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Linis Refill. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
