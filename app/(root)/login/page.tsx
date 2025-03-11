"use client"

import Link from "next/link"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/spacce-footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-gradient-custom flex flex-col">
      {/* Header */}
      <Navbar/>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-[580px] h-[602px ">
          <div className="bg-[#17171C] rounded-[16px] p-8 shadow-xl border border-neutral-700">
            {/* Logo */}
            <div className="flex justify-center mb-6">
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

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-semibold text-white">Login to your account</h1>
                <p className="text-gray-400 text-base">Enter your details to login.</p>
              </div>

              <hr className="border-gray-700" />

              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#5C5C5F] rounded-[6px] border-gray-500 text-white h-[40px] text-[16px]"
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#5C5C5F] rounded-[6px] border-gray-500 text-white h-[40px] text-[16px]"
                  />
                </div>
              </div>

              <Button
              variant={'primary'}
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2transition-colors text-[18px] h-[51px]"
                onClick={handleSubmit}
              >
                Login
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="keep-logged-in"
                    checked={keepLoggedIn}
                    onCheckedChange={(checked) => setKeepLoggedIn(checked as boolean)}
                    className="border-gray-600 rounded-[4px] bg-white data-[state=checked]:bg-purple-600"
                  />
                  <Label
                    htmlFor="keep-logged-in"
                    className="text-base text-gray-300 cursor-pointer"
                  >
                    Keep me logged in
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-base text-gray-300 hover:text-purple-500 transition-colors underline underline-offset-4"
                >
                  Forgot your password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
      {/* <hr className="border-gray-700" />
      <footer className="p-6 bg-gradient-to-b from-transparent to-purple-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
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
      </footer> */}
    </div>
  )
}

