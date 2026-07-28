-- =============================================
-- AI 工具导航站种子数据
-- 生成时间: 2025年1月
-- 包含: 10个分类, 30个标签, 50个工具
-- Logo 使用 Google Favicon 服务
-- =============================================

-- ========== 1. 分类数据 (10个) ==========
INSERT INTO category (id, slug, icon, sort_order, name_en, description_en, name_zh, description_zh) VALUES
('cat_chatbot', 'chatbot', '💬', 1, 'AI Chatbots', 'Conversational AI assistants and chatbots', 'AI 聊天机器人', '对话式AI助手和聊天机器人'),
('cat_writing', 'writing', '✍️', 2, 'Writing & Content', 'AI-powered writing assistants and content generation tools', 'AI 写作', 'AI驱动的写作助手和内容生成工具'),
('cat_image', 'image-generation', '🎨', 3, 'Image Generation', 'AI tools for creating and editing images', 'AI 图像生成', 'AI图像创作和编辑工具'),
('cat_video', 'video', '🎬', 4, 'Video & Animation', 'AI video generation, editing and animation tools', 'AI 视频', 'AI视频生成、编辑和动画工具'),
('cat_audio', 'audio-music', '🎵', 5, 'Audio & Music', 'AI music generation, voice synthesis and audio tools', 'AI 音频与音乐', 'AI音乐生成、语音合成和音频工具'),
('cat_coding', 'coding', '💻', 6, 'Coding & Development', 'AI coding assistants and developer tools', 'AI 编程', 'AI编程助手和开发者工具'),
('cat_productivity', 'productivity', '⚡', 7, 'Productivity', 'AI tools to boost your work efficiency', 'AI 效率工具', '提升工作效率的AI工具'),
('cat_research', 'research', '🔬', 8, 'Research & Analysis', 'AI research assistants and data analysis tools', 'AI 研究与分析', 'AI研究助手和数据分析工具'),
('cat_design', 'design', '🎯', 9, 'Design & Creative', 'AI tools for designers and creative professionals', 'AI 设计', '面向设计师和创意专业人士的AI工具'),
('cat_business', 'business', '📊', 10, 'Business & Marketing', 'AI tools for business operations and marketing', 'AI 商业与营销', '商业运营和营销AI工具');

-- ========== 2. 标签数据 (30个) ==========
INSERT INTO tag (id, slug, name_en, name_zh) VALUES
-- 功能标签
('tag_free', 'free', 'Free', '免费'),
('tag_freemium', 'freemium', 'Freemium', '免费增值'),
('tag_paid', 'paid', 'Paid', '付费'),
('tag_open_source', 'open-source', 'Open Source', '开源'),
('tag_api', 'api-available', 'API Available', '提供API'),
-- 技术标签
('tag_gpt', 'gpt-powered', 'GPT Powered', 'GPT驱动'),
('tag_claude', 'claude-powered', 'Claude Powered', 'Claude驱动'),
('tag_diffusion', 'diffusion-model', 'Diffusion Model', '扩散模型'),
('tag_llm', 'llm', 'Large Language Model', '大语言模型'),
-- 用途标签
('tag_beginner', 'beginner-friendly', 'Beginner Friendly', '新手友好'),
('tag_enterprise', 'enterprise', 'Enterprise', '企业级'),
('tag_creator', 'for-creators', 'For Creators', '创作者适用'),
('tag_developer', 'for-developers', 'For Developers', '开发者适用'),
('tag_marketer', 'for-marketers', 'For Marketers', '营销人员适用'),
('tag_student', 'for-students', 'For Students', '学生适用'),
-- 特性标签
('tag_realtime', 'real-time', 'Real-time', '实时'),
('tag_collaborative', 'collaborative', 'Collaborative', '协作'),
('tag_mobile', 'mobile-app', 'Mobile App', '移动应用'),
('tag_browser', 'browser-extension', 'Browser Extension', '浏览器插件'),
('tag_desktop', 'desktop-app', 'Desktop App', '桌面应用'),
-- 输出类型标签
('tag_text', 'text-output', 'Text Output', '文本输出'),
('tag_image_out', 'image-output', 'Image Output', '图像输出'),
('tag_video_out', 'video-output', 'Video Output', '视频输出'),
('tag_audio_out', 'audio-output', 'Audio Output', '音频输出'),
('tag_code_out', 'code-output', 'Code Output', '代码输出'),
-- 热门标签
('tag_trending', 'trending', 'Trending', '热门'),
('tag_new', 'new', 'New', '新上线'),
('tag_popular', 'popular', 'Popular', '受欢迎'),
('tag_editors_choice', 'editors-choice', 'Editor''s Choice', '编辑推荐'),
('tag_best_2025', 'best-of-2025', 'Best of 2025', '2025精选');

-- ========== 3. 工具数据 (50个) ==========
INSERT INTO tool (id, slug, domain, website_url, cover_image_url, logo_url, name_en, description_en, name_zh, description_zh, status) VALUES
-- AI 聊天机器人 (8个)
('tool_chatgpt', 'chatgpt', 'chat.openai.com', 'https://chat.openai.com', NULL, 'https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128', 'ChatGPT', 'OpenAI''s advanced conversational AI assistant powered by GPT-4. Capable of natural conversations, code generation, creative writing, and complex reasoning.', 'ChatGPT', 'OpenAI推出的先进对话式AI助手，由GPT-4驱动。能够进行自然对话、代码生成、创意写作和复杂推理。', 'published'),
('tool_claude', 'claude', 'claude.ai', 'https://claude.ai', NULL, 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128', 'Claude', 'Anthropic''s helpful, harmless, and honest AI assistant. Known for nuanced understanding, long context windows, and thoughtful responses.', 'Claude', 'Anthropic推出的有用、无害、诚实的AI助手。以细腻的理解、长上下文窗口和深思熟虑的回复著称。', 'published'),
('tool_gemini', 'gemini', 'gemini.google.com', 'https://gemini.google.com', NULL, 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128', 'Google Gemini', 'Google''s multimodal AI assistant that can understand text, images, audio, and video. Integrated with Google services.', 'Google Gemini', 'Google的多模态AI助手，能够理解文本、图像、音频和视频。与Google服务深度集成。', 'published'),
('tool_perplexity', 'perplexity', 'perplexity.ai', 'https://perplexity.ai', NULL, 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128', 'Perplexity AI', 'AI-powered search engine that provides direct answers with cited sources. Combines web search with language model capabilities.', 'Perplexity AI', 'AI驱动的搜索引擎，提供带引用来源的直接答案。结合网络搜索与语言模型能力。', 'published'),
('tool_poe', 'poe', 'poe.com', 'https://poe.com', NULL, 'https://www.google.com/s2/favicons?domain=poe.com&sz=128', 'Poe', 'Platform by Quora offering access to multiple AI models including GPT-4, Claude, and custom bots in one interface.', 'Poe', 'Quora推出的平台，在一个界面中提供多个AI模型访问，包括GPT-4、Claude和自定义机器人。', 'published'),
('tool_character', 'character-ai', 'character.ai', 'https://character.ai', NULL, 'https://www.google.com/s2/favicons?domain=character.ai&sz=128', 'Character.AI', 'Create and chat with AI characters. Popular for roleplay, creative storytelling, and entertainment purposes.', 'Character.AI', '创建AI角色并与之聊天。在角色扮演、创意故事讲述和娱乐方面广受欢迎。', 'published'),
('tool_coze', 'coze', 'coze.com', 'https://coze.com', NULL, 'https://www.google.com/s2/favicons?domain=coze.com&sz=128', 'Coze', 'ByteDance''s AI chatbot platform for creating custom AI bots with plugins, workflows, and knowledge bases.', 'Coze', '字节跳动的AI聊天机器人平台，可创建带插件、工作流和知识库的自定义AI机器人。', 'published'),
('tool_pi', 'pi-ai', 'pi.ai', 'https://pi.ai', NULL, 'https://www.google.com/s2/favicons?domain=pi.ai&sz=128', 'Pi', 'Personal AI assistant by Inflection AI, designed for supportive conversations and emotional intelligence.', 'Pi', 'Inflection AI的个人AI助手，专为支持性对话和情商设计。', 'published'),

-- AI 写作 (7个)
('tool_jasper', 'jasper', 'jasper.ai', 'https://jasper.ai', NULL, 'https://www.google.com/s2/favicons?domain=jasper.ai&sz=128', 'Jasper', 'AI content creation platform for marketing teams. Generate blog posts, ads, emails, and social media content at scale.', 'Jasper', '面向营销团队的AI内容创作平台。大规模生成博客文章、广告、邮件和社交媒体内容。', 'published'),
('tool_copy_ai', 'copy-ai', 'copy.ai', 'https://copy.ai', NULL, 'https://www.google.com/s2/favicons?domain=copy.ai&sz=128', 'Copy.ai', 'AI-powered copywriting tool for creating marketing copy, product descriptions, and sales content.', 'Copy.ai', 'AI驱动的文案工具，用于创建营销文案、产品描述和销售内容。', 'published'),
('tool_writesonic', 'writesonic', 'writesonic.com', 'https://writesonic.com', NULL, 'https://www.google.com/s2/favicons?domain=writesonic.com&sz=128', 'Writesonic', 'AI writer for creating SEO-optimized articles, blog posts, and marketing content with fact-checking capabilities.', 'Writesonic', 'AI写作工具，用于创建SEO优化的文章、博客和营销内容，具有事实核查功能。', 'published'),
('tool_notion_ai', 'notion-ai', 'notion.so', 'https://notion.so', NULL, 'https://www.google.com/s2/favicons?domain=notion.so&sz=128', 'Notion AI', 'AI writing assistant integrated into Notion. Helps with drafting, summarizing, brainstorming, and improving writing.', 'Notion AI', '集成在Notion中的AI写作助手。帮助起草、总结、头脑风暴和改进写作。', 'published'),
('tool_grammarly', 'grammarly', 'grammarly.com', 'https://grammarly.com', NULL, 'https://www.google.com/s2/favicons?domain=grammarly.com&sz=128', 'Grammarly', 'AI-powered writing assistant that checks grammar, spelling, punctuation, and offers style improvements.', 'Grammarly', 'AI驱动的写作助手，检查语法、拼写、标点符号，并提供风格改进建议。', 'published'),
('tool_quillbot', 'quillbot', 'quillbot.com', 'https://quillbot.com', NULL, 'https://www.google.com/s2/favicons?domain=quillbot.com&sz=128', 'QuillBot', 'AI paraphrasing and writing tool. Helps rephrase sentences, summarize text, and improve writing clarity.', 'QuillBot', 'AI改写和写作工具。帮助改述句子、总结文本和提高写作清晰度。', 'published'),
('tool_rytr', 'rytr', 'rytr.me', 'https://rytr.me', NULL, 'https://www.google.com/s2/favicons?domain=rytr.me&sz=128', 'Rytr', 'AI writing assistant for generating content in 30+ languages and 20+ tones. Affordable alternative for content creators.', 'Rytr', 'AI写作助手，支持30多种语言和20多种语气生成内容。创作者的经济实惠选择。', 'published'),

-- AI 图像生成 (8个)
('tool_midjourney', 'midjourney', 'midjourney.com', 'https://midjourney.com', NULL, 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=128', 'Midjourney', 'Leading AI art generator known for stunning, artistic image generation. Creates images from text prompts via Discord.', 'Midjourney', '领先的AI艺术生成器，以惊艳的艺术图像生成著称。通过Discord从文本提示创建图像。', 'published'),
('tool_dalle', 'dall-e', 'openai.com', 'https://openai.com/dall-e', NULL, 'https://www.google.com/s2/favicons?domain=openai.com&sz=128', 'DALL·E 3', 'OpenAI''s latest image generation model with exceptional prompt understanding and photorealistic outputs.', 'DALL·E 3', 'OpenAI最新的图像生成模型，具有出色的提示理解能力和逼真的输出效果。', 'published'),
('tool_stable_diffusion', 'stable-diffusion', 'stability.ai', 'https://stability.ai', NULL, 'https://www.google.com/s2/favicons?domain=stability.ai&sz=128', 'Stable Diffusion', 'Open-source image generation model by Stability AI. Can be run locally with full customization.', 'Stable Diffusion', 'Stability AI的开源图像生成模型。可在本地运行并完全自定义。', 'published'),
('tool_leonardo', 'leonardo-ai', 'leonardo.ai', 'https://leonardo.ai', NULL, 'https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128', 'Leonardo AI', 'AI image generator with fine-tuned models for game assets, concept art, and consistent character generation.', 'Leonardo AI', 'AI图像生成器，提供针对游戏资产、概念艺术和一致性角色生成的微调模型。', 'published'),
('tool_ideogram', 'ideogram', 'ideogram.ai', 'https://ideogram.ai', NULL, 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128', 'Ideogram', 'AI image generator excelling at rendering text within images accurately. Great for logos and posters.', 'Ideogram', 'AI图像生成器，擅长准确渲染图像中的文字。适合制作Logo和海报。', 'published'),
('tool_playground', 'playground-ai', 'playground.com', 'https://playground.com', NULL, 'https://www.google.com/s2/favicons?domain=playground.com&sz=128', 'Playground AI', 'Free AI image generator with powerful editing features. Great for beginners with intuitive interface.', 'Playground AI', '免费AI图像生成器，具有强大的编辑功能。界面直观，适合新手。', 'published'),
('tool_canva_ai', 'canva-ai', 'canva.com', 'https://canva.com', NULL, 'https://www.google.com/s2/favicons?domain=canva.com&sz=128', 'Canva AI', 'AI-powered design features within Canva including Magic Design, text-to-image, and background removal.', 'Canva AI', 'Canva中的AI设计功能，包括Magic Design、文生图和背景移除。', 'published'),
('tool_adobe_firefly', 'adobe-firefly', 'firefly.adobe.com', 'https://firefly.adobe.com', NULL, 'https://www.google.com/s2/favicons?domain=firefly.adobe.com&sz=128', 'Adobe Firefly', 'Adobe''s generative AI for creative professionals. Trained on licensed content for commercial safety.', 'Adobe Firefly', 'Adobe面向创意专业人士的生成式AI。在授权内容上训练，商用安全。', 'published'),
('tool_gpt_image_2', 'gpt-image-2', 'gptimage2.asia', 'https://gptimage2.asia/', NULL, 'https://www.google.com/s2/favicons?domain=gptimage2.asia&sz=128', 'GPT Image 2', 'Browser-based AI image generator and editor for marketing, ecommerce, social media, and branded content.', 'GPT Image 2', '基于浏览器的AI图像生成和编辑工具，适合营销、电商、社交媒体和品牌内容。', 'published'),

-- AI 视频 (6个)
('tool_runway', 'runway', 'runway.com', 'https://runway.com', NULL, 'https://www.google.com/s2/favicons?domain=runway.com&sz=128', 'Runway', 'AI video generation and editing platform. Gen-2 creates videos from text or images with cinematic quality.', 'Runway', 'AI视频生成和编辑平台。Gen-2可从文本或图像创建电影级质量的视频。', 'published'),
('tool_pika', 'pika', 'pika.art', 'https://pika.art', NULL, 'https://www.google.com/s2/favicons?domain=pika.art&sz=128', 'Pika', 'AI video generator that creates and edits videos from text prompts. Known for smooth animations and effects.', 'Pika', 'AI视频生成器，从文本提示创建和编辑视频。以流畅的动画和效果著称。', 'published'),
('tool_heygen', 'heygen', 'heygen.com', 'https://heygen.com', NULL, 'https://www.google.com/s2/favicons?domain=heygen.com&sz=128', 'HeyGen', 'AI video generator for creating professional videos with AI avatars. Perfect for marketing and training content.', 'HeyGen', 'AI视频生成器，用AI数字人创建专业视频。适合营销和培训内容。', 'published'),
('tool_synthesia', 'synthesia', 'synthesia.io', 'https://synthesia.io', NULL, 'https://www.google.com/s2/favicons?domain=synthesia.io&sz=128', 'Synthesia', 'Create AI videos with realistic avatars in 120+ languages. Popular for corporate training and marketing.', 'Synthesia', '用逼真数字人创建120多种语言的AI视频。在企业培训和营销领域广受欢迎。', 'published'),
('tool_luma', 'luma-ai', 'lumalabs.ai', 'https://lumalabs.ai', NULL, 'https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128', 'Luma AI', 'AI video generation with Dream Machine. Creates cinematic videos from text and images with impressive quality.', 'Luma AI', 'Dream Machine AI视频生成。从文本和图像创建高质量的电影级视频。', 'published'),
('tool_kling', 'kling-ai', 'klingai.com', 'https://klingai.com', NULL, 'https://www.google.com/s2/favicons?domain=klingai.com&sz=128', 'Kling AI', 'Kuaishou''s AI video generator with impressive motion and physics understanding. Creates realistic videos.', 'Kling AI', '快手的AI视频生成器，具有出色的运动和物理理解能力。创建逼真视频。', 'published'),

-- AI 音频与音乐 (5个)
('tool_elevenlabs', 'elevenlabs', 'elevenlabs.io', 'https://elevenlabs.io', NULL, 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128', 'ElevenLabs', 'Leading AI voice synthesis platform. Creates ultra-realistic voiceovers, dubbing, and voice cloning.', 'ElevenLabs', '领先的AI语音合成平台。创建超逼真的配音、翻译配音和声音克隆。', 'published'),
('tool_suno', 'suno', 'suno.com', 'https://suno.com', NULL, 'https://www.google.com/s2/favicons?domain=suno.com&sz=128', 'Suno', 'AI music generator that creates complete songs with vocals from text prompts. Revolutionary for music creation.', 'Suno', 'AI音乐生成器，从文本提示创建带人声的完整歌曲。音乐创作的革命性工具。', 'published'),
('tool_udio', 'udio', 'udio.com', 'https://udio.com', NULL, 'https://www.google.com/s2/favicons?domain=udio.com&sz=128', 'Udio', 'AI music generation platform creating studio-quality songs with vocals. Strong competitor to Suno.', 'Udio', 'AI音乐生成平台，创建带人声的录音室品质歌曲。Suno的强劲竞争对手。', 'published'),
('tool_murf', 'murf', 'murf.ai', 'https://murf.ai', NULL, 'https://www.google.com/s2/favicons?domain=murf.ai&sz=128', 'Murf', 'AI voice generator for creating professional voiceovers for videos, podcasts, and presentations.', 'Murf', 'AI语音生成器，为视频、播客和演示文稿创建专业配音。', 'published'),
('tool_descript', 'descript', 'descript.com', 'https://descript.com', NULL, 'https://www.google.com/s2/favicons?domain=descript.com&sz=128', 'Descript', 'AI-powered audio and video editor. Edit audio by editing text transcripts. Includes Overdub voice cloning.', 'Descript', 'AI驱动的音视频编辑器。通过编辑文字稿来编辑音频。包含Overdub声音克隆功能。', 'published'),

-- AI 编程 (6个)
('tool_github_copilot', 'github-copilot', 'github.com', 'https://github.com/features/copilot', NULL, 'https://www.google.com/s2/favicons?domain=github.com&sz=128', 'GitHub Copilot', 'AI pair programmer by GitHub and OpenAI. Suggests code completions, functions, and entire files in your IDE.', 'GitHub Copilot', 'GitHub和OpenAI的AI结对编程助手。在IDE中建议代码补全、函数和完整文件。', 'published'),
('tool_cursor', 'cursor', 'cursor.sh', 'https://cursor.sh', NULL, 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=128', 'Cursor', 'AI-first code editor built on VS Code. Deep AI integration for code generation, editing, and chat.', 'Cursor', '以AI为核心的代码编辑器，基于VS Code构建。深度AI集成，支持代码生成、编辑和对话。', 'published'),
('tool_replit', 'replit', 'replit.com', 'https://replit.com', NULL, 'https://www.google.com/s2/favicons?domain=replit.com&sz=128', 'Replit AI', 'Browser-based IDE with AI assistant. Code, deploy, and collaborate with AI-powered code generation.', 'Replit AI', '基于浏览器的IDE，内置AI助手。通过AI驱动的代码生成进行编码、部署和协作。', 'published'),
('tool_codeium', 'codeium', 'codeium.com', 'https://codeium.com', NULL, 'https://www.google.com/s2/favicons?domain=codeium.com&sz=128', 'Codeium', 'Free AI coding assistant supporting 70+ languages. Fast completions with IDE extensions for major editors.', 'Codeium', '免费AI编程助手，支持70多种语言。快速补全，为主流编辑器提供IDE插件。', 'published'),
('tool_tabnine', 'tabnine', 'tabnine.com', 'https://tabnine.com', NULL, 'https://www.google.com/s2/favicons?domain=tabnine.com&sz=128', 'Tabnine', 'AI code assistant with enterprise-grade privacy. Train on your codebase for personalized suggestions.', 'Tabnine', '企业级隐私的AI代码助手。在你的代码库上训练，提供个性化建议。', 'published'),
('tool_claude_code', 'claude-code', 'claude.ai', 'https://claude.ai/code', NULL, 'https://www.google.com/s2/favicons?domain=claude.ai&sz=128', 'Claude Code', 'Anthropic''s agentic coding tool. Natural language coding with full project context understanding.', 'Claude Code', 'Anthropic的代理式编程工具。支持自然语言编程，具有完整的项目上下文理解能力。', 'published'),

-- AI 效率工具 (4个)
('tool_otter', 'otter-ai', 'otter.ai', 'https://otter.ai', NULL, 'https://www.google.com/s2/favicons?domain=otter.ai&sz=128', 'Otter.ai', 'AI meeting assistant that transcribes, summarizes, and creates action items from meetings automatically.', 'Otter.ai', 'AI会议助手，自动转录、总结会议并创建待办事项。', 'published'),
('tool_fireflies', 'fireflies', 'fireflies.ai', 'https://fireflies.ai', NULL, 'https://www.google.com/s2/favicons?domain=fireflies.ai&sz=128', 'Fireflies.ai', 'AI notetaker for meetings. Records, transcribes, and summarizes meetings across all major platforms.', 'Fireflies.ai', '会议AI笔记助手。在所有主流平台上录制、转录和总结会议。', 'published'),
('tool_mem', 'mem-ai', 'mem.ai', 'https://mem.ai', NULL, 'https://www.google.com/s2/favicons?domain=mem.ai&sz=128', 'Mem', 'AI-powered note-taking app that organizes and surfaces relevant information automatically.', 'Mem', 'AI驱动的笔记应用，自动组织和呈现相关信息。', 'published'),
('tool_motion', 'motion', 'usemotion.com', 'https://usemotion.com', NULL, 'https://www.google.com/s2/favicons?domain=usemotion.com&sz=128', 'Motion', 'AI calendar and project management. Automatically schedules tasks and meetings for optimal productivity.', 'Motion', 'AI日历和项目管理工具。自动安排任务和会议以实现最佳生产力。', 'published'),

-- AI 研究与分析 (3个)
('tool_consensus', 'consensus', 'consensus.app', 'https://consensus.app', NULL, 'https://www.google.com/s2/favicons?domain=consensus.app&sz=128', 'Consensus', 'AI-powered academic search engine. Find and understand scientific research with AI summaries.', 'Consensus', 'AI驱动的学术搜索引擎。通过AI摘要查找和理解科学研究。', 'published'),
('tool_elicit', 'elicit', 'elicit.com', 'https://elicit.com', NULL, 'https://www.google.com/s2/favicons?domain=elicit.com&sz=128', 'Elicit', 'AI research assistant that helps find, summarize, and extract data from academic papers.', 'Elicit', 'AI研究助手，帮助查找、总结和提取学术论文中的数据。', 'published'),
('tool_scite', 'scite', 'scite.ai', 'https://scite.ai', NULL, 'https://www.google.com/s2/favicons?domain=scite.ai&sz=128', 'Scite', 'AI tool for evaluating scientific claims. Shows how papers cite each other with supporting or contrasting evidence.', 'Scite', 'AI科学声明评估工具。显示论文如何相互引用，包含支持或对比证据。', 'published'),

-- AI 设计 (3个)
('tool_figma_ai', 'figma-ai', 'figma.com', 'https://figma.com', NULL, 'https://www.google.com/s2/favicons?domain=figma.com&sz=128', 'Figma AI', 'AI features in Figma for generating designs, renaming layers, and creating content automatically.', 'Figma AI', 'Figma中的AI功能，用于生成设计、重命名图层和自动创建内容。', 'published'),
('tool_uizard', 'uizard', 'uizard.io', 'https://uizard.io', NULL, 'https://www.google.com/s2/favicons?domain=uizard.io&sz=128', 'Uizard', 'AI-powered UI design tool. Transform sketches and screenshots into editable designs.', 'Uizard', 'AI驱动的UI设计工具。将草图和截图转换为可编辑的设计。', 'published'),
('tool_magician', 'magician', 'magician.design', 'https://magician.design', NULL, 'https://www.google.com/s2/favicons?domain=magician.design&sz=128', 'Magician', 'AI design assistant plugin for Figma. Generate icons, images, and copy with AI.', 'Magician', 'Figma的AI设计助手插件。用AI生成图标、图像和文案。', 'published');

-- ========== 4. 工具-分类关联 ==========
INSERT INTO tool_category (tool_id, category_id) VALUES
-- 聊天机器人
('tool_chatgpt', 'cat_chatbot'),
('tool_claude', 'cat_chatbot'),
('tool_gemini', 'cat_chatbot'),
('tool_perplexity', 'cat_chatbot'),
('tool_perplexity', 'cat_research'),
('tool_poe', 'cat_chatbot'),
('tool_character', 'cat_chatbot'),
('tool_coze', 'cat_chatbot'),
('tool_pi', 'cat_chatbot'),
-- 写作
('tool_jasper', 'cat_writing'),
('tool_jasper', 'cat_business'),
('tool_copy_ai', 'cat_writing'),
('tool_copy_ai', 'cat_business'),
('tool_writesonic', 'cat_writing'),
('tool_notion_ai', 'cat_writing'),
('tool_notion_ai', 'cat_productivity'),
('tool_grammarly', 'cat_writing'),
('tool_quillbot', 'cat_writing'),
('tool_rytr', 'cat_writing'),
-- 图像生成
('tool_midjourney', 'cat_image'),
('tool_dalle', 'cat_image'),
('tool_stable_diffusion', 'cat_image'),
('tool_leonardo', 'cat_image'),
('tool_ideogram', 'cat_image'),
('tool_playground', 'cat_image'),
('tool_canva_ai', 'cat_image'),
('tool_canva_ai', 'cat_design'),
('tool_adobe_firefly', 'cat_image'),
('tool_adobe_firefly', 'cat_design'),
('tool_gpt_image_2', 'cat_image'),
('tool_gpt_image_2', 'cat_design'),
('tool_gpt_image_2', 'cat_business'),
-- 视频
('tool_runway', 'cat_video'),
('tool_pika', 'cat_video'),
('tool_heygen', 'cat_video'),
('tool_heygen', 'cat_business'),
('tool_synthesia', 'cat_video'),
('tool_synthesia', 'cat_business'),
('tool_luma', 'cat_video'),
('tool_kling', 'cat_video'),
-- 音频
('tool_elevenlabs', 'cat_audio'),
('tool_suno', 'cat_audio'),
('tool_udio', 'cat_audio'),
('tool_murf', 'cat_audio'),
('tool_descript', 'cat_audio'),
('tool_descript', 'cat_video'),
-- 编程
('tool_github_copilot', 'cat_coding'),
('tool_cursor', 'cat_coding'),
('tool_replit', 'cat_coding'),
('tool_codeium', 'cat_coding'),
('tool_tabnine', 'cat_coding'),
('tool_claude_code', 'cat_coding'),
-- 效率
('tool_otter', 'cat_productivity'),
('tool_fireflies', 'cat_productivity'),
('tool_mem', 'cat_productivity'),
('tool_motion', 'cat_productivity'),
-- 研究
('tool_consensus', 'cat_research'),
('tool_elicit', 'cat_research'),
('tool_scite', 'cat_research'),
-- 设计
('tool_figma_ai', 'cat_design'),
('tool_uizard', 'cat_design'),
('tool_magician', 'cat_design');

-- ========== 5. 工具-标签关联 ==========
INSERT INTO tool_tag (tool_id, tag_id) VALUES
-- ChatGPT
('tool_chatgpt', 'tag_freemium'),
('tool_chatgpt', 'tag_gpt'),
('tool_chatgpt', 'tag_llm'),
('tool_chatgpt', 'tag_api'),
('tool_chatgpt', 'tag_popular'),
('tool_chatgpt', 'tag_mobile'),
('tool_chatgpt', 'tag_text'),
-- Claude
('tool_claude', 'tag_freemium'),
('tool_claude', 'tag_claude'),
('tool_claude', 'tag_llm'),
('tool_claude', 'tag_api'),
('tool_claude', 'tag_popular'),
('tool_claude', 'tag_text'),
('tool_claude', 'tag_code_out'),
-- Gemini
('tool_gemini', 'tag_free'),
('tool_gemini', 'tag_llm'),
('tool_gemini', 'tag_api'),
('tool_gemini', 'tag_mobile'),
('tool_gemini', 'tag_text'),
-- Perplexity
('tool_perplexity', 'tag_freemium'),
('tool_perplexity', 'tag_llm'),
('tool_perplexity', 'tag_realtime'),
('tool_perplexity', 'tag_trending'),
('tool_perplexity', 'tag_text'),
-- Poe
('tool_poe', 'tag_freemium'),
('tool_poe', 'tag_llm'),
('tool_poe', 'tag_beginner'),
('tool_poe', 'tag_mobile'),
-- Character.AI
('tool_character', 'tag_free'),
('tool_character', 'tag_llm'),
('tool_character', 'tag_creator'),
('tool_character', 'tag_mobile'),
-- Coze
('tool_coze', 'tag_free'),
('tool_coze', 'tag_llm'),
('tool_coze', 'tag_api'),
('tool_coze', 'tag_developer'),
-- Pi
('tool_pi', 'tag_free'),
('tool_pi', 'tag_llm'),
('tool_pi', 'tag_beginner'),
('tool_pi', 'tag_mobile'),
-- Jasper
('tool_jasper', 'tag_paid'),
('tool_jasper', 'tag_gpt'),
('tool_jasper', 'tag_enterprise'),
('tool_jasper', 'tag_marketer'),
('tool_jasper', 'tag_text'),
-- Copy.ai
('tool_copy_ai', 'tag_freemium'),
('tool_copy_ai', 'tag_gpt'),
('tool_copy_ai', 'tag_marketer'),
('tool_copy_ai', 'tag_text'),
-- Writesonic
('tool_writesonic', 'tag_freemium'),
('tool_writesonic', 'tag_gpt'),
('tool_writesonic', 'tag_marketer'),
('tool_writesonic', 'tag_text'),
-- Notion AI
('tool_notion_ai', 'tag_paid'),
('tool_notion_ai', 'tag_collaborative'),
('tool_notion_ai', 'tag_text'),
('tool_notion_ai', 'tag_popular'),
-- Grammarly
('tool_grammarly', 'tag_freemium'),
('tool_grammarly', 'tag_browser'),
('tool_grammarly', 'tag_desktop'),
('tool_grammarly', 'tag_popular'),
('tool_grammarly', 'tag_text'),
-- QuillBot
('tool_quillbot', 'tag_freemium'),
('tool_quillbot', 'tag_student'),
('tool_quillbot', 'tag_browser'),
('tool_quillbot', 'tag_text'),
-- Rytr
('tool_rytr', 'tag_freemium'),
('tool_rytr', 'tag_beginner'),
('tool_rytr', 'tag_text'),
-- Midjourney
('tool_midjourney', 'tag_paid'),
('tool_midjourney', 'tag_diffusion'),
('tool_midjourney', 'tag_creator'),
('tool_midjourney', 'tag_popular'),
('tool_midjourney', 'tag_image_out'),
('tool_midjourney', 'tag_editors_choice'),
-- DALL-E
('tool_dalle', 'tag_freemium'),
('tool_dalle', 'tag_diffusion'),
('tool_dalle', 'tag_api'),
('tool_dalle', 'tag_image_out'),
('tool_dalle', 'tag_popular'),
-- Stable Diffusion
('tool_stable_diffusion', 'tag_free'),
('tool_stable_diffusion', 'tag_open_source'),
('tool_stable_diffusion', 'tag_diffusion'),
('tool_stable_diffusion', 'tag_developer'),
('tool_stable_diffusion', 'tag_image_out'),
-- Leonardo AI
('tool_leonardo', 'tag_freemium'),
('tool_leonardo', 'tag_diffusion'),
('tool_leonardo', 'tag_creator'),
('tool_leonardo', 'tag_image_out'),
-- Ideogram
('tool_ideogram', 'tag_freemium'),
('tool_ideogram', 'tag_diffusion'),
('tool_ideogram', 'tag_image_out'),
('tool_ideogram', 'tag_trending'),
-- Playground AI
('tool_playground', 'tag_free'),
('tool_playground', 'tag_diffusion'),
('tool_playground', 'tag_beginner'),
('tool_playground', 'tag_image_out'),
-- Canva AI
('tool_canva_ai', 'tag_freemium'),
('tool_canva_ai', 'tag_beginner'),
('tool_canva_ai', 'tag_popular'),
('tool_canva_ai', 'tag_image_out'),
-- Adobe Firefly
('tool_adobe_firefly', 'tag_freemium'),
('tool_adobe_firefly', 'tag_diffusion'),
('tool_adobe_firefly', 'tag_enterprise'),
('tool_adobe_firefly', 'tag_image_out'),
-- GPT Image 2
('tool_gpt_image_2', 'tag_freemium'),
('tool_gpt_image_2', 'tag_gpt'),
('tool_gpt_image_2', 'tag_creator'),
('tool_gpt_image_2', 'tag_marketer'),
('tool_gpt_image_2', 'tag_image_out'),
-- Runway
('tool_runway', 'tag_freemium'),
('tool_runway', 'tag_diffusion'),
('tool_runway', 'tag_creator'),
('tool_runway', 'tag_video_out'),
('tool_runway', 'tag_editors_choice'),
-- Pika
('tool_pika', 'tag_freemium'),
('tool_pika', 'tag_diffusion'),
('tool_pika', 'tag_video_out'),
('tool_pika', 'tag_trending'),
-- HeyGen
('tool_heygen', 'tag_paid'),
('tool_heygen', 'tag_enterprise'),
('tool_heygen', 'tag_marketer'),
('tool_heygen', 'tag_video_out'),
-- Synthesia
('tool_synthesia', 'tag_paid'),
('tool_synthesia', 'tag_enterprise'),
('tool_synthesia', 'tag_video_out'),
('tool_synthesia', 'tag_popular'),
-- Luma AI
('tool_luma', 'tag_freemium'),
('tool_luma', 'tag_diffusion'),
('tool_luma', 'tag_video_out'),
('tool_luma', 'tag_trending'),
-- Kling AI
('tool_kling', 'tag_freemium'),
('tool_kling', 'tag_diffusion'),
('tool_kling', 'tag_video_out'),
('tool_kling', 'tag_new'),
-- ElevenLabs
('tool_elevenlabs', 'tag_freemium'),
('tool_elevenlabs', 'tag_api'),
('tool_elevenlabs', 'tag_creator'),
('tool_elevenlabs', 'tag_audio_out'),
('tool_elevenlabs', 'tag_popular'),
-- Suno
('tool_suno', 'tag_freemium'),
('tool_suno', 'tag_creator'),
('tool_suno', 'tag_audio_out'),
('tool_suno', 'tag_trending'),
('tool_suno', 'tag_editors_choice'),
-- Udio
('tool_udio', 'tag_freemium'),
('tool_udio', 'tag_creator'),
('tool_udio', 'tag_audio_out'),
('tool_udio', 'tag_new'),
-- Murf
('tool_murf', 'tag_freemium'),
('tool_murf', 'tag_marketer'),
('tool_murf', 'tag_audio_out'),
-- Descript
('tool_descript', 'tag_freemium'),
('tool_descript', 'tag_creator'),
('tool_descript', 'tag_audio_out'),
('tool_descript', 'tag_video_out'),
('tool_descript', 'tag_desktop'),
-- GitHub Copilot
('tool_github_copilot', 'tag_paid'),
('tool_github_copilot', 'tag_gpt'),
('tool_github_copilot', 'tag_developer'),
('tool_github_copilot', 'tag_code_out'),
('tool_github_copilot', 'tag_popular'),
('tool_github_copilot', 'tag_editors_choice'),
-- Cursor
('tool_cursor', 'tag_freemium'),
('tool_cursor', 'tag_claude'),
('tool_cursor', 'tag_developer'),
('tool_cursor', 'tag_code_out'),
('tool_cursor', 'tag_trending'),
('tool_cursor', 'tag_desktop'),
-- Replit
('tool_replit', 'tag_freemium'),
('tool_replit', 'tag_llm'),
('tool_replit', 'tag_developer'),
('tool_replit', 'tag_beginner'),
('tool_replit', 'tag_code_out'),
-- Codeium
('tool_codeium', 'tag_free'),
('tool_codeium', 'tag_llm'),
('tool_codeium', 'tag_developer'),
('tool_codeium', 'tag_code_out'),
-- Tabnine
('tool_tabnine', 'tag_freemium'),
('tool_tabnine', 'tag_enterprise'),
('tool_tabnine', 'tag_developer'),
('tool_tabnine', 'tag_code_out'),
-- Claude Code
('tool_claude_code', 'tag_paid'),
('tool_claude_code', 'tag_claude'),
('tool_claude_code', 'tag_developer'),
('tool_claude_code', 'tag_code_out'),
('tool_claude_code', 'tag_new'),
-- Otter.ai
('tool_otter', 'tag_freemium'),
('tool_otter', 'tag_collaborative'),
('tool_otter', 'tag_realtime'),
('tool_otter', 'tag_text'),
('tool_otter', 'tag_mobile'),
-- Fireflies.ai
('tool_fireflies', 'tag_freemium'),
('tool_fireflies', 'tag_collaborative'),
('tool_fireflies', 'tag_enterprise'),
('tool_fireflies', 'tag_text'),
-- Mem
('tool_mem', 'tag_freemium'),
('tool_mem', 'tag_llm'),
('tool_mem', 'tag_text'),
-- Motion
('tool_motion', 'tag_paid'),
('tool_motion', 'tag_collaborative'),
-- Consensus
('tool_consensus', 'tag_freemium'),
('tool_consensus', 'tag_llm'),
('tool_consensus', 'tag_student'),
('tool_consensus', 'tag_text'),
-- Elicit
('tool_elicit', 'tag_freemium'),
('tool_elicit', 'tag_llm'),
('tool_elicit', 'tag_student'),
('tool_elicit', 'tag_text'),
-- Scite
('tool_scite', 'tag_paid'),
('tool_scite', 'tag_student'),
('tool_scite', 'tag_text'),
-- Figma AI
('tool_figma_ai', 'tag_paid'),
('tool_figma_ai', 'tag_collaborative'),
('tool_figma_ai', 'tag_popular'),
('tool_figma_ai', 'tag_image_out'),
-- Uizard
('tool_uizard', 'tag_freemium'),
('tool_uizard', 'tag_beginner'),
('tool_uizard', 'tag_image_out'),
-- Magician
('tool_magician', 'tag_paid'),
('tool_magician', 'tag_image_out'),
('tool_magician', 'tag_text');
