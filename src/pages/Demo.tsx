import { useCallback, useEffect, useRef, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './Demo.css';

interface Coupon {
  id: number;
  pct: string;
  label: TranslationKey;
  storeIcon: string;
  store: TranslationKey;
  cost: number;
  players: number;
  max: number;
}

interface Player {
  name: string;
  pts: number;
  cupons: number;
}

interface ToastData {
  icon: string;
  text: TranslationKey;
  sub: TranslationKey;
}

const INITIAL_POINTS = 500;
const DISCARD_REWARD = 200;
const TOAST_MS = 3500;
const BOT_TICK_MS = 4000;

const COUPONS: Coupon[] = [
  { id: 1, pct: '30%', label: 'demo.c1.label', storeIcon: '🛒', store: 'demo.c1.store', cost: 200, players: 14, max: 20 },
  { id: 2, pct: 'R$50', label: 'demo.c2.label', storeIcon: '💡', store: 'demo.c2.store', cost: 350, players: 32, max: 40 },
  { id: 3, pct: '🎫', label: 'demo.c3.label', storeIcon: '🚌', store: 'demo.c3.store', cost: 500, players: 8, max: 10 },
  { id: 4, pct: '15%', label: 'demo.c4.label', storeIcon: '💊', store: 'demo.c4.store', cost: 150, players: 6, max: 15 },
];

const INITIAL_BOTS: Player[] = [
  { name: 'Gabriel A.', pts: 2340, cupons: 12 },
  { name: 'Nycolas M.', pts: 1890, cupons: 9 },
  { name: 'Rodrigo B.', pts: 1540, cupons: 7 },
  { name: 'Tayna J.', pts: 380, cupons: 2 },
];

const RANK_LABELS = ['🥇', '🥈', '🥉', '4', '5'];
const RANK_COLORS = ['#ffd740', '#b0bec5', '#ff8a65', 'var(--text-muted)', 'var(--text-muted)'];

export default function Demo() {
  const { t } = useLanguage();
  const [myPts, setMyPts] = useState(INITIAL_POINTS);
  const [collectedIds, setCollectedIds] = useState<number[]>([]);
  const [bots, setBots] = useState<Player[]>(INITIAL_BOTS);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<number | undefined>(undefined);

  usePageMeta('Demo — SpotMyDeal', 'Demo interativa do SpotMyDeal — Loot Tracker em ação.');

  const showToast = useCallback((data: ToastData) => {
    window.clearTimeout(toastTimer.current);
    setToast(data);
    setToastVisible(true);
    toastTimer.current = window.setTimeout(() => setToastVisible(false), TOAST_MS);
  }, []);

  // simula outros players ganhando pontos em tempo real
  useEffect(() => {
    const id = window.setInterval(() => {
      setBots((current) => {
        const index = Math.floor(Math.random() * current.length);
        const gain = Math.floor(Math.random() * 80) + 20;
        return current.map((bot, i) => (i === index ? { ...bot, pts: bot.pts + gain } : bot));
      });
    }, BOT_TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  // limpa o timer do toast ao sair da página
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const collect = (coupon: Coupon) => {
    if (collectedIds.includes(coupon.id)) return;
    if (myPts < coupon.cost) {
      showToast({ icon: '⚠️', text: 'demo.toast.nopts', sub: 'demo.toast.nopts.sub' });
      return;
    }
    setMyPts((pts) => pts - coupon.cost);
    setCollectedIds((ids) => [...ids, coupon.id]);
    showToast({ icon: '🎯', text: 'demo.toast.cupom', sub: 'demo.toast.added' });
  };

  const addPoints = () => {
    setMyPts((pts) => pts + DISCARD_REWARD);
    showToast({ icon: '♻️', text: 'demo.toast.pts', sub: 'demo.toast.pts.sub' });
  };

  const collected = COUPONS.filter((c) => collectedIds.includes(c.id));
  const levelPct = Math.min(Math.round((myPts % 1000) / 10), 100);

  const ranking = [
    ...bots.map((bot) => ({ ...bot, me: false })),
    { name: t('demo.player.name'), pts: myPts, cupons: collected.length, me: true },
  ].sort((a, b) => b.pts - a.pts);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge" style={{ marginBottom: '20px' }}>
            🎮 {t('demo.badge')}
          </span>
          <h1>
            {t('demo.h1')} <span style={{ color: 'var(--cyan)' }}>{t('demo.h1.hl')}</span>
          </h1>
          <p style={{ maxWidth: '560px', marginTop: '16px' }}>{t('demo.hero.desc')}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="demo-layout">
            {/* ARENA PRINCIPAL */}
            <div>
              <div className="arena-header">
                <span className="arena-title">— {t('demo.arena.label')}</span>
                <span className="live-badge">
                  <span className="live-dot"></span> {t('demo.live')}
                </span>
              </div>

              <div className="cupons-arena" id="cuponsArena">
                {COUPONS.map((coupon) => {
                  const isCollected = collectedIds.includes(coupon.id);
                  const intensity = Math.round((coupon.players / coupon.max) * 100);
                  return (
                    <div key={coupon.id} className={isCollected ? 'arena-card collected' : 'arena-card'}>
                      <div className="arena-pct">{coupon.pct}</div>
                      <div className="arena-info">
                        <h4>
                          {t(coupon.label)} — {coupon.storeIcon} {t(coupon.store)}
                        </h4>
                        <div className="arena-meta">
                          <span className="arena-tag">
                            ⚡ {coupon.players} {t('demo.players.label')}
                          </span>
                          <span className="arena-tag">
                            💎 {t('demo.cost.label')} {coupon.cost} pts
                          </span>
                        </div>
                        <div className="arena-progress">
                          <div className="arena-progress-bar">
                            <div className="arena-progress-fill" style={{ width: `${intensity}%` }}></div>
                          </div>
                          <div className="arena-progress-label">
                            {t('demo.dispute.label')} {intensity}%
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-collect"
                        disabled={isCollected}
                        onClick={() => collect(coupon)}
                      >
                        {isCollected ? t('demo.collected.btn') : t('demo.collect.btn')}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* LEADERBOARD */}
              <div className="arena-header" style={{ marginTop: '40px' }}>
                <span className="arena-title">— {t('demo.rank.label')}</span>
              </div>
              <div className="leaderboard" id="leaderboard">
                <div className="lb-header">— {t('demo.rank.live')}</div>
                {ranking.map((player, i) => (
                  <div key={player.name + player.me} className={player.me ? 'lb-row me' : 'lb-row'}>
                    <span className="lb-rank" style={{ color: RANK_COLORS[i] }}>
                      {RANK_LABELS[i]}
                    </span>
                    <span className="lb-name">
                      {player.name}
                      {player.me && <span className="lb-me-tag">{t('demo.me.tag')}</span>}
                    </span>
                    <span className="lb-pts">{player.pts} pts</span>
                    <span className="lb-cupons">{player.cupons} 🎯</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PAINEL DO PLAYER */}
            <div className="player-panel">
              <div className="panel-title">— {t('demo.profile.label')}</div>

              <div className="player-profile">
                <div className="player-av">EU</div>
                <div>
                  <div className="player-name-big">{t('demo.player.name')}</div>
                  <div className="player-level">{t('demo.player.level')}</div>
                </div>
              </div>

              <div className="pts-display">
                <span className="pts-num" id="myPts">
                  {myPts}
                </span>
                <span className="pts-label">{t('demo.pts.label')}</span>
              </div>

              <div className="pts-bar-wrap">
                <div className="pts-bar-label">
                  <span>{t('demo.level.progress')}</span>
                  <span id="barPct">{levelPct}%</span>
                </div>
                <div className="pts-bar">
                  <div className="pts-bar-fill" id="ptsBar" style={{ width: `${levelPct}%` }}></div>
                </div>
              </div>

              <div className="inventory-title">{t('demo.inv.title')}</div>
              <div className="inventory-list" id="inventory">
                {collected.length === 0 ? (
                  <div className="inv-empty">{t('demo.inv.empty')}</div>
                ) : (
                  collected.map((coupon) => (
                    <div key={coupon.id} className="inv-item">
                      🎯 {coupon.pct} — {coupon.storeIcon} {t(coupon.store)}
                    </div>
                  ))
                )}
              </div>

              <button type="button" className="add-pts-btn" onClick={addPoints}>
                {t('demo.descarte.btn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TOAST */}
      <div className={toastVisible ? 'toast show' : 'toast'} id="toast" role="status" aria-live="polite">
        {toast && (
          <>
            <span className="toast-icon">{toast.icon}</span>
            <div>
              <div className="toast-text">{t(toast.text)}</div>
              <div className="toast-sub">{t(toast.sub)}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
