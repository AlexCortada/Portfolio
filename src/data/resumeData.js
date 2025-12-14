export const resumeData = {
  personal: {
    name: "Alexander Cortada",
    title: "Senior Systems and Infrastructure Engineer",
    email: "alexander.cortada@gmail.com",
    phone: "786.486.2506",
    location: "Lake Wales, FL 33830",
    linkedin: "https://linkedin.com/in/alexander-cortada",
    github: "https://github.com/AlexCortada",
    summary: "Senior Systems and Infrastructure Engineer with over 18 years of experience ensuring the reliability, availability, and security of enterprise-scale infrastructure. Proven expertise in administering Active Directory, IAM, Microsoft 365, and Azure Cloud Services, with deep knowledge of virtualization, SIEM, MDM, and disaster recovery."
  },

  skills: {
    cloud: ["Microsoft Azure", "AWS EC2", "AWS Lightsail", "Azure VDI"],
    iam: ["Microsoft Entra ID (Azure AD)", "ADFS", "SSO", "MFA"],
    os: ["Windows Server 2019+", "Windows 10/11", "Linux (Ubuntu, Debian, Red Hat)", "macOS"],
    networking: ["LAN/WAN", "VPN", "Palo Alto Firewalls", "HPE Aruba", "Juniper Switches (JUNOS)"],
    monitoring: ["Zabbix", "ServiceNow", "JIRA", "BMC Footprints", "Confluence"],
    virtualization: ["VMware vSphere/VCenter", "Proxmox", "Hyper-V", "Docker", "Parallels RDS"],
    endpoint: ["MECM/SCCM", "Intune (MDM)", "PDQ Deploy/Inventory", "MDT", "Group Policy Objects (GPO)"],
    security: ["AppLocker", "BitLocker", "Microsoft Defender", "Sophos Central", "SIEM", "CJIS Standards"],
    scripting: ["PowerShell", "Bash", "Batch"]
  },

  experience: [
    {
      company: "Amgen / Milestone",
      title: "Business Process Engineer II",
      period: "08/2025 – Present",
      location: "Tampa, FL",
      bullets: [
        "Led enterprise-wide Windows 11 migration for an environment of over 50,000 devices, architecting and deploying deployment rings using Microsoft Intune feature update policies.",
        "Served as the escalation point for complex Windows 11 upgrade failures across the large-scale estate, utilizing Intune reports and PowerShell to diagnose issues related to compatibility, hybrid join conflicts, and service health.",
        "Managed the technical transition from SCCM to a modern management model with Microsoft Intune at scale, optimizing update and compliance processes for all 50,000+ Windows 10/11 endpoints.",
        "Automated routine tasks and generated fleet-wide reports using PowerShell scripting to efficiently monitor and manage the Windows 11 upgrade lifecycle for tens of thousands of devices.",
        "Configured and maintained device compliance policies and security baselines within Intune to ensure the security posture of all upgraded endpoints."
      ]
    },
    {
      company: "W.S. Badcock Corporation",
      title: "Systems Infrastructure Engineer",
      period: "01/2025 – Present",
      location: "Bartow, FL",
      bullets: [
        "Administered and migrated On-Premise Active Directory to Azure AD (Microsoft Entra ID), ensuring seamless hybrid identity management for a multi-domain enterprise environment.",
        "Provided technical administration and operational support for Microsoft Azure Cloud Services, including the deployment and management of Azure VDI and SQL server migrations to the cloud.",
        "Managed and secured the Microsoft 365 environment, including Exchange Online, SharePoint, Teams, and user account lifecycle management for thousands of users.",
        "Served as Subject Matter Expert (SME) for Mobile Device Management (MDM), utilizing MECM/SCCM and Intune to build, deploy, and patch over 7,000 endpoints enterprise-wide.",
        "Wrote and deployed custom PowerShell scripts and created complex Group Policy Objects (GPOs) to automate software installation, OS deployments, and security configurations."
      ]
    },
    {
      company: "Acension L.L.C.",
      title: "Owner / Operator",
      period: "09/2021 – 10/2023",
      location: "Mulberry, FL (Remote)",
      bullets: [
        "Spearheaded the development and maintenance of client infrastructure systems, directly enhancing reliability and availability for small to mid-sized businesses.",
        "Administered and secured core enterprise platforms including Active Directory, Microsoft 365, Azure Cloud Services, Linux virtual machines, and LTSP thin clients.",
        "Designed and implemented robust disaster recovery plans, conducting regular tests to ensure system resilience and data integrity for critical business operations.",
        "Led troubleshooting and root cause analysis efforts, resolving complex hardware and software issues in 24/7 operational environments to minimize client downtime.",
        "Managed full technology lifecycles for new and existing sites, including installation and configuration of wireless APs, network switches, servers, desktops, and POS systems."
      ]
    }
  ],

  projects: [
    {
      title: "Enterprise Windows 11 Migration",
      description: "Led migration of 50,000+ devices to Windows 11 using Microsoft Intune",
      technologies: ["Intune", "PowerShell", "Azure AD", "SCCM"],
      impact: "Reduced deployment time by 40%, improved security compliance by 95%"
    },
    {
      title: "Active Directory to Azure AD Migration",
      description: "Migrated multi-domain on-premise AD to Microsoft Entra ID",
      technologies: ["Azure AD", "AD Connect", "PowerShell", "Group Policy"],
      impact: "Enabled hybrid identity management, reduced administrative overhead by 30%"
    },
    {
      title: "Modern Device Management Implementation",
      description: "Transitioned from SCCM to Intune for 7,000+ endpoints",
      technologies: ["Intune", "MECM", "Autopilot", "Conditional Access"],
      impact: "Streamlined device management, improved compliance reporting accuracy"
    }
  ],

  certifications: [
    "Microsoft Certified: Azure Administrator Associate",
    "Microsoft 365 Certified: Enterprise Administrator Expert",
    "CompTIA Security+",
    "Cisco CCNA (expired)",
    "VMware VCP-DCV"
  ]
};