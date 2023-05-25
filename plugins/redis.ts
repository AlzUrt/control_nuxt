import { Redis } from '@upstash/redis/cloudflare'
export default defineNuxtPlugin(nuxtApp => {


  const redisClient = new Redis({
    url: 'https://mighty-hound-35343.upstash.io',
    token: 'AYoPACQgMTIxMWQ2NjMtMGE2Mi00ODc1LWFiNDktZjc1NTAxY2RiMWUwZjY1MDM1MWIxYTgxNDYzY2I1ZDU5NzQxNGQ3ZjE4N2M=',
  })

  return {
    provide: {
      redis: redisClient
    }
  }
})

