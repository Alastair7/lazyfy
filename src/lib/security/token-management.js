class TokenManager {
  static validateToken(token, expiringTime) {
    // Does token exists?
    if (token === undefined) {
      // Get new access token

      return token;
    }

    // Is token expired?
    const currentTime = Math.round(Date.now() / 1000);

    if (currentTime > expiringTime) {
      // Refresh access token

      return token;
    }
  }
}
