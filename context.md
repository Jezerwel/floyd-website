# Floyd Website Plan of Action

## 1. Project Overview

This document outlines the plan for creating a three-page landing website for the "Floyd" fish feeder, a product by FeedFrendz. The website will serve as a marketing and informational hub for potential customers.

**Target Audience:**
*   Small to medium-scale fish farmers
*   Large-scale commercial aquaculture operators
*   Aquaculture equipment distributors

**Key Message:** "Automate the Feed, Elevate the Breed."

## 2. Website Pages

The website will consist of three main pages:

### 2.1. Landing Page (`/`)

**Objective:** Grab the user's attention, introduce the problem and solution, and guide them to learn more.

*   **Hero Section:**
    *   Headline: "Automate the Feed, Elevate the Breed."
    *   Subheading: "FLOYD 1.0: An IoT-controlled floating fish feeder designed for small to medium fish pens."
    *   Call to Action (CTA): "Learn More" (links to Packages page)
*   **Problem Section:**
    *   Title: "The Challenges of Manual Feeding"
    *   Content: Based on "THERE IS A PROBLEM..." and "CHALLENGES IN MILKFISH PRODUCTION" slides.
        *   Manual feeding is inefficient and labor-intensive.
        *   Waste less, save more.
        *   Challenges in milkfish production (hatchery survival rates, high cost of feed).
*   **Solution Section:**
    *   Title: "Introducing Floyd 1.0: The Smart Solution"
    *   Content: Based on "FLOYD 1.0" and "Solutions" slides.
        *   Dispenses precise amounts of feed.
        *   Enables real-time monitoring.
        *   Alerts when feed is low.
        *   Monitors water temperature.
*   **Key Features Section:**
    *   Title: "Key Features"
    *   Content: Based on "FLOYD 1.0 Prototype Overview" slide.
        *   Remote control via mobile app.
        *   Real-time sensors.
        *   Durable and low-maintenance.
        *   Steel bars and flat bars for a durable feed container.
        *   5-gallon PET bottles for buoyancy.
        *   Paddle mechanism for movement.
        *   Ultrasonic sensor for feed capacity.
        *   Temperature sensor for underwater conditions.
        *   ESP8266 IoT microcontroller.
*   **Call to Action Section:**
    *   Title: "Let's Feed Smarter Now."
    *   CTA: "View Packages" (links to Packages page)

### 2.2. About Us Page (`/about`)

**Objective:** Introduce the team and the company's mission.

*   **Mission Section:**
    *   Title: "Our Mission"
    *   Content: "Bridging Tradition and Innovation in Aquaculture. We are dedicated to providing innovative solutions to the challenges faced by the aquaculture industry."
*   **Team Section:**
    *   Title: "Meet Team FeedFrendz"
    *   Content: Display team members with their photos, names, and roles as per the "TEAM FEEDFRENDZ" slide.
        *   Clarence Von Alarde: Chief Executive Officer
        *   Jened Lucio Caguimbaga: Product and Design Director
        *   Johnrey Dexter Palma: Mechanical Engineer
        *   Richylle Delante: Sales & Marketing Director
        *   Jezerwel Griño: Software Engineer

### 2.3. Packages Page (`/packages`)

**Objective:** Showcase the different product packages available for purchase.

*   **Packages Section:**
    *   Title: "Choose Your Feeder"
    *   Content: Display three packages in a card format.
        *   **Package 1: Standing Feeder**
            *   Image: `@floyd/public/standing.png`
            *   Description: "The stationary solution for targeted feeding in smaller ponds."
            *   Features: List relevant features.
            *   CTA: "Get a Quote"
        *   **Package 2: Floating Feeder**
            *   Image: `@floyd/public/floating.png`
            *   Description: "Our flagship mobile feeder for comprehensive coverage in larger fish pens."
            *   Features: List relevant features.
            *   CTA: "Get a Quote"
        *   **Package 3: Complete System**
            *   Images: Both `@floyd/public/standing.png` and `@floyd/public/floating.png`
            *   Description: "The ultimate package for maximum efficiency, combining both standing and floating feeders."
            *   Features: List all features.
            *   CTA: "Get a Quote"

## 3. Design and Development Notes

*   **Framework:** The existing structure suggests a Next.js frontend. We will continue with this.
*   **Styling:** Use the existing color scheme and design elements from the presentation.
*   **Images:** Utilize the provided images for the packages. The overall theme should be clean, modern, and professional.
*   **Content:** All content will be derived from the provided PDF presentation.
