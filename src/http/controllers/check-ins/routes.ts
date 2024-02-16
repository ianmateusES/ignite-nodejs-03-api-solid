import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'

import { create } from './create'
import { validate } from './validate'
import { history } from './history'
import { metrics } from './metrics'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/:gymId', create)
  app.get('/history', history)
  app.get('/metrics', metrics)
  app.patch(
    '/validate/:checkInId',
    { onRequest: [verifyUserRole('ADMIN')] },
    validate,
  )
}
