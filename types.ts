export enum AppMode {
  DEV = 'DEV',      // Antigo Patient (Lado Técnico/Web)
  CLINIC = 'CLINIC', // Antigo Doctor (Lado Estratégico/Médico)
}

export interface TerminalEntry {
  id: string;
  timestamp: string;
  message: string;
  status: 'SUCCESS' | 'PROCESSING' | 'WARNING';
}

export interface ServiceModuleProps {
  id: string;
  title: string;
  description: string;
  status: string;
  isPremium?: boolean;
  mode: AppMode;
}