"use client"

import { useState } from "react"
import { Upload, User } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Navbar from "@/app/components/navbar"

type UpdateMode = "upload" | "select"

export default function ProfileUpdate() {
  const [mode, setMode] = useState<UpdateMode>("upload")
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log(e.dataTransfer.files[0])
    }
  }

  const router = useRouter()

  const handleClick = () => {
    router.push("/dashboard")
  }

  const avatars = Array(10).fill(null)

  return (
    <div className="min-h-screen bg-gradient-custom flex flex-col">
      {/* Header */}
        <Navbar/>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className=" max-w-md bg-black bg-opacity-10 border border-neutral-700 rounded-[16px] h-[650px] w-[580px]">
          <CardContent className="p-6">
            {/* Logo */}
            <div className="flex justify-center mb-6 ">
              <div className="bg-gray-800 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-xl font-semibold text-white mb-2">Update your profile</h1>
              <p className="text-gray-400 text-sm">
                You can update your profile picture or select one from our collection
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="upload" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 h-[37px] px-1 bg-white bg-opacity-10">
                <TabsTrigger className=" h-[29px]" value="upload" onClick={() => setMode("upload")}>Upload</TabsTrigger>
                <TabsTrigger className=" h-[29px]" value="select" onClick={() => setMode("select")}>Select</TabsTrigger>
              </TabsList>
              <div className="pb-4 pt-6 px-1">
                <hr className="border-[0.3px] border-[#454549]" />
              </div>
              <TabsContent value="upload">
                <div
                  className={cn(
                    "border-2 border-dashed rounded-[16px] bg-white bg-opacity-10 p-8 text-center transition-colors",
                    dragActive
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  )}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2 font-semibold">Drag & drop file here to upload</p>
                  <p className="text-gray-500 text-sm mb-4">JPEG, PNG and PDG</p>
                  <Button
                    variant="secondary"
                    className="bg-transparent font-bold w-full border-2 rounded-[8px] text-gray-300 hover:bg-white hover:bg-opacity-30 hover:text-white"
                  >
                    Browse File
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="select">
                <div className="grid grid-cols-5 gap-4 mb-8">
                  {avatars.map((_, i) => (
                    <button
                      key={i}
                      className="aspect-square rounded-full border-2 border-white border-opacity-60 bg-white bg-opacity-50 hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <User className="w-8 h-8 text-black" />
                    </button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="secondary"
                className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Cancel
              </Button>
              <Button 
              variant={"primary"}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={handleClick}>
                {mode === "upload" ? "Upload" : "Select"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-gradient-to-b from-transparent to-purple-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm  text-white text-opacity-40">
          <div>© 2024 Spacece. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-purple-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-purple-500 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

