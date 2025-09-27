function applyTranslations(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) {
        console.error("Translations not loaded or language not found:", lang);
        return;
    }

    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang][key]) {
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

const translations = {
    en: {
        // Header
        nav_home: "Home",
        nav_video: "Videos",
        nav_blog: "Blog",
        nav_artwork: "Artwork",
        nav_about: "About",
        nav_shop: "Shop",

        // Shop Page
        shop_title: "3D Printing Shop",
        shop_description: "High-quality 3D printed items, made from durable plastic. Perfect for decoration, gifts, and personal use.",
        product_placeholder_name: "Sample Product",
        product_placeholder_price: "Contact for price",
        product_btn_details: "View Details",

        // Footer
        footer_motto: "A half-baked bookworm who loves creating unique products and once had ambitions to rule the world.",
        footer_copyright: "&copy; Copyright 2024 by Mr.Dajunctic",

        // Home Page
        home_greeting: "Hello, It's Me",
        home_intro: "I'm a super",
        home_description: "A clueless IT student who once dreamed of becoming the most powerful person in the world had his dream shattered. As he struggled to make a living, something appeared before him, 'The Master Youtuber System has been activated,' and from then on, he embarked on the path to becoming the world's greatest Youtuber.",
        home_btn_video: "Watch Videos",
        home_btn_blog: "Read Blog",
        typed_strings: "['Developer', 'Youtuber', 'Blogger', 'Asian Artist']",
        home_shop_title: "Visit My Shop",
        home_shop_description: "Discover unique 3D printed products designed and crafted by me.",
        home_shop_button: "View All Products",

        // About Page
        about_title: "About Me",
        about_job: "Developer | Content Creator",
        about_p1: "Hello! I'm Dat, an Information Technology student with an endless passion for exploring the digital world and turning ideas into reality. My journey began with the first lines of code and has now expanded into content creation on YouTube and blogging.",
        about_p2: "This website is my little home where I share my knowledge of programming, game development tutorials through the Pygame series, weekly LeetCode solutions, and personal reflections on life and technology.",
        about_p3: "My goal is to build a community where everyone can learn, share, and inspire each other. Thank you for visiting, I hope you find something useful and interesting here!",
        about_name: "VU QUY DAT",
        about_job_title: "Unity Developer",
        about_location: "Ha Noi, Viet Nam",
        about_work_experience: "Work Experience",
        about_freelance: "Freelance Game Developer",
        about_projects: "Projects",
        about_skills: "Skills",
        about_skills_lang: "Programming Languagues",
        about_skills_tools: "Frameworks & Tools",
        about_skills_ml: "Machine Learning & AI",
        about_skills_others: "Others",
        about_education: "Education",
        about_activities_awards: "Awards",
        about_now: "Now",
        about_uet: "University of Technology and Engineering - Vietnam National University",
        about_hsgs: "High School for the Gifted Students - Vietnam National University",
        about_uet_major: "Major: Computer Science",
        about_hsgs_major: "Major: Mathematics",
        award_head: "<strong>Head of Specialist Department</strong>, Lowie's Leetcode Community, Hanoi (March 2023 - July 2024)",
        award_leetcode: "<strong>Top 5% Leetcode Users</strong> (2023)",
        award_icpc: "Participated in ICPC Vietnam Provincial. <strong>Top 20% of participants</strong> (2023)",
        award_silver: "<strong>Silver Medal</strong> - 12th competition for excellent students of major high schools in the Northern Delta and Coastal Areas (2019)",
        award_bronze1: "<strong>Bronze Medal</strong> - VNU HSGS Olympiad (2019)",
        award_bronze2: "<strong>Bronze Medal</strong> - VNU competition for excellent students of major high schools (2019)",
        award_violympic: "<strong>National Consolation Prize</strong> – Violympic English Math Contest Grade 8, Vietnam (2017)",
        award_ijso: "<strong>Second Prize, City Level</strong> – IJSO Competition Grade 9 (2018)",
        award_math9: "<strong>Consolation Prize, City Level</strong> – Mathematics Contest Grade 9 (2018)",

        // Artwork Page
        artwork_title: "Artwork Collection",
        artwork_description: "Where I keep my creative moments, from digital drawings to small design projects.",
        artwork_item_title: "Neon City Project",
        artwork_item_desc: "Concept art - 2024",

        // Blog Page
        blog_title: "Daily Leetcode Solutions",
        blog_p1: "Every day I do the LeetCode Daily, and every Saturday I take the time to write up solutions in the hope of inspiring people to practice discipline.",
        blog_p2: "Join the",
        blog_p3: "to practice algorithmic thinking!",
        blog_search_placeholder: "Search articles by title...",
        blog_prev: "Prev",
        blog_next: "Next",

        // Video Page
        video_tab_pygame: "Pygame Tutorial",
        video_tab_vlog: "Vlogs",
        video_tab_game_projects: "Game Projects",
        video_desc_pygame: "A series of tutorials on game programming from basic to advanced with Python's Pygame library.",
        video_desc_vlog: "Sharing moments from my daily life and journeys.",
        video_desc_game_projects: "Showcasing completed game projects made with Python."
    },
    vi: {
        // Header
        nav_home: "Trang chủ",
        nav_video: "Video",
        nav_blog: "Bài viết",
        nav_artwork: "Tác phẩm",
        nav_about: "Giới thiệu",
        nav_shop: "Cửa hàng",

        // Shop Page
        shop_title: "Cửa hàng in 3D",
        shop_description: "Các sản phẩm in 3D chất lượng cao từ nhựa bền, phù hợp để trang trí, làm quà tặng và sử dụng cá nhân.",
        product_placeholder_name: "Sản phẩm mẫu",
        product_placeholder_price: "Liên hệ để biết giá",
        product_btn_details: "Xem chi tiết",

        // Footer
        footer_motto: "Một mọt sách nửa mùa thích chế tạo sản phẩm độc lạ đã từng có tham vọng thống trị thế giới.",
        footer_copyright: "&copy; Bản quyền 2024 bởi Mr.Dajunctic",

        // Home Page
        home_greeting: "Xin chào, là tôi",
        home_intro: "Tôi là một siêu",
        home_description: "Một sinh viên IT gà mờ từng ước mơ trở thành người quyền lực nhất thế giới đã bị xé nát. Khi anh đang phải chật vật mưu sinh thì có gì đó xuất hiện trước mặt anh, “Hệ thống Youtuber cao thủ đã được kích hoạt”, từ đó bước chân theo con đường trở thành đệ nhất thiên hạ Youtuber.",
        home_btn_video: "Xem Video",
        home_btn_blog: "Đọc Blog",
        typed_strings: "['Lập trình viên', 'Youtuber', 'Blogger' ,'Họa sĩ châu Á']",
        home_shop_title: "Ghé thăm cửa hàng",
        home_shop_description: "Khám phá các sản phẩm in 3D độc đáo do tôi thiết kế và chế tạo.",
        home_shop_button: "Xem tất cả sản phẩm",

        // About Page
        about_title: "Về tôi",
        about_job: "Lập trình viên | Sáng tạo nội dung",
        about_p1: "Xin chào! Tôi là Đạt, một sinh viên Công nghệ Thông tin với niềm đam mê bất tận trong việc khám phá thế giới số và biến những ý tưởng thành hiện thực. Hành trình của tôi bắt đầu từ những dòng code đầu tiên và giờ đây đã mở rộng sang cả lĩnh vực sáng tạo nội dung trên YouTube và viết blog.",
        about_p2: "Trang web này là ngôi nhà nhỏ nơi tôi chia sẻ kiến thức về lập trình, những hướng dẫn làm game qua series Pygame, các bài giải LeetCode hàng tuần, và cả những suy ngẫm cá nhân về cuộc sống và công nghệ.",
        about_p3: "Mục tiêu của tôi là xây dựng một cộng đồng nơi mọi người có thể cùng nhau học hỏi, chia sẻ và truyền cảm hứng. Cảm ơn bạn đã ghé thăm, hy vọng bạn sẽ tìm thấy điều gì đó hữu ích và thú vị ở đây!",
        about_name: "Vũ Quý Đạt",
        about_job_title: "Unity Developer",
        about_location: "Hà Nội, Việt Nam",
        about_work_experience: "Kinh nghiệm làm việc",
        about_freelance: "Lập trình viên Game tự do",
        about_projects: "Dự án",
        about_skills: "Kỹ năng",
        about_skills_lang: "Ngôn ngữ lập trình",
        about_skills_tools: "Framework & Công cụ",
        about_skills_ml: "Học máy & AI",
        about_skills_others: "Khác",
        about_education: "Học vấn",
        about_activities_awards: "Giải thưởng",
        about_now: "Hiện tại",
        about_uet: "Trường Đại học Công Nghệ, Đại học Quốc gia Hà Nội",
        about_hsgs: "Trường THPT chuyên Khoa học tự nhiên, Đại học Quốc gia Hà nội",
        about_uet_major: "Chuyên ngành: Khoa học máy tính",
        about_hsgs_major: "Chuyên ngành: Toán",
        award_head: "<strong>Trưởng ban chuyên môn</strong>, Lowie's Leetcode Community, Hà Nội (Tháng 3 2023 - Tháng 7 2024)",
        award_leetcode: "<strong>Top 5% người dùng Leetcode</strong> (2023)",
        award_icpc: "Tham gia ICPC Vietnam Provincial. <strong>Top 20% thí sinh</strong> (2023)",
        award_silver: "<strong>Huy chương Bạc</strong> – Môn Tin học - Kỳ thi học sinh giỏi lần thứ 12 của các trường THPT chuyên khu vực Đồng bằng sông Hồng và Duyên hải phía Bắc (2019)",
        award_bronze1: "<strong>Huy chương Đồng</strong> – Môn Tin học - Olympic HSGS ĐHQGHN (2019)",
        award_bronze2: "<strong>Huy chương Đồng</strong> – Môn Tin học - Kỳ thi học sinh giỏi của các trường THPT chuyên do ĐHQGHN tổ chức (2019)",
        award_violympic: "<strong>Giải Khuyến khích Quốc gia</strong> – Cuộc thi Violympic Toán Tiếng Anh lớp 8, Việt Nam (2017)",
        award_ijso: "<strong>Giải Nhì cấp Thành phố</strong> – Môn Khoa học lớp 9 - Kỳ thi IJSO thành phố Hà Nội (2018)",
        award_math9: "<strong>Giải Khuyến khích cấp Thành phố</strong> – Môn Toán lớp 9 - Kì thi HSG thành phố Hà Nội (2018)",

        // Artwork Page
        artwork_title: "Bộ sưu tập Tác phẩm",
        artwork_description: "Nơi tôi lưu giữ những khoảnh khắc sáng tạo, từ những bản vẽ kỹ thuật số đến các dự án thiết kế nhỏ.",
        artwork_item_title: "Dự án Neon City",
        artwork_item_desc: "Bản concept art - 2024",

        // Blog Page
        blog_title: "Chữa bài Daily Leetcode",
        blog_p1: "Hằng ngày tôi đều làm Leetcode Daily, thứ 7 hàng tuần tôi luôn dành thời gian viết chữa bài với hi vọng có thể truyền cảm hứng cho mọi người rèn luyện sự kỷ luật.",
        blog_p2: "Tham gia ngay",
        blog_p3: "để rèn luyện tư duy thuật toán nào!",
        blog_search_placeholder: "Tìm kiếm bài viết theo tiêu đề...",
        blog_prev: "Prev",
        blog_next: "Next",

        // Video Page
        video_tab_pygame: "Pygame Tutorial",
        video_tab_vlog: "Vlog",
        video_tab_game_projects: "Dự án Game",
        video_desc_pygame: "Series hướng dẫn lập trình game từ cơ bản đến nâng cao với thư viện Pygame của Python.",
        video_desc_vlog: "Chia sẻ những khoảnh khắc trong cuộc sống thường ngày và những chuyến đi của tôi.",
        video_desc_game_projects: "Giới thiệu các dự án game đã hoàn thành được làm bằng Python."
    }
};