'use strict'

class SessionController {
    async create ({ request, auth }) {
        const data = request.all()

        const token = await auth.attempt(data.email, data.password)

        return token
    }
}

module.exports = SessionController
