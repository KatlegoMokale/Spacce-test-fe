"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MissionBadge from "@/app/components/mission-badge"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedMissionBadgeProps {
  containerRef: React.RefObject<HTMLDivElement>
  startSectionRef: React.RefObject<HTMLDivElement>
  section2Ref: React.RefObject<HTMLDivElement>
  section3Ref: React.RefObject<HTMLDivElement>
  mission: string
  missionStatus: string
}

const AnimatedMissionBadge: React.FC<AnimatedMissionBadgeProps> = ({
  containerRef,
  startSectionRef,
  section2Ref,
  section3Ref,
  missionStatus,
  mission,
}) => {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      !badgeRef.current ||
      !containerRef.current ||
      !startSectionRef.current ||
      !section2Ref.current ||
      !section3Ref.current
    )
      return

    const badge = badgeRef.current
    const container = containerRef.current
    const startSection = startSectionRef.current
    const section2 = section2Ref.current
    const section3 = section3Ref.current

    // Initial animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: startSection,
        scroller: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    tl1.fromTo(
      badge,
      {
        x: "-50%",
        y: "-50%",
        scale: 1,
        top: "50%",
        left: "50%",
      },
      {
        x: "calc(100vw - 120px)",
        y: "calc(100vh - 120px)",
        scale: 0.2,
      },
    )

    // Second and third section animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section2,
        scroller: container,
        start: "top bottom",
        end: () => `+=${section2.offsetHeight + section3.offsetHeight}`,
        scrub: true,
      },
    })

    tl2.to(badge, {
      y: "15vh", // Move to the top right
      x: `${(section2.offsetWidth - badge.offsetWidth) / 2.2}px`,
      // x: "35vw",
      ease: "none",
    })

    tl2.to(badge, {
      y: "-200%", // Move to the top right
      ease: "none",
    })

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [containerRef, startSectionRef, section2Ref, section3Ref])

  return (
    <div ref={badgeRef} className="fixed z-50 pointer-events-none" style={{ top: "50%", left: "50%" }}>
      <MissionBadge mission={mission} missionStatus={missionStatus} width={400} height={447.22} />
    </div>
  )
}

export default AnimatedMissionBadge

