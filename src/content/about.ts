export interface LegalSection {
  id: string;
  number?: string;
  title: string;
  titleNe?: string;
  subsections?: {
    id: string;
    title: string;
    titleNe?: string;
    content: string;
    contentNe?: string;
  }[];
  content?: string[];
  contentNe?: string[];
  bullets?: string[];
  bulletsNe?: string[];
  table?: {
    headers: string[];
    headersNe?: string[];
    rows: string[][];
    rowsNe?: string[][];
  };
}

export const aboutContent = {
  appName: "Krishi Mantra",
  tagline: "Free farming knowledge, support and a produce marketplace for Nepal",
  taglineNe: "नेपालका किसानहरूका लागि निःशुल्क कृषि ज्ञान, सल्लाह र उत्पादन बजार",
  slogan: "Empowering the hands that feed Nepal.",
  sloganNe: "नेपाललाई अन्न खुवाउने हातहरूलाई सशक्त बनाउँदै।",
  summaryTable: [
    { label: "Application", value: "Krishi Mantra (Android mobile application for farmers in Nepal)" },
    { label: "Operated by", value: "Krishi Mantra, Chitwan, Nepal" },
    { label: "Effective date", value: "October 19, 2026" },
    { label: "Support email", value: "support@krishimantra.app" },
    { label: "Support phone", value: "+977-9865020935" },
    { label: "Languages", value: "The app is available in Nepali and English" },
  ],
  sections: [
    {
      id: "who-we-are",
      number: "1",
      title: "Who We Are",
      titleNe: "१. हामी को हौं",
      content: [
        "Krishi Mantra is a free mobile app for farmers in Nepal, built in Chitwan, Nepal. Many farmers still struggle to get timely farming knowledge, advice on crop and animal problems, weather information and a fair way to sell their produce. We created Krishi Mantra to bring these together in one simple app, in the languages farmers use: Nepali and English.",
        "We are a small team that believes practical farming knowledge should be easy to reach and free to use.",
      ],
      contentNe: [
        "कृषि मन्त्र नेपालका किसानहरूका लागि चितवन, नेपालमा निर्माण गरिएको एक निःशुल्क मोबाइल एप हो। धेरै किसानहरू अझै पनि समयमै कृषि ज्ञान, बाली तथा पशु सम्बन्धी समस्यामा सल्लाह, मौसम जानकारी र आफ्नो उत्पादन उचित मूल्यमा बेच्ने उपाय पाउन संघर्ष गरिरहेका छन्। हामीले यी सबैलाई किसानहरूले प्रयोग गर्ने भाषाहरू (नेपाली र अंग्रेजी) मा एउटै सरल एपमा उपलब्ध गराउन कृषि मन्त्र सिर्जना गरेका हौं।",
        "हामी व्यावहारिक कृषि ज्ञान सबैको पहुँचमा र निःशुल्क हुनुपर्छ भन्ने विश्वास राख्ने एउटा समर्पित टिम हौं।",
      ],
    },
    {
      id: "our-mission",
      number: "2",
      title: "Our Mission",
      titleNe: "२. हाम्रो उद्देश्य",
      content: [
        "To make practical agricultural knowledge and support easier to reach for farmers across Nepal, regardless of location, literacy or income, through:",
      ],
      contentNe: [
        "नेपालभरका किसानहरूका लागि, स्थान, साक्षरता वा आम्दानीको पर्वाह नगरी, व्यावहारिक कृषि ज्ञान र सहयोगलाई निम्न माध्यमबाट सहज बनाउने:",
      ],
      bullets: [
        "Free farming education that stays free",
        "Free guidance from our team on farming problems",
        "Useful local weather information and farming tips",
        "A simple way for farmers to offer their produce directly to buyers",
      ],
      bulletsNe: [
        "सधैं निःशुल्क रहने कृषि शिक्षा",
        "खेतीपातीका समस्याहरूमा हाम्रो टिमबाट निःशुल्क मार्गदर्शन",
        "उपयोगी स्थानीय मौसम जानकारी र दैनिक कृषि सुझावहरू",
        "किसानहरूलाई आफ्ना उत्पादनहरू सिधै खरिदकर्ताहरूलाई बिक्री गर्ने सरल माध्यम",
      ],
    },
    {
      id: "our-vision",
      number: "3",
      title: "Our Vision",
      titleNe: "३. हाम्रो दृष्टिकोण",
      content: [
        "A self-reliant Nepali farming community where every farmer can find the knowledge they need, every crop gets the care it deserves, and every harvest has a way to reach a buyer.",
      ],
      contentNe: [
        "एक आत्मनिर्भर नेपाली किसान समुदाय जहाँ हरेक किसानले आफूलाई आवश्यक ज्ञान पाउन सकून्, हरेक बालीले उचित हेरचाह पाओस्, र हरेक उत्पादनले बजार तथा खरिदकर्तासम्म पुग्ने बाटो पाओस्।",
      ],
    },
    {
      id: "what-you-can-do",
      number: "4",
      title: "What You Can Do in Krishi Mantra",
      titleNe: "४. कृषि मन्त्रमा तपाईँले के गर्न सक्नुहुन्छ",
      subsections: [
        {
          id: "learn",
          title: "Learn – free farming education",
          titleNe: "सिक्नुहोस् – निःशुल्क कृषि शिक्षा",
          content:
            "Watch video courses, read simple guides and listen to audio lessons on crop cultivation, livestock care, organic farming, pest management and seasonal practices. All learning content is free for life. We will never charge for knowledge.",
          contentNe:
            "बाली खेती, पशुपालन, प्राङ्गारिक खेती, कीरा तथा रोग व्यवस्थापन र मौसमी अभ्यासहरू सम्बन्धी भिडियो कक्षाहरू हेर्नुहोस्, सरल लेखहरू पढ्नुहोस् र अडियो पाठहरू सुन्नुहोस्। सबै सिकाइ सामग्री जीवनभर निःशुल्क छ। ज्ञानका लागि हामी कहिल्यै शुल्क लिने छैनौं।",
        },
        {
          id: "ask-problem",
          title: "Ask your problem",
          titleNe: "आफ्नो समस्या सोध्नुहोस्",
          content:
            "Send a photo, a typed message or a voice note about a problem with your crop or animals. Our team reviews it and replies through the app.",
          contentNe:
            "आफ्नो बाली वा पशुमा देखिएका समस्याहरूको फोटो, लेखेर सन्देश वा आवाज (भ्वाइस नोट) पठाउनुहोस्। हाम्रो टिमले त्यसलाई जाँचेर एपमार्फत नै जवाफ दिन्छ।",
        },
        {
          id: "consultation",
          title: "Free farmer consultation",
          titleNe: "निःशुल्क किसान परामर्श",
          content:
            "Get free guidance on soil and water quality, animal care, and agriculture and farming in general.",
          contentNe:
            "माटो र पानीको गुणस्तर, पशु हेरचाह, र सामान्य कृषि तथा खेतीपाती सम्बन्धी निःशुल्क मार्गदर्शन प्राप्त गर्नुहोस्।",
        },
        {
          id: "weather-tips",
          title: "Weather and farming tips",
          titleNe: "मौसम र कृषि सुझावहरू",
          content:
            "See local weather and receive daily farming tips and alerts, so you can plan your work. Location is used only if you allow it.",
          contentNe:
            "स्थानीय मौसम हेर्नुहोस् र दैनिक कृषि सुझाव तथा चेतावनीहरू प्राप्त गर्नुहोस्, जसले गर्दा तपाईँ आफ्नो कामको योजना बनाउन सक्नुहुन्छ। स्थान (Location) तपाईँले अनुमति दिएमा मात्र प्रयोग गरिन्छ।",
        },
        {
          id: "marketplace",
          title: "Marketplace",
          titleNe: "उत्पादन बजार (Marketplace)",
          content:
            "Farmers can list their produce with photos, a description and a price. Buyers can browse and place orders directly with sellers. All orders are paid by Cash on Delivery. The app does not handle any online payments, and Krishi Mantra does not collect payment or bank details.",
          contentNe:
            "किसानहरूले फोटो, विवरण र मूल्य राखेर आफ्ना उत्पादनहरू सूचीकृत गर्न सक्छन्। खरिदकर्ताहरूले हेरेर सिधै बिक्रेतालाई अर्डर गर्न सक्छन्। सबै अर्डरहरू Cash on Delivery (सामान पाएपछि नगद भुक्तानी) मार्फत भुक्तान गरिन्छ। एपले कुनै पनि अनलाइन भुक्तानी लिँदैन र कृषि मन्त्रले बैंक वा भुक्तानी विवरणहरू संकलन गर्दैन।",
        },
      ],
    },
    {
      id: "what-makes-us-different",
      number: "5",
      title: "What Makes Us Different",
      titleNe: "५. हामीलाई के कुराले फरक बनाउँछ",
      table: {
        headers: ["Our commitment", "What it means for you"],
        headersNe: ["हाम्रो प्रतिबद्धता", "तपाईँका लागि यसको अर्थ"],
        rows: [
          ["Free for life", "No subscriptions, no premium plans, no charges for learning content or consultation"],
          ["No payment details", "We never ask for card, bank or wallet information. Orders are Cash on Delivery only"],
          ["Your data stays yours", "We do not sell your information or share it with advertisers or third-party providers. We store it securely, and you can delete your account and data at any time"],
          ["Built for every farmer", "Available in Nepali and English, with photo and voice support, and designed to be simple and light on budget phones"],
          ["Simple sign-up", "Create an account with your mobile number, name and password. Nothing more"],
        ],
        rowsNe: [
          ["सधैंका लागि निःशुल्क", "कुनै सदस्यता शुल्क छैन, कुनै प्रिमियम योजना छैन, सिकाइ सामग्री वा सल्लाहका लागि कुनै शुल्क छैन"],
          ["भुक्तानी विवरण चाहिँदैन", "हामी कहिल्यै कार्ड, बैंक वा वालेट विवरण माग्दैनौं। अर्डरहरू केवल क्यास अन डेलिभरीमा मात्र हुन्छन्"],
          ["तपाईँको डाटा तपाईँकै", "हामी तपाईँको जानकारी बेच्दैनौं र विज्ञापनदाताहरूसँग बाँड्दैनौं। हामी यसलाई सुरक्षित राख्छौं, र तपाईँ जुनसुकै बेला आफ्नो खाता र डाटा मेटाउन सक्नुहुन्छ"],
          ["हरेक किसानका लागि निर्मित", "नेपाली र अंग्रेजी दुवैमा उपलब्ध, फोटो र आवाज समर्थन, र सामान्य स्मार्टफोनहरूमा पनि छिटो चल्ने"],
          ["सरल दर्ता प्रक्रिया", "आफ्नो मोबाइल नम्बर, नाम र पासवर्ड राखेर खाता खोल्नुहोस्। त्यो भन्दा बढी केही आवश्यक छैन"],
        ],
      },
    },
    {
      id: "designed-for-everyone",
      number: "6",
      title: "Designed for Everyone",
      titleNe: "६. सबैका लागि उपयुक्त बनाइएको",
      bullets: [
        "Available in Nepali and English, switchable inside the app",
        "Voice and photo options for people who prefer not to type",
        "Lightweight design for budget smartphones and slower connections",
        "Clear steps and simple screens, whatever your age or experience with apps",
      ],
      bulletsNe: [
        "नेपाली र अंग्रेजी दुवै भाषामा उपलब्ध, एप भित्रै परिवर्तन गर्न सकिने",
        "टाइप गर्न नचाहनेहरूका लागि आवाज (भ्वाइस) र फोटोको सुविधा",
        "सामान्य बजेट फोन र सुस्त इन्टरनेटमा पनि सजिलै चल्ने हल्का डिजाइन",
        "एप चलाउने अनुभव नभएकाहरूका लागि पनि बुझ्न सजिलो सफा स्क्रिन र चरणहरू",
      ],
    },
    {
      id: "safety-privacy-trust",
      number: "7",
      title: "Safety, Privacy and Trust",
      titleNe: "७. सुरक्षा, गोपनीयता र विश्वास",
      bullets: [
        "We collect only the information the app needs to work.",
        "We never sell your data, and we never use it for advertising.",
        "Passwords are stored in protected form. Our team will never ask for your password.",
        "You can delete your account from Settings → Delete Account, or by writing to us. Your personal data is then deleted within 72 hours.",
        "Marketplace users can report unsafe or misleading listings and abusive behaviour, and our team reviews reports.",
        "Please read our Terms and Conditions, Privacy Policy and Delete Account Policy for full details.",
      ],
      bulletsNe: [
        "हामी एप सञ्चालन गर्न आवश्यक न्यूनतम जानकारी मात्र संकलन गर्दछौं।",
        "हामी तपाईँको डाटा कहिल्यै बेच्दैनौं, र विज्ञापनका लागि कहिल्यै प्रयोग गर्दैनौं।",
        "पासवर्डहरू सुरक्षित इन्क्रिप्टेड रूपमा राखिन्छ। हाम्रो टिमले कहिल्यै तपाईँको पासवर्ड माग्ने छैन।",
        "तपाईँले Settings → Delete Account बाट वा हामीलाई इमेल गरेर आफ्नो खाता मेटाउन सक्नुहुन्छ। त्यसपछि ७२ घण्टाभित्र व्यक्तिगत डाटा मेटाइन्छ।",
        "बजारका प्रयोगकर्ताहरूले असुरक्षित वा भ्रामक सूची र दुर्व्यवहार रिपोर्ट गर्न सक्छन्, र हाम्रो टिमले त्यसलाई तुरुन्त समीक्षा गर्दछ।",
        "विस्तृत जानकारीका लागि कृपया हाम्रा सर्तहरू, गोपनीयता नीति र खाता मेटाउने नीति पढ्नुहोस्।",
      ],
    },
    {
      id: "note-on-advice",
      number: "8",
      title: "A Note on Advice",
      titleNe: "८. सल्लाह सम्बन्धी महत्त्वपूर्ण जानकारी",
      content: [
        "Guidance in the app is general information to support your own judgement. It is not a substitute for a qualified local veterinarian, agronomist, laboratory or government agricultural officer, especially for serious animal illness or the use of chemicals. In an emergency, contact a local professional or emergency service immediately.",
      ],
      contentNe: [
        "एपमा दिइएको मार्गदर्शन तपाईँको आफ्नै निर्णयलाई सहयोग पुर्‍याउने सामान्य जानकारी मात्र हो। यो विशेष गरी गम्भीर पशु रोग वा रासायनिक विषादीको प्रयोगका लागि स्थानीय पशु चिकित्सक, कृषि प्राविधिक, प्रयोगशाला वा सरकारी कृषि अधिकृतको विकल्प होइन। आपतकालीन अवस्थामा तुरुन्त स्थानीय विशेषज्ञ वा सेवा केन्द्रमा सम्पर्क गर्नुहोस्।",
      ],
    },
    {
      id: "message-from-team",
      number: "9",
      title: "A Message from Our Team",
      titleNe: "९. हाम्रो टिमको सन्देश",
      content: [
        "To every farmer using Krishi Mantra: thank you. You work before sunrise, care for the land and feed our communities. This app is our small effort to make your work easier by sharing knowledge and giving you a simple way to ask for help and reach buyers. We are honoured to be part of your journey.",
        "The Krishi Mantra Team",
      ],
      contentNe: [
        "कृषि मन्त्र प्रयोग गर्नुहुने हरेक किसान दाजुभाइ तथा दिदीबहिनीहरूलाई: हार्दिक धन्यवाद। तपाईँहरू सूर्योदय हुनुअघि नै काममा लाग्नुहुन्छ, माटोको माया गर्नुहुन्छ र सम्पूर्ण देशलाई अन्न खुवाउनुहुन्छ। ज्ञान बाँडेर, मद्दत माग्ने सरल माध्यम दिएर र खरिदकर्तासम्म पुर्‍याएर तपाईँको कामलाई थोरै भए पनि सहज बनाउनु हाम्रो सानो प्रयास हो। तपाईँको यात्राको हिस्सा हुन पाउँदा हामी गौरवान्वित छौं।",
        "कृषि मन्त्र टिम",
      ],
    },
    {
      id: "contact-us",
      number: "10",
      title: "Contact Us",
      titleNe: "१०. सम्पर्क गर्नुहोस्",
      table: {
        headers: ["Channel", "Detail"],
        headersNe: ["माध्यम", "विवरण"],
        rows: [
          ["Email", "support@krishimantra.app"],
          ["Phone", "+977-9865020935"],
          ["Location", "Chitwan, Nepal"],
          ["Languages", "Nepali and English"],
        ],
        rowsNe: [
          ["इमेल", "support@krishimantra.app"],
          ["फोन", "+977-9865020935"],
          ["ठेगाना", "चितवन, नेपाल"],
          ["भाषाहरू", "नेपाली र अंग्रेजी"],
        ],
      },
    },
  ],
};
