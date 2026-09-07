"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Target, Award, Flame, ExternalLink, RefreshCw } from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
}

const DEFAULT_STATS: LeetCodeStats = {
  totalSolved: 116,
  totalQuestions: 3985,
  easySolved: 65,
  totalEasy: 953,
  mediumSolved: 43,
  totalMedium: 2081,
  hardSolved: 8,
  totalHard: 951,
  acceptanceRate: 86.75,
  ranking: 1389199,
  contributionPoints: 81,
};

const USERNAME = "hehemohit";

export const LeetCodeSection = () => {
  const [stats, setStats] = useState<LeetCodeStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchStats = async () => {
    setIsRefreshing(true);
    let success = false;

    try {
      const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${USERNAME}`);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.totalSolved === "number") {
          setStats({
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions || DEFAULT_STATS.totalQuestions,
            easySolved: data.easySolved || DEFAULT_STATS.easySolved,
            totalEasy: data.totalEasy || DEFAULT_STATS.totalEasy,
            mediumSolved: data.mediumSolved || DEFAULT_STATS.mediumSolved,
            totalMedium: data.totalMedium || DEFAULT_STATS.totalMedium,
            hardSolved: data.hardSolved || DEFAULT_STATS.hardSolved,
            totalHard: data.totalHard || DEFAULT_STATS.totalHard,
            acceptanceRate: parseFloat(data.acceptanceRate) || DEFAULT_STATS.acceptanceRate,
            ranking: data.ranking || DEFAULT_STATS.ranking,
            contributionPoints: data.contributionPoint || data.contributionPoints || DEFAULT_STATS.contributionPoints,
          });
          success = true;
        }
      }
    } catch (err) {
      console.warn("Primary LeetCode API failed, trying fallback", err);
    }

    if (!success) {
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`);
        if (res.ok) {
          const data = await res.json();
          const solved = data.totalSolved || data.solvedProblem;
          if (data && typeof solved === "number") {
            setStats((prev) => ({
              ...prev,
              totalSolved: solved,
              easySolved: data.easySolved || prev.easySolved,
              mediumSolved: data.mediumSolved || prev.mediumSolved,
              hardSolved: data.hardSolved || prev.hardSolved,
            }));
          }
        }
      } catch (err) {
        console.warn("Fallback API failed, using defaults.", err);
      }
    }

    setLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => { fetchStats(); }, []);

  const generateGrid = () => {
    let seed = 42;
    const rng = () => { const x = Math.sin(seed++) * 10000; return x - Math.floor(x); };
    return Array.from({ length: 7 }, () =>
      Array.from({ length: 28 }, () => {
        const v = rng();
        if (v > 0.85) return 3;
        if (v > 0.65) return 2;
        if (v > 0.35) return 1;
        return 0;
      })
    );
  };

  const grid = generateGrid();
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = (stats.totalSolved / stats.totalQuestions) * 100;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const difficultyBars = [
    { label: "EASY",   solved: stats.easySolved,   total: stats.totalEasy,   color: "bg-emerald-500", textColor: "text-emerald-500", delay: 0.1 },
    { label: "MEDIUM", solved: stats.mediumSolved, total: stats.totalMedium, color: "bg-amber-500",   textColor: "text-amber-500",   delay: 0.2 },
    { label: "HARD",   solved: stats.hardSolved,   total: stats.totalHard,   color: "bg-primary",     textColor: "text-primary",     delay: 0.3 },
  ];

  const metricCards = [
    { icon: Award,  value: `#${stats.ranking.toLocaleString("en-US")}`, label: "GLOBAL RANKING" },
    { icon: Target, value: `${stats.acceptanceRate}%`,                   label: "ACCEPTANCE RATE" },
    { icon: Code,   value: `${stats.contributionPoints}`,                label: "REP POINTS" },
    { icon: Flame,  value: "27 Days",                                    label: "MAX ACTIVE STREAK" },
  ];

  return (
    <section
      id="leetcode"
      className="relative min-h-screen px-6 sm:px-20 md:px-32 lg:pr-24 lg:pl-[calc(5rem+6rem)] py-24 overflow-hidden"
    >
      <div className="absolute bottom-[-5%] right-[-5%] leading-none select-none pointer-events-none z-0 overflow-hidden opacity-5">
        <span className="font-headline font-black text-[clamp(200px,38vw,600px)] text-primary block translate-x-[15%]">
          05
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-16 md:mb-24 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-label text-[10px] tracking-[0.3em] uppercase text-outline mb-6"
            >
              05 / LEETCODE
            </motion.p>
            <h2 className="font-headline font-black text-[clamp(52px,12vw,140px)] tracking-tighter uppercase leading-[0.75] text-white">
              CODING
            </h2>
            <h3 className="font-headline font-black text-[clamp(36px,8vw,96px)] tracking-tighter uppercase leading-[0.8] text-primary mt-1">
              STATS
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={fetchStats}
              disabled={isRefreshing}
              aria-label="Refresh statistics"
              className="w-11 h-11 border border-outline-variant hover:border-primary flex items-center justify-center text-outline hover:text-primary transition-all cursor-pointer"
            >
              <RefreshCw size={15} className={isRefreshing ? "animate-spin text-primary" : ""} />
            </button>
            <a
              href={`https://leetcode.com/u/${USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-label font-black text-[10px] tracking-[0.2em] px-8 py-4 uppercase transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(255,49,49,0.3)]"
            >
              VIEW PROFILE <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 border border-primary/20 bg-surface-variant p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 justify-between shadow-[0_0_40px_rgba(255,49,49,0.05)]"
          >
            <div className="relative flex items-center justify-center w-48 h-48 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r={radius} className="stroke-outline-variant fill-none" strokeWidth="14" />
                <motion.circle
                  cx="100" cy="100" r={radius}
                  className="stroke-primary fill-none"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute text-center">
                <span className="block font-headline font-black text-5xl tracking-tighter text-white">
                  {loading ? "..." : stats.totalSolved}
                </span>
                <span className="block font-label text-[9px] text-outline tracking-[0.2em] uppercase mt-1">
                  / {stats.totalQuestions}
                </span>
              </div>
            </div>

            <div className="w-full space-y-7">
              {difficultyBars.map(({ label, solved, total, color, textColor, delay }) => (
                <div key={label} className="space-y-2">
                  <div className="flex justify-between items-end font-label text-[10px] tracking-widest">
                    <span className={`${textColor} font-black uppercase`}>{label}</span>
                    <span>
                      <strong className="text-on-surface">{solved}</strong>
                      <span className="text-outline">/{total}</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-outline-variant overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(solved / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay }}
                      className={`h-full ${color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {metricCards.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="border border-primary/20 bg-surface-variant p-6 flex flex-col justify-between h-36 hover:border-primary hover:bg-[#2a0505] transition-colors duration-300"
              >
                <Icon className="text-primary" size={20} />
                <div>
                  <span className="block font-headline font-black text-2xl tracking-tighter text-white">
                    {value}
                  </span>
                  <span className="block font-label text-[9px] text-outline tracking-widest uppercase mt-1">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 border border-primary/20 bg-surface-variant p-6 sm:p-8 shadow-[0_0_40px_rgba(255,49,49,0.05)]"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h4 className="font-headline font-black text-lg uppercase tracking-tight text-white">SUBMISSION ACTIVITY</h4>
              <p className="font-label text-[10px] text-outline uppercase tracking-widest mt-1">Consistency metric // last 28 weeks</p>
            </div>
            <div className="flex items-center gap-2 font-label text-[9px] text-outline tracking-widest">
              <span>LESS</span>
              {[0,1,2,3].map((lvl) => (
                <div key={lvl} className={`w-3 h-3 ${lvl === 0 ? "bg-outline-variant" : lvl === 1 ? "bg-primary/30" : lvl === 2 ? "bg-primary/60" : "bg-primary"}`} />
              ))}
              <span>MORE</span>
            </div>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex flex-col gap-1 min-w-[340px]">
              {grid.map((row, rIdx) => (
                <div key={rIdx} className="flex gap-1">
                  {row.map((level, cIdx) => (
                    <motion.div
                      key={cIdx}
                      whileHover={{ scale: 1.4 }}
                      title={`Week ${cIdx + 1}, Day ${rIdx + 1}`}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-200 ${level === 0 ? "bg-outline-variant" : level === 1 ? "bg-primary/30" : level === 2 ? "bg-primary/60" : "bg-primary"}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant text-center">
            <p className="font-label text-[10px] text-outline uppercase tracking-widest leading-relaxed">
              For detailed problem list and streaks,{" "}
              <a
                href={`https://leetcode.com/u/${USERNAME}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-on-surface font-black transition-colors duration-200"
              >
                visit the profile directly
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

