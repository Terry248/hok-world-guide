import continentsData from '@/data/world/continents.json';

export interface WorldCity {
  name: string;
  subtitle?: string;
  description: string;
  image?: string;
  heroes: { id: string; name: string; title: string }[];
  url?: string;
}

export interface WorldRegion {
  id: string;
  name: string;
  icon?: string;
  description: string;
  position: string;
  isGameWorld?: boolean;
  gameWorldNote?: string;
  cities: WorldCity[];
  miracle: { name: string; description: string; image?: string } | null;
}

export interface WorldMiracle {
  name: string;
  region: string;
  desc: string;
}

export interface WorldData {
  name: string;
  description: string;
  mapUrl: string;
  regions: WorldRegion[];
  miracles: WorldMiracle[];
}

export function getWorldData(): WorldData {
  return continentsData as WorldData;
}

export function getRegionById(id: string): WorldRegion | undefined {
  return getWorldData().regions.find(r => r.id === id);
}

// 获取王者荣耀世界角色的王者大陆出身地关联
export function getCharacterOrigin(characterName: string): { region: string; city: string } | null {
  const map: Record<string, { region: string; city: string }> = {
    '元流之子': { region: '逐鹿', city: '稷下学院' },
    '东方曜': { region: '逐鹿', city: '稷下学院' },
    '西施': { region: '逐鹿', city: '稷下学院' },
    '孙膑': { region: '逐鹿', city: '稷下学院' },
    '蒙犽': { region: '逐鹿', city: '稷下学院' },
    '鲁班大师': { region: '逐鹿', city: '稷下学院' },
    '花木兰': { region: '河洛', city: '长城' },
    '铠': { region: '河洛', city: '长城' },
    '王昭君': { region: '北荒', city: '狼旗' },
    '伽罗': { region: '云中漠地', city: '千窟城' },
  };
  return map[characterName] || null;
}
