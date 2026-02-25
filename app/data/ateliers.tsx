import {
  DoorOpen,
  Fish,
  Glasses,
  Usb,
  Bot,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { WifiIcon } from "../components/ui/wifi-icon";
import { LockIcon } from "../components/ui/lock-icon";
import { BitcoinIcon } from "../components/ui/bitcoin-icon";
import { EyeIcon } from "../components/ui/eye-icon";

export const ateliers = [
  {
    id: 1,
    title: "Mot de passe",
    description:
      "Votre mot de passe est-il vraiment à l'épreuve des hackers ? Venez le découvrir… avant qu'il ne soit trop tard !",
    icon: <LockIcon size={24} />,
  },
  {
    id: 2,
    title: "Ransomware",
    description:
      "Un matin, vous allumez votre ordinateur et… tous vos fichiers sont bloqués. Payer ou tout perdre ? Apprenez à éviter ce choix impossible.",
    icon: <BitcoinIcon size={24} />,
  },
  {
    id: 4,
    title: "Phishing",
    description:
      "Et si ce message ultra urgent ou cette promo trop alléchante n'était en fait… qu'un piège ? Venez apprendre à ne plus jamais vous faire avoir !",
    icon: <Fish className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Backdoor",
    description:
      "Imaginez qu'on entre chez vous sans jamais passer par la porte… Sur votre ordinateur, c'est aussi possible. Découvrez comment.",
    icon: <DoorOpen className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Juice Jacking",
    description:
      "Et si une simple action pouvait pirater votre ordinateur en un instant ? Découvrez comment les menaces invisibles peuvent frapper.",
    icon: <Usb className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "OSINT (Open Source Intelligence)",
    description:
      "Vous seriez surpris de tout ce qu'on peut savoir sur vous avec quelques recherches… Découvrez comment les hackers exploitent les informations publiques et comment reprendre le contrôle de votre vie privée.",
    icon: <EyeIcon size={24} />,
  },
  {
    id: 8,
    title: "Dark Web",
    description:
      "Le Dark Web, mythe ou réalité ? Venez découvrir ce qui s'y cache réellement.",
    icon: <Glasses className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "IA et Sécurité",
    description:
      "L'intelligence artificielle est une alliée… jusqu'au jour où elle devient une menace. Découvrez ses deux visages.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "Éducation Financière",
    description:
      "Un budget mal maîtrisé, un projet qui s'effondre, et des choix quotidiens qui impactent tout un avenir… L'équilibre est fragile, et les clés de la gestion financière sont désormais entre vos mains. Venez découvrir les enjeux de l'éducation budgétaire avec les experts de la Banque de France.",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: 11,
    title: "Annecy face aux cyberattaques",
    description:
      "Le Responsable de la Sécurité des Systèmes d'Information pilote la stratégie de cybersécurité d'une organisation. Découvrez ce métier essentiel et les enjeux de la protection des données.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];
