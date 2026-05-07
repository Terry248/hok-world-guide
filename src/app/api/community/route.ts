import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import type { Message } from '@/lib/community';

const DATA_FILE = path.join(process.cwd(), 'src/data/community/messages.json');

function readMessages(): Message[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw) as Message[];
  } catch {
    return [];
  }
}

function writeMessages(messages: Message[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');
}

// GET - 获取留言列表
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');

  let messages = readMessages();
  if (tag && tag !== '全部') {
    messages = messages.filter(m => m.tag === tag);
  }
  // 按时间倒序
  messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return NextResponse.json({ messages });
}

// POST - 发布新留言
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, content, tag } = body;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: '内容不能为空' }, { status: 400 });
    }
    if (content.trim().length > 500) {
      return NextResponse.json({ error: '内容超过500字限制' }, { status: 400 });
    }

    const messages = readMessages();
    const newMessage: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: (name || '匿名玩家').trim().slice(0, 16),
      content: content.trim(),
      tag: tag || '闲聊吹水',
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    messages.unshift(newMessage);
    writeMessages(messages);

    return NextResponse.json({ message: newMessage }, { status: 201 });
  } catch {
    return NextResponse.json({ error: '发布失败' }, { status: 500 });
  }
}

// PATCH - 点赞
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, action } = body;

    if (!id || action !== 'like') {
      return NextResponse.json({ error: '参数错误' }, { status: 400 });
    }

    const messages = readMessages();
    const idx = messages.findIndex(m => m.id === id);
    if (idx === -1) {
      return NextResponse.json({ error: '留言不存在' }, { status: 404 });
    }

    messages[idx].likes += 1;
    writeMessages(messages);

    return NextResponse.json({ message: messages[idx] });
  } catch {
    return NextResponse.json({ error: '操作失败' }, { status: 500 });
  }
}
