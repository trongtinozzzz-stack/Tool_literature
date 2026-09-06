import { Work } from '../types';

export const worksData: Work[] = [
  {
    id: 'dong-chi',
    title: 'Đồng chí',
    author: 'Chính Hữu',
    authorBio: 'Chính Hữu (1926 - 2007), tên thật là Trần Đình Đắc, là nhà thơ - chiến sĩ tiêu biểu thời kỳ kháng chiến chống Pháp. Thơ ông hàm súc, cô đọng, giàu hình ảnh gợi cảm và cảm xúc dồn nén.',
    year: '1948',
    genre: 'Thơ',
    category: 'Trọng tâm thi vào 10',
    grade: 9,
    coverGradient: 'from-emerald-600 to-teal-800',
    context: 'Sáng tác đầu năm 1948, sau khi tác giả cùng đồng đội tham gia chiến dịch Việt Bắc thu đông 1947 đánh bại cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc. Khi đó Chính Hữu ốm nặng, được đồng đội hết lòng chăm sóc.',
    coreContent: 'Vẻ đẹp chân thực, mộc mạc và cao cả của tình đồng chí, đồng đội gắn bó keo sơn giữa những người lính nông dân trong kháng chiến chống Pháp.',
    theme: 'Tình đồng chí đồng đội gắn bó keo sơn của anh bộ đội Cụ Hồ trong kháng chiến chống Pháp.',
    structure: [
      { part: 'Phần 1', title: '7 câu đầu', content: 'Cơ sở hình thành tình đồng chí bắt nguồn từ sự tương đồng cảnh ngộ, lý tưởng và chia sẻ gian lao.' },
      { part: 'Phần 2', title: '10 câu tiếp', content: 'Những biểu hiện cụ thể, cảm động và sức mạnh của tình đồng chí trong cuộc sống gian khổ nơi chiến trường.' },
      { part: 'Phần 3', title: '3 câu cuối', content: 'Bức tranh biểu tượng đẹp đẽ, thi vị về tình đồng chí: người lính phục kích trong đêm trăng rừng buốt giá.' }
    ],
    importantDetailsSummary: [
      'Quê hương anh nước mặn, đồng chua / Làng tôi nghèo đất cày lên sỏi đá (Sự tương đồng xuất thân)',
      'Súng bên súng, đầu sát bên đầu / Đêm rét chung chăn thành đôi tri kỷ (Sự gắn kết lý tưởng và gian khó)',
      'Đồng chí! (Câu thơ bản lề một từ đặc biệt)',
      'Ruộng nương anh gửi bạn thân cày / Gian nhà không mặc kệ gió lung lay (Tinh thần hy sinh, gửi gắm niềm tin)',
      'Áo anh rách vai / Quần tôi có vài mảnh vá / Miệng cười buốt giá / Chân không giày / Thương nhau tay nắm lấy bàn tay (Hiện thực trần trụi và hơi ấm tình người)',
      'Đầu súng trăng treo (Hình ảnh biểu tượng lãng mạn kết thúc bài thơ)'
    ],
    artisticFeatures: [
      'Ngôn ngữ cô đọng, giản dị, giàu sức khái quát, ngôn từ tự nhiên đậm chất khẩu ngữ nông dân.',
      'Hình ảnh thơ chân thực, không tô vẽ thi vị hóa giả tạo, kết hợp hài hòa với chất trữ tình lãng mạn.',
      'Cấu trúc câu thơ tự do, nhịp điệu biến hóa linh hoạt, tạo điểm nhấn qua câu thơ đặc biệt "Đồng chí!".'
    ],
    examProblems: [
      'Phân tích cơ sở hình thành tình đồng chí ở 7 câu thơ đầu.',
      'Cảm nhận về vẻ đẹp tình đồng chí gắn kết qua hình ảnh "Thương nhau tay nắm lấy bàn tay".',
      'Phân tích ý nghĩa biểu tượng của hình ảnh kết thúc "Đầu súng trăng treo".',
      'Nghị luận xã hội về sức mạnh của tình bạn, sự đoàn kết từ bài thơ Đồng chí.'
    ],
    mindmap: [
      {
        category: 'Chủ đề',
        icon: 'Flame',
        color: 'text-amber-500',
        items: [
          { title: 'Tình đồng chí cách mạng', description: 'Tình cảm mới mẻ của thời đại kháng chiến gắn kết người lính nông dân.' },
          { title: 'Chân dung người lính Cụ Hồ', description: 'Mộc mạc, kiên cường, giàu đức hy sinh và tình yêu nước.' }
        ]
      },
      {
        category: 'Nhân vật',
        icon: 'Users',
        color: 'text-blue-500',
        items: [
          { title: 'Anh lính nông dân mặc áo lính', description: 'Rời luống cày, gốc rạ đi chiến đấu với hành trang tinh thần thanh thản.' },
          { title: 'Cặp đôi tri kỷ "anh" và "tôi"', description: 'Từ hai miền đất xa lạ gắn kết thành một khối thống nhất keo sơn.' }
        ]
      },
      {
        category: 'Chi tiết cốt lõi',
        icon: 'Sparkles',
        color: 'text-purple-500',
        items: [
          { title: 'Đồng chí! (Câu thơ bản lề)', description: 'Chỉ hai tiếng ngắn gọn như một phát hiện xúc động, kết tinh tình cảm của toàn bài.' },
          { title: 'Tay nắm lấy bàn tay', description: 'Cái nắm tay truyền hơi ấm sinh học và sức mạnh tinh thần vượt qua buốt giá.' }
        ]
      },
      {
        category: 'Hình ảnh',
        icon: 'Eye',
        color: 'text-emerald-500',
        items: [
          { title: 'Đầu súng trăng treo', description: 'Sự kết hợp giữa hiện thực khốc liệt (súng) và lãng mạn thanh bình (trăng).' }
        ]
      },
      {
        category: 'Nghệ thuật',
        icon: 'Palette',
        color: 'text-rose-500',
        items: [
          { title: 'Bút pháp hiện thực nghiêm ngặt', description: 'Tả thực cái rách, cái lạnh, bệnh sốt rét rừng không né tránh.' },
          { title: 'Hình ảnh đối xứng tương hỗ', description: 'Quê hương anh / Làng tôi; Áo anh / Quần tôi; Súng bên súng / Đầu sát bên đầu.' }
        ]
      },
      {
        category: 'Thông điệp',
        icon: 'BookOpen',
        color: 'text-sky-500',
        items: [
          { title: 'Sức mạnh đoàn kết', description: 'Tình cảm chân thành là điểm tựa tinh thần tối thượng vượt qua mọi thử thách nghiệt ngã.' }
        ]
      },
      {
        category: 'Dẫn chứng đắt giá',
        icon: 'Quote',
        color: 'text-amber-600',
        items: [
          { title: 'Chính Hữu chia sẻ', description: '"Tôi muốn nói đến tình đồng chí như một tình cảm mới của thời đại, nảy sinh từ bùn lầy quê hương gian khổ."', quote: 'Chính Hữu' }
        ]
      }
    ],
    details: [
      {
        id: 'dc-1',
        workId: 'dong-chi',
        quote: 'Đầu súng trăng treo',
        section: '3 câu cuối bài thơ',
        type: 'hình ảnh',
        tags: ['Biểu tượng', 'Hiện thực và lãng mạn', 'Điểm thi vào 10'],
        analysisTenQuestions: {
          q1_what: 'Đây là câu thơ cuối cùng khép lại bài thơ Đồng chí, đặc tả hình ảnh ánh trăng treo lơ lửng ngay đầu mũi súng của người lính.',
          q2_simpleMeaning: 'Người lính đứng gác trong đêm trăng buốt giá, mũi súng hướng lên trời và nhìn từ xa như thể ánh trăng đang treo lơ lửng ngay đầu mũi súng.',
          q3_whyAuthorUsed: 'Tác giả dùng hình ảnh này để tạo điểm kết thăng hoa đầy thi vị, xua đi cảm giác lạnh giá của rừng hoang sương muối và chiến tranh.',
          q4_whatItExpresses: 'Nó thể hiện sự giao hòa tuyệt mỹ giữa tâm hồn lãng mạn, yêu đời của người lính và nhiệm vụ chiến đấu bảo vệ tổ quốc.',
          q5_characterLink: 'Khắc họa vẻ đẹp tâm hồn lạc quan, ung dung, phong thái nghệ sĩ của người chiến sĩ cách mạng ngay trên tuyến đầu sinh tử.',
          q6_themeLink: 'Nâng bổng tình đồng chí từ gian khổ trần trụi lên tầm cao của lý tưởng cao đẹp và niềm tin tất thắng vào hòa bình.',
          q7_artisticTechnique: 'Nghệ thuật đối lập và hòa hợp: "Súng" (hiện thực, chiến tranh, nhiệm vụ bảo vệ) đối với "Trăng" (thiên nhiên, hòa bình, thi ca, lãng mạn); nhịp 2/2 gợi nhịp lắc nhẹ nhàng.',
          q8_connectionToOther: 'Có thể liên hệ với "Ánh trăng" của Nguyễn Duy, "Vầng trăng vằng vặc giữa trời" trong thơ Bác ở Chiến khu Việt Bắc.',
          q9_examTips: 'Khi thi vào 10, học sinh cần phân tích đủ 2 lớp nghĩa: Nghĩa thực (góc nhìn thị giác của người lính) và Nghĩa biểu tượng (Súng = chiến đấu, Trăng = hòa bình; người lính cầm súng để bảo vệ ánh trăng quê hương).',
          q10_paragraphDraft: 'Câu thơ "Đầu súng trăng treo" khép lại thi phẩm như một nốt nhạc ngân vang đầy thi vị. Không còn là cái lạnh buốt xương của đêm đông rừng Việt Bắc, chỉ còn lại sự thăng hoa của tâm hồn người lính. Sự kết hợp tài tình giữa hai hình ảnh "súng" - biểu tượng cho hiện thực khốc liệt và tinh thần chiến đấu quả cảm, cùng "trăng" - biểu tượng cho hòa bình, cái đẹp và chất thơ lãng mạn đã tạo nên một bức tranh trác tuyệt về người chiến sĩ Cụ Hồ: họ cầm súng hôm nay chính là để gìn giữ vĩnh hằng ánh trăng bình yên cho xứ sở.'
        },
        fiveLevels: {
          level1_simple: 'Hình ảnh anh bộ đội đứng gác trong đêm, mũi súng giương lên trời hướng về phía trăng, nhìn xa như vầng trăng treo ngay trên đầu súng.',
          level2_meaning: 'Hình ảnh thể hiện sự gắn bó giữa người chiến sĩ và thiên nhiên đêm rừng, xua tan cái lạnh giá, làm toát lên sự bình thản trước hiểm nguy.',
          level3_artAndContent: 'Nghệ thuật đối ứng độc đáo giữa Súng (chiến đấu, hiện thực, trần gian) và Trăng (hòa bình, thi ca, vũ trụ). Nhịp thơ 2/2 như nhịp đung đưa ru êm.',
          level4_examTarget: 'Trọng tâm thi vào 10: Phân tích sự hòa quyện giữa chất hiện thực nghiệt ngã và chất lãng mạn bay bổng. Người chiến sĩ cầm chắc tay súng chiến đấu không phải vì hận thù mà vì tình yêu trăng, tình yêu sự sống và hòa bình cho dân tộc.',
          level5_advancedDepth: 'Về mặt thi pháp, đây là một biểu tượng thi ca đạt tới độ cổ điển nhưng mang hơi thở thời đại cách mạng. "Súng" và "Trăng" là hai cực đối xứng của đời sống: hiện thực và mộng tưởng, cái chết và sự sinh thành. Khi "trăng treo" nơi đầu súng, vũ khí sát thương đã được thanh lọc thành công cụ bảo vệ cái đẹp và lẽ sống.'
        }
      },
      {
        id: 'dc-2',
        workId: 'dong-chi',
        quote: 'Thương nhau tay nắm lấy bàn tay',
        section: '10 câu giữa',
        type: 'hành động',
        tags: ['Tình cảm', 'Hành động biểu cảm', 'Ấm áp tình đồng đội'],
        analysisTenQuestions: {
          q1_what: 'Cử chỉ người lính siết chặt tay nhau giữa đêm đông buốt giá trong chiến hào.',
          q2_simpleMeaning: 'Hai người lính cùng nắm tay nhau để truyền hơi ấm cơ thể và động viên nhau.',
          q3_whyAuthorUsed: 'Để khẳng định tình cảm đồng chí không cần lời nói khoa trương mà thể hiện qua hành động giản dị, chân thành nhất.',
          q4_whatItExpresses: 'Tình thương yêu giai cấp, sự đồng cảm sâu xa và truyền cho nhau sức mạnh vượt qua gian khó.',
          q5_characterLink: 'Cho thấy tình cảm mộc mạc, kín đáo nhưng vô cùng sâu sắc của những người lính vốn là nông dân.',
          q6_themeLink: 'Làm nổi bật sức mạnh kỳ diệu của tình đồng đội - cội nguồn sức mạnh giúp người lính chiến thắng cái lạnh và gian khổ.',
          q7_artisticTechnique: 'Từ ngữ mộc mạc, động từ "nắm" dứt khoát giàu sức gợi cảm xúc; cấu trúc nối tiếp truyền dẫn hơi ấm.',
          q8_connectionToOther: 'Liên hệ với cái "bắt tay qua cửa kính vỡ rồi" trong "Bài thơ về tiểu đội xe không kính" của Phạm Tiến Duật.',
          q9_examTips: 'Cần làm rõ cái nắm tay này vừa có giá trị vật chất (truyền hơi ấm chống rét), vừa có giá trị tinh thần (truyền niềm tin, lời thề gắn bó).',
          q10_paragraphDraft: 'Giữa cái lạnh cắt da cắt thịt "chân không giày", "miệng cười buốt giá", hành động "Thương nhau tay nắm lấy bàn tay" bỗng trở thành ngọn lửa sưởi ấm tâm can người lính. Đó không phải là cử chỉ xã giao thông thường, mà là sự truyền dẫn trực tiếp của hơi ấm sinh học và sức mạnh tâm linh. Đôi bàn tay chai sạn của những người nông dân mặc áo lính siết chặt lấy nhau, thay thế cho vạn lời nói, kết tinh thành lời thề keo sơn cùng nhau đi qua những năm tháng máu lửa của cuộc trường chinh vệ quốc.'
        },
        fiveLevels: {
          level1_simple: 'Các anh lính nắm tay nhau để đỡ lạnh và an ủi nhau khi trời rét căm căm.',
          level2_meaning: 'Cái nắm tay chứa đựng tình cảm chân thành, thấu hiểu cảnh ngộ của nhau mà không cần nhiều lời.',
          level3_artAndContent: 'Chữ "thương nhau" đặt ở đầu câu kết hợp động từ "nắm lấy" tạo nên sự liên hoàn của cảm xúc, biến gian khổ thành động lực.',
          level4_examTarget: 'Barem chấm điểm thi: Nhận diện cử chỉ giao cảm không lời; phân tích hai giá trị: truyền hơi ấm thể xác chống chọi "miệng cười buốt giá" và truyền sức mạnh ý chí chiến đấu.',
          level5_advancedDepth: 'Một chi tiết mang tính nhân văn sâu sắc: chiến tranh tàn khốc vắt kiệt thể xác con người, nhưng không thể dập tắt hơi ấm nhân bản. Bàn tay của người lính nắm lấy bàn tay đồng đội chính là sự nối dài của tình nhân ái, biến những cá nhân cô đơn thành một tập thể anh hùng bất khả chiến bại.'
        }
      }
    ]
  },
  {
    id: 'lang-le-sa-pa',
    title: 'Lặng lẽ Sa Pa',
    author: 'Nguyễn Thành Long',
    authorBio: 'Nguyễn Thành Long (1925 - 1991), quê Quảng Nam, là cây bút chuyên về truyện ngắn và ký. Văn phong của ông nhẹ nhàng, trong trẻo, giàu chất thơ và giàu chất họa, đậm đà tình cảm yêu thương con người.',
    year: '1970',
    genre: 'Truyện ngắn',
    category: 'Trọng tâm thi vào 10',
    grade: 9,
    coverGradient: 'from-blue-600 to-indigo-900',
    context: 'Viết mùa hè năm 1970 sau chuyến đi thực tế của tác giả lên Lào Cai. Đây là giai đoạn miền Bắc đang nỗ lực xây dựng CNXH và chi viện cho tiền tuyến lớn miền Nam.',
    coreContent: 'Khắc họa vẻ đẹp của những con người lao động thầm lặng, say mê cống hiến tuổi xuân cho quê hương trên đỉnh Yên Sơn mù sương mây trắng.',
    theme: 'Ca ngợi vẻ đẹp của người lao động mới trong công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc.',
    structure: [
      { part: 'Phần 1', title: 'Mở đầu truyện', content: 'Cuộc gặp gỡ tình cờ trên chuyến xe khách lên Sa Pa qua lời giới thiệu của bác lái xe về người "cô độc nhất thế gian".' },
      { part: 'Phần 2', title: 'Cuộc trò chuyện 30 phút', content: 'Tại trạm khí tượng đỉnh Yên Sơn, anh thanh niên đón khách, chia sẻ về công việc, cuộc sống và suy nghĩ lý tưởng của mình.' },
      { part: 'Phần 3', title: 'Cuộc chia tay', content: 'Phút chia tay cảm động, sự lưu luyến và cảm phục của ông họa sĩ, cô kỹ sư dành cho anh thanh niên và những con người thầm lặng.' }
    ],
    characters: [
      {
        name: 'Anh thanh niên 27 tuổi',
        role: 'Nhân vật chính',
        traits: ['Yêu nghề say mê', 'Tinh thần trách nhiệm cao', 'Hiếu khách, cởi mở', 'Sống ngăn nắp, khiêm tốn', 'Lý tưởng sống cao đẹp']
      },
      {
        name: 'Ông họa sĩ già',
        role: 'Nhân vật quan sát, điểm nhìn nghệ thuật',
        traits: ['Nhạy cảm trước cái đẹp', 'Trăn trở với sứ mệnh nghệ thuật', 'Cảm phục thế hệ trẻ']
      },
      {
        name: 'Cô kỹ sư trẻ',
        role: 'Nhân vật phản chiếu',
        traits: ['Trẻ trung, giàu hoài bão', 'Tìm thấy hướng đi cuộc đời từ tấm gương của anh thanh niên']
      }
    ],
    importantDetailsSummary: [
      'Công việc của cháu là đo gió, đo mưa, đo nắng, tính mây, đo chấn động mặt đất...',
      'Khi ta làm việc, ta với công việc là đôi, sao gọi là một mình được? Huống chi việc của cháu gắn liền với việc của bao anh em, đồng chí dưới kia.',
      'Mình sinh ra là gì, mình đẻ ở đâu, mình vì ai mà làm việc? (Trăn trở triết lý của tuổi 20)',
      'Căn nhà nhỏ gàng gàng, giá sách, bàn con, hoa lay ơn, đàn gà con, ấm chè tươi.',
      'Từ chối được vẽ chân dung để giới thiệu ông kỹ sư vườn rau Sa Pa và nhà nghiên cứu bản đồ sét.'
    ],
    artisticFeatures: [
      'Cốt truyện đơn giản, không gay cấn nhưng giàu chất thơ và dư ba tư tưởng.',
      'Nghệ thuật xây dựng nhân vật qua điểm nhìn của nhân vật khác (ông họa sĩ, bác lái xe, cô kỹ sư).',
      'Ngôn ngữ đối thoại tự nhiên, lời văn trau chuốt, đậm chất hội họa và thi ca trữ tình.'
    ],
    examProblems: [
      'Phân tích vẻ đẹp nhân vật anh thanh niên trong truyện ngắn Lặng lẽ Sa Pa.',
      'Cảm nhận về chất thơ toát lên từ thiên nhiên và tâm hồn con người Sa Pa.',
      'Suy nghĩ về lẽ sống cống hiến thầm lặng của thế hệ trẻ qua nhân vật anh thanh niên.',
      'Ý nghĩa nhan đề tác phẩm "Lặng lẽ Sa Pa".'
    ],
    mindmap: [
      {
        category: 'Chủ đề',
        icon: 'Flame',
        color: 'text-amber-500',
        items: [
          { title: 'Cống hiến thầm lặng', description: 'Những con người làm việc hết mình không màng danh lợi trên đỉnh cao hẻo lánh.' },
          { title: 'Chất thơ cuộc sống mới', description: 'Vẻ đẹp giao hòa giữa thiên nhiên kỳ vĩ và tâm hồn người lao động.' }
        ]
      },
      {
        category: 'Nhân vật',
        icon: 'Users',
        color: 'text-blue-500',
        items: [
          { title: 'Anh thanh niên 27 tuổi', description: 'Trái tim nồng ấm, sống giữa cô đơn nhưng không cô độc.' },
          { title: 'Thế giới những người cống hiến vô danh', description: 'Ông kỹ sư vườn rau thụ phấn su hào, anh cán bộ nghiên cứu sét 11 năm không về cưới vợ.' }
        ]
      },
      {
        category: 'Chi tiết cốt lõi',
        icon: 'Sparkles',
        color: 'text-purple-500',
        items: [
          { title: 'Quan niệm về công việc', description: '"Ta với công việc là đôi, sao gọi là một mình được?"' },
          { title: 'Lời từ chối vẽ tranh', description: 'Sự khiêm tốn tột bậc khi cho rằng đóng góp của mình còn quá nhỏ bé.' }
        ]
      },
      {
        category: 'Hình ảnh',
        icon: 'Eye',
        color: 'text-emerald-500',
        items: [
          { title: 'Bức tranh thiên nhiên Sa Pa', description: 'Nắng luồn qua rặng đào, mây cuộn tròn thành từng cục, cây thông rung rinh dưới ánh nắng.' }
        ]
      },
      {
        category: 'Nghệ thuật',
        icon: 'Palette',
        color: 'text-rose-500',
        items: [
          { title: 'Điểm nhìn trần thuật đa chiều', description: 'Khắc họa nhân vật qua lăng kính người từng trải (ông họa sĩ).' },
          { title: 'Nhan đề đảo ngữ nghệ thuật', description: '"Lặng lẽ" đảo lên đầu nhưng Sa Pa không hề tĩnh lặng mà âm vang nhiệt huyết.' }
        ]
      },
      {
        category: 'Thông điệp',
        icon: 'BookOpen',
        color: 'text-sky-500',
        items: [
          { title: 'Ý nghĩa sự cống hiến', description: 'Hạnh phúc không nằm ở chỗ hưởng thụ mà ở sự dấn thân vì cộng đồng.' }
        ]
      },
      {
        category: 'Dẫn chứng đắt giá',
        icon: 'Quote',
        color: 'text-amber-600',
        items: [
          { title: 'Nguyễn Thành Long', description: '"Sa Pa không chỉ có tuyết rơi và vẻ đẹp tĩnh lặng, Sa Pa có những con người đang ngày đêm làm việc cho đất nước."', quote: 'Nguyễn Thành Long' }
        ]
      }
    ],
    details: [
      {
        id: 'llsp-1',
        workId: 'lang-le-sa-pa',
        quote: 'Khi ta làm việc, ta với công việc là đôi, sao gọi là một mình được? Huống chi việc của cháu gắn liền với việc của bao anh em, đồng chí dưới kia.',
        section: 'Cuộc trò chuyện giữa anh thanh niên và ông họa sĩ',
        type: 'lời nói',
        tags: ['Quan niệm sống', 'Lý tưởng cống hiến', 'Trọng tâm thi vào 10'],
        analysisTenQuestions: {
          q1_what: 'Đây là câu nói bộc bạch chân tình của anh thanh niên khi giải thích với ông họa sĩ về nỗi "cô độc" khi sống một mình trên đỉnh núi cao 2600m.',
          q2_simpleMeaning: 'Anh xem công việc như một người bạn tri kỷ đồng hành, và công việc của anh có ích cho mọi người nên anh không bao giờ cảm thấy lẻ loi.',
          q3_whyAuthorUsed: 'Tác giả đưa chi tiết này nhằm làm sáng tỏ thế giới nội tâm phong phú và triết lý sống tiến bộ của anh thanh niên.',
          q4_whatItExpresses: 'Thể hiện tình yêu nghề sâu sắc, tinh thần trách nhiệm và nhận thức rõ rệt về mối liên hệ hữu cơ giữa cá nhân và tập thể.',
          q5_characterLink: 'Xóa bỏ hoàn toàn định kiến anh là người "thèm người" vì buồn chán; khẳng định anh yêu cuộc sống, có đời sống tinh thần vô cùng vững vàng.',
          q6_themeLink: 'Làm nổi bật chủ đề ca ngợi người lao động mới: sống có lý tưởng, tự nguyện gắn số phận mình vào sự nghiệp chung của non sông.',
          q7_artisticTechnique: 'Câu hỏi tu từ "sao gọi là một mình được?", nghệ thuật nhân hóa công việc thành người bạn "là đôi", giọng điệu tha thiết, khiêm nhường.',
          q8_connectionToOther: 'Liên hệ với câu thơ "Một ngôi sao chẳng sáng đêm / Một thân lúa chín chẳng nên mùa vàng" (Tố Hữu) hay người lính trong "Những ngôi sao xa xôi".',
          q9_examTips: 'Cần phân tích 2 vế câu: Vế 1 (Ta với công việc là đôi -> niềm vui lao động chân chính); Vế 2 (Gắn liền với anh em đồng chí -> trách nhiệm công dân cao cả).',
          q10_paragraphDraft: 'Câu nói mộc mạc của anh thanh niên: "Khi ta làm việc, ta với công việc là đôi, sao gọi là một mình được?" đã mở ra trước mắt người đọc một chân trời triết lý sống thật đẹp đẽ. Sống cô độc trên đỉnh Yên Sơn cao ngút ngàn, đối mặt với mây mù và gió tuyết buốt giá, anh không hề rơi vào bi kịch của sự cô đơn. Bởi lẽ, trong tâm niệm của chàng trai trẻ, công việc khí tượng đo gió đo mưa không phải là gánh nặng mưu sinh, mà đã trở thành người bạn đồng hành, người tri kỷ gắn bó máu thịt. Đẹp hơn thế, anh ý thức sâu sắc rằng từng chỉ số khí tượng mình gửi về lúc 1 giờ sáng hay 4 giờ sáng chính là một mắt xích gắn kết mật thiết với công cuộc sản xuất và chiến đấu của "bao anh em, đồng chí dưới kia". Đó chính là vẻ đẹp của thế hệ thanh niên thời kỳ chống Mỹ: lấy niềm say mê lao động làm lẽ sống, lấy sự cống hiến thầm lặng làm niềm kiêu hãnh của tuổi hai mươi.'
        },
        fiveLevels: {
          level1_simple: 'Anh thanh niên coi công việc như một người bạn thân nên không cảm thấy một mình buồn bã trên núi cao.',
          level2_meaning: 'Lời nói thể hiện tinh thần lạc quan, yêu công việc và niềm vui khi biết công việc của mình có ích cho đất nước.',
          level3_artAndContent: 'Cách nói tự nhiên, dùng từ "là đôi" biến công việc thành bạn đồng hành; kết hợp câu hỏi tu từ khẳng định bản lĩnh làm chủ hoàn cảnh.',
          level4_examTarget: 'Barem điểm thi vào 10: Phân tích lý tưởng sống của thanh niên thời kỳ xây dựng CNXH: gắn bó cá nhân với cộng đồng, cống hiến vô điều kiện, xem lao động là cội nguồn hạnh phúc.',
          level5_advancedDepth: 'Xét dưới góc độ nhân sinh quan, câu nói này là lời giải mẫu mực cho bài toán hiện sinh về nỗi cô đơn của con người. Con người chỉ thực sự cô độc khi tự giam mình trong cái tôi ích kỷ; còn khi đã hòa mình vào nhịp đập lao động của thời đại, sự cô đơn địa lý lập tức bị triệt tiêu bởi sợi dây đồng cảm giai cấp vô hình nhưng bền chặt.'
        }
      }
    ]
  },
  {
    id: 'mua-xuan-nho-nho',
    title: 'Mùa xuân nho nhỏ',
    author: 'Thanh Hải',
    authorBio: 'Thanh Hải (1930 - 1980), tên thật là Đoàn Phan Lôi, quê Thừa Thiên Huế. Ông là nhà thơ gắn bó trọn đời với hai cuộc kháng chiến và nền văn học cách mạng miền Nam.',
    year: '1980',
    genre: 'Thơ',
    category: 'Trọng tâm thi vào 10',
    grade: 9,
    coverGradient: 'from-pink-600 to-rose-800',
    context: 'Được viết vào tháng 11 năm 1980, trên giường bệnh những ngày cuối đời của nhà thơ tại bệnh viện Trung ương Huế, trước khi ông qua đời ít lâu.',
    coreContent: 'Bức tranh mùa xuân thiên nhiên, mùa xuân đất nước tươi đẹp rạo rực và khát vọng tha thiết được dâng hiến một "mùa xuân nho nhỏ" của cuộc đời mình cho tổ quốc.',
    theme: 'Khát vọng sống đẹp, cống hiến khiêm nhường, thầm lặng trọn vẹn cho quê hương đất nước.',
    structure: [
      { part: 'Khổ 1', title: 'Mùa xuân thiên nhiên', content: 'Vẻ đẹp trong trẻo, căng tràn sức sống của mùa xuân xứ Huế qua dòng sông xanh, bông hoa tím biếc và tiếng chim chiền chiện.' },
      { part: 'Khổ 2 - 3', title: 'Mùa xuân đất nước', content: 'Hình ảnh mùa xuân gắn liền với hai lực lượng nòng cốt: người cầm súng bảo vệ và người ra đồng kiến thiết, nhịp điệu hối hả xôn xao.' },
      { part: 'Khổ 4 - 5', title: 'Khát vọng dâng hiến', content: 'Ước nguyện chân thành, khiêm tốn hóa thân thành con chim hót, cành hoa, nốt trầm xao xuyến để dâng hiến cho đời.' },
      { part: 'Khổ 6', title: 'Lời ca ngợi quê hương', content: 'Khúc hát tri ân quê hương xứ Huế mộng mơ qua làn điệu dân ca Nam ai, Nam bình.' }
    ],
    importantDetailsSummary: [
      'Mọc giữa dòng sông xanh / Một bông hoa tím biếc (Nghệ thuật đảo ngữ)',
      'Từng giọt long lanh rơi / Tôi đưa tay tôi hứng (Ẩn dụ chuyển đổi cảm giác)',
      'Mùa xuân người cầm súng / Lộc giắt đầy trên lưng (Hình ảnh biểu tượng sức sống)',
      'Ta làm con chim hót / Ta làm một cành hoa / Ta nhập vào hòa ca / Một nốt trầm xao xuyến (Điệp ngữ xưng hô "Ta")',
      'Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời / Dù là tuổi hai mươi / Dù là khi tóc bạc (Hoán dụ cống hiến suốt đời)'
    ],
    artisticFeatures: [
      'Thể thơ năm chữ giàu nhạc điệu, mang âm hưởng tha thiết của làn điệu dân ca Huế.',
      'Hệ thống hình ảnh tự nhiên, giản dị mà giàu tính hàm súc và biểu tượng cao.',
      'Sự phát triển mạch cảm xúc tự nhiên, nhuần nhuyễn từ cụ thể đến khái quát, từ cảm nhận đến triết lý.'
    ],
    examProblems: [
      'Cảm nhận về bức tranh mùa xuân thiên nhiên đất trời trong khổ thơ đầu bài Mùa xuân nho nhỏ.',
      'Phân tích ước nguyện cống hiến chân thành, tha thiết của nhà thơ trong khổ 4 và 5.',
      'Ý nghĩa của hình ảnh "Một mùa xuân nho nhỏ".',
      'Liên hệ khát vọng cống hiến của Thanh Hải với trách nhiệm của thanh niên hiện nay.'
    ],
    mindmap: [
      {
        category: 'Chủ đề',
        icon: 'Flame',
        color: 'text-amber-500',
        items: [
          { title: 'Mùa xuân đất trời và đất nước', description: 'Sức sống mãnh liệt của thiên nhiên và công cuộc dựng xây bảo vệ tổ quốc.' },
          { title: 'Lẽ sống cống hiến cao đẹp', description: 'Ước nguyện hiến dâng thầm lặng không ồn ào khoa trương.' }
        ]
      },
      {
        category: 'Chi tiết cốt lõi',
        icon: 'Sparkles',
        color: 'text-purple-500',
        items: [
          { title: 'Giọt long lanh rơi', description: 'Giọt âm thanh tiếng chim chiền chiện ngưng đọng thành ngọc sáng lung linh.' },
          { title: 'Một nốt trầm xao xuyến', description: 'Không đòi làm nốt son chói lọi mà chọn nốt trầm hòa quyện nâng đỡ bản hòa ca.' }
        ]
      },
      {
        category: 'Hình ảnh',
        icon: 'Eye',
        color: 'text-emerald-500',
        items: [
          { title: 'Mùa xuân nho nhỏ', description: 'Ẩn dụ độc đáo cho cuộc đời tươi đẹp của mỗi cá nhân dâng cho mùa xuân lớn của non sông.' }
        ]
      },
      {
        category: 'Nghệ thuật',
        icon: 'Palette',
        color: 'text-rose-500',
        items: [
          { title: 'Đổi đại từ xưng hô', description: 'Từ "Tôi" (cá nhân chiêm ngưỡng) sang "Ta" (khát vọng đại diện cho nhiều người).' },
          { title: 'Điệp ngữ cấu trúc', description: '"Ta làm... / Ta làm... / Dù là... / Dù là..." khẳng định ý chí son sắt.' }
        ]
      },
      {
        category: 'Thông điệp',
        icon: 'BookOpen',
        color: 'text-sky-500',
        items: [
          { title: 'Sống là cho đi', description: 'Cống hiến trọn vẹn cả khi tuổi thanh xuân lẫn khi về già, cận kề cái chết.' }
        ]
      },
      {
        category: 'Dẫn chứng đắt giá',
        icon: 'Quote',
        color: 'text-amber-600',
        items: [
          { title: 'Tố Hữu', description: '"Nếu là con chim, chiếc lá / Thì con chim phải hót, chiếc lá phải xanh / Lẽ nào vay mà không có trả / Sống là cho, đâu chỉ nhận riêng mình."', quote: 'Tố Hữu' }
        ]
      }
    ],
    details: [
      {
        id: 'mxnn-1',
        workId: 'mua-xuan-nho-nho',
        quote: 'Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời / Dù là tuổi hai mươi / Dù là khi tóc bạc',
        section: 'Khổ thơ thứ 5',
        type: 'câu thơ',
        tags: ['Khát vọng cống hiến', 'Ẩn dụ biểu tượng', 'Điểm số cao trong thi vào 10'],
        analysisTenQuestions: {
          q1_what: 'Đây là hai câu thơ đúc kết tư tưởng cốt lõi của thi phẩm, sử dụng hình ảnh ẩn dụ sáng tạo "mùa xuân nho nhỏ".',
          q2_simpleMeaning: 'Mỗi con người hãy trở thành một mùa xuân nhỏ tươi đẹp, âm thầm cống hiến cho đời suốt từ thời trẻ đến lúc già.',
          q3_whyAuthorUsed: 'Tác giả viết những câu này khi đang nằm trên giường bệnh đối mặt với cái chết, gửi gắm ước nguyện cuối cùng của đời mình.',
          q4_whatItExpresses: 'Thể hiện lẽ sống cao đẹp: cống hiến khiêm nhường, vô tư, không toan tính vụ lợi, gắn kết cá nhân với vận mệnh dân tộc.',
          q5_characterLink: 'Khắc họa nhân cách trong sáng, tâm hồn thánh thiện và tình yêu đời cháy bỏng của nhà thơ Thanh Hải.',
          q6_themeLink: 'Trực tiếp nâng bài thơ lên tầm cao của triết lý sống nhân sinh cao cả: sống là dâng hiến.',
          q7_artisticTechnique: 'Ẩn dụ "mùa xuân nho nhỏ", từ láy "lặng lẽ", điệp từ "dù là" kết hợp hình ảnh hoán dụ "tuổi hai mươi" và "khi tóc bạc".',
          q8_connectionToOther: 'Liên hệ với anh thanh niên trong "Lặng lẽ Sa Pa" hay quan niệm sống của Tố Hữu trong bài thơ "Một khúc ca xuân".',
          q9_examTips: 'Làm nổi bật tính chất "khiêm tốn" (nho nhỏ, lặng lẽ) và tính chất "bền bỉ, triệt để" (dù tuổi hai mươi, dù khi tóc bạc). Chú ý hoàn cảnh sáng tác đặc biệt trên giường bệnh.',
          q10_paragraphDraft: 'Khổ thơ thứ năm trong "Mùa xuân nho nhỏ" đã chạm đến nơi sâu lắng nhất trong tâm hồn người đọc bằng một triết lý nhân sinh vô cùng giản dị mà cao cả: "Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời". Bằng nghệ thuật ẩn dụ độc đáo, Thanh Hải đã cụ thể hóa cuộc đời của mỗi con người thành một "mùa xuân nho nhỏ" - cái tôi cá nhân nhỏ bé, khiêm nhường nhưng chứa chan nhựa sống và hương sắc tươi thắm. Từ láy "lặng lẽ" đặt ở đầu câu như một lời thề nguyền thầm kín: hiến dâng một cách tự nguyện, không kèn trống ồn ào, không mưu cầu tư lợi hay tán dương. Đẹp đẽ thay, điệp ngữ "dù là" sóng đôi cùng hai mốc thời gian cuộc đời "tuổi hai mươi" - thanh xuân phơi phới và "khi tóc bạc" - tuổi già xế bóng đã khẳng định một tinh thần cống hiến thủy chung, bền bỉ đến hơi thở cuối cùng. Đặt trong hoàn cảnh nhà thơ đang nằm trên giường bệnh đối mặt với giây phút lâm chung, ước nguyện ấy càng bừng sáng vẻ đẹp của một nhân cách thi sĩ - chiến sĩ bất tử cùng thời gian.'
        },
        fiveLevels: {
          level1_simple: 'Tác giả mong muốn đóng góp phần nhỏ bé của mình cho xã hội từ lúc còn trẻ cho đến khi về già một cách thầm lặng.',
          level2_meaning: 'Ý nghĩa của việc cống hiến không cần phải làm những việc vĩ đại đao to búa lớn, mà bắt đầu từ những điều nhỏ bé, chân thành và liên tục.',
          level3_artAndContent: 'Nghệ thuật ẩn dụ chuyển hóa khái niệm thời gian (mùa xuân) thành thực thể có kích thước (nho nhỏ). Điệp ngữ "dù là" tạo âm hưởng khẳng định sắt đá.',
          level4_examTarget: 'Trọng tâm thi vào 10: Phân tích sự đối lập hài hòa giữa cái "nho nhỏ" của cá nhân và cái "đời" rộng lớn; gắn với hoàn cảnh cận kề cái chết của tác giả để thấy được nghị lực phi thường.',
          level5_advancedDepth: 'Về mặt triết mỹ, hình ảnh "mùa xuân nho nhỏ" giải quyết mâu thuẫn muôn thuở giữa cái hữu hạn của đời người và cái vô hạn của vũ trụ. Bằng cách hòa nhập cái tôi vào cái ta chung của cộng đồng, thi sĩ đã tìm thấy sự trường tồn của sinh mệnh nghệ thuật và đạo đức làm người.'
        }
      }
    ]
  },
  {
    id: 'lang',
    title: 'Làng',
    author: 'Kim Lân',
    authorBio: 'Kim Lân (1920 - 2007), tên thật là Nguyễn Văn Tài, quê Bắc Ninh. Ông là cây bút truyện ngắn xuất sắc chuyên viết về nông thôn và người nông dân với sự am hiểu sâu sắc và tình cảm đằm thắm.',
    year: '1948',
    genre: 'Truyện ngắn',
    category: 'Trọng tâm thi vào 10',
    grade: 9,
    coverGradient: 'from-amber-700 to-yellow-900',
    context: 'Sáng tác trong thời kỳ đầu của cuộc kháng chiến chống thực dân Pháp (1948), in lần đầu trên tạp chí Văn nghệ.',
    coreContent: 'Diễn biến tâm lý phức tạp, đau đớn đến tột cùng của ông Hai khi nghe tin làng Chợ Dầu theo giặc, và niềm vui sướng nghẹn ngào khi tin đồn được cải chính.',
    theme: 'Tình yêu làng quê sâu sắc đã thống nhất và hòa quyện bền chặt trong tình yêu đất nước và lòng trung thành với kháng chiến, với Cụ Hồ.',
    structure: [
      { part: 'Phần 1', title: 'Trước khi nghe tin dữ', content: 'Cuộc sống tản cư của ông Hai: luôn nhớ làng da diết, khoe làng và say sưa theo dõi tin tức kháng chiến tại phòng thông tin.' },
      { part: 'Phần 2', title: 'Diễn biến tâm trạng khi nghe tin làng theo giặc', content: 'Cú sốc bàng hoàng, đau đớn, tủi nhục, ám ảnh sợ hãi, cuộc xung đột nội tâm gay gắt và cuộc trò chuyện tâm sự với đứa con út.' },
      { part: 'Phần 3', title: 'Khi tin đồn được cải chính', content: 'Niềm vui mừng khôn xiết, ông Hai đi khoe khắp nơi chuyện "nhà tôi bị giặc đốt nhẵn", khẳng định khí tiết trong sạch của làng Chợ Dầu.' }
    ],
    characters: [
      {
        name: 'Ông Hai',
        role: 'Nhân vật chính',
        traits: ['Nồng nhiệt, chất phác', 'Yêu làng tha thiết', 'Trung thành tuyệt đối với Cụ Hồ', 'Lòng tự trọng cao độ']
      },
      {
        name: 'Bé Húc',
        role: 'Con trai út',
        traits: ['Ngây thơ, chân thật', 'Đại diện cho tiếng lòng son sắt của ông Hai với Cụ Hồ']
      }
    ],
    importantDetailsSummary: [
      'Cổ ông lão nghẹn ắng hẳn lại, da mặt tê rân rân. Ông lão lặng đi, tưởng như đến không thở được.',
      'Làng thì yêu thật, nhưng làng theo Tây mất rồi thì phải thù. (Bước ngoặt nhận thức sâu sắc)',
      'Cuộc trò chuyện với thằng con út: "Ủng hộ Cụ Hồ con nhỉ?" - "Ủng hộ Cụ Hồ muôn năm!"',
      'Tây nó đốt nhà tôi rồi bác ạ! Đốt nhẵn! (Nghịch lý niềm vui tột cùng)'
    ],
    artisticFeatures: [
      'Nghệ thuật miêu tả tâm lý nhân vật bậc thầy qua độc thoại nội tâm, ngoại hình và cử chỉ tinh tế.',
      'Ngôn ngữ nhân vật đậm chất khẩu ngữ Bắc Bộ, sinh động, giàu cá tính.',
      'Tạo tình huống thử thách tâm lý gay cấn, làm bộc lộ chiều sâu nhân cách.'
    ],
    examProblems: [
      'Phân tích diễn biến tâm trạng ông Hai khi nghe tin làng Chợ Dầu theo giặc.',
      'Phân tích cuộc trò chuyện giữa ông Hai và đứa con út (bé Húc).',
      'Ý nghĩa của chi tiết ông Hai vui mừng khoe "Tây nó đốt nhà tôi rồi".',
      'Sự chuyển biến trong nhận thức và tình cảm của người nông dân qua nhân vật ông Hai.'
    ],
    mindmap: [
      {
        category: 'Chủ đề',
        icon: 'Flame',
        color: 'text-amber-500',
        items: [
          { title: 'Tình yêu làng gắn liền yêu nước', description: 'Tình cảm truyền thống được nâng lên thành tình yêu tổ quốc và niềm tin kháng chiến.' }
        ]
      },
      {
        category: 'Nhân vật',
        icon: 'Users',
        color: 'text-blue-500',
        items: [
          { title: 'Ông Hai', description: 'Hình mẫu người nông dân đổi mới trong kháng chiến: dằn vặt vì danh dự dân tộc.' }
        ]
      },
      {
        category: 'Chi tiết cốt lõi',
        icon: 'Sparkles',
        color: 'text-purple-500',
        items: [
          { title: 'Cổ nghẹn ắng lại', description: 'Phản ứng sinh học tức thời biểu thị nỗi bàng hoàng sụp đổ tinh thần.' },
          { title: 'Làng theo Tây thì phải thù', description: 'Quyết định dứt khoát: Đặt vận mệnh đất nước lên trên tình cảm cá nhân.' }
        ]
      },
      {
        category: 'Nghệ thuật',
        icon: 'Palette',
        color: 'text-rose-500',
        items: [
          { title: 'Tình huống truyện độc đáo', description: 'Đặt nhân vật vào tình thế danh dự bị bôi nhọ để thử thách bản lĩnh.' },
          { title: 'Độc thoại nội tâm xót xa', description: 'Những câu tự vấn cật vấn lương tâm đầy xúc động.' }
        ]
      },
      {
        category: 'Thông điệp',
        icon: 'BookOpen',
        color: 'text-sky-500',
        items: [
          { title: 'Khí phách người nông dân', description: 'Sẵn sàng mất hết gia sản vật chất để giữ lấy danh dự và lòng trung trinh với cách mạng.' }
        ]
      },
      {
        category: 'Dẫn chứng đắt giá',
        icon: 'Quote',
        color: 'text-amber-600',
        items: [
          { title: 'Kim Lân', description: '"Tôi hiểu người nông dân vì tôi chính là nông dân. Họ yêu làng như máu thịt, nhưng trên hết họ thấu hiểu ai đem lại độc lập cho họ."', quote: 'Kim Lân' }
        ]
      }
    ],
    details: [
      {
        id: 'l-1',
        workId: 'lang',
        quote: 'Làng thì yêu thật, nhưng làng theo Tây mất rồi thì phải thù.',
        section: 'Đêm dằn vặt nội tâm của ông Hai',
        type: 'lời nói',
        tags: ['Độc thoại nội tâm', 'Xung đột tâm lý', 'Điểm thi vào 10'],
        analysisTenQuestions: {
          q1_what: 'Đây là câu độc thoại dứt khoát của ông Hai trong đêm tối sau những dằn vặt đau đớn khi nghe tin làng Chợ Dầu theo giặc.',
          q2_simpleMeaning: 'Dù rất yêu làng quê nhưng nếu làng phản bội kháng chiến thì ông kiên quyết từ bỏ và căm thù.',
          q3_whyAuthorUsed: 'Để thể hiện bước ngoặt tư tưởng mang tính quyết định của người nông dân thời đại cách mạng.',
          q4_whatItExpresses: 'Sự chiến thắng của tình yêu nước và ý thức giác ngộ chính trị trước tình yêu làng quê có phần cục bộ xưa cũ.',
          q5_characterLink: 'Cho thấy ông Hai là người có bản lĩnh, rạch ròi giữa đúng và sai, trung thành tuyệt đối với cuộc kháng chiến của dân tộc.',
          q6_themeLink: 'Làm sáng tỏ tư tưởng chủ đạo của tác phẩm: tình yêu làng đã được đặt trong mối quan hệ gắn bó hữu cơ và phục tùng tình yêu tổ quốc.',
          q7_artisticTechnique: 'Nghệ thuật diễn tả xung đột nội tâm gay gắt; cấu trúc câu tương phản "yêu thật... nhưng... phải thù" thể hiện quyết định đau đớn nhưng dứt khoát.',
          q8_connectionToOther: 'Liên hệ với sự chuyển biến của anh bộ đội trong "Đồng chí" hay bà mẹ trong "Bếp lửa".',
          q9_examTips: 'Lưu ý phân tích: Đây không phải là sự phản bội làng mà là sự thanh lọc tình cảm. Tình yêu làng chỉ có ý nghĩa khi làng nằm trong lòng tổ quốc độc lập.',
          q10_paragraphDraft: 'Câu độc thoại ngắn gọn mà chứa đựng bao giông bão tâm can: "Làng thì yêu thật, nhưng làng theo Tây mất rồi thì phải thù" đã đánh dấu một bước ngoặt nhận thức mang tính thời đại của ông Hai. Trước đây, tình yêu làng trong ông có phần hồn nhiên, cục bộ; nhưng đứng trước phép thử nghiệt ngã của thời cuộc, ông đã tự mình phân định rạch ròi giữa tình cảm riêng và nghĩa vụ thiêng liêng với non sông. Hai vế câu đối lập nối với nhau bằng liên từ "nhưng" như một nhát dao cắt đứt nỗi dùng dằng đau đớn. Ông chấp nhận mang tiếng là kẻ thù của làng quê máu thịt để giữ trọn lòng trung trinh với Cụ Hồ, với kháng chiến. Chi tiết đã làm nổi bật tầm vóc tinh thần của người nông dân Việt Nam trong kỷ nguyên độc lập: tình yêu làng dù sâu đậm đến đâu cũng phải quy phục và hòa làm một với tình yêu tổ quốc rộng lớn.'
        },
        fiveLevels: {
          level1_simple: 'Ông Hai tự nhủ rằng dù thương làng nhưng nếu làng đi theo giặc thì phải căm thù làng.',
          level2_meaning: 'Thể hiện thái độ dứt khoát, không thể tha thứ cho hành vi phản bội quê hương đất nước.',
          level3_artAndContent: 'Xung đột kịch tính được dồn nén vào trong ý nghĩ; sự giằng xé giữa cái tình (yêu làng) và cái lý (trung thành với đất nước).',
          level4_examTarget: 'Trọng tâm đề thi: Làm rõ sự giác ngộ chính trị của người nông dân kháng chiến. Đất nước là trên hết, bảo vệ kháng chiến là lẽ sống còn.',
          level5_advancedDepth: 'Chi tiết mang tầm vóc triết học về sự chuyển hóa ý thức hệ. Người nông dân Việt Nam từ thân phận nô lệ với tâm lý làng xã khép kín hàng ngàn năm đã vươn lên thành những công dân tự do, ý thức được vận mệnh toàn dân tộc và dám hy sinh tình cảm máu mủ cục bộ vì lý tưởng tự do thiêng liêng.'
        }
      }
    ]
  }
];
