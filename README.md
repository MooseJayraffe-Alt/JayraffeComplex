# Jayraffe Complex

A functional web-based community hub inspired by the 2004-era "Steam Green" aesthetic. This project utilizes a modern tech stack (Supabase, Tailwind CSS, Marked.js) to deliver a high-performance, real-time experience wrapped in a legacy desktop-application interface.

## 🚀 Core Features

- **Centralized Identity:** Integrated Auth system with persistent user profiles and bio management.
- **Citizen Directory:** Global search functionality to locate and view other users within the Complex.
- **Real-Time Comm-Link:** A message board featuring:
    - **Presence Tracking:** Live "Online Now" status indicators.
    - **Markdown Support:** Fast, intuitive text formatting.
    - **Mini-Profiles:** Instant user data previews without page navigation.
- **Activity Integration:** A global library system for tracking and favoriting experiences.

## 🛠️ Technical Stack

- **Backend-as-a-Service:** Supabase (PostgreSQL, Auth, Realtime).
- **Frontend:** Vanilla JS / Tailwind CSS.
- **Formatting:** Marked.js for Markdown parsing.
- **Design System:** Custom 1px beveling and palette variables to replicate 2004 UI standards.

## 📁 Database Schema

### `profiles`
- `id`: uuid (primary key)
- `display_name`: text
- `avatar_url`: text
- `bio`: text
- `favorites`: text[] (array of experience IDs)

### `messages`
- `id`: uuid (primary key)
- `created_at`: timestamptz
- `content`: text (Markdown supported)
- `user_id`: uuid (foreign key -> profiles.id)

---
*Uplink established. Giraffedows version 13.1.*