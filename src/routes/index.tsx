import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  PawPrint,
  MessageCircle,
  Phone,
  MapPin,
  Star,
  Clock,
  Instagram,
  ShoppingBag,
  Stethoscope,
  Bone,
  Home as HomeIcon,
  Truck,
  Heart,
  ShieldCheck,
  Quote,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Send,
  X,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import logoImg from "@/assets/doggee-logo.png";
import prodFilhotePP from "@/assets/products/golden-formula-pp-filhote.jpg";
import prodGrandeAdulto from "@/assets/products/golden-formula-grande-adulto.jpg";
import prodPeruPP from "@/assets/products/golden-formula-peru-pp.jpg";
import prodSpecialGrande from "@/assets/products/golden-special-grande.jpg";
import prodFormulaPPAdulto from "@/assets/products/golden-formula-pp-adulto.jpg";
import prodSpecialPP from "@/assets/products/golden-special-pp.jpg";
import prodWhiskas from "@/assets/products/whiskas-sache-carne.jpg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pet Shop Doggee — Rações, Acessórios e Medicamentos | Grajaú SP" },
      {
        name: "description",
        content:
          "Pet Shop Doggee no Grajaú: rações, acessórios, gaiolas e medicamentos veterinários no atacado e varejo. Mais de 450 avaliações 5 estrelas no Google.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/5511982870213?text=Olá!%20Vim%20pelo%20site%20da%20Doggee%20e%20gostaria%20de%20fazer%20um%20pedido.";
const PHONE = "tel:+551155182305";
const MAPS = "https://www.google.com/maps/search/?api=1&query=R.+Estev%C3%A3o+Fernandes+536+Graja%C3%BA+S%C3%A3o+Paulo";
const INSTAGRAM = "https://instagram.com/doggeepets";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Categories />
      <About />
      <SocialProof />
      <Hours />
      <CTASection />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src={logoImg}
            alt="Doggee Pet Store"
            className="h-14 w-auto rounded-full object-cover shadow-[var(--shadow-warm)]"
          />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#categorias" className="hover:text-primary transition">Produtos</a>
          <a href="#sobre" className="hover:text-primary transition">Sobre</a>
          <a href="#avaliacoes" className="hover:text-primary transition">Avaliações</a>
          <a href="#horarios" className="hover:text-primary transition">Horários</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition shadow-sm"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--primary) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--primary-glow) 0, transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" /> 5,0 com +450 avaliações no Google
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            O cuidado que <span className="text-primary">seu pet</span> merece.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Rações, acessórios, gaiolas e medicamentos veterinários no atacado e varejo, com excelente custo-benefício e atendimento dedicado no Grajaú.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-warm)] hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-5 w-5" /> Fale Conosco no WhatsApp
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:bg-primary-glow transition"
            >
              <ShoppingBag className="h-5 w-5" /> Fazer Pedido Agora
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-semibold hover:border-primary hover:text-primary transition"
            >
              <MapPin className="h-5 w-5" /> Ver Localização
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Marcas confiáveis</div>
            <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Atendimento humano</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gradient-hero)] opacity-90 blur-2xl -z-10" />
          <div className="relative rounded-[2rem] overflow-hidden bg-card shadow-[var(--shadow-warm)] border border-border">
            <img
              src={heroImg}
              alt="Cachorro e gato felizes na Pet Shop Doggee"
              width={1536}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border border-border rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] flex items-center gap-3">
            <div className="flex -space-x-1">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
            <div>
              <div className="font-display font-bold leading-none">5,0 / 5,0</div>
              <div className="text-xs text-muted-foreground mt-1">+450 tutores avaliaram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, label: "Atacado & Varejo" },
    { icon: ShieldCheck, label: "Produtos de marcas líderes" },
    { icon: Heart, label: "Foco no bem-estar animal" },
    { icon: MapPin, label: "Grajaú • São Paulo / SP" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm font-medium">
            <Icon className="h-5 w-5 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    {
      icon: Bone,
      title: "Rações",
      desc: "Linha completa das grandes marcas para cães e gatos, filhotes e adultos.",
    },
    {
      icon: HomeIcon,
      title: "Acessórios e Caminhas",
      desc: "Caminhas, coleiras, brinquedos e tudo para o conforto do seu pet.",
    },
    {
      icon: ShoppingBag,
      title: "Gaiolas e Artigos",
      desc: "Gaiolas, transportadoras e itens essenciais para aves e pequenos animais.",
    },
    {
      icon: Stethoscope,
      title: "Medicamentos Veterinários",
      desc: "Medicamentos confiáveis para saúde e prevenção, com orientação atenciosa.",
    },
  ];

  return (
    <section id="categorias" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Nossos produtos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Tudo o que seu pet precisa, em um só lugar.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Selecionamos cada item pensando na saúde, segurança e alegria do seu companheiro.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-card border border-border p-7 hover:border-primary hover:shadow-[var(--shadow-warm)] transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Consultar disponibilidade →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[var(--gradient-warm)] border-y border-border">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Sobre a Doggee</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Uma Pet Store feita por quem ama animais.</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Somos uma Pet Store dedicada a oferecer o cuidado e carinho que seu pet merece. Entregamos soluções completas no atacado e varejo, desde rações de alta qualidade até medicamentos e acessórios essenciais para o bem-estar do seu animal.
          </p>
          <ul className="mt-7 space-y-3 text-foreground/90">
            {[
              "Estrutura completa de atacado e varejo",
              "Excelente custo-benefício para tutores e revendedores",
              "Atendimento focado no bem-estar animal",
              "Reconhecimento e confiança da comunidade do Grajaú",
            ].map(t => (
              <li key={t} className="flex items-start gap-3">
                <PawPrint className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat value="+450" label="Avaliações 5 estrelas no Google" big />
          <Stat value="5,0" label="Nota média de satisfação" />
          <Stat value="Atacado" label="& Varejo" />
          <Stat value="Grajaú" label="São Paulo / SP" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, big = false }: { value: string; label: string; big?: boolean }) {
  return (
    <div className={`rounded-2xl bg-card border border-border p-4 sm:p-6 min-w-0 ${big ? "row-span-1" : ""}`}>
      <div className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary leading-none break-words">{value}</div>
      <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function SocialProof() {
  const testimonials = [
    {
      name: "Beatriz Cost",
      text: "Atendimento ótimo, qualidade dos produtos maravilhosa, local sempre limpo e aconchegante, esse é o único lugar que eu compro de tão bom que é os produtos, super recomendo, preços ótimos e tudo que preciso.",
    },
    {
      name: "Thalita Lima",
      text: "Quero deixar registrado meu elogio ao atendente Bruno. Ele me atendeu super bem, foi muito educado, atencioso e paciente. Tirou todas as minhas dúvidas com clareza e demonstrou muita dedicação no atendimento.",
    },
    {
      name: "Gabrielle",
      text: "Ótimo atendimento dos funcionários, adorei o ambiente super educados e atenciosos, preços baixos e acessíveis.",
    },
    {
      name: "Giovanna Oliveira",
      text: "Ótimo atendimento, muitas variedades de produtos.",
    },
    {
      name: "Robson Cavalcanti",
      text: "Já sou cliente há muito tempo, sempre fui bem atendido... indico de olhos fechados.",
    },
    {
      name: "Kelly Fernanda Pinto",
      text: "A equipe é sempre muito atenciosa e educados... Os preços são justos e sempre tem tudo que preciso.",
    },
    {
      name: "Breno Rocha",
      text: "O lugar realmente tem uma grande variedade de produtos, é limpo e organizado, algo que prezo muito. Sempre sou muito bem atendido.",
    },
    {
      name: "Bianca Camara",
      text: "Minha experiência é sempre incrível, compro aqui a um bom tempo e o atendimento é sempre ótimo, muito atenciosos!",
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 30%, var(--primary) 0, transparent 35%), radial-gradient(circle at 90% 70%, var(--primary-glow) 0, transparent 40%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Depoimentos dos Clientes</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">Quem conhece, recomenda.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Avaliações reais de clientes que confiam na Doggee para cuidar dos seus pets.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-5 py-4 shadow-[var(--shadow-warm)]">
            <div className="flex">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
            <div>
              <div className="font-display font-bold text-2xl leading-none">5,0</div>
              <div className="text-xs opacity-90 mt-1">+450 avaliações no Google</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-5 auto-rows-fr">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-warm)] hover:border-primary/40 flex flex-col"
            >
              <Quote className="h-7 w-7 text-primary mb-3" aria-hidden />
              <div className="flex gap-0.5 mb-4">
                {[0,1,2,3,4].map(i => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed flex-grow text-foreground/85">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-auto pt-5 border-t border-border">
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">Cliente Doggee</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const schedule = [
    { day: "Segunda a Sexta", time: "08h00 — 19h00" },
    { day: "Sábado", time: "08h00 — 18h00" },
    { day: "Domingo", time: "Fechado" },
  ];
  return (
    <section id="horarios" className="py-20 md:py-28 bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Horários</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Quando estamos abertos para você.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Visite nossa loja física ou peça pelo WhatsApp dentro do horário de atendimento.
          </p>
          <div className="mt-8 rounded-2xl bg-card border border-border divide-y divide-border">
            {schedule.map(s => (
              <div key={s.day} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{s.day}</span>
                </div>
                <span className="text-muted-foreground">{s.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="font-display text-2xl font-bold">Onde nos encontrar</h3>
          <p className="mt-3 text-muted-foreground">
            R. Estevão Fernandes, 536<br />
            Jardim Santa Edwiges — Grajaú<br />
            São Paulo / SP
          </p>
          <div className="mt-6 space-y-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-whatsapp text-whatsapp-foreground px-5 py-4 font-semibold hover:opacity-90 transition">
              <span className="flex items-center gap-3"><MessageCircle className="h-5 w-5" /> WhatsApp</span>
              <span>(11) 98287-0213</span>
            </a>
            <a href={PHONE} className="flex items-center justify-between rounded-xl bg-accent text-accent-foreground px-5 py-4 font-semibold hover:bg-primary hover:text-primary-foreground transition">
              <span className="flex items-center gap-3"><Phone className="h-5 w-5" /> Telefone fixo</span>
              <span>(11) 5518-2305</span>
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border px-5 py-4 font-semibold hover:border-primary hover:text-primary transition">
              <span className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Ver no Google Maps</span>
              <span>→</span>
            </a>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=R.%20Estev%C3%A3o%20Fernandes%2C%20536%20-%20Jardim%20Santa%20Edwiges%2C%20Graja%C3%BA%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Doggee Pet Store"
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary/60 border-2 border-primary/25 p-8 sm:p-10 md:p-16 shadow-[var(--shadow-soft)]">
          <div
            className="absolute inset-0 -z-10 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, var(--primary) 0, transparent 45%), radial-gradient(circle at 85% 80%, var(--primary-glow) 0, transparent 50%)",
            }}
          />
          <PawPrint className="absolute -right-6 -bottom-6 h-48 w-48 text-primary opacity-10" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight text-foreground">
            O cuidado que seu pet merece a apenas <span className="text-primary">um clique</span> de distância!
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Precisa de ração, acessórios ou medicamentos para o seu melhor amigo? Não perca tempo, faça seu pedido direto pelo nosso WhatsApp e garanta o melhor para o seu pet hoje mesmo!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-[var(--shadow-warm)] hover:bg-primary-glow hover:scale-[1.02] transition"
            >
              <WhatsAppIcon className="h-5 w-5" /> Fazer Pedido Agora
            </a>
            <a
              href={PHONE}
              className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-6 py-3.5 font-semibold hover:border-primary hover:text-primary transition"
            >
              <Phone className="h-5 w-5" /> (11) 5518-2305
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Doggee Pet Store"
              className="h-14 w-auto rounded-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            O cuidado que seu pet merece — rações, acessórios e medicamentos no atacado e varejo.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-bold mb-3">Contato</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp: (11) 98287-0213</a></li>
            <li><a href={PHONE} className="hover:text-primary">Telefone: (11) 5518-2305</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-1"><Instagram className="h-4 w-4" /> @doggeepets</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-bold mb-3">Endereço</div>
          <p className="text-muted-foreground">
            R. Estevão Fernandes, 536<br />Jardim Santa Edwiges — Grajaú<br />São Paulo / SP
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Doggee Pet Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-warm)] hover:scale-110 transition"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
