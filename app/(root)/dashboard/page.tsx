"use client";

import DashboardClient from "@/app/components/dashboard";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardClient />
    </Suspense>
  );

}