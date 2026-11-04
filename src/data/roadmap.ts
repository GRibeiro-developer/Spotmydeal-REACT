import type { RoadmapStep } from '@/types';

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 'discovery',
    title: 'Discovery & Analytics SoulUp',
    description:
      'Análise dos dados da empresa para identificar os perfis inativos e oportunidades de engajamento.',
    done: true,
  },
  {
    id: 'ideacao',
    title: 'Ideação do Mecanismo de Loot Tracker',
    description:
      'Definição do sistema de disputa, regras de coleta e conversão de pontos em benefícios reais.',
    done: true,
  },
  {
    id: 'sprint1',
    title: 'Desenvolvimento do Site (Sprint 1)',
    description: 'Construção da interface web completa com HTML, CSS e JavaScript — entrega FIAP.',
    done: true,
  },
  {
    id: 'sprint3',
    title: 'Migração para React + Vite + TypeScript (Sprint 3)',
    description:
      'Reestruturação completa da aplicação em componentes React reutilizáveis, com SPA e navegação via React Router.',
    done: true,
  },
  {
    id: 'integracao',
    title: 'Integração com App SoulUp',
    description: 'Conexão do mecanismo SpotMyDeal com o ecossistema real da SoulUp.',
    done: false,
  },
  {
    id: 'piloto',
    title: 'Piloto com Parceiros',
    description:
      'Teste com estabelecimentos parceiros reais e medição de impacto na reativação de usuários.',
    done: false,
  },
];
