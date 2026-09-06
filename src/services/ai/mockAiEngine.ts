import {
  SentenceUpgradeResult,
  EssayFeedbackResult,
  TenQuestionsAnalysis,
  FiveLayersAnalysis,
  LiteraryDetail
} from '../../types';

export const mockAiEngine = {
  /**
   * Nâng cấp câu văn đơn giản
   */
  async improveSentence(inputSentence: string): Promise<SentenceUpgradeResult> {
    // Artificial latency to simulate thoughtful pedagogical AI processing
    await new Promise(r => setTimeout(r, 650));

    const trimmed = inputSentence.trim();
    const lower = trimmed.toLowerCase();

    // Default adaptive intelligent analysis
    let weakPoints = [
      'Câu dùng động từ/tính từ đơn giản, chưa làm nổi bật được sắc thái tình cảm cụ thể.',
      'Thiếu bối cảnh hoặc điểm tựa từ chi tiết nghệ thuật trong tác phẩm.',
      'Chưa thể hiện được góc nhìn phân tích nghị luận văn học mà mới dừng ở mức nhận xét thông thường.'
    ];

    let naturalVersion = `Qua ngòi bút tinh tế của tác giả, tình yêu quê hương đất nước hiện lên thật giản dị mà sâu lắng.`;
    let imageryVersion = `Tình cảm gắn bó với quê hương đất nước được chưng cất thành những hình ảnh mộc mạc mà thấm thía lòng người.`;
    let examStandardVersion = `Không hô hào khẩu hiệu đao to búa lớn, tác giả đã thể hiện tình cảm tha thiết với quê hương qua những chi tiết chân thực, kết tinh vẻ đẹp tâm hồn người cầm súng.`;
    let explanation = `Câu văn mới đã thay thế tính từ đơn điệu bằng những từ ngữ chỉ rõ phương thức thể hiện ("chưng cất", "kết tinh"), gắn cảm xúc với hình ảnh nghệ thuật, tạo giọng điệu nghị luận chững chạc và giàu sức thuyết phục.`;

    if (lower.includes('yêu quê hương') || lower.includes('quê hương')) {
      naturalVersion = 'Tình yêu quê hương của tác giả được thể hiện một cách tự nhiên qua những hình ảnh thân thuộc, bình dị.';
      imageryVersion = 'Tình yêu quê hương như mạch nguồn ngầm ấm áp, tưới mát từng dòng thơ mộc mạc mà lắng sâu.';
      examStandardVersion = 'Tình yêu quê hương xứ sở không dừng lại ở niềm thương nỗi nhớ thông thường, mà đã kết tinh thành ý thức công dân sâu sắc và trách nhiệm thiêng liêng với non sông.';
      explanation = 'Phương án nâng cấp tránh việc lặp lại từ "rất yêu", thay vào đó làm rõ chiều sâu tình cảm qua hình ảnh mạch nguồn và nâng lên thành trách nhiệm công dân chuẩn mực cho bài thi vào 10.';
    } else if (lower.includes('anh thanh niên') || lower.includes('sa pa')) {
      weakPoints = [
        'Chưa làm nổi bật được nét đẹp cống hiến thầm lặng và tinh thần trách nhiệm.',
        'Nhận xét còn mang tính kể chuyện hơn là phân tích nhân vật.'
      ];
      naturalVersion = 'Anh thanh niên trong truyện là một người trẻ tuổi giàu lòng yêu nghề và hiếu khách.';
      imageryVersion = 'Giữa đỉnh Yên Sơn mù sương mây trắng, ngọn lửa say mê lao động của anh thanh niên vẫn lặng lẽ sưởi ấm cả không gian Sa Pa.';
      examStandardVersion = 'Nhân vật anh thanh niên tiêu biểu cho thế hệ trẻ thời kỳ dựng xây đất nước: sống có lý tưởng cao đẹp, cống hiến thầm lặng và tìm thấy niềm vui trong lao động chân chính.';
      explanation = 'Câu nâng cấp đã đặt nhân vật vào bối cảnh thời đại, dùng từ ngữ chuẩn mực ("cống hiến thầm lặng", "lao động chân chính") để làm nổi bật luận điểm.';
    } else if (lower.includes('ông hai') || lower.includes('làng')) {
      weakPoints = [
        'Chưa thể hiện được sự biến chuyển từ tình yêu làng lên tình yêu nước.',
        'Mới phản ánh được bề mặt tâm lý nhân vật.'
      ];
      naturalVersion = 'Ông Hai là người nông dân luôn gắn bó máu thịt với ngôi làng Chợ Dầu của mình.';
      imageryVersion = 'Nỗi đau đớn đến nghẹn ắng của ông Hai khi nghe tin dữ đã chứng minh tình yêu làng quê tha thiết cồn cào trong huyết quản.';
      examStandardVersion = 'Ở nhân vật ông Hai, tình yêu làng quê tha thiết đã được thanh lọc và thăng hoa thành lòng trung thành tuyệt đối với kháng chiến, với Bác Hồ.';
      explanation = 'Sử dụng các động từ chỉ sự chuyển biến tư tưởng ("thanh lọc", "thăng hoa") làm sáng rõ chủ đề cốt lõi của tác phẩm.';
    }

    return {
      originalSentence: inputSentence,
      weakPoints,
      naturalVersion,
      imageryVersion,
      examStandardVersion,
      explanation,
      warningNotice: 'Lưu ý: Không dùng từ ngữ sáo rỗng hoặc quá hoa mỹ khi làm bài thi. Câu văn cần bám sát dẫn chứng thực tế của tác phẩm!'
    };
  },

  /**
   * Đánh giá và sửa bài văn theo 5 tiêu chí chuẩn đề thi vào 10
   */
  async gradeEssay(essayContent: string, promptTopic?: string): Promise<EssayFeedbackResult> {
    await new Promise(r => setTimeout(r, 900));

    const wordCount = essayContent.trim().split(/\s+/).filter(Boolean).length;

    // Evaluate heuristics
    let contentScore = 7;
    let analysisScore = 6.5;
    let evidenceScore = 7;
    let expressionScore = 7;
    let cohesionScore = 6.5;

    if (wordCount < 80) {
      contentScore = 5.5;
      analysisScore = 5;
      evidenceScore = 5;
      expressionScore = 6;
      cohesionScore = 5.5;
    } else if (wordCount > 250) {
      contentScore = 8;
      analysisScore = 7.5;
      evidenceScore = 8;
      expressionScore = 7.5;
      cohesionScore = 7.5;
    }

    const total = Number(((contentScore + analysisScore + evidenceScore + expressionScore + cohesionScore) / 5).toFixed(1));

    return {
      scores: {
        content: contentScore,
        analysis: analysisScore,
        evidence: evidenceScore,
        expression: expressionScore,
        cohesion: cohesionScore,
        total
      },
      topThreeActions: [
        'Bổ sung dẫn chứng nguyên văn (từ ngữ, câu thơ hoặc hành động cụ thể) thay vì chỉ tóm tắt lại cốt truyện.',
        'Mổ xẻ sâu hơn tác dụng của biện pháp nghệ thuật (tại sao tác giả dùng chi tiết đó, nó gợi cảm xúc gì).',
        'Thay thế các liên từ đơn điệu bằng các cặp từ chuyển ý mượt mà để tăng độ liền mạch giữa các câu.'
      ],
      strengths: [
        'Bài viết nắm được cảm xúc chủ đạo và nội dung cốt lõi của tác phẩm.',
        'Thái độ cảm thụ chân thành, không bị sáo rỗng hay rập khuôn máy móc.',
        'Bố cục có mở ý và câu kết rõ ràng.'
      ],
      critiques: [
        {
          type: 'phân tích chung chung',
          originalSnippet: 'đoạn giữa bài viết',
          problemDesc: 'Ý văn còn mang tính kể lể nội dung, chưa mổ xẻ được từ ngữ đắt giá.',
          solutionSuggestion: 'Hãy chỉ ra một từ láy, một hình ảnh hoặc một động từ then chốt và phân tích tại sao từ đó lại giàu sức gợi.'
        },
        {
          type: 'câu yếu',
          originalSnippet: 'liên kết giữa các câu',
          problemDesc: 'Các câu văn đi liền nhau nhưng thiếu từ nối logic.',
          solutionSuggestion: 'Thêm các từ chuyển ý như: "Không dừng lại ở đó...", "Dấu ấn sâu đậm nhất...", "Mạch cảm xúc được tiếp nối..."'
        }
      ],
      evaluationSummary: {
        structure: 'Bố cục bài viết cơ bản hoàn chỉnh, cần làm nổi bật câu chủ đề mở đoạn.',
        points: 'Luận điểm rõ ràng nhưng cần đào sâu vào chi tiết nghệ thuật thay vì kể việc.',
        evidence: 'Dẫn chứng có trong bài nhưng cần trích dẫn chính xác từ ngữ quan trọng.',
        expressionAndVocab: 'Diễn đạt tự nhiên, tránh lặp từ bằng cách dùng từ đồng nghĩa trong kho vốn từ.'
      },
      stepByStepSelfCorrectionHints: [
        'Bước 1: Đọc lại bài và gạch chân dưới các từ ngữ nghệ thuật bạn đã trích dẫn.',
        'Bước 2: Với mỗi từ ngữ đó, tự trả lời câu hỏi: Từ này giúp người đọc hình dung ra điều gì?',
        'Bước 3: Viết thêm 1 câu liên hệ với hoàn cảnh sáng tác hoặc chủ đề chung để tạo chiều sâu.'
      ],
      suggestedReferenceParagraph: 'Đoạn văn tham khảo: "Qua ngòi bút giàu chất tạo hình và dạt dào cảm xúc, hình tượng nhân vật không chỉ hiện lên chân thực giữa hoàn cảnh chiến trường khốc liệt mà còn tỏa sáng vẻ đẹp tâm hồn kiên cường, giàu đức hy sinh. Bằng việc kết hợp nhuần nhuyễn giữa chi tiết tả thực và hình ảnh biểu tượng, tác giả đã khơi gợi trong lòng người đọc niềm xúc động sâu xa trước vẻ đẹp của con người Việt Nam thời đại chống Mỹ."'
    };
  },

  /**
   * Tạo khung 7 bước biến chi tiết thành đoạn văn
   */
  generateParagraphFramework(detailText: string, userThoughts: string, keywords: string[]) {
    return {
      step1_opening: `Mở ý: Giới thiệu chi tiết "${detailText}" như một điểm sáng nghệ thuật độc đáo trong tác phẩm.`,
      step2_evidence: `Dẫn chứng: Trích dẫn chính xác câu thơ / lời thoại / hình ảnh: "${detailText}".`,
      step3_wordsAnalysis: `Phân tích từ ngữ: Chú ý các từ khóa then chốt (${keywords.join(', ') || 'từ ngữ đặc tả, hình ảnh đối lập'}), khai thác giá trị gợi hình và biểu cảm.`,
      step4_meaning: `Phân tích ý nghĩa: ${userThoughts || 'Làm rõ nội dung hàm ẩn và tâm trạng của nhân vật được bộc lộ qua chi tiết này.'}`,
      step5_art: `Phân tích nghệ thuật: Nhận diện biện pháp tu từ (ẩn dụ, nhân hóa, hoán dụ, tương phản) và nhịp điệu của câu.`,
      step6_evaluation: `Đánh giá: Khẳng định tài năng quan sát tinh tế và tấm lòng trắc ẩn, yêu thương con người của tác giả.`,
      step7_connection: `Liên kết chủ đề: Kết nối chi tiết với tư tưởng chủ đạo của toàn bộ tác phẩm và bài học nhân sinh sâu sắc.`
    };
  },

  /**
   * Chat Socratic với Trợ lý Cô giáo Văn AI
   */
  async askTutorAi(userMessage: string, contextTopic?: string): Promise<{ reply: string; quickReplies: string[]; isSocratic: boolean }> {
    await new Promise(r => setTimeout(r, 600));

    const lower = userMessage.toLowerCase();

    if (lower.includes('giải thích tác phẩm') || lower.includes('đồng chí') || lower.includes('lặng lẽ sa pa')) {
      return {
        reply: `Chào em! Để hiểu sâu tác phẩm mà không bị học vẹt, cô muốn hỏi em trước một câu nhé:\n\n👉 Theo em, điều gì làm nên sức mạnh giúp người lính trong "Đồng chí" (hoặc anh thanh niên trong "Lặng lẽ Sa Pa") vượt qua được những thiếu thốn, buốt giá hay cô đơn của hoàn cảnh? Em hãy thử nêu một hình ảnh mà em nhớ nhất xem nào!`,
        quickReplies: ['Hình ảnh tay nắm lấy bàn tay', 'Hình ảnh Đầu súng trăng treo', 'Công việc đo gió đo mưa lúc 1h sáng'],
        isSocratic: true
      };
    }

    if (lower.includes('tay nắm lấy bàn tay')) {
      return {
        reply: `Rất chính xác! Đó là một chi tiết vô cùng đắt giá. \n\nBây giờ em hãy suy nghĩ sâu hơn một chút:\nCái nắm tay ấy diễn ra trong hoàn cảnh nào? (Gợi ý: chú ý câu thơ trước đó "Chân không giày / Miệng cười buốt giá"). Nó mang lại điều gì cho người lính?`,
        quickReplies: ['Truyền hơi ấm chống rét', 'Động viên tinh thần chiến đấu', 'Cô gợi ý cho em viết thành đoạn nhé!'],
        isSocratic: true
      };
    }

    if (lower.includes('giúp em viết đoạn') || lower.includes('viết đoạn')) {
      return {
        reply: `Để viết một đoạn văn nghị luận sắc bén đạt điểm 8+ vào lớp 10, cô khuyên em nên áp dụng cấu trúc 7 bước:\n1. Mở ý giới thiệu chi tiết\n2. Dẫn chứng chính xác\n3. Phân tích từ ngữ\n4. Phân tích ý nghĩa\n5. Bình nghệ thuật\n6. Đánh giá tài năng tác giả\n7. Liên kết chủ đề.\n\nBây giờ, em muốn viết đoạn văn về tác phẩm nào? Hãy gửi cho cô chi tiết em muốn phân tích nhé!`,
        quickReplies: ['Chi tiết Đầu súng trăng treo', 'Chi tiết Mùa xuân nho nhỏ', 'Chi tiết Làng thì yêu thật nhưng...'],
        isSocratic: false
      };
    }

    if (lower.includes('cho em từ hay') || lower.includes('từ vựng')) {
      return {
        reply: `Thay vì dùng những từ quen thuộc như "nói lên", "rất hay", em có thể thử dùng các từ này nhé:\n\n✨ Thay cho "thể hiện": *khắc họa, kết tinh, làm nổi bật, soi chiếu, chưng cất*.\n✨ Nhận xét về tác giả: *ngòi bút tài hoa, cái nhìn thấu thị, trái tim đầy trắc ẩn*.\n✨ Khi chuyển ý: *Mạch cảm xúc được tiếp nối bằng...*, *Không dừng lại ở đó...*\n\nEm có muốn thử đặt câu với một trong các từ này không?`,
        quickReplies: ['Thử đặt câu với "kết tinh"', 'Thử đặt câu với "thấu thị"', 'Xem toàn bộ Sổ tay vốn từ'],
        isSocratic: true
      };
    }

    // Default pedagogic response
    return {
      reply: `Cô đã đọc câu hỏi của em: "${userMessage}".\n\nTrong môn Văn thi vào 10, điều quan trọng nhất là đi từ dẫn chứng cụ thể của văn bản, rồi mới rút ra nhận xét. Em đừng ngần ngại đưa ra suy nghĩ chân thật của mình nhé. Em muốn cô gợi mở thêm về góc độ nào: Bối cảnh, Phân tích chi tiết hay Kỹ năng viết đoạn?`,
      quickReplies: ['Phân tích chi tiết', 'Kỹ năng viết đoạn văn', 'Xem đề thi thử vào 10'],
      isSocratic: true
    };
  }
};
