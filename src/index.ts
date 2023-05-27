import './config/module-alias'
import { env } from '@/config/env'
import { app } from '@/config/app'

app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`))
