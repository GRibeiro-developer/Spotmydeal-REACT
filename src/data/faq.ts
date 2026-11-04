import type { FaqEntry } from '@/types';

export const faqEntries: FaqEntry[] = [
  {
    id: 'o-que-e',
    category: 'Sobre o Projeto',
    question: 'O que é o SpotMyDeal?',
    answer:
      'O SpotMyDeal é um mecanismo de gamificação desenvolvido para o ecossistema da SoulUp. Ele funciona como um "loot tracker" — um sistema onde usuários disputam entre si a coleta de cupons de desconto disponibilizados por estabelecimentos parceiros, acumulando pontos a partir do descarte correto de resíduos.',
  },
  {
    id: 'relacao-soulup',
    category: 'Sobre o Projeto',
    question: 'Qual é a relação com a SoulUp?',
    answer:
      'A SoulUp é uma empresa focada em sustentabilidade — redução de CO₂ e upcycling de resíduos. Seus analytics identificaram dificuldade em atrair novos usuários e reativar perfis inativos. O SpotMyDeal nasceu como solução a esse problema, usando gamificação para criar engajamento real na plataforma.',
  },
  {
    id: 'academico-ou-real',
    category: 'Sobre o Projeto',
    question: 'Este é um projeto acadêmico ou produto real?',
    answer:
      'É um projeto acadêmico desenvolvido na FIAP, mas com base em dados e necessidades reais da SoulUp. O mecanismo foi idealizado para ser implementável no ecossistema real da empresa, com roadmap de piloto com parceiros definido.',
  },
  {
    id: 'sistema-pontos',
    category: 'Sobre o Loot Tracker',
    question: 'Como funciona o sistema de pontos?',
    answer:
      'O usuário acumula pontos ao realizar descartes corretos de resíduos nos pontos parceiros da SoulUp. Esses pontos são usados como "moeda" para competir pela captura de cupons disponíveis na arena de disputa do SpotMyDeal.',
  },
  {
    id: 'gatilhos',
    category: 'Sobre o Loot Tracker',
    question: 'O que são os gatilhos psicológicos do sistema?',
    answer:
      'O SpotMyDeal usa três gatilhos comprovados pela psicologia comportamental: Ancoragem — o usuário vê o que outros já conquistaram e cria uma referência do que "deveria ter"; Comparação — o ranking em tempo real transforma a posição em status social; e Disputa — cupons limitados e urgência de não perder para outros players.',
  },
  {
    id: 'conversao-cupons',
    category: 'Sobre o Loot Tracker',
    question: 'Como os cupons podem ser convertidos em benefícios?',
    answer:
      'Os cupons coletados podem ser convertidos em descontos diretos em estabelecimentos parceiros, crédito para pagamento de contas de energia elétrica, ou saldo para uso no transporte público. Em versões futuras, também estão previstos cashback e transferência para conta bancária.',
  },
  {
    id: 'quem-desenvolveu',
    category: 'Sobre a Equipe',
    question: 'Quem desenvolveu o SpotMyDeal?',
    answer:
      'O projeto foi desenvolvido por quatro estudantes da FIAP: Gabriel Augusto (RM 573120), Nycolas Melo Escobar (RM 573052), Rodrigo Banharelli de Souza (RM 570539) e Tayna Jimenes Silva (RM 569337). Conheça a equipe na página de integrantes.',
  },
  {
    id: 'contato-equipe',
    category: 'Sobre a Equipe',
    question: 'Como posso entrar em contato com a equipe?',
    answer:
      'Use o formulário na página de contato ou acesse os perfis do LinkedIn de cada integrante na página da equipe. Respondemos em até 48 horas.',
  },
];
