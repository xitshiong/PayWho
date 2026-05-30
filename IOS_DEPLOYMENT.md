# KakiSplit iOS App Store Deployment Checklist

## ✅ Completed

### PWA Configuration
- [x] manifest.json with app metadata
- [x] iOS-specific meta tags (apple-mobile-web-app-*)
- [x] Icon set: 120, 152, 167, 180, 192, 512px
- [x] Splash screens for all iPhone sizes (optimized to 232KB)
- [x] viewport-fit=cover for safe area support

### Mobile Optimizations
- [x] Touch targets ≥44px (15 instances verified)
- [x] Haptic feedback on all interactive elements
- [x] -webkit-tap-highlight-color: transparent
- [x] Safe area insets (env(safe-area-inset-*))

### Performance
- [x] Code splitting (vendor, supabase, qr chunks)
- [x] Service worker with offline caching
- [x] Image optimization (splash screens 1.3MB → 232KB)
- [x] Production build: 418KB total (119KB gzipped)

## 📋 Next Steps

### Testing
- [ ] Test on real iOS device (Safari)
- [ ] Add to Home Screen and verify:
  - [ ] Splash screen displays
  - [ ] Status bar styling (black-translucent)
  - [ ] Safe area insets work correctly
  - [ ] Haptic feedback triggers
  - [ ] Offline mode works
  - [ ] Camera/file upload works
  - [ ] QR code generation works

### App Store Submission (PWA via wrapper)
- [ ] Choose wrapper: PWABuilder, Capacitor, or native WebView
- [ ] Configure app metadata (name, description, keywords)
- [ ] Create App Store screenshots (6.7", 6.5", 5.5")
- [ ] Write App Store description
- [ ] Set up Apple Developer account ($99/year)
- [ ] Submit for review

### Optional Enhancements
- [ ] Push notifications (requires native wrapper)
- [ ] Share API integration
- [ ] Camera API optimization
- [ ] Biometric auth for saved payment QR

## 🚀 Deploy Commands

```bash
# Build production
npm run build

# Preview locally
npm run preview

# Deploy to Vercel
vercel --prod
```

## 📱 Test URLs

- Local: http://localhost:3000
- Production: https://kakisplit.vercel.app
