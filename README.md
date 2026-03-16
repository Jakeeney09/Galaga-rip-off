# Star Raid 3D Mobile PWA

This is the iPhone-friendly PWA build of the Three.js Galaga-style game.

## Features added
- Mobile touch controls
- Landscape-first layout for iPhone
- Installable PWA manifest
- Service worker for offline caching after first load
- Home Screen support on iPhone
- Lower mobile render load for smoother play

## How to run locally
Use a local server from the project folder:

```bash
python -m http.server 8080
```

Then open the server URL in Safari.

## Install on iPhone
1. Host the folder on a site with HTTPS.
2. Open the game in Safari on your iPhone.
3. Tap Share.
4. Tap **Add to Home Screen**.
5. Launch it from your Home Screen like an app.

## Controls
### Desktop
- Move: A / D or Left / Right
- Fire: Space
- Restart: R

### Mobile
- Drag on the left touch pad to move
- Auto-fire is always on
- Hold the FIRE button to shoot faster
- Use landscape orientation
