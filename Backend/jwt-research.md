1. What is JWT?

JWT (JSON Web Token) is an open standard (RFC 7519) used to securely transmit information between two parties as a JSON object.

A JWT consists of three parts:
header.payload.signature

Header: Specifies the algorithm used (e.g., HS256).

Payload: Contains claims (data such as user_id, role, exp).

Signature: Ensures integrity — verifies that the token hasn’t been tampered with.

Example JWT (simplified):

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJpZCI6IjEyMyIsImV4cCI6MTY5MjI5OTk5OX0
.aSxQf8oMv8Xr9iUv7PB7GfY3S2y8gQ

2. Why is JWT Essential for Secure Web Applications?

JWT is widely used for authentication and authorization in modern web apps because:

Stateless Authentication: The server doesn’t need to store session data — it trusts the token itself.
 Integrity: Tokens are signed (and sometimes encrypted) so they can’t be easily forged.
 Scalable: Good for microservices and APIs since tokens work across multiple servers. Customizable: Can include roles, permissions, and expiration times in the payload.
Reduces Server Load: No session lookup in a database for every request.

3. How Does JWT Work with HTTP Headers?

JWTs are typically sent in the HTTP Authorization header as a Bearer token:

Client request:

GET /api/user/profile HTTP/1.1
Host: example.com
Authorization: Bearer <your_jwt_token_here>


Flow:

User logs in: Server verifies credentials and creates a JWT with user info and expiration time.

Server sends JWT: Client stores it (usually in localStorage, sessionStorage, or cookies).

Subsequent requests: Client attaches JWT in the Authorization header.

Server validates JWT: Checks signature, expiry, and claims.

If valid: Grants access. If not, returns 401 Unauthorized.

This ensures secure, stateless user sessions.

4. Real-World Example of JWT Misuse

Incident: Cross-Tenant Account Takeover in a SaaS Platform (2023)

Researchers found that a SaaS provider issued JWTs without including a tenant identifier (like tenant_id).

Attackers could take a valid JWT from one tenant and reuse it on another tenant by modifying request headers.

This allowed them to log in as users (or even admins) in other organizations — leading to cross-tenant data exposure.

Root Cause:

Missing tenant binding inside JWT claims.

Trusting client-controlled headers to decide which tenant a request belonged to.

Fix:

Added tenant_id as a claim inside the JWT and verified it on every request.

Removed reliance on client-supplied headers for security decisions.

Added proper email verification and stricter token validation.