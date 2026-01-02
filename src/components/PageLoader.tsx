import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-muted"
            style={{ borderTopColor: "hsl(var(--primary))" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-muted"
            style={{ borderBottomColor: "hsl(var(--primary))" }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading text with dots */}
        <motion.div className="flex items-center gap-1 text-muted-foreground">
          <span>Loading</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Skeleton preview bars */}
        <div className="w-64 space-y-3 mt-4">
          <motion.div
            className="h-4 bg-muted rounded-full"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="h-4 bg-muted rounded-full w-3/4"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="h-4 bg-muted rounded-full w-1/2"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
