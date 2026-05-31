export type MessageTag = '建议反馈' | '游戏心得' | '求助提问' | '闲聊吹水';

export interface Message {
  id: string;
  name: string;
  content: string;
  tag: MessageTag;
  createdAt: string;
  likes: number;
}

export const MESSAGE_TAGS: { tag: MessageTag; icon: string; color: string; border: string }[] = [
  { tag: '建议反馈', icon: '💡', color: 'text-amber-400', border: 'border-amber-500/30 bg-amber-500/10' },
  { tag: '游戏心得', icon: '🎮', color: 'text-blue-400', border: 'border-blue-500/30 bg-blue-500/10' },
  { tag: '求助提问', icon: '❓', color: 'text-red-400', border: 'border-red-500/30 bg-red-500/10' },
  { tag: '闲聊吹水', icon: '💬', color: 'text-green-400', border: 'border-green-500/30 bg-green-500/10' },
];

export async function fetchMessages(tag?: string, sort?: 'latest' | 'hottest'): Promise<Message[]> {
  const params = new URLSearchParams();
  if (tag && tag !== '全部') params.set('tag', tag);
  if (sort) params.set('sort', sort);
  const query = params.toString();
  const url = `/api/community${query ? `?${query}` : ''}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('获取留言失败');
  const data = await res.json();
  return data.messages as Message[];
}

export async function postMessage(payload: { name: string; content: string; tag: MessageTag }): Promise<Message> {
  const res = await fetch('/api/community', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || '发布失败');
  }
  const data = await res.json();
  return data.message as Message;
}

export async function likeMessage(id: string): Promise<void> {
  const res = await fetch('/api/community', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, action: 'like' }),
  });
  if (!res.ok) throw new Error('点赞失败');
}

export function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return '刚刚';
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  if (days < 30) return `${days}天前`;
  return date.toLocaleDateString('zh-CN');
}
