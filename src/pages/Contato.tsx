<<<<<<< HEAD
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './Contato.css';

type FieldName = 'nome' | 'email' | 'assunto' | 'mensagem';
type FormValues = Record<FieldName, string>;
type FieldStatus = 'idle' | 'error' | 'ok';
type Feedback = { type: 'success' | 'error'; key: TranslationKey } | null;

const EMPTY_FORM: FormValues = { nome: '', email: '', assunto: '', mensagem: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FEEDBACK_MS = 5000;
const FAKE_SEND_MS = 1500;

const SUBJECTS: { value: string; label: TranslationKey }[] = [
  { value: 'projeto', label: 'contact.opt1' },
  { value: 'soulup', label: 'contact.opt2' },
  { value: 'fiap', label: 'contact.opt3' },
  { value: 'demo', label: 'contact.opt4' },
  { value: 'outro', label: 'contact.opt5' },
];

/** Retorna a chave da mensagem de erro ou null quando o campo é válido. */
function validate(field: FieldName, raw: string): TranslationKey | null {
  const value = raw.trim();
  if (!value) return field === 'assunto' ? 'contact.err.select' : 'contact.err.required';
  if (field === 'email' && !EMAIL_REGEX.test(value)) return 'contact.err.email';
  if (field === 'mensagem' && value.length < 20) return 'contact.err.short';
  return null;
}

export default function Contato() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldName, TranslationKey>>>({});
  const [status, setStatus] = useState<Record<FieldName, FieldStatus>>({
    nome: 'idle',
    email: 'idle',
    assunto: 'idle',
    mensagem: 'idle',
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const feedbackTimer = useRef<number | undefined>(undefined);
  const sendTimer = useRef<number | undefined>(undefined);

  usePageMeta(
    'Contato — SpotMyDeal',
    'Contato SpotMyDeal — Entre em contato com a equipe do projeto.',
  );

  // limpa timers ao sair da página
  useEffect(
    () => () => {
      window.clearTimeout(feedbackTimer.current);
      window.clearTimeout(sendTimer.current);
    },
    [],
  );

  const showFeedback = (type: 'success' | 'error', key: TranslationKey) => {
    window.clearTimeout(feedbackTimer.current);
    setFeedback({ type, key });
    feedbackTimer.current = window.setTimeout(() => setFeedback(null), FEEDBACK_MS);
  };

  const checkField = (field: FieldName, value: string): boolean => {
    const error = validate(field, value);
    setErrors((prev) => ({ ...prev, [field]: error ?? undefined }));
    setStatus((prev) => ({ ...prev, [field]: error ? 'error' : 'ok' }));
    return !error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.name as FieldName;
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    // validação em tempo real só depois que o campo já apresentou erro
    if (status[field] === 'error') checkField(field, value);
  };

  const handleBlur = (field: FieldName) => () => {
    checkField(field, values[field]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const fields = Object.keys(EMPTY_FORM) as FieldName[];
    const results = fields.map((field) => checkField(field, values[field]));

    if (results.includes(false)) {
      showFeedback('error', 'contact.err.form');
      return;
    }

    // Simula o envio. Para enviar de verdade, troque este setTimeout por um fetch()
    // para o seu backend / serviço de formulários (ex.: Formspree, Vercel Function).
    setSending(true);
    sendTimer.current = window.setTimeout(() => {
      setValues(EMPTY_FORM);
      setErrors({});
      setStatus({ nome: 'idle', email: 'idle', assunto: 'idle', mensagem: 'idle' });
      setSending(false);
      showFeedback('success', 'contact.success');
    }, FAKE_SEND_MS);
  };

  const inputClass = (field: FieldName) =>
    status[field] === 'error'
      ? 'field-input input-error'
      : status[field] === 'ok'
        ? 'field-input input-ok'
        : 'field-input';

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t('contact.label')}</span>
          <h1>
            <span style={{ color: 'var(--cyan)' }}>{t('contact.h1')}</span>
          </h1>
          <p style={{ maxWidth: '500px', marginTop: '16px' }}>{t('contact.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* INFO */}
            <div>
              <span className="section-label">{t('contact.info.label')}</span>
              <h2 className="section-title" style={{ marginBottom: '32px' }}>
                {t('contact.info.title')} <span>{t('contact.info.hl')}</span>
              </h2>

              <div className="contact-info-item">
                <div className="ci-icon">🎓</div>
                <div>
                  <div className="ci-label">{t('contact.inst.label')}</div>
                  <div className="ci-value">{t('contact.inst.val')}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">🏢</div>
                <div>
                  <div className="ci-label">{t('contact.partner.label')}</div>
                  <div className="ci-value">{t('contact.partner.val')}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">👥</div>
                <div>
                  <div className="ci-label">{t('contact.team.label')}</div>
                  <div className="ci-value">
                    Gabriel Augusto · Nycolas Melo
                    <br />
                    Rodrigo Banharelli · Tayna Jimenes
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">💼</div>
                <div>
                  <div className="ci-label">{t('contact.li.label')}</div>
                  <div className="ci-value">
                    <Link to="/integrantes" style={{ color: 'var(--cyan)' }}>
                      {t('contact.li.val')}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">⏱</div>
                <div>
                  <div className="ci-label">{t('contact.resp.label')}</div>
                  <div className="ci-value">{t('contact.resp.val')}</div>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="form-card">
              <div className="form-title">{t('contact.form.title')}</div>
              <form id="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field-group">
                    <label className="field-label" htmlFor="nome">
                      {t('contact.nome.label')}
                    </label>
                    <input
                      className={inputClass('nome')}
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder={t('contact.nome.ph')}
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur('nome')}
                    />
                    <span className="field-error">{errors.nome ? t(errors.nome) : ''}</span>
                  </div>
                  <div className="field-group">
                    <label className="field-label" htmlFor="email">
                      {t('contact.email.label')}
                    </label>
                    <input
                      className={inputClass('email')}
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('contact.email.ph')}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur('email')}
                    />
                    <span className="field-error">{errors.email ? t(errors.email) : ''}</span>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="assunto">
                    {t('contact.subject.label')}
                  </label>
                  <select
                    className={inputClass('assunto')}
                    id="assunto"
                    name="assunto"
                    value={values.assunto}
                    onChange={handleChange}
                    onBlur={handleBlur('assunto')}
                  >
                    <option value="">{t('contact.subject.ph')}</option>
                    {SUBJECTS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {t(s.label)}
                      </option>
                    ))}
                  </select>
                  <span className="field-error">{errors.assunto ? t(errors.assunto) : ''}</span>
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="mensagem">
                    {t('contact.msg.label')}
                  </label>
                  <textarea
                    className={inputClass('mensagem')}
                    id="mensagem"
                    name="mensagem"
                    placeholder={t('contact.msg.ph')}
                    value={values.mensagem}
                    onChange={handleChange}
                    onBlur={handleBlur('mensagem')}
                  />
                  <span className="field-error">{errors.mensagem ? t(errors.mensagem) : ''}</span>
                </div>

                <button type="submit" className="btn-submit" disabled={sending}>
                  {sending ? t('contact.sending') : t('contact.btn')}
                </button>

                {feedback && (
                  <div
                    id="form-feedback"
                    className={`form-feedback feedback-${feedback.type}`}
                    role={feedback.type === 'error' ? 'alert' : 'status'}
                  >
                    {t(feedback.key)}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
=======
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import ContactInfoList from '@/components/contato/ContactInfoList';
import ContactForm from '@/components/contato/ContactForm';
import { contactInfoItems } from '@/data/contato';

export default function Contato() {
  return (
    <>
      <PageHero
        label="Fale conosco"
        title={<span className="text-cyan">Contato</span>}
        description="Tem dúvidas sobre o projeto, a solução ou quer saber mais sobre a parceria SoulUp? Manda a mensagem."
      />
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="mb-3 block font-display text-xs uppercase tracking-[4px] text-cyan">
                Informações
              </span>
              <h2 className="mb-8 text-white">
                Onde <span className="text-cyan">nos achar</span>
              </h2>
              <ContactInfoList items={contactInfoItems} />
            </div>
            <ContactForm />
          </div>
        </Container>
>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
      </section>
    </>
  );
}
<<<<<<< HEAD
=======






>>>>>>> bcb44fe4966cfb971a1cb0fa7646f57681b9378e
