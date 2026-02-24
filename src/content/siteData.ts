const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "";
const phoneE164 = process.env.NEXT_PUBLIC_PHONE_E164 || "";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "";

export const siteData = {
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Sing and Perform",
  industry: "Music School / Singing Lessons",
  locationServed: process.env.NEXT_PUBLIC_LOCATION_SERVED || "Milton Keynes, UK",
  siteUrl,
  phoneDisplay,
  phoneE164,
  email,
  socials: {
    instagram,
    facebook
  },
  primaryCta: "Book a consultation",
  defaultDescription:
    "Friendly, confidence-building singing lessons in Milton Keynes. 1:1 coaching, performance prep, and audition support.",
  services: [
    {
      title: "1:1 Singing Lessons",
      description:
        "Personalized coaching tailored to your voice, goals, and favorite styles. Build technique, tone, and confidence.",
      features: ["Breath support and control", "Pitch and ear training", "Healthy vocal technique"]
    },
    {
      title: "Performance Preparation",
      description:
        "Get stage-ready with coaching that covers vocals, nerves, presence, and song interpretation.",
      features: ["Setlist planning", "Confidence under pressure", "Mic technique and delivery"]
    },
    {
      title: "Audition and Exam Support",
      description:
        "Focused guidance for school auditions, theatre, music exams, and competitions with structured practice plans.",
      features: ["Repertoire coaching", "Mock auditions", "Practice plans that stick"]
    },
    {
      title: "Beginner Foundations",
      description:
        "Start singing with clear steps and encouragement. Ideal if you feel nervous singing in front of others.",
      features: ["Simple warmups", "Pitch confidence", "Comfortable starting pace"]
    },
    {
      title: "Songwriting and Artist Development",
      description:
        "Shape your sound, write stronger songs, and build a performer identity you are proud to share.",
      features: ["Song structure coaching", "Vocal style discovery", "Feedback and direction"]
    }
  ],
  trustBadges: [
    { label: "Friendly coaching", detail: "Warm, supportive sessions" },
    { label: "All levels welcome", detail: "Beginner to advanced" },
    { label: "Milton Keynes", detail: "Local lessons and consults" },
    { label: "Goal-driven", detail: "Clear progress each week" }
  ],
  testimonials: [
    {
      name: "Amina",
      blurb:
        "I went from hiding my voice to actually enjoying singing. The lessons are structured but still fun, and I can hear the difference.",
      title: "Adult beginner"
    },
    {
      name: "James",
      blurb:
        "Performance prep was a game changer. I felt calm on stage and knew exactly what to do with my breathing and phrasing.",
      title: "Gigging musician"
    },
    {
      name: "Sofia",
      blurb:
        "I got into my school production after working on my audition piece. The practice plan made everything easier.",
      title: "Student"
    }
  ],
  faq: [
    {
      q: "Do I need experience to start lessons?",
      a: "No. Beginners are welcome. We start with simple techniques and build confidence step by step."
    },
    {
      q: "What styles do you teach?",
      a: "We can work with pop, musical theatre, R&B, indie, and more. Your goals and voice guide the plan."
    },
    {
      q: "How long until I see progress?",
      a: "Most people feel changes in control and confidence within a few sessions. Consistent practice speeds this up."
    },
    {
      q: "Do you offer a consultation?",
      a: "Yes. We discuss goals, assess your current level, and recommend a practical starting plan."
    }
  ],
  processSteps: [
    {
      title: "Tell us your goals",
      description: "Share what you want to improve and what you are working toward."
    },
    {
      title: "Consultation and voice check",
      description: "We listen, identify quick wins, and set the first milestones."
    },
    {
      title: "Personal lesson plan",
      description: "A clear structure for warmups, technique, repertoire, and practice guidance."
    },
    {
      title: "Grow confidence and perform",
      description: "Track progress and get support for auditions, recordings, or stage performance."
    }
  ]
} as const;
