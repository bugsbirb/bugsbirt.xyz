import { motion } from "framer-motion";

export default function landing() {
    const languages = [
        { name: "Python", icon: "/python.svg" },
        { name: "TypeScript", icon: "/typescript.svg" },
        { name: "HTML", icon: "/html.svg" },
        { name: "CSS", icon: "/css.svg" },
      ];
    return(
        <main>
                     <div className="glassy rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  className="glassy rounded-lg overflow-hidden flex items-center justify-center w-full h-full p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={language.icon}
                    alt={language.name}
                    className="w-20 h-20"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div> 
        </main>
    )
}