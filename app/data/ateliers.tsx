import {
  Bitcoin,
  Bot,
  DoorOpen,
  Eye,
  Fish,
  Glasses,
  Lock,
  Server,
  Usb,
  Wifi,
} from "lucide-react";

export const ateliers = [
  {
    id: 1,
    title: "Atelier MITM",
    description:
      "Tentez de remporter un séjour pour 2 personnes dans un hôtel en Suisse grâce à ce concours Instagram !",
    icon: <Wifi className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Atelier Rubber Ducky",
    description:
      "Un simple clic et vos photos privées se retrouvent sur le web. Toujours sûr de vouloir brancher cette clé USB ?",
    icon: <Usb className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Atelier Mot de Passe",
    description:
      "Votre mot de passe est-il vraiment à l'épreuve des hackers ? Venez le découvrir… avant qu'il ne soit trop tard !",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Atelier Phishing",
    description:
      "Et si ce message super urgent ou cette promo de rêve était en fait… un piège ? Venez apprendre à ne plus se faire avoir !",
    icon: <Fish className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Atelier Backdoor",
    description:
      "Imaginez qu'on entre chez vous sans jamais passer par la porte… Sur votre ordinateur, c'est aussi possible.",
    icon: <DoorOpen className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Atelier DoS",
    description:
      "Que feriez-vous si, en quelques secondes, tout votre système se retrouvait complètement paralysé ?",
    icon: <Server className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "Atelier Ransomware",
    description:
      "Un matin, vous allumez votre ordinateur et… tous vos fichiers sont bloqués. Payer ou tout perdre ?",
    icon: <Bitcoin className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Atelier OSINT",
    description:
      "Vous seriez surpris de tout ce qu'on peut savoir sur vous… Découvrez comment les hackers exploitent votre vie privée.",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "Atelier Dark Web",
    description:
      "Le Dark Web : mythe ou réalité ? Plongez dans les profondeurs d'Internet et découvrez ce qui s'y cache.",
    icon: <Glasses className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "Atelier IA",
    description:
      "L'intelligence artificielle est une alliée… jusqu'au jour où elle devient une menace.",
    icon: <Bot className="w-6 h-6" />,
  },
];
