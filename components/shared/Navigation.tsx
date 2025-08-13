"use client"

import React from "react"
import { MobileNavigation } from "./MobileNavigation"
import { DesktopNavigation } from "./DesktopNavigation"

export function Navigation() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  )
}