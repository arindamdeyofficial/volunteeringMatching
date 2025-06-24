// lib/api/notifications.ts

export async function fetchNotifications() {
  const res = await fetch('/api/notifications', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch notifications');
  return res.json();
}
