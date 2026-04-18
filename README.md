<div align="center">
  <h1>☠️ Pirate Social</h1>
  <h3>Own Your Content • Connect Your Community • Sail the Open Web</h3>

  <p>
    <img src="https://img.shields.io/badge/Astro-6-FF5D01?logo=astro" alt="Astro 6">
    <img src="https://img.shields.io/badge/Preact-10-673AB8?logo=preact" alt="Preact 10">
    <img src="https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss" alt="Tailwind 3">
    <img src="https://img.shields.io/badge/Express-Node_22-339933?logo=node.js" alt="Node 22">
    <img src="https://img.shields.io/badge/PostgreSQL-Prisma-4169E1?logo=postgresql" alt="PostgreSQL">
    <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8" alt="PWA Enabled">
  </p>

  <p>
    <a href="https://piratesocial.app">Hub</a>
    ☠️
    <a href="https://github.com/piratewebsite/piratesocial/issues/new?labels=bug">Report Bug</a>
    ☠️
    <a href="https://github.com/piratewebsite/piratesocial/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

---

**Pirate Social** is a federated social platform for photographers and creators. Every user owns their own website — a static Astro site deployed free on GitHub Pages. Sites connect through RSS feeds and a central hub, creating a decentralized social network where **your content is always yours**.

Built on the foundation of [PIRATE CMS](https://github.com/piratewebsite/pirate), Pirate Social adds a full social layer: follows, likes, comments, real-time notifications, Bluesky cross-posting, YouTube playlists, RSS feed aggregation, and more.

## Architecture

```
┌───────────────────────────────────────────────────────┐
│                  PIRATE SOCIAL HUB                     │
│         Express + PostgreSQL on Fly.io                 │
│                                                        │
│  • GitHub OAuth           • Feed aggregation           │
│  • Likes/Comments/Follows • Real-time notifications    │
│  • User directory         • Bluesky cross-posting      │
│  • External RSS feeds     • Admin/moderation           │
│  • Squads                 • Search                     │
└──────────────┬───────────────────┬────────────────────┘
               │                   │
        ┌──────▼──────┐     ┌──────▼──────┐
        │  User Node  │     │  User Node  │
        │  Astro SSG  │     │  Astro SSG  │
        │  GitHub     │     │  GitHub     │
        │  Pages      │     │  Pages      │
        └─────────────┘     └─────────────┘
```

| Component | Repo | Hosting | Cost |
|-----------|------|---------|------|
| **User sites** (nodes) | Public template in this repo | GitHub Pages | Free |
| **Hub** (backend API) | [piratesocial-hub](https://github.com/piratewebsite/piratesocial-hub) (private) | Fly.io + Supabase | ~$0–5/mo |

## Features

### 📸 Photography Publishing
- **EXIF metadata** — auto-extracted or manual (camera, lens, focal length, aperture, shutter, ISO)
- **Photo galleries** with lightbox overlay
- **Slideshows** with fade, slide, zoom, and Ken Burns transitions
- **Image optimization** via Astro + Sharp
- **Visibility controls** — site only, site + social crosspost, or private (password protected)

### 🌐 Federated Social Network
- **Follow** other photographers across the network
- **Like and comment** on posts — comments merge with Bluesky replies
- **Real-time notifications** via Server-Sent Events
- **Discover feed** — browse all public posts across the network
- **User directory** with search
- **Personalized timeline** — posts from people you follow + your RSS subscriptions

### 🦋 Bluesky Integration
- **Connect your Bluesky account** via app password
- **Auto-crosspost** photos to Bluesky (controlled per-post via visibility setting)
- **Merged comments** — Bluesky thread replies appear alongside Pirate Social comments
- **Bluesky timeline** — browse your Bluesky feed inside your site
- **Like, reply, and interact** across both platforms

### 🎵 YouTube Player
- **Ad-free playback** via `youtube-nocookie.com` embeds (no YouTube IFrame API)
- **Playlist support** with custom track list UI
- **Audio-only mode** for music/podcasts
- **Floating mini-player** — persists across page navigation with `transition:persist`
- **Docked mode** — inline on any page via content blocks
- **Start/end time trimming** per track
- **Custom controls** via `postMessage` — play, pause, seek, scrubber bar

### 📄 Content Management
- **Decap CMS** — edit posts, galleries, and settings from the browser via GitHub
- **Drag-and-drop page builder** with 8 block types:
  - Hero banner, Profile card, Recent posts grid, YouTube video, Photo gallery, Text/Markdown, Image, Location/map
- **Markdown + MDX** posts with tags and categories
- **RSS feed generation** with custom photo/social XML namespaces
- **External RSS subscriptions** — follow any RSS feed in your timeline

### 🔧 Admin & Moderation
- Moderation reports (pending/resolved/dismissed)
- User banning
- Post deletion
- Squads — activity-window-based groups with Bluesky DID members

### ⚡ Performance & PWA
- Static site generation — fast page loads, no server needed per user
- PWA-ready with offline support and installable manifest
- Auto-generated sitemap and SEO meta tags
- Responsive images with Astro Assets

## Getting Started

### For Users (join the network)

1. Sign in at [piratesocial.app](https://piratesocial.app) with GitHub
2. The hub provisions your site repo automatically
3. Enable GitHub Pages (Settings → Pages → GitHub Actions)
4. Push — your site auto-builds and connects to the hub
5. Go to `yoursite.github.io/admin` to manage content via Decap CMS

### Local Development

```bash
# Clone the template
git clone https://github.com/piratewebsite/piratesocial.git
cd piratesocial/node-template

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
piratesocial/
└── node-template/              # User site template (GitHub Pages)
    ├── src/
    │   ├── components/         # YouTubePlayer, Slideshow, Gallery,
    │   │   │                   #   EXIF, SocialActions, Blocks
    │   │   └── blocks/         # HeroBlock, ProfileBlock, YouTubeBlock,
    │   │                       #   GalleryBlock, TextBlock, ImageBlock,
    │   │                       #   LocationBlock, RecentPostsBlock
    │   ├── content/            # Posts, galleries, slideshows, pages,
    │   │                       #   settings, theme, labels, PWA config
    │   ├── layouts/            # BaseLayout with floating player
    │   ├── lib/                # Hub API client, site config
    │   └── pages/              # index, about, social, posts/,
    │                           #   galleries/, settings/, feed.xml
    ├── public/admin/           # Decap CMS configuration
    └── .github/workflows/      # Auto-deploy to GitHub Pages
```

The hub backend lives in a [separate private repo](https://github.com/piratewebsite/piratesocial-hub).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | Astro 6 (SSG) |
| UI components | Preact 10 |
| Styling | Tailwind CSS 3 |
| Content | Markdown + MDX |
| CMS | Decap CMS (GitHub backend) |
| Backend | Express.js on Node 22 |
| Database | PostgreSQL (Supabase) + Prisma ORM |
| Auth | GitHub OAuth |
| Bluesky | AT Protocol (`@atproto/api`) |
| Image processing | Sharp |
| Hosting | GitHub Pages (sites) + Fly.io (hub) |
| YouTube | `youtube-nocookie.com` iframes + `postMessage` |

## Custom RSS Namespace

Posts syndicate with extended metadata for rich social feeds:

```xml
<rss xmlns:photo="https://piratesocial.app/ns/photo"
     xmlns:social="https://piratesocial.app/ns/social">
  <channel>
    <social:profilePhoto>...</social:profilePhoto>
    <social:bio>...</social:bio>
    <item>
      <photo:image>...</photo:image>
      <photo:exif>
        <photo:camera>Sony A7IV</photo:camera>
        <photo:aperture>2.8</photo:aperture>
      </photo:exif>
      <photo:gallery>
        <photo:image url="..." caption="..." />
      </photo:gallery>
    </item>
  </channel>
</rss>
```

## Related

- [PIRATE CMS](https://github.com/piratewebsite/pirate) — the standalone CMS this project builds on

## License

MIT
