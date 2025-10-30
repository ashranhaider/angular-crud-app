import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  text: string;
  type: 'success' | 'error' | 'info' | 'warning';
  id: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  // use Angular signals to store current toasts
  toasts = signal<ToastMessage[]>([]);

  private nextId = 0;
  private defaultDuration = 3000; // 3 seconds

  show(text: string, type: ToastMessage['type'] = 'info', duration?: number) {
    const id = this.nextId++;
    const toast: ToastMessage = { id, text, type };
    this.toasts.update(list => [...list, toast]);

    // auto-remove after duration
    setTimeout(() => this.remove(id), duration ?? this.defaultDuration);
  }

  success(text: string) {
    this.show(text, 'success');
  }

  error(text: string) {
    this.show(text, 'error', 4000);
  }

  info(text: string) {
    this.show(text, 'info');
  }

  warning(text: string) {
    this.show(text, 'warning');
  }

  remove(id: number) {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
