import { ShieldAlert, Route } from "lucide-react";
import { ShieldCheckIcon } from "../components/ui/shield-check-icon";
import { LockIcon } from "../components/ui/lock-icon";

export const objectifs = [
  {
    title: "Faire découvrir de nouveaux parcours et filières",
    description:
      "Présenter les formations et métiers du numérique et de la cybersécurité pour ouvrir le champ des possibles.",
    icon: <Route className="w-7 h-7" />,
  },
  {
    title: "Sensibiliser aux enjeux et aux dangers du numérique",
    description:
      "Mieux comprendre les menaces et les risques pour adopter des comportements plus sûrs au quotidien.",
    icon: <ShieldAlert className="w-7 h-7" />,
  },
  {
    title: "Apprendre à protéger ses informations personnelles en ligne",
    description:
      "Acquérir les bons réflexes pour sécuriser ses données et préserver sa vie privée sur internet.",
    icon: <LockIcon size={28} />,
  },
];
