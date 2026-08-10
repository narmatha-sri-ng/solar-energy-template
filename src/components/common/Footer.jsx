import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Clock, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import { Container } from './Container';

const socialIcons = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube,
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src={companyData.logo}
                alt={`${companyData.name} Logo`}
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif group-hover:text-[#f0771a] transition-colors">
                {companyData.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {companyData.description}
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {companyData.socials.map((social) => {
                  const Icon = socialIcons[social.icon] || ArrowUpRight;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#f0771a] hover:border-amber-500 transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-[#f0771a] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Solar Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-[#f0771a] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3.5 text-sm">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Contact Us
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#f0771a] shrink-0 mt-0.5" />
              <span className="text-slate-300">{companyData.contact.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#f0771a] shrink-0" />
              <a href={`tel:${companyData.contact.phoneClean}`} className="text-slate-300 hover:text-[#f0771a] transition-colors">
                {companyData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#f0771a] shrink-0" />
              <a href={`mailto:${companyData.contact.email}`} className="text-slate-300 hover:text-[#f0771a] transition-colors">
                {companyData.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#f0771a] shrink-0 mt-0.5" />
              <span className="text-slate-400 text-xs">{companyData.contact.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyData.name} Energy Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
