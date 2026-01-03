import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si on a un hash (#contact), on scroll dessus
    if (hash) {
      const id = hash.replace("#", "");
      // Laisse React finir de rendre la home avant de scroller
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback si l'id n'existe pas
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      });
      return;
    }

    // Sinon scroll normal en haut sur changement de page
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
