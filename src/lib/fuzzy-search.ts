// 简单拼音首字母映射（常用字）
const pinyinMap: Record<string, string> = {
  '元': 'y', '流': 'l', '之': 'z', '子': 'z',
  '东': 'd', '方': 'f', '曜': 'y',
  '西': 'x', '施': 's',
  '孙': 's', '膑': 'b',
  '蒙': 'm', '犽': 'y',
  '鲁': 'l', '班': 'b', '大': 'd', '师': 's',
  '冷': 'l', '春': 'c',
  '花': 'h', '木': 'm', '兰': 'l',
  '铠': 'k',
  '王': 'w', '昭': 'z', '君': 'j',
  '伽': 'j', '罗': 'l',
  '稷': 'j', '下': 'x', '群': 'q', '山': 's',
  '学': 'x', '院': 'y',
  '观': 'g', '星': 'x',
  '奇': 'q', '门': 'm', '秘': 'm', '境': 'j',
  '禁': 'j', '地': 'd',
  '织': 'z', '梦': 'm', '原': 'y', '野': 'y',
  '丰': 'f', '云': 'y',
  '界': 'j', '北': 'b',
  '春': 'c', '溪': 'x', '漫': 'm', '滩': 't',
  '霜': 's', '镇': 'z',
  '落': 'l', '高': 'g', '东': 'd',
  '天': 't', '柱': 'z', '墟': 'x',
  '剑': 'j', '弓': 'g', '枪': 'q', '锤': 'c', '盾': 'd', '刀': 'd', '法': 'f', '杖': 'z',
  '火': 'h', '水': 's', '风': 'f', '雷': 'l', '草': 'c', '冰': 'b', '岩': 'y', '光': 'g', '暗': 'a',
  '输': 's', '出': 'c', '辅': 'f', '助': 'z', '坦': 't', '克': 'k', '治': 'z', '疗': 'l', '控': 'k',
};

function getPinyinInitials(text: string): string {
  return text.split('').map(ch => pinyinMap[ch] || ch.toLowerCase()).join('');
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }
  return dp[m][n];
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '');
}

export interface FuzzyMatch {
  score: number;
  matchType: 'exact' | 'prefix' | 'contains' | 'fuzzy' | 'pinyin' | 'token';
}

export function fuzzyMatch(query: string, text: string): FuzzyMatch | null {
  if (!query || !text) return null;
  const q = normalize(query);
  const t = normalize(text);

  // 完全匹配
  if (t === q) return { score: 100, matchType: 'exact' };

  // 前缀匹配
  if (t.startsWith(q)) return { score: 90, matchType: 'prefix' };

  // 包含匹配
  if (t.includes(q)) return { score: 70, matchType: 'contains' };

  // 拼音首字母匹配
  const tPinyin = getPinyinInitials(text);
  if (tPinyin.includes(q)) return { score: 65, matchType: 'pinyin' };

  // 分词匹配（每个字都包含）
  const qChars = q.split('');
  if (qChars.length >= 2 && qChars.every(c => t.includes(c))) {
    return { score: 55, matchType: 'token' };
  }

  // 编辑距离容错（查询长度>=3时启用）
  if (q.length >= 3) {
    const dist = levenshtein(q, t.length <= q.length + 2 ? t : t.substring(0, q.length + 2));
    const threshold = Math.max(1, Math.floor(q.length * 0.4));
    if (dist <= threshold) {
      return { score: 40 - dist * 5, matchType: 'fuzzy' };
    }
  }

  return null;
}

// 多字段综合评分
export function multiFieldFuzzyMatch(
  query: string,
  fields: { text: string; weight: number }[]
): { score: number; bestMatchType: string } | null {
  let totalScore = 0;
  let bestMatchType = '';
  let hasMatch = false;

  for (const field of fields) {
    const result = fuzzyMatch(query, field.text);
    if (result) {
      hasMatch = true;
      const weighted = result.score * field.weight;
      if (weighted > totalScore) {
        totalScore = weighted;
        bestMatchType = result.matchType;
      }
    }
  }

  return hasMatch ? { score: totalScore, bestMatchType } : null;
}
