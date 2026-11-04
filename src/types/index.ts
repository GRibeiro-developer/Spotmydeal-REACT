/**
 * Tipos centrais do domínio SpotMyDeal.
 * Mantidos em um único módulo para reuso entre components, hooks e pages.
 */

export interface NavItem {
  label: string;
  to: string;
}

export interface Player {
  id: string;
  name: string;
  points: number;
  coupons: number;
  avatarUrl?: string;
  isMe?: boolean;
}

export interface Coupon {
  id: number;
  pct: string;
  label: string;
  store: string;
  cost: number;
  playersDisputing: number;
  maxPlayers: number;
  collected: boolean;
}

export type CouponStatus = 'live' | 'hot' | 'rare';

export interface CouponPreview {
  id: number;
  pct: string;
  label: string;
  store: string;
  playersDisputing: number;
  status: CouponStatus;
}

export interface Member {
  id: string;
  name: string;
  rm: string;
  role: string;
  turma: string;
  avatar: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface FaqEntry {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export interface TriggerData {
  number: string;
  emoji: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  emoji: string;
  title: string;
  description: string;
}

export interface BenefitData {
  emoji: string;
  title: string;
  description: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface ImpactItemData {
  emoji: string;
  title: string;
  description: string;
}

export interface InfoItemData {
  emoji: string;
  label: string;
  value: string;
  linkTo?: string;
}

/** Valores tipados do formulário de contato (React Hook Form). */
export interface ContactFormValues {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface ToastState {
  visible: boolean;
  icon: string;
  text: string;
  sub: string;
}
