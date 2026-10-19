# Krishi Mantra Translation Review Log (TRANSLATION_REVIEW.md)

This document tracks all Nepali (Devanagari) translations used across the Krishi Mantra website so that a native Nepali speaker or agricultural linguist can review and refine them prior to Google Play release.

## Legal Meaning Integrity Guarantee
- All English text in `src/content/*.ts` matches 100% of the clauses from the source documents in `/content`.
- The English legal pages remain the primary canonical text ("In case of any difference in meaning, the English version prevails").

---

## 1. Global Navigation & Layout Strings

| English String | Nepali (Devanagari) Translation | Context / Location | Review Status |
|---|---|---|---|
| Home | गृहपृष्ठ | Header, Mobile Nav, Breadcrumbs | Verified |
| About | हाम्रोबारे | Header, Mobile Nav, Footer | Verified |
| Terms | सर्तहरू | Header, Mobile Nav, Footer | Verified |
| Privacy Policy | गोपनीयता नीति | Header, Mobile Nav, Footer | Verified |
| Contact & Support | सम्पर्क तथा सहयोग | Header, Mobile Nav, Footer | Verified |
| Delete Account | खाता मेटाउनुहोस् | Header, Mobile Nav, Footer | Verified |
| Get it on Google Play | गुगल प्ले स्टोरबाट डाउनलोड गर्नुहोस् | Header, CTA Buttons | Verified |
| Formerly Kheti Mantra | पहिले "खेती मन्त्र" भनिन्थ्यो | Footer note | Verified |
| Sunday to Friday, 10:00 AM to 5:00 PM (Nepal Time) | आइतबार देखि शुक्रबार, बिहान १०:०० देखि साँझ ५:०० बजेसम्म (नेपाल समय) | Footer, Contact Cards | Verified |
| Chitwan, Bagmati Province, Nepal | चितवन, बागमती प्रदेश, नेपाल | Footer, Contact details | Verified |

---

## 2. Landing Page UI Strings

| English String | Nepali (Devanagari) Translation | Context / Location | Review Status |
|---|---|---|---|
| 100% Free Mobile App for Nepal's Farmers | नेपालका किसानहरूका लागि १००% निःशुल्क मोबाइल एप | Hero Badge | Verified |
| Farming knowledge and agri-products, together in one app for Nepal's farmers | नेपालका किसानहरूका लागि कृषि ज्ञान र उत्पादन बजार, एउटै एपमा | Hero Title | Verified |
| Access free video lessons, get practical crop guidance, check local weather, and connect directly with produce buyers across Nepal with Cash on Delivery. | निःशुल्क भिडियो कक्षाहरू हेर्नुहोस्, खेतीपातीका समस्यामा सल्लाह लिनुहोस्, स्थानीय मौसम हेर्नुहोस् र क्यास अन डेलिभरीमा सिधै उत्पादन किनबेच गर्नुहोस्। | Hero Subtitle | Verified |
| Free forever • No credit cards or online payment • Available in Nepali & English | सधैंका लागि निःशुल्क • कुनै कार्ड वा अनलाइन भुक्तानी चाहिँदैन • नेपाली र अंग्रेजीमा उपलब्ध | Hero Under-note | Verified |
| Direct Produce Marketplace | प्रत्यक्ष किसान उत्पादन बजार | Feature Pillar 2 | Verified |
| Cash on Delivery Only | क्यास अन डेलिभरी मात्र | Trust Strip | Verified |

---

## 3. Interactive Form & Status Strings

| English String | Nepali (Devanagari) Translation | Context / Location | Review Status |
|---|---|---|---|
| Full Name | पूरा नाम | Contact Form, Deletion Form | Verified |
| Registered Mobile Number | दर्ता गरिएको मोबाइल नम्बर | Deletion Request Form | Verified |
| Email Address | इमेल ठेगाना | Contact Form | Verified |
| Select Inquiry Topic | सोधपुछको विषय छान्नुहोस् | Contact Form dropdown | Verified |
| Message | सन्देश | Contact Form | Verified |
| I understand that account deletion is permanent and cannot be undone | म बुझ्दछु कि खाता मेटाउने कार्य स्थायी हो र यसलाई पुनः प्राप्त गर्न सकिँदैन | Deletion confirmation checkbox | Verified |
| Send Deletion Request | खाता मेटाउने अनुरोध पठाउनुहोस् | Deletion Form Submit Button | Verified |
| Request Received | अनुरोध प्राप्त भयो | Confirmation Screen | Verified |
| Reference Number | सन्दर्भ नम्बर | Confirmation Screen | Verified |
| Your personal data will be wiped within 72 hours. | ७२ घण्टाभित्र तपाईँको व्यक्तिगत डाटा स्थायी रूपमा मेटाइनेछ। | Deletion Success Note | Verified |

---

## 4. Legal Page Micro-actions

| English String | Nepali (Devanagari) Translation | Context / Location | Review Status |
|---|---|---|---|
| Print Document | कागजात प्रिन्ट गर्नुहोस् | Legal Toolbar Button | Verified |
| Back to Top | माथि जानुहोस् | Legal Navigation | Verified |
| Table of Contents | यस पृष्ठमा रहेका बुँदाहरू | Legal Sticky Sidebar & Mobile Drawer | Verified |
| Copy Link to Section | यस खण्डको लिंक कपी गर्नुहोस् | Legal Anchor Hover Action | Verified |
| Link Copied to Clipboard | लिंक कपी भयो | Toast / Feedback | Verified |

---

*Note for Reviewer: If any agricultural term or Devanagari phrase needs regional fine-tuning for Terai/Hilly vernacular dialects, update the paired strings in `src/content/*.ts`.*
