export const siteData = {
    businessName: "Sing and Perform",
    industry: "Music School / Singing Lessons",
    locationServed: "Milton Keynes, UK",
  
    // Replace with real domain when ready
    siteUrl: "https://example.com",
  
    // Dummy contact details (replace)
    phoneDisplay: "00000 000000",
    phoneE164: "+440000000000",
    email: "hello@example.com",
  
    // Optional socials (replace or remove)
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/"
    },
  
    primaryCta: "Book a quote / Get consultation",
  
    defaultDescription:
      "Friendly, confidence-building singing lessons in Milton Keynes. 1:1 coaching, performance prep, beginner to advanced — book a consultation today.",
  
    services: [
      {
        title: "1:1 Singing Lessons",
        description:
          "Personalised coaching tailored to your voice, goals, and favourite styles. Build technique, tone, and confidence.",
        features: ["Breath support & control", "Pitch & ear training", "Healthy vocal technique"]
      },
      {
        title: "Performance Preparation",
        description:
          "Get stage-ready with coaching that covers vocals, nerves, presence, and song interpretation.",
        features: ["Setlist planning", "Confidence under pressure", "Mic technique & delivery"]
      },
      {
        title: "Audition & Exam Support",
        description:
          "Focused guidance for school auditions, theatre, music exams, and competitions — with structured practice plans.",
        features: ["Repertoire coaching", "Mock auditions", "Practice plans that stick"]
      },
      {
        title: "Beginner Foundations",
        description:
          "Start singing with clear steps and encouragement. Ideal if you feel 'tone deaf' or nervous singing in front of others.",
        features: ["Simple warmups", "Pitch confidence", "Comfortable starting pace"]
      },
      {
        title: "Songwriting & Artist Development",
        description:
          "Shape your sound, write stronger songs, and develop a performer identity you actually enjoy showing to people.",
        features: ["Song structure coaching", "Vocal style discovery", "Feedback & direction"]
      }
    ],
  
    trustBadges: [
      { label: "Friendly coaching", detail: "Warm, supportive sessions" },
      { label: "All levels welcome", detail: "Beginner → advanced" },
      { label: "Milton Keynes", detail: "Local lessons & consults" },
      { label: "Goal-driven", detail: "Clear progress each week" }
    ],
  
    testimonials: [
      {
        name: "Amina",
        blurb:
          "I went from hiding my voice to actually enjoying singing. The lessons are structured but still fun — I can hear the difference.",
        title: "Adult beginner"
      },
      {
        name: "James",
        blurb:
          "Performance prep was a game-changer. I felt calm on stage and knew exactly what to do with my breathing and phrasing.",
        title: "Gigging musician"
      },
      {
        name: "Sofia",
        blurb:
          "I got into my school production after working on my audition piece. The practice plan made it so much easier.",
        title: "Student"
      }
    ],
  
    faq: [
      {
        q: "Do I need experience to start lessons?",
        a: "No — beginners are welcome. We start with simple techniques and build confidence step-by-step."
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
        a: "Yes. We’ll discuss goals, assess your current level, and recommend a plan (no pressure)."
      }
    ],
  
    processSteps: [
      {
        title: "Tell us your goals",
        description: "Share what you want to improve and what you’re working towards."
      },
      {
        title: "Consultation & voice check",
        description: "We’ll listen, identify quick wins, and set the first milestones."
      },
      {
        title: "Personal lesson plan",
        description: "A clear structure: warmups, technique, repertoire, and practice guidance."
      },
      {
        title: "Grow confidence & perform",
        description: "Track progress and get support for auditions, recordings, or stage performance."
      }
    ]
  } as const;
  