const rank = { HIGH: 3, MEDIUM: 2, LOW: 1 };

export function createNotificationStore(seed = []) {
  const notifications = seed.map(item => ({ read: false, ...item }));
  return {
    add(notification) { const item = { id: notification.id || `NTF-${notifications.length + 1}`, read: false, createdAt: notification.createdAt || new Date().toISOString(), ...notification }; notifications.push(item); return item; },
    list(owner, { unreadOnly = false } = {}) { return notifications.filter(item => (!owner || item.owner === owner) && (!unreadOnly || !item.read)).sort((a, b) => (rank[b.severity] || 0) - (rank[a.severity] || 0)); },
    markRead(id) { const item = notifications.find(notification => notification.id === id); if (!item) return false; item.read = true; return true; },
    unreadCount(owner) { return this.list(owner, { unreadOnly: true }).length; }
  };
}
