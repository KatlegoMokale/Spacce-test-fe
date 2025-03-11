"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import localFont from "next/font/local"
import Image from "next/image"
import { useRouter } from "next/navigation"

import Standard from "@/public/assets/badges/standard.svg"
import StandardDone from "@/public/assets/badges/standardDone.svg"
import Leadership from "@/public/assets/badges/leadership.svg"
import LeadershipDone from "@/public/assets/badges/leadershipDone.svg"
import TwoMinute from "@/public/assets/badges/two-minute.svg"
import TwoMinuteDone from "@/public/assets/badges/two-minuteDone.svg"
import SystemTraining from "@/public/assets/badges/system.svg"
import SystemTrainingDone from "@/public/assets/badges/systemDone.svg"
import Poster from "@/public/assets/badges/poster.svg"
import PosterDone from "@/public/assets/badges/posterDone.svg"
import Video from "@/public/assets/badges/video.svg"
import VideoDone from "@/public/assets/badges/videoDone.svg"
import Pdf from "@/public/assets/badges/pdf.svg"
import PdfDone from "@/public/assets/badges/pdfDone.svg"
import Anonymous from "@/public/assets/badges/anonymous.svg"
import AnonymousDone from "@/public/assets/badges/anonymousDone.svg"
import AnimatedBadge from "./AnimatedBadge"

const myFont = localFont({ src: "../fonts/Satoshi-Medium.woff" })

gsap.registerPlugin(ScrollTrigger)

interface Mission {
  id: number
  title: string
  url: string
  description: string
  isCompleted: boolean
  status: string
  badge: {
    completed: typeof StandardDone
    incomplete: typeof Standard
  }
  animation: string
}

const missions: Mission[] = [
  {
    id: 1,
    title: "Standard Mission",
    url: "mission",
    description: "Learn about our core values and principles.",
    isCompleted: true,
    status: "completed",
    badge: { completed: StandardDone, incomplete: Standard },
    animation: "zoomPop"
  },
  {
    id: 2,
    title: "Leadership Mission",
    url: "leadership",
    description: "Discover effective collaboration strategies.",
    isCompleted: true,
    status: "completed",
    badge: { completed: LeadershipDone, incomplete: Leadership },
    animation: "dropBounce"
  },
  {
    id: 3,
    title: "Two Minute Appreciation Mission",
    url: "two-minute-appreciation",
    description: "Enhance your leadership capabilities.",
    isCompleted: false,
    status: "active",
    badge: { completed: TwoMinuteDone, incomplete: TwoMinute },
    animation: "fadeUp"
  },
  {
    id: 4,
    title: "System Training Mission",
    url: "system-training",
    description: "Explore creative problem-solving techniques.",
    isCompleted: false,
    status: "incomplete",
    badge: { completed: SystemTrainingDone, incomplete: SystemTraining },
    animation: "zoomPop"
  },
  {
    id: 5,
    title: "Poster Mission",
    url: "poster-mission",
    description: "Understand modern technological advances.",
    isCompleted: false,
    status: "incomplete",
    badge: { completed: PosterDone, incomplete: Poster },
    animation: "dropBounce"
  },
  {
    id: 6,
    title: "Video Mission",
    url: "video-missions",
    description: "Learn to develop effective business strategies.",
    isCompleted: false,
    status: "incomplete",
    badge: { completed: VideoDone, incomplete: Video },
    animation: "fadeUp"
  },
  {
    id: 7,
    title: "Pdf Mission",
    url: "pdf-mission",
    description: "Master customer service principles.",
    isCompleted: false,
    status: "incomplete",
    badge: { completed: PdfDone, incomplete: Pdf },
    animation: "zoomPop"
  },
  {
    id: 8,
    title: "Anonymous Mission",
    url: "anonymous",
    description: "Develop project management skills.",
    isCompleted: false,
    status: "incomplete",
    badge: { completed: AnonymousDone, incomplete: Anonymous },
    animation: "dropBounce"
  },
]

export default function CurrentMission() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const missionsRef = useRef<(HTMLDivElement | null)[]>([])

  const router = useRouter()

  const setMissionRef = useCallback((el: HTMLDivElement | null, index: number) => {
    missionsRef.current[index] = el
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Animate the timeline line
        gsap.from(".timeline-line", {
          height: 0,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })

        // Animate each mission item
        // missionsRef.current.forEach((mission) => {
        //   if (mission) {
        //     gsap.from(mission, {
        //       opacity: 0,
        //       y: 20,
        //       duration: 0.5,
        //       scrollTrigger: {
        //         trigger: mission,
        //         start: "top bottom-=100",
        //         end: "top center",
        //         toggleActions: "play none none reverse",
        //       },
        //     })
        //   }
        // })
      })

      return () => ctx.revert()
    }
  }, [])

  useEffect(() => {
    // Set default selected mission
    const activeMission = missions.find((mission) => mission.status === "active")
    setSelectedMission(activeMission || missions[0])
  }, [])

  const handleClick = (mission: Mission | null) => {
    if (mission) {
      router.push(`/${mission.url}`)
    } else {
      router.push("/mission")
    }
  }

  const completedMissions = missions.filter((mission) => mission.isCompleted).length

  return (
    <div className=" container h-[90vh] w-full p-5 mx-auto flex flex-col justify-center items-center">
      <div className={`grid lg:grid-cols-4 gap-16 `}>
        <div className="space-y-4 col-span-1">
          <h2 className="text-[24px] font-bold text-white">Mission Moment Title</h2>
          <div className="h-[580px] w-[273px] rounded-md relative">
            <ScrollArea className="h-full w-full rounded-md">
              <div className="relative space-y-4 px-4 pt-4 pb-14" ref={timelineRef}>
                {/* Timeline line */}
                <div className="timeline-line absolute left-[11px] top-[24px] w-0.5 h-[calc(100%-48px)]" />
                <div className="pr-4 flex flex-col gap-2">
                  {/* Mission items */}
                  {missions.map((mission, index) => {
                    const isSelected = selectedMission?.id === mission.id

                    return (
                      <div
                        key={mission.id}
                        ref={(el) => setMissionRef(el, index)}
                        className={`relative pl-4 py-4 transition-colors gap-2 cursor-pointer rounded-[12px] h-[124px] flex ${
                          myFont.className
                        }
                    ${isSelected ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"}
                    ${mission.isCompleted ? "" : ""}`}
                        onClick={() => setSelectedMission(mission)}
                      >
                        <div className=" w-[24px] h-full flex flex-col items-center justify-start gap-1  mt-[6px] ">
                          {/* Timeline dot */}
                          <div
                            className={` border-gray-600 bg-transparent w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center relative mx-auto ${
                              mission.isCompleted ? "border-purple-500 bg-transparent" : isSelected ? "" : ""
                            }
                    ${mission.status === "active" ? "border-purple-500 bg-transparent" : ""}
                    `}
                          >
                            <div
                              className={` w-[10px] h-[10px] rounded-full ${
                                mission.isCompleted ? " border-black bg-purple-500" : isSelected ? "" : ""
                              }
                              
                                      `}
                            />
                          </div>
                          {/* Mission Line */}
                          <div
                            className={`
                    ${mission.isCompleted ? " w-[3px] bg-purple-500 h-[68px]" : isSelected ? "" : ""}
                    ${
                      mission.status === "active"
                        ? " w-[3px] bg-gradient-to-b from-purple-500  to-transparent  h-[60px]"
                        : ""
                    }
                    `}
                          ></div>
                        </div>

                        {/* Mission content */}
                        <div
                          className={`transition-opacity w-full p-1 ${
                            mission.isCompleted ? "text-white" : isSelected ? "text-white" : "text-gray-500"
                          }`}
                        >
                          <h3 className="text-base leading-5">{mission.title}</h3>
                          <p className="text-base mt-1 opacity-[75%] leading-[22.4px]">{mission.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollArea>
            <div className=" h-[230px] w-[273px] rounded-md absolute bottom-0 z-10 bg-gradient-to-t from-[#1a1a1a]  to-transparent pointer-events-none"></div>
          </div>

          <div className="text-sm text-gray-400">
            {completedMissions} / {missions.length}
          </div>
        </div>

        <div className="space-y-4 col-span-3 container mx-auto flex-col flex items-center pt-4 gap-10">
          <div className="flex items-center rounded-full ">
            {selectedMission && (
              <AnimatedBadge
                amplitude={20}
                revealType={selectedMission.animation}
                triggerAnimation={selectedMission?.id} // Pass the selected mission ID as the trigger
              >
                <Image
                  src={
                    selectedMission.isCompleted || selectedMission.status == "active"
                      ? selectedMission.badge.completed
                      : selectedMission.badge.incomplete
                  }
                  alt={`Badge for ${selectedMission.title}`}
                  height={400}
                  width={400}
                  className="badge-gradient"
                />
              </AnimatedBadge>
            )}
          </div>
          <p className="text-white font-[16px] text-center w-[400px]">
            {selectedMission ? selectedMission.description : "Select a mission to view its details."}
          </p>
          <div className="flex justify-center">
            <Button
              variant={"primary"}
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => handleClick(selectedMission)}
            >
              {selectedMission && !selectedMission.isCompleted ? "Start Mission" : "Next Mission"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

