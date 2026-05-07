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

export async function fetchMessages(tag?: string): Promise<Message[]> {
  const url = tag && tag !== '全部' ? `/api/community?tag=${encodeURIComponent(tag)}` : '/api/community';
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

export async function likeMessage(id: string): Promise<Message> {
  const res = await fetch('/api/community', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, action: 'like' }),
  });
  if (!res.ok) throw new Error('点赞失败');
  const data = await res.json();
  return data.message as Message;
}

export function formatTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '刚刚';
  if (mins < 60) return `${mins}分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}小时前`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}天前`;
  return new Date(iso).toLocaleDateString('zh-CN');
}
