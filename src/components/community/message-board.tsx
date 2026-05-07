'use client';

import { useState, useEffect, useCallback } from 'react';
import { Message, MessageTag, fetchMessages, postMessage, likeMessage, formatTimeAgo, MESSAGE_TAGS } from '@/lib/community';
import { MessageSquare, Send, ThumbsUp, Filter, Sparkles, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<MessageTag | '全部'>('全部');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<MessageTag>('闲聊吹水');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMessages(filter);
      setMessages(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : '加载失败');
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    load();
  }, [load]);

  const handleSubmit = useCallback(async () => {
    if (!content.trim()) return;
    setIsSubmitting(true);
    setError('');
    try {
      await postMessage({
        name: name.trim() || '匿名玩家',
        content: content.trim(),
        tag,
      });
      setContent('');
      setShowForm(false);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : '发布失败');
    } finally {
      setIsSubmitting(false);
    }
  }, [name, content, tag, load]);

  const handleLike = useCallback(async (id: string) => {
    if (likedIds.has(id)) return;
    try {
      await likeMessage(id);
      setLikedIds(prev => new Set(prev).add(id));
      setMessages(prev => prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));
    } catch {
      // ignore
    }
  }, [likedIds]);

  return (
    <div className="space-y-8">
      {/* 头部统计 + 发留言按钮 */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              稷下留言墙
            </h2>
            <p className="text-sm text-text-muted mt-1">
              已有 <span className="text-primary font-bold">{messages.length}</span> 条留言 · 畅所欲言，交流心得
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            {showForm ? '收起' : '我要留言'}
          </button>
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* 留言表单 */}
      {showForm && (
        <div className="bg-card rounded-xl border border-primary/30 p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 text-primary font-medium">
            <Send className="w-4 h-4" />
            写下你的想法
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label className="text-xs text-text-muted mb-1 block">昵称</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="你的昵称"
                  maxLength={16}
                  className="w-full pl-9 pr-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-text-muted mb-1 block">分类</label>
              <div className="flex flex-wrap gap-2">
                {MESSAGE_TAGS.map(t => (
                  <button
                    key={t.tag}
                    onClick={() => setTag(t.tag)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs border transition-all',
                      tag === t.tag
                        ? `${t.border} ${t.color} font-medium`
                        : 'bg-card border-border text-text-muted hover:border-primary/30'
                    )}
                  >
                    {t.icon} {t.tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="text-xs text-text-muted mb-1 block">留言内容</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="分享你的游戏心得、提建议，或者随便聊聊..."
              rows={4}
              maxLength={500}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary resize-none"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-text-muted">{content.length}/500</span>
              <button
                onClick={handleSubmit}
                disabled={!content.trim() || isSubmitting}
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {isSubmitting ? '发送中...' : '发布留言'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 筛选 */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-text-muted" />
        <button
          onClick={() => setFilter('全部')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs border transition-all',
            filter === '全部'
              ? 'bg-primary/20 text-primary border-primary/30 font-medium'
              : 'bg-card border-border text-text-muted hover:border-primary/30'
          )}
        >
          全部
        </button>
        {MESSAGE_TAGS.map(t => (
          <button
            key={t.tag}
            onClick={() => setFilter(t.tag)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs border transition-all',
              filter === t.tag
                ? `${t.border} ${t.color} font-medium`
                : 'bg-card border-border text-text-muted hover:border-primary/30'
            )}
          >
            {t.icon} {t.tag}
          </button>
        ))}
        <span className="text-xs text-text-muted ml-auto">
          共 {messages.length} 条
        </span>
      </div>

      {/* 加载中 */}
      {loading && (
        <div className="text-center py-16 text-text-muted">
          <Loader2 className="w-10 h-10 mx-auto mb-3 animate-spin opacity-50" />
          <p>加载留言中...</p>
        </div>
      )}

      {/* 留言列表 */}
      {!loading && (
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-16 text-text-muted">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>这个分类还没有留言</p>
              <p className="text-sm mt-1 opacity-60">来做第一个留言的人吧！</p>
            </div>
          ) : (
            messages.map(msg => {
              const tagStyle = MESSAGE_TAGS.find(t => t.tag === msg.tag);
              const isLiked = likedIds.has(msg.id);
              return (
                <div
                  key={msg.id}
                  className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">{msg.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-sm">{msg.name}</span>
                          {tagStyle && (
                            <span className={cn('text-[10px] px-1.5 py-0.5 rounded-full border', tagStyle.border, tagStyle.color)}>
                              {tagStyle.icon} {msg.tag}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-text-muted">{formatTimeAgo(msg.createdAt)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleLike(msg.id)}
                      disabled={isLiked}
                      className={cn(
                        'flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all border',
                        isLiked
                          ? 'bg-primary/20 text-primary border-primary/30'
                          : 'bg-background text-text-muted border-border hover:border-primary/30'
                      )}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {msg.likes}
                    </button>
                  </div>
                  <p className="text-sm text-text-muted mt-3 leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
