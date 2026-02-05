# Analytics & Tracking Setup Guide

## 🎯 Recommended Setup (Best for Drain Business)

### **Option 1: Vercel Analytics** (EASIEST - Recommended to start)

**What You Get:**
- Page views & unique visitors
- Top pages & referrers  
- Device & browser data
- Geographic data
- Zero configuration needed

**Setup:**
1. Deploy site to Vercel
2. Go to Vercel Dashboard → Project → Analytics tab
3. Click "Enable Analytics"
4. Done! ✅

**Cost:** FREE (up to 100k events/month)

---

### **Option 2: Google Analytics 4** (MOST COMPREHENSIVE)

**What You Get:**
- Everything Vercel has PLUS:
- User behavior flow
- Conversion tracking
- Custom events
- Demographics
- Real-time data
- Integration with Google Ads

**Setup:**

1. **Create GA4 Property**
   - Go to: https://analytics.google.com
   - Create account → Create property
   - Property name: "Jay That Drain Guy"
   - Time zone: America/Toronto
   - Get Measurement ID (looks like: G-XXXXXXXXXX)

2. **Add Tracking Code**
   - I'll add the code for you
   - Just give me your Measurement ID

3. **Set Up Conversions**
   - Phone clicks
   - SMS clicks
   - YouTube video watches
   - Scroll depth

**Cost:** FREE (unlimited)

---

### **Option 3: Both** (RECOMMENDED)

Use BOTH Vercel Analytics + Google Analytics 4!
- Vercel: Quick insights, super easy
- GA4: Deep analysis, conversion tracking

**No conflict** - they work together perfectly.

---

## 📊 Key Metrics to Track

### **Primary Conversions:**
1. Phone number clicks: `tel:+12892424876`
2. SMS clicks: `sms:+12892424876`
3. YouTube video plays
4. Scroll to contact section

### **Performance Metrics:**
1. Page views
2. Unique visitors
3. Bounce rate
4. Average session duration
5. Top traffic sources

### **Local SEO Metrics:**
1. Organic search traffic
2. Direct traffic (from Google Business)
3. Referral traffic (from citations)
4. Geographic location of visitors

---

## 🔥 Call Tracking (ADVANCED - Optional)

Want to know which marketing channels drive PHONE CALLS?

**Options:**
1. **CallRail** (~$45/month)
   - Call recording
   - Call transcription  
   - Source tracking
   - SMS tracking

2. **CallTrackingMetrics** (~$39/month)
   - Similar to CallRail
   - Dynamic number insertion
   - Form tracking

**Worth it?** 
- If you spend money on ads: YES
- If purely organic: Start without it

---

## 📱 Conversion Tracking Events

Here are the events we should track:

```javascript
// Phone Click
gtag('event', 'phone_click', {
  'event_category': 'conversion',
  'event_label': '289-242-4876'
});

// SMS Click  
gtag('event', 'sms_click', {
  'event_category': 'conversion',
  'event_label': '289-242-4876'
});

// YouTube Video Watch
gtag('event', 'video_watch', {
  'event_category': 'engagement',
  'event_label': 'hero_video'
});

// Scroll to Services
gtag('event', 'scroll_depth', {
  'event_category': 'engagement',
  'event_label': 'services_section'
});
```

---

## 🎯 Monthly Reporting Template

Track these numbers monthly:

| Metric | Target | Actual |
|--------|--------|--------|
| Website Visitors | 500+ | ___ |
| Phone Clicks | 20+ | ___ |
| SMS Clicks | 10+ | ___ |
| Avg. Session | 2 min+ | ___ |
| Bounce Rate | <60% | ___ |
| YouTube Views | 100+ | ___ |
| Conversion Rate | 4%+ | ___ |

---

## ✅ Setup Priority

**Week 1:**
1. ✅ Deploy to Vercel
2. ✅ Enable Vercel Analytics  
3. ⏳ Set up Google Analytics 4

**Week 2:**
4. ⏳ Set up Google Search Console
5. ⏳ Verify all tracking works

**Week 3:**
6. ⏳ Set up conversion goals
7. ⏳ Create first monthly report

**Month 2+:**
8. ⏳ Consider call tracking (if needed)
9. ⏳ A/B test CTA buttons
10. ⏳ Optimize based on data

---

## 🚀 Want Me to Set This Up?

Just reply with:
- Your Google Analytics Measurement ID (if you have one)
- Or "set up GA4 for me" and I'll add the code

I can add the tracking code in 2 minutes! 📊

---

*Last Updated: February 5, 2026*
