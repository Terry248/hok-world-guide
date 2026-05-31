import { NextRequest, NextResponse } from 'next/server';
import { searchAll } from '@/lib/search';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim() || '';
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const results = searchAll(q, limit);
  return NextResponse.json({ results });
}
