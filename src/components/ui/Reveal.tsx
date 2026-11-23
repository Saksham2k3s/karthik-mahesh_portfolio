import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

const Reveal = ({ children, delay = 0, className, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
