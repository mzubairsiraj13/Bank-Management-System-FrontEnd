

export const experienceCardData = [
    {
        imgUrl: "/CircleLayer.png",
        title: "Integrity",
        description: "Displaying the highest level of Integrity in the way we conduct our business"
    },
    {
        imgUrl: "/Scenery.png",
        title: "Demonstrate",
        description: "Demonstrating a strong Will to Win in the market place"
    },
    {
        imgUrl: "/ObjectUngroup.png",
        title: "Diversity",
        description: "Promoting Diversity in the work place and community"
    },
    {
        imgUrl: "/UserArrows.png",
        title: "Teamwork",
        description: "Together, we enhance banking experiences with seamless financial solutions"
    },
    {
        imgUrl: "/CircleLayer.png",
        title: "Collaboration",
        description: "Displaying the highest level of Integrity in the way we conduct our business"
    },
    {
        imgUrl: "/Rockey.png",
        title: "Technology",
        description: "Harnessing the power of Technology to deliver better customer experience"
    },
    {
        imgUrl: "/Bag.png",
        title: "Corporate",
        description: "Setting the standard for the best Corporate Citizenship in the communities we work"
    },
    {
        imgUrl: "/Cube.png",
        title: "Digital",
        description: "Setting the standard for the best Corporate Citizenship in the communities we work"
    },
]

export const articlesData = [
    {
        articleImg: "/Picture.png",
        title: "SBL AT A GLANCE",
        description: `SBL (Siraj Bank Limited), established in 1981 as a pioneering private sector financial institution in Pakistan, was initially known as the "Industrial Promotion and Development Company of Pakistan Limited." Founded by a distinguished consortium of shareholders including International Finance Corporation (IFC) from the USA, German Investment and Development Company (DEG) from Germany, The Aga Khan Fund for Economic Development (AKFED) from Switzerland, Commonwealth Development Corporation (CDC) from the UK, and the Government of Pakistan, SBL has a rich history of fostering economic growth and innovation in the country.`
    },
    {
        articleImg: "/Picture.png",
        title: "SBL AT A GLANCE",
        description: `SBL (Siraj Bank Limited), established in 1981 as a pioneering private sector financial institution in Pakistan, was initially known as the "Industrial Promotion and Development Company of Pakistan Limited." Founded by a distinguished consortium of shareholders including International Finance Corporation (IFC) from the USA, German Investment and Development Company (DEG) from Germany, The Aga Khan Fund for Economic Development (AKFED) from Switzerland, Commonwealth Development Corporation (CDC) from the UK, and the Government of Pakistan, SBL has a rich history of fostering economic growth and innovation in the country.`
    },
    {
        articleImg: "/Picture.png",
        title: "SBL AT A GLANCE",
        description: `SBL (Siraj Bank Limited), established in 1981 as a pioneering private sector financial institution in Pakistan, was initially known as the "Industrial Promotion and Development Company of Pakistan Limited." Founded by a distinguished consortium of shareholders including International Finance Corporation (IFC) from the USA, German Investment and Development Company (DEG) from Germany, The Aga Khan Fund for Economic Development (AKFED) from Switzerland, Commonwealth Development Corporation (CDC) from the UK, and the Government of Pakistan, SBL has a rich history of fostering economic growth and innovation in the country.`
    },
]


export const servicesData = [
    {
        imgUrl: "/Image.png",
        title: "SBL SAVING SCHEMES"
    },
    {
        imgUrl: "/Image1.png",
        title: "SBL Personal loan"
    },
    {
        imgUrl: "/Image2.png",
        title: "SBL Deposit schemes"
    },
    {
        imgUrl: "/Image3.png",
        title: "SBL auto loan"
    },
    

]


export const getGreeting = () => {
   
        const currentHour = new Date().getHours();
      
        if (currentHour >= 5 && currentHour < 12) {
            return 'Good Morning 🌅';
          } else if (currentHour >= 12 && currentHour < 17) {
            return 'Good Afternoon ☀️';
          } else if (currentHour >= 17 && currentHour < 21) {
            return 'Good Evening 🌇';
          } else {
            return 'Good Night 🌙';
          }
     
}