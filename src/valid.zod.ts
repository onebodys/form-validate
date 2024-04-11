import { z } from 'zod'

const NAME_MIN_LENGTH = 1
const NAME_MAX_LENGTH = 80
const TEL_REGEX = /^0\d{9,10}$/

export const entrySchema = z.object({
  name: z
    .string()
    .min(NAME_MIN_LENGTH, { message: 'お名前を入力してください' })
    .max(NAME_MAX_LENGTH, {
      message: `お名前は${NAME_MAX_LENGTH}文字以下で入力してください`,
    }),
  tel: z.string().regex(TEL_REGEX, {
    message:
      '電話番号は0から始まる10桁または11桁の数字ハイフンなしで入力してください',
  }),
})

export type EntrySchema = z.infer<typeof entrySchema>
