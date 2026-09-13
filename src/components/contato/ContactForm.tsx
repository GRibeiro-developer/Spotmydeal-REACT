import { useForm } from 'react-hook-form';
import type { ContactFormValues } from '@/types';
import FormInput from '@/components/ui/FormInput';
import FormTextarea from '@/components/ui/FormTextarea';
import FormSelect from '@/components/ui/FormSelect';
import { contactSubjects } from '@/data/contato';


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({ mode: 'onBlur' });

  async function onSubmit(data: ContactFormValues) {
    // Simula envio assíncrono — endpoint real fica para uma sprint de back-end.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info('Formulário de contato enviado:', data);
    reset();
  }

  return (
    <div className="rounded-lg border border-line bg-surface-2 p-8 sm:p-10">
      <div className="mb-7 border-b border-line pb-4 font-display text-xs uppercase tracking-[3px] text-cyan">
        — Envie sua mensagem
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
          <FormInput
            id="nome"
            label="Nome *"
            placeholder="Seu nome completo"
            error={errors.nome?.message}
            {...register('nome', { required: 'Este campo é obrigatório.' })}
          />
          <FormInput
            id="email"
            type="email"
            label="E-mail *"
            placeholder="seu@email.com"
            error={errors.email?.message}
            {...register('email', {
              required: 'Este campo é obrigatório.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Informe um e-mail válido.',
              },
            })}
          />
        </div>

        <FormSelect
          id="assunto"
          label="Assunto *"
          options={contactSubjects}
          error={errors.assunto?.message}
          {...register('assunto', { required: 'Selecione um assunto.' })}
        />

        <FormTextarea
          id="mensagem"
          label="Mensagem *"
          placeholder="Escreva sua mensagem aqui (mínimo 20 caracteres)..."
          error={errors.mensagem?.message}
          {...register('mensagem', {
            required: 'Este campo é obrigatório.',
            minLength: { value: 20, message: 'Mínimo de 20 caracteres.' },
          })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-sm bg-cyan py-4 font-display text-base font-extrabold uppercase tracking-[2px] text-surface transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {isSubmitSuccessful && !isSubmitting && (
          <div className="mt-4 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-4 py-3.5 text-sm text-emerald-400">
            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}
      </form>
    </div>
  );
}
