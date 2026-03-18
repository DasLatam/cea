const STORAGE_KEY = "daslatam_cea_session_id";

export function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";

  const existing = window.localStorage.getItem(STORAGE_KEY);
  if (existing) return existing;

  const sessionId =
    "cea_" +
    Math.random().toString(36).slice(2) +
    "_" +
    Date.now().toString(36);

  window.localStorage.setItem(STORAGE_KEY, sessionId);
  return sessionId;
}
