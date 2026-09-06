import { VocabularyItem } from '../types';

export const vocabularyData: VocabularyItem[] = [
  // 1. Từ miêu tả cảm xúc
  {
    id: 'v-1',
    word: 'khắc khoải',
    category: 'Từ miêu tả cảm xúc',
    meaning: 'Tâm trạng day dứt, nhớ nhung hoặc lo âu triền miên không nguôi.',
    usageGuide: 'Dùng khi phân tích tâm trạng nhớ thương quê hương, nhớ người thân hoặc nỗi trăn trở của nhân vật.',
    exampleSentence: 'Tiếng thở dài trong đêm của ông Hai gợi lên nỗi nhớ làng khắc khoải, một nỗi đau giằng xé khôn nguôi.',
    synonyms: ['da diết', 'day dứt', 'khôn nguôi', 'bổi hổi'],
    level: 'Khá'
  },
  {
    id: 'v-2',
    word: 'thổn thức',
    category: 'Từ miêu tả cảm xúc',
    meaning: 'Cảm xúc dâng trào mạnh mẽ, nghẹn ngào rung động từ tận đáy lòng.',
    usageGuide: 'Dùng khi miêu tả cảm xúc xúc động mãnh liệt trước một nghĩa cử cao đẹp hoặc nỗi đau xót xa.',
    exampleSentence: 'Chiếc lược ngà chưa kịp trao tay đã khiến trái tim người đọc thổn thức trước tình phụ tử thiêng liêng.',
    synonyms: ['nghẹn ngào', 'bồi hồi', 'xao xuyến', 'rung động'],
    level: 'Cơ bản'
  },
  {
    id: 'v-3',
    word: 'u uẩn',
    category: 'Từ miêu tả cảm xúc',
    meaning: 'Nỗi buồn thầm kín, tích tụ sâu kín trong lòng khó giãi bày cùng ai.',
    usageGuide: 'Dùng khi phân tích nỗi oan khuất của nàng Vũ Nương hay thân phận nàng Kiều chìm nổi.',
    exampleSentence: 'Cái bóng trên vách như kết tinh nỗi u uẩn ngàn đời của người phụ nữ trong xã hội phong kiến hà khắc.',
    synonyms: ['u uất', 'trầm uất', 'u hoài', 'u sầu'],
    level: 'Nâng cao'
  },

  // 2. Từ phân tích nhân vật
  {
    id: 'v-4',
    word: 'kiên trung',
    category: 'Từ phân tích nhân vật',
    meaning: 'Ý chí kiên định, son sắt một lòng, không dao động trước hiểm nguy thử thách.',
    usageGuide: 'Dùng khi ca ngợi phẩm chất của người chiến sĩ cách mạng, anh bộ đội Cụ Hồ hay cô gái thanh niên xung phong.',
    exampleSentence: 'Dưới mưa bom bão đạn ở cao điểm, Phương Định vẫn ngời sáng tinh thần dũng cảm và lòng kiên trung bất khuất.',
    synonyms: ['bất khuất', 'bền gan', 'sắt son', 'vững vàng'],
    level: 'Khá'
  },
  {
    id: 'v-5',
    word: 'thuần hậu',
    category: 'Từ phân tích nhân vật',
    meaning: 'Chất phác, đôn hậu, lương thiện nguyên sơ tự nhiên.',
    usageGuide: 'Dùng khi nhận xét về tâm hồn người nông dân, người bà, người mẹ vùng nông thôn Việt Nam.',
    exampleSentence: 'Vẻ đẹp thuần hậu, mộc mạc của người lính xuất thân từ luống cày gốc rạ làm nên sức mạnh bền bỉ của quân đội nhân dân.',
    synonyms: ['chất phác', 'đôn hậu', 'mộc mạc', 'nguyên sơ'],
    level: 'Khá'
  },
  {
    id: 'v-6',
    word: 'khí phách',
    category: 'Từ phân tích nhân vật',
    meaning: 'Ý chí, cốt cách hiên ngang, dũng cảm phi thường không chịu khuất phục.',
    usageGuide: 'Dùng khi bình luận về phong thái ung dung, bất cần hiểm nguy của những người lính lái xe Trường Sơn.',
    exampleSentence: 'Cái nhìn "ung dung buồng lái ta ngồi / Nhìn đất, nhìn trời, nhìn thẳng" đã tạc nên khí phách hiên ngang của tuổi trẻ thời đại chống Mỹ.',
    synonyms: ['bản lĩnh', 'dũng khí', 'hào khí', 'tư thế'],
    level: 'Nâng cao'
  },

  // 3. Từ phân tích hình ảnh
  {
    id: 'v-7',
    word: 'khắc họa',
    category: 'Từ phân tích hình ảnh',
    meaning: 'Dùng ngôn từ làm hiện lên một hình ảnh, bức chân dung một cách rõ nét, sâu đậm.',
    usageGuide: 'Dùng để thay thế cho từ "thể hiện", "nói lên" khi phân tích một chi tiết hoặc hình ảnh tạo hình.',
    exampleSentence: 'Ngòi bút tài hoa của Chính Hữu đã khắc họa chân thực gương mặt phong trần cùng nụ cười buốt giá của người lính chiến.',
    synonyms: ['tạc nên', 'dựng nên', 'làm nổi bật', 'in đậm'],
    level: 'Khá'
  },
  {
    id: 'v-8',
    word: 'bừng sáng',
    category: 'Từ phân tích hình ảnh',
    meaning: 'Tỏa ra ánh sáng rực rỡ, làm sáng bừng cả không gian hoặc tâm thức.',
    usageGuide: 'Dùng khi phân tích hình tượng bếp lửa, ánh trăng, hoặc một chi tiết đem lại nguồn hy vọng.',
    exampleSentence: 'Ánh trăng đột ngột ùa vào phòng tối đã bừng sáng lương tri, thức tỉnh con người giữa cơn say danh lợi.',
    synonyms: ['soi chiếu', 'thắp sáng', 'rực rỡ', 'chiếu rọi'],
    level: 'Cơ bản'
  },
  {
    id: 'v-9',
    word: 'hàm súc',
    category: 'Từ phân tích hình ảnh',
    meaning: 'Ngắn gọn nhưng chứa đựng dung lượng tư tưởng sâu sắc, nhiều tầng ý nghĩa.',
    usageGuide: 'Dùng khi bình luận về câu thơ đặc biệt, hình ảnh mang tính biểu tượng cao.',
    exampleSentence: 'Hình tượng "Đầu súng trăng treo" là một nét vẽ hàm súc, dung chứa cả hiện thực khốc liệt lẫn khát vọng hòa bình lãng mạn.',
    synonyms: ['cô đọng', 'súc tích', 'đa nghĩa', 'kết tinh'],
    level: 'Nâng cao'
  },

  // 4. Từ phân tích nghệ thuật
  {
    id: 'v-10',
    word: 'đối ứng',
    category: 'Từ phân tích nghệ thuật',
    meaning: 'Sự cân xứng, hài hòa tương hỗ giữa hai vế câu, hai hình ảnh hoặc hai kết cấu.',
    usageGuide: 'Dùng khi phân tích biện pháp đối, điệp hoặc cấu trúc vòng tròn đầu cuối tương ứng trong thơ.',
    exampleSentence: 'Cấu trúc đối ứng giữa "Quê hương anh" và "Làng tôi" nhấn mạnh xuất phát điểm tương đồng của tình đồng chí.',
    synonyms: ['hô ứng', 'tương hỗ', 'đối xứng', 'song hành'],
    level: 'Khá'
  },
  {
    id: 'v-11',
    word: 'biến hóa',
    category: 'Từ phân tích nghệ thuật',
    meaning: 'Thay đổi linh hoạt, không lặp lại một cách đơn điệu.',
    usageGuide: 'Dùng khi nhận xét về nhịp điệu câu thơ, cách gieo vần hoặc điểm nhìn trần thuật.',
    exampleSentence: 'Nhịp thơ năm chữ biến hóa linh hoạt theo từng cung bậc cảm xúc, khi rộn rã reo vui, khi trầm lắng suy tư.',
    synonyms: ['linh hoạt', 'uyển chuyển', 'đa dạng', 'sáng tạo'],
    level: 'Cơ bản'
  },
  {
    id: 'v-12',
    word: 'tài hoa',
    category: 'Từ phân tích nghệ thuật',
    meaning: 'Năng lực sáng tạo nghệ thuật điêu luyện, tinh tế, giàu chất thơ và thẩm mỹ cao.',
    usageGuide: 'Dùng khi khen ngợi bút pháp miêu tả thiên nhiên của Nguyễn Thành Long hay tài năng hội họa trong văn xuôi.',
    exampleSentence: 'Bằng ngòi bút tài hoa và giàu chất hội họa, tác giả đã biến bức tranh thiên nhiên Sa Pa thành một bản giao hưởng màu sắc tuyệt mỹ.',
    synonyms: ['điêu luyện', 'tinh tế', 'bậc thầy', 'sâu sắc'],
    level: 'Nâng cao'
  },

  // 5. Từ nhận xét tác giả
  {
    id: 'v-13',
    word: 'thấu thị',
    category: 'Từ nhận xét tác giả',
    meaning: 'Nhìn thấu suốt tận cội nguồn bên trong tâm hồn và quy luật đời sống.',
    usageGuide: 'Dùng để đánh giá cái nhìn nhân sinh sâu sắc của các nhà văn lớn như Kim Lân, Nam Cao, Nguyễn Dữ.',
    exampleSentence: 'Bằng một cái nhìn thấu thị và đầy trắc ẩn, Kim Lân đã chạm đến những ngõ ngách sâu kín nhất trong tâm lý người nông dân.',
    synonyms: ['nhạy cảm', 'sâu sắc', 'tinh tường', 'minh triết'],
    level: 'Nâng cao'
  },
  {
    id: 'v-14',
    word: 'trắc ẩn',
    category: 'Từ nhận xét tác giả',
    meaning: 'Lòng thương xót chân thành, đồng cảm sâu sắc trước nỗi khổ đau của con người.',
    usageGuide: 'Dùng khi khẳng định tấm lòng nhân đạo, tình yêu thương con người của nhà văn.',
    exampleSentence: 'Trái tim đầy trắc ẩn của Nguyễn Quang Sáng đã nhỏ lệ cùng nhân vật qua từng trang viết về bi kịch chiến tranh.',
    synonyms: ['nhân đạo', 'thương cảm', 'vị tha', 'bao dung'],
    level: 'Khá'
  },

  // 6. Từ nhận xét chủ đề
  {
    id: 'v-15',
    word: 'phổ quát',
    category: 'Từ nhận xét chủ đề',
    meaning: 'Mang tính chất bao quát rộng rãi, đúng với nhiều người, nhiều thế hệ và vượt thời gian.',
    usageGuide: 'Dùng khi khẳng định giá trị nhân văn lâu bền của tác phẩm.',
    exampleSentence: 'Khát vọng cống hiến trong "Mùa xuân nho nhỏ" mang ý nghĩa phổ quát, luôn tươi mới với mọi thế hệ thanh niên.',
    synonyms: ['vĩnh cửu', 'vượt thời gian', 'muôn đời', 'sâu rộng'],
    level: 'Nâng cao'
  },
  {
    id: 'v-16',
    word: 'nhân văn',
    category: 'Từ nhận xét chủ đề',
    meaning: 'Đề cao giá trị phẩm giá con người, bảo vệ quyền sống và hạnh phúc của con người.',
    usageGuide: 'Dùng khi đánh giá chiều sâu tư tưởng của tác phẩm văn học.',
    exampleSentence: 'Giá trị nhân văn sâu sắc của thiên truyện thể hiện ở chỗ tác giả không chỉ xót thương mà còn cất lời ngợi ca phẩm giá ngọc ngà của nhân vật.',
    synonyms: ['nhân đạo', 'cao quý', 'nhân ái', 'hướng thiện'],
    level: 'Cơ bản'
  },

  // 7. Từ chuyển ý
  {
    id: 'v-17',
    word: 'Không dừng lại ở đó',
    category: 'Từ chuyển ý',
    meaning: 'Từ nối dùng để mở rộng thêm luận điểm mới sâu sắc hơn luận điểm trước.',
    usageGuide: 'Đặt ở đầu câu khi bắt đầu phân tích thêm một tầng ý nghĩa hoặc khía cạnh mới của nhân vật.',
    exampleSentence: 'Không dừng lại ở đó, nhà thơ tiếp tục nâng bổng tình cảm cá nhân thành biểu tượng chung cho cả một thời đại anh hùng.',
    synonyms: ['Hơn thế nữa', 'Mặt khác', 'Đặc biệt hơn', 'Đi sâu hơn'],
    level: 'Cơ bản'
  },
  {
    id: 'v-18',
    word: 'Mạch cảm xúc được tiếp nối',
    category: 'Từ chuyển ý',
    meaning: 'Cụm từ chuyển mạch tự nhiên, diễn tả dòng chảy liên tục của tâm trạng người nghệ sĩ.',
    usageGuide: 'Dùng khi chuyển từ phân tích khổ thơ trước sang khổ thơ sau trong bài thơ trữ tình.',
    exampleSentence: 'Mạch cảm xúc được tiếp nối bằng những suy ngẫm triết lý chín muồi về trách nhiệm của mỗi cá nhân trước cộng đồng.',
    synonyms: ['Dòng chảy tâm trạng chuyển biến', 'Từ bức tranh hiện thực, tác giả dẫn lối', 'Khép lại dòng hoài niệm'],
    level: 'Khá'
  },

  // 8. Từ mở đoạn
  {
    id: 'v-19',
    word: 'Dấu ấn sâu đậm nhất',
    category: 'Từ mở đoạn',
    meaning: 'Cụm từ khẳng định nét đặc sắc, trọng tâm thu hút sự chú ý của người đọc.',
    usageGuide: 'Dùng để mở đầu đoạn văn phân tích một chi tiết đắt giá hoặc phẩm chất nổi bật của nhân vật.',
    exampleSentence: 'Dấu ấn sâu đậm nhất làm nên vẻ đẹp tâm hồn anh thanh niên chính là lý tưởng cống hiến thầm lặng và niềm say mê lao động bền bỉ.',
    synonyms: ['Nét đặc sắc nổi bật', 'Điểm sáng nghệ thuật', 'Cội nguồn làm nên sức hút'],
    level: 'Khá'
  },
  {
    id: 'v-20',
    word: 'Đọc thiên truyện, người đọc không khỏi ấn tượng',
    category: 'Từ mở đoạn',
    meaning: 'Cách mở đoạn tạo cảm xúc tự nhiên, kết nối người đọc với tác phẩm.',
    usageGuide: 'Dùng mở đoạn thân bài khi phân tích truyện ngắn hoặc trích đoạn.',
    exampleSentence: 'Đọc thiên truyện, người đọc không khỏi ấn tượng trước nghệ thuật miêu tả tâm lý bậc thầy của ngòi bút Kim Lân.',
    synonyms: ['Lật giở từng trang văn', 'Dừng chân trước tác phẩm', 'Đi qua thi phẩm'],
    level: 'Cơ bản'
  },

  // 9. Từ kết đoạn
  {
    id: 'v-21',
    word: 'đọng lại như một dư ba',
    category: 'Từ kết đoạn',
    meaning: 'Để lại âm vang ngân dài, tiếp tục gợi mở những rung cảm sâu sắc sau khi đọc xong.',
    usageGuide: 'Dùng để kết thúc đoạn văn phân tích, tạo cảm giác lắng đọng thi vị.',
    exampleSentence: 'Hình ảnh giọt long lanh rơi đọng lại như một dư ba trong lòng bạn đọc, ngân nga giai điệu thanh khiết của mùa xuân vĩnh cửu.',
    synonyms: ['ngân vang mãi', 'lắng đọng sâu kín', 'khắc sâu dấu ấn', 'mở ra chân trời mới'],
    level: 'Nâng cao'
  },
  {
    id: 'v-22',
    word: 'Tóm lại, qua ngòi bút',
    category: 'Từ kết đoạn',
    meaning: 'Từ liên kết tổng kết luận điểm đã phân tích trong đoạn.',
    usageGuide: 'Dùng để chốt ý ở câu cuối đoạn văn phân tích nghị luận.',
    exampleSentence: 'Tóm lại, qua ngòi bút chân thực và giàu cảm xúc, tác giả đã dựng nên tượng đài bất tử về người nông dân mặc áo lính.',
    synonyms: ['Khái quát lại', 'Có thể khẳng định', 'Nhìn nhận một cách toàn diện'],
    level: 'Cơ bản'
  },

  // 10. Từ dùng để đánh giá
  {
    id: 'v-23',
    word: 'độc đáo',
    category: 'Từ dùng để đánh giá',
    meaning: 'Có nét riêng biệt, sáng tạo chưa từng thấy ở nơi khác, không trùng lặp.',
    usageGuide: 'Dùng khi đánh giá về nhan đề, hình tượng nghệ thuật hoặc cách xây dựng tình huống.',
    exampleSentence: 'Nhan đề "Bài thơ về tiểu đội xe không kính" là một sáng tạo độc đáo, khẳng định chất thơ vút lên từ hiện thực chiến trường ác liệt.',
    synonyms: ['đặc sắc', 'đột phá', 'mới lạ', 'vô tiền khoáng hậu'],
    level: 'Cơ bản'
  },
  {
    id: 'v-24',
    word: 'kết tinh',
    category: 'Từ dùng để đánh giá',
    meaning: 'Tập trung và đọng lại những gì tinh túy, giá trị nhất của tư tưởng và nghệ thuật.',
    usageGuide: 'Dùng khi bình luận về đỉnh cao nghệ thuật của tác phẩm hoặc tư tưởng của nhà văn.',
    exampleSentence: 'Hình tượng ánh trăng là sự kết tinh của tư tưởng nhân văn sâu sắc và đạo lý sống thủy chung uống nước nhớ nguồn của dân tộc.',
    synonyms: ['hội tụ', 'thăng hoa', 'ngưng đọng', 'đúc kết'],
    level: 'Nâng cao'
  }
];

export const writingComparisons = [
  {
    id: 'comp-1',
    topic: 'Tình cảm của người lính trong bài thơ Đồng chí',
    detailOrQuote: 'Thương nhau tay nắm lấy bàn tay',
    level1Basic: 'Các anh lính nắm tay nhau vì trời rất lạnh và họ thương nhau.',
    level2Fair: 'Hành động nắm tay thể hiện tình cảm đoàn kết, thương yêu gắn bó giữa những người đồng đội khi chịu cảnh rét buốt.',
    level3Good: 'Giữa cái rét căm căm nơi chiến trường, cái nắm tay lặng lẽ của những người lính nông dân chính là sự sẻ chia hơi ấm thể xác và truyền cho nhau ngọn lửa ý chí vượt qua gian khổ.',
    level4Deep: 'Không một lời thề non hẹn biển, cái nắm tay chai sạn của người nông dân mặc áo lính đã trở thành một giao cảm không lời thiêng liêng. Đó là sự giao thoa kỳ diệu giữa hơi ấm sinh học và sức mạnh tinh thần, biến những cá nhân xa lạ thành một khối thống nhất keo sơn, làm nên sức mạnh thần kỳ của quân đội Cụ Hồ.',
    differenceExplanation: 'Câu cơ bản chỉ kể lại sự việc bề mặt. Câu khá đã biết thêm tính từ phẩm chất. Câu tốt phân tích được hai mặt: hơi ấm vật chất và sức mạnh ý chí. Câu có chiều sâu nâng chi tiết lên thành triết lý về sức mạnh con người và thời đại, ngôn từ có nhịp điệu và không sáo rỗng.'
  },
  {
    id: 'comp-2',
    topic: 'Lý tưởng sống của anh thanh niên trong Lặng lẽ Sa Pa',
    detailOrQuote: 'Ta với công việc là đôi, sao gọi là một mình được?',
    level1Basic: 'Anh thanh niên rất chăm chỉ và yêu thích công việc khí tượng của mình.',
    level2Fair: 'Anh coi công việc như bạn đồng hành nên dù sống một mình trên núi cao anh vẫn không cảm thấy cô đơn buồn tẻ.',
    level3Good: 'Bằng quan niệm "ta với công việc là đôi", anh thanh niên đã vượt lên trên sự cô đơn địa lý để tìm thấy niềm vui lao động và ý thức cống hiến cho công cuộc dựng xây đất nước.',
    level4Deep: 'Lời bộc bạch mộc mạc của chàng trai 27 tuổi đã chạm tới chiều sâu của một triết lý nhân sinh tiến bộ: con người chỉ thực sự cô độc khi sống vị kỷ; còn khi đã gắn kết sinh mệnh của mình vào nhịp đập lao động của cộng đồng, sự cô đơn lập tức bị triệt tiêu bởi sợi dây đồng cảm giai cấp và tình yêu lý tưởng.',
    differenceExplanation: 'Ở cấp độ cơ bản, học sinh chỉ nhận xét chung chung "chăm chỉ". Lên cấp độ nâng cao, câu văn giải mã được nghịch lý "sống một mình nhưng không cô đơn" và khái quát thành bài học nhân sinh sâu sắc.'
  }
];
