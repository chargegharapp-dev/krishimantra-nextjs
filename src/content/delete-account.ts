export const deleteAccountContent = {
  title: "Delete Account Policy",
  titleNe: "खाता मेटाउने नीति",
  subtitle: "How to delete your Krishi Mantra account and data",
  subtitleNe: "आफ्नो कृषि मन्त्र खाता र व्यक्तिगत विवरण कसरी मेटाउने",
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
      id: "your-right-to-delete",
      number: "1",
      title: "Your Right to Delete",
      titleNe: "१. मेटाउन पाउने तपाईँको अधिकार",
      content: [
        "You can delete your Krishi Mantra account and the personal information linked to it whenever you want. It is free, you do not have to give a reason, and no one will charge you or try to stop you.",
        "This page is the public account-deletion page for the Krishi Mantra app. You can use it even if you no longer have the app installed.",
      ],
      contentNe: [
        "तपाईँले चाहेको जुनसुकै बेला आफ्नो कृषि मन्त्र खाता र यससँग जोडिएका व्यक्तिगत जानकारीहरू मेटाउन सक्नुहुन्छ। यो पूर्णतया निःशुल्क छ, तपाईँले कुनै कारण खुलाउनु पर्दैन, र कसैले पनि कुनै शुल्क लिने वा रोक्ने प्रयास गर्ने छैन।",
        "यो पृष्ठ कृषि मन्त्र एपको सार्वजनिक खाता मेटाउने (Account Deletion) पृष्ठ हो। यदि तपाईँको फोनमा अब एप इन्स्टल छैन भने पनि तपाईँ यहाँबाट अनुरोध गर्न सक्नुहुन्छ।",
      ],
    },
    {
      id: "how-to-delete",
      number: "2",
      title: "How to Delete Your Account",
      titleNe: "२. आफ्नो खाता कसरी मेटाउने",
      subsections: [
        {
          id: "option-a-in-app",
          title: "Option A – Delete inside the App (fastest)",
          titleNe: "विकल्प क – एप भित्रबाट मेटाउने (सबैभन्दा छिटो)",
          content:
            "Open the Krishi Mantra app and log in with your mobile number and password. Go to Settings. Tap Delete Account. Read the message and confirm the deletion. Your account is closed, you are logged out, and the deletion process starts straight away.",
          contentNe:
            "कृषि मन्त्र एप खोल्नुहोस् र आफ्नो मोबाइल नम्बर र पासवर्डबाट लगइन गर्नुहोस्। Settings मा जानुहोस्। 'Delete Account' मा थिच्नुहोस्। दिइएको जानकारी पढेर मेटाउने कुरा पुष्टि (Confirm) गर्नुहोस्। तपाईँको खाता बन्द हुन्छ, सबै डिभाइसबाट लगआउट हुन्छ र डाटा मेटाउने प्रक्रिया तुरुन्त सुरु हुन्छ।",
        },
        {
          id: "option-b-request",
          title: "Option B – Request deletion by email, phone, or web form (no app needed)",
          titleNe: "विकल्प ख – इमेल, फोन वा वेब फारममार्फत अनुरोध गर्ने (एप नचाहिने)",
          content:
            "If you have lost your phone, uninstalled the app or cannot log in, contact us via email at support@krishimantra.app (subject: “Delete my account”), call +977-9865020935, or use the interactive request form on this page below. Please include your name and registered mobile number. We will check that the request really comes from the account owner, for example by contacting the registered mobile number. We will never ask for your password or any payment details. We will confirm by reply once deletion is complete.",
          contentNe:
            "यदि तपाईँको फोन हराएको छ, एप हटाइसक्नुभएको छ वा लगइन गर्न सक्नुहुन्न भने, support@krishimantra.app मा 'Delete my account' लेखेर इमेल पठाउनुहोस्, +977-9865020935 मा फोन गर्नुहोस् वा तल दिइएको अनलाइन फारम भर्नुहोस्। कृपया आफ्नो नाम र दर्ता भएको मोबाइल नम्बर खुलाउनुहोस्। हामी दर्ता भएको नम्बरमा सम्पर्क गरेर अनुरोध वास्तविक हो भनी पुष्टि गर्नेछौं। हामी कहिल्यै तपाईँको पासवर्ड वा भुक्तानी विवरण माग्ने छैनौं। डाटा मेटिएपछि जानकारी पठाइनेछ।",
        },
      ],
    },
    {
      id: "what-we-delete",
      number: "3",
      title: "What We Delete",
      titleNe: "३. हामी के-के मेटाउँछौं",
      content: [
        "When your account is deleted, we permanently delete the following from our systems within 72 hours:",
      ],
      contentNe: [
        "तपाईँको खाता मेटाइँदा, हामी हाम्रा प्रणालीहरूबाट ७२ घण्टाभित्र निम्न विवरणहरू स्थायी रूपमा मेटाउँछौं:",
      ],
      table: {
        headers: ["Data", "Deleted?"],
        headersNe: ["विवरण (Data)", "मेटाइन्छ?"],
        rows: [
          ["Name and mobile number", "Yes (within 72 hours)"],
          ["Password", "Yes (immediately rendered inaccessible & deleted)"],
          ["Profile details and settings", "Yes"],
          ["Delivery addresses and contact numbers", "Yes"],
          ["Location data", "Yes"],
          ["Photos, voice recordings and text from problem submissions and consultations", "Yes"],
          ["Product listings and photos (sellers)", "Yes"],
          ["Order history and messages", "Yes"],
          ["Support conversations", "Yes"],
          ["Notification tokens and device information linked to your account", "Yes"],
        ],
        rowsNe: [
          ["नाम र मोबाइल नम्बर", "हो (७२ घण्टाभित्र)"],
          ["पासवर्ड", "हो (तुरुन्तै हटाइन्छ)"],
          ["प्रोफाइल विवरण र सेटिङहरू", "हो"],
          ["डेलिभरी ठेगाना र सम्पर्क नम्बरहरू", "हो"],
          ["स्थान (Location) सम्बन्धी डाटा", "हो"],
          ["समस्या र सल्लाहका फोटो, भ्वाइस रेकर्डिङ र सन्देशहरू", "हो"],
          ["बिक्रेताका उत्पादन सूची र तस्बिरहरू", "हो"],
          ["अर्डर इतिहास र सन्देशहरू", "हो"],
          ["सहयोग टिमसँग भएका कुराकानीहरू", "हो"],
          ["नोटिफिकेसन टोकन र डिभाइस विवरणहरू", "हो"],
        ],
      },
      bullets: [
        "Deleted data is also removed from routine backups on the normal backup cycle, within 30 days.",
      ],
      bulletsNe: [
        "मेटाइएको डाटा नियमित ब्याकअप चक्र अनुसार ३० दिनभित्र हाम्रा सबै ब्याकअपहरूबाट समेत पूर्ण रूपमा हटाइन्छ।",
      ],
    },
    {
      id: "before-you-delete",
      number: "4",
      title: "Before You Delete",
      titleNe: "४. खाता मेटाउनु अघि",
      bullets: [
        "Pending orders: complete or cancel any open orders first. Sellers should fulfil or cancel open orders and remove listings. If you need help, contact support.",
        "Keep what you need: deletion is permanent. Save any information you want to keep, such as order details or advice we sent you.",
        "Your learning is free: you can create a new account later and use all courses again at no cost.",
      ],
      bulletsNe: [
        "बाँकी रहेका अर्डरहरू: पहिले सबै चालु अर्डरहरू पूरा गर्नुहोस् वा रद्द गर्नुहोस्। बिक्रेताहरूले बाँकी अर्डर सम्हालेर उत्पादन सूची हटाउनुपर्छ।",
        "चाहिने जानकारी सुरक्षित राख्नुहोस्: मेटाउने कार्य स्थायी हुन्छ। पछि चाहिने अर्डर वा सल्लाहका विवरणहरू पहिले नै सुरक्षित गर्नुहोस्।",
        "कृषि सिकाइ सधैं निःशुल्क छ: पछि जुनसुकै बेला नयाँ खाता खोलेर सबै कक्षाहरू पुनः निःशुल्क लिन सक्नुहुन्छ।",
      ],
    },
    {
      id: "what-we-may-keep",
      number: "5",
      title: "What We May Keep, and for How Long",
      titleNe: "५. हामी के राख्न सक्छौं र कति समयसम्म",
      content: [
        "We do not keep your personal information after deletion, except in these limited cases:",
      ],
      contentNe: [
        "खाता मेटिएपछि हामी तपाईँको व्यक्तिगत जानकारी राख्दैनौं, केवल यी सीमित अपवादहरू बाहेक:",
      ],
      bullets: [
        "Legal requirement: if the law of Nepal requires us to keep a limited record, we keep only the minimum required, remove your personal identifiers where possible, and delete it when the requirement ends.",
        "Information already received by another user: a Seller or Buyer who received your name, number or address to complete an order may still hold it. This is outside our systems, so we cannot delete their copy, but our Terms require them to use it only for that order.",
        "We do not keep your data for advertising, and we never sell it.",
      ],
      bulletsNe: [
        "कानूनी आवश्यकता: यदि नेपालको कानूनले कुनै सीमित अभिलेख राख्न आवश्यक ठानेमा, हामी व्यक्तिगत पहिचान हटाएर न्यूनतम आवश्यक अभिलेख मात्र राख्छौं र कानूनी अवधि समाप्त भएपछि मेटाउँछौं।",
        "अर्को प्रयोगकर्ताले पहिल्यै प्राप्त गरेको जानकारी: अर्डर पूरा गर्नका लागि कुनै खरिदकर्ता वा बिक्रेताले पाएको ठेगाना वा फोन नम्बर उनीहरूसँग रहन सक्छ। यो हाम्रो प्रणाली बाहिर हुने भएकाले हामी मेटाउन सक्दैनौं, तर हाम्रा सर्तहरूले त्यसलाई केवल सोही अर्डरका लागि मात्र प्रयोग गर्न बाँधेको छ।",
        "हामी विज्ञापनका लागि तपाईँको डाटा राख्दैनौं र कहिल्यै बेच्दैनौं।",
      ],
    },
    {
      id: "delete-only-some-data",
      number: "6",
      title: "Delete Only Some of Your Data",
      titleNe: "६. केही डाटा मात्र मेटाउने विकल्प",
      content: [
        "If you want certain data removed without closing your account (for example photos, voice recordings, problem submissions or location data), email support@krishimantra.app and tell us what to remove. We will delete it and confirm.",
      ],
      contentNe: [
        "यदि तपाईँ आफ्नो खाता बन्द नगरी केही विशेष डाटा मात्र हटाउन चाहनुहुन्छ भने (जस्तै पठाइएका पुराना फोटो, आवाज सन्देश वा स्थान विवरण), support@krishimantra.app मा इमेल गर्नुहोस्। हामी ती विवरणहरू हटाएर जानकारी दिनेछौं।",
      ],
    },
    {
      id: "after-deletion",
      number: "7",
      title: "After Deletion",
      titleNe: "७. खाता मेटिएपछि",
      bullets: [
        "You cannot log in with the deleted account and it cannot be restored.",
        "You can register again at any time as a new user. Your old data will not be linked to the new account.",
        "We may send a final confirmation, but we will not send you promotional messages.",
      ],
      bulletsNe: [
        "तपाईँ मेटाइएको खाताबाट पुनः लगइन गर्न सक्नुहुन्न र यसलाई पुनःस्थापित गर्न सकिँदैन।",
        "तपाईँ जुनसुकै बेला नयाँ प्रयोगकर्ताको रूपमा पुनः दर्ता हुन सक्नुहुन्छ। पुरानो डाटा नयाँ खातासँग जोडिँदैन।",
        "हामी खाता मेटिएको अन्तिम पुष्टि सन्देश पठाउन सक्छौं, तर त्यसपछि कुनै पनि प्रचार सन्देशहरू पठाउने छैनौं।",
      ],
    },
    {
      id: "faq",
      number: "8",
      title: "Frequently Asked Questions",
      titleNe: "८. बारम्बार सोधिने प्रश्नहरू",
      subsections: [
        {
          id: "cost",
          title: "Does it cost anything?",
          titleNe: "के खाता मेटाउन कुनै शुल्क लाग्छ?",
          content: "No. Account deletion is completely free.",
          contentNe: "लाग्दैन। खाता मेटाउने सुविधा पूर्ण रूपमा निःशुल्क छ।",
        },
        {
          id: "timeline",
          title: "How long does it take?",
          titleNe: "कति समय लाग्छ?",
          content:
            "Your personal information is deleted within 72 hours of your request being confirmed. Email requests may need a short time for us to verify you first.",
          contentNe:
            "अनुरोध पुष्टि भएको ७२ घण्टाभित्र व्यक्तिगत विवरणहरू मेटाइन्छ। इमेल वा फोनबाट आएका अनुरोधहरूमा पहिले पहिचान पुष्टि गर्न केही समय लाग्न सक्छ।",
        },
        {
          id: "forgot-password",
          title: "I forgot my password. Can I still delete my account?",
          titleNe: "मैले पासवर्ड बिर्सिएँ, के अझै खाता मेटाउन मिल्छ?",
          content:
            "Yes. Use Option B and contact us with your name and registered mobile number or submit the request form on this page.",
          contentNe:
            "मिल्छ। विकल्प ख प्रयोग गर्नुहोस् र आफ्नो नाम र दर्ता भएको नम्बरसहित हामीलाई सम्पर्क गर्नुहोस् वा यहीँ फारम भर्नुहोस्।",
        },
        {
          id: "changed-mind",
          title: "I changed my mind after deleting.",
          titleNe: "खाता मेटाइसकेपछि मन बदलियो भने?",
          content:
            "Deletion is permanent and the data cannot be recovered. Please contact us promptly if you made a request by mistake and have not yet received confirmation; after that, you will need to create a new account.",
          contentNe:
            "खाता मेटाउने कार्य स्थायी हो र डाटा पुनः प्राप्त गर्न सकिँदैन। यदि गल्तीले अनुरोध पठाउनुभएको हो र अन्तिम पुष्टि भइसकेको छैन भने तुरुन्त सम्पर्क गर्नुहोस्। अन्यथा नयाँ खाता खोल्नुपर्नेछ।",
        },
        {
          id: "unresolved-order",
          title: "What if I have an unresolved order or dispute?",
          titleNe: "यदि मसँग टुंगिन बाँकी अर्डर वा विवाद छ भने के हुन्छ?",
          content:
            "Please complete, cancel or resolve it first. Contact support if you need help, and we will assist you before deleting the account.",
          contentNe:
            "कृपया पहिले त्यसलाई पूरा गर्नुहोस् वा रद्द गर्नुहोस्। सहयोग चाहिएमा हाम्रो टिमलाई सम्पर्क गर्नुहोस्, हामी अर्डर टुंग्याएर खाता मेटाउन सहयोग गर्नेछौं।",
        },
      ],
    },
    {
      id: "contact",
      number: "9",
      title: "Contact",
      titleNe: "९. सम्पर्क विवरण",
      table: {
        headers: ["Channel", "Detail"],
        headersNe: ["माध्यम", "विवरण"],
        rows: [
          ["Email", "support@krishimantra.app"],
          ["Phone", "+977-9865020935"],
          ["Location", "Chitwan, Nepal"],
        ],
        rowsNe: [
          ["इमेल", "support@krishimantra.app"],
          ["फोन", "+977-9865020935"],
          ["स्थान", "चितवन, नेपाल"],
        ],
      },
    },
  ],
};
