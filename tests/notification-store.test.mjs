import assert from 'node:assert/strict';
import { createNotificationStore } from '../src/notification-store.mjs';

const store = createNotificationStore();
store.add({ id: 'NTF-1', owner: 'INFANTE', severity: 'LOW', title: 'Info' });
store.add({ id: 'NTF-2', owner: 'INFANTE', severity: 'HIGH', title: 'Aprobación' });
store.add({ id: 'NTF-3', owner: 'JANITORIAL', severity: 'MEDIUM', title: 'Operación' });
assert.equal(store.list('INFANTE')[0].id, 'NTF-2'); assert.equal(store.unreadCount('INFANTE'), 2);
assert.equal(store.markRead('NTF-2'), true); assert.equal(store.unreadCount('INFANTE'), 1); assert.equal(store.markRead('MISSING'), false);
console.log('NOTIFICATION STORE TEST OK · destinatario · severidad · lectura');
