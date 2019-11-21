'use strict'

class SessionController {
    async create ({ request, auth }) {
        const { nm_email, nm_password } = request.all()

        const token = await auth.attempt(nm_email, nm_password)

        return token
    }
}

module.exports = SessionController
