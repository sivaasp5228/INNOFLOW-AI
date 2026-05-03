# 🚀 INNOFLOW-AI Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Required Actions Before Deployment

#### 1. **Update Supabase CORS Settings**
1. Go to your Supabase Dashboard
2. Navigate to **Settings** → **API**
3. Under **CORS**, add your production domain:
   ```
   https://your-domain.vercel.app
   https://your-domain.netlify.app
   ```
4. Click **Save**

#### 2. **Update Supabase Site URL**
1. In Supabase Dashboard → **Authentication** → **Settings** → **URL Configuration**
2. Update **Site URL** to your production domain
3. Add **Redirect URLs** for production domain

#### 3. **Run Database Updates**
```sql
-- Run this in Supabase SQL Editor if not already done
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS preferences JSONB DEFAULT '{}';
CREATE INDEX IF NOT EXISTS idx_profiles_preferences ON profiles USING GIN(preferences);
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### **Step 1: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Connect your GitHub repository
4. Import the `INNOFLOW-AI` repository

#### **Step 2: Configure Environment Variables**
In Vercel dashboard → **Settings** → **Environment Variables**, add:
```
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_SUPABASE_URL=https://kqdhlskkjlrxxnezciwz.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_n8zYfXdGlEBxfa3OtHWUzw_Nm03f7yP
VITE_SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### **Step 3: Deploy**
1. Click **Deploy**
2. Wait for build to complete
3. Your app will be live at the provided URL

### Option 2: Netlify

#### **Step 1: Build for Production**
```bash
npm run build
```

#### **Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect your GitHub repository

#### **Step 3: Configure Environment Variables**
In Netlify dashboard → **Site settings** → **Environment variables**, add the same variables as Vercel

## 🔧 Production Configuration

### **Environment Variables Required**
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
VITE_APP_URL=https://your-domain.vercel.app
VITE_APP_NAME=INNOFLOW-AI
```

### **Build Command**
```bash
npm run build
```

### **Output Directory**
```
dist/
```

## 🚀 Post-Deployment Actions

### **1. Test Your Live Application**
- ✅ User registration and login
- ✅ Workflow generation
- ✅ Settings page functionality
- ✅ Workflow insights
- ✅ PDF download feature

### **2. Update Supabase Redirect URLs**
Add your production domain to:
- **Site URL**
- **Redirect URLs**
- **CORS origins**

### **3. Monitor Performance**
- Check Vercel/Netlify analytics
- Monitor Supabase usage
- Test all user workflows

## 🛠️ Troubleshooting

### **Common Issues & Solutions**

#### **Authentication Issues**
- **Problem**: "Auth session missing" error
- **Solution**: Check Supabase site URL and CORS settings

#### **Database Connection**
- **Problem**: Cannot connect to Supabase
- **Solution**: Verify environment variables and Supabase project URL

#### **Build Errors**
- **Problem**: Build fails during deployment
- **Solution**: Check `npm run build` locally first

#### **PDF Download Issues**
- **Problem**: PDF generation fails
- **Solution**: Ensure jsPDF library is properly installed

## 📊 Production Features

### **✅ What's Working in Production**
- Real-time user authentication
- Workflow generation with AI
- Database persistence
- Settings management
- Workflow insights
- PDF download functionality
- Responsive design
- Error handling

### **🔒 Security Considerations**
- Environment variables are properly secured
- Supabase Row Level Security enabled
- CORS properly configured
- XSS protection headers added

## 🎯 Success Metrics

### **Performance Targets**
- **Load Time**: < 3 seconds
- **Workflow Generation**: < 10 seconds
- **PDF Generation**: < 5 seconds
- **Database Queries**: < 500ms

### **User Experience**
- Smooth authentication flow
- Real-time data updates
- Professional PDF exports
- Responsive design on all devices

## 📞 Support

### **Deployment Issues**
- Check this guide first
- Review platform-specific documentation
- Test environment variables locally

### **Application Issues**
- Review browser console for errors
- Check Supabase logs
- Monitor network requests

---

**🎉 Your INNOFLOW-AI application is now ready for production deployment!**

Choose Vercel for the easiest deployment experience or Netlify for alternative hosting. Both platforms will provide excellent performance for your AI-powered workflow optimization platform.
