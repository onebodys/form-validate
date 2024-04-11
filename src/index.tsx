import { Hono } from 'hono'
import { entrySchema } from './valid.zod'
import { Layout, Form } from './components'

const app = new Hono()
app.use('/page/*', Layout)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/page/form', (c) => {
  return c.render(<Form errors={[]} />)
})

app.post('/page/form', async (c) => {
  const body = await c.req.parseBody()
  const parse = entrySchema.safeParse(body)

  if (parse.success) {
    return c.render(<div>正常に終了しました</div>)
  }
  return c.render(<Form errors={parse.error.errors} />)
})
export default app
