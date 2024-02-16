import { FastifyInstance } from 'fastify'

import { usersRoutes } from '@/http/controllers/users/routes'
import { gymsRoutes } from '@/http/controllers/gyms/routes'
import { checkInsRoutes } from '@/http/controllers/check-ins/routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes)

  app.register(gymsRoutes, {
    prefix: 'gyms',
  })

  app.register(checkInsRoutes, {
    prefix: 'check-ins',
  })
}
