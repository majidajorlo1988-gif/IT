/* =========================================================
   AJORLOO•TECH — Main JavaScript
   Engineering Digital Trust
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     ELEMENTS
     ========================================================= */

  const html = document.documentElement;
  const body = document.body;

  const header = document.querySelector(".site-header");

  const menuToggle =
    document.querySelector(".menu-toggle") ||
    document.querySelector("#menuToggle");

  /*
    IMPORTANT:
    The HTML uses .main-nav while some older versions
    may use .mobile-menu or #mobileMenu.
  */
  const mobileMenu =
    document.querySelector(".main-nav") ||
    document.querySelector(".mobile-menu") ||
    document.querySelector("#mobileMenu");

  const backToTop = document.querySelector(".back-to-top");

  const languageButtons = document.querySelectorAll(
    "[data-lang], .language-btn"
  );

  const articleCards = document.querySelectorAll(".article-card");

  const articleFilters = document.querySelectorAll(
    "[data-filter], .article-filter"
  );


  /* =========================================================
     TRANSLATIONS
     ========================================================= */

  const translations = {
    fa: {
      navServices: "خدمات",
      navAbout: "دربارهٔ من",
      navProjects: "پروژه‌ها",
      navArticles: "مقالات",
      navContact: "تماس",

      heroEyebrow: "IT INFRASTRUCTURE • NETWORK • SYSTEMS",

      heroTitle1: "Engineering",
      heroTitle2: "Digital Trust",

      heroDescription:
        "طراحی، پیاده‌سازی و پشتیبانی زیرساخت‌های شبکه و سیستم؛ با تمرکز بر پایداری، امنیت، مانیتورینگ، Backup و حل مسئله در محیط‌های واقعی.",

      heroPrimaryButton: "مشاهده خدمات",
      heroSecondaryButton: "مشاهده پروژه‌ها",

      statExperience: "۱۰+ سال تجربه",
      statInfrastructure: "زیرساخت و شبکه",
      statMindset: "Problem Solving",

      dashboardLabel: "INFRASTRUCTURE STATUS",
      dashboardTitle: "زیرساخت پایدار، قابل مشاهده و قابل اعتماد",

      metricNetwork: "Network",
      metricBackup: "Backup",
      metricSecurity: "Security",

      servicesTitle: "خدمات تخصصی",
      servicesDescription:
        "از طراحی شبکه تا نگهداری سرورها و سیستم‌های سازمانی؛ تمرکز من روی ساخت زیرساختی پایدار، امن و قابل مدیریت است.",

      serviceNetworkTitle: "Network Infrastructure",
      serviceNetworkText:
        "طراحی، پیاده‌سازی و عیب‌یابی شبکه‌های LAN/WAN، VLAN، Routing، Switching و ارتباط بین شعب.",

      serviceSystemTitle: "Systems & Servers",
      serviceSystemText:
        "راه‌اندازی و مدیریت Windows Server، Active Directory، DNS، DHCP، File Server و سرویس‌های سازمانی.",

      serviceVirtualTitle: "Virtualization",
      serviceVirtualText:
        "پیاده‌سازی و مدیریت VMware ESXi، ماشین‌های مجازی، منابع سرور و زیرساخت‌های مجازی.",

      serviceBackupTitle: "Backup & Recovery",
      serviceBackupText:
        "طراحی Backup Strategy، Veeam Backup، Recovery و ایجاد معماری مناسب برای محافظت از اطلاعات.",

      serviceSecurityTitle: "Security & Monitoring",
      serviceSecurityText:
        "مانیتورینگ زیرساخت، کنترل دسترسی، عیب‌یابی امنیتی و استفاده از ابزارهایی مانند PRTG و SolarWinds.",

      serviceVoipTitle: "VoIP & CCTV",
      serviceVoipText:
        "راه‌اندازی و عیب‌یابی VoIP، SIP، Issabel/Asterisk و زیرساخت دوربین‌های IP، NVR و PoE.",

      projectsTitle: "پروژه‌های واقعی",
      projectsDescription:
        "نمونه‌هایی از چالش‌ها و راهکارهایی که در محیط‌های واقعی زیرساخت و شبکه با آن‌ها درگیر بوده‌ام.",

      projectSipTitle: "SIP Registration Troubleshooting",
      projectSipText:
        "عیب‌یابی ثبت نشدن تلفن‌ها در یک زیرساخت VoIP چند شعبه‌ای؛ از بررسی Tunnel و Firewall تا Packet Capture و وضعیت Asterisk.",

      projectPoeTitle: "PoE Optimization",
      projectPoeText:
        "بهینه‌سازی مصرف PoE در یک سوئیچ 48-Port با Power Budget برابر 370W و افزایش تعداد دوربین‌های فعال بدون تعویض سخت‌افزار.",

      projectUnifiTitle: "UniFi Controller Integration",
      projectUnifiText:
        "راه‌اندازی و مدیریت UniFi Controller، مدیریت تجهیزات، Monitoring، Firmware، WAN و QoS.",

      projectMikrotikTitle: "MikroTik Wireless Deployment",
      projectMikrotikText:
        "پیاده‌سازی ارتباط Wireless با تجهیزات MikroTik RB532 و طراحی Bridge/Station برای اتصال چند نقطه.",

      articlesTitle: "مقالات فنی",
      articlesDescription:
        "یادداشت‌ها و آموزش‌های کاربردی درباره شبکه، سیستم، Backup، VoIP و زیرساخت IT.",

      articleFilterAll: "همه",
      articleFilterSwitching: "Switching",
      articleFilterNetworkPlus: "Network+",
      articleFilterRouting: "Routing",
      articleFilterVeeam: "Veeam",
      articleFilterVoip: "VoIP",
      articleFilterSystems: "Systems",
      articleFilterCctv: "CCTV",

      articleVlanTitle: "VLAN چیست؟ راهنمای کامل VLAN و کاربرد آن در شبکه",
      articleVlanText:
        "مفاهیم VLAN، Broadcast Domain، Access و Trunk و سناریوهای واقعی استفاده از VLAN.",

      articleAccessTitle: "Access Port و Trunk Port چیست؟",
      articleAccessText:
        "تفاوت Access و Trunk، 802.1Q و نحوه عبور VLANها از لینک‌های Trunk.",

      articleStpTitle: "STP و RSTP چیست؟",
      articleStpText:
        "مفهوم Loop در شبکه، Spanning Tree Protocol و تفاوت STP با RSTP.",

      articlePoeTitle: "Case Study: بهینه‌سازی PoE برای دوربین‌های IP",
      articlePoeText:
        "بررسی یک مشکل واقعی مصرف PoE و راهکاری برای افزایش ظرفیت بدون تعویض Switch.",

      articleSubnettingTitle: "Subnetting چیست؟ آموزش کاربردی Subnet Mask",
      articleSubnettingText:
        "محاسبه Subnet، Network Address، Broadcast و تعداد Hostها با مثال‌های واقعی.",

      articleRoutingTitle: "Static Routing چیست؟",
      articleRoutingText:
        "مفهوم Static Route، Gateway و سناریوهای کاربردی Routing در شبکه.",

      articleVeeamTitle: "قانون 3-2-1 در Backup چیست؟",
      articleVeeamText:
        "معماری 3-2-1 برای محافظت بهتر از اطلاعات و کاهش ریسک از دست رفتن Backup.",

      articleVeeam10Title: "قانون 3-2-1-1-0 در Backup",
      articleVeeam10Text:
        "نسخه کامل‌تر استراتژی Backup با تمرکز روی Immutable و تست صحت Backup.",

      articleImmutableTitle: "Immutable Backup چیست؟",
      articleImmutableText:
        "چرا Immutable Backup در برابر Ransomware اهمیت دارد و چگونه از Backup محافظت می‌کند.",

      articleSipTitle: "SIP Registration چیست و چرا تلفن Register نمی‌شود؟",
      articleSipText:
        "بررسی مسیر SIP، UDP 5060، NAT، Firewall، Tunnel و وضعیت Asterisk در یک سناریوی واقعی.",

      articleAdTitle:
        "Active Directory چیست؟ راهنمای کامل AD، Domain و Group Policy",
      articleAdText:
        "آشنایی با Active Directory، Domain Controller، DNS، Group Policy و مدیریت متمرکز کاربران.",

      articleOsiTitle: "مدل OSI چیست؟ راهنمای کامل ۷ لایه شبکه",
      articleOsiText:
        "بررسی هفت لایه OSI، PDUها، Encapsulation و روش عیب‌یابی شبکه بر اساس لایه‌ها.",

      articlesCtaTitle: "دانش فنی، تجربه واقعی",
      articlesCtaText:
        "هدف این بخش فقط آموزش تئوری نیست؛ تجربه‌های واقعی زیرساخت را به زبان ساده و کاربردی منتقل می‌کنم.",
      articlesCtaButton: "مشاهده همه مقالات",

      technologiesTitle: "Technologies",
      technologiesDescription:
        "برخی از تکنولوژی‌ها و ابزارهایی که در پروژه‌ها و محیط‌های کاری با آن‌ها کار کرده‌ام.",

      aboutTitle: "درباره من",

      aboutText1:
        "من مجید آجورلو هستم؛ متخصص زیرساخت IT، شبکه و سیستم با بیش از ۱۰ سال تجربه در طراحی، پیاده‌سازی، نگهداری و عیب‌یابی زیرساخت‌های سازمانی.",

      aboutHighlight1:
        "تمرکز من روی ساخت زیرساخت‌هایی است که فقط کار نکنند؛ بلکه پایدار، قابل مشاهده، امن و قابل توسعه باشند.",

      aboutHighlight2:
        "در پروژه‌ها ابتدا مسئله را از دید End-to-End بررسی می‌کنم و سپس بر اساس شواهد، مسیر عیب‌یابی و راهکار را مشخص می‌کنم.",

      aboutHighlight3:
        "تجربه عملی در Network، Windows Server، Virtualization، Backup، VoIP، CCTV و Monitoring دارم.",

      profileName: "Majid Ajorloo",
      profileRole: "IT Infrastructure & Network Specialist",
      profileExperience: "10+ Years Experience",
      profileEducation: "B.Sc. Computer / Software",
      profileLanguages: "Persian • English • German • Arabic",

      whyTitle: "چرا AJORLOO•TECH؟",

      whyDescription:
        "هدف من ارائه راهکارهایی است که در دنیای واقعی قابل اجرا باشند؛ نه فقط روی کاغذ. ترکیب تجربه عملی، تحلیل مسئله و نگاه End-to-End باعث می‌شود قبل از تغییرات بزرگ، علت واقعی مشکل مشخص شود.",

      whyItem1Title: "Real-World Experience",
      whyItem1Text: "تمرکز بر تجربه واقعی محیط‌های سازمانی.",

      whyItem2Title: "Problem Solving",
      whyItem2Text: "تحلیل مرحله‌به‌مرحله برای پیدا کردن Root Cause.",

      whyItem3Title: "Reliable Infrastructure",
      whyItem3Text: "تمرکز روی پایداری، امنیت و قابلیت توسعه.",

      whyItem4Title: "Continuous Learning",
      whyItem4Text: "یادگیری مداوم تکنولوژی‌ها و روش‌های جدید.",

      contactTitle: "ارتباط با من",

      contactDescription:
        "اگر برای طراحی شبکه، زیرساخت، سرور، Backup، VoIP یا عیب‌یابی یک مشکل فنی نیاز به مشاوره دارید، خوشحال می‌شوم در ارتباط باشیم.",

      contactEmailLabel: "Email",
      contactLinkedinLabel: "LinkedIn",

      footerTagline: "Engineering Digital Trust",

      backToTopLabel: "بازگشت به بالا",

      menuOpenLabel: "باز کردن منو",
      menuCloseLabel: "بستن منو"
    },


    /* =======================================================
       ENGLISH
       ======================================================= */

    en: {
      navServices: "Services",
      navAbout: "About",
      navProjects: "Projects",
      navArticles: "Articles",
      navContact: "Contact",

      heroEyebrow: "IT INFRASTRUCTURE • NETWORK • SYSTEMS",

      heroTitle1: "Engineering",
      heroTitle2: "Digital Trust",

      heroDescription:
        "Designing, implementing and supporting reliable IT infrastructure with a focus on stability, security, monitoring, backup and real-world problem solving.",

      heroPrimaryButton: "View Services",
      heroSecondaryButton: "View Projects",

      statExperience: "10+ Years Experience",
      statInfrastructure: "Infrastructure & Network",
      statMindset: "Problem Solving",

      dashboardLabel: "INFRASTRUCTURE STATUS",
      dashboardTitle: "Stable, visible and reliable infrastructure",

      metricNetwork: "Network",
      metricBackup: "Backup",
      metricSecurity: "Security",

      servicesTitle: "Professional Services",
      servicesDescription:
        "From network design to server administration and enterprise systems, the focus is on building reliable, secure and manageable infrastructure.",

      serviceNetworkTitle: "Network Infrastructure",
      serviceNetworkText:
        "Design, implementation and troubleshooting of LAN/WAN, VLAN, routing, switching and multi-site connectivity.",

      serviceSystemTitle: "Systems & Servers",
      serviceSystemText:
        "Windows Server, Active Directory, DNS, DHCP, File Server and enterprise service administration.",

      serviceVirtualTitle: "Virtualization",
      serviceVirtualText:
        "VMware ESXi, virtual machines, server resources and virtual infrastructure management.",

      serviceBackupTitle: "Backup & Recovery",
      serviceBackupText:
        "Backup strategy, Veeam Backup, recovery and resilient data protection architecture.",

      serviceSecurityTitle: "Security & Monitoring",
      serviceSecurityText:
        "Infrastructure monitoring, access control, troubleshooting and tools such as PRTG and SolarWinds.",

      serviceVoipTitle: "VoIP & CCTV",
      serviceVoipText:
        "VoIP, SIP, Issabel/Asterisk and IP camera, NVR and PoE infrastructure deployment and troubleshooting.",

      projectsTitle: "Real-World Projects",
      projectsDescription:
        "Selected infrastructure and networking challenges solved in real-world environments.",

      projectSipTitle: "SIP Registration Troubleshooting",
      projectSipText:
        "Troubleshooting failed phone registration across a multi-site VoIP environment, from tunnel and firewall checks to packet capture and Asterisk state.",

      projectPoeTitle: "PoE Optimization",
      projectPoeText:
        "Optimizing PoE consumption on a 48-port switch with a 370W budget and increasing active camera capacity without replacing hardware.",

      projectUnifiTitle: "UniFi Controller Integration",
      projectUnifiText:
        "UniFi Controller deployment, device management, monitoring, firmware, WAN and QoS configuration.",

      projectMikrotikTitle: "MikroTik Wireless Deployment",
      projectMikrotikText:
        "Wireless connectivity using MikroTik RB532 with bridge and station-based architecture.",

      articlesTitle: "Technical Articles",
      articlesDescription:
        "Practical notes and guides about networking, systems, backup, VoIP and IT infrastructure.",

      articleFilterAll: "All",
      articleFilterSwitching: "Switching",
      articleFilterNetworkPlus: "Network+",
      articleFilterRouting: "Routing",
      articleFilterVeeam: "Veeam",
      articleFilterVoip: "VoIP",
      articleFilterSystems: "Systems",
      articleFilterCctv: "CCTV",

      articleVlanTitle: "What Is VLAN? A Complete VLAN Guide",
      articleVlanText:
        "VLAN concepts, broadcast domains, access and trunk ports and real-world VLAN scenarios.",

      articleAccessTitle: "Access Port vs Trunk Port",
      articleAccessText:
        "Access and trunk ports, 802.1Q and how VLANs travel across trunk links.",

      articleStpTitle: "What Are STP and RSTP?",
      articleStpText:
        "Network loops, Spanning Tree Protocol and the difference between STP and RSTP.",

      articlePoeTitle: "Case Study: PoE Optimization for IP Cameras",
      articlePoeText:
        "A real-world PoE capacity problem and how to increase camera capacity without replacing the switch.",

      articleSubnettingTitle: "What Is Subnetting?",
      articleSubnettingText:
        "Subnet calculation, network address, broadcast address and host capacity.",

      articleRoutingTitle: "What Is Static Routing?",
      articleRoutingText:
        "Static routes, gateways and practical routing scenarios.",

      articleVeeamTitle: "What Is the 3-2-1 Backup Rule?",
      articleVeeamText:
        "The 3-2-1 strategy for stronger data protection and reduced backup risk.",

      articleVeeam10Title: "The 3-2-1-1-0 Backup Rule",
      articleVeeam10Text:
        "An enhanced backup strategy focused on immutability and backup verification.",

      articleImmutableTitle: "What Is Immutable Backup?",
      articleImmutableText:
        "Why immutable backups matter against ransomware and how they protect backup data.",

      articleSipTitle: "What Is SIP Registration?",
      articleSipText:
        "Understanding SIP, UDP 5060, NAT, firewall, tunnels and Asterisk registration issues.",

      articleAdTitle:
        "What Is Active Directory? AD, Domain and Group Policy Guide",
      articleAdText:
        "Active Directory, Domain Controller, DNS, Group Policy and centralized user management.",

      articleOsiTitle: "What Is the OSI Model? The 7 Network Layers",
      articleOsiText:
        "The seven OSI layers, PDUs, encapsulation and layer-based troubleshooting.",

      articlesCtaTitle: "Technical Knowledge, Real Experience",
      articlesCtaText:
        "The goal is not only theoretical education, but sharing practical infrastructure experience in a simple and useful way.",
      articlesCtaButton: "View All Articles",

      technologiesTitle: "Technologies",
      technologiesDescription:
        "Technologies and tools used across projects and professional environments.",

      aboutTitle: "About Me",

      aboutText1:
        "I am Majid Ajorloo, an IT infrastructure, network and systems specialist with more than 10 years of experience in designing, implementing, maintaining and troubleshooting enterprise infrastructure.",

      aboutHighlight1:
        "My focus is on infrastructure that does not simply work, but remains stable, visible, secure and scalable.",

      aboutHighlight2:
        "I approach problems end-to-end and use evidence to define the troubleshooting path and the right solution.",

      aboutHighlight3:
        "Hands-on experience across networking, Windows Server, virtualization, backup, VoIP, CCTV and monitoring.",

      profileName: "Majid Ajorloo",
      profileRole: "IT Infrastructure & Network Specialist",
      profileExperience: "10+ Years Experience",
      profileEducation: "B.Sc. Computer / Software",
      profileLanguages: "Persian • English • German • Arabic",

      whyTitle: "Why AJORLOO•TECH?",

      whyDescription:
        "The goal is to provide solutions that work in the real world, not just on paper. Practical experience, problem analysis and an end-to-end mindset help identify the actual root cause before major changes are made.",

      whyItem1Title: "Real-World Experience",
      whyItem1Text: "Focused on practical enterprise environments.",

      whyItem2Title: "Problem Solving",
      whyItem2Text: "Step-by-step analysis to identify root causes.",

      whyItem3Title: "Reliable Infrastructure",
      whyItem3Text: "Focused on stability, security and scalability.",

      whyItem4Title: "Continuous Learning",
      whyItem4Text: "Continuously learning new technologies and methods.",

      contactTitle: "Contact Me",

      contactDescription:
        "If you need consulting for network design, infrastructure, servers, backup, VoIP or technical troubleshooting, feel free to get in touch.",

      contactEmailLabel: "Email",
      contactLinkedinLabel: "LinkedIn",

      footerTagline: "Engineering Digital Trust",

      backToTopLabel: "Back to top",

      menuOpenLabel: "Open menu",
      menuCloseLabel: "Close menu"
    },


    /* =======================================================
       GERMAN
       ======================================================= */

    de: {
      navServices: "Leistungen",
      navAbout: "Über mich",
      navProjects: "Projekte",
      navArticles: "Artikel",
      navContact: "Kontakt",

      heroEyebrow: "IT-INFRASTRUKTUR • NETZWERK • SYSTEME",

      heroTitle1: "Engineering",
      heroTitle2: "Digital Trust",

      heroDescription:
        "Planung, Implementierung und Betreuung zuverlässiger IT-Infrastrukturen mit Fokus auf Stabilität, Sicherheit, Monitoring, Backup und praxisorientierte Problemlösung.",

      heroPrimaryButton: "Leistungen ansehen",
      heroSecondaryButton: "Projekte ansehen",

      statExperience: "10+ Jahre Erfahrung",
      statInfrastructure: "Infrastruktur & Netzwerk",
      statMindset: "Problemlösung",

      dashboardLabel: "INFRASTRUKTUR STATUS",
      dashboardTitle: "Stabile, transparente und zuverlässige Infrastruktur",

      metricNetwork: "Netzwerk",
      metricBackup: "Backup",
      metricSecurity: "Sicherheit",

      servicesTitle: "Professionelle Leistungen",
      servicesDescription:
        "Von Netzwerkdesign bis Serveradministration und Unternehmenssystemen liegt der Fokus auf stabiler, sicherer und verwaltbarer Infrastruktur.",

      serviceNetworkTitle: "Netzwerkinfrastruktur",
      serviceNetworkText:
        "Planung, Implementierung und Fehleranalyse von LAN/WAN, VLAN, Routing, Switching und Standortverbindungen.",

      serviceSystemTitle: "Systeme & Server",
      serviceSystemText:
        "Windows Server, Active Directory, DNS, DHCP, File Server und zentrale Unternehmensdienste.",

      serviceVirtualTitle: "Virtualisierung",
      serviceVirtualText:
        "VMware ESXi, virtuelle Maschinen, Serverressourcen und virtuelle Infrastruktur.",

      serviceBackupTitle: "Backup & Recovery",
      serviceBackupText:
        "Backup-Strategien, Veeam Backup, Recovery und zuverlässige Datensicherung.",

      serviceSecurityTitle: "Security & Monitoring",
      serviceSecurityText:
        "Monitoring, Zugriffskontrolle, Fehleranalyse und Tools wie PRTG und SolarWinds.",

      serviceVoipTitle: "VoIP & CCTV",
      serviceVoipText:
        "VoIP, SIP, Issabel/Asterisk sowie IP-Kameras, NVR- und PoE-Infrastruktur.",

      projectsTitle: "Praxisprojekte",
      projectsDescription:
        "Ausgewählte reale Herausforderungen und Lösungen aus Netzwerk- und Infrastrukturprojekten.",

      projectSipTitle: "SIP Registration Troubleshooting",
      projectSipText:
        "Fehleranalyse bei der SIP-Registrierung in einer Multi-Site-VoIP-Umgebung.",

      projectPoeTitle: "PoE Optimierung",
      projectPoeText:
        "Optimierung eines 48-Port-PoE-Switches mit 370W Budget für eine größere Anzahl von Kameras.",

      projectUnifiTitle: "UniFi Controller Integration",
      projectUnifiText:
        "Installation und Verwaltung des UniFi Controllers inklusive Monitoring, Firmware, WAN und QoS.",

      projectMikrotikTitle: "MikroTik Wireless Deployment",
      projectMikrotikText:
        "Wireless-Verbindung mit MikroTik RB532 und Bridge-/Station-Architektur.",

      articlesTitle: "Technische Artikel",
      articlesDescription:
        "Praxisnahe Artikel über Netzwerk, Systeme, Backup, VoIP und IT-Infrastruktur.",

      articleFilterAll: "Alle",
      articleFilterSwitching: "Switching",
      articleFilterNetworkPlus: "Network+",
      articleFilterRouting: "Routing",
      articleFilterVeeam: "Veeam",
      articleFilterVoip: "VoIP",
      articleFilterSystems: "Systeme",
      articleFilterCctv: "CCTV",

      articleVlanTitle: "Was ist VLAN?",
      articleVlanText:
        "VLAN-Grundlagen, Broadcast-Domänen, Access- und Trunk-Ports.",

      articleAccessTitle: "Access Port vs. Trunk Port",
      articleAccessText:
        "Unterschiede zwischen Access und Trunk sowie 802.1Q.",

      articleStpTitle: "Was sind STP und RSTP?",
      articleStpText:
        "Netzwerk-Loops, Spanning Tree Protocol und RSTP.",

      articlePoeTitle: "Case Study: PoE-Optimierung für IP-Kameras",
      articlePoeText:
        "Eine reale PoE-Herausforderung und die Optimierung ohne Hardwaretausch.",

      articleSubnettingTitle: "Was ist Subnetting?",
      articleSubnettingText:
        "Subnetze, Netzwerkadresse, Broadcast und Hosts.",

      articleRoutingTitle: "Was ist Static Routing?",
      articleRoutingText:
        "Statische Routen, Gateways und praktische Routing-Szenarien.",

      articleVeeamTitle: "Was ist die 3-2-1 Backup-Regel?",
      articleVeeamText:
        "Eine bewährte Strategie zum Schutz wichtiger Daten.",

      articleVeeam10Title: "Die 3-2-1-1-0 Backup-Regel",
      articleVeeam10Text:
        "Erweiterte Backup-Strategie mit Fokus auf Immutability und Verification.",

      articleImmutableTitle: "Was ist Immutable Backup?",
      articleImmutableText:
        "Warum unveränderbare Backups besonders gegen Ransomware wichtig sind.",

      articleSipTitle: "Was ist SIP Registration?",
      articleSipText:
        "SIP, UDP 5060, NAT, Firewall, Tunnel und Asterisk.",

      articleAdTitle:
        "Was ist Active Directory? AD, Domain und Group Policy",
      articleAdText:
        "Active Directory, Domain Controller, DNS und Group Policy.",

      articleOsiTitle: "Was ist das OSI-Modell?",
      articleOsiText:
        "Die sieben OSI-Schichten und praxisorientierte Fehleranalyse.",

      articlesCtaTitle: "Technisches Wissen, echte Erfahrung",
      articlesCtaText:
        "Nicht nur Theorie, sondern praktische Erfahrungen aus der IT-Infrastruktur.",
      articlesCtaButton: "Alle Artikel ansehen",

      technologiesTitle: "Technologien",
      technologiesDescription:
        "Technologien und Tools aus meinen Projekten und beruflichen Erfahrungen.",

      aboutTitle: "Über mich",

      aboutText1:
        "Ich bin Majid Ajorloo, IT-Infrastruktur-, Netzwerk- und Systemspezialist mit mehr als 10 Jahren Erfahrung.",

      aboutHighlight1:
        "Mein Fokus liegt auf stabiler, sicherer, transparenter und skalierbarer Infrastruktur.",

      aboutHighlight2:
        "Ich analysiere Probleme ganzheitlich und arbeite evidenzbasiert an der Root Cause.",

      aboutHighlight3:
        "Praktische Erfahrung in Netzwerk, Windows Server, Virtualisierung, Backup, VoIP, CCTV und Monitoring.",

      profileName: "Majid Ajorloo",
      profileRole: "IT Infrastructure & Network Specialist",
      profileExperience: "10+ Jahre Erfahrung",
      profileEducation: "B.Sc. Computer / Software",
      profileLanguages: "Persisch • Englisch • Deutsch • Arabisch",

      whyTitle: "Warum AJORLOO•TECH?",

      whyDescription:
        "Mein Ziel sind Lösungen, die in der realen Welt funktionieren. Praktische Erfahrung, Problemanalyse und ein End-to-End-Ansatz helfen dabei, die tatsächliche Ursache eines Problems zu finden.",

      whyItem1Title: "Praxisorientierte Erfahrung",
      whyItem1Text: "Erfahrung in realen Unternehmensumgebungen.",

      whyItem2Title: "Problemlösung",
      whyItem2Text: "Strukturierte Analyse zur Ermittlung der Root Cause.",

      whyItem3Title: "Zuverlässige Infrastruktur",
      whyItem3Text: "Fokus auf Stabilität, Sicherheit und Skalierbarkeit.",

      whyItem4Title: "Kontinuierliches Lernen",
      whyItem4Text: "Ständige Weiterentwicklung und neue Technologien.",

      contactTitle: "Kontakt",

      contactDescription:
        "Wenn Sie Beratung zu Netzwerk, Infrastruktur, Servern, Backup, VoIP oder technischen Problemen benötigen, können Sie mich gerne kontaktieren.",

      contactEmailLabel: "E-Mail",
      contactLinkedinLabel: "LinkedIn",

      footerTagline: "Engineering Digital Trust",

      backToTopLabel: "Nach oben",

      menuOpenLabel: "Menü öffnen",
      menuCloseLabel: "Menü schließen"
    }
  };


  /* =========================================================
     LANGUAGE
     ========================================================= */

  function getInitialLanguage() {
    const savedLanguage = localStorage.getItem("ajorlotech-language");

    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    const browserLanguage =
      (navigator.language || navigator.userLanguage || "fa")
        .toLowerCase()
        .split("-")[0];

    if (translations[browserLanguage]) {
      return browserLanguage;
    }

    return "fa";
  }


  function updateText(key, language) {
    const value = translations[language]?.[key];

    if (value === undefined) {
      return;
    }

    const elements = document.querySelectorAll(`[data-i18n="${key}"]`);

    elements.forEach((element) => {
      element.textContent = value;
    });
  }


  function updateLanguage(language) {
    if (!translations[language]) {
      language = "fa";
    }

    html.lang = language;

    if (language === "fa") {
      html.dir = "rtl";
    } else {
      html.dir = "ltr";
    }

    Object.keys(translations[language]).forEach((key) => {
      updateText(key, language);
    });

    languageButtons.forEach((button) => {
      const buttonLanguage =
        button.dataset.lang ||
        button.getAttribute("data-language");

      button.classList.toggle(
        "active",
        buttonLanguage === language
      );

      button.setAttribute(
        "aria-pressed",
        buttonLanguage === language ? "true" : "false"
      );
    });

    localStorage.setItem("ajorlotech-language", language);

    updateDocumentLanguage(language);
  }


  function updateDocumentLanguage(language) {
    const titles = {
      fa: "AJORLOO•TECH | Engineering Digital Trust",
      en: "AJORLOO•TECH | Engineering Digital Trust",
      de: "AJORLOO•TECH | Engineering Digital Trust"
    };

    document.title = titles[language] || titles.en;
  }


  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language =
        button.dataset.lang ||
        button.getAttribute("data-language");

      if (language && translations[language]) {
        updateLanguage(language);
      }
    });
  });


  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function setMenuState(isOpen) {
    if (!menuToggle || !mobileMenu) {
      return;
    }

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.classList.toggle("active", isOpen);

    mobileMenu.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    const language = html.lang || "fa";

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? translations[language]?.menuCloseLabel || "Close menu"
        : translations[language]?.menuOpenLabel || "Open menu"
    );

    body.classList.toggle("menu-open", isOpen);
  }


  if (menuToggle && mobileMenu) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen =
        mobileMenu.classList.contains("open");

      setMenuState(!isOpen);
    });


    /* Close menu after clicking navigation item */

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });


    /* Close when clicking outside */

    document.addEventListener("click", (event) => {
      if (!mobileMenu.classList.contains("open")) {
        return;
      }

      const clickedInsideMenu =
        mobileMenu.contains(event.target);

      const clickedToggle =
        menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        setMenuState(false);
      }
    });


    /* Close with Escape */

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });


    /* Close when resizing back to desktop */

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        setMenuState(false);
      }
    });
  }


  /* =========================================================
     HEADER SCROLL EFFECT
     ========================================================= */

  function updateHeader() {
    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );
  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =========================================================
     BACK TO TOP
     ========================================================= */

  if (backToTop) {
    backToTop.setAttribute(
      "aria-label",
      translations.fa.backToTopLabel
    );

    window.addEventListener(
      "scroll",
      () => {
        const visible = window.scrollY > 500;

        /*
          CSS uses .visible.
          .show is also added for compatibility
          with older CSS versions.
        */

        backToTop.classList.toggle(
          "visible",
          visible
        );

        backToTop.classList.toggle(
          "show",
          visible
        );
      },
      { passive: true }
    );


    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  /* =========================================================
     ARTICLE FILTER
     ========================================================= */

  function filterArticles(filter) {
    articleCards.forEach((card) => {
      const category =
        card.dataset.category ||
        card.getAttribute("data-category") ||
        "";

      const show =
        filter === "all" ||
        filter === "*" ||
        category === filter;

      card.style.display = show ? "" : "none";

      card.classList.toggle(
        "article-visible",
        show
      );

      card.classList.toggle(
        "article-hidden",
        !show
      );

      /*
        Compatibility with previous versions.
      */

      card.classList.toggle(
        "is-hidden",
        !show
      );
    });
  }


  articleFilters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      const filter =
        filterButton.dataset.filter ||
        filterButton.getAttribute("data-filter") ||
        "all";

      articleFilters.forEach((button) => {
        button.classList.remove("active");
      });

      filterButton.classList.add("active");

      filterArticles(filter);
    });
  });


  /* =========================================================
     REVEAL ANIMATION
     ========================================================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .fade-up, .service-card, .project-card, .article-card, .technology-card"
  );


  if (
    "IntersectionObserver" in window &&
    revealElements.length
  ) {
    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "reveal-visible"
            );

            /*
              Compatibility with existing CSS/JS.
            */

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px"
        }
      );


    revealElements.forEach((element) => {
      element.classList.add("reveal-hidden");

      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("reveal-visible");
      element.classList.add("visible");
    });
  }


  /* =========================================================
     ACTIVE NAVIGATION
     ========================================================= */

  const navLinks = document.querySelectorAll(
    '.main-nav a[href^="#"], .mobile-menu a[href^="#"]'
  );

  const sections = document.querySelectorAll(
    "main section[id]"
  );


  if (
    "IntersectionObserver" in window &&
    sections.length &&
    navLinks.length
  ) {
    const sectionObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const id = entry.target.id;

            navLinks.forEach((link) => {
              const href =
                link.getAttribute("href");

              link.classList.toggle(
                "active",
                href === `#${id}`
              );
            });
          });
        },
        {
          threshold: 0.2,
          rootMargin: "-80px 0px -55% 0px"
        }
      );


    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }


  /* =========================================================
     SMOOTH INTERNAL NAVIGATION
     ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#" ||
          targetId.length < 2
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        const headerHeight =
          header?.offsetHeight || 80;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          15;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });

        /*
          Update URL without jumping.
        */

        try {
          history.pushState(
            null,
            "",
            targetId
          );
        } catch (error) {
          /* Ignore history errors */
        }
      });
    });


  /* =========================================================
     EXTERNAL / EMPTY LINKS
     ========================================================= */

  document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });


  /* =========================================================
     ARTICLE LINK TRACKING / SAFETY
     ========================================================= */

  document
    .querySelectorAll(".article-card a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        const articleTitle =
          link.closest(".article-card")
            ?.querySelector("h3, h2")
            ?.textContent
            ?.trim();

        if (articleTitle) {
          try {
            sessionStorage.setItem(
              "lastArticle",
              articleTitle
            );
          } catch (error) {
            /* Ignore storage errors */
          }
        }
      });
    });


  /* =========================================================
     CURRENT YEAR
     ========================================================= */

  document
    .querySelectorAll("[data-current-year], #currentYear")
    .forEach((element) => {
      element.textContent =
        new Date().getFullYear();
    });


  /* =========================================================
     INITIAL LANGUAGE
     ========================================================= */

  updateLanguage(
    getInitialLanguage()
  );


  /* =========================================================
     INITIAL ARTICLE FILTER
     ========================================================= */

  const activeFilter =
    document.querySelector(
      ".article-filter.active, [data-filter].active"
    );

  if (activeFilter) {
    const filter =
      activeFilter.dataset.filter ||
      "all";

    filterArticles(filter);
  } else {
    filterArticles("all");
  }


  /* =========================================================
     INITIAL BACK TO TOP STATE
     ========================================================= */

  if (backToTop) {
    const visible =
      window.scrollY > 500;

    backToTop.classList.toggle(
      "visible",
      visible
    );

    backToTop.classList.toggle(
      "show",
      visible
    );
  }


  /* =========================================================
     CONSOLE BRANDING
     ========================================================= */

  console.log(
    "%cAJORLOO•TECH",
    "font-size:22px;font-weight:800;"
  );

  console.log(
    "%cEngineering Digital Trust",
    "font-size:13px;"
  );
});