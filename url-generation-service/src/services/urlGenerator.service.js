'use strict';

const generateShortUrl = (longUrl) => {
    /*
    Example Workflow:

    User submits a request to generate short url for the long url: https://www.example.com/some/very/long/url/that/needs/to/be/shortened

    Generate an MD5 hash of the long URL. MD5 produces a 128-bit hash, typically a 32-character hexadecimal string: 1b3aabf5266b0f178f52e45f4bb430eb

    Instead of encoding the entire 128-bit hash, we typically use a portion of the hash (e.g., the first few bytes) to create a more manageable short URL.

    First 6 bytes of the hash: 1b3aabf5266b

    Convert these bytes to decimal: 1b3aabf5266b (hexadecimal) → 47770830013755 (decimal)

    Encode the result into a Base62 encoded string: DZFbb43
    */

    // Generate MD5 hash of the long URL
    const md5Hash = require('crypto').createHash('md5').
        update(longUrl).
        digest('hex');

    // Get the first 6 bytes of the hash
    const shortUrlHash = md5Hash.substring(0, 6);

    // Convert the hexadecimal hash to decimal

    const decimalHash = parseInt(shortUrlHash, 16);

    // Encode the decimal hash to Base62

    const base62Chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let base62String = '';

    while (decimalHash > 0) {
        base62String = base62Chars[decimalHash % 62] + base62String;
        decimalHash = Math.floor(decimalHash / 62);
    }

    return base62String;
};

module.exports = {
    generateShortUrl,
};