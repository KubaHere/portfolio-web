# EmailJS Setup - Step by Step

## 1. Registrace a nastavení EmailJS účtu

1. **Jdi na [EmailJS.com](https://www.emailjs.com/)**
2. **Klikni na "Sign Up" a zaregistruj se**
3. **Potvrď email a přihlaš se**
4. **Vytvoř nový projekt:**
   - Klikni "Create New Project"
   - Název: "Portfolio Contact Form"
   - Popis: "Kontaktní formulář pro portfolio web"

## 2. Nastavení Email Service Provider

1. **V EmailJS dashboardu jdi na "Email Services"**
2. **Klikni "Add New Service"**
3. **Vyber Gmail (nebo jiný poskytovatel):**
   - Klikni na Gmail ikonu
   - Přihlaš se ke svému Gmail účtu
   - Povol přístup k EmailJS
4. **Zkopíruj si `Service ID`** (např. `service_abc123`)

## 3. Vytvoření Email Template

1. **Jdi na "Email Templates" v dashboardu**
2. **Klikni "Create New Template"**
3. **Nastav template:**

### Template Settings:
- **Template Name:** `Portfolio Contact Form`
- **Template ID:** `template_xyz789` (automaticky vygenerováno)
- **Subject:** `Nová zpráva z portfolia od {{from_name}}`

### Template Content:
```html
Nová zpráva z kontaktního formuláře:

Jméno: {{from_name}}
Email: {{from_email}}

Zpráva:
{{message}}

---
Odesláno z portfolio webu
```

4. **Ulož template**

## 4. Získání User ID

1. **Jdi na "Account" v dashboardu**
2. **Zkopíruj si `User ID`** (např. `user_abc123def456`)

## 5. Aktualizace konfigurace

1. **Otevři soubor `src/config/emailjs.js`**
2. **Nahraď placeholder hodnoty:**

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',        // z Email Services
  TEMPLATE_ID: 'template_xyz789',      // z Email Templates  
  USER_ID: 'user_abc123def456',        // z Account
  TO_EMAIL: 'jakub.zak.business@gmail.com'
};
```

## 6. Testování

1. **Spusť aplikaci:** `npm run dev`
2. **Jdi na kontaktní sekci**
3. **Vyplň formulář a odešli**
4. **Zkontroluj svůj email**

## 7. Troubleshooting

### Časté problémy:

**"Invalid service ID"**
- Zkontroluj, že máš správný Service ID z Email Services

**"Invalid template ID"** 
- Zkontroluj, že máš správný Template ID z Email Templates

**"Invalid user ID"**
- Zkontroluj, že máš správný User ID z Account sekce

**"Email se neposílá"**
- Zkontroluj, že je Gmail service aktivní v EmailJS dashboardu
- Zkontroluj, že máš povolené odesílání emailů v Gmail nastavení

### Debug:
- Otevři Developer Tools (F12)
- Jdi na Console tab
- Zkus odeslat formulář
- Podívej se na chybové zprávy

## 8. Bezpečnost

⚠️ **DŮLEŽITÉ:** 
- Nikdy necommitni skutečné klíče do Git repozitáře
- Použij environment variables pro produkci
- Vytvoř `.env.local` soubor:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_USER_ID=user_abc123def456
```

A pak v `emailjs.js`:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  USER_ID: import.meta.env.VITE_EMAILJS_USER_ID,
  TO_EMAIL: 'jakub.zak.business@gmail.com'
};
```
