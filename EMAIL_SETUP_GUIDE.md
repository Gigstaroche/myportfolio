# 🚀 Modern Portfolio Email Setup Guide

## 📧 EmailJS Setup (Free - Recommended)

### Step 1: Create EmailJS Account
1. Go to https://emailjs.com
2. Sign up with your email
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your email provider
4. Follow the setup instructions
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact from {{from_name}} - Portfolio Website

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{from_email}}
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get User ID
1. Go to **Account** → **General**
2. **Copy your User ID** (e.g., `user_def456`)

### Step 5: Update Your Website
Open `/assets/js/script.js` and replace:

```javascript
// Replace these with your actual IDs:
emailjs.init('YOUR_USER_ID');           // Your User ID
'YOUR_SERVICE_ID',                      // Your Service ID  
'YOUR_TEMPLATE_ID',                     // Your Template ID
```

## 🛡️ Cloudflare Turnstile Setup (Free)

### Step 1: Get Turnstile Keys
1. Go to https://dash.cloudflare.com
2. Sign up/login to Cloudflare
3. Go to **Turnstile** section
4. Add a new site widget
5. Enter your domain (or `localhost` for testing)
6. **Copy the Site Key** (starts with `0x4AAA...`)

### Step 2: Update Your Website  
In `/index.html`, find and replace:
```html
data-sitekey="0x4AAAAAAABkMYinukE8nzYS"
```
With your actual site key.

## 🔧 Alternative Solutions

### Option 2: Web3Forms (Simpler)
1. Go to https://web3forms.com
2. Enter your email to get an access key
3. Replace the form action:
```html
<form action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
<!-- rest of your form -->
</form>
```

### Option 3: Netlify Forms (If deploying on Netlify)
Simply add `netlify` to your form tag:
```html
<form netlify>
<!-- your form fields -->
</form>
```

## 🚀 Deployment Checklist

### Before Deploying:
- [ ] EmailJS User ID updated
- [ ] Service ID updated  
- [ ] Template ID updated
- [ ] Turnstile site key updated
- [ ] Test the form locally
- [ ] Update Turnstile domain after deployment

### After Deploying:
- [ ] Update Turnstile site with real domain
- [ ] Test form on live site
- [ ] Check spam folder for test emails

## 🔍 Testing Locally

1. Replace Turnstile key with test key: `1x00000000000000000000AA`
2. Test form submission
3. Check your email for messages
4. Verify error handling works

## 💡 Pro Tips

1. **Email Template Variables Available:**
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email

2. **Turnstile Themes:**
   - `data-theme="light"` - Light theme
   - `data-theme="dark"` - Dark theme
   - `data-theme="auto"` - Matches your site theme

3. **EmailJS Rate Limits (Free Plan):**
   - 200 emails/month
   - 1000 emails/month with account verification

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify all IDs are correct
- Test with simple alert in JavaScript

**Not receiving emails?**
- Check spam/junk folder
- Verify EmailJS service connection
- Test template in EmailJS dashboard

**Turnstile not loading?**
- Check internet connection
- Verify site key is correct
- Try with test key first