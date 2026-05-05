import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Calendar, Scissors, Heart, Clock, MapPin, Phone, Mail, Sparkles, Menu, X } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    date: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre demande de réservation ! Nous vous contactons bientôt pour confirmer votre rendez-vous.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petType: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-purple-200/30 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center">
              <img src="/src/imports/logo.png" alt="Canine Beauty Logo" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-base sm:text-lg font-bold text-gray-900">
                <span className="text-purple-600">Canine</span> <span className="text-yellow-500">Beauty</span>
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">Salon de Toilettage</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-110 font-medium">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-110 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-110 font-medium">À Propos</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-110 font-medium">Témoignages</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-110 font-medium">Contact</a>
          </div>

          {/* Desktop CTA Button */}
          <a href="#contact" className="hidden md:inline-flex shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105">
            Réserver
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-purple-200/30 bg-white/95 backdrop-blur-xl">
            <nav className="mx-auto max-w-7xl px-5 py-4 space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                À Propos
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 mt-4 text-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25"
              >
                Réserver
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#FFF9EF] pt-[72px]">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#B56CFF]/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E3A52F]/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid min-h-[calc(100vh-72px-8rem)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7A1CFF]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[#E3A52F]" />
                <span className="text-sm font-semibold text-[#7A1CFF]">Toilettage Premium</span>
              </div>

              <h1 className="max-w-3xl text-[44px] font-black leading-[0.96] tracking-[-0.045em] text-[#101827] sm:text-[56px] lg:text-[72px]">
                Soins doux
                <span className="block">& premium pour</span>
                <span className="block bg-gradient-to-r from-[#7A1CFF] via-[#B56CFF] to-[#E3A52F] bg-clip-text text-transparent">
                  vos compagnons
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Bain, coupe, brossage et soins avec patience, douceur et expertise — pour chiens et chats à Casablanca.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:0641458713"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#7A1CFF] to-[#B56CFF] px-7 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/25 transition hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Réserver maintenant
                </a>
                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#7A1CFF]/30 bg-white/70 px-7 py-4 text-base font-bold text-[#7A1CFF] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  Voir les services
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
                <span>Ouvert tous les jours</span>
                <span className="h-1 w-1 rounded-full bg-[#E3A52F]"></span>
                <span>Jusqu'à 22h00</span>
                <span className="h-1 w-1 rounded-full bg-[#E3A52F]"></span>
                <span>Chiens & chats</span>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-slate-900/10 pt-6">
                <div>
                  <p className="text-2xl font-black text-[#7A1CFF]">4.9★</p>
                  <p className="text-sm font-semibold text-slate-600">4,936 avis</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#E3A52F]">22h00</p>
                  <p className="text-sm font-semibold text-slate-600">Fermeture</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#B56CFF]">Casa</p>
                  <p className="text-sm font-semibold text-slate-600">Casablanca</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#F7EEDC] via-[#F3D7FF]/40 to-[#FFE6B8]/60 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-2xl shadow-purple-900/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663271639648-62b22481ea8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc3ODI3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Toilettage premium pour chien et chat"
                  className="h-[400px] w-full rounded-[2rem] object-cover sm:h-[480px] lg:h-[520px]"
                />
              </div>

              <div className="absolute -bottom-6 right-6 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl shadow-purple-900/15 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7A1CFF] text-white">
                    <Heart className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-base font-black leading-tight text-[#101827] sm:text-lg">Soin avec douceur</p>
                    <p className="text-xs text-slate-500 sm:text-sm">Toilettage chiens & chats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden bg-[#FFF9EF] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-[#B56CFF]/15 blur-3xl"></div>
        <div className="pointer-events-none absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-[#E3A52F]/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-bold text-[#7A1CFF] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#E3A52F]" />
              Nos prestations
            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#101827] sm:text-5xl lg:text-6xl">
              Des soins pensés pour
              <span className="block bg-gradient-to-r from-[#7A1CFF] via-[#B56CFF] to-[#E3A52F] bg-clip-text text-transparent">
                chaque compagnon
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5F6678]">
              Bain, coupe, brossage, griffes et soins douceur — des prestations adaptées aux chiens et chats, avec patience et expertise.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'Toilettage Complet',
                price: 'À partir de 650 MAD',
                description: 'Bain, coupe, séchage, brossage, griffes et nettoyage des oreilles pour un soin complet.',
                image: 'https://images.unsplash.com/photo-1665296380158-bae6c52c6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHBldHMlMjBncm9vbWluZ3xlbnwxfHx8fDE3Nzc5MTQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Bain & shampoing adapté', 'Coupe ou égalisation', 'Griffes & oreilles'],
                featured: true
              },
              {
                title: 'Bain & Brossage',
                price: 'À partir de 450 MAD',
                description: 'Un soin fraîcheur pour garder le pelage propre, doux et facile à entretenir.',
                image: 'https://images.unsplash.com/photo-1554235386-82e08c80c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjdXRlJTIwZG9nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc3ODI3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Shampoing doux', 'Brossage complet', 'Séchage professionnel']
              },
              {
                title: 'Soin des Griffes',
                price: 'À partir de 250 MAD',
                description: 'Coupe et limage des griffes avec douceur pour le confort de votre animal.',
                image: 'https://images.unsplash.com/photo-1747045168541-c2ed906ef0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjdXRlJTIwZG9nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc3ODI3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Coupe sécurisée', 'Limage doux', 'Manipulation patiente']
              },
              {
                title: 'Soin Dentaire',
                price: 'À partir de 350 MAD',
                description: 'Nettoyage doux pour rafraîchir l\'haleine et améliorer l\'hygiène bucco-dentaire.',
                image: 'https://images.unsplash.com/photo-1744824838304-d2bbf3a94da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjdXRlJTIwZG9nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc3ODI3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Nettoyage doux', 'Haleine fraîche', 'Conseil d\'entretien']
              },
              {
                title: 'Forfait Spa',
                price: 'À partir de 950 MAD',
                description: 'Une expérience premium avec bain, massage, soin du pelage et finition parfumée.',
                image: 'https://images.unsplash.com/photo-1761828123282-19e9357e1e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBwZXQlMjBjYXJlfGVufDF8fHx8MTc3NzkxNDk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Bain premium', 'Massage relaxant', 'Finition parfumée']
              },
              {
                title: 'Initiation Chiot/Chaton',
                price: 'À partir de 400 MAD',
                description: 'Une première expérience calme et positive pour habituer les jeunes animaux au toilettage.',
                image: 'https://images.unsplash.com/photo-1775330179745-688776370992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXQlMjBwZXQlMjBjYXJlfGVufDF8fHx8MTc3NzkxNDk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
                includes: ['Découverte en douceur', 'Manipulation rassurante', 'Conseils aux propriétaires']
              }
            ].map((service, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white shadow-xl transition duration-300 hover:-translate-y-1 ${service.featured
                  ? 'border-[#E3A52F]/70 shadow-[#E3A52F]/10 hover:shadow-2xl hover:shadow-[#E3A52F]/20'
                  : 'border-black/5 shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10'
                  }`}
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"></div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-black text-[#7A1CFF] shadow-lg backdrop-blur">
                    {service.price}
                  </div>

                  {service.featured && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#E3A52F] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#241331] shadow-lg">
                      Le plus demandé
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black tracking-tight text-[#101827]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#5F6678]">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium text-[#5F6678]">
                        <Heart className="h-4 w-4 shrink-0 text-[#E3A52F]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:0641458713"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7A1CFF] to-[#B56CFF] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Réserver
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden bg-[#FFF9EF] pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="pointer-events-none absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-[#B56CFF]/12 blur-3xl"></div>
        <div className="pointer-events-none absolute right-[-10%] bottom-10 h-96 w-96 rounded-full bg-[#E3A52F]/18 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1 lg:-mt-2">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#E3A52F]/20 via-[#B56CFF]/14 to-transparent blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/65 p-3 shadow-2xl shadow-purple-900/10">
              <div className="relative overflow-hidden rounded-[2rem]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1651502829291-785542414770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHBldHMlMjBncm9vbWluZ3xlbnwxfHx8fDE3Nzc5MTQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Chien pendant une séance de toilettage chez Canine Beauty"
                  className="h-[340px] w-full object-cover object-[43%_52%] sm:h-[420px] lg:h-[540px]"
                  style={{ filter: 'saturate(0.95) contrast(0.98) brightness(1.03)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241331]/25 via-transparent to-[#FFF9EF]/5"></div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-sm font-black text-[#101827]">Soins avec douceur</p>
              <p className="text-xs font-medium text-[#5F6678]">Chiens & chats accueillis</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-sm font-bold text-[#7A1CFF] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#E3A52F]" />
              Pourquoi nous choisir
            </div>

            <h2 className="max-w-3xl text-[44px] font-black leading-[1.02] tracking-[-0.045em] text-[#101827] sm:text-5xl lg:text-[64px]">
              Votre compagnon
              <span className="block bg-gradient-to-r from-[#7A1CFF] via-[#B56CFF] to-[#E3A52F] bg-clip-text text-transparent">
                entre de bonnes mains
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6678]">
              Chez Canine Beauty, chaque chien et chat est accueilli avec patience, douceur et attention. Nous adaptons chaque soin au pelage, au tempérament et au confort de votre animal — pour une expérience propre, calme et rassurante.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Heart,
                  title: "Douceur avant tout",
                  text: "Chaque animal est manipulé calmement, sans stress inutile."
                },
                {
                  icon: Sparkles,
                  title: "Hygiène impeccable",
                  text: "Un espace propre, soigné et adapté aux soins chiens & chats."
                },
                {
                  icon: Scissors,
                  title: "Soin selon le pelage",
                  text: "Brossage, coupe et finition adaptés au besoin de chaque animal."
                },
                {
                  icon: Clock,
                  title: "Ouvert tous les jours",
                  text: "Réservation simple, ouvert jusqu'à 22h00."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group rounded-[1.75rem] border border-black/5 bg-white/78 p-5 shadow-lg shadow-purple-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-purple-900/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A1CFF]/12 to-[#E3A52F]/12 text-[#7A1CFF] ring-1 ring-[#7A1CFF]/10">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-black tracking-[-0.02em] text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5F6678]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.03),transparent_70%)]"></div>
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Témoignages
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              Ce que disent nos <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Clients</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">4,936 avis Google vérifiés</p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="mb-12">
            <div className="elfsight-app-dd603d66-9fe3-4dc9-8518-f4f74fb62b86" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-yellow-50/30 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="inline-block bg-purple-100 text-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Contactez-nous
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                Prenez <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Rendez-vous</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Remplissez le formulaire et nous vous recontacterons dans les 24 heures pour confirmer votre rendez-vous.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-purple-100">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Votre Nom</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Type d'Animal</label>
                    <select
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="dog">Chien</option>
                      <option value="cat">Chat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="full-grooming">Toilettage Complet</option>
                      <option value="bath-brush">Bain & Brossage</option>
                      <option value="nail-care">Soin des Griffes</option>
                      <option value="dental-care">Soin Dentaire</option>
                      <option value="spa-package">Forfait Spa</option>
                      <option value="puppy-intro">Initiation Chiot/Chaton</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Date Souhaitée</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Notes Supplémentaires</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none shadow-sm hover:shadow-md text-sm sm:text-base"
                    placeholder="Des exigences ou préoccupations particulières ?"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 sm:py-5 rounded-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                  Demander un Rendez-vous
                </button>
              </form>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-purple-100">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">Nous Rendre Visite</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Adresse</div>
                      <div className="text-gray-600 text-sm sm:text-base">143 Rue 10, Casablanca 20250</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Téléphone</div>
                      <a href="tel:0641458713" className="text-gray-600 text-sm sm:text-base hover:text-purple-600 transition">06 41 45 87 13</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</div>
                      <div className="text-gray-600 text-sm sm:text-base">contact@caninebeauty.ma</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Horaires</div>
                      <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Ouvert tous les jours<br />
                        Jusqu'à 22h00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-100 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.474960458783!2d-7.5310182999999995!3d33.618924899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd00760e5d5b%3A0x4acbed050322c387!2sCanine%20Beauty%20salon%20de%20toilettage!5e0!3m2!1sfr!2sma!4v1778009215424!5m2!1sfr!2sma"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#241331] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,28,255,0.35),transparent_32%),radial-gradient(circle_at_75%_10%,rgba(227,165,47,0.20),transparent_28%)]"></div>
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <img src="/src/imports/logo.png" alt="Canine Beauty" className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight leading-tight">
                    <span className="text-[#B56CFF]">Canine</span>{" "}
                    <span className="text-[#E3A52F]">Beauty</span>
                  </p>
                  <p className="text-xs text-white/60 tracking-wide">Salon de Toilettage</p>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-white/65">
                Des soins doux, propres et professionnels pour chiens et chats, avec patience, amour et expertise.
              </p>
              <a
                href="tel:0641458713"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#241331] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#FFF9EF]"
              >
                <Phone className="h-4 w-4" />
                Réserver maintenant
              </a>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="mb-5 text-base font-extrabold text-white">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E3A52F]">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#services" className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E3A52F]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E3A52F]">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E3A52F]">
                    Témoignages
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E3A52F]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="mb-5 text-base font-extrabold text-white">Services</h3>
              <ul className="space-y-3 text-sm text-white/65">
                <li>Toilettage Complet</li>
                <li>Bain & Brossage</li>
                <li>Coupe Griffes</li>
                <li>Soin Chat</li>
                <li>Formule Spa</li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="mb-5 text-base font-extrabold text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#E3A52F]" />
                  <div>
                    <p className="text-sm font-semibold text-white">143 Rue 10</p>
                    <p className="text-sm text-white/65">Casablanca 20250</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#E3A52F]" />
                  <div>
                    <a href="tel:0641458713" className="text-sm text-white/65 transition hover:text-white">
                      06 41 45 87 13
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#E3A52F]" />
                  <div>
                    <p className="text-sm font-semibold text-white">Ouvert tous les jours</p>
                    <p className="text-sm text-white/65">Jusqu'à 22h00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.474960458783!2d-7.5310182999999995!3d33.618924899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd00760e5d5b%3A0x4acbed050322c387!2sCanine%20Beauty%20salon%20de%20toilettage!5e0!3m2!1sfr!2sma!4v1778007540153!5m2!1sfr!2sma"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50 md:flex md:items-center md:justify-between">
            <p>
              © 2026 <span className="font-bold text-white">Canine Beauty</span>. Tous droits réservés.
            </p>
            <p className="mt-3 md:mt-0">Toilettage premium pour chiens & chats.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}