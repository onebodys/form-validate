import { jsxRenderer } from 'hono/jsx-renderer'
import { css, Style } from 'hono/css'
import type { FC } from 'hono/jsx'
import type { ZodIssue } from 'zod'

export const Layout = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <Style>{css`
        .error-message {
          color: red;
        }
      `}</Style>
      <body>{children}</body>
    </html>
  )
})

export const Form: FC<{ errors: ZodIssue[] }> = (props) => {
  return (
    <form action="/page/form" method="post">
      <div>
        <label>名前</label>
        <input name="name" type="text" required />
      </div>
      <div>
        <label>電話番号</label>
        <input name="tel" type="text" required />
      </div>
      <ul>
        {props.errors.map((error) => (
          <li class="error-message">{error.message}</li>
        ))}
      </ul>
      <button type="submit">Submit</button>
    </form>
  )
}
