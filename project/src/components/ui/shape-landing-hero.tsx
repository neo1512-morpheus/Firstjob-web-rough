"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your",
    title2 = "Digital Vision",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
            {/* Background gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Spline animation */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] z-0">
                <spline-viewer url="https://prod.spline.design/mN9kOUltqdltVQWO/scene.splinecode"></spline-viewer>
            </div>

            {/* Geometric shapes container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Left side shapes */}
                <ElegantShape
                    delay={0.3}
                    width={1200}
                    height={240}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-5%] top-[20%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={600}
                    height={140}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] bottom-[10%]"
                />

                {/* Center shapes */}
                <ElegantShape
                    delay={0.7}
                    width={400}
                    height={100}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[35%] top-[15%]"
                />
                <ElegantShape
                    delay={0.8}
                    width={500}
                    height={120}
                    rotate={35}
                    gradient="from-emerald-500/[0.15]"
                    className="left-[45%] bottom-[25%]"
                />

                {/* Right side shapes */}
                <ElegantShape
                    delay={0.5}
                    width={1100}
                    height={220}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] top-[70%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={500}
                    height={120}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] top-[10%]"
                />
            </div>

            {/* Content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center mb-8 md:mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/60 tracking-wide">
                                {badge}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/40 mb-8 leading-relaxed font-light tracking-wide">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric };