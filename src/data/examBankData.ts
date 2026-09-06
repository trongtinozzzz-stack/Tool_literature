import { ExamPaper } from '../types';

export const examBankData: ExamPaper[] = [
  {
    id: 'exam-hn-2024',
    title: 'Đề Thi Tuyển Sinh Lớp 10 THPT Môn Ngữ Văn (Đề Minh Họa Chuẩn)',
    provinceOrSchool: 'Sở Giáo Dục & Đào Tạo Hà Nội',
    year: '2024 - 2025',
    targetClass: 'Lớp 9 lên Lớp 10',
    durationMinutes: 120,
    totalScore: 10,
    parts: [
      {
        partTitle: 'PHẦN I: ĐỌC HIỂU & NGHỊ LUẬN VĂN HỌC (6.5 điểm)',
        partType: 'Nghị luận văn học',
        readingPassage: `...Ruộng nương anh gửi bạn thân cày
Gian nhà không mặc kệ gió lung lay
Giếng nước gốc đa nhớ người ra lính.
Anh với tôi biết từng cơn ớn lạnh,
Sốt run người vầng trán ướt mồ hôi.
Áo anh rách vai
Quần tôi có vài mảnh vá
Miệng cười buốt giá
Chân không giày
Thương nhau tay nắm lấy bàn tay.

Đêm nay rừng hoang sương muối
Đứng cạnh bên nhau chờ giặc tới
Đầu súng trăng treo.`,
        readingSource: 'Trích "Đồng chí" - Chính Hữu, Ngữ văn 9',
        questions: [
          {
            id: 'q1-1',
            text: 'Ghi lại năm sáng tác và hoàn cảnh ra đời của bài thơ "Đồng chí".',
            level: 'Nhận biết',
            score: 0.5,
            standardAnswer: 'Bài thơ được sáng tác vào đầu năm 1948, sau chiến dịch Việt Bắc thu đông 1947 khi tác giả cùng đồng đội đánh bại cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc. Lúc này Chính Hữu bị ốm nặng được đồng đội tận tình chăm sóc.',
            analysisGuide: [
              'Nêu đúng mốc thời gian: đầu năm 1948 (0.25đ)',
              'Nêu đúng hoàn cảnh: sau chiến dịch Việt Bắc thu đông 1947, tác giả ốm nặng được đồng đội cứu chữa (0.25đ)'
            ],
            commonMistakes: ['Ghi sai năm sáng tác thành 1954 hoặc thời kỳ chống Mỹ', 'Quên nhắc đến chiến dịch Việt Bắc'],
            similarPracticePrompt: 'Nêu hoàn cảnh sáng tác của bài thơ "Bài thơ về tiểu đội xe không kính" (Phạm Tiến Duật).'
          },
          {
            id: 'q1-2',
            text: 'Chỉ ra và phân tích tác dụng của biện pháp tu từ được sử dụng trong câu thơ: "Giếng nước gốc đa nhớ người ra lính".',
            level: 'Thông hiểu',
            score: 1.0,
            standardAnswer: 'Biện pháp tu từ: Hoán dụ và Nhân hóa. "Giếng nước gốc đa" vừa là hình ảnh quê hương thân thuộc (hoán dụ chỉ người ở lại), vừa biết "nhớ" thương người lính ra đi (nhân hóa). Tác dụng: Thể hiện nỗi nhớ thương da diết, thủy chung của hậu phương dành cho người tiền tuyến; đồng thời cho thấy tâm hồn người lính luôn hướng về làng quê yêu dấu.',
            analysisGuide: [
              'Chỉ ra chính xác biện pháp tu từ: Nhân hóa và Hoán dụ (0.25đ)',
              'Phân tích hình ảnh: Giếng nước gốc đa là biểu tượng quê hương, người hậu phương (0.25đ)',
              'Phân tích tâm trạng hai chiều: Nỗi nhớ của hậu phương và tấm lòng hướng về quê nhà của người chiến sĩ (0.5đ)'
            ],
            commonMistakes: ['Chỉ gọi tên nhân hóa mà bỏ sót hoán dụ', 'Chỉ diễn xuôi nghĩa câu thơ mà không nêu tác dụng biểu cảm'],
            similarPracticePrompt: 'Phân tích nghệ thuật nhân hóa trong câu: "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi" (Sang thu).'
          },
          {
            id: 'q1-3',
            text: 'Từ đoạn trích trên, hãy viết một đoạn văn khoảng 12 - 15 câu theo phép lập luận tổng - phân - hợp làm rõ: Vẻ đẹp của tình đồng chí được tôi luyện trong gian khổ và tỏa sáng nơi chiến trường.',
            level: 'Vận dụng cao',
            score: 3.5,
            standardAnswer: 'Đoạn văn cần đảm bảo cấu trúc Tổng - Phân - Hợp; dẫn chứng chính xác các chi tiết (cơn ớn lạnh, sốt run người, áo rách vai, chân không giày, miệng cười buốt giá, tay nắm lấy bàn tay, đầu súng trăng treo). Phân tích làm nổi bật: Hiện thực chiến trường trần trụi khốc liệt; Tinh thần lạc quan vượt khó; Hơi ấm tình đồng đội keo sơn; Biểu tượng lãng mạn gắn bó hòa bình.',
            analysisGuide: [
              'Đảm bảo hình thức đoạn văn T-P-H, dung lượng 12-15 câu (0.5đ)',
              'Luận điểm 1: Tình đồng chí chia sẻ những gian lao, thiếu thốn tột cùng về vật chất và bệnh tật (1.0đ)',
              'Luận điểm 2: Sức mạnh của tình đồng chí biến gian khổ thành niềm lạc quan, gắn kết qua hành động cảm động (1.0đ)',
              'Luận điểm 3: Sự thăng hoa của tình đồng chí trong biểu tượng "Đầu súng trăng treo" (0.5đ)',
              'Diễn đạt trong sáng, mạch lạc, có sử dụng từ ngữ văn học chuẩn xác (0.5đ)'
            ],
            commonMistakes: ['Viết thành bài văn có ngắt đoạn', 'Chỉ kể lại thơ mà không phân tích từ ngữ nghệ thuật', 'Thiếu câu chủ đề mở đoạn hoặc câu đánh giá kết đoạn'],
            similarPracticePrompt: 'Viết đoạn văn T-P-H phân tích tinh thần lạc quan, dũng cảm của người lính trong "Bài thơ về tiểu đội xe không kính".'
          }
        ]
      },
      {
        partTitle: 'PHẦN II: NGHỊ LUẬN XÃ HỘI (3.5 điểm)',
        partType: 'Nghị luận xã hội',
        readingPassage: `Trong một buổi trò chuyện với thanh thiếu niên, một diễn giả từng chia sẻ: "Đừng bao giờ đợi đến khi cuộc sống hết bão giông mới học cách hạnh phúc. Hãy học cách nhảy múa ngay dưới những cơn mưa."`,
        questions: [
          {
            id: 'q2-1',
            text: 'Theo lời chia sẻ trên, "nhảy múa ngay dưới những cơn mưa" có thể hiểu là gì?',
            level: 'Thông hiểu',
            score: 0.5,
            standardAnswer: '"Cơn mưa" ẩn dụ cho những khó khăn, thử thách, nghịch cảnh trong cuộc sống. "Nhảy múa dưới mưa" là thái độ sống chủ động, tích cực, lạc quan đối mặt và vượt qua thử thách thay vì trốn tránh hay than vãn.',
            analysisGuide: ['Giải thích nghĩa ẩn dụ của cơn mưa và hành động nhảy múa (0.5đ)'],
            commonMistakes: ['Hiểu theo nghĩa đen đi dầm mưa'],
            similarPracticePrompt: 'Giải thích câu nói: "Nghịch cảnh là người thầy vĩ đại nhất của con người."'
          },
          {
            id: 'q2-2',
            text: 'Hãy viết một đoạn văn khoảng 2/3 trang giấy thi (khoảng 200 chữ) bàn về ý nghĩa của thái độ sống tích cực khi đối diện với những khó khăn, thử thách trong học tập và cuộc sống của học sinh lớp 9.',
            level: 'Vận dụng',
            score: 3.0,
            standardAnswer: 'Dàn ý đoạn văn 200 chữ: 1. Nêu vấn đề: Thái độ tích cực là kim chỉ nam giúp vượt qua thử thách. 2. Giải thích: Tích cực là nhìn nhận nghịch cảnh như cơ hội rèn luyện bản lĩnh. 3. Bàn luận ý nghĩa: Giúp con người bình tĩnh tìm giải pháp; giải phóng năng lượng sáng tạo; lan tỏa niềm tin tới người xung quanh. Dẫn chứng: Học sinh nỗ lực ôn thi vào 10, người khuyết tật vượt khó. 4. Phản đề: Phê phán lối sống bi quan, buông xuôi khi gặp thất bại nhỏ. 5. Bài học hành động: Tự rèn luyện ý chí, không chùn bước trước các bài toán khó hay điểm số chưa như ý.',
            analysisGuide: [
              'Cấu trúc đoạn văn hoàn chỉnh, dung lượng khoảng 200 chữ (0.5đ)',
              'Xác định đúng vấn đề nghị luận: Ý nghĩa thái độ sống tích cực (0.5đ)',
              'Triển khai luận điểm rõ ràng, thuyết phục, dẫn chứng thực tế xác đáng (1.25đ)',
              'Có phần mở rộng, phản đề và bài học liên hệ bản thân (0.5đ)',
              'Chính tả, ngữ pháp, diễn đạt lưu loát, giàu cảm xúc (0.25đ)'
            ],
            commonMistakes: ['Viết lan man quá dài thành bài văn', 'Dẫn chứng sáo rỗng hoặc thiếu dẫn chứng thực tế', 'Thiếu liên hệ trách nhiệm bản thân học sinh lớp 9'],
            similarPracticePrompt: 'Viết đoạn văn 200 chữ bàn về tính tự lập của học sinh THCS hiện nay.'
          }
        ]
      }
    ]
  }
];
