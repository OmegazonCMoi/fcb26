import {
  Brain,
  GraduationCap,
  Lock,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export const objectifs = [
  {
    title: "Comprendre",
    description:
      "Mieux comprendre les différentes menaces et vulnérabilités informatiques afin d'anticiper les risques.",
    icon: <Brain className="w-7 h-7" />,
  },
  {
    title: "Apprendre",
    description:
      "Apprendre à sécuriser efficacement ses données personnelles pour prévenir les risques de cyberattaques.",
    icon: <GraduationCap className="w-7 h-7" />,
  },
  {
    title: "Expérimenter",
    description:
      "Expérimenter diverses stratégies de défense contre les cyberattaques et renforcer la sécurité numérique.",
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    title: "Développer",
    description:
      "Développer un esprit critique face aux informations en ligne et adopter des comportements sécurisés.",
    icon: <ShieldAlert className="w-7 h-7" />,
  },
  {
    title: "Découvrir",
    description:
      "Explorer les différentes carrières et formations en cybersécurité pour mieux comprendre le secteur.",
    icon: <Lock className="w-7 h-7" />,
  },
];
