# Roadmap for implementation
The following milestones should be used to track progress.

## Local mode
### Milestone 1: working UI
- [x] UI only mode
- [x] support light/dark color scheme
- [x] use `PrimeNG` with `tailwindcss` instead of angular material
- [x] UI configuration (sound settings)
- [x] split up to lazy loaded modules
- [x] basic routing for timer selection, timer view, admin overview, timer config overview

### Milestone 2: working timer configuration
- [ ] save timers to localStorage
- [ ] import/export of timers
- [ ] create/update/delete timers
- [ ] import sounds to timers
- [ ] import images to timers

### Milestone 3: local timer playback
- [ ] active timer view
- [ ] buttons for timer actions
- [ ] local in focus hotkey support
- [ ] sound playback
- [ ] first working version 🎉

## Hosted local mode
### Milestone 4: backend database, backend websockets
- [ ] backend service
- [ ] load/save timers/configuration from/to backend
- [ ] UI only / hosted local modes
- [ ] websocket communication for timer actions
- [ ] global hotkey support via backend service worker

### Milestone 5: single executable with frontend viewer
- [ ] extend backend service to "user" mode
- [ ] start with only one executable: frontend and backend

### Milestone 6: Hosted shared mode
- [ ] authentication/authorization
- [ ] extend ui to allow login

## Shared mode
### Milestone 7: remote connections
- [ ] extend backend service with "reverse proxy" mode
- [ ] websocket communication with password-protected rooms (1 reverse proxied server = 1 room)
- [ ] extend ui / backend "user" mode service to connect to remote "reverse proxy" mode server with auth token
