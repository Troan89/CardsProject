import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'

import { Typography } from '@/components/ui/typography'
import { ZodEffects, ZodError, z } from 'zod'

export const imageSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats.'
  )

export type FileUploaderProps = {
  onError?: (error: Error | ZodError) => void
  schema?: ZodEffects<any>
  setFile: (file: File | null) => void
  trigger: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const ImageUploader = forwardRef<ElementRef<'input'>, FileUploaderProps>(
  ({ className, name, schema = imageSchema, setFile, trigger, ...rest }, ref) => {
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    useEffect(() => {
      toast.error(errorMessage)
    }, [errorMessage])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]

      if (file) {
        try {
          schema.parse(file)
          setFile(file)
          setErrorMessage(null)
        } catch (e) {
          const error = e as Error | ZodError

          if (error instanceof ZodError) {
            setErrorMessage('Error during image upload: ' + error.errors[0].message)
          } else {
            setErrorMessage('Other error: ' + error.message)
          }
          setFile(null)
        }
      } else {
        setFile(null)
      }
    }

    return (
      <Typography as={'label'} className={className} htmlFor={name}>
        {trigger}
        <input
          id={name}
          onChange={onChangeHandler}
          ref={ref}
          style={{ display: 'none' }}
          type={'file'}
          {...rest}
        />
      </Typography>
    )
  }
)
