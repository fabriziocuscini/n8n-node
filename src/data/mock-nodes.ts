import type { NodeStatus } from '../types';

/**
 * Mock node data for demonstration purposes
 */
export interface MockNodeData {
  name: string;
  subtitle: string;
  status: NodeStatus;
  serviceName: string;
  serviceIconName: 'n8n' | 'gmail' | 'telegram' | 'trello' | 'firecrawl';
}

export const mockNodes: MockNodeData[] = [
  {
    name: 'Automate your workflow',
    subtitle: 'automate: workflow',
    status: 'active',
    serviceName: 'n8n',
    serviceIconName: 'n8n',
  },
  {
    name: 'Get many messages',
    subtitle: 'getAll: message',
    status: 'pinned',
    serviceName: 'Gmail',
    serviceIconName: 'gmail',
  },
  {
    name: 'Send text message',
    subtitle: 'sendMessage: message',
    status: 'success',
    serviceName: 'Telegram',
    serviceIconName: 'telegram',
  },
  {
    name: 'Create a card',
    subtitle: 'create: card',
    status: 'issues',
    serviceName: 'Trello',
    serviceIconName: 'trello',
  },
  {
    name: 'Crawl a website',
    subtitle: 'crawl: website',
    status: 'deactivated',
    serviceName: 'Firecrawl',
    serviceIconName: 'firecrawl',
  },
];

