import type { Member } from '@/types';
import gabrielAvatar from '@/assets/img/gabriel.jpeg';
import nycolasAvatar from '@/assets/img/nycolas.png';
import rodrigoAvatar from '@/assets/img/rodrigo.png';
import taynaAvatar from '@/assets/img/tayna.png';

export const members: Member[] = [
  {
    id: 'gabriel-augusto',
    name: 'Gabriel Augusto',
    rm: 'RM 573120',
    role: 'Front-End · Interface & Experiência do Usuário · Design de Gamificação',
    turma: '1TDSPW · FIAP 2026',
    avatar: gabrielAvatar,
    linkedinUrl: 'https://www.linkedin.com/in/gabrielribeiro-backend-developer/',
    githubUrl: 'https://github.com/Ribeirogab06',
  },
  {
    id: 'nycolas-escobar',
    name: 'Nycolas Escobar',
    rm: 'RM 573052',
    role: 'Produto & Estratégia',
    turma: '1TDSPW · FIAP 2026',
    avatar: nycolasAvatar,
    linkedinUrl: 'https://www.linkedin.com/in/nycolas-melo-escobar-983376391/',
    githubUrl: 'https://github.com/Nycolas10072006',
  },
  {
    id: 'rodrigo-banharelli',
    name: 'Rodrigo Banharelli',
    rm: 'RM 570539',
    role: 'Desenvolvimento Back-end',
    turma: '1TDSPW · FIAP 2026',
    avatar: rodrigoAvatar,
    linkedinUrl: 'https://www.linkedin.com/in/rodrigo-banharelli/',
    githubUrl: 'https://github.com/RodrigoBanharelli',
  },
  {
    id: 'tayna-jimenes',
    name: 'Tayna Jimenes',
    rm: 'RM 569337',
    role: 'UX Research · Comunicação & Conteúdo',
    turma: '1TDSPW · FIAP 2026',
    avatar: taynaAvatar,
    linkedinUrl: 'https://www.linkedin.com/in/tayna-jimenes/',
    githubUrl: 'https://github.com/TaynaJimenes',
  },
];

export function getMemberById(id: string | undefined): Member | undefined {
  return members.find((member) => member.id === id);
}
