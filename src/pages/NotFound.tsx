import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mb-4 font-display text-8xl font-black text-cyan/20">404</span>
      <h1 className="mb-4 text-white">Página não encontrada</h1>
      <p className="mb-8 max-w-md text-ink-muted">
        A página que você procura não existe ou foi movida. Volte para a home e continue
        disputando cupons.
      </p>
      <Button to="/" variant="primary">
        ← Voltar para a Home
      </Button>
    </Container>
  );
}
