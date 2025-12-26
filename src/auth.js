// Dummy auth helpers for the demo app. Replace with real implementation
// (Firebase auth or your backend) for production use.
export const login = async (email, password) => {
  // Intentionally minimal: the demo accepts any credentials and simulates a response.
  // Keep the same contract (async) so consumers don't have to change.
  return new Promise((res) => setTimeout(res, 300));
};

export const logout = async () => {
  return new Promise((res) => setTimeout(res, 100));
};
