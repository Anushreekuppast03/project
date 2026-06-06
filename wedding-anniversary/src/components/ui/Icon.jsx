// Central registry of the named icons referenced by string in siteData.
// Importing them explicitly (instead of `import * as Icons`) lets the bundler
// tree-shake the rest of lucide-react.
import {
  Sparkles,
  Gem,
  Heart,
  Baby,
  Plane,
  Crown,
  CalendarHeart,
  Sunrise,
  Camera,
  Globe2,
  Share2,
  MessageCircle,
  Video,
} from 'lucide-react'

const registry = {
  Sparkles,
  Gem,
  Heart,
  Baby,
  Plane,
  Crown,
  CalendarHeart,
  Sunrise,
  Camera,
  Globe2,
  Share2,
  MessageCircle,
  Video,
}

export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Heart
  return <Cmp {...props} />
}
