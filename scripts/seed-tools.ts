#!/usr/bin/env tsx
/**
 * AI 工具种子数据导入脚本
 *
 * 用法:
 * pnpm seed:tools
 *
 * 功能:
 * - 导入 10 个分类
 * - 导入 30 个标签
 * - 导入 50 个 AI 工具
 * - 建立工具-分类、工具-标签关联
 */

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import { resolve } from "path";
import { tool, category, tag, toolCategory, toolTag } from "../src/lib/db/schema";

// 加载环境变量
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

// ========== 种子数据 ==========

const categoriesData = [
  { id: 'cat_chatbot', slug: 'chatbot', icon: '💬', sortOrder: 1, nameEn: 'AI Chatbots', descriptionEn: 'Conversational AI assistants and chatbots', nameZh: 'AI 聊天机器人', descriptionZh: '对话式AI助手和聊天机器人' },
  { id: 'cat_writing', slug: 'writing', icon: '✍️', sortOrder: 2, nameEn: 'Writing & Content', descriptionEn: 'AI-powered writing assistants and content generation tools', nameZh: 'AI 写作', descriptionZh: 'AI驱动的写作助手和内容生成工具' },
  { id: 'cat_image', slug: 'image-generation', icon: '🎨', sortOrder: 3, nameEn: 'Image Generation', descriptionEn: 'AI tools for creating and editing images', nameZh: 'AI 图像生成', descriptionZh: 'AI图像创作和编辑工具' },
  { id: 'cat_video', slug: 'video', icon: '🎬', sortOrder: 4, nameEn: 'Video & Animation', descriptionEn: 'AI video generation, editing and animation tools', nameZh: 'AI 视频', descriptionZh: 'AI视频生成、编辑和动画工具' },
  { id: 'cat_audio', slug: 'audio-music', icon: '🎵', sortOrder: 5, nameEn: 'Audio & Music', descriptionEn: 'AI music generation, voice synthesis and audio tools', nameZh: 'AI 音频与音乐', descriptionZh: 'AI音乐生成、语音合成和音频工具' },
  { id: 'cat_coding', slug: 'coding', icon: '💻', sortOrder: 6, nameEn: 'Coding & Development', descriptionEn: 'AI coding assistants and developer tools', nameZh: 'AI 编程', descriptionZh: 'AI编程助手和开发者工具' },
  { id: 'cat_productivity', slug: 'productivity', icon: '⚡', sortOrder: 7, nameEn: 'Productivity', descriptionEn: 'AI tools to boost your work efficiency', nameZh: 'AI 效率工具', descriptionZh: '提升工作效率的AI工具' },
  { id: 'cat_research', slug: 'research', icon: '🔬', sortOrder: 8, nameEn: 'Research & Analysis', descriptionEn: 'AI research assistants and data analysis tools', nameZh: 'AI 研究与分析', descriptionZh: 'AI研究助手和数据分析工具' },
  { id: 'cat_design', slug: 'design', icon: '🎯', sortOrder: 9, nameEn: 'Design & Creative', descriptionEn: 'AI tools for designers and creative professionals', nameZh: 'AI 设计', descriptionZh: '面向设计师和创意专业人士的AI工具' },
  { id: 'cat_business', slug: 'business', icon: '📊', sortOrder: 10, nameEn: 'Business & Marketing', descriptionEn: 'AI tools for business operations and marketing', nameZh: 'AI 商业与营销', descriptionZh: '商业运营和营销AI工具' },
];

const tagsData = [
  // 功能标签
  { id: 'tag_free', slug: 'free', nameEn: 'Free', nameZh: '免费' },
  { id: 'tag_freemium', slug: 'freemium', nameEn: 'Freemium', nameZh: '免费增值' },
  { id: 'tag_paid', slug: 'paid', nameEn: 'Paid', nameZh: '付费' },
  { id: 'tag_open_source', slug: 'open-source', nameEn: 'Open Source', nameZh: '开源' },
  { id: 'tag_api', slug: 'api-available', nameEn: 'API Available', nameZh: '提供API' },
  // 技术标签
  { id: 'tag_gpt', slug: 'gpt-powered', nameEn: 'GPT Powered', nameZh: 'GPT驱动' },
  { id: 'tag_claude', slug: 'claude-powered', nameEn: 'Claude Powered', nameZh: 'Claude驱动' },
  { id: 'tag_diffusion', slug: 'diffusion-model', nameEn: 'Diffusion Model', nameZh: '扩散模型' },
  { id: 'tag_llm', slug: 'llm', nameEn: 'Large Language Model', nameZh: '大语言模型' },
  // 用途标签
  { id: 'tag_beginner', slug: 'beginner-friendly', nameEn: 'Beginner Friendly', nameZh: '新手友好' },
  { id: 'tag_enterprise', slug: 'enterprise', nameEn: 'Enterprise', nameZh: '企业级' },
  { id: 'tag_creator', slug: 'for-creators', nameEn: 'For Creators', nameZh: '创作者适用' },
  { id: 'tag_developer', slug: 'for-developers', nameEn: 'For Developers', nameZh: '开发者适用' },
  { id: 'tag_marketer', slug: 'for-marketers', nameEn: 'For Marketers', nameZh: '营销人员适用' },
  { id: 'tag_student', slug: 'for-students', nameEn: 'For Students', nameZh: '学生适用' },
  // 特性标签
  { id: 'tag_realtime', slug: 'real-time', nameEn: 'Real-time', nameZh: '实时' },
  { id: 'tag_collaborative', slug: 'collaborative', nameEn: 'Collaborative', nameZh: '协作' },
  { id: 'tag_mobile', slug: 'mobile-app', nameEn: 'Mobile App', nameZh: '移动应用' },
  { id: 'tag_browser', slug: 'browser-extension', nameEn: 'Browser Extension', nameZh: '浏览器插件' },
  { id: 'tag_desktop', slug: 'desktop-app', nameEn: 'Desktop App', nameZh: '桌面应用' },
  // 输出类型标签
  { id: 'tag_text', slug: 'text-output', nameEn: 'Text Output', nameZh: '文本输出' },
  { id: 'tag_image_out', slug: 'image-output', nameEn: 'Image Output', nameZh: '图像输出' },
  { id: 'tag_video_out', slug: 'video-output', nameEn: 'Video Output', nameZh: '视频输出' },
  { id: 'tag_audio_out', slug: 'audio-output', nameEn: 'Audio Output', nameZh: '音频输出' },
  { id: 'tag_code_out', slug: 'code-output', nameEn: 'Code Output', nameZh: '代码输出' },
  // 热门标签
  { id: 'tag_trending', slug: 'trending', nameEn: 'Trending', nameZh: '热门' },
  { id: 'tag_new', slug: 'new', nameEn: 'New', nameZh: '新上线' },
  { id: 'tag_popular', slug: 'popular', nameEn: 'Popular', nameZh: '受欢迎' },
  { id: 'tag_editors_choice', slug: 'editors-choice', nameEn: "Editor's Choice", nameZh: '编辑推荐' },
  { id: 'tag_best_2025', slug: 'best-of-2025', nameEn: 'Best of 2025', nameZh: '2025精选' },
];

const toolsData = [
  // AI 聊天机器人 (8个)
  { id: 'tool_chatgpt', slug: 'chatgpt', domain: 'chat.openai.com', websiteUrl: 'https://chat.openai.com', logoUrl: 'https://chat.openai.com/favicon.ico', nameEn: 'ChatGPT', descriptionEn: "OpenAI's advanced conversational AI assistant powered by GPT-4. Capable of natural conversations, code generation, creative writing, and complex reasoning.", nameZh: 'ChatGPT', descriptionZh: 'OpenAI推出的先进对话式AI助手，由GPT-4驱动。能够进行自然对话、代码生成、创意写作和复杂推理。', status: 'published' },
  { id: 'tool_claude', slug: 'claude', domain: 'claude.ai', websiteUrl: 'https://claude.ai', logoUrl: 'https://claude.ai/favicon.ico', nameEn: 'Claude', descriptionEn: "Anthropic's helpful, harmless, and honest AI assistant. Known for nuanced understanding, long context windows, and thoughtful responses.", nameZh: 'Claude', descriptionZh: 'Anthropic推出的有用、无害、诚实的AI助手。以细腻的理解、长上下文窗口和深思熟虑的回复著称。', status: 'published' },
  { id: 'tool_gemini', slug: 'gemini', domain: 'gemini.google.com', websiteUrl: 'https://gemini.google.com', logoUrl: 'https://gemini.google.com/favicon.ico', nameEn: 'Google Gemini', descriptionEn: "Google's multimodal AI assistant that can understand text, images, audio, and video. Integrated with Google services.", nameZh: 'Google Gemini', descriptionZh: 'Google的多模态AI助手，能够理解文本、图像、音频和视频。与Google服务深度集成。', status: 'published' },
  { id: 'tool_perplexity', slug: 'perplexity', domain: 'perplexity.ai', websiteUrl: 'https://perplexity.ai', logoUrl: 'https://perplexity.ai/favicon.ico', nameEn: 'Perplexity AI', descriptionEn: 'AI-powered search engine that provides direct answers with cited sources. Combines web search with language model capabilities.', nameZh: 'Perplexity AI', descriptionZh: 'AI驱动的搜索引擎，提供带引用来源的直接答案。结合网络搜索与语言模型能力。', status: 'published' },
  { id: 'tool_poe', slug: 'poe', domain: 'poe.com', websiteUrl: 'https://poe.com', logoUrl: 'https://poe.com/favicon.ico', nameEn: 'Poe', descriptionEn: 'Platform by Quora offering access to multiple AI models including GPT-4, Claude, and custom bots in one interface.', nameZh: 'Poe', descriptionZh: 'Quora推出的平台，在一个界面中提供多个AI模型访问，包括GPT-4、Claude和自定义机器人。', status: 'published' },
  { id: 'tool_character', slug: 'character-ai', domain: 'character.ai', websiteUrl: 'https://character.ai', logoUrl: 'https://character.ai/favicon.ico', nameEn: 'Character.AI', descriptionEn: 'Create and chat with AI characters. Popular for roleplay, creative storytelling, and entertainment purposes.', nameZh: 'Character.AI', descriptionZh: '创建AI角色并与之聊天。在角色扮演、创意故事讲述和娱乐方面广受欢迎。', status: 'published' },
  { id: 'tool_coze', slug: 'coze', domain: 'coze.com', websiteUrl: 'https://coze.com', logoUrl: 'https://coze.com/favicon.ico', nameEn: 'Coze', descriptionEn: "ByteDance's AI chatbot platform for creating custom AI bots with plugins, workflows, and knowledge bases.", nameZh: 'Coze', descriptionZh: '字节跳动的AI聊天机器人平台，可创建带插件、工作流和知识库的自定义AI机器人。', status: 'published' },
  { id: 'tool_pi', slug: 'pi-ai', domain: 'pi.ai', websiteUrl: 'https://pi.ai', logoUrl: 'https://pi.ai/favicon.ico', nameEn: 'Pi', descriptionEn: 'Personal AI assistant by Inflection AI, designed for supportive conversations and emotional intelligence.', nameZh: 'Pi', descriptionZh: 'Inflection AI的个人AI助手，专为支持性对话和情商设计。', status: 'published' },

  // AI 写作 (7个)
  { id: 'tool_jasper', slug: 'jasper', domain: 'jasper.ai', websiteUrl: 'https://jasper.ai', logoUrl: 'https://jasper.ai/favicon.ico', nameEn: 'Jasper', descriptionEn: 'AI content creation platform for marketing teams. Generate blog posts, ads, emails, and social media content at scale.', nameZh: 'Jasper', descriptionZh: '面向营销团队的AI内容创作平台。大规模生成博客文章、广告、邮件和社交媒体内容。', status: 'published' },
  { id: 'tool_copy_ai', slug: 'copy-ai', domain: 'copy.ai', websiteUrl: 'https://copy.ai', logoUrl: 'https://copy.ai/favicon.ico', nameEn: 'Copy.ai', descriptionEn: 'AI-powered copywriting tool for creating marketing copy, product descriptions, and sales content.', nameZh: 'Copy.ai', descriptionZh: 'AI驱动的文案工具，用于创建营销文案、产品描述和销售内容。', status: 'published' },
  { id: 'tool_writesonic', slug: 'writesonic', domain: 'writesonic.com', websiteUrl: 'https://writesonic.com', logoUrl: 'https://writesonic.com/favicon.ico', nameEn: 'Writesonic', descriptionEn: 'AI writer for creating SEO-optimized articles, blog posts, and marketing content with fact-checking capabilities.', nameZh: 'Writesonic', descriptionZh: 'AI写作工具，用于创建SEO优化的文章、博客和营销内容，具有事实核查功能。', status: 'published' },
  { id: 'tool_notion_ai', slug: 'notion-ai', domain: 'notion.so', websiteUrl: 'https://notion.so', logoUrl: 'https://notion.so/favicon.ico', nameEn: 'Notion AI', descriptionEn: 'AI writing assistant integrated into Notion. Helps with drafting, summarizing, brainstorming, and improving writing.', nameZh: 'Notion AI', descriptionZh: '集成在Notion中的AI写作助手。帮助起草、总结、头脑风暴和改进写作。', status: 'published' },
  { id: 'tool_grammarly', slug: 'grammarly', domain: 'grammarly.com', websiteUrl: 'https://grammarly.com', logoUrl: 'https://grammarly.com/favicon.ico', nameEn: 'Grammarly', descriptionEn: 'AI-powered writing assistant that checks grammar, spelling, punctuation, and offers style improvements.', nameZh: 'Grammarly', descriptionZh: 'AI驱动的写作助手，检查语法、拼写、标点符号，并提供风格改进建议。', status: 'published' },
  { id: 'tool_quillbot', slug: 'quillbot', domain: 'quillbot.com', websiteUrl: 'https://quillbot.com', logoUrl: 'https://quillbot.com/favicon.ico', nameEn: 'QuillBot', descriptionEn: 'AI paraphrasing and writing tool. Helps rephrase sentences, summarize text, and improve writing clarity.', nameZh: 'QuillBot', descriptionZh: 'AI改写和写作工具。帮助改述句子、总结文本和提高写作清晰度。', status: 'published' },
  { id: 'tool_rytr', slug: 'rytr', domain: 'rytr.me', websiteUrl: 'https://rytr.me', logoUrl: 'https://rytr.me/favicon.ico', nameEn: 'Rytr', descriptionEn: 'AI writing assistant for generating content in 30+ languages and 20+ tones. Affordable alternative for content creators.', nameZh: 'Rytr', descriptionZh: 'AI写作助手，支持30多种语言和20多种语气生成内容。创作者的经济实惠选择。', status: 'published' },

  // AI 图像生成 (8个)
  { id: 'tool_midjourney', slug: 'midjourney', domain: 'midjourney.com', websiteUrl: 'https://midjourney.com', logoUrl: 'https://midjourney.com/favicon.ico', nameEn: 'Midjourney', descriptionEn: 'Leading AI art generator known for stunning, artistic image generation. Creates images from text prompts via Discord.', nameZh: 'Midjourney', descriptionZh: '领先的AI艺术生成器，以惊艳的艺术图像生成著称。通过Discord从文本提示创建图像。', status: 'published' },
  { id: 'tool_dalle', slug: 'dall-e', domain: 'openai.com/dall-e', websiteUrl: 'https://openai.com/dall-e', logoUrl: 'https://openai.com/favicon.ico', nameEn: 'DALL·E 3', descriptionEn: "OpenAI's latest image generation model with exceptional prompt understanding and photorealistic outputs.", nameZh: 'DALL·E 3', descriptionZh: 'OpenAI最新的图像生成模型，具有出色的提示理解能力和逼真的输出效果。', status: 'published' },
  { id: 'tool_stable_diffusion', slug: 'stable-diffusion', domain: 'stability.ai', websiteUrl: 'https://stability.ai', logoUrl: 'https://stability.ai/favicon.ico', nameEn: 'Stable Diffusion', descriptionEn: 'Open-source image generation model by Stability AI. Can be run locally with full customization.', nameZh: 'Stable Diffusion', descriptionZh: 'Stability AI的开源图像生成模型。可在本地运行并完全自定义。', status: 'published' },
  { id: 'tool_leonardo', slug: 'leonardo-ai', domain: 'leonardo.ai', websiteUrl: 'https://leonardo.ai', logoUrl: 'https://leonardo.ai/favicon.ico', nameEn: 'Leonardo AI', descriptionEn: 'AI image generator with fine-tuned models for game assets, concept art, and consistent character generation.', nameZh: 'Leonardo AI', descriptionZh: 'AI图像生成器，提供针对游戏资产、概念艺术和一致性角色生成的微调模型。', status: 'published' },
  { id: 'tool_ideogram', slug: 'ideogram', domain: 'ideogram.ai', websiteUrl: 'https://ideogram.ai', logoUrl: 'https://ideogram.ai/favicon.ico', nameEn: 'Ideogram', descriptionEn: 'AI image generator excelling at rendering text within images accurately. Great for logos and posters.', nameZh: 'Ideogram', descriptionZh: 'AI图像生成器，擅长准确渲染图像中的文字。适合制作Logo和海报。', status: 'published' },
  { id: 'tool_playground', slug: 'playground-ai', domain: 'playground.com', websiteUrl: 'https://playground.com', logoUrl: 'https://playground.com/favicon.ico', nameEn: 'Playground AI', descriptionEn: 'Free AI image generator with powerful editing features. Great for beginners with intuitive interface.', nameZh: 'Playground AI', descriptionZh: '免费AI图像生成器，具有强大的编辑功能。界面直观，适合新手。', status: 'published' },
  { id: 'tool_canva_ai', slug: 'canva-ai', domain: 'canva.com', websiteUrl: 'https://canva.com', logoUrl: 'https://canva.com/favicon.ico', nameEn: 'Canva AI', descriptionEn: 'AI-powered design features within Canva including Magic Design, text-to-image, and background removal.', nameZh: 'Canva AI', descriptionZh: 'Canva中的AI设计功能，包括Magic Design、文生图和背景移除。', status: 'published' },
  { id: 'tool_adobe_firefly', slug: 'adobe-firefly', domain: 'firefly.adobe.com', websiteUrl: 'https://firefly.adobe.com', logoUrl: 'https://firefly.adobe.com/favicon.ico', nameEn: 'Adobe Firefly', descriptionEn: "Adobe's generative AI for creative professionals. Trained on licensed content for commercial safety.", nameZh: 'Adobe Firefly', descriptionZh: 'Adobe面向创意专业人士的生成式AI。在授权内容上训练，商用安全。', status: 'published' },

  // AI 视频 (6个)
  { id: 'tool_runway', slug: 'runway', domain: 'runway.com', websiteUrl: 'https://runway.com', logoUrl: 'https://runway.com/favicon.ico', nameEn: 'Runway', descriptionEn: 'AI video generation and editing platform. Gen-2 creates videos from text or images with cinematic quality.', nameZh: 'Runway', descriptionZh: 'AI视频生成和编辑平台。Gen-2可从文本或图像创建电影级质量的视频。', status: 'published' },
  { id: 'tool_pika', slug: 'pika', domain: 'pika.art', websiteUrl: 'https://pika.art', logoUrl: 'https://pika.art/favicon.ico', nameEn: 'Pika', descriptionEn: 'AI video generator that creates and edits videos from text prompts. Known for smooth animations and effects.', nameZh: 'Pika', descriptionZh: 'AI视频生成器，从文本提示创建和编辑视频。以流畅的动画和效果著称。', status: 'published' },
  { id: 'tool_heygen', slug: 'heygen', domain: 'heygen.com', websiteUrl: 'https://heygen.com', logoUrl: 'https://heygen.com/favicon.ico', nameEn: 'HeyGen', descriptionEn: 'AI video generator for creating professional videos with AI avatars. Perfect for marketing and training content.', nameZh: 'HeyGen', descriptionZh: 'AI视频生成器，用AI数字人创建专业视频。适合营销和培训内容。', status: 'published' },
  { id: 'tool_synthesia', slug: 'synthesia', domain: 'synthesia.io', websiteUrl: 'https://synthesia.io', logoUrl: 'https://synthesia.io/favicon.ico', nameEn: 'Synthesia', descriptionEn: 'Create AI videos with realistic avatars in 120+ languages. Popular for corporate training and marketing.', nameZh: 'Synthesia', descriptionZh: '用逼真数字人创建120多种语言的AI视频。在企业培训和营销领域广受欢迎。', status: 'published' },
  { id: 'tool_luma', slug: 'luma-ai', domain: 'lumalabs.ai', websiteUrl: 'https://lumalabs.ai', logoUrl: 'https://lumalabs.ai/favicon.ico', nameEn: 'Luma AI', descriptionEn: 'AI video generation with Dream Machine. Creates cinematic videos from text and images with impressive quality.', nameZh: 'Luma AI', descriptionZh: 'Dream Machine AI视频生成。从文本和图像创建高质量的电影级视频。', status: 'published' },
  { id: 'tool_kling', slug: 'kling-ai', domain: 'klingai.com', websiteUrl: 'https://klingai.com', logoUrl: 'https://klingai.com/favicon.ico', nameEn: 'Kling AI', descriptionEn: "Kuaishou's AI video generator with impressive motion and physics understanding. Creates realistic videos.", nameZh: 'Kling AI', descriptionZh: '快手的AI视频生成器，具有出色的运动和物理理解能力。创建逼真视频。', status: 'published' },

  // AI 音频与音乐 (5个)
  { id: 'tool_elevenlabs', slug: 'elevenlabs', domain: 'elevenlabs.io', websiteUrl: 'https://elevenlabs.io', logoUrl: 'https://elevenlabs.io/favicon.ico', nameEn: 'ElevenLabs', descriptionEn: 'Leading AI voice synthesis platform. Creates ultra-realistic voiceovers, dubbing, and voice cloning.', nameZh: 'ElevenLabs', descriptionZh: '领先的AI语音合成平台。创建超逼真的配音、翻译配音和声音克隆。', status: 'published' },
  { id: 'tool_suno', slug: 'suno', domain: 'suno.com', websiteUrl: 'https://suno.com', logoUrl: 'https://suno.com/favicon.ico', nameEn: 'Suno', descriptionEn: 'AI music generator that creates complete songs with vocals from text prompts. Revolutionary for music creation.', nameZh: 'Suno', descriptionZh: 'AI音乐生成器，从文本提示创建带人声的完整歌曲。音乐创作的革命性工具。', status: 'published' },
  { id: 'tool_udio', slug: 'udio', domain: 'udio.com', websiteUrl: 'https://udio.com', logoUrl: 'https://udio.com/favicon.ico', nameEn: 'Udio', descriptionEn: 'AI music generation platform creating studio-quality songs with vocals. Strong competitor to Suno.', nameZh: 'Udio', descriptionZh: 'AI音乐生成平台，创建带人声的录音室品质歌曲。Suno的强劲竞争对手。', status: 'published' },
  { id: 'tool_murf', slug: 'murf', domain: 'murf.ai', websiteUrl: 'https://murf.ai', logoUrl: 'https://murf.ai/favicon.ico', nameEn: 'Murf', descriptionEn: 'AI voice generator for creating professional voiceovers for videos, podcasts, and presentations.', nameZh: 'Murf', descriptionZh: 'AI语音生成器，为视频、播客和演示文稿创建专业配音。', status: 'published' },
  { id: 'tool_descript', slug: 'descript', domain: 'descript.com', websiteUrl: 'https://descript.com', logoUrl: 'https://descript.com/favicon.ico', nameEn: 'Descript', descriptionEn: 'AI-powered audio and video editor. Edit audio by editing text transcripts. Includes Overdub voice cloning.', nameZh: 'Descript', descriptionZh: 'AI驱动的音视频编辑器。通过编辑文字稿来编辑音频。包含Overdub声音克隆功能。', status: 'published' },

  // AI 编程 (6个)
  { id: 'tool_github_copilot', slug: 'github-copilot', domain: 'github.com/features/copilot', websiteUrl: 'https://github.com/features/copilot', logoUrl: 'https://github.com/favicon.ico', nameEn: 'GitHub Copilot', descriptionEn: 'AI pair programmer by GitHub and OpenAI. Suggests code completions, functions, and entire files in your IDE.', nameZh: 'GitHub Copilot', descriptionZh: 'GitHub和OpenAI的AI结对编程助手。在IDE中建议代码补全、函数和完整文件。', status: 'published' },
  { id: 'tool_cursor', slug: 'cursor', domain: 'cursor.sh', websiteUrl: 'https://cursor.sh', logoUrl: 'https://cursor.sh/favicon.ico', nameEn: 'Cursor', descriptionEn: 'AI-first code editor built on VS Code. Deep AI integration for code generation, editing, and chat.', nameZh: 'Cursor', descriptionZh: '以AI为核心的代码编辑器，基于VS Code构建。深度AI集成，支持代码生成、编辑和对话。', status: 'published' },
  { id: 'tool_replit', slug: 'replit', domain: 'replit.com', websiteUrl: 'https://replit.com', logoUrl: 'https://replit.com/favicon.ico', nameEn: 'Replit AI', descriptionEn: 'Browser-based IDE with AI assistant. Code, deploy, and collaborate with AI-powered code generation.', nameZh: 'Replit AI', descriptionZh: '基于浏览器的IDE，内置AI助手。通过AI驱动的代码生成进行编码、部署和协作。', status: 'published' },
  { id: 'tool_codeium', slug: 'codeium', domain: 'codeium.com', websiteUrl: 'https://codeium.com', logoUrl: 'https://codeium.com/favicon.ico', nameEn: 'Codeium', descriptionEn: 'Free AI coding assistant supporting 70+ languages. Fast completions with IDE extensions for major editors.', nameZh: 'Codeium', descriptionZh: '免费AI编程助手，支持70多种语言。快速补全，为主流编辑器提供IDE插件。', status: 'published' },
  { id: 'tool_tabnine', slug: 'tabnine', domain: 'tabnine.com', websiteUrl: 'https://tabnine.com', logoUrl: 'https://tabnine.com/favicon.ico', nameEn: 'Tabnine', descriptionEn: 'AI code assistant with enterprise-grade privacy. Train on your codebase for personalized suggestions.', nameZh: 'Tabnine', descriptionZh: '企业级隐私的AI代码助手。在你的代码库上训练，提供个性化建议。', status: 'published' },
  { id: 'tool_claude_code', slug: 'claude-code', domain: 'claude.ai/code', websiteUrl: 'https://claude.ai/code', logoUrl: 'https://claude.ai/favicon.ico', nameEn: 'Claude Code', descriptionEn: "Anthropic's agentic coding tool. Natural language coding with full project context understanding.", nameZh: 'Claude Code', descriptionZh: 'Anthropic的代理式编程工具。支持自然语言编程，具有完整的项目上下文理解能力。', status: 'published' },

  // AI 效率工具 (4个)
  { id: 'tool_otter', slug: 'otter-ai', domain: 'otter.ai', websiteUrl: 'https://otter.ai', logoUrl: 'https://otter.ai/favicon.ico', nameEn: 'Otter.ai', descriptionEn: 'AI meeting assistant that transcribes, summarizes, and creates action items from meetings automatically.', nameZh: 'Otter.ai', descriptionZh: 'AI会议助手，自动转录、总结会议并创建待办事项。', status: 'published' },
  { id: 'tool_fireflies', slug: 'fireflies', domain: 'fireflies.ai', websiteUrl: 'https://fireflies.ai', logoUrl: 'https://fireflies.ai/favicon.ico', nameEn: 'Fireflies.ai', descriptionEn: 'AI notetaker for meetings. Records, transcribes, and summarizes meetings across all major platforms.', nameZh: 'Fireflies.ai', descriptionZh: '会议AI笔记助手。在所有主流平台上录制、转录和总结会议。', status: 'published' },
  { id: 'tool_mem', slug: 'mem-ai', domain: 'mem.ai', websiteUrl: 'https://mem.ai', logoUrl: 'https://mem.ai/favicon.ico', nameEn: 'Mem', descriptionEn: 'AI-powered note-taking app that organizes and surfaces relevant information automatically.', nameZh: 'Mem', descriptionZh: 'AI驱动的笔记应用，自动组织和呈现相关信息。', status: 'published' },
  { id: 'tool_motion', slug: 'motion', domain: 'usemotion.com', websiteUrl: 'https://usemotion.com', logoUrl: 'https://usemotion.com/favicon.ico', nameEn: 'Motion', descriptionEn: 'AI calendar and project management. Automatically schedules tasks and meetings for optimal productivity.', nameZh: 'Motion', descriptionZh: 'AI日历和项目管理工具。自动安排任务和会议以实现最佳生产力。', status: 'published' },

  // AI 研究与分析 (3个)
  { id: 'tool_consensus', slug: 'consensus', domain: 'consensus.app', websiteUrl: 'https://consensus.app', logoUrl: 'https://consensus.app/favicon.ico', nameEn: 'Consensus', descriptionEn: 'AI-powered academic search engine. Find and understand scientific research with AI summaries.', nameZh: 'Consensus', descriptionZh: 'AI驱动的学术搜索引擎。通过AI摘要查找和理解科学研究。', status: 'published' },
  { id: 'tool_elicit', slug: 'elicit', domain: 'elicit.com', websiteUrl: 'https://elicit.com', logoUrl: 'https://elicit.com/favicon.ico', nameEn: 'Elicit', descriptionEn: 'AI research assistant that helps find, summarize, and extract data from academic papers.', nameZh: 'Elicit', descriptionZh: 'AI研究助手，帮助查找、总结和提取学术论文中的数据。', status: 'published' },
  { id: 'tool_scite', slug: 'scite', domain: 'scite.ai', websiteUrl: 'https://scite.ai', logoUrl: 'https://scite.ai/favicon.ico', nameEn: 'Scite', descriptionEn: 'AI tool for evaluating scientific claims. Shows how papers cite each other with supporting or contrasting evidence.', nameZh: 'Scite', descriptionZh: 'AI科学声明评估工具。显示论文如何相互引用，包含支持或对比证据。', status: 'published' },

  // AI 设计 (3个)
  { id: 'tool_figma_ai', slug: 'figma-ai', domain: 'figma.com', websiteUrl: 'https://figma.com', logoUrl: 'https://figma.com/favicon.ico', nameEn: 'Figma AI', descriptionEn: 'AI features in Figma for generating designs, renaming layers, and creating content automatically.', nameZh: 'Figma AI', descriptionZh: 'Figma中的AI功能，用于生成设计、重命名图层和自动创建内容。', status: 'published' },
  { id: 'tool_uizard', slug: 'uizard', domain: 'uizard.io', websiteUrl: 'https://uizard.io', logoUrl: 'https://uizard.io/favicon.ico', nameEn: 'Uizard', descriptionEn: 'AI-powered UI design tool. Transform sketches and screenshots into editable designs.', nameZh: 'Uizard', descriptionZh: 'AI驱动的UI设计工具。将草图和截图转换为可编辑的设计。', status: 'published' },
  { id: 'tool_magician', slug: 'magician', domain: 'magician.design', websiteUrl: 'https://magician.design', logoUrl: 'https://magician.design/favicon.ico', nameEn: 'Magician', descriptionEn: 'AI design assistant plugin for Figma. Generate icons, images, and copy with AI.', nameZh: 'Magician', descriptionZh: 'Figma的AI设计助手插件。用AI生成图标、图像和文案。', status: 'published' },
  { id: 'tool_remio', slug: 'remio', domain: 'remio.ai', websiteUrl: 'https://remio.ai/', logoUrl: 'https://www.google.com/s2/favicons?domain=remio.ai&sz=128', nameEn: 'Remio', descriptionEn: 'Local-first AI memory and knowledge base desktop app that parses files, webpages, recordings, emails, messages, images, and notes into local indexes and vectors for focused personal and agent context retrieval.', nameZh: 'Remio', descriptionZh: '本地优先的 AI 记忆与知识库桌面应用，可解析文件、网页、录音、邮件、消息、图片和笔记，并构建本地索引与向量，帮助用户和 Agent 更快检索精准上下文。', status: 'published' }
];

// 工具-分类关联数据
const toolCategoryData = [
  // 聊天机器人
  { toolId: 'tool_chatgpt', categoryId: 'cat_chatbot' },
  { toolId: 'tool_claude', categoryId: 'cat_chatbot' },
  { toolId: 'tool_gemini', categoryId: 'cat_chatbot' },
  { toolId: 'tool_perplexity', categoryId: 'cat_chatbot' },
  { toolId: 'tool_perplexity', categoryId: 'cat_research' },
  { toolId: 'tool_poe', categoryId: 'cat_chatbot' },
  { toolId: 'tool_character', categoryId: 'cat_chatbot' },
  { toolId: 'tool_coze', categoryId: 'cat_chatbot' },
  { toolId: 'tool_pi', categoryId: 'cat_chatbot' },
  // 写作
  { toolId: 'tool_jasper', categoryId: 'cat_writing' },
  { toolId: 'tool_jasper', categoryId: 'cat_business' },
  { toolId: 'tool_copy_ai', categoryId: 'cat_writing' },
  { toolId: 'tool_copy_ai', categoryId: 'cat_business' },
  { toolId: 'tool_writesonic', categoryId: 'cat_writing' },
  { toolId: 'tool_notion_ai', categoryId: 'cat_writing' },
  { toolId: 'tool_notion_ai', categoryId: 'cat_productivity' },
  { toolId: 'tool_grammarly', categoryId: 'cat_writing' },
  { toolId: 'tool_quillbot', categoryId: 'cat_writing' },
  { toolId: 'tool_rytr', categoryId: 'cat_writing' },
  // 图像生成
  { toolId: 'tool_midjourney', categoryId: 'cat_image' },
  { toolId: 'tool_dalle', categoryId: 'cat_image' },
  { toolId: 'tool_stable_diffusion', categoryId: 'cat_image' },
  { toolId: 'tool_leonardo', categoryId: 'cat_image' },
  { toolId: 'tool_ideogram', categoryId: 'cat_image' },
  { toolId: 'tool_playground', categoryId: 'cat_image' },
  { toolId: 'tool_canva_ai', categoryId: 'cat_image' },
  { toolId: 'tool_canva_ai', categoryId: 'cat_design' },
  { toolId: 'tool_adobe_firefly', categoryId: 'cat_image' },
  { toolId: 'tool_adobe_firefly', categoryId: 'cat_design' },
  // 视频
  { toolId: 'tool_runway', categoryId: 'cat_video' },
  { toolId: 'tool_pika', categoryId: 'cat_video' },
  { toolId: 'tool_heygen', categoryId: 'cat_video' },
  { toolId: 'tool_heygen', categoryId: 'cat_business' },
  { toolId: 'tool_synthesia', categoryId: 'cat_video' },
  { toolId: 'tool_synthesia', categoryId: 'cat_business' },
  { toolId: 'tool_luma', categoryId: 'cat_video' },
  { toolId: 'tool_kling', categoryId: 'cat_video' },
  // 音频
  { toolId: 'tool_elevenlabs', categoryId: 'cat_audio' },
  { toolId: 'tool_suno', categoryId: 'cat_audio' },
  { toolId: 'tool_udio', categoryId: 'cat_audio' },
  { toolId: 'tool_murf', categoryId: 'cat_audio' },
  { toolId: 'tool_descript', categoryId: 'cat_audio' },
  { toolId: 'tool_descript', categoryId: 'cat_video' },
  // 编程
  { toolId: 'tool_github_copilot', categoryId: 'cat_coding' },
  { toolId: 'tool_cursor', categoryId: 'cat_coding' },
  { toolId: 'tool_replit', categoryId: 'cat_coding' },
  { toolId: 'tool_codeium', categoryId: 'cat_coding' },
  { toolId: 'tool_tabnine', categoryId: 'cat_coding' },
  { toolId: 'tool_claude_code', categoryId: 'cat_coding' },
  // 效率
  { toolId: 'tool_otter', categoryId: 'cat_productivity' },
  { toolId: 'tool_fireflies', categoryId: 'cat_productivity' },
  { toolId: 'tool_mem', categoryId: 'cat_productivity' },
  { toolId: 'tool_motion', categoryId: 'cat_productivity' },
  { toolId: 'tool_remio', categoryId: 'cat_productivity' },
  { toolId: 'tool_remio', categoryId: 'cat_research' },
  // 研究
  { toolId: 'tool_consensus', categoryId: 'cat_research' },
  { toolId: 'tool_elicit', categoryId: 'cat_research' },
  { toolId: 'tool_scite', categoryId: 'cat_research' },
  // 设计
  { toolId: 'tool_figma_ai', categoryId: 'cat_design' },
  { toolId: 'tool_uizard', categoryId: 'cat_design' },
  { toolId: 'tool_magician', categoryId: 'cat_design' },
];

// 工具-标签关联数据
const toolTagData = [
  // ChatGPT
  { toolId: 'tool_chatgpt', tagId: 'tag_freemium' },
  { toolId: 'tool_chatgpt', tagId: 'tag_gpt' },
  { toolId: 'tool_chatgpt', tagId: 'tag_llm' },
  { toolId: 'tool_chatgpt', tagId: 'tag_api' },
  { toolId: 'tool_chatgpt', tagId: 'tag_popular' },
  { toolId: 'tool_chatgpt', tagId: 'tag_mobile' },
  { toolId: 'tool_chatgpt', tagId: 'tag_text' },
  // Claude
  { toolId: 'tool_claude', tagId: 'tag_freemium' },
  { toolId: 'tool_claude', tagId: 'tag_claude' },
  { toolId: 'tool_claude', tagId: 'tag_llm' },
  { toolId: 'tool_claude', tagId: 'tag_api' },
  { toolId: 'tool_claude', tagId: 'tag_popular' },
  { toolId: 'tool_claude', tagId: 'tag_text' },
  { toolId: 'tool_claude', tagId: 'tag_code_out' },
  // Gemini
  { toolId: 'tool_gemini', tagId: 'tag_free' },
  { toolId: 'tool_gemini', tagId: 'tag_llm' },
  { toolId: 'tool_gemini', tagId: 'tag_api' },
  { toolId: 'tool_gemini', tagId: 'tag_mobile' },
  { toolId: 'tool_gemini', tagId: 'tag_text' },
  // Perplexity
  { toolId: 'tool_perplexity', tagId: 'tag_freemium' },
  { toolId: 'tool_perplexity', tagId: 'tag_llm' },
  { toolId: 'tool_perplexity', tagId: 'tag_realtime' },
  { toolId: 'tool_perplexity', tagId: 'tag_trending' },
  { toolId: 'tool_perplexity', tagId: 'tag_text' },
  // Poe
  { toolId: 'tool_poe', tagId: 'tag_freemium' },
  { toolId: 'tool_poe', tagId: 'tag_llm' },
  { toolId: 'tool_poe', tagId: 'tag_beginner' },
  { toolId: 'tool_poe', tagId: 'tag_mobile' },
  // Character.AI
  { toolId: 'tool_character', tagId: 'tag_free' },
  { toolId: 'tool_character', tagId: 'tag_llm' },
  { toolId: 'tool_character', tagId: 'tag_creator' },
  { toolId: 'tool_character', tagId: 'tag_mobile' },
  // Coze
  { toolId: 'tool_coze', tagId: 'tag_free' },
  { toolId: 'tool_coze', tagId: 'tag_llm' },
  { toolId: 'tool_coze', tagId: 'tag_api' },
  { toolId: 'tool_coze', tagId: 'tag_developer' },
  // Pi
  { toolId: 'tool_pi', tagId: 'tag_free' },
  { toolId: 'tool_pi', tagId: 'tag_llm' },
  { toolId: 'tool_pi', tagId: 'tag_beginner' },
  { toolId: 'tool_pi', tagId: 'tag_mobile' },
  // Jasper
  { toolId: 'tool_jasper', tagId: 'tag_paid' },
  { toolId: 'tool_jasper', tagId: 'tag_gpt' },
  { toolId: 'tool_jasper', tagId: 'tag_enterprise' },
  { toolId: 'tool_jasper', tagId: 'tag_marketer' },
  { toolId: 'tool_jasper', tagId: 'tag_text' },
  // Copy.ai
  { toolId: 'tool_copy_ai', tagId: 'tag_freemium' },
  { toolId: 'tool_copy_ai', tagId: 'tag_gpt' },
  { toolId: 'tool_copy_ai', tagId: 'tag_marketer' },
  { toolId: 'tool_copy_ai', tagId: 'tag_text' },
  // Writesonic
  { toolId: 'tool_writesonic', tagId: 'tag_freemium' },
  { toolId: 'tool_writesonic', tagId: 'tag_gpt' },
  { toolId: 'tool_writesonic', tagId: 'tag_marketer' },
  { toolId: 'tool_writesonic', tagId: 'tag_text' },
  // Notion AI
  { toolId: 'tool_notion_ai', tagId: 'tag_paid' },
  { toolId: 'tool_notion_ai', tagId: 'tag_collaborative' },
  { toolId: 'tool_notion_ai', tagId: 'tag_text' },
  { toolId: 'tool_notion_ai', tagId: 'tag_popular' },
  // Grammarly
  { toolId: 'tool_grammarly', tagId: 'tag_freemium' },
  { toolId: 'tool_grammarly', tagId: 'tag_browser' },
  { toolId: 'tool_grammarly', tagId: 'tag_desktop' },
  { toolId: 'tool_grammarly', tagId: 'tag_popular' },
  { toolId: 'tool_grammarly', tagId: 'tag_text' },
  // QuillBot
  { toolId: 'tool_quillbot', tagId: 'tag_freemium' },
  { toolId: 'tool_quillbot', tagId: 'tag_student' },
  { toolId: 'tool_quillbot', tagId: 'tag_browser' },
  { toolId: 'tool_quillbot', tagId: 'tag_text' },
  // Rytr
  { toolId: 'tool_rytr', tagId: 'tag_freemium' },
  { toolId: 'tool_rytr', tagId: 'tag_beginner' },
  { toolId: 'tool_rytr', tagId: 'tag_text' },
  // Midjourney
  { toolId: 'tool_midjourney', tagId: 'tag_paid' },
  { toolId: 'tool_midjourney', tagId: 'tag_diffusion' },
  { toolId: 'tool_midjourney', tagId: 'tag_creator' },
  { toolId: 'tool_midjourney', tagId: 'tag_popular' },
  { toolId: 'tool_midjourney', tagId: 'tag_image_out' },
  { toolId: 'tool_midjourney', tagId: 'tag_editors_choice' },
  // DALL-E
  { toolId: 'tool_dalle', tagId: 'tag_freemium' },
  { toolId: 'tool_dalle', tagId: 'tag_diffusion' },
  { toolId: 'tool_dalle', tagId: 'tag_api' },
  { toolId: 'tool_dalle', tagId: 'tag_image_out' },
  { toolId: 'tool_dalle', tagId: 'tag_popular' },
  // Stable Diffusion
  { toolId: 'tool_stable_diffusion', tagId: 'tag_free' },
  { toolId: 'tool_stable_diffusion', tagId: 'tag_open_source' },
  { toolId: 'tool_stable_diffusion', tagId: 'tag_diffusion' },
  { toolId: 'tool_stable_diffusion', tagId: 'tag_developer' },
  { toolId: 'tool_stable_diffusion', tagId: 'tag_image_out' },
  // Leonardo AI
  { toolId: 'tool_leonardo', tagId: 'tag_freemium' },
  { toolId: 'tool_leonardo', tagId: 'tag_diffusion' },
  { toolId: 'tool_leonardo', tagId: 'tag_creator' },
  { toolId: 'tool_leonardo', tagId: 'tag_image_out' },
  // Ideogram
  { toolId: 'tool_ideogram', tagId: 'tag_freemium' },
  { toolId: 'tool_ideogram', tagId: 'tag_diffusion' },
  { toolId: 'tool_ideogram', tagId: 'tag_image_out' },
  { toolId: 'tool_ideogram', tagId: 'tag_trending' },
  // Playground AI
  { toolId: 'tool_playground', tagId: 'tag_free' },
  { toolId: 'tool_playground', tagId: 'tag_diffusion' },
  { toolId: 'tool_playground', tagId: 'tag_beginner' },
  { toolId: 'tool_playground', tagId: 'tag_image_out' },
  // Canva AI
  { toolId: 'tool_canva_ai', tagId: 'tag_freemium' },
  { toolId: 'tool_canva_ai', tagId: 'tag_beginner' },
  { toolId: 'tool_canva_ai', tagId: 'tag_popular' },
  { toolId: 'tool_canva_ai', tagId: 'tag_image_out' },
  // Adobe Firefly
  { toolId: 'tool_adobe_firefly', tagId: 'tag_freemium' },
  { toolId: 'tool_adobe_firefly', tagId: 'tag_diffusion' },
  { toolId: 'tool_adobe_firefly', tagId: 'tag_enterprise' },
  { toolId: 'tool_adobe_firefly', tagId: 'tag_image_out' },
  // Runway
  { toolId: 'tool_runway', tagId: 'tag_freemium' },
  { toolId: 'tool_runway', tagId: 'tag_diffusion' },
  { toolId: 'tool_runway', tagId: 'tag_creator' },
  { toolId: 'tool_runway', tagId: 'tag_video_out' },
  { toolId: 'tool_runway', tagId: 'tag_editors_choice' },
  // Pika
  { toolId: 'tool_pika', tagId: 'tag_freemium' },
  { toolId: 'tool_pika', tagId: 'tag_diffusion' },
  { toolId: 'tool_pika', tagId: 'tag_video_out' },
  { toolId: 'tool_pika', tagId: 'tag_trending' },
  // HeyGen
  { toolId: 'tool_heygen', tagId: 'tag_paid' },
  { toolId: 'tool_heygen', tagId: 'tag_enterprise' },
  { toolId: 'tool_heygen', tagId: 'tag_marketer' },
  { toolId: 'tool_heygen', tagId: 'tag_video_out' },
  // Synthesia
  { toolId: 'tool_synthesia', tagId: 'tag_paid' },
  { toolId: 'tool_synthesia', tagId: 'tag_enterprise' },
  { toolId: 'tool_synthesia', tagId: 'tag_video_out' },
  { toolId: 'tool_synthesia', tagId: 'tag_popular' },
  // Luma AI
  { toolId: 'tool_luma', tagId: 'tag_freemium' },
  { toolId: 'tool_luma', tagId: 'tag_diffusion' },
  { toolId: 'tool_luma', tagId: 'tag_video_out' },
  { toolId: 'tool_luma', tagId: 'tag_trending' },
  // Kling AI
  { toolId: 'tool_kling', tagId: 'tag_freemium' },
  { toolId: 'tool_kling', tagId: 'tag_diffusion' },
  { toolId: 'tool_kling', tagId: 'tag_video_out' },
  { toolId: 'tool_kling', tagId: 'tag_new' },
  // ElevenLabs
  { toolId: 'tool_elevenlabs', tagId: 'tag_freemium' },
  { toolId: 'tool_elevenlabs', tagId: 'tag_api' },
  { toolId: 'tool_elevenlabs', tagId: 'tag_creator' },
  { toolId: 'tool_elevenlabs', tagId: 'tag_audio_out' },
  { toolId: 'tool_elevenlabs', tagId: 'tag_popular' },
  // Suno
  { toolId: 'tool_suno', tagId: 'tag_freemium' },
  { toolId: 'tool_suno', tagId: 'tag_creator' },
  { toolId: 'tool_suno', tagId: 'tag_audio_out' },
  { toolId: 'tool_suno', tagId: 'tag_trending' },
  { toolId: 'tool_suno', tagId: 'tag_editors_choice' },
  // Udio
  { toolId: 'tool_udio', tagId: 'tag_freemium' },
  { toolId: 'tool_udio', tagId: 'tag_creator' },
  { toolId: 'tool_udio', tagId: 'tag_audio_out' },
  { toolId: 'tool_udio', tagId: 'tag_new' },
  // Murf
  { toolId: 'tool_murf', tagId: 'tag_freemium' },
  { toolId: 'tool_murf', tagId: 'tag_marketer' },
  { toolId: 'tool_murf', tagId: 'tag_audio_out' },
  // Descript
  { toolId: 'tool_descript', tagId: 'tag_freemium' },
  { toolId: 'tool_descript', tagId: 'tag_creator' },
  { toolId: 'tool_descript', tagId: 'tag_audio_out' },
  { toolId: 'tool_descript', tagId: 'tag_video_out' },
  { toolId: 'tool_descript', tagId: 'tag_desktop' },
  // GitHub Copilot
  { toolId: 'tool_github_copilot', tagId: 'tag_paid' },
  { toolId: 'tool_github_copilot', tagId: 'tag_gpt' },
  { toolId: 'tool_github_copilot', tagId: 'tag_developer' },
  { toolId: 'tool_github_copilot', tagId: 'tag_code_out' },
  { toolId: 'tool_github_copilot', tagId: 'tag_popular' },
  { toolId: 'tool_github_copilot', tagId: 'tag_editors_choice' },
  // Cursor
  { toolId: 'tool_cursor', tagId: 'tag_freemium' },
  { toolId: 'tool_cursor', tagId: 'tag_claude' },
  { toolId: 'tool_cursor', tagId: 'tag_developer' },
  { toolId: 'tool_cursor', tagId: 'tag_code_out' },
  { toolId: 'tool_cursor', tagId: 'tag_trending' },
  { toolId: 'tool_cursor', tagId: 'tag_desktop' },
  // Replit
  { toolId: 'tool_replit', tagId: 'tag_freemium' },
  { toolId: 'tool_replit', tagId: 'tag_llm' },
  { toolId: 'tool_replit', tagId: 'tag_developer' },
  { toolId: 'tool_replit', tagId: 'tag_beginner' },
  { toolId: 'tool_replit', tagId: 'tag_code_out' },
  // Codeium
  { toolId: 'tool_codeium', tagId: 'tag_free' },
  { toolId: 'tool_codeium', tagId: 'tag_llm' },
  { toolId: 'tool_codeium', tagId: 'tag_developer' },
  { toolId: 'tool_codeium', tagId: 'tag_code_out' },
  // Tabnine
  { toolId: 'tool_tabnine', tagId: 'tag_freemium' },
  { toolId: 'tool_tabnine', tagId: 'tag_enterprise' },
  { toolId: 'tool_tabnine', tagId: 'tag_developer' },
  { toolId: 'tool_tabnine', tagId: 'tag_code_out' },
  // Claude Code
  { toolId: 'tool_claude_code', tagId: 'tag_paid' },
  { toolId: 'tool_claude_code', tagId: 'tag_claude' },
  { toolId: 'tool_claude_code', tagId: 'tag_developer' },
  { toolId: 'tool_claude_code', tagId: 'tag_code_out' },
  { toolId: 'tool_claude_code', tagId: 'tag_new' },
  // Otter.ai
  { toolId: 'tool_otter', tagId: 'tag_freemium' },
  { toolId: 'tool_otter', tagId: 'tag_collaborative' },
  { toolId: 'tool_otter', tagId: 'tag_realtime' },
  { toolId: 'tool_otter', tagId: 'tag_text' },
  { toolId: 'tool_otter', tagId: 'tag_mobile' },
  // Fireflies.ai
  { toolId: 'tool_fireflies', tagId: 'tag_freemium' },
  { toolId: 'tool_fireflies', tagId: 'tag_collaborative' },
  { toolId: 'tool_fireflies', tagId: 'tag_enterprise' },
  { toolId: 'tool_fireflies', tagId: 'tag_text' },
  // Mem
  { toolId: 'tool_mem', tagId: 'tag_freemium' },
  { toolId: 'tool_mem', tagId: 'tag_llm' },
  { toolId: 'tool_mem', tagId: 'tag_text' },
  { toolId: 'tool_remio', tagId: 'tag_freemium' },
  { toolId: 'tool_remio', tagId: 'tag_desktop' },
  { toolId: 'tool_remio', tagId: 'tag_text' },
  // Motion
  { toolId: 'tool_motion', tagId: 'tag_paid' },
  { toolId: 'tool_motion', tagId: 'tag_collaborative' },
  // Consensus
  { toolId: 'tool_consensus', tagId: 'tag_freemium' },
  { toolId: 'tool_consensus', tagId: 'tag_llm' },
  { toolId: 'tool_consensus', tagId: 'tag_student' },
  { toolId: 'tool_consensus', tagId: 'tag_text' },
  // Elicit
  { toolId: 'tool_elicit', tagId: 'tag_freemium' },
  { toolId: 'tool_elicit', tagId: 'tag_llm' },
  { toolId: 'tool_elicit', tagId: 'tag_student' },
  { toolId: 'tool_elicit', tagId: 'tag_text' },
  // Scite
  { toolId: 'tool_scite', tagId: 'tag_paid' },
  { toolId: 'tool_scite', tagId: 'tag_student' },
  { toolId: 'tool_scite', tagId: 'tag_text' },
  // Figma AI
  { toolId: 'tool_figma_ai', tagId: 'tag_paid' },
  { toolId: 'tool_figma_ai', tagId: 'tag_collaborative' },
  { toolId: 'tool_figma_ai', tagId: 'tag_popular' },
  { toolId: 'tool_figma_ai', tagId: 'tag_image_out' },
  // Uizard
  { toolId: 'tool_uizard', tagId: 'tag_freemium' },
  { toolId: 'tool_uizard', tagId: 'tag_beginner' },
  { toolId: 'tool_uizard', tagId: 'tag_image_out' },
  // Magician
  { toolId: 'tool_magician', tagId: 'tag_paid' },
  { toolId: 'tool_magician', tagId: 'tag_image_out' },
  { toolId: 'tool_magician', tagId: 'tag_text' },
];

// ========== 主函数 ==========
async function seedTools() {
  if (!process.env.DATABASE_URL) {
    console.error("❌ 未找到 DATABASE_URL 环境变量");
    console.log("请确保 .env.local 文件中设置了 DATABASE_URL");
    process.exit(1);
  }

  const queryClient = postgres(process.env.DATABASE_URL);
  const db = drizzle(queryClient);

  try {
    console.log("🚀 开始导入 AI 工具种子数据...\n");

    // 1. 导入分类
    console.log("📁 导入分类数据 (10 个)...");
    for (const cat of categoriesData) {
      await db.insert(category).values(cat).onConflictDoNothing();
    }
    console.log("✅ 分类数据导入完成\n");

    // 2. 导入标签
    console.log("🏷️  导入标签数据 (30 个)...");
    for (const t of tagsData) {
      await db.insert(tag).values(t).onConflictDoNothing();
    }
    console.log("✅ 标签数据导入完成\n");

    // 3. 导入工具（pricing 从定价标签推导，featured 从"编辑推荐"标签推导）
    console.log("🔧 导入工具数据 (51 个)...");
    const pricingTagMap: Record<string, string> = {
      tag_free: "free",
      tag_freemium: "freemium",
      tag_paid: "paid",
    };
    const pricingByTool = new Map<string, string>();
    const featuredToolIds = new Set<string>();
    for (const tt of toolTagData) {
      const pricing = pricingTagMap[tt.tagId];
      if (pricing) pricingByTool.set(tt.toolId, pricing);
      if (tt.tagId === "tag_editors_choice") featuredToolIds.add(tt.toolId);
    }
    for (const t of toolsData) {
      await db
        .insert(tool)
        .values({
          ...t,
          pricing: pricingByTool.get(t.id) ?? null,
          featured: featuredToolIds.has(t.id),
        })
        .onConflictDoNothing();
    }
    console.log("✅ 工具数据导入完成\n");

    // 4. 导入工具-分类关联
    console.log("🔗 导入工具-分类关联...");
    for (const tc of toolCategoryData) {
      await db.insert(toolCategory).values(tc).onConflictDoNothing();
    }
    console.log("✅ 工具-分类关联导入完成\n");

    // 5. 导入工具-标签关联
    console.log("🏷️  导入工具-标签关联...");
    for (const tt of toolTagData) {
      await db.insert(toolTag).values(tt).onConflictDoNothing();
    }
    console.log("✅ 工具-标签关联导入完成\n");

    console.log("====================================");
    console.log("🎉 所有种子数据导入成功！");
    console.log("====================================");
    console.log("\n📊 数据统计:");
    console.log(`   - 分类: ${categoriesData.length} 个`);
    console.log(`   - 标签: ${tagsData.length} 个`);
    console.log(`   - 工具: ${toolsData.length} 个`);
    console.log(`   - 工具-分类关联: ${toolCategoryData.length} 条`);
    console.log(`   - 工具-标签关联: ${toolTagData.length} 条`);

  } catch (error) {
    console.error("❌ 导入失败:", error);
    await queryClient.end();
    process.exit(1);
  }

  await queryClient.end();
  process.exit(0);
}

// 运行脚本
seedTools();
